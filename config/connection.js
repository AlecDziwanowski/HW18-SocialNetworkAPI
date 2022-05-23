const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;


// const { connect, connection } = require('mongoose');

// connect('mongodb://localhost/developersApplications', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = connection;
