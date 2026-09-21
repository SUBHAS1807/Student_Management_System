const express = require("express");
const app = express();
const mongoose = require("mongoose");
const studentRoutes = require("../backend/routes/studentRoute")
const cors = require("cors");
require("dotenv").config();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use("/",studentRoutes);

app.get("/", (req, res) => {
    res.send("Hello");
});

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB Connect Successfully")

})
    .catch((error) => {
        console.log("MongoDb Doesnot Connect",error);
    })




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})