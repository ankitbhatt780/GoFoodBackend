// // const mongoose = require("mongoose");

// // const dbConnect = async (url) => {
// //   try{

// //   }

// // }

// // module.exports = dbConnect;

// const mongoose = require("mongoose");

// const dbConnect = async (url) => {
//   try {
//     await mongoose.connect(url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to database");
//   } catch (error) {
//     console.error("Error connecting to database", error);
//   }

//   // const fetch_data = dbConnect.collection("FoodItems")

//   //   .then(() => {
//   //     fetch_data.find({}).toArray((err, data) => {
//   //       if (err) {
//   //         console.error("Error fetching data", err);
//   //       } else {
//   //         console.log("Data fetched successfully", data);
//   //       }
//   //     });
//   //   })

//   try {
//     const records = await dbConnect
//       .collection("FoodItems")
//       .find({})
//       .toArray();
//     response.json(records);
//   } catch (e) {
//     console.log("An error occurred pulling the records. " + e);
//   }
// };

// module.exports = dbConnect;

// const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://ankitbhatt780:ankit%40780@cluster0.antzlh7.mongodb.net/GoFoodmern?etryWrites=true&w=majority&appName=Cluster0";
// const mongoDB = async () => {
//   await mongoose.connect(
//     mongoURI,
//     {
//       useNewUrlParser: true,
//     },

//     async (err, result) => {
//       if (err) {
//         console.log("-----", err);
//       } else {
//         console.log("connected");
//         const fetched_data = await mongoose.connection.db.collection(
//           "FoodItems"
//         );
//         fetched_data.find({})
//           .exce()
//           .toArray(function (err, data) {
//             if (err) console.log(err);
//             else global.foodItems = data;
//             console.log(global.foodItems);
//           });
//       }
//     }
//   );
// };
// module.exports = mongoDB;
const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://ankitbhatt780:ankit%40780@cluster0.antzlh7.mongodb.net/GoFoodmern?useUnifiedTopology=true&w=majority&appName=Cluster0&connectTimeoutMS=10000&serverSelectionTimeoutMS=10000";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("connected");
    const fetched_data = await mongoose.connection.db
      .collection("FoodItems")
      .find({});

    const data = await fetched_data.toArray();
    const foodCategories = await mongoose.connection.db
      .collection("FoodCategory")
      .find({});
    const cat_data = await foodCategories.toArray();

    global.foodItems = data;
    global.foodCategories = cat_data;
    // console.log(global.foodItems);
  } catch (error) {
    console.log("-----", error);
    throw error;
  }
};

module.exports = mongoDB;
