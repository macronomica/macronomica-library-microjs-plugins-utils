import dot from 'dot-object';

export default (params, property, alias) => {
  if (!Array.isArray(params)) {
    return getValue(params, property, alias);
  }

  return params.reduce((value, params) => {
    value.push(getValue(params, property, alias));
    return value;
  }, []);
};

function getValue(params, property, alias) {
  let value;

  if (property in params) {
    value = params[ property ];
  } else {
    value = dot.pick(alias, params);

    if (undefined !== value) {
      dot.remove(alias, params);
      params[ property ] = value;
    }
  }

  return value;
}