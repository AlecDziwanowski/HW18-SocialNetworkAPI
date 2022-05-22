const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/studentsDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;

// use below instead bc we are not using heroku?
// const { connect, connection } = require('mongoose');

// connect('mongodb://localhost/developersApplications', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = connection;
