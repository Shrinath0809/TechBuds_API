const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const userRouter = require("./routes/usersRoutes");
require("dotenv").config();

const PORT = process.env.PORT || 5001;

app.use(cors());

// register template engine
app.set("view engine", 'ejs');

async function db() {
    await mongoose.connect('mongodb://127.0.0.1:27017/TechBuds')
    .then(() => {
        console.log("Data base is created");
    })
    .catch ((err) => {
        console.log(err);
    })
}
db();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'))

app.use('/app',userRouter);

app.listen(PORT, (err) => {
    if(err) console.log(err);
    console.log(`This server is running on PORT ${PORT}`);
})