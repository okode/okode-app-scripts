import * as fs from 'fs';

// Generator --------------------------------------------------------------------------------------

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
      case 'directive': generateDirective(); break;
      case 'pipe':      generatePipe(); break;
      case 'service':   generateService(); break;
    }
  }

  // page

  async function generatePage() {
    Utils.mkdir('./pages');
    Utils.mkdir(`./pages/${name}`);
    // .ts
    let tmpl = await read(`${tmplDir}/page/ts.tmpl`);
    await write(`./pages/${name}/${name}.ts`, Utils.replaceTmpl(tmpl, name));
    // .module.ts
    tmpl = await read(`${tmplDir}/page/module.ts.tmpl`);
    await write(`./pages/${name}/${name}.module.ts`, Utils.replaceTmpl(tmpl, name));
    // .html
    tmpl = await read(`${tmplDir}/page/html.tmpl`);
    await write(`./pages/${name}/${name}.html`, Utils.replaceTmpl(tmpl, name));
    // .scss
    tmpl = await read(`${tmplDir}/page/scss.tmpl`);
    await write(`./pages/${name}/${name}.scss`, Utils.replaceTmpl(tmpl, name));
    //
    Utils.showSuccess(type, name);
  }

  // component

  async function generateComponent() {
    Utils.mkdir('./components');
    Utils.mkdir(`./components/${name}`);
    // .ts
    let tmpl = await read(`${tmplDir}/component/ts.tmpl`);
    await write(`./components/${name}/${name}.ts`, Utils.replaceTmpl(tmpl, name));
    // .module.ts
    tmpl = await read(`${tmplDir}/component/module.ts.tmpl`);
    await write(`./components/${name}/${name}.module.ts`, Utils.replaceTmpl(tmpl, name));
    // .html
    tmpl = await read(`${tmplDir}/component/html.tmpl`);
    await write(`./components/${name}/${name}.html`, Utils.replaceTmpl(tmpl, name));
    // .scss
    tmpl = await read(`${tmplDir}/component/scss.tmpl`);
    await write(`./components/${name}/${name}.scss`, Utils.replaceTmpl(tmpl, name));
    //
    Utils.showSuccess(type, name);
  }

  // directive

  async function generateDirective() {
    Utils.mkdir('./directives');
    Utils.mkdir(`./directives/${name}`);
    // .ts
    let tmpl = await read(`${tmplDir}/directive/ts.tmpl`);
    await write(`./directives/${name}/${name}.ts`, Utils.replaceTmpl(tmpl, name));
    // .module.ts
    tmpl = await read(`${tmplDir}/directive/module.ts.tmpl`);
    await write(`./directives/${name}/${name}.module.ts`, Utils.replaceTmpl(tmpl, name));
    //
    Utils.showSuccess(type, name);
  }

  // pipe

  async function generatePipe() {
    Utils.mkdir('./pipes');
    Utils.mkdir(`./pipes/${name}`);
    // .ts
    let tmpl = await read(`${tmplDir}/pipe/ts.tmpl`);
    await write(`./pipes/${name}/${name}.ts`, Utils.replaceTmpl(tmpl, name));
    // .module.ts
    tmpl = await read(`${tmplDir}/pipe/module.ts.tmpl`);
    await write(`./pipes/${name}/${name}.module.ts`, Utils.replaceTmpl(tmpl, name));
    //
    Utils.showSuccess(type, name);
  }

  // service

  async function generateService() {
    Utils.showError('TODO generateService');
  }

}

// Utils ------------------------------------------------------------------------------------------

module Utils {

  const types = [ 'page', 'component', 'directive', 'pipe', 'service' ];
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

// ------------------------------------------------------------------------------------------------

Generator.init(process.argv);