import { Generator } from './generator';
import { CSV2JSON } from './csv2json';
import { FetchPlugins } from './fetch-plugins';

export function start(args: any) {

  const command = (args && args.length >= 2) ? args[2] : null;
  const params = (args && args.length >= 3) ? args.slice(3, args.length) : [];

  switch (command) {

    /**
     * Generator
     * ---------
     */
    case 'generator':
    case '-g':
      Generator.init(params[0], params[1]);
      return;

    /**
     * CSV2JSON
     * --------
     */
    case 'csv2json':
    case '-c2j':
      CSV2JSON.init(params[0]);
      return;

    /**
     * FetchPlugins
     * ------------
     */
    case 'fetch-plugins':
    case '-fp':
      FetchPlugins.init();
      return;

    /**/
    default: console.log('Invalid command');

  }

}

