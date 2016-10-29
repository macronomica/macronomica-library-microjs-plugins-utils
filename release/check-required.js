"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (property, params, value) {
  var code = "error.property." + property + ".is.required";
  var hasMany = Array.isArray(value);

  if (!hasMany && !value) {
    return {
      code: code,
      message: "\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E \"" + property + "\" \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E",
      details: value
    };
  }

  if (hasMany && params.length !== value.length) {
    var diff = params.reduce(function (diff, row) {
      if (!value.includes(row[property])) {
        diff.push(row);
      }

      return diff;
    }, []);

    return {
      code: code,
      message: "\u0421\u0432\u043E\u0439\u0441\u0442\u0432\u043E \"" + property + "\" \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0432 \u0437\u0430\u043F\u0438\u0441\u044F\u0445: \"" + JSON.stringify(diff) + "\"",
      details: diff
    };
  }
};
//# sourceMappingURL=check-required.js.map
