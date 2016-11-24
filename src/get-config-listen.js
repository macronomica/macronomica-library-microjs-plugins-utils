import config from 'config';
import prepareConfig from './prepare-config';

export default () => {
  const listenOptions = config.has('server') ? prepareConfig(config.get('server')) : null;
  
  if (listenOptions === null) {
    throw new Error([
      'Отсутвуют свойства в конфигурации:',
      '[server]',
      'host = 127.0.0.1',
      'port = 8000'
    ].join('\r'));
  }
  
  listenOptions.type = 'http';
  
  return listenOptions;
};