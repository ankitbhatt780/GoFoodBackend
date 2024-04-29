async function getAlldata(req, res) {
  // console.log("data", global.foodItems);
  try {
    res.status(200).json([global.foodItems, global.foodCategories]);
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: "server errr", err });
  }
}
module.exports = getAlldata;

// const express = require("express");
// const ItemsModel = require("../models/foodItems_model");

// async function getAlldata(req, res) {
//   try {
//     const data = await ItemsModel.find();
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }

// module.exports = getAlldata;
