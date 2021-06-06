const supertest = require('supertest');
const app = require('../app');

const request = supertest(app);

let testId;

describe('Endpoints CRUD de Publicações', () => {
  it('Cria uma publicação', async (done) => {
    const response = await request
      .post('/publications')
      .send({
        title: 'Título Teste',
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
      .get(`/publications/${testId}`);

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste');

    done();
  });

  it('Altera uma publicação existente', async (done) => {
    const response = await request
      .put(`/publications/${testId}`)
      .send({
        title: 'Título Teste Alterado',
        description: 'Descrição Teste Alterado',
        isFromGuide: true,
      });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Título Teste Alterado');

    done();
  });

  it('Apaga uma publicação existente', async (done) => {
    const response = await request.delete(`/publications/${testId}`);

    expect(response.status).toBe(200);

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
});
