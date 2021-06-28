const supertest = require('supertest');
const app = require('../app');
require('dotenv').config();

const request = supertest(app);

let testId;
let auth;

describe('Endpoints CRUD de tags', () => {
  it('Realiza Login', async (done) => {
    const res = await request
      .post('/auth/authenticate')
      .send({
        email: process.env.ADMIN1_EMAIL,
        password: process.env.ADMIN1_CLEAN_PASSWORD,
      });

    expect(200);

    auth = res.body.token;

    done();
  });
  it('Cria uma tag', async (done) => {
    const response = await request
      .post('/tag')
      .set('Authorization', `bearer ${auth}`)
      .send({
        text: 'Teste 1',
        link: '',
      });

    expect(response.status).toBe(200);
    expect(response.body.text).toBe('Teste 1');

    testId = response.body.id;

    done();
  });

  it('Lê uma tag existente', async (done) => {
    const response = await request
      .get(`/tag/${testId}`);

    expect(response.status).toBe(200);
    expect(response.body.text).toBe('Teste 1');

    done();
  });

  it('Altera uma tag existente', async (done) => {
    const response = await request
      .put(`/tag/${testId}`)
      .set('Authorization', `bearer ${auth}`)
      .send({
        text: 'Teste 1 Alterado',
        link: '',
      });

    expect(response.status).toBe(200);
    expect(response.body.text).toBe('Teste 1 Alterado');

    done();
  });

  it('Apaga uma tag existente', async (done) => {
    const response = await request
      .delete(`/tag/${testId}`)
      .set('Authorization', `bearer ${auth}`);

    expect(response.status).toBe(200);

    done();
  });

  it('Lê todas as tags existentes', async (done) => {
    await request
      .post('/tag')
      .set('Authorization', `bearer ${auth}`)
      .send({
        text: 'T01',
        link: '',
      });

    await request
      .post('/tag')
      .set('Authorization', `bearer ${auth}`)
      .send({
        text: 'T02',
        link: '',
      });

    const response = await request.get('/tag');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
    done();
  });

  it('Retorna erro ao criar tag inválida', async (done) => {
    const response = await request
      .post('/tag')
      .set('Authorization', `bearer ${auth}`)
      .send({
        text: null,
        link: null,
      });

    expect(response.status).toBe(400);

    done();
  });

  it('Retorna erro ao atualizar tag inexistente', async (done) => {
    const response = await request
      .put('/tag/-1')
      .set('Authorization', `bearer ${auth}`);

    expect(response.status).toBe(400);

    done();
  });

  it('Retorna erro ao apagar tag inexistente', async (done) => {
    const resHipertensao = await request
      .delete('/tag/-1')
      .set('Authorization', `bearer ${auth}`);

    expect(resHipertensao.status).toBe(400);

    done();
  });
});
