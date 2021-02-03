const db = require("../../config/database");

class Task {
  async create(user_id, title, description, iscomplete) {
    await db.query(
      `INSERT INTO tasks(
        user_id, 
        title, 
        description, 
        iscomplete) 
        VALUES (${user_id}, '${title}', '${description}', ${iscomplete})`
    );
    console.log("tarefa criada com sucesso!");
  }
  async remove(id) {
    const query = "DELETE FROM tasks WHERE id =" + id;
    await db.query(query).then((result) => {
      const { rows: users } = result;
      console.log(users);
    });
    console.log("tarefa removida com sucesso!");
  }
  async getAll() {
    const query = "SELECT * FROM tasks WHERE id > " + "1";
    return db.query(query)
  }
}
module.exports = new Task();
