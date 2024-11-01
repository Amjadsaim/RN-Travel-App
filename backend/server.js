const express = require('express');
const mongoose = require('mongoose');
const errorHandler = require("./middleware/errorHandler");
const authRouter = require('./routes/auth');
const userRouter = require('./routes/user');
const countryRouter = require('./routes/country');
const placeRouter = require('./routes/place');
const hotelRouter = require('./routes/hotel');
const reviewRouter = require('./routes/review');
const dotenv = require("dotenv");
const app = express()
const port = 3000

dotenv.config();

const DB = process.env.MONGODB || 'mongodb://localhost:27017/project'

app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({limit: "10mb", extended: true}))

app.use(errorHandler);

app.use('/api/' , authRouter);
app.use('/api/users', userRouter);
app.use('/api/countries', countryRouter);
app.use('/api/places', placeRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/reviews', reviewRouter);


mongoose.connect(DB).then(() => console.log("Database connect ")).catch((error) => console.log(error))




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT || port, () => console.log(`app listening on port ${process.env.PORT}!`))