import { makeExecutableSchema } from 'graphql-tools';
import { ApolloServer } from 'apollo-server';
import enviroment from './resolvers/eviroment';
import login from './resolvers/login';
import register from './resolvers/register';

import gql from './gql';
const executableSchema = makeExecutableSchema({
   typeDefs: gql,
   resolvers: {
      Query: {
         enviroment,
         login,
      },
      Mutation: {
         register,
      },
   },
});

const server = new ApolloServer({
   schema: executableSchema,
});

server.listen(3000).then(({ url }) => {
   console.log(`🚀 Server ready at ${url}`);
});
