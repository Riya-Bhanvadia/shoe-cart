const Product = require("../model/productCategoryModel");

exports.createProduct = async (req, res, next) => {
  const { category, imgUrl, name, price, prodImg } = req.body;
  try {
    await Product.create({
      category: category,
      imgUrl: imgUrl,
      products: [
        {
          name: name,
          price: price,
          prodImg: prodImg,
        },
      ],
    });
    res.json({ success: true });
  } catch (error) {
    console.log(error);
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const data = await Product.find();
    return res.json({ data });
  } catch (error) {
    console.log(error);
  }
};

exports.getProducts = async (req, res, next) => {
  const catid = req.params.catid;
  console.log("helloo");
  try {
    const data = await Product.findById(catid);
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.findProducts = async (req, res, next) => {
  try {
    const data = await Product.find();
    // console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.addProducts = async (req, res, next) => {
  const { name, price, prodImg, id } = req.body;
  try {
    const data = await Product.findOneAndUpdate(
      { _id: id },
      {
        $push: { products: { name: name, price: price, prodImg: prodImg } },
      }
    );
    return res.json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.findCategoryAndAdd = async (req, res, next) => {
  const { name, price, imageurl, category } = req.body;
  try {
    const result = await Product.findOneAndUpdate(
      { category: category },
      { $push: { products: { name: name, price: price, prodImg: imageurl } } }
    );
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
};

exports.addCategory = async (req, res, next) => {
  const { name, imageurl } = req.body;
  try {
    const result = await Product.create({
      category: name,
      imgUrl: imageurl,
      products: [],
    });
    return res.json(result);
  } catch (error) {
    console.log(error);
  }
};
