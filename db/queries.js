const pool = require("./pool")


async function newMessage(message){
    const {user, text} = message
    await pool.query("INSERT INTO messages(username,text) VALUES ($1,$2);",[user,text])

}

async function listAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages;")
    return rows
}

module.exports = {
    newMessage,
    listAllMessages
}