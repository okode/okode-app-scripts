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

        // Install dependency not found on package.json
        console.log(`--> Installing plugin not found on package.json with npm: ${fetch[plugin].source.id}`);
        let exitCode = shell.exec(`npm install ${fetch[plugin].source.id} --no-save`).code;

        // Restore node_modules folder. Some dependencies are deleted after "npm install".
        console.log(`--> Restoring node_modules state`);
        shell.exec('npm install');

        if (exitCode !== 0) {
          console.log(`Skipping plugin ${plugin}`);
          continue;
        }

      }
      fs.copySync(src, `plugins/${plugin}`);
    }
  }

}
