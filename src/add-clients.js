import config from 'config';
import configClientToObject from './utils/config-client-to-object';

export default (micro) => {
  const clients = config.get('clients');

  Object
    .keys(clients)
    .forEach((name) => micro.client(configClientToObject(name)));

  return micro;
};