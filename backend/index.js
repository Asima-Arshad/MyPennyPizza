import dotenv from 'dotenv';
import express from "express";
import {connectDB} from  './database/connection.js';
import pizzaRoute from "./route/pizzaRoutes.js";
import userRoute from "./route/userRoutes.js";
import orderRoute from "./route/orderRoutes.js";

//import morgan from 'morgan';

const port = process.env.API_PORT || 8080
dotenv.config()
//connect mongodb
connectDB();

const app = express();


// middlewares
app.use (express.json());
//app.use(morgan("dev"));
app.use('/api/pizzas' , pizzaRoute);
app.use('/api/users' , userRoute);
app.use('api/orders/' ,orderRoute);



app.get('/', (req,res)=> {
  res.send("hello");
})

app.listen(port, function () {
  console.log(`Port is now running @ ${port}`)
});
