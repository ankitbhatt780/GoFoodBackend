const { Schema, mongoose, model } = require("mongoose");

const ProductSchema = new Schema(
  {
    CategoryName: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    img: {
      //   required: true,
      type: String,
    },
    options: {
      required: true,
      type: Object,
    },
    description: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const ItemsModel = mongoose.model("FoodItems", ProductSchema);
module.exports = ItemsModel;
