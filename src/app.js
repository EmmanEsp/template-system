const express = require('express');
require('./db/mongoose');
const UserRouter = require('./controller/userController');
const AuthRouter = require('./controller/authController');
const helmet = require('helmet');

const app = express();

app.use(express.json());
app.use(helmet());

app.use(UserRouter);
app.use(AuthRouter);

module.exports = app;