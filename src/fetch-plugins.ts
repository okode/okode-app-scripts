import * as fs from 'fs-extra';

export module FetchPlugins {

  export function init() {
    let fetch = require('./plugins/fetch.json');
    for (let plugin in fetch) {
      console.log(`Fetching plugin: ${plugin}`);
      fs.copySync(`node_modules/${plugin}`, `plugins/${plugin}`);
    }
  }

}
