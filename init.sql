CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    title TEXT,
    status TEXT
);

INSERT INTO tickets (title, status) VALUES ('test ticket', 'open');