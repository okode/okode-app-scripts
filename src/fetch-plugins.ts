import * as fs from 'fs-extra';

export module FetchPlugins {

  export function init() {
    fs.readFile
    let fetch = JSON.parse(fs.readFileSync('plugins/fetch.json', 'utf8'));
    for (let plugin in fetch) {
      console.log(`Fetching plugin: ${plugin}`);
      fs.copySync(`node_modules/${plugin}`, `plugins/${plugin}`);
    }
  }

}
