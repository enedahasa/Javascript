const Joke = require('../models/joke.model');

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World"
  });
}

module.exports.createJoke = (request, response) => {
  Joke.create(request.body)
    .then(joke => response.json(joke))
    .catch(err => response.json(err));
}

module.exports.getOneJoke = (request, response) => {
  const jokeId = request.params.id;

  Joke.findOne({ _id: jokeId })
    .then(joke => {
      if (!joke) {
        return response.json({ message: 'Joke not found' });
      }
      response.json(joke);
    })
    .catch(err => response.json({ error: err.message }));
};

module.exports.updateJoke = (request, response) => {
  const jokeId = request.params.id;

  Joke.findByIdAndUpdate(jokeId, request.body, { new: true })
    .then(updatedJoke => {
      if (!updatedJoke) {
        return response.json({ message: 'Joke not found' });
      }
      response.json(updatedJoke);
    })
    .catch(err => response.json({ error: err.message }));
};

module.exports.deleteJoke = (request, response) => {
  const jokeId = request.params.id;

  Joke.findByIdAndRemove(jokeId)
    .then(deletedJoke => {
      if (!deletedJoke) {
        return response.json({ message: 'Joke not found' });
      }
      response.json({ message: 'Joke deleted', deletedJoke });
    })
    .catch(err => response.json({ error: err.message }));
};