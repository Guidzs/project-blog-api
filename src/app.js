const express = require('express');
const loginRouter = require('./routes/login.route');
const userRouter = require('./routes/user.route');
const categoryRouter = require('./routes/category.route');
const postRouter = require('./routes/post.route');
const { tokenValidate } = require('./middlewares/tokenValidate');

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', tokenValidate, postRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
