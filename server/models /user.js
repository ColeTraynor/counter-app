import db from "../shared/db";

class User() {
  getUser(username) {
    return db.users[username];
  }


}

export default new User();
