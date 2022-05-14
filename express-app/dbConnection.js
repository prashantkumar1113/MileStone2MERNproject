require('dotenv').config();
const { ConnectionString } = require('connection-string');

const initOptions = {
  // Capitalizes all SQL generated
  capSQL: true,
  // global event notification;
  error(error, e) {
    if (e.cn) {
      // A connection-related error;

      // Connections are reported back with the password hashed,
      // for safe errors logging, without exposing passwords.
      console.log('CN:', e.cn);
      console.log('EVENT:', error.message || error);
    }
  },
  // this is to be commited for debugging purposes, but left commented out until you need it
  // if un-commented, it will print out the resulting query when any query is ran
  query(e) {
    console.log(e.query);
  },
};
const pgp = require('pg-promise')(initOptions);

// // Parse the connection string into an object
// const cnObj = new ConnectionString(process.env.DATABASE_URL);

// DB Connection String
const cn = {
  host: 'ec2-52-86-115-245.compute-1.amazonaws.com',
  port: 5432,
  database: 'd3l3v4idkr2pe',
  user: 'pgrzdxslgnqlqh',
  password: 'd0a32d831966c1be50dc0b7277122d4d3cf6c02d64b1707c1aec0ee8a1b5747d',
  ssl: {
     rejectUnauthorized: false,
  },
};

const db = pgp(cn);

// Connect to DB
db.connect()
  .then(obj => {
    // After query runs succesfully, disconnect
    obj.done();
  })
  .catch(error => {
    console.log('ERROR FROM DB:========>\n', error.message);
  });

module.exports = { db, pgp };
