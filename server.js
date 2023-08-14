const express = require("express")
const app = express()
const cors = require("cors");

let playerHistory = [[null, null, null, null, null, null, null, null, null]]

app.use(cors({ origin: "*" }));
app.use(express.json())

app.post("/update", (req, res) => {
    const data = req.body.data
    playerHistory.push(data)
    res.json({msg: "Success"})
})

app.delete("/reset", (req, res) => {
    playerHistory = [[null, null, null, null, null, null, null, null, null]]
    res.json({msg: "Success"})
})

app.get("/history", (req, res) => {
    try {
        const data = playerHistory
        res.json({data})
    } catch (err) {
        res.send("Error")
    }
    
})

app.listen(9000, () => {
    console.log("Listening To Port 9000") 
})