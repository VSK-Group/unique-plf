const request = require('supertest');
const app = require('../../src/app');
let employees = {};

describe('POST /api/employees', () => {
  it('creates a new employee', async () => {
    const response = await request(app)
      .post('/api/employees')
      .send({
        name: 'John Doe 3',
        job: 'Developer',
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('name', 'John Doe 3');
    expect(response.body).toHaveProperty('job', 'Developer');
  });

  it('returns a conflict error if employee already exists', async () => {
    await request(app)
      .post('/api/employees')
      .send({
        name: 'Jane Doe 6',
        job: 'Manager',
      });

    const response = await request(app)
      .post('/api/employees')
      .send({
        name: 'Jane Doe 6',
        job: 'Manager',
      });

    expect(response.statusCode).toBe(409);
    expect(response.body.message).toBe('Employee already exists');
  });


});