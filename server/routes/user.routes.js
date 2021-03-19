const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {

  app.get('/all', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
  });
}