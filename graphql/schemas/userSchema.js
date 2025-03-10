const { gql } = require("graphql-tag");

const userSchema = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    age: Int
  }

  type Query {
    getUsers: [User]
    getUser(id: ID!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, age: Int): User
    deleteUser(id: ID!): String
  }
`;

module.exports = userSchema;
