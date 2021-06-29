module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('tags', [
      {
        text: 'Classificação',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Diagnóstico',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Medicação',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Prevenção',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Consulta',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Exame',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Tratamento Farmacológico',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Tratamento Não Farmacológico',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Complicações',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Orientações',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Avaliação',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Insulina',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Monitoramento',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Rastreamento',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        text: 'Comorbidades',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
};
