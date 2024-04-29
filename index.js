const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require("./config/dbConnection");
const PORT = process.env.PORT || 8000; 
require("dotenv").config();
dbConnection();
app.use(express.json());
app.use(cors(
    {
        origin:"*"
    }
));
app.use("/", require("./Routes/Routes"));
app.use(require("./Error/errorHandler"));
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`)); 
