const express = require("express");
const bodyParser = require('body-parser');
const passport = require('passport');
const port = process.env.PORT || 3000;
const mysql = require("mysql2");
const config = require("./config/config");
const jwt = require("jsonwebtoken");
const { sequelize, syncDatabase } = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const membershipRoutes = require('./routes/membershipRoutes');

require('dotenv').config();
require('./config/passport');

const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());





app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/brands', brandRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);
app.use('/membership', membershipRoutes);
app.use('/users', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


let connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database
});

connection.connect(function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("Connected to MySQL");
});


// Database connection and server start
sequelize.authenticate().then(async () => {
    await syncDatabase();
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Example app listening on port ${port}`);
    });
  }).catch(error => {
    console.error('Unable to connect to the database:', error);
  });

app.get("/", (req, res) => res.send("Hello Noroff Backend!"));




module.exports = app;