import * as fs from 'fs';

export module Translator {
  
  export function init(csvFile: string) {
    if (csvFile == null || csvFile.toUpperCase().endsWith('.CSV')) {
      console.log('Args example: csv_file_to_translate.csv');
    } else {
      fs.readFile(csvFile, 'utf8', csvHandler);
    }
  }

  function csvHandler(err: any, data: string) {
    if (err) throw err;

    // get one level JSON
    let obj = csvToJson(data);

    // parse JSON to multiple levels
    let multiLevelObj = getMultiLevelJson(obj);

    // make JSON string
    let str = JSON.stringify(multiLevelObj, null, 2);

    // write result to file
    let csvFile = process.argv[2];
    let fileName = csvFile.slice(0, csvFile.toUpperCase().lastIndexOf('.CSV'));
    let destFile = `${fileName}.json`;
    fs.writeFileSync(destFile, str, 'utf8');
  }

  function csvToJson(data: string) {
    let obj: any = {};
    let csvEOL = (data.indexOf('\r\n') > -1) ? '\r\n' : '\n';
    data.split(csvEOL).forEach(line => {
      let attr = line.slice(0, line.indexOf(';'));
      obj[attr] = line.slice(line.indexOf(';') + 1);
    });
    return obj;
  }

  function getMultiLevelJson(jsonObject: any) {
    let obj: any = {};
    Object.keys(jsonObject).forEach(key => {
      let splitKeys = key.split('/');
      createEntries(obj, splitKeys, jsonObject[key]);
    });
    return obj;
  }

  function createEntries(obj: any, splitKeys: string[], value: any) {
    if (splitKeys.length > 1) {
      if (!obj[splitKeys[0]]) {
        obj[splitKeys[0]] = {};
      }
      createEntries(obj[splitKeys[0]], splitKeys.slice(1), value);
    } else {
      obj[splitKeys[0]] = value;
    }
  }

}
