const express = require('express');
const connectDB = require('./config/db');

const app = express();

app.get('/', (req, res) => res.json({ msg: 'welcome to the contact api'}));
connectDB();

//init middleware
app.use(express.json({ extended: false }))

//define the routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contact', require('./routes/contacts'));
app.use('/api/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App started on port ${PORT}`));