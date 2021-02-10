const User = require("../models/User");
const jwt = require("../../config/jwt");

class SessionController {
  signup(req, res) {
    if (req.body.user === "thiago" && req.body.pwd === "123") {
      const user = { id: 1 };
      try {
        const token = jwt.sign({ user: user.id });
        res.status(200).send({ user, token });
      } catch (error) {
        console.log(error);
        res.status(500).send("Login inválido!");
      }
    }
  }

  async login(req, res) {
    const [, hash] = req.headers.authorization.split(" ");
    const [email, password] = Buffer.from(hash, "base64").toString().split(":");

    await User.findOne({ where: { email: email, password: password } })
      .then((userResult) => {
        if (!userResult) {
          res.status(401).send();
        }
        console.log("logado");
        const token = jwt.sign({ user: userResult.id });
        res.cookie("authcookie", token);

        res.status(200).send(userResult);
      })
      .catch(() => res.status(401));
  }

  logout(req, res) {
    console.log(req.headers.authorization);
    res.status(200).send("logout successful !");
  }
}

module.exports = new SessionController();
