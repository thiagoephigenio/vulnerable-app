const jwt = require("jsonwebtoken");

exports.sign = (payload) => jwt.sign(payload, process.env.APP_SECRET, {expiresIn:30});

exports.verify = (token) => jwt.verify(token, process.env.APP_SECRET);