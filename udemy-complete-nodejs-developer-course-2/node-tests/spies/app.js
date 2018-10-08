const db = require('./db');

module.exports = {
  handleSignup: (email, password) => {
    // email exists?
    db.saveUser({ email, password });
    // send welcome email
  }
};
