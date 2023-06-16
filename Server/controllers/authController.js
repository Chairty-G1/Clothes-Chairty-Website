const Admin = require("../models/adminModel");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const errorHandler = require("../middleware/500");

const createToken = (req, res) => {
  
  const accessToken = jwt.sign(
    JSON.parse(JSON.stringify({userId : req.body?.admin_id || req.body?.donor_id || req.body?.charities_id, role : req.body.role})),
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1w" }
  );
  res.json({ Token : accessToken, data : req.body})
}

const Login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await Admin.findOne({ email: email });

    if (!user || !(await bcrypt.compare(password, user.password))) {

      res.status(401).send("incorrect email or password");
    }
    req.body = user;
    next();
    
  } catch (error) {
    errorHandler(error, req, res);
  }

};


module.exports = {
  Login,
  createToken,
}; 