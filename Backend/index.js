const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const pool = require('./database/connection');
const port = process.env.PORT || 3000;
const route = require('./router/route'); // Update this path to your route file
require('dotenv').config();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    // Get a connection from the pool
    const connection = await pool.getConnection();

    // Release the connection back to the pool
    connection.release();

    res.send('Connection to MySQL database established successfully.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Use the routes defined in route.js
app.use('/api', route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
