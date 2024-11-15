const Message = require("../models/Message");

exports.getMural = async (req, res) => {
  const messages = await Message.findAll();
  res.render("mural", { messages, user: req.session.user });
};

exports.getMessage = async (req, res) => {
  const message = await Message.findByPk(req.params.id);
  if (message) {
    res.render("mensagem", { message, user: req.session.user });
  } else {
    res.redirect("/mural");
  }
};

exports.createMessage = async (req, res) => {
  const { title, content } = req.body;
  await Message.create({
    title,
    content,
    author: req.session.user.username,
  });
  res.redirect("/mural");
};
