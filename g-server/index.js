const express = require("express");
const {ApolloServer} = require("@apollo/server");
const {expressMiddleware} = require("@apollo/server/express4");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Query } = require("mongoose");

async function startServer() {
    const app = express();

    const schema = {
        typeDefs: `
            type Todo
            {
                id: ID!
                title: String!
                completed: Boolean
            }

            type Query {
                getTodos: [Todo]
            }
        `,
        resolvers: {
            Query: {
                getTodos: () => [{id: 1, title: "GraphQL demo", completed: true }]
            }
        }
    };


    const server = new ApolloServer(schema);

    app.use(bodyParser.json());
    app.use(cors());

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    app.listen(8000, () => {
        console.log("Server started at port 8000!");
    });
    
}

startServer();