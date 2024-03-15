const express = require("express");
const app = express();
const PORT = 5000

app.get('/', (req, res) => {
    res.send("Welcome to the node API");
})

app.listen(PORT, () => {
    console.log(`This server is running on PORT ${PORT}`);
})