const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB || 'mongodb://127.0.0.1:27017/mern-shopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
