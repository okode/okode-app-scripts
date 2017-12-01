import * as fs from 'fs';

module Generator {
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
  // private
  const fs = require('fs');
  const util = require('util');
  const read = util.promisify(fs.readFile);
  const write = util.promisify(fs.writeFile);
  const tmplDir = __dirname + '/templates';
  let type: string;
  let name: string;
  function generate() {
    switch (type) {
      case 'page':      generatePage(); break;
      case 'component': generateComponent(); break;
      case 'pipe':      generatePipe(); break;
      case 'service':   generateService(); break;
      case 'directive': generateDirective(); break;
    }
  }
  async function generatePage() {
    Utils.mkdir('./pages');
    Utils.mkdir(`./pages/${name}`);
    // create page.ts
    let tmpl = await read(`${tmplDir}/page/ts.tmpl`);
    await write(`./pages/${name}/${name}.ts`, Utils.replaceTmpl(tmpl, name));
    // create page.module.ts
    tmpl = await read(`${tmplDir}/page/module.ts.tmpl`);
    await write(`./pages/${name}/${name}.module.ts`, Utils.replaceTmpl(tmpl, name));
    // create page.html
    tmpl = await read(`${tmplDir}/page/html.tmpl`);
    await write(`./pages/${name}/${name}.html`, Utils.replaceTmpl(tmpl, name));
    // create page.scss
    tmpl = await read(`${tmplDir}/page/scss.tmpl`);
    await write(`./pages/${name}/${name}.scss`, Utils.replaceTmpl(tmpl, name));
    // complete
    Utils.showSuccess(type, name);
  }
  function generateComponent() {
    // TODO
    Utils.showError('TODO generateComponent');
  }
  function generatePipe() {
    // TODO
    Utils.showError('TODO generatePipe');
  }
  function generateService() {
    // TODO
    Utils.showError('TODO generateService');
  }
  function generateDirective() {
    // TODO
    Utils.showError('TODO generateDirective');
  }
}

module Utils {
  const types = [ 'page', 'component', 'pipe', 'service', 'directive' ];
  const c = require('colors');
  export function isValidType(type: string) {
    return types.indexOf(type) >= 0;
  }
  export function mkdir(path: string) {
    if (!fs.existsSync(path)) { fs.mkdirSync(path); }
  }
  export function showError(err: any) {
    console.log('\n' + c.red('ERROR: ' + err) + '\n');
  }
  export function showErrorInvalidArgs() {
    console.log('\n' + c.red('ERROR: Invalid args'));
    console.log('       Usage example: ' + c.green('generator TYPE NAME'));
    console.log('       TYPE must be one of: ' + c.green(types.join(', ')));
    console.log('       NAME must be lowercase with - separating words: looks-like-this\n');
  }
  export function showSuccess(type: string, name: string) {
    console.log('\n' + c.green('Success!'));
    console.log('Generated a ' + c.green(type) +' named ' + c.green(name) + '\n');
  }
  export function snakeToCamelCase(s: string){
    let r = s.replace(/(\-\w)/g, function(m) { return m[1].toUpperCase(); });
    return r.charAt(0).toUpperCase() + r.slice(1);
  }
  export function replaceTmpl(content: any, name: string) {
    let className = Utils.snakeToCamelCase(name);
    content = content.toString();
    content = content.replace(/\$FILENAME\$/gi, name);
    content = content.replace(/\$CLASSNAME\$/gi, className);
    return content;
  }
}

Generator.init(process.argv);