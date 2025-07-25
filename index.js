const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res)  => {
    res.json({message: "deneme"})
})

app.listen(PORT, () => {
    console.log(`${PORT} portunda çalışıyor`)
})