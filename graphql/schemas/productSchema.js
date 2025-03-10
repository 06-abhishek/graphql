const { gql } = require("graphql-tag");

const productSchema = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String
  }

  type Query {
    getProducts: [Product]
    getProduct(id: ID!): Product
  }

  type Mutation {
    createProduct(name: String!, price: Float!, description: String): Product
    deleteProduct(id: ID!): String
  }
`;

module.exports = productSchema;
