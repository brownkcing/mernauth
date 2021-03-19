



module.exports = function(app) {
    app.get('/test2', (req, res) => {
        res.status(200).json({ message: 'Connected!' });
      });
}