import Directory from '../models/Directory';
import Tag from '../models/Tag';

export default {

  async store(req, res) {
    const { title, description, tagIds } = req.body;
    const guide = 1;

    let directory;
    const erros = [];

    try {
      directory = await Directory.create({
        title, description, guide,
      });
    } catch (error) {
      erros.push('Falha ao criar novo Diretório.');
    }

    try {
      tagIds.map(async (id) => {
        const tag = await Tag.findByPk(id);

        if (!tag) {
          erros.push('Uma ou mais das tags selecionadas não foi encontrada.');
        }
        await directory.addTag(tag);
      });
    } catch (error) {
      erros.push(error);
    }

    if (erros.length > 0) {
      return res.status(400).json({ erros });
    }

    return res.json(directory);
  },

  async indexAll(req, res) {
    const directory = await Directory.findAll({
      where: {
        guide: 1,
      },
      include: {
        association: 'tags',
        as: 'tags',
        attributes: ['id', 'text'],
        through: {
          attributes: [],
        },
      },
    });

    if (!directory) {
      return res.json({ erro: 'Nenhum Diretório encontrado.' });
    }

    return res.json(directory);
  },

  async indexOne(req, res) {
    const { id } = req.params;

    const directory = await Directory.findByPk(id, {
      include: [
        {
          model: Tag,
          as: 'tags',
          attributes: ['id', 'text'],
          through: {
            attributes: [],
          },
        },
      ],
    });

    if (!directory) {
      return res.json({ erro: 'Diretório não encontrado.' });
    }

    return res.json(directory);
  },

  async update(req, res) {
    const {
      title, description, tagIds,
    } = req.body;
    const { id } = req.params;

    let directory;

    try {
      directory = await Directory.findByPk(id);
      directory.title = title;
      directory.description = description;
    } catch (error) {
      return res.status(400).json({ erro: 'Diretório não encontrado.' });
    }

    let tags = await directory.getTags();
    tags = tags.map((tag) => tag.dataValues.id);

    const addedTags = tagIds.filter((tagId) => !tags.includes(tagId));
    const removedTags = tags.filter((tag) => !tagIds.includes(tag));

    try {
      await directory.removeTags(removedTags);
      await directory.addTags(addedTags);
    } catch (error) {
      return res.status(400).json({
        erro: error,
      });
    }

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
