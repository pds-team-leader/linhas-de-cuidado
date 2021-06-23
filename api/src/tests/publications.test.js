const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

let testId;
let auth;

describe('Endpoints CRUD de Publicações', () => {
  it('Realiza Login', async (done) => {
    const res = await request
      .post('/auth/authenticate')
      .send({
        email: 'admin1',
        password: 'admin1',
      });

    expect(200);

    auth = res.body.token;

    done();
  });
  it('Cria uma publicação', async (done) => {
    const response = await request
      .post('/publications')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste',
        directory: 1,
        description: 'Descrição Teste',
        isFromGuide: false,
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste');

    testId = response.body.id;

    done();
  });

  it('Lê uma publicação existente', async (done) => {
    const response = await request
      .get(`/publications/${testId}`)
      .set('Authorization', `bearer ${auth}`);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste');

    done();
  });

  it('Altera uma publicação existente', async (done) => {
    const response = await request
      .put(`/publications/${testId}`)
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste Alterado',
        directory: 1,
        description: 'Descrição Teste Alterado',
        isFromGuide: true,
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste Alterado');

    done();
  });

  it('Apaga uma publicação existente', async (done) => {
    const response = await request
      .delete(`/publications/${testId}`)
      .set('Authorization', `bearer ${auth}`);

    expect(response.status).toBe(200);

    done();
  });

  it('Lê todas as publicações existentes', async (done) => {
    await request
      .post('/publications')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste 1',
        directory: 1,
        description: 'Descrição Teste 1',
        isFromGuide: true,
      });

    await request
      .post('/publications')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste 2',
        directory: 2,
        description: 'Descrição Teste 2',
        isFromGuide: true,
      });

    const response = await request.get('/publications');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
    done();
  });
  it('Retorna erro ao criar publicação inválida', async (done) => {
    const response = await request
      .post('/publications')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: null,
        description: null,
      });

    expect(response.status).toBe(400);

    done();
  });

  it('Retorna erro ao atualizar publicação inexistente', async (done) => {
    const response = await request
      .put('/publications/-1')
      .set('Authorization', `bearer ${auth}`);

    expect(response.status).toBe(400);

    done();
  });

  it('Retorna erro ao apagar publicação inexistente', async (done) => {
    const response = await request
      .delete('/publications/-1')
      .set('Authorization', `bearer ${auth}`);

    expect(response.status).toBe(400);

    done();
  });
});
