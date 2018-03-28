var fs = require('fs');
var path = require('path');

module.exports = function(context) {

    let projectRoot = context.opts.projectRoot;
    let cordovaMajor = parseInt(context.opts.cordova.version.charAt(0));

    if (cordovaMajor >= 8) {

      for (let platform of context.opts.platforms) {
          
          // Compute destination folder
          let destinationDir = 'platforms/ios/www/build';
          if (platform == 'android') {
            destinationDir = 'platforms/android/app/src/main/assets/www/build';
          }

          let buildDir = path.join(projectRoot, destinationDir);
          fs.readdirSync(buildDir).filter(file => file.endsWith('.js')).forEach(jsFile => {
            let jsFullPath = path.join(buildDir, jsFile);
            let jsMapFullPath = jsFullPath + '.map';
            if (fs.existsSync(jsMapFullPath)) {
              let data = fs.readFileSync(jsFullPath);
              if (data.indexOf('//# sourceMappingURL=') == -1) {
                console.log('Adding missing source mapping URL: ' + jsFullPath);
                fs.appendFileSync(jsFullPath, '//# sourceMappingURL=' + jsFile + '.map');
              }
            }
          });
          
      }

    } else {

      // Do nothing for debug builds (Ionic already add sourcemaps to debug builds)
      if (!context.opts.options.release) return;

      for (let platform of context.opts.platforms) {
          
          // Compute destination folder
          let destinationDir = 'platforms/ios/www/build';
          if (platform == 'android') {
            destinationDir = 'platforms/android/assets/www/build';
            if (!fs.existsSync(destinationDir)) {
              destinationDir = 'platforms/android/app/src/main/assets/www/build';
            }
          }

          // Copy source map to destination folder
          let sourceMainJSMap = path.join(projectRoot, '.sourcemaps/main.js.map');
          let destinationMainJSMap = path.join(projectRoot, destinationDir + '/main.js.map');
          fs.writeFileSync(destinationMainJSMap, fs.readFileSync(sourceMainJSMap));

          // Append source mapping URL comment to main.js
          let mainJS = path.join(projectRoot, destinationDir + '/main.js');
          fs.appendFileSync(mainJS, '//# sourceMappingURL=main.js.map');
      }

    }

}
