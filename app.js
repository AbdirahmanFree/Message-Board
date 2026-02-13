const express = require("express")
const path = require("node:path")
const indexRouter = require("./routes/indexRouter")

const app = express()

app.use("/",indexRouter)

const port = 4000
app.listen(port,() => {
    console.log(`server running on http://localhost:${port}`)
})