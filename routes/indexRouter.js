const { Router } = require("express")
const path = require("node:path")
const router = Router()

router.get("/",(req,res) => {
    res.send("this is the home page my brother")
})

module.exports = router