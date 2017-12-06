var fs = require('fs');
var path = require('path');

module.exports = function(context) {

    // Do nothing for debug builds (Ionic already add sourcemaps to debug builds)
    if (!context.opts.options.release) return;

    var projectRoot = context.opts.projectRoot;

    for (let platform of context.opts.platforms) {
        
        // Compute destination folder
        let destinationDir = platform == 'android' ?
          'platforms/android/assets/www/build' : 'platforms/ios/www/build';

        // Copy source map to destination folder
        let sourceMainJSMap = path.join(projectRoot, '.sourcemaps/main.js.map');
        let destinationMainJSMap = path.join(projectRoot, destinationDir + '/main.js.map');
        fs.writeFileSync(destinationMainJSMap, fs.readFileSync(sourceMainJSMap));

        // Append source mapping URL comment to main.js
        let mainJS = path.join(projectRoot, destinationDir + '/main.js');
        fs.appendFileSync(mainJS, '//# sourceMappingURL=main.js.map');

    }

}
