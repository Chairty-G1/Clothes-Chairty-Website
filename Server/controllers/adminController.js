const Admin = require("../models/adminModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const errorHandler = require("../middleware/500");

const allAdmins = (req, res) => {
    Admin.find()
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((error) => {
            errorHandler(error, req, res);
        });
};

const oneAdmin = async (req, res) => {
    const id = req.params.id;
    const user = await Admin.find({ _id: id });
    res.json(user);
};

const newAdmin = async (req, res) => {

    const { firstName, email, password } = req.body;
    const token = jwt.sign(
        { email: email, password: password },
        secretKey,
        { expiresIn: "1h" }
    ); // Generate JWT

    const hashPassword = await bcrypt.hash(password, 5)
    const user = new Admin({ firstName: firstName, email: email, password: hashPassword });
    const addUser = await user.save();
    res.json([addUser, token]);
};

const updateAdmin = async (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;
    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 5)
    const user = await Admin.findByIdAndUpdate(userId, updatedUserData, { new: true });
    const updatedUser = await user.save();
    res.json(updatedUser);
};

const deleteAdmin = async (req, res) => {
    const userId = req.params.id;
    await Admin.findByIdAndDelete(userId);
    res.status(204).json(Admin);
};

module.exports = {
    allAdmins,
    newAdmin,
    oneAdmin,
    updateAdmin,
    deleteAdmin,
}; 