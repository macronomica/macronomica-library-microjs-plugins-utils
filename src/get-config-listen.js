import config from 'config';

export default () => {
  const listenOptions = config.has('server') ? config.get('server') : null;
  
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