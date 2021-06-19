const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

let testId;

describe('Endpoints CRUD de Diretórios', () => {
  it('Cria um diretório no guia de diabetes', async (done) => {
    const response = await request
      .post('/diabetes')
      .send({
        title: 'Título Teste',
        description: 'Descrição',
        guide: 0,
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
      .send({
        title: 'Título Teste Alterado',
        description: 'Descrição',
        guide: 0,
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste Alterado');

    done();
  });

  it('Apaga um diretório no guia de diabetes', async (done) => {
    const response = await request.delete(`/diabetes/${testId}`);

    expect(response.status).toBe(200);

    done();
  });

  it('Lê todos os diretórios no guia de diabetes', async (done) => {
    await request
      .post('/diabetes')
      .send({
        title: 'Título Teste',
        description: 'Descrição',
        guide: 0,
      });

    await request
      .post('/diabetes')
      .send({
        title: 'Título Teste 2',
        description: 'Descrição',
        guide: 0,
      });

    const response = await request.get('/diabetes');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
    done();
  });

  it('Cria um diretório no guia de hipertensao', async (done) => {
    const response = await request
      .post('/hipertensao')
      .send({
        title: 'Título Teste',
        description: 'Descrição',
        guide: 0,
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
      .send({
        title: 'Título Teste Alterado',
        description: 'Descrição',
        guide: 0,
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste Alterado');

    done();
  });

  it('Apaga um diretório no guia de hipertensao', async (done) => {
    const response = await request.delete(`/hipertensao/${testId}`);

    expect(response.status).toBe(200);

    done();
  });

  it('Lê todos os diretórios no guia de hipertensao', async (done) => {
    await request
      .post('/hipertensao')
      .send({
        title: 'Título Teste',
        description: 'Descrição',
        guide: 0,
      });

    await request
      .post('/hipertensao')
      .send({
        title: 'Título Teste 2',
        description: 'Descrição',
        guide: 0,
      });

    const response = await request.get('/hipertensao');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
    done();
  });

  it('Retorna erro ao criar diretório inválido', async (done) => {
    const resDiabetes = await request
      .post('/diabetes')
      .send({
        title: null,
        description: 'Descrição',
        guide: 0,
      });

    const resHipertensao = await request
      .post('/hipertensao')
      .send({
        title: null,
        description: 'Descrição',
        guide: 0,
      });

    expect(resDiabetes.status).toBe(400);
    expect(resHipertensao.status).toBe(400);

    done();
  });

  it('Retorna erro ao atualizar diretório inexistente', async (done) => {
    const resDiabetes = await request.put('/diabetes/-1');
    const resHipertensao = await request.put('/hipertensao/-1');

    expect(resDiabetes.status).toBe(400);
    expect(resHipertensao.status).toBe(400);

    done();
  });

  it('Retorna erro ao apagar diretório inexistente', async (done) => {
    const resDiabetes = await request.delete('/diabetes/-1');
    const resHipertensao = await request.delete('/hipertensao/-1');

    expect(resDiabetes.status).toBe(400);
    expect(resHipertensao.status).toBe(400);

    done();
  });
});
