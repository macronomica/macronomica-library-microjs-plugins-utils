'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotObject = require('dot-object');

var _dotObject2 = _interopRequireDefault(_dotObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (params, property, alias) {
  if (!Array.isArray(params)) {
    return getValue(params, property, alias);
  }

  return params.reduce(function (value, params) {
    value.push(getValue(params, property, alias));
    return value;
  }, []);
};

function getValue(params, property, alias) {
  var value = void 0;

  if (property in params) {
    value = params[property];
  } else {
    value = _dotObject2.default.pick(alias, params);

    if (undefined !== value) {
      _dotObject2.default.remove(alias, params);
      params[property] = value;
    }
  }

  return value;
}
//# sourceMappingURL=prepare-link.js.map