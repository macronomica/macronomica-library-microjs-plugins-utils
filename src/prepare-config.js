import isString from 'lodash.isstring';

export default (config = {}) => {

  Object
    .keys(config)
    .forEach(key => {
      if (isString(config[ key ])) {
        config[ key ] = config[ key ].trim();
      }
    });

  return config;
};