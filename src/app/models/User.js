const db = require("../../config/database");
const jwt = require("jsonwebtoken");

class User {
  async create() {
    await db.query(
      `INSERT INTO users(
        id, 
        name_usr, 
        email, 
        password) 
        VALUES (${id}, '${name_usr}', '${email}', ${password})`
    );
    console.log("User criado com sucesso!");
  }
  async remove() {
    const query = "DELETE FROM users WHERE id =" + id;
    await db.query(query).then((result) => {
      const { rows: users } = result;
      console.log(users);
    });
    console.log("User removido com sucesso!");
  }
  getAll() {
    const query = "SELECT * FROM users WHERE id > " + "1";
    return db.query(query);
  }

  findOne(email, password) {
    const query =
      `SELECT * FROM users WHERE email = '` +
      email +
      `' AND password = '` +
      password +
      `'`;
    return db.query(query);
  }
}
module.exports = new User();
