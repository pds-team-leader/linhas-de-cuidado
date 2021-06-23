const supertest = require('supertest');
const app = require('../app');
require('dotenv').config();

const request = supertest(app);

let testId;
let auth;

describe('Endpoints Admin', () => {
  it('Realiza Login', async (done) => {
    const res = await request
      .post('/auth/authenticate')
      .send({
        email: process.env.ADMIN1_EMAIL,
        password: process.env.ADMIN1_PASSWORD,
      });

    expect(200);

    auth = res.body.token;

    done();
  });
  it('Cria um administrador', async (done) => {
    const response = await request
      .post('/admin')
      .set('Authorization', `bearer ${auth}`)
      .send({
        email: process.env.TESTE_EMAIL,
        password: process.env.TESTE_PASSWORD,
      });

    expect(response.status).toBe(200);
    expect(response.body.email).toBe(process.env.TESTE_EMAIL);

    testId = response.body.id;
    done();
  });

  it('Lê um administrador', async (done) => {
    const response = await request
      .get(`/admin/${testId}`);

    expect(response.status).toBe(200);
    expect(response.body.email).toBe(process.env.TESTE_EMAIL);

    done();
  });

  it('Apaga um administrador', async (done) => {
    const response = await request
      .delete(`/admin/${testId}`)
      .set('Authorization', `bearer ${auth}`);

    expect(response.status).toBe(200);

    done();
  });

  it('Retorna erro ao criar administrador inválido', async (done) => {
    const response = await request
      .post('/admin')
      .set('Authorization', `bearer ${auth}`)
      .send({
        email: null,
        password: null,
      });

    expect(response.status).toBe(400);

    done();
  });

  it('Retorna erro ao buscar administrador inexistente', async (done) => {
    const response = await request
      .get('/admin/test');

    expect(response.status).toBe(400);

    done();
  });

  it('Retorna erro ao apagar administrador inexistente', async (done) => {
    const response = await request
      .delete('/admin/-1')
      .set('Authorization', `bearer ${auth}`);

    expect(response.status).toBe(400);

    done();
  });
});
