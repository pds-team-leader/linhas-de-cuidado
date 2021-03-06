import Tag from '../models/Tag';

export default {
  async indexAll(req, res) {
    const tag = await Tag.findAll({
      include: {
        association: 'directories',
        attributes: ['id', 'title', 'description', 'guide'],
        through: {
          attributes: [],
        },
      },
    });

    if (!tag) {
      return res.status(400).json({ erro: 'Nenhuma tag encontrada' });
    }
    return res.json(tag);
  },

  async indexOne(req, res) {
    const { id } = req.params;
    const tag = await Tag.findByPk(id, {
      include: {
        association: 'directories',
        attributes: ['id', 'title', 'description', 'guide'],
        through: {
          attributes: [],
        },
      },
    });

    if (!tag) {
      return res.status(400).json({ erro: 'Nunhuma tag encontrada' });
    }
    return res.json(tag);
  },

  async store(req, res) {
    const { text } = req.body;
    let tag;

    try {
      tag = await Tag.create({ text });
    } catch (error) {
      return res.status(400).json({ erro: `Falha ao criar nova Tag: ${error}` });
    }
    return res.json(tag);
  },

  async update(req, res) {
    const { text } = req.body;
    const { id } = req.params;

    let tag;

    try {
      tag = await Tag.findByPk(id);
      tag.text = text;
    } catch (error) {
      return res.status(400).json({ erro: 'Tag não encontrada' });
    }

    try {
      await tag.save();
    } catch (error) {
      return res.status(400).json({
        erro: `Falha ao atualizar a tag: ${error}`,
      });
    }
    return res.json(tag);
  },

  async delete(req, res) {
    const { id } = req.params;
    const tag = await Tag.findByPk(id);

    if (!tag) {
      return res.status(400).json({ erro: 'Tag não encontrado.' });
    }

    try {
      await tag.destroy();
    } catch (error) {
      return res.status(400).json({
        erro: `Falha ao apagar a tag: ${error}`,
      });
    }
    return res.json(tag);
  },
};
