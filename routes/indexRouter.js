const { Router } = require("express")
const path = require("node:path")
const router = Router()


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


router.get("/",(req,res) => {
    res.render("index", {title: "Mini Message Board",messages: messages})
})

router.get("/new", (req,res) => {
    res.render("form")
})

router.post("/new",(req,res) => {
    const user = req.body.user
    const text = req.body.text
    messages.push({text:text, user:user, added: new Date()})
    res.redirect("/")
})

module.exports = router