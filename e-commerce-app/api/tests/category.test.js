const request = require('supertest');
const app = require('../server'); // server dosyanızın yolu

let categoryId;

describe('Category CRUD Operations', () => {
  it('should create a new category', async () => {
    const res = await request(app)
      .post('/api/categories')
      .send({ name: 'TEST_CATEGORY' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
    categoryId = res.body.id;
  });

  it('should retrieve all categories', async () => {
    const res = await request(app).get('/api/categories');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('categories');
  });

  it('should retrieve a single category', async () => {
    const res = await request(app).get(`/api/categories/${categoryId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'TEST_CATEGORY');
  });

  it('should update a category', async () => {
    const res = await request(app)
      .put(`/api/categories/${categoryId}`)
      .send({ name: 'UPDATED_TEST_CATEGORY' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'UPDATED_TEST_CATEGORY');
  });

  it('should delete a category', async () => {
    const res = await request(app).delete(`/api/categories/${categoryId}`);
    expect(res.statusCode).toEqual(204);
  });
});
