const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

module.exports = {
  // controle do login

  // controle dos administradores
  async store(req, res) {
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt(10);

    let admin;

    try {
      const hashedPassword = await bcrypt.hash(password, salt);
      admin = await Admin.create({ email, password: hashedPassword });
    } catch (error) {
      return res.status(400).json({ erro: 'Falha ao criar novo Administrador.' });
    }

    return res.json(admin);
  },

  // async indexAll(req, res) {
  //   const admin = await Admin.findAll();

  //   if (!admin) {
  //     return res.json({ erro: 'Nenhum Administrador encontrado.' });
  //   }

  //   return res.json(admin);
  // },

  async indexOne(req, res) {
    const { id } = req.params;
    let admin;

    try {
      admin = await Admin.findByPk(id);
    } catch (error) {
      return res.status(400).json({ erro: 'Administrador não encontrado.' });
    }

    return res.json(admin);
  },

  // async update(req, res) {
  //   const { email } = req.body;
  //   const { id } = req.params;

  //   const admin = await Admin.findOne({ where: { id } });

  //   if (!admin) {
  //     return res.status(400).json({ erro: 'Administrador não encontrado.' });
  //   }

  //   admin.email = email;

  //   try {
  //     await admin.save();
  //   } catch (error) {
  //     return res.status(400).json({
  //       erro: error,
  //     });
  //   }

  //   return res.json(admin);
  // },

  async delete(req, res) {
    const { id } = req.params;

    const admin = await Admin.findOne({ where: { id } });

    if (!admin) {
      return res.status(400).json({ erro: 'Administrador não encontrado.' });
    }

    try {
      await admin.destroy();
    } catch (error) {
      return res.status(400).json({
        erro: error,
      });
    }

    return res.json(admin);
  },
};
