const { Client } = require("pg")

const SQL = `
    CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        text TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
    );
`

async function main(){
    console.log('seeding...');
    const client = new Client({
        connectionString: process.env.DATABASE_URL
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log("done")
}

main()