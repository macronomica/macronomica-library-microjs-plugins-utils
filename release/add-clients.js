'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

var _configClientToObject = require('./utils/config-client-to-object');

var _configClientToObject2 = _interopRequireDefault(_configClientToObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (micro) {
  var clients = _config2.default.get('clients');

  Object.keys(clients).forEach(function (name) {
    return micro.client((0, _configClientToObject2.default)(name));
  });

  return micro;
};
//# sourceMappingURL=add-clients.js.map
