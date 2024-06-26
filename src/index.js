const express = require("express")
const app = express()
const { wwwRedirect } = require("./shared/www.js")
const { forceHTTPS } = require("./shared/https.js")
const { robots } = require("./shared/robots.js")

app.disable("x-powered-by")
app.enable("trust proxy")
app.use(wwwRedirect)
app.use(forceHTTPS)
app.use(express.json())

app.use("/robots.txt", robots)
app.use(express.static("public"))

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`App listening on port ${port}. Try http://localhost:${port}`)
})
