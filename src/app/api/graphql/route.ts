import { readFileSync } from "node:fs";
import path from "node:path";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { resolvers } from "./resolvers";

const typeDefs = readFileSync(
  path.resolve(process.cwd(), "src/app/api/graphql", "schema.graphql"),
  { encoding: "utf-8" },
);

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server);

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
