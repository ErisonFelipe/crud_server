const User = require('../model/user.model');
const bcrypt = require('bcrypt');

const UserController = {
    create: async (req, res) => {
        let {
            name,
            email,
            password,
            dateNascimento,
            phone
        } = req.body;
        let hash = bcrypt.hashSync(password, 6);
        let user = await User.create({
            name,
            email,
            password: hash,
            dateNascimento,
            phone
        });
        res.status(201).json({
            message: user + " Criado com sucesso!"
        })
    },
    findAll: async (req, res) => {
        let user = await User.findAll()
        res.status(200).json(user)
    },
    update: async (req, res) => {
        let user = await User.findByPk(req.params.id);
        let userNew = await user.update(req.body);
        res.status(200).json(userNew);
    },
    delete: async (req, res) => {
        let users = await User.findByPk(req.params.id);
        await users.destroy();
        res.json({
            message: users + " deletado com sucesso!"
        });
    },
    findByPk: async (req, res) => {
        let user = await User.findByPk(req.params.id);
        res.status(200).json(user);
    }
};

module.exports = UserController;