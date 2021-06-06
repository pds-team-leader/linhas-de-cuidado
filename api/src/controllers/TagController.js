import Tag from '../models/Tag';

export default {
  async indexAll(req, res) {
    const tag = await Tag.findAll();

    if (!tag) {
      return res.status(400).json({ erro: 'Nenhuma tag encontrada' });
    }
    return res.json(tag);
  },

  async indexOne(req, res) {
    const { id } = req.params;
    const tag = await Tag.findByPk(id);

    if (!tag) {
      return res.status(400).json({ erro: 'Nunhuma tag encontrada' });
    }
    return res.json(tag);
  },

  async store(req, res) {
    const { text, link } = req.body;
    const tag = await Tag.create({
      text, link,
    });

    if (!tag) {
      return res.json({ erro: 'Erro ao criar tag' });
    }
    return res.json(tag);
  },

  async update(req, res) {
    const { text, link } = req.body;
    const { id } = req.params;
    const tag = await Tag.findByPk(id);

    if (!tag) {
      return res.status(400).json({ erro: 'Tag não encontrada' });
    }

    tag.text = text;
    tag.link = link;

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
      tag.destroy();
    } catch (error) {
      return res.status(400).json({
        erro: `Falha ao apagar a tag: ${error}`,
      });
    }
    return res.json(tag);
  },
};
