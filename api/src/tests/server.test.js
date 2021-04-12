const request = require('supertest');
const server = require('../server');

describe('GET Endpoints', () => {
  it('GET', async (done) => {
    const expectedResponse = {};
    request(server)
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.body).toEqual(expectedResponse);
        done();
      });
  });
});
