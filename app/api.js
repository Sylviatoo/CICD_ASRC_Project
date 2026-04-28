const http = require("http");
const { Client } = require("pg");

async function connectWithRetry(retries = 10) {
    for (let i = 1; i <= retries; i++) {
        try {
            const client = new Client({
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DB || "testdb",
            });

            await client.connect();
            console.log("DB connected");
            return client;

        } catch (err) {
            console.log(`DB not ready, retry ${i}/${retries}`);
            await new Promise(r => setTimeout(r, 2000));
        }
    }

    throw new Error("DB connection failed after retries");
}

(async () => {
    const client = await connectWithRetry();

    const server = http.createServer((req, res) => {
        res.end("My API is working");
    });

    server.listen(3000, () => {
        console.log("API running on port 3000");
    });
})();