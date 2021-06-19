const Directory = require('../models/Directory');

module.exports = {

  async store(req, res) {
    const { title, description } = req.body;
    const guide = 1;
    let directory;

    try {
      directory = await Directory.create({ title, description, guide });
    } catch (error) {
      return res.status(400).json({ erro: 'Falha ao criar novo Diretório.' });
    }

    return res.json(directory);
  },

  async indexAll(req, res) {
    const directory = await Directory.findAll({
      where: {
        guide: 1,
      },
    });

    if (!directory) {
      return res.json({ erro: 'Nenhum Diretório encontrado.' });
    }

    return res.json(directory);
  },

  async indexOne(req, res) {
    const { id } = req.params;

    const directory = await Directory.findByPk(id);

    if (!directory) {
      return res.json({ erro: 'Diretório não encontrado.' });
    }

    return res.json(directory);
  },

  async update(req, res) {
    const { title, description } = req.body;
    const { id } = req.params;

    const directory = await Directory.findOne({ where: { id } });

    if (!directory) {
      return res.status(400).json({ erro: 'Diretório não encontrado.' });
    } if (directory.guide !== 1) {
      return res.status(400).json({ erro: 'Diretório não pertence a esse guia.' });
    }

    directory.title = title;
    directory.description = description;

    try {
      await directory.save();
    } catch (error) {
      return res.status(400).json({
        erro: error,
      });
    }

    return res.json(directory);
  },

  async delete(req, res) {
    const { id } = req.params;

    const directory = await Directory.findOne({ where: { id } });

    if (!directory) {
      return res.status(400).json({ erro: 'Diretório não encontrado.' });
    } if (directory.guide !== 1) {
      return res.status(400).json({ erro: 'Diretório não pertence a esse guia.' });
    }

    try {
      directory.destroy();
    } catch (error) {
      return res.status(400).json({
        erro: error,
      });
    }

    return res.json(directory);
  },
};
