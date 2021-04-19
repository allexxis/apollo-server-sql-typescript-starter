import { gql } from 'apollo-server';

export default gql`
   type Enviroment {
      stage: String
      version: String
   }
   type User {
      email: String
      name: String
   }
   type Query {
      """
      Authentication query to localsqlite
      """
      login(email: String!, password: String!): User!
      """
      Checks the enviroment configuration
      """
      enviroment: Enviroment!
   }
   type Mutation {
      """
      Creates an user to localsqlite
      """
      register(email: String!, password: String!, name: String!): User!
   }
`;
