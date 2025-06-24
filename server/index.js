const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');

const userRoute = require("./routes/userRoute");
const recipeRoute = require("./routes/recipeRoute");

app.use(express.json());
app.use(cors());
require('./config/db');

app.get('/', (req, res) => {
    res.send("Home page");
})

app.use('/api/user', userRoute);
app.use('/api/recipe',  recipeRoute);

app.listen(PORT, () => {
    console.log(`Server is runing on the PORT http:localhost:${PORT}`);
});