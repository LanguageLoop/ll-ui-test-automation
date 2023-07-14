
When(/^I handle the message for interpreters dialog$/, function(){
  browser.pause(3000)
  try{
    interpretingPage.messageForInterpreterOKButton.waitForExist({timeout:10000})

    action.clickElement(interpretingPage.messageForInterpreterOKButton)


  }
  catch(Err)
  {
  }
})

When(/^I select "(.*)" from the filter dropdown$/,   function(listitem){
  browser.pause(2000)
  action.isVisibleWait(interpretingPage.filterDropdown,20000)
  action.selectTextFromDropdown(interpretingPage.filterDropdown,listitem)
  browser.pause(2000)
})

When(/^I click on new job request button$/,function(){
  action.isVisibleWait(interpretingPage.newJobRequestButton,20000);
  action.clickElement(interpretingPage.newJobRequestButton)
})

When(/^I select "(.*)" job status$/,function(jobstatus){
  action.isVisibleWait(interpretingPage.jobStatusDropdown,30000);
  action.selectTextFromDropdown(interpretingPage.jobStatusDropdown,jobstatus)
  browser.pause(8000);

  browser.waitUntil(()=> {
    return interpretingPage.jobStatusDropdown.getValue()!='__ossli_0'},
    {timeout: 15000, timeoutMsg: ' dropdown value not selected with in 15s', interval:500})
  //browser.pause(2000)
})


When(/^I click on job id from interpreting job search results$/, function(){
  browser.pause(2000)
  action.isVisibleWait(interpretingPage.jobIdColumnFromSearchResult,30000);
  action.clickElement(interpretingPage.jobIdColumnFromSearchResult)
  browser.pause(5000)
})

When(/^I click on first job id from interpreting job list$/, function(){
  browser.pause(2000)
  GlobalData.CURRENT_JOB_ID = interpretingPage.jobIdColumnFromSearchResult.getText()
  action.isVisibleWait(interpretingPage.jobIdLinkFromSearchResult,20000);
  action.clickElement(interpretingPage.jobIdLinkFromSearchResult)
  browser.pause(5000)
})

When(/^I click on first job id from accepted job list$/, function(){
  browser.pause(2000)
  action.isVisibleWait(interpretingPage.jobIdLinkFromSearchResult,20000)
  action.doubleClickElement(interpretingPage.jobIdLinkFromSearchResult)
})

When(/^I switch to the job allocation window$/, function(){
  browser.switchWindow('Job Allocation *')
})


When(/^I click on bulk upload button$/, function(){
  browser.pause(2000)
  action.isVisibleWait(interpretingPage.bulkUploadButton,20000,"Bulk upload button in Interpreting steps")
  action.clickElement(interpretingPage.bulkUploadButton)
  browser.pause(2000)
})

When(/^I search for created job request$/, function(){
  action.isVisibleWait(interpretingPage.searchJobInput,30000);
  action.clickElement(interpretingPage.searchJobInput)
  action.clearValue(interpretingPage.searchJobInput)
  action.enterValueAndPressReturn(interpretingPage.searchJobInput,GlobalData.CURRENT_JOB_ID.toString())
  console.log("JOB ID: "+GlobalData.CURRENT_JOB_ID.toString());
  action.pressKeys("Tab");
  let expectedJobIdResultLoc = '//*[text()="<dynamic>"]'.replace("<dynamic>", GlobalData.CURRENT_JOB_ID.toString())
  action.isVisibleWait($(expectedJobIdResultLoc), 90000, "Expected Job Id Result "+GlobalData.CURRENT_JOB_ID);
})

When(/^I search for selected job request$/, function(){
  action.isVisibleWait(interpretingPage.searchJobInput,20000);
  action.clickElement(interpretingPage.searchJobInput)
  action.clearValue(interpretingPage.searchJobInput)
  action.enterValueAndPressReturn(interpretingPage.searchJobInput,GlobalData.CURRENT_JOB_ID.toString())
})

When(/^I search for job request "(.*)"$/, function(jobid){
  action.isVisibleWait(interpretingPage.searchJobInput,20000)
  action.clickElement(interpretingPage.searchJobInput)
  action.clearValue(interpretingPage.searchJobInput)
  action.enterValueAndPressReturn(interpretingPage.searchJobInput,jobid)
  browser.pause(2000)
})

When(/^I enter from date "(.*)"$/, function(fromdate){
  action.isVisibleWait(interpretingPage.fromDateInput,20000)
  action.clickElement(interpretingPage.fromDateInput)
  action.enterValueAndPressReturn(interpretingPage.fromDateInput,fromdate)
})

When(/^I enter to date "(.*)"$/, function(todate){
  action.isVisibleWait(interpretingPage.toDateInput,20000)
  action.clickElement(interpretingPage.toDateInput)
  action.enterValueAndPressReturn(interpretingPage.toDateInput,todate)
})

When(/^I click on the show regional jobs checkbox$/, function(){
  action.isVisibleWait(interpretingPage.regionalJobsCheckbox,20000)
  action.clickElement(interpretingPage.regionalJobsCheckbox)
})

When(/^I click accept job button$/, function(){
  action.isVisibleWait(interpretingPage.acceptJobButton,20000);
  action.clickElement(interpretingPage.acceptJobButton)
})

When(/^I click reject job button$/, function(){
  action.isVisibleWait(interpretingPage.rejectJobButton,20000)
  action.clickElement(interpretingPage.rejectJobButton)
})

When(/^I click unavailable job button$/, function(){
  action.isVisibleWait(interpretingPage.unavailableJobButton,10000);
  action.clickElement(interpretingPage.unavailableJobButton)
  action.isNotVisibleWait(interpretingPage.unavailableJobButton,10000);
})

When(/^I click return job button$/, function(){
  action.isVisibleWait(interpretingPage.returnJobButton,10000);
  action.clickElement(interpretingPage.returnJobButton)
  action.isNotVisibleWait(interpretingPage.returnJobButton,10000);
  action.isVisibleWait(jobDetailsPage.returnThisJobPopup, 10000, "Return this job popup in Job Details page");
  action.selectTextFromDropdown(jobDetailsPage.returnReasonDropdown, "Accepted in Error", "Return reason dropdown on Return this job popup in Job Details page");
  action.clickElement(jobDetailsPage.returnJobPopupConfirmButton, "Confirm button on Return this job popup in Job Details page");
  action.isNotVisibleWait(jobDetailsPage.returnJobPopupConfirmButton, 10000,"Confirm button on Return this job popup in Job Details page");
})

When(/^I click "(.*)" user link$/, function(user){
  const  usernameElt = $('//*[text()="<dynamic>"]'.replace("<dynamic>",user));
  action.isVisibleWait(usernameElt,20000);
  action.clickElement(usernameElt);
})

When(/^I keep refreshing$/, function(){
  for(var i=0;i<600;i++)
  {
    browser.pause(2000)
    browser.refresh()
  }
})


Then(/^I verify the job table is displayed$/, function(){
  chai.expect(action.elementExists(interpretingPage.jobTable)).to.be.true
})

Then(/^I verify the job is listed in search results$/, function(){
  chai.expect(action.elementExists(interpretingPage.jobIdLinkFromSearchResult)).to.be.true
})

Then(/^The job id is added to the file$/, function(){
browser.pause(1000)
console.log("Scenario name :"+scenarioName)
  fs.appendFile(JOB_ID_FILENAME, "Job id : "+GlobalData.CURRENT_JOB_ID+" Test : "+scenarioName + "\n", (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
});
})

When(/^a user has accessed the Bookings "(.*)" screen$/, function (listItem) {
  action.isVisibleWait(interpretingPage.filterDropdown, 20000);
  action.selectTextFromDropdown(interpretingPage.filterDropdown, listItem);
})

When(/^the URL contains the CampusPIN parameter "(.*)"$/, function (campusPin) {
  action.launchURL("https://li-uat.languageloop.com.au/LoopedIn/Bookings.aspx?CampusPIN=" + campusPin);
})

Then(/^the Bookings Allocations screen will display$/, function () {
  let pageTitleActual = action.getPageTitle();
  chai.expect(pageTitleActual).to.includes("Bookings");
})

Then(/^a CampusPIN filter should be pre-filled with the given CampusPIN "(.*)"$/, function (campusPin) {
  let campusPinElement = $(interpretingPage.jobFilterFieldDropdownOptionLocator.replace("<dynamicIndex>","1").replace("<dynamicOption>","Campus PIN"));
  let campusPinFilterSelectedStatus = action.isSelectedWait(campusPinElement,20000);
  chai.expect(campusPinFilterSelectedStatus).to.be.true;
  let campusPinValuePreFilledElement = $(interpretingPage.jobFilterValueTextBoxLocator.replace("<dynamicIndex>","1"));
  let campusPinValuePreFilled = action.getElementValue(campusPinValuePreFilledElement);
  chai.expect(campusPinValuePreFilled).to.equal(campusPin);
})

Then(/the rest of the form should display as if the user has filtered by Campus PIN "(.*)"$/, function (campusName) {
  browser.pause(5000);
  let jobRowsCount = interpretingPage.jobTableRowsCount;
  for (let rowIndex = 1; rowIndex <= jobRowsCount; rowIndex++) {
    let campusNameTextElement = $(interpretingPage.jobTableDynamicTextValueLocator.replace("<dynamicRowIndex>",rowIndex.toString()).replace("<dynamicColumnIndex>","6"));
    let actualCampusNameText = action.getElementText(campusNameTextElement);
    chai.expect(actualCampusNameText).to.equal(campusName);
  }
})

When(/^the URL contains the ContractorID parameter "(.*)"$/, function (contractorID) {
  action.launchURL("https://li-uat.languageloop.com.au/LoopedIn/Bookings.aspx?ContractorId=" + contractorID);
})

Then(/^a ContractorID filter should be pre-filled with the given ContractorID "(.*)"$/, function (contractorID) {
  let contractorIDElement = $(interpretingPage.jobFilterFieldDropdownOptionLocator.replace("<dynamicIndex>","1").replace("<dynamicOption>","Contractor ID"));
  let contractorIDFilterSelectedStatus = action.isSelectedWait(contractorIDElement,20000);
  chai.expect(contractorIDFilterSelectedStatus).to.be.true;
  let contractorIDValuePreFilledElement = $(interpretingPage.jobFilterValueTextBoxLocator.replace("<dynamicIndex>","1"));
  let contractorIDValuePreFilled = action.getElementValue(contractorIDValuePreFilledElement);
  chai.expect(contractorIDValuePreFilled).to.equal(contractorID);
})

Then(/the rest of the form should display as if the user has filtered by ContractorID "(.*)"$/, function (interpreterName) {
  browser.pause(5000);
  let jobRowsCount = interpretingPage.jobTableRowsCount;
  for (let rowIndex = 1; rowIndex <= jobRowsCount; rowIndex++) {
    let interpreterNameTextElement = $(interpretingPage.jobTableDynamicTextValueLocator.replace("<dynamicRowIndex>",rowIndex.toString()).replace("<dynamicColumnIndex>","9"));
    let actualInterpreterNameText = action.getElementText(interpreterNameTextElement);
    chai.expect(actualInterpreterNameText).to.equal(interpreterName);
  }
})

Then(/^the results should not be displayed as there are no jobs to show$/, function () {
  let noJobsToShowMessageDisplayStatus = action.isVisibleWait(interpretingPage.jobTableNoJobsToShowMessage, 20000);
  chai.expect(noJobsToShowMessageDisplayStatus).to.be.true
})

When(/^enter the Campus pin "(.*)" that is Active in the URL$/, function (campusPin) {
  action.launchURL("https://li-uat.languageloop.com.au/LoopedIn/ClientBookings.aspx?CampusPIN=" + campusPin);
})

Then(/^a CampusPIN filter should not be displayed and pre filled with the given Campus PIN "(.*)"$/, function (campusPin) {
  let campusPinElement = $(interpretingPage.jobFilterFieldDropdownOptionLocator.replace("<dynamicIndex>", "1").replace("<dynamicOption>", "Campus PIN"));
  let campusPinFilterSelectedStatus = action.isSelectedWait(campusPinElement, 1000);
  chai.expect(campusPinFilterSelectedStatus).to.be.false;
  let campusPinValuePreFilledElement = $(interpretingPage.jobFilterValueTextBoxLocator.replace("<dynamicIndex>", "1"));
  let campusPinValuePreFilledDisplayStatus = action.isVisibleWait(campusPinValuePreFilledElement, 1000);
  if (campusPinValuePreFilledDisplayStatus === true) {
    let campusPinValuePreFilled = action.getElementValue(campusPinValuePreFilledElement);
    chai.expect(campusPinValuePreFilled).to.not.equal(campusPin);
  } else {
    chai.expect(campusPinValuePreFilledDisplayStatus).to.be.false;
  }
})

When(/^enter the ContractorID "(.*)" that is Active in the URL$/, function (contractorID) {
  action.launchURL("https://li-uat.languageloop.com.au/LoopedIn/ClientBookings.aspx?ContractorId=" + contractorID);
})

Then(/^a Contractor ID filter should not be displayed and pre filled with the given Contractor ID "(.*)"$/, function (contractorID) {
  let contractorIDElement = $(interpretingPage.jobFilterFieldDropdownOptionLocator.replace("<dynamicIndex>", "1").replace("<dynamicOption>", "Contractor ID"));
  let contractorIDFilterSelectedStatus = action.isSelectedWait(contractorIDElement, 1000);
  chai.expect(contractorIDFilterSelectedStatus).to.be.false;
  let contractorIDValuePreFilledElement = $(interpretingPage.jobFilterValueTextBoxLocator.replace("<dynamicIndex>", "1"));
  let contractorIDValuePreFilledDisplayStatus = action.isVisibleWait(contractorIDValuePreFilledElement, 1000);
  if (contractorIDValuePreFilledDisplayStatus === true) {
    let contractorIDValuePreFilled = action.getElementValue(contractorIDValuePreFilledElement);
    chai.expect(contractorIDValuePreFilled).to.not.equal(contractorID);
  } else {
    chai.expect(contractorIDValuePreFilledDisplayStatus).to.be.false;
  }
})

When(/^an internal user has accessed the Booking Request screen from URL$/, function () {
  action.launchURL("https://li-uat.languageloop.com.au/LoopedIn/BookingRequest.aspx");
})

When(/^the Booking Request URL contains the CampusPIN parameter "(.*)"$/, function (campusPin) {
  action.launchURL("https://li-uat.languageloop.com.au/LoopedIn/BookingRequest.aspx?CampusPIN=" + campusPin);
})

When(/^an CBO user has accessed the Booking Request screen from URL$/, function () {
  action.launchURL("https://li-uat.languageloop.com.au/LoopedIn/ClientBookingRequest.aspx");
})

When(/^user enters Campus PIN "(.*)" in the URL$/, function (campusPin) {
  action.launchURL("https://li-uat.languageloop.com.au/LoopedIn/ClientBookingRequest.aspx?CampusPIN=" + campusPin);
})

Then(/^the Bookings Management screen will display$/, function () {
  let pageTitleActual = action.getPageTitle();
  chai.expect(pageTitleActual).to.includes("Bookings");
  let filterDropdownManagementOption = $(interpretingPage.filterDropdownOption.replace("<dynamic>","Management"));
  let managementScreenSelected = action.isSelectedWait(filterDropdownManagementOption,10000,"Management option in filter dropdown in interpreting page");
  chai.expect(managementScreenSelected).to.be.true;
})

When(/^the URL contains the JobId parameter "(.*)"$/, function (jobId) {
  action.launchURL("https://li-uat.languageloop.com.au/LoopedIn/Bookings.aspx?JobId=" + jobId);
})

Then(/^the search field should be pre-filled with the given JobID "(.*)"$/, function (jobId) {
  action.isVisibleWait(interpretingPage.searchJobInput, 30000, "Search by field in interpreting page");
  let actualJobIDInSearchField = action.getElementValue(interpretingPage.searchJobInput, "Search by field in interpreting page");
  chai.expect(actualJobIDInSearchField).to.equal(jobId)
})

Then(/the rest of the form should display as if the user has filtered or searched by JobID "(.*)"$/, function (jobId) {
  browser.pause(5000);
  action.waitUntilLoadingIconDisappears();
  let interpreterNameTextElement = $(interpretingPage.jobTableDynamicTextValueLocator.replace("<dynamicRowIndex>", "1").replace("<dynamicColumnIndex>", "4"));
  let actualInterpreterNameText = action.getElementText(interpreterNameTextElement);
  chai.expect(actualInterpreterNameText).to.equal(jobId);
})