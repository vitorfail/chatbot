const express = require("express");
const router = express.Router();
const App = require("../chat")

/**
 * GET product list.
 *
 * @return product list | empty.
 */
router.post("/", async (req, res) => {
  try {
    var resposta = await App(req.body.coment)
    res.status(200).send(resposta);

  } catch (error) {
    return res.status(500).send("Server error");
  }
});

module.exports = router;
