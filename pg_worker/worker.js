const { Client } = require("pg");

async function processTickets() {
    const client = new Client({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
    });

    try {
        await client.connect();

        const result = await client.query(`
            UPDATE tickets
            SET status = 'processed'
            WHERE id IN (
                SELECT id FROM tickets WHERE status = 'open' LIMIT 1
            )
            RETURNING id, title, status
        `);

        if (result.rows.length > 0) {
            console.log("Ticket traité :", result.rows[0]);
        } else {
            console.log("Aucun ticket à traiter");
        }

        await client.end();

    } catch (error) {
        console.error("Erreur worker :", error.message);
    }
}

setInterval(processTickets, 5000);

console.log("Worker démarré : vérification toutes les 5 secondes");