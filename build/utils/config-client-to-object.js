'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _config = require('config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CONFIG_SECTION_CLIENTS = 'clients';

var clients = _config2.default.has(CONFIG_SECTION_CLIENTS) ? _config2.default.get(CONFIG_SECTION_CLIENTS) : {};

/**
 * @param {string} name
 * @returns {{type: *, pin: {role: *}, host, port, timeout: *}}
 */

exports.default = function (name) {
  var value = clients[name];

  var _value$trim$split = value.trim().split(':'),
      _value$trim$split2 = _slicedToArray(_value$trim$split, 2),
      _value$trim$split2$ = _value$trim$split2[0],
      host = _value$trim$split2$ === undefined ? value : _value$trim$split2$,
      port = _value$trim$split2[1];

  return {
    name: name,
    type: 'http',
    host: host, port: port,
    timeout: 2000
  };
};
//# sourceMappingURL=config-client-to-object.js.map