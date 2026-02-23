const pool = require("./pool")


async function newMessage(message){
    const {text, user} = message
    const date = new Date().toISOString();
    console.log(date)
}