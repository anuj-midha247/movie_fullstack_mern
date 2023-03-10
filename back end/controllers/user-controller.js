import User from "../models/User";
import bcrypt from "bcryptjs";
import Bookings from "../models/Bookings";

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
    const { name, email, password } = req.body;
    if(!name && name.trim()==="" && !email && email.trim()==="" && !password && password.trim()===""){
        return res.status(422).json({ message: "Invaild Inputs" });
    }
    const hashedPassword = bcrypt.hashSync(password);
    let user;
    try {
        user = await User.findByIdAndUpdate(id, { name, email, password: hashedPassword });
    } catch (error) {
        return console.log(error);
    }
    if (!user) {
        return res.status(500).json({ message: "Something Went Wrong" });
    }
    return res.status(200).json({ message: "Updated Successfully" });
}

export const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndRemove(id);
    } catch (error) {
        return console.log(error);
    }
    if (!user) {
        return res.status(500).json({ message: "Something Went Wrong" });
    }
    return res.status(200).json({ message: "Deleted Successfully" });
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    if(!email && email.trim()==="" && !password && password.trim()===""){
        return res.status(422).json({ message: "Invaild Inputs" });
    }
    let existingUser;
try {
    existingUser = await User.findOne({ email: email });
} catch (error) {
    return console.log(error);
    }
    if (!existingUser) {
        return res.status(400).json({ message: "Unable to find this user from Id" });
    }
    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ message: "Incorrect Password" });
    }
    return res.status(200).json({ message: "Login Successful" });
}

export const getBookingsofUser=async(req, res, next) => {
    const id = req.params.id;
    let bookings;
    try {
        bookings = await Bookings.find({ user: id });
    } catch (error) {
        return console.log(error);
    }
    if (!bookings) {
        return res.status(500).json({ message: "Unable To Get Bookings" });
    }
    return res.status(200).json({ bookings });
}