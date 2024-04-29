const express = require("express");
const User_router = require("./routes/userRoutes");
const F_items_router = require("./routes/food_itemsroutes");
const OrderData_router = require("./routes/orderData_Routes")


// require("./DbConnect")
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoDB = require("./DbConnect");
const PORT = 8080;
mongoDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
// dbConnect("mongodb+srv://ankitbhatt780:ankit%40780@cluster0.antzlh7.mongodb.net/GoFoodmern?retryWrites=true&w=majority&appName=Cluster0")

app.use("/api", User_router);
app.use("/api/auth", OrderData_router);
app.use("/api/data", F_items_router);

app.listen(PORT, () => {
  console.log("Server is running at " + PORT + "port");
});
