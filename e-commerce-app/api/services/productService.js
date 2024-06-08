const axios = require('axios');
const { Product } = require('../models');

const NOROFF_API_URL = 'http://backend.restapi.co.za/items/products';

async function populateDatabaseWithProducts() {
    try {
        // Fetch product data from Noroff API
        const response = await axios.get(NOROFF_API_URL);
        const products = response.data;

        // Check existing products in the database
        const existingProducts = await Product.findAll();
        if (existingProducts.length > 0) {
            console.log('Database already populated with products.');
            return;
        }

        // Populate database with products
        for (const product of products) {
            await Product.create({
                id: product.id,
                category: product.category,
                brand: product.brand,
                imgurl: product.imgurl,
                name: product.name,
                description: product.description,
                price: product.price,
                quantity: product.quantity,
                date_added: product.date_added,
            });
        }

        console.log('Product data has been successfully added to the database.');
    } catch (error) {
        console.error('An error occurred while updating the database:', error);
        throw new Error('An error occurred while updating the database.');
    }
}

module.exports = { populateDatabaseWithProducts };
