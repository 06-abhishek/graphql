const Product = require("../../models/Product");

const productResolver = {
  Query: {
    getProducts: async () => await Product.find(),
    getProduct: async (_, { id }) => await Product.findById(id),
  },
  Mutation: {
    createProduct: async (_, { name, price, description }) => {
      const product = new Product({ name, price, description });
      await product.save();
      return product;
    },
    deleteProduct: async (_, { id }) => {
      await Product.findByIdAndDelete(id);
      return "Product deleted successfully";
    },
  },
};

module.exports = productResolver;
