const request = require('supertest');
const app = require('../server'); // server dosyanızın yolu

let categoryId;
let productId;

beforeAll(async () => {
  const res = await request(app)
    .post('/api/categories')
    .send({ name: 'TEST_CATEGORY' });
  categoryId = res.body.id;
});

afterAll(async () => {
  await request(app).delete(`/api/categories/${categoryId}`);
});

describe('Product CRUD Operations', () => {
  it('should create a new product', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({
        name: 'TEST_PRODUCT',
        description: 'Test Description',
        price: 9.99,
        quantity: 10,
        CategoryId: categoryId
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    productId = res.body.id;
  });

  it('should retrieve all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('products');
  });

  it('should retrieve a single product', async () => {
    const res = await request(app).get(`/api/products/${productId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'TEST_PRODUCT');
  });

  it('should update a product', async () => {
    const res = await request(app)
      .put(`/api/products/${productId}`)
      .send({ name: 'UPDATED_TEST_PRODUCT' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'UPDATED_TEST_PRODUCT');
  });

  it('should delete a product', async () => {
    const res = await request(app).delete(`/api/products/${productId}`);
    expect(res.statusCode).toEqual(204);
  });
});
