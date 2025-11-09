const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.login = async (req, resp) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return resp.status(400).json({
                status: "fail",
                message: "Please provide the username and password",
            });
        }

        const user = await User.findOne({ username }).select('+password');

        if (!user || !(await user.comparePassword(password))) {
            return resp.status(401).json({
                status: "fail",
                message: "Invalid Credentials",
            });
        }

        const payload = { id: user._id };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        resp.status(200).json({
            status: "Success",
            token,
        });
    } catch (error) {
        console.error('LOGIN ERROR: ', error);
        resp.status(500).json({
            status: "error",
            message: "An internal server error occured",
        });
    }
};