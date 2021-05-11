const Directory = require('../models/Directory');

module.exports = {

    async store(req, res) {
        const {title} = req.body;
    
        const directory = await Directory.create({ title });
    
        if (!directory) {
          return res.status(400).json({ erro: 'Falha ao criar novo Diretório.' });
        }
    
        return res.json(directory);
      }
    };