import uniq from 'lodash.uniq';

export default (client, clientName, property, value) => {
  const hasMany = Array.isArray(value);

  return client
    .exec({
      cmd     : hasMany ? 'list' : 'one',
      fields  : [ 'id' ],
      criteria: { id: hasMany ? { in: uniq(value) } : value }
    })
    .then(result => {
      const code = `error.${ clientName }.by.id.not.found`;

      if (!hasMany && result[ 0 ].id !== value) {
        return Promise.reject({
          code,
          message: `Не найдена запись с id: ${ value }`,
          details: value
        });
      }

      if (hasMany) {
        const ids = result.map(({ id }) => id);
        const diff = value.reduce((diff, id) => {
          if (!ids.includes(id)) {
            diff.push(id);
          }

          return diff;
        }, []);

        if (!diff.length) {
          return;
        }

        return Promise.reject({
          code,
          message: `Не найдены записи ${ clientName } с id: "${ diff.join('", "') }"`,
          details: diff
        });
      }
    })
    .catch(error => {
      return Promise.reject(error);
    });
};