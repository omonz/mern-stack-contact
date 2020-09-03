const mongoose = require('mongoose');
const config = require('config');
const db =  config.get('mongoURI');

/**
 * Connect to database using the config file
 * node driver
 */
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
        });
    } catch (err) {
         console.log(err.message);
         process.exit(1);
    }
};

module.exports = connectDB;