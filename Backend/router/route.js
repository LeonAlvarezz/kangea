const express = require('express');
const router = express.Router();
require('dotenv').config();
const postController = require('../controller/jobController'); // Update this path to your controller file


// Middleware to check the x-secret header
const checkSecretHeader = (req, res, next) => {
  const secretHeader = req.header('x-secret');
  // Check if the header is present and matches a valid secret
  if (secretHeader === process.env.SECRET) { // Replace 'your-secret-key' with the actual secret
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(401).json({ error: 'Unauthorized' }); // Unauthorized if the secret is invalid
  }
};

// Apply the middleware to your route
router.get('/posts',checkSecretHeader,postController.getPostings);
router.post('/addpost',checkSecretHeader,postController.addPosting);
router.get('/posts/:id',checkSecretHeader,postController.getPostingById);
router.put('/update/:id',checkSecretHeader,postController.updatePostingById);


module.exports = router;
