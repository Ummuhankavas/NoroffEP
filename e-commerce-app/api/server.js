const express = require("express");
const bodyParser = require('body-parser');
const passport = require('passport');
const mysql = require("mysql2");
const config = require("./config/config");
const { sequelize,syncDatabase } = require('./config/database');
const userServices = require('./services/userService');
const authController = require('./controllers/authController');
const utilityRoutes = require('./routes/utilityRoutes');


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
app.use('/utility', utilityRoutes);
// Swagger UI
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// MySQL Connection
sequelize.authenticate().then(async () => {
    console.log('Database connection has been established successfully.');
    // Sync database models
    await sequelize.sync({ force: true }); 
    console.log('Database synchronized successfully.');
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});



const userData = {
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "123456",
  "firstname": "John",
  "lastname": "Doe",
  "address": "123 Main Street",
  "telephonenumber": "555-1234",
  "role": "user",
  "membershipStatus": "bronze"
}
  
  const createNewUser = async () => {
    try {
      const newUser = await userServices.createUser(userData);
      console.log('New user created:', newUser);
    } catch (error) {
      console.error('Failed to create user:', error.message);
    }
  };
  
  createNewUser();

app.get('/', (req, res) => res.send('Hello Noroff Backend!'));
app.post('/register', authController.registerUser);

module.exports = app;
