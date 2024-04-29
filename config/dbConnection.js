const mongoose = require("mongoose");
const expressAsyncHandler = require("express-async-handler");
require("dotenv").config();
const dbConnenction = expressAsyncHandler(async () => {
        try {
            const connect = await mongoose.connect(process.env.CONNECTION_STRING,
                //CONNECTION_STRING=mongodb+srv://Hari:hari3004@cluster0.k7rewxf.mongodb.net/Post?retryWrites=true&w=majority&appName=Cluster0
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                });
            console.log(connect.connection.name);

        }
        catch (err) {
            throw new Error(err.message)
            console.log("connection lost");
        }

    })
module.exports = dbConnenction;