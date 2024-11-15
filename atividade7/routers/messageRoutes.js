const express = require("express");
const router = express.Router();
const messageController = require("../controllers/messageController");

const checkAuth = (req, res, next) => {
  if (req.session.user) next();
  else res.redirect("/login");
};

router.get("/mural", checkAuth, messageController.getMural);
router.get("/mensagem/:id", checkAuth, messageController.getMessage);
router.post("/mensagem", checkAuth, messageController.createMessage);

module.exports = router;
