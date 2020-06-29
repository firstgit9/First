
const { SpecReporter } = require('jasmine-spec-reporter');
const fs = require("fs")
const path = require("path")


//copy the $file to $dir2
var copyFile = (file, dir2)=>{
   //include the fs, path modules
  var fs = require('fs');
  var path = require('path');

  //gets file name and adds it to dir2
  var f = path.basename(file);
  var source = fs.createReadStream(file);
  var dest = fs.createWriteStream(path.resolve(dir2, f));

  source.pipe(dest);
  source.on('end', function() { console.log('Succesfully copied'); });
  source.on('error', function(err) { console.log(err); });
}; 




let addScreenShots = new function () {
  this.specDone = function (result) {
    if (result.status === 'failed') {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
      });
    }
  };
}
exports.config = {
  // The address of a running selenium server.
  directConnect: true,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine2',
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['../demotypescript/lib/src/specs/loginpagespec.js',
           '../demotypescript/lib/src/specs/homepagespec.js'    

],
  onPrepare: function () {
    browser.manage().deleteAllCookies();
    browser.manage().timeouts().pageLoadTimeout(50000);
    browser.manage().timeouts().implicitlyWait(50000);
    browser.driver.manage().window().maximize();
    var jasmineReporters = require('jasmine-reporters');
jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    consolidateAll: true,
    savePath: './',

    filePrefix: 'xmlresults'
}))
    
  

    browser.ignoreSynchronization = true;
  },
  onComplete: function() {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
       browserName = caps.get('browserName');
       browserVersion = caps.get('version');

       var HTMLReport = require('protractor-html-reporter');

       testConfig = {
           reportTitle: 'Test Execution Report',
           outputPath: './',
           screenshotPath: './screenshots',
           testBrowser: browserName,
           browserVersion: browserVersion,
           modifiedSuiteName: false,
           screenshotsOnlyOnFailure: true
       };
       new HTMLReport().from('../demotypescript/xmlresults.xml', testConfig);
   });
},
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};
