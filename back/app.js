const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const url = process.env.ATLAS_URI;
global.URL = url;

mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB connection successfully");
});

const user = require('./routes/user.js');
app.use('/user', user);

const article = require('./routes/article.js');
app.use('/article', article);

const payment = require('./routes/payment.js');
app.use('/payment', payment);

const appointment = require('./routes/appointment.js');
app.use('/appointment', appointment);

const feedback = require('./routes/feedback.js');
app.use('/feedback', feedback);

const product = require('./routes/product.js');
app.use('/product', product);

const chat = require('./routes/chat.js');
app.use('/chat', chat);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});