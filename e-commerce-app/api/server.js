const express = require("express");
const bodyParser = require('body-parser');
const passport = require('passport');
const mysql = require("mysql2");
const config = require("./config/config");
const { sequelize,syncDatabase } = require('./config/database');
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

// Routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);
app.use('/membership', membershipRoutes);
app.use('/users', userRoutes);

// Swagger UI
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// MySQL Connection
sequelize.authenticate().then(async () => {
    console.log('Database connection has been established successfully.');
    // Sync database models
    await sequelize.sync({ force: true }); // Bu satır development aşamasında kullanabilirsiniz. force: true, tabloları yeniden oluşturur.
    console.log('Database synchronized successfully.');
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});

app.get('/', (req, res) => res.send('Hello Noroff Backend!'));

module.exports = app;
