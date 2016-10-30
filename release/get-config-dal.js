'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var dbOptions = _config2.default.has('db') ? _config2.default.get('db') : null;

  if (dbOptions === null) {
    throw new Error(['Отсутвуют свойства в конфигурации:', '[db]', 'driver   = postgres', 'host     = 127.0.0.1', 'port     = 5432', 'database = macronomica-local', 'username = postgres', 'password = postgres'].join('\r'));
  }

  if (dbOptions.driver !== 'postgres') {
    throw new Error('\u0414\u0440\u0430\u0439\u0432\u0435\u0440 \u0431\u0434 ' + dbOptions.driver + ' \u043D\u0435 \u043F\u043E\u0434\u0434\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044F');
  }

  return dbOptions;
};
//# sourceMappingURL=get-config-dal.js.map
