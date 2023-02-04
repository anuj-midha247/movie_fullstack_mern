import User from "../models/User";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (error) {
        return console.log(error);
    }
    if (!users) {
        return res.status(404).json({ message: "Unexpected Error Occured" });
    }
    return res.status(200).json({ users });
}

export const addUser = async (req, res, next) => {
    const { name, email, password } = req.body;
    if(!name && name.trim()==="" && !email && email.trim()==="" && !password && password.trim()===""){
        return res.status(422).json({ message: "Invaild Inputs" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    let user;
    try {
        user = new User({ name, email, password:hashedPassword });
        user = await user.save();
    } catch (error) {
        return console.log(error);
    }
    if (!user) {
        return res.status(500).json({ message: "Unexpected Error Occured" });
    }
    return res.status(201).json({ user });
}

export const updateUser = async (req, res, next) => {
    const id = req.params.id;
    
}