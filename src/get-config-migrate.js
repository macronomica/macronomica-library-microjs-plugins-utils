import config from 'config';
import DBMigrate from 'db-migrate';
const { NODE_ENV } = process.env;

//specify an own callback, to handle errors on your side of the application.
export default (migrationsDir) => {
  let { driver, host, port, username, password, database } = config.get('db');
  
  switch (driver) {
    case 'postgres': driver = 'pg';
      break;
    case 'mysql': driver = 'mysql';
      break;
    case 'mongoose':
    case 'mongodb': driver = 'mongodb';
  }
  
  let options = {
    env   : NODE_ENV,
    config: {
      [ NODE_ENV ]: {
        driver,
        host,
        port,
        database,
        user: username,
        password
      }
    }
  };
  
  const dbmigrate = DBMigrate.getInstance(false, options, (migrator, originalError, param1, param2, migrations) => {
      migrator.driver.close(function(err) {
        if (err) {
          console.error(originalError);
          console.error(err);
        }
        //  -m ./dist/migrations
        console.info('Done');
        process.exit();
      });
    }
  );
  
  dbmigrate.setConfigParam('migrations-dir', migrationsDir);
  
  return dbmigrate;
};