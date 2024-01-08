const mongoose = require('mongoose');
const JokeSchema = new mongoose.Schema({
        setup : { type: String , 
        required: [true, "A setup is required for the joke"],
        minlength: [8, "The setup must be at least 8 characters long"]
     },
    punchline: { type: String,
        required: [true, "A punchline is required for the joke"],
        minlength: [3, "The punchline must be at least 3 characters long"]
    }
}, { timestamps: true });

const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;

