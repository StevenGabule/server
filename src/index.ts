require("dotenv").config();

import { connectDatabase } from "./database/index";
import { resolvers, typeDefs } from "./graphql";
import { ApolloServer } from "apollo-server-express";
import express, { Application } from "express";

const mount = async (app: Application) => {
  const db = await connectDatabase();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({ db }),
  });
  server.applyMiddleware({ app, path: "/api" });
  app.listen(process.env.DB_PORT, () =>
    console.log(`App listening to: ${process.env.DB_PORT}`)
  );
  // const listings = await db.listings.find({}).toArray();
  // console.log(listings);
};

mount(express());
