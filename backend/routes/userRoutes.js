const express = require('express');
const router = express.Router();
const { registerUser, getAllUsers, loginUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');


router.post('/register', registerUser);
router.get('/',protect, getAllUsers);
router.post('/login', loginUser);

module.exports = router;
