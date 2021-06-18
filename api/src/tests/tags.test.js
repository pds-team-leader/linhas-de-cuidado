const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

let testId;

describe('Endpoints CRUD de tags', () => {
  it('Cria uma tag', async (done) => {
    const response = await request
      .post('/tag')
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
      .send({
        text: 'Teste 1 Alterado',
        link: '',
      });

    expect(response.status).toBe(200);
    expect(response.body.text).toBe('Teste 1 Alterado');

    done();
  });

  it('Apaga uma tag existente', async (done) => {
    const response = await request.delete(`/tag/${testId}`);

    expect(response.status).toBe(200);

    done();
  });

  it('Lê todas as tags existentes', async (done) => {
    await request
      .post('/tag')
      .send({
        text: 'T01',
        link: '',
      });

    await request
      .post('/tag')
      .send({
        text: 'T02',
        link: '',
      });

    const response = await request.get('/tag');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
    done();
  });

  it('Lê todas as publicações existentes', async (done) => {
    await request
      .post('/publications')
      .send({
        title: 'Título Teste 1',
        description: 'Descrição Teste 1',
        isFromGuide: true,
      });

    await request
      .post('/publications')
      .send({
        title: 'Título Teste 2',
        description: 'Descrição Teste 2',
        isFromGuide: true,
      });

    const response = await request.get('/publications');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
    done();
  });
  it('Retorna erro ao criar tag inválida', async (done) => {
    const response = await request
      .post('/tag')
      .send({
        text: null,
        link: null,
      });

    expect(response.status).toBe(400);

    done();
  });

  it('Retorna erro ao atualizar tag inexistente', async (done) => {
    const response = await request.put('/tag/-1');

    expect(response.status).toBe(400);

    done();
  });

  it('Retorna erro ao apagar tag inexistente', async (done) => {
    const resHipertensao = await request.delete('/tag/-1');

    expect(resHipertensao.status).toBe(400);

    done();
  });
});
