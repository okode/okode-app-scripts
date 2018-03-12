import * as fs from 'fs-extra';
import * as shell from 'shelljs';

export module FetchPlugins {

  export function init() {
    fs.readFile
    let fetch = JSON.parse(fs.readFileSync('plugins/fetch.json', 'utf8'));
    for (let plugin in fetch) {
      console.log(`Fetching plugin: ${plugin}`);
      let src = `node_modules/${plugin}`;
      if (!fs.pathExistsSync(src)) {
        console.log(`Installing plugin via npm: ${fetch[plugin].source.id}`);
        if (shell.exec(`npm install ${fetch[plugin].source.id} --no-save`).code !== 0) {
          console.log(`Skipping plugin ${plugin}`);
          continue;
        }
      }
      fs.copySync(src, `plugins/${plugin}`);
    }
  }

}
