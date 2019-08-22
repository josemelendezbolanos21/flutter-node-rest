const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { connect } = require('mongoose');

app.use(morgan('dev'));
app.use(cors());

// Connect db
connect('mongodb+srv://admin:MrTeemo@cluster0-rmlgs.mongodb.net/flutter-node?retryWrites=true&w=majority',
  { useNewUrlParser: true } 
).then(() => console.log('DB connected'));

// Import routes
app.use(require('./routes/users'));

// Init server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));