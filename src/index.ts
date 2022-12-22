import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import express from "express";
import { Query }  from "./resolvers/Query.js";
import { typeDefs } from "./schema.js";
import { Product } from "./resolvers/Product.js";
import { Brand } from "./resolvers/Brand.js"
import { Mutation } from "./resolvers/Mutation.js"

const app = express();
const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: {
    Query,
    Brand,
    Product,
    Mutation
  },
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server is running at ${url}`);
