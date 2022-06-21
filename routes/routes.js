const userRoutes = require('./users.js');

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('Development server is running');
  });

  userRoutes(app, fs);
}

module.exports = appRouter;