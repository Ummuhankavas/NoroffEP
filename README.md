E-Commerce Project - Exam Project Noroff Backend

## Application Installation and Usage Instructions

1. Download the project files.
2. Open the project folder via VS Code.
3. Create a MySQL database using the script provided in the `DATABASE` section.
4. Create a `.env` file in the root directory and paste the Environment Variables listed below into it.
5. Install npm dependencies by running `npm install` in the terminal. This will install all required libraries and packages.
6. Start the application by running `npm start` in the terminal.
7. Populate the tables in the database using the scripts provided in the `DATA INSERTS` section individually.
8. Grant database access using the script provided in the `DATABASE ACCESS` section.
9. Open your browser and navigate to `localhost:3000` to access the application.

## Environment Variables
DB_USERNAME=root
DB_PASSWORD=Nisan1453.
DB_NAME=ecommerce
DB_HOST=localhost
PORT=3000
DB_USE_ENV_VARIABLE=false
JWT_SECRET=a124af77c13620318083d15cb610c7783a40bdadd1883c8db1c50bf28bb4461581ec34943e6be07a5d4b7831724e42ce6828fb88520
979f1204b75993f4fed83
JWT_ACCESS_EXPIRATION_MINUTES=120
JWT_REFRESH_EXPIRATION_DAYS=120
JWT_RESET_PASSWORD_EXPIRATION_MINUTES=10
JWT_VERIFY_EMAIL_EXPIRATION_MINUTES=10
DIALECT="mysql"
DIALECTMODEL="mysql2"
API_URL="http://backend.restapi.co.za/items/products"


## Additional Libraries/Packages

- **mysql2**: Node.js driver for MySQL.
- **sequelize**: Promise-based Node.js ORM for various databases.
- **dotenv**: Loads environment variables from a .env file into process.env.
- **nodemon**: Tool that automatically restarts the Node.js application when file changes are detected.
- **express-session**: Middleware for storing session data on the client side.
- **passport**: Authentication middleware for Node.js.

## NodeJS Version Used

v18.16.1

## DATABASE

```sql
CREATE DATABASE ecommerce;
-- Products table
INSERT INTO products (category, brand, imgurl, name, description, price, quantity, date_added) VALUES
('Phones', 'Apple', 'http://images.restapi.co.za/products/product-iphone.png', 'iPhone 6s Plus 16Gb', '3D Touch. 12MP photos. 4K video.', 649, 2, '2022-05-01');

-- Users table
INSERT INTO users (username, email, password, firstname, lastname, address, telephonenumber, role, membershipStatus) VALUES
('johndoe', 'johndoe@example.com', 'hashed_password_123', 'John', 'Doe', '123 Main Street', '555-1234', 'user', 'bronze');
-- Brands table
INSERT INTO brands (name) VALUES ('Apple'), ('Samsung'), ('Huawei');

-- Orders table
INSERT INTO orders (user_id, product_id, quantity, total_price, status, created_at) VALUES
(1, 1, 1, 649, 'pending', NOW()),
(1, 2, 1, 799, 'completed', NOW()),
(2, 1, 2, 1298, 'pending', NOW());

Testing
Unit tests are implemented using the Jest testing framework and Supertest library. Run npm test to execute the tests.

Acknowledgments
Noroff documentation for database and API operations,JWT.
YouTube tutorials for assistance with admin panel development.
ChatGPT for guidance on folder structure, database connection, and API operations.


Thank you NOROFF BACKEND....












