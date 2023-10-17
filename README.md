# ll-ui-test-automation

## Pre requisites:

1) Nodejs 12.x.x
2) Webdriverio
3) Chrome
4) Firefox
5) Cucumber
6) Visual Studio Code (IDE)

## Setup steps:

### Nodejs Setup :

1) download and install Nodejs 12.x.x from this url https://nodejs.org/en/download/ 
2) Open a terminal/command window and type "node -v" to confirm node has been installed correctly

### Java Setup :
1) download and install Java from this url https://www.oracle.com/au/java/technologies/javase/javase8-archive-downloads.html
2) Set the JAVA_HOME path (refer https://docs.oracle.com/cd/E19182-01/821-0917/inst_jdk_javahome_t/index.html#:~:text=To%20set%20JAVA_HOME%2C%20do%20the,Program%20Files%5CJava%5Cjdk1)
3) Open a terminal/command window and type "java -version" to confirm java has been installed correctly

### Framework Setup:

1) clone the repository from github (develop branch for base copy and premaster branch for working copy)
2) open the project in Visual Studio Code
3) in the terminal (from the root folder of the project) type "npm install"
4) all the dependencies will be automatically installed.

### Browser installation:
1) Ensure chrome browser is installed in your computer

### Start Chromedriver for local execution:
The new Chrome for Testing feature is for latest webdriverio versions (>=8.0). Following steps can be followed to download and start the chromedriver for older webdriverio and legacy NodeJS versions.
1) Check the version of the installed Chrome browser.
2) Navigate to https://googlechromelabs.github.io/chrome-for-testing/
3) Find the matching chromedriver based on version and platform
4) Download the chromedriver using the link provided
5) Unzip and place the chromedriver.exe file in the project root directory
6) Open a new terminal and start the chromedriver.exe from the root folder of the project using the command `.\chromedriver.exe -port=4444`

## Test Execution

Use the following command to run all the tests :

npm run test

Use the following command to run tests with certain tags :

npm run test tags=@Booking,@AllocateJobs

### Test Folder Structure
- utils 

actions.js - reusable webdriverio action methods

datetime.js - reusable date and time methods

- pages

Contains locators that are defined using getter methods by following the page object model

- stepdefinition

Contains Given, When, Then etc. steps that are defined by following the page object model. Here the locators are called from respective pages by using the reusable actions from utils.

- features

Contains feature files which are organized based on functionality. Here the step definitions are called.

- data

GlobalData file is used to define global variables

Contains data files used to test file upload related scenarios

Contains excel data sheets used in requirement based data driven automated flows which run on production

