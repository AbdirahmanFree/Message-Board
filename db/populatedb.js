const { Client } = require("pg")

const SQL = `
    CREATE TABLE IF NOT EXISTS messages(
        id SERIES PRIMARY KEY,
        text VARCHAR ( 255 ),
        username VARCHAR ( 255 ),
        date DATE,

    )
        
`