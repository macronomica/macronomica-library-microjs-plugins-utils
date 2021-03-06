'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config2 = require('config');

var _config3 = _interopRequireDefault(_config2);

var _dbMigrate = require('db-migrate');

var _dbMigrate2 = _interopRequireDefault(_dbMigrate);

var _prepareConfig2 = require('./prepare-config');

var _prepareConfig3 = _interopRequireDefault(_prepareConfig2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NODE_ENV = process.env.NODE_ENV;

//specify an own callback, to handle errors on your side of the application.

exports.default = function (migrationsDir) {
  var _prepareConfig = (0, _prepareConfig3.default)(_config3.default.get('db')),
      driver = _prepareConfig.driver,
      host = _prepareConfig.host,
      port = _prepareConfig.port,
      username = _prepareConfig.username,
      password = _prepareConfig.password,
      database = _prepareConfig.database;

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