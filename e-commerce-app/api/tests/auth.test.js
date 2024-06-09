const request = require('supertest');
const app = require('../server'); 

describe('Auth Operations', () => {
  it('should login with valid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'validuser@example.com',
        password: 'validpassword'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should not login with invalid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'invaliduser@example.com',
        password: 'invalidpassword'
      });
    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty('error');
  });
});
