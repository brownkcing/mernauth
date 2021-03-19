
module.exports = function(app) {

  app.get('/all', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
  });
}