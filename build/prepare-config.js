'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash.isstring');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};


  Object.keys(config).forEach(function (key) {
    // if (isString(config[ key ])) {
    //   config[ key ] = config[ key ].trim();
    // }
  });

  return config;
};
//# sourceMappingURL=prepare-config.js.map