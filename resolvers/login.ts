import { AuthenticationError } from 'apollo-server-errors';
import { compareSync } from 'bcrypt';
import db from './sql';
const login = async (_, { email, password }) => {
   const user = await (await db).get(
      'SELECT * FROM user WHERE email = ?',
      email.toLowerCase()
   );
   if (!compareSync(password, user.password)) {
      throw new AuthenticationError('Error de usuario o contraseña');
   }
   return user;
};
export default login;
