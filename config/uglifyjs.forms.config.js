/**
 * uglify custom config
 */
module.exports = {
  /**
   * mangle: uglify 2's mangle option
   */
  mangle: {
    reserved: getClassNamesInFolders([
      './src/models'
    ])
  },
  /**
   * compress: uglify 2's compress option
   */
  compress: {
    toplevel: true,
    pure_getters: true
  }
};

/*************************************************************************************************/

function getClassNamesInFolders(folders) {
  const fs = require('fs');
  let reservedList = [];
  if (folders) {
    for (let folder of folders) {
      let files = fs.readdirSync(folder);
      for (let file of files) {
        let data = fs.readFileSync(folder + '/' + file, 'utf8');
        let re = /export class([^{]*){/g;
        while (match = re.exec(data)) {
          let className = match[1].trim();
          reservedList.push(className);
        }
      }
    }
  }
  return reservedList;
}
