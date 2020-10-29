const { MongoClient } = require("mongodb");
const createMongoClient = require("../shared/mongoClient");

module.exports = async function (context, req) {
  const products = req.body;

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();

  const Products = MongoClient.collection("products");

  const res = await Products.insert(products);

  closeConnectionFn();
  context.res = {
    status: 201,
    body: res,
  };
};
