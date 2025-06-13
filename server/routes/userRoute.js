const route = require('express').Router();
const { userRegister , userLogin , getMe } = require('../controllers/userController');
const { RegisterValidation, LoginValidation } = require('../middleware/AuthVaildation');

// Auth Register User
route.post('/register', RegisterValidation, userRegister);

// Auth Login User
route.post('/login', LoginValidation, userLogin);

route.get('/me/:id', getMe);

module.exports = route;