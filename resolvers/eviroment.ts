import { version } from '../package.json';

const enviroment = () => {
   return {
      stage: process.env.NODE_ENV || 'development',
      version,
   };
};
export default enviroment;
