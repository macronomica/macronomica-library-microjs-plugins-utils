import config from 'config';
import configClientToObject from './utils/config-client-to-object';
const clients = config.get('clients');

export default (micro) => {

  Object
    .keys(clients)
    .forEach((name) => micro.client(configClientToObject(name)));

  return micro;
};