const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/404');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();
//
app.use(express.json());
app.use(express.static('./public'));



//routes 


app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = 3000;
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is running on port ${port}...`))

    } catch (error) {
        console.log(error);
    }
}

start();