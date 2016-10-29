import config from 'config';
const CONFIG_SECTION_CLIENTS = 'clients';

const clients = config.has(CONFIG_SECTION_CLIENTS)
  ? config.get(CONFIG_SECTION_CLIENTS)
  : {};

/**
 * @param {string} name
 * @returns {{type: *, pin: {role: *}, host, port, timeout: *}}
 */
export default (name) => {
  const { [ name ]:value } = clients;
  const [ host = value, port ] = value.trim().split(':');

  return {
    name,
    type   : 'http',
    host, port,
    timeout: 2000
  };
};