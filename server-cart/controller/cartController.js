const userModel = require("../model/userModel");
const stripe = require("stripe")

exports.updateCart = async (req, res, next) => {
  const { _id, cart } = req.body;

  // console.log(_id);
  // console.log(cart);
  try {
    const data = await userModel.findById(_id);
    // console.log(data);
    if (data.cart) {
      data.cart = cart;
      // console.log(data);
      data.save();
    }

    return res.json(data);
  } catch (error) {
    if (!error.statusCode) {
      error.statusCode = 422;
    }
    return next(error);
  }
};

exports.makePayment = (req,res,next) =>{
  const token = req.body.data.token;
    const amount = req.body.data.amount;
    // console.log(amount);

    const intent = stripe.paymentIntents.create({
      amount: amount,
      currency: 'inr',
      payment_method_types: ['card'],
      // payment_method: {type: 'card'}
  })
  res.json({client_secret: intent.client_secret})
}