const { Admin } = require("../models/models");

class AdminController {
  async check(req, res) {
    try {
      const { login, password } = req.body;
      let availability = await Admin.findOne({
        where: { email: login, password: password },
      });
      return res.json(!!availability);
    } catch (e) {
      console.log(e);
    }
  }
}

async function create(email, password) {
  let availability = await Admin.findOne({
    where: { email: "admin@example.com" },
  });
  if (!availability) {
    await Admin.create({ email, password });
  }
}

create("admin@example.com", "passwordsecret");

module.exports = new AdminController();
