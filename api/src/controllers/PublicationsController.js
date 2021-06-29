import Publication from '../models/Publication';

export default {
  async indexAll(req, res) {
    const publication = await Publication.findAll();

    if (!publication) {
      return res.status(404).json({ erro: 'Nenhuma publicação encontrada' });
    }
    return res.json(publication);
  },

  async indexOne(req, res) {
    const { id } = req.params;
    const publication = await Publication.findByPk(id);

    if (!publication) {
      return res.status(404).json({ erro: 'Nenhuma publicação encontrada' });
    }
    return res.json(publication);
  },

  async indexAllFromDir(req, res) {
    const { id } = req.params;
    const publications = await Publication.findAll({
      where: { directory: id },
    });

    if (!publications) {
      return res.status(404).json({ erro: 'Nenhuma publicação encontrada' });
    }
    return res.json(publications);
  },

  async store(req, res) {
    const {
      title, directory, description, isFromGuide,
    } = req.body;

    const file = {
      mimetype: '',
      filename: '',
      path: '',
    };

    if (req.file) {
      const { mimetype, filename, path } = req.file;
      file.mimetype = mimetype;
      file.filename = filename;
      file.path = path;
    }

    let publication;

    try {
      publication = await Publication.create({
        title,
        directory,
        description,
        isFromGuide,
        imageType: file.mimetype,
        imageName: file.filename,
        imagePath: file.path,
      });
    } catch (error) {
      return res.status(400).json({ erro: `Falha ao criar nova Publicação: ${error}` });
    }

    return res.json(publication);
  },

  async update(req, res) {
    const {
      title, directory, description, isFromGuide,
    } = req.body;
    const { id } = req.params;

    const publication = await Publication.findByPk(id);

    if (!publication) {
      return res.status(400).json({ erro: 'Publicação não encontrada' });
    }

    publication.title = title;
    publication.directory = directory;
    publication.description = description;
    publication.isFromGuide = isFromGuide;

    try {
      await publication.save();
    } catch (error) {
      return res.status(400).json({
        erro: `Falha ao atualizar a publicação: ${error}`,
      });
    }

    return res.json(publication);
  },

  async delete(req, res) {
    const { id } = req.params;

    const publication = await Publication.findByPk(id);

    if (!publication) {
      return res.status(400).json({ erro: 'Publicação não encontrado.' });
    }

    try {
      await publication.destroy();
    } catch (error) {
      return res.status(400).json({
        erro: `Falha ao apagar a publicação: ${error}`,
      });
    }

    return res.json(publication);
  },
};
