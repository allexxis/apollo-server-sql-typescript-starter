import * as sqlite3 from 'sqlite3';
import * as sqlite from 'sqlite';
const db = sqlite.open({
   filename: '/tmp/database.db',
   driver: sqlite3.Database,
});
export default db;
