const User = require('../model/user.model');
const bcrypt = require('bcrypt');

const LoginController = {
    login: async (req, res) => {
        let {email, password} = req.body;
        let user = await User.findOne({
            where:{
                email: email
            }})
            if (!user){
                res.status(400).json({message: "Email não encontrado!"})
            }
            if(!await bcrypt.compareSync(password, user.password)){
                res.status(400).json({message: "Senha inválida!"})
            }
            res.status(200).json({message: "Usuário logado com sucesso!"})
    }
};

module.exports = LoginController;

