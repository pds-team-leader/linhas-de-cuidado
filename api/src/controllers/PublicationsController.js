import Publication from '../models/Publications';

export default {
  async indexAll(req, res) {
    const publication = await Publication.findAll();

    if (!publication) {
      return res.status(400).json({ erro: 'Nenhuma publicação encontrada' });
    }
    return res.json(publication);
  },

  async indexAllFromDirectory(req, res) {
    const { directoryId } = req.params;
    const publication = await Publication.findAll({ where: { directoryId } });

    if (!publication) {
      return res.status(400).json({ erro: 'Nenhuma publicação encontrada' });
    }
    return res.json(publication);
  },

  async indexOne(req, res) {
    const { id } = req.params;
    const publication = await Publication.findByPk(id);

    if (!publication) {
      return res.status(400).json({ erro: 'Nenhuma publicação encontrada' });
    }
    return res.json(publication);
  },

  async store(req, res) {
    const { title, description, isFromGuide } = req.body;

    const publication = await Publication.create({ title, description, isFromGuide });

    if (!publication) {
      return res.json({ erro: 'Erro ao criar publicação' });
    }
    return res.json(publication);
  },

  async update(req, res) {
    const { title, description, isFromGuide } = req.body;
    const { id } = req.params;

    const publication = await Publication.findByPk(id);

    if (!publication) {
      return res.status(400).json({ erro: 'Publicação não encontrada' });
    }

    publication.title = title;
    publication.description = description;
    publication.isFromGuide = isFromGuide;

    try {
      await publication.save();
    } catch (error) {
      return res.statys(400).json({
        erro: `Falha ao atualizar a publicação: ${error}`,
      });
    }

    return res.json(publication);
  },

  async delete(req, res) {
    const { id } = req.params;

    const publication = await Publication.findByPk(id);

    if (!publication) {
      return res.status(400).json({ erro: 'Publicação não encontrada' });
    }
    return res.json(publication);
  },
};
