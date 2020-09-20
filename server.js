const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'welcome to the contact api'}));
connectDB();

//init middleware
app.use(express.json({ extended: false }));

//cors
app.use(cors());

//define the routes
app.use('/api/users', require('./routes/user'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App started on port ${PORT}`));