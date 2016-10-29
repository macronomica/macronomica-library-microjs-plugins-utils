'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _lodash = require('lodash.uniq');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (client, clientName, property, value) {
  var hasMany = Array.isArray(value);

  return client.exec({
    cmd: hasMany ? 'list' : 'one',
    fields: ['id'],
    criteria: { id: hasMany ? { in: (0, _lodash2.default)(value) } : value }
  }).then(function (result) {
    var code = 'error.' + clientName + '.by.id.not.found';

    if (!hasMany && result[0].id !== value) {
      return Promise.reject({
        code: code,
        message: '\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u044C \u0441 id: ' + value,
        details: value
      });
    }

    if (hasMany) {
      var _ret = function () {
        var ids = result.map(function (_ref) {
          var id = _ref.id;
          return id;
        });
        var diff = value.reduce(function (diff, id) {
          if (!ids.includes(id)) {
            diff.push(id);
          }

          return diff;
        }, []);

        if (!diff.length) {
          return {
            v: void 0
          };
        }

        return {
          v: Promise.reject({
            code: code,
            message: '\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B \u0437\u0430\u043F\u0438\u0441\u0438 ' + clientName + ' \u0441 id: "' + diff.join('", "') + '"',
            details: diff
          })
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
  }).catch(function (error) {
    return Promise.reject(error);
  });
};
//# sourceMappingURL=check-link.js.map
