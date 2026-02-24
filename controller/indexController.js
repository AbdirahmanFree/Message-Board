const db = require("../db/queries")

exports.listMessagesGet = (req,res) => {
        db.listAllMessages().then((response) => {
            console.log(response)
            res.render("index", {
                title: "Mini Message Board",
                messages: response
            })
        })
    }

exports.newMessageGet = (req,res) => {
    res.render("form");
}

exports.newMessagePost = (req,res) => {
    db.newMessage(req.body).then((response) => {
        res.redirect("/");
    })
}


