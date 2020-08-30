import { resolvers, typeDefs } from "./graphql";
import { ApolloServer } from "apollo-server-express";
import express from "express";

const app = express();
const port = 9000;

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: "/api" });

app.listen(port, () => console.log(`App listening to: ${port}`));
