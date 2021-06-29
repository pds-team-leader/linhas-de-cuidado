const supertest = require('supertest');
const app = require('../app');
require('dotenv').config();

const request = supertest(app);

let testId;
let auth;

describe('Endpoints CRUD de Diretórios', () => {
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
  it('Retorna erro ao ler diretório inexistente no guia de Diabetes', async (done) => {
    const responseOne = await request.get('/diabetes/-9');
    const responseAll = await request.get('/diabetes');

    expect(responseOne.status).toBe(404);
    expect(responseAll.body.length).toBe(0);

    done();
  });

  it('Retorna erro ao ler diretório inexistente no guia de Hipertensão', async (done) => {
    const responseOne = await request.get('/hipertensao/-9');
    const responseAll = await request.get('/hipertensao');

    expect(responseOne.status).toBe(404);
    expect(responseAll.body.length).toBe(0);

    done();
  });

  it('Retorna erro ao ler diretório inexistente em Conteúdos Extras', async (done) => {
    const responseOne = await request.get('/extras/-9');
    const responseAll = await request.get('/extras');

    expect(responseOne.status).toBe(404);
    expect(responseAll.body.length).toBe(0);

    done();
  });

  it('Cria um diretório no guia de diabetes', async (done) => {
    const response = await request
      .post('/diabetes')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste',
        description: 'Descrição',
        tagIds: [1, 2, 3],
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste');

    testId = response.body.id;

    done();
  });

  it('Lê um diretório no guia de diabetes', async (done) => {
    const response = await request
      .get(`/diabetes/${testId}`);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste');

    done();
  });

  it('Altera um diretório no guia de diabetes', async (done) => {
    const response = await request
      .put(`/diabetes/${testId}`)
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste Alterado',
        description: 'Descrição',
        tagIds: [2, 4, 5],
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste Alterado');

    done();
  });

  it('Apaga um diretório no guia de diabetes', async (done) => {
    const response = await request
      .delete(`/diabetes/${testId}`)
      .set('Authorization', `bearer ${auth}`);

    expect(response.status).toBe(200);

    done();
  });

  it('Lê todos os diretórios do guia de Diabetes', async (done) => {
    await request
      .post('/diabetes')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste',
        description: 'Descrição',
        tagIds: [1, 2, 3, 4, 5],
      });

    await request
      .post('/diabetes')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste 2',
        description: 'Descrição',
      });

    const response = await request.get('/diabetes');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
    done();
  });

  it('Cria um diretório no guia de hipertensao', async (done) => {
    const response = await request
      .post('/hipertensao')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste',
        description: 'Descrição',
        tagIds: [6, 7, 8],
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste');

    testId = response.body.id;

    done();
  });

  it('Lê um diretório no guia de hipertensao', async (done) => {
    const response = await request
      .get(`/hipertensao/${testId}`);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste');

    done();
  });

  it('Altera um diretório no guia de hipertensao', async (done) => {
    const response = await request
      .put(`/hipertensao/${testId}`)
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste Alterado',
        description: 'Descrição',
        tagIds: [6, 7, 9],
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste Alterado');

    done();
  });

  it('Apaga um diretório no guia de hipertensao', async (done) => {
    const response = await request
      .delete(`/hipertensao/${testId}`)
      .set('Authorization', `bearer ${auth}`);

    expect(response.status).toBe(200);

    done();
  });

  it('Lê todos os diretórios do guia de hipertensão', async (done) => {
    await request
      .post('/hipertensao')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste',
        description: 'Descrição',
        tagIds: [1, 2, 3, 4, 5],
      });

    await request
      .post('/hipertensao')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste 2',
        description: 'Descrição',
      });

    const response = await request.get('/hipertensao');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
    done();
  });

  it('Cria um diretório na guia de extras', async (done) => {
    const response = await request
      .post('/extras')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste',
        description: 'Descrição',
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste');

    testId = response.body.id;

    done();
  });

  it('Lê um diretório na guia de extras', async (done) => {
    const response = await request
      .get(`/extras/${testId}`);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste');

    done();
  });

  it('Altera um diretório na guia de extras', async (done) => {
    const response = await request
      .put(`/extras/${testId}`)
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste Alterado',
        description: 'Descrição',
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste Alterado');

    done();
  });

  it('Apaga um diretório na guia de extras', async (done) => {
    const response = await request
      .delete(`/extras/${testId}`)
      .set('Authorization', `bearer ${auth}`);

    expect(response.status).toBe(200);

    done();
  });

  it('Cria um diretório na guia de extras', async (done) => {
    await request
      .post('/extras')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste',
        description: 'Descrição',
      });

    await request
      .post('/extras')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: 'Título Teste 2',
        description: 'Descrição',
      });

    const response = await request.get('/extras');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
    done();
  });

  it('Retorna erro ao criar diretório inválido', async (done) => {
    const resDiabetes = await request
      .post('/diabetes')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: null,
        description: 'Descrição',
      });

    const resHipertensao = await request
      .post('/hipertensao')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: null,
        description: 'Descrição',
      });

    const resExtras = await request
      .post('/extras')
      .set('Authorization', `bearer ${auth}`)
      .send({
        title: null,
        description: 'Descrição',
      });

    expect(resDiabetes.status).toBe(400);
    expect(resHipertensao.status).toBe(400);
    expect(resExtras.status).toBe(400);

    done();
  });

  it('Retorna erro ao atualizar diretório inexistente', async (done) => {
    const resDiabetes = await request
      .put('/diabetes/-1')
      .set('Authorization', `bearer ${auth}`);

    const resHipertensao = await request
      .put('/hipertensao/-1')
      .set('Authorization', `bearer ${auth}`);

    const resExtras = await request
      .put('/extras/-1')
      .set('Authorization', `bearer ${auth}`);

    expect(resDiabetes.status).toBe(400);
    expect(resHipertensao.status).toBe(400);
    expect(resExtras.status).toBe(400);

    done();
  });

  it('Retorna erro ao apagar diretório inexistente', async (done) => {
    const resDiabetes = await request
      .delete('/diabetes/-1')
      .set('Authorization', `bearer ${auth}`);

    const resHipertensao = await request
      .delete('/hipertensao/-1')
      .set('Authorization', `bearer ${auth}`);

    const resExtras = await request
      .delete('/extras/-1')
      .set('Authorization', `bearer ${auth}`);

    expect(resDiabetes.status).toBe(400);
    expect(resHipertensao.status).toBe(400);
    expect(resExtras.status).toBe(400);

    done();
  });
});
