import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

import products from './products.json'

// Define tu esquema GraphQL
const typeDefs = `
  type Query {
    products: [Product]
    product(id: String!): Product
  }

  type Product {
    id: String
    title: String
    price: Float
    description: String
    category: String
    image: String
    rating: Rating
  }

  type Rating {
    rate: Float
    count: Int
  }
`;

// Resuelve las consultas
const resolvers = {
  Query: {
    products: () => products,
    product: (parent: any, { id }: any) => products.find(product => product.id === parseInt(id)),
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export default startServerAndCreateNextHandler(apolloServer);