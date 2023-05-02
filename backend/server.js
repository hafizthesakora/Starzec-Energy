const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const dbConnect = require('./config/db/dbConnect');
const userRoutes = require('./routes/users/usersRoute');
const { errorHandler, notFound } = require('./middlewares/error/errorHandler');
const categoryRoute = require('./routes/category/categoryRoute');
const postRoute = require('./routes/posts/postRoute');
const app = express();

dotenv.config();

//DB
dbConnect();

//middlewares
app.use(express.json()); // this allows us to access req.body using express

//cors
app.use(cors());

//User Route
app.use('/api/users', userRoutes);

//Post Route
app.use('/api/posts', postRoute);

//Category Route
app.use('/api/category', categoryRoute);

// error handler
app.use(notFound);
app.use(errorHandler);

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
