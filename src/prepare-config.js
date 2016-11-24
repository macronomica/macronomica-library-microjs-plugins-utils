import isString from 'lodash.isstring';

export default (config = {}) => {

  Object
    .keys(options)
    .forEach(key => {
      if (isString(options[ key ])) {
        options[ key ] = options[ key ].trim();
      }
    });

  return config;
};