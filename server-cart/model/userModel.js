const mongoose = require("mongoose");
const schema = mongoose.Schema;

const user = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Boolean,
      default: false,
    },
    status: {
      type: Boolean,
      default: false,
    },
    cart: [
      {
        name: {
          type: String,
        },
        price: {
          type: Number,
        },
        prodImg: {
          type: String,
        },
        quantity: {
          type: Number,
        },
      },
    ],

  },
  { timestamps: true }
);

module.exports = mongoose.model("user", user);
