const db = require("../db/queries")

exports.listMessagesGet = (req,res) => {
        db.listAllMessages().then((response) => {
            console.log(response)
        })
    }


