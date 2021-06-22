const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const authConfig = require('../config/authconfig.json');
const Admin = require('../models/Admin');

const router = express.Router();

function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {expiresIn: 36000});
};

router.post('/register', async (req, res) => {
    const { email } = req.body;
    
    try {
        if (await Admin.findAll({
            where: {
              email: email
            }
          })) {
            return res.status(400).send({error: 'Administrador já cadastrado'});
        }
        const admin = await Admin.create(req.body);
        admin.password = undefined;

        return res.send({
            admin,
            token: generateToken({id: admin.id})
        });
        
    } catch (err){
        return res.status(400).send( {error: 'Falha ao tentar cadastrar.'});
    }
});

router.post('/authenticate', async (req, res) => {
    const {email, password} = req.body;
    console.log('recebi email e senha');
    const admin = await Admin.findOne({ where: { email: email } });;
    console.log('busquei usuario no banco');
    if (!admin){
        return res.status(400).send({error: 'Administrador não encontrado.'});
    }
    console.log('achei o usuario no banco');
    console.log(admin.password);
    
    // if(!await bcrypt.compare(password, admin.password)){
    //     return res.status(400).send({error: 'Senha inválida.'});
    // }
    console.log('validei a senha');
    res.send({
        admin,
        token: generateToken({id: admin.id })});
});
        /* TO DO FORGOT PASSWORD AND RESET PASSWORD (convert mongo to postgres)
router.post('/forgot_password', async (req, res) => {
    const {email} = req.body;

    try {
        const admin = await Admin.findOne({where: {email: email}});

        if (!admin){
            return res.status(400).send({error: 'Administrador não encontrado.'});
        }
        const token = crypto.randomBytes(20).toString('hex');
        const agora = new Date();
        agora.setHours(agora.getHours() + 1); 

        await Admin.update({ lastName: "Doe" }, {
            where: {
              lastName: null
            }
          });

        mailer.sendMail({
            to: email,
            from: 'sistema@linhasdecuidado.com.br',
            template: 'auth/forgot_password',
            context: {token}
        }, (err) => {
            if(err) {
                return res.status(400).send({error: 'Não foi possível enviar o email para recuperação de senha.'})
            }

            return res.send();
        });

    } catch (err) {
        return res.status(400).send({error: 'Erro ao tentar recuperar senha, por favor tente novamente.'});
    }
})
 
router.post('/reset_password', async (req, res) => {
    const { email, token, password } = req.body;

    try {
        const user = await User.findOne({ where: {email: email}}).select('+passwordResetToken passwordResetExpires');

        if(!user) {
            return res.status(400).send({error: 'User not found.'});
        }
        if (token !== user.passwordResetToken){
            return res.status(400).send({ error: 'Token Inválido.' });
        }
        const agora = new Date();
        if(agora > user.passwordResetExpires) {
            return res.status(400).send({ error: 'Token Expirado.' });
        }

        user.password = password;

        await user.save();
        res.send();

    } catch(err) {
        return res.status(400).send({ error: 'cannot reset password'});
    }
})
*/
module.exports = app => app.use('/auth', router);