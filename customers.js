const fs = require("fs");
const express = require("express");
const chalk = require("chalk");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server-express");

const app = express();
const graphqlPath = "/graphql";

//resolvers && typeDefs
const resolvers = require("./graphql/resolvers");
const typeDefs = gql(
  fs.readFileSync("./graphql/schema.graphql", { encoding: "utf8" })
);

//import router
const customersRouter = require("./routers/customers");

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//connect to DB
mongoose.connect(
  "mongodb+srv://customer_admin:<password>@cluster0.zhfqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true  },
  () => {
    console.log(chalk.green("connection to database successful!"));
  }
);

//instantiate apollo server
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app, path: graphqlPath });

//port
const port = 8000;

//use routers
app.use(customersRouter);
app.listen(port, () => {
  console.log(chalk.green(`server running on port ${port}`));
});
