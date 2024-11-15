const User = require("../models/User");

exports.register = async (req, res) => {
  const { username, password } = req.body;
  try {
    await User.create({ username, password });
    res.redirect("/login");
  } catch (error) {
    res.render("register", { error: "Erro ao registrar o usuário." });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username, password } });
  if (user) {
    req.session.user = user;
    res.redirect("/mural");
  } else {
    res.render("login", { error: "Usuário ou senha inválidos!" });
  }
};

exports.logout = (req, res) => {
  req.session.destroy();
  res.redirect("/");
};
