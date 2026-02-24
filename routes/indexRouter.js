const { Router } = require("express")
const path = require("node:path")
const router = Router()

const indexController = require("../controller/indexController")

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

router.get("/",indexController.listMessagesGet)
router.get("/new",indexController.newMessageGet)
router.post("/new",indexController.newMessagePost)


module.exports = router