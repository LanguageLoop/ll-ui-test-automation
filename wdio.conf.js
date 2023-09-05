const parameters =require('./params.js')
var HtmlReporter= require('@rpii/wdio-html-reporter').HtmlReporter
var ReportAggregator = require('@rpii/wdio-html-reporter').ReportAggregator
//var reportAggregator =require('@rpii/wdio-html-reporter').ReportAggregator
var htmlFormat = require('wdio-html-format-reporter')
const GlobalData=require('./test/data/GlobalData')
GlobalData.BASE_URL="https://li-test.languageloop.com.au/LoopedIn_th/Login.aspx"
GlobalData.DEV_URL="https://li-test.languageloop.com.au/DeveloperScreen/Home.aspx"

const { Given, When, Then, AfterAll } = require('cucumber');

var bulkUploadPage=require('./test/pages/Booking/BulkUploadPage')
var jobRequestPage=require('./test/pages/Booking/JobRequestPage')
var jobDetailsPage=require('./test/pages/Booking/JobDetailsPage')

var interpretingPage=require('./test/pages/Interpreting/InterpretingPage')
var Login = require( './test/pages/Login/Login')

var homePage=require('./test/pages/Home/HomePage')
var claimsPage=require('./test/pages/Claims/ClaimsPage')
var devPage=require('./test/pages/DevPage/DevPage')
var campusDetailsPage=require('./test/pages/CampusDetails/CampusDetails')
var accountManagementPage=require('./test/pages/AccountManagement/AccountManagementPage')
var contractManagementPage= require('./test/pages/ContractManagement/ContractManagement')
var contractorEngagementPage= require('./test/pages/ContractorEngagement/ContractorEngagement')
var translationsPage= require('./test/pages/Translations/TranslationsPage')
//var xtmPage = require('./test/pages/Translations/XTMPage')
var myProfilePage= require('./test/pages/MyProfile/MyProfile')
var adminPage = require('./test/pages/Home/AdminPage.js')
var ODTIJobsPage = require('./test/pages/ODTI/ODTIJobsPage.js')
var ODTIInterpretersPage = require('./test/pages/ODTI/ODTIInterpretersPage.js')
var organisationPage = require('./test/pages/AccountManagement/OrganisationDetails.js')
var DIDConfigurationsPage = require('./test/pages/ODTI_UI/DIDConfigurations.js')
var newCampusConfigurationPage = require('./test/pages/ODTI_UI/NewCampusConfiguration.js')
var editCampusConfigurationPage = require('./test/pages/ODTI_UI/EditCampusConfiguration.js')
var newDIDConfigurationPage = require('./test/pages/ODTI_UI/NewDIDConfiguration.js')
var editDIDConfigurationPage = require('./test/pages/ODTI_UI/EditDIDConfiguration.js')
var ODTIJobDetailsPage = require('./test/pages/ODTI/ODTIJobDetails.js')
var adminToolsHomePage = require('./test/pages/AdminTools/HomePage.js')
var ODTIContractorsPage = require('./test/pages/AdminTools/ODTIContractorsPage.js')
var ODTIDashboardPage = require('./test/pages/ODTI/ODTIDashboardPage.js')

var chai= require('chai')
var action=require('./test/utils/actions')
var datetime=require('./test/utils/datetime')
var fs = require('fs')
var JOB_ID_FILENAME="jobid.txt"
var scenarioName=""
const log4js = require("log4js");
exports.config = {
  
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
    // on a remote machine).
  reporters: 
  ['spec', ['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: false,
}],
 [ HtmlReporter,
   {
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'Test Report Title',
            
            //to show the report in a browser when done
            showInBrowser: false,

            //to turn on screenshots after every test
            useOnAfterCommandForScreenshot: false,  

    
  }],
  ['junit', {
    outputDir: './reports/junit/',
    outputFileFormat: function (options) {
        return 'testresults.xml';
    },
    packageName: "LanguageLoop" // chrome.41 - administrator
}]
],
    // ...    
  
    runner: 'local',
    port:4444,
    path: '/wd/hub',

    //
    // ==================
    // Specify Test Files
    // ==================
    // Define which test specs should run. The pattern is relative to the directory
    // from which `wdio` was called. Notice that, if you are calling `wdio` from an
    // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
    // directory is where your package.json resides, so `wdio` will be called from there.
    //
    specs: [
        './test/features/**/*.feature'
        // './test/features/**/Claims.feature'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
        './test/features/InterpretingBookingManagement/InterpreterStatus.feature',
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://docs.saucelabs.com/reference/platforms-configurator
    //
    capabilities: [{
    
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
       // maxInstances: 5,
        //
        browserName: 'chrome',
        'goog:chromeOptions': {
            args:['window-size=2880,1800'], 
            //args:['window-size=1280,720'], 
            //args: ['--start-maximized'] ,
            prefs: {
                profile: {
                    default_content_settings: {
                        popups: 0,
                    },
                },
                download: {
                    default_directory: process.cwd(),
                    prompt_for_download: false,
                }
            },
          
                //"binary":"C:/Program Files/Google/Chrome/Application/chrome.exe"
               
           }
        // If outputDir is provided WebdriverIO can capture driver session logs
        // it is possible to configure which logTypes to include/exclude.
        // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
        // excludeDriverLogs: ['bugreport', 'server'],
    }],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'error',
    //logLevel:'info',
    //
    // Set specific log levels per logger
    // loggers:
    // - webdriver, webdriverio
    // - @wdio/applitools-service, @wdio/browserstack-service, @wdio/devtools-service, @wdio/sauce-service
    // - @wdio/mocha-framework, @wdio/jasmine-framework
    // - @wdio/local-runner, @wdio/lambda-runner
    // - @wdio/sumologic-reporter
    // - @wdio/cli, @wdio/config, @wdio/sync, @wdio/utils
    // Level of logging verbosity: trace | debug | info | warn | error | silent
     /*logLevels: {
        webdriver: 'error',
        '@wdio/applitools-service': 'error'
     },*/
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: '',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 20000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['docker'],
    //services: ['chromedriver'],
    dockerLogs: './logs',
    dockerOptions: {
        image: 'selenium/standalone-chrome',
        healthCheck: {
            url: 'http://localhost:4444',
            maxRetries: 3,
            inspectInterval: 2000,
            startDelay: 5000
        },
        options: {
            p: ['4444:4444'],
            e: ['SCREEN_WIDTH: 2400', 'SCREEN_HEIGHT: 1800'],
            shmSize: '2g'
        }
    },
    
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'cucumber',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    specFileRetries: 2,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter.html
   
 //
    // If you are using Cucumber you need to specify the location of your step definitions.
    cucumberOpts: {
        require: ['./test/stepdefinition/**/*.js'],        // <string[]> (file/dir) require files before executing features
        backtrace: false,   // <boolean> show full backtrace for errors
        requireModule: [],  // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
        dryRun: false,      // <boolean> invoke formatters without executing steps
        failFast: false,    // <boolean> abort the run on first failure
        format: ['pretty'], // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        colors: true,       // <boolean> disable colors in formatter output
        snippets: true,     // <boolean> hide step definition snippets for pending steps
        source: true,       // <boolean> hide source uris
        profile: [],        // <string[]> (name) specify the profile to use
        strict: false,      // <boolean> fail if there are any undefined or pending steps
        tagExpression:parameters.tags ,  // <string> (expression) only execute the features or scenarios with tags matching the expression
        timeout: 2000000,     // <number> timeout for step definitions
        ignoreUndefinedDefinitions: false, // <boolean> Enable this config to treat undefined definitions as warnings.
        retry: 1
    },
    
    //
    // =====
    // Hooks
    // =====
    // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
    // it and to build services around it. You can either apply a single function or an array of
    // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
    // resolved to continue.
    /**
     * Gets executed once before all workers get launched.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     */
     onPrepare: function (config, capabilities) {
       // GlobalData=require('./test/data/GlobalData')
       let reportAggregator = new ReportAggregator({
        outputDir: './reports/html-reports/',
        filename: 'master-report.html',
        reportTitle: 'Master Report',
        browserName : 'chrome',
        // to use the template override option, can point to your own file in the test project:
        // templateFilename: path.resolve(__dirname, '../template/wdio-html-reporter-alt-template.hbs')
    });
    reportAggregator.clean() ;

    global.reportAggregator = reportAggregator;
        fs.rmdirSync('reports/logs', { recursive: true });
     },
    /**
     * Gets executed before a worker process is spawned and can be used to initialise specific service
     * for that worker as well as modify runtime environments in an async fashion.
     * @param  {String} cid      capability id (e.g 0-0)
     * @param  {[type]} caps     object containing capabilities for session that will be spawn in the worker
     * @param  {[type]} specs    specs to be run in the worker process
     * @param  {[type]} args     object that will be merged with the main configuration once worker is initialised
     * @param  {[type]} execArgv list of string arguments passed to the worker process
     */
    // onWorkerStart: function (cid, caps, specs, args, execArgv) {
    // },
    /**
     * Gets executed just before initialising the webdriver session and test framework. It allows you
     * to manipulate configurations depending on the capability or spec.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
     beforeSession: function (config, capabilities, specs) {

        //set up the base url for li-test

        //job id list output file name. this list of job ids can be used to verify the triggered email
        global.JOB_ID_FILENAME= JOB_ID_FILENAME
        
        global.fs= fs
        global.scenarioName=scenarioName
        // Test data variables
        global.GlobalData=GlobalData

        //Utility function variables
        global.action=action
        global.datetime=datetime

        // Cucumber library variables        
        global.Given=Given 
        global.When=When
        global.Then=Then
        global.AfterAll=AfterAll

        // Chai library variables
        global.chai=chai
        
        // Page object file variables
        global.jobRequestPage=jobRequestPage
        global.bulkUploadPage=bulkUploadPage
        global.jobDetailsPage=jobDetailsPage
        global.interpretingPage=interpretingPage
        global.Login=Login
        global.homePage=homePage
        global.claimsPage=claimsPage
        global.myProfilePage= myProfilePage
        global.devPage= devPage
        global.campusDetailsPage=campusDetailsPage
        global.accountManagementPage=accountManagementPage
        global.contractManagementPage=contractManagementPage
        global.contractorEngagementPage= contractorEngagementPage
        global.adminPage = adminPage
        global.ODTIJobsPage = ODTIJobsPage
        global.ODTIInterpretersPage = ODTIInterpretersPage
        global.organisationPage = organisationPage
        global.DIDConfigurationsPage = DIDConfigurationsPage
        global.newCampusConfigurationPage = newCampusConfigurationPage
        global.editCampusConfigurationPage = editCampusConfigurationPage
        global.newDIDConfigurationPage = newDIDConfigurationPage
        global.editDIDConfigurationPage = editDIDConfigurationPage
        global.ODTIJobDetailsPage = ODTIJobDetailsPage
        global.adminToolsHomePage = adminToolsHomePage
        global.ODTIContractorsPage = ODTIContractorsPage
        global.translationsPage=translationsPage
        global.ODTIDashboardPage=ODTIDashboardPage
        //global.xtmPage = xtmPage
        
     },
    /**
     * Gets executed before test execution begins. At this point you can access to all global
     * variables like `browser`. It is the perfect place to define custom commands.
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that are to be run
     */
     before: function (capabilities, specs) {
        fs.writeFile(JOB_ID_FILENAME, "", (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
            console.log('Job id list file created');
        });
     },
    /**
     * Runs before a WebdriverIO command gets executed.
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     */
    // beforeCommand: function (commandName, args) {
    // },
    /**
     * Runs before a Cucumber feature
     */
    // beforeFeature: function (uri, feature, scenarios) {
    // },
    /**
     * Runs before a Cucumber scenario
     */
     beforeScenario: function (uri, feature, scenario, sourceLocation) {
        console.log("---------------------------------------------------------------------------------------------");
        console.log("Scenario: "+scenario.name);
         GlobalData.EDIT_BOOKING_SEARCH_JOB_ID=""
         GlobalData.ACCEPT_BOOKING_JOB_ID=""
         GlobalData.CURRENT_JOB_ID=""
         //GlobalData.CURRENT_PROJECT_ID=""
         global.scenarioName=scenario.name

        log4js.configure({
            appenders: {
                [scenario.name]: {type: "file", filename: 'reports/logs/testExecution.log'},
                console: {type: 'console'}
            },
            categories: {default: {appenders: [scenario.name, 'console'], level: "info"}}
        });
        const logger = log4js.getLogger('LL');
        global.logger = logger
     },
    /**
     * Runs before a Cucumber step
     */
    // beforeStep: function ({ uri, feature, step }, context) {
    // },
    /**
     * Runs after a Cucumber step
     */
     afterStep: function ({ uri, feature, step }, context, { error, result, duration, passed, retries }) {
        const path = require('path');
        const moment = require('moment');

       // if test passed, ignore, else take and save screenshot.
        if (!passed) {
        const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
        const filepath = path.join('reports/html-reports/screenshots/', timestamp + '.png');
        browser.saveScreenshot(filepath);
       process.emit('test:screenshot', filepath);
        }
     },
    /**
     * Runs after a Cucumber scenario
     */
    afterScenario: function (uri, feature, scenario, result, sourceLocation) {
        if (result.status === "passed") {
            console.log("\t\t***************PASSED***************")
        } else {
            console.log("\t\t###############FAILED###############")
        }
      /*  fs.appendFile(JOB_ID_FILENAME, "Job id : "+GlobalData.CURRENT_JOB_ID +" Test : "+scenario.name + "\n", (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;
        
            // success case, the file was saved
        }); */
     }, 
    /**
     * Runs after a Cucumber feature
     */
    // afterFeature: function (uri, feature, scenarios) {
    // },
    
    /**
     * Runs after a WebdriverIO command gets executed
     * @param {String} commandName hook command name
     * @param {Array} args arguments that command would receive
     * @param {Number} result 0 - command success, 1 - command error
     * @param {Object} error error object if any
     */
    // afterCommand: function (commandName, args, result, error) {
    // },
    /**
     * Gets executed after all tests are done. You still have access to all global variables from
     * the test.
     * @param {Number} result 0 - test pass, 1 - test fail
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // after: function (result, capabilities, specs) {
    // },
    /**
     * Gets executed right after terminating the webdriver session.
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {Array.<String>} specs List of spec file paths that ran
     */
    // afterSession: function (config, capabilities, specs) {
    // },
    /**
     * Gets executed after all workers got shut down and the process is about to exit. An error
     * thrown in the onComplete hook will result in the test run failing.
     * @param {Object} exitCode 0 - success, 1 - fail
     * @param {Object} config wdio configuration object
     * @param {Array.<Object>} capabilities list of capabilities details
     * @param {<Object>} results object containing test results
     */
     onComplete: async function(exitCode, config, capabilities, results) {
        (async () => {
            await global.reportAggregator.createReport();
        })();
     },
    /**
    * Gets executed when a refresh happens.
    * @param {String} oldSessionId session ID of the old session
    * @param {String} newSessionId session ID of the new session
    */
    //onReload: function(oldSessionId, newSessionId) {
    //}
}
