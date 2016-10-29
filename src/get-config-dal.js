import config from 'config';

const dbOptions = config.has('db') ? config.get('db') : null;

if (dbOptions === null) {
  throw new Error([
    'Отсутвуют свойства в конфигурации:',
    '[db]',
    'driver   = postgres',
    'host     = 127.0.0.1',
    'port     = 5432',
    'database = macronomica-local',
    'username = postgres',
    'password = postgres'
  ].join('\r'));
}

if (dbOptions.driver !== 'postgres') {
  throw new Error(`Драйвер бд ${ dbOptions.driver } не поддрживается`);
}

export default () => dbOptions;