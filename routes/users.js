const userRoutes = (app, fs) => {
  const dataPath = './data/data.json';

  app.get('/users', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.header('Access-Control-Allow-Origin', '*');
        res.status(200).send(JSON.parse(data));
      }
    });
  });
};

module.exports = userRoutes;