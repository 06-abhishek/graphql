const { mergeResolvers } = require("@graphql-tools/merge");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const userSchema = require("./schemas/userSchema");
const productSchema = require("./schemas/productSchema");

const userResolver = require("./resolvers/userResolver");
const productResolver = require("./resolvers/productResolver");

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs([userSchema, productSchema]),
  resolvers: mergeResolvers([userResolver, productResolver]),
});

module.exports = schema;
