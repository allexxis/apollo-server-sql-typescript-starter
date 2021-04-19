import { ApolloError } from 'apollo-server-errors';
import { hashSync } from 'bcrypt';
import db from './sql';
const register = async (_, { name, email, password }) => {
   const user = await (await db)
      .run(
         'INSERT INTO user (name,email,password) VALUES (?,?,?)',
         name,
         email.toLowerCase(),
         hashSync(password, 10)
      )
      .catch((err) => {
         console.log(err);
         return;
      });
   if (!user) {
      throw new ApolloError('Error desconocido');
   }
   return {
      name,
      email,
   };
};
export default register;
