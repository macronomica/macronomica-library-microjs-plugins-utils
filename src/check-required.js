
export default (property, params, value) => {
  const code = `error.property.${ property }.is.required`;
  const hasMany = Array.isArray(value);

  if (!hasMany && !value) {
    return {
      code,
      message: `Свойство "${ property }" обязательно`,
      details: value
    };
  }

  if (hasMany && params.length !== value.length) {
    const diff = params.reduce((diff, row) => {
      if (!value.includes(row[ property ])) {
        diff.push(row);
      }

      return diff;
    }, []);

    return {
      code,
      message: `Свойство "${ property }" обязательно в записях: "${ JSON.stringify(diff) }"`,
      details: diff
    };
  }
};