const Charity = require("../models/charityModel");
const bcrypt = require('bcrypt');
const errorHandler = require("../middleware/500");

const allCharities = (req, res) => {
    Charity.find({ is_delete: false })
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((error) => {
            errorHandler(error, req, res);
        });
};

const oneCharity = async (req, res) => {
    const id = req.params.id;
    const user = await Charity.find({ _id: id, is_delete: false });
    res.json(user);
};

const newCharity = async (req, res, next) => {

    const { username, email, password, phone } = req.body;

    try {
        const user = await Charity.findOne({ email: email });
        if (user) {
            return res.status(401).send("Email already taken");
        }
    } catch (error) {
        errorHandler(error, req, res);
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const newCharity = new Charity({
        role: 'Charity',
        username: username,
        email: email,
        password: hashedPwd,
        phone: phone,
        active: false,
    });

    const user = await newCharity.save();

    req.body = user;
    next();
};

const updateCharity = async (req, res) => {
    const userId = req.params.id;
    const updatedUserData = req.body;
    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10)
    const user = await Charity.findByIdAndUpdate(userId, updatedUserData, { new: true });
    const updatedUser = await user.save();
    res.json(updatedUser);
};

const deleteCharity = async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedUserData = req.body;

        updatedUserData.is_delete = true;

        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);

        const user = await Charity.findByIdAndUpdate(userId, updatedUserData, {
            new: true,
        });

        const updatedUser = await user.save();

        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update Charity' });
    }
};


module.exports = {
    allCharities,
    newCharity,
    oneCharity,
    updateCharity,
    deleteCharity,
}; 