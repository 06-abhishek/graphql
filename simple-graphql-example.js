// Simple and small example of GraphQL to help you understand its overview:

const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const cors = require("cors");
const bodyParser = require("body-parser");

// Step 1: Define GraphQL Schema
const typeDefs = `
  type User {
    id: ID
    name: String
    email: String
  }

  type Query {
    getUser(id: ID!): User
  }
`;

// Step 2: Sample Data
const users = [
  { id: "1", name: "Abhishek Patil", email: "abhishek@example.com" },
  { id: "2", name: "Vinit Dhasade", email: "vdhasade@example.com" },
  { id: "3", name: "R Rahul", email: "rr@example.com" },
];

// Step 3: Define Resolvers
const resolvers = {
  Query: {
    getUser: (parent, { id }) => users.find((user) => user.id === id),
  },
};

// Step 4: Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();

  const app = express();

  // Middlewares
  app.use(cors());
  app.use(bodyParser.json());
  app.use("/graphql", expressMiddleware(server));

  // Start Express Server
  app.listen(4000, () => {
    console.log("GraphQL Server running on http://localhost:4000/graphql");
  });
}

startServer();
