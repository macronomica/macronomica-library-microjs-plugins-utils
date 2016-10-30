'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var listenOptions = _config2.default.has('server') ? _config2.default.get('server') : null;

  if (listenOptions === null) {
    throw new Error(['Отсутвуют свойства в конфигурации:', '[server]', 'host = 127.0.0.1', 'port = 8000'].join('\r'));
  }

  listenOptions.type = 'http';

  return listenOptions;
};
//# sourceMappingURL=get-config-listen.js.map
