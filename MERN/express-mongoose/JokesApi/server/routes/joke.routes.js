const JokeController = require('../controllers/joke.controller');

module.exports = (app) => {
  app.get('/api', JokeController.index);
  app.post('/api/jokes', JokeController.createJoke);
  app.get('/api/jokes/:id', JokeController.getOneJoke);
  app.put('/api/jokes/:id', JokeController.updateJoke);
  app.delete('/api/jokes/:id', JokeController.deleteJoke);
};
