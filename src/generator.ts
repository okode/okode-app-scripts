import * as fs from 'fs';

module Generator {
  export const types = [ 'page', 'component', 'pipe', 'service', 'directive' ];
  const tmplDir = __dirname + '/templates/';
  let fs = require('fs');  
  let type: string;
  let name: string;
  export function init(args: any) {
    if (args.length < 4) {
      Utils.showErrorInvalidArgs();
    } else {
      type = Utils.isValidType(args[2]) ? args[2] : null;
      name = args[3].toLowerCase();
      if (type && name) generate();
      else Utils.showErrorInvalidArgs();
    }
  }
  function generate() {
    switch (type) {
      case 'page':      generatePage(); break;
      case 'component': generateComponent(); break;
      case 'pipe':      generatePipe(); break;
      case 'service':   generateService(); break;
      case 'directive': generateDirective(); break;
    }
  }
  function generatePage() {
    Utils.mkdir('./pages');
    Utils.mkdir('./pages/' + name);
    // create page.ts
    fs.readFile(tmplDir + 'page.ts.tmpl', function (err: any, data: any) {
      if (err) return Utils.showError(err);
      let ts_tmpl = data.toString();
      ts_tmpl = (Utils.replaceFileContent(ts_tmpl, name));
      let filepath = './pages/' + name + '/' + name + '.ts';
      fs.writeFile(filepath, ts_tmpl, function (err: any) {
        if (err) return Utils.showError(err);
        Utils.showSuccess(type, name);
      }); 
    });
  }
  function generateComponent() {
    // TODO
    Utils.showSuccess(type, name);
  }
  function generatePipe() {
    // TODO
    Utils.showSuccess(type, name);
  }
  function generateService() {
    // TODO
    Utils.showSuccess(type, name);
  }
  function generateDirective() {
    // TODO
    Utils.showSuccess(type, name);
  }
}

module Utils {
  const c = require('colors');  
  export function isValidType(type: string) {
    return Generator.types.indexOf(type) >= 0;
  }
  export function mkdir(path: string) {
    if (!fs.existsSync(path)) { fs.mkdirSync(path); }
  }
  export function showError(err: any) {
    console.log(c.red('ERROR: ' + err));
  }
  export function showErrorInvalidArgs() {
    console.log(c.red('ERROR: Invalid args'));
    console.log('       Usage example: ' + c.green('generator TYPE NAME'));
    console.log('       TYPE must be one of: ' + c.green(Generator.types.join(', ')));
    console.log('       NAME must be lowercase with - separating words: looks-like-this');
  }
  export function showSuccess(type: string, name: string) {
    console.log(
      c.green('Success!') + ' Generated a ' + c.green(type) +' named ' + c.green(name)
    );
  }
  export function snakeToCamelCase(s: string){
    let r = s.replace(/(\-\w)/g, function(m) { return m[1].toUpperCase(); });
    return r.charAt(0).toUpperCase() + r.slice(1);
  }
  export function replaceFileContent(content: string, name: string) {
    let className = Utils.snakeToCamelCase(name);
    content = content.replace(/\$FILENAME\$/gi, name);
    content = content.replace(/\$CLASSNAME\$/gi, className);
    return content;
  }
}

// Initilize
Generator.init(process.argv);




