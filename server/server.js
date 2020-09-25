const express = require('express')
const app = express()
const port = 3000
console.log(__dirname)

// this thing calls for the files that are being used so there is clear distinguish b/t what to serve and not
app.use("/",express.static(__dirname+"/public"))

app.get('/', (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
    res.sendFile(__dirname+"/public/style.css")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})