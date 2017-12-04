import { Generator } from './generator';
import { Translator } from './translator';

export function start(args: any) {
  switch (args[2]) {

    /**
     * Generator
     */
    case 'generator': case '-g':
      Generator.init(args[3], args[4]);
      return;

    /**
     * Translator
     */
    case 'translator': case '-t':
      Translator.init(args[3]);
      return;
    


    default: console.log('Invalid command');
  }
}

