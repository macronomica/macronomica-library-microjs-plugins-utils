'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _prepareConfig = require('./prepare-config');

var _prepareConfig2 = _interopRequireDefault(_prepareConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var listenOptions = _config2.default.has('server') ? (0, _prepareConfig2.default)(_config2.default.get('server')) : null;

  if (listenOptions === null) {
    throw new Error(['Отсутвуют свойства в конфигурации:', '[server]', 'host = 127.0.0.1', 'port = 8000'].join('\r'));
  }

  listenOptions.type = 'http';

  return listenOptions;
};
//# sourceMappingURL=get-config-listen.js.map