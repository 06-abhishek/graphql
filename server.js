const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");

const schema = require("./graphql/index");

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 4000;

connectDB();

(async function startServer() {
  const server = new ApolloServer({ schema });
  await server.start();
  app.use("/graphql", expressMiddleware(server));
})();

app.get("/", (req, res) => res.send("GraphQL API is running"));

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
