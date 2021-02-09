const db = require("../../config/database");

class Task {
  create(user_id, title, description, isComplete) {
     return db.query(
      `INSERT INTO tasks(
        user_id, 
        title, 
        iscomplete,
        description) 
        VALUES (${user_id}, '${title}', ${isComplete}, '${description}')`
    );
    // console.log(`${user_id} ${title} ${description} ${isComplete}`);
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
