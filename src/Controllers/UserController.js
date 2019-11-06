const User = require('../Models/User');

module.exports = {
    async store(req, res) {
        const {Name, Username, Pass, UserType} = req.body;

        //checando se o usuário já foi cadastrado na nossa base de dados
        const userExists = await User.findOne({ user: Username }); //método do mongoose para encontrar 1
        if(userExists){
            return res.json(userExists);    
        }

        const _user = await User.create({
            name: Name,
            user: Username,
            password: Pass, 
            user_type: UserType
        }); 

        return res.json(_user);    
    },

    async checkUser(req, res) {
        const {Username, Pass} = req.body;
	
        const checkedUser = await User.findOne({user: Username, password: Pass});
        if (checkedUser) {
            return res.json(checkedUser);
        }
	
       	else {
            return res.json({ message: "User not found.", success: false });
        }
        
    }
}