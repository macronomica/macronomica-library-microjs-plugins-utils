'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config2 = require('config');

var _config3 = _interopRequireDefault(_config2);

var _dbMigrate = require('db-migrate');

var _dbMigrate2 = _interopRequireDefault(_dbMigrate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NODE_ENV = process.env.NODE_ENV;

var _config$get = _config3.default.get('db'),
    driver = _config$get.driver,
    host = _config$get.host,
    port = _config$get.port,
    username = _config$get.username,
    password = _config$get.password,
    database = _config$get.database;

switch (driver) {
  case 'postgres':
    driver = 'pg';
    break;
  case 'mysql':
    driver = 'mysql';
    break;
  case 'mongoose':
  case 'mongodb':
    driver = 'mongodb';
}

var options = {
  env: NODE_ENV,
  config: _defineProperty({}, NODE_ENV, {
    driver: driver,
    host: host,
    port: port,
    database: database,
    user: username,
    password: password
  })
};

//specify an own callback, to handle errors on your side of the application.

exports.default = function (migrationsDir) {
  var dbmigrate = _dbMigrate2.default.getInstance(false, options, function (migrator, originalError, param1, param2, migrations) {
    migrator.driver.close(function (err) {
      if (err) {
        console.error(originalError);
        console.error(err);
      }
      //  -m ./dist/migrations
      console.info('Done');
      process.exit();
    });
  });

  dbmigrate.setConfigParam('migrations-dir', migrationsDir);

  return dbmigrate;
};
//# sourceMappingURL=get-config-migrate.js.map
