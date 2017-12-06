import { Generator } from './generator';
import { Translator } from './translator';

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
     * Translator
     * ----------
     */
    case 'translator':
    case '-t':
      Translator.init(params[0]);
      return;

    /**/
    default: console.log('Invalid command');

  }

}

