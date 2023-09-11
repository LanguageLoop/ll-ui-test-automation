
When(/^I handle the message for interpreters dialog$/, function(){
  browser.pause(3000)
  try{
    interpretingPage.messageForInterpreterOKButton.waitForExist({timeout:10000})

    action.clickElement(interpretingPage.messageForInterpreterOKButton,"Message for interpreter ok button in Interpreting page")


  }
  catch(Err)
  {
  }
})

When(/^I select "(.*)" from the filter dropdown$/,   function(listitem){
  browser.pause(2000)
  action.isVisibleWait(interpretingPage.filterDropdown,20000,"Filter dropdown in Interpreting page")
  action.selectTextFromDropdown(interpretingPage.filterDropdown,listitem,"Filter dropdown in Interpreting page")
  browser.pause(2000)
})

When(/^I click on new job request button$/,function(){
  action.isVisibleWait(interpretingPage.newJobRequestButton,20000,"New job request button in Interpreting page");
  action.clickElement(interpretingPage.newJobRequestButton,"New job request button in Interpreting page")
})

When(/^I select "(.*)" job status$/,function(jobstatus){
  action.isVisibleWait(interpretingPage.jobStatusDropdown,30000,"Job status dropdown in Interpreting page");
  action.selectTextFromDropdown(interpretingPage.jobStatusDropdown,jobstatus,"Job status dropdown in Interpreting page")
  browser.pause(8000);

  browser.waitUntil(()=> {
    return interpretingPage.jobStatusDropdown.getValue()!='__ossli_0'},
    {timeout: 15000, timeoutMsg: ' dropdown value not selected with in 15s', interval:500})
  //browser.pause(2000)
})


When(/^I click on job id from interpreting job search results$/, function(){
  browser.pause(2000)
  action.isVisibleWait(interpretingPage.jobIdColumnFromSearchResult,30000,"Job ID column from search result in Interpreting page");
  action.clickElement(interpretingPage.jobIdColumnFromSearchResult,"Job ID column from search result in Interpreting page")
  browser.pause(5000)
})

When(/^I click on first job id from interpreting job list$/, function(){
  browser.pause(2000)
  GlobalData.CURRENT_JOB_ID = interpretingPage.jobIdColumnFromSearchResult.getText()
  action.isVisibleWait(interpretingPage.jobIdLinkFromSearchResult,20000,"Job ID link from search result in Interpreting page");
  action.clickElement(interpretingPage.jobIdLinkFromSearchResult,"Job ID link from search result in Interpreting page")
  browser.pause(5000)
})

When(/^I click on first job id from accepted job list$/, function(){
  browser.pause(2000)
  action.isVisibleWait(interpretingPage.jobIdLinkFromSearchResult,20000,"Job ID link from search result in Interpreting page")
  action.doubleClickElement(interpretingPage.jobIdLinkFromSearchResult,"Job ID link from search result in Interpreting page")
})

When(/^I switch to the job allocation window$/, function(){
  browser.switchWindow('Job Allocation *')
})


When(/^I click on bulk upload button$/, function(){
  browser.pause(2000)
  action.isVisibleWait(interpretingPage.bulkUploadButton,20000,"Bulk upload button in Interpreting steps")
  action.clickElement(interpretingPage.bulkUploadButton,"Bulk upload button in Interpreting steps")
  browser.pause(2000)
})

When(/^I search for created job request$/, function(){
  action.isVisibleWait(interpretingPage.searchJobInput,30000,"Search job text box in Interpreting steps");
  action.clickElement(interpretingPage.searchJobInput,"Search job text box in Interpreting steps")
  action.clearValue(interpretingPage.searchJobInput,"Search job text box in Interpreting steps")
  action.enterValueAndPressReturn(interpretingPage.searchJobInput,GlobalData.CURRENT_JOB_ID.toString(),"Search job text box in Interpreting steps")
  console.log("JOB ID: "+GlobalData.CURRENT_JOB_ID.toString());
  action.pressKeys("Tab");
  let expectedJobIdResultLoc = '//*[text()="<dynamic>"]'.replace("<dynamic>", GlobalData.CURRENT_JOB_ID.toString())
  action.isVisibleWait($(expectedJobIdResultLoc), 90000, "Expected Job Id Result "+GlobalData.CURRENT_JOB_ID);
})

When(/^I search for selected job request$/, function(){
  action.isVisibleWait(interpretingPage.searchJobInput,20000,"Search job text box in Interpreting steps");
  action.clickElement(interpretingPage.searchJobInput,"Search job text box in Interpreting steps")
  action.clearValue(interpretingPage.searchJobInput,"Search job text box in Interpreting steps")
  action.enterValueAndPressReturn(interpretingPage.searchJobInput,GlobalData.CURRENT_JOB_ID.toString(),"Search job text box in Interpreting steps")
})

When(/^I search for job request "(.*)"$/, function(jobid){
  action.isVisibleWait(interpretingPage.searchJobInput,20000,"Search job text box in Interpreting steps")
  action.clickElement(interpretingPage.searchJobInput,"Search job text box in Interpreting steps")
  action.clearValue(interpretingPage.searchJobInput,"Search job text box in Interpreting steps")
  action.enterValueAndPressReturn(interpretingPage.searchJobInput,jobid,"Search job text box in Interpreting steps")
  browser.pause(2000)
})

When(/^I enter from date "(.*)"$/, function(fromdate){
  action.isVisibleWait(interpretingPage.fromDateInput,20000,"From date text box in Interpreting steps")
  action.clickElement(interpretingPage.fromDateInput,"From date text box in Interpreting steps")
  action.enterValueAndPressReturn(interpretingPage.fromDateInput,fromdate,"From date text box in Interpreting steps")
})

When(/^I enter to date "(.*)"$/, function(todate){
  action.isVisibleWait(interpretingPage.toDateInput,20000,"To date text box in Interpreting steps")
  action.clickElement(interpretingPage.toDateInput,"To date text box in Interpreting steps")
  action.enterValueAndPressReturn(interpretingPage.toDateInput,todate,"To date text box in Interpreting steps")
})

When(/^I click on the show regional jobs checkbox$/, function(){
  action.isVisibleWait(interpretingPage.regionalJobsCheckbox,20000,"Regional jobs checkbox in Interpreting steps")
  action.clickElement(interpretingPage.regionalJobsCheckbox,"Regional jobs checkbox in Interpreting steps")
})

When(/^I click accept job button$/, function(){
  action.isVisibleWait(interpretingPage.acceptJobButton,20000,"Accept job button in Interpreting steps");
  action.clickElement(interpretingPage.acceptJobButton,"Accept job button in Interpreting steps")
})

When(/^I click reject job button$/, function(){
  action.isVisibleWait(interpretingPage.rejectJobButton,20000,"Reject job button in Interpreting steps")
  action.clickElement(interpretingPage.rejectJobButton,"Reject job button in Interpreting steps")
})

When(/^I click unavailable job button$/, function(){
  action.isVisibleWait(interpretingPage.unavailableJobButton,10000,"Unavailable job button in Interpreting steps");
  action.clickElement(interpretingPage.unavailableJobButton,"Unavailable job button in Interpreting steps")
  action.isNotVisibleWait(interpretingPage.unavailableJobButton,10000,"Unavailable job button in Interpreting steps");
})

When(/^I click return job button$/, function(){
  action.isVisibleWait(interpretingPage.returnJobButton,10000,"Return job button in Interpreting steps");
  action.clickElement(interpretingPage.returnJobButton,"Return job button in Interpreting steps")
  action.isNotVisibleWait(interpretingPage.returnJobButton,10000,"Return job button in Interpreting steps");
  action.isVisibleWait(jobDetailsPage.returnThisJobPopup, 10000, "Return this job popup in Job Details page");
  action.selectTextFromDropdown(jobDetailsPage.returnReasonDropdown, "Accepted in Error", "Return reason dropdown on Return this job popup in Job Details page");
  action.clickElement(jobDetailsPage.returnJobPopupConfirmButton, "Confirm button on Return this job popup in Job Details page");
  action.isNotVisibleWait(jobDetailsPage.returnJobPopupConfirmButton, 10000,"Confirm button on Return this job popup in Job Details page");
})

When(/^I click "(.*)" user link$/, function(user){
  const  usernameElt = $('//*[text()="<dynamic>"]'.replace("<dynamic>",user));
  action.isVisibleWait(usernameElt,20000,"Username in Interpreting steps");
  action.clickElement(usernameElt,"Username in Interpreting steps");
})

When(/^I keep refreshing$/, function(){
  for(var i=0;i<600;i++)
  {
    browser.pause(2000)
    browser.refresh()
  }
})


Then(/^I verify the job table is displayed$/, function(){
  chai.expect(action.elementExists(interpretingPage.jobTable,"Job table in Interpreting steps")).to.be.true
})

Then(/^I verify the job is listed in search results$/, function(){
  chai.expect(action.elementExists(interpretingPage.jobIdLinkFromSearchResult,"Job ID link from search result in Interpreting steps")).to.be.true
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
  action.isVisibleWait(interpretingPage.filterDropdown, 20000,"Filter dropdown in Interpreting steps");
  action.selectTextFromDropdown(interpretingPage.filterDropdown, listItem,"Filter dropdown in Interpreting steps");
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
  let campusPinFilterSelectedStatus = action.isSelectedWait(campusPinElement,20000,"Campus pin filter dropdown in Interpreting steps");
  chai.expect(campusPinFilterSelectedStatus).to.be.true;
  let campusPinValuePreFilledElement = $(interpretingPage.jobFilterValueTextBoxLocator.replace("<dynamicIndex>","1"));
  let campusPinValuePreFilled = action.getElementValue(campusPinValuePreFilledElement,"Campus pin in Interpreting steps");
  chai.expect(campusPinValuePreFilled).to.equal(campusPin);
})

Then(/the rest of the form should display as if the user has filtered by Campus PIN "(.*)"$/, function (campusName) {
  browser.pause(5000);
  let jobRowsCount = interpretingPage.jobTableRowsCount;
  for (let rowIndex = 1; rowIndex <= jobRowsCount; rowIndex++) {
    let campusNameTextElement = $(interpretingPage.jobTableDynamicTextValueLocator.replace("<dynamicRowIndex>",rowIndex.toString()).replace("<dynamicColumnIndex>","6"));
    let actualCampusNameText = action.getElementText(campusNameTextElement,"Campus name in Interpreting steps");
    chai.expect(actualCampusNameText).to.equal(campusName);
  }
})

When(/^the URL contains the ContractorID parameter "(.*)"$/, function (contractorID) {
  action.launchURL("https://li-uat.languageloop.com.au/LoopedIn/Bookings.aspx?ContractorId=" + contractorID);
})

Then(/^a ContractorID filter should be pre-filled with the given ContractorID "(.*)"$/, function (contractorID) {
  let contractorIDElement = $(interpretingPage.jobFilterFieldDropdownOptionLocator.replace("<dynamicIndex>","1").replace("<dynamicOption>","Contractor ID"));
  let contractorIDFilterSelectedStatus = action.isSelectedWait(contractorIDElement,20000,"Contractor ID filter dropdown in Interpreting steps");
  chai.expect(contractorIDFilterSelectedStatus).to.be.true;
  let contractorIDValuePreFilledElement = $(interpretingPage.jobFilterValueTextBoxLocator.replace("<dynamicIndex>","1"));
  let contractorIDValuePreFilled = action.getElementValue(contractorIDValuePreFilledElement,"Contractor ID in Interpreting steps");
  chai.expect(contractorIDValuePreFilled).to.equal(contractorID);
})

Then(/the rest of the form should display as if the user has filtered by ContractorID "(.*)"$/, function (interpreterName) {
  browser.pause(5000);
  let jobRowsCount = interpretingPage.jobTableRowsCount;
  for (let rowIndex = 1; rowIndex <= jobRowsCount; rowIndex++) {
    let interpreterNameTextElement = $(interpretingPage.jobTableDynamicTextValueLocator.replace("<dynamicRowIndex>",rowIndex.toString()).replace("<dynamicColumnIndex>","9"));
    let actualInterpreterNameText = action.getElementText(interpreterNameTextElement,"Interpreter name text in Interpreting steps");
    chai.expect(actualInterpreterNameText).to.equal(interpreterName);
  }
})

Then(/^the results should not be displayed as there are no jobs to show$/, function () {
  let noJobsToShowMessageDisplayStatus = action.isVisibleWait(interpretingPage.jobTableNoJobsToShowMessage, 20000,"Job table no jobs to show message in Interpreting steps");
  chai.expect(noJobsToShowMessageDisplayStatus).to.be.true
})

When(/^enter the Campus pin "(.*)" that is Active in the URL$/, function (campusPin) {
  action.launchURL("https://li-uat.languageloop.com.au/LoopedIn/ClientBookings.aspx?CampusPIN=" + campusPin);
})

Then(/^a CampusPIN filter should not be displayed and pre filled with the given Campus PIN "(.*)"$/, function (campusPin) {
  let campusPinElement = $(interpretingPage.jobFilterFieldDropdownOptionLocator.replace("<dynamicIndex>", "1").replace("<dynamicOption>", "Campus PIN"));
  let campusPinFilterSelectedStatus = action.isSelectedWait(campusPinElement, 1000,"Campus pin filter dropdown in Interpreting steps");
  chai.expect(campusPinFilterSelectedStatus).to.be.false;
  let campusPinValuePreFilledElement = $(interpretingPage.jobFilterValueTextBoxLocator.replace("<dynamicIndex>", "1"));
  let campusPinValuePreFilledDisplayStatus = action.isVisibleWait(campusPinValuePreFilledElement, 1000,"Campus pin in Interpreting steps");
  if (campusPinValuePreFilledDisplayStatus === true) {
    let campusPinValuePreFilled = action.getElementValue(campusPinValuePreFilledElement,"Campus pin in Interpreting steps");
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
  let contractorIDFilterSelectedStatus = action.isSelectedWait(contractorIDElement, 1000,"Contractor ID filter dropdown in Interpreting steps");
  chai.expect(contractorIDFilterSelectedStatus).to.be.false;
  let contractorIDValuePreFilledElement = $(interpretingPage.jobFilterValueTextBoxLocator.replace("<dynamicIndex>", "1"));
  let contractorIDValuePreFilledDisplayStatus = action.isVisibleWait(contractorIDValuePreFilledElement, 1000,"Contractor ID in Interpreting steps");
  if (contractorIDValuePreFilledDisplayStatus === true) {
    let contractorIDValuePreFilled = action.getElementValue(contractorIDValuePreFilledElement,"Contractor ID in Interpreting steps");
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
  let actualInterpreterNameText = action.getElementText(interpreterNameTextElement,"Interpreter name text in Interpreting steps");
  chai.expect(actualInterpreterNameText).to.equal(jobId);
})

When(/^the URL contains the JobId parameter "(.*)",Campus PIN "(.*)" and ContractorID "(.*)" at once, sepearted by & symbol$/, function (jobId,campusPin,contractorID) {
  action.launchURL("https://li-uat.languageloop.com.au/LoopedIn/Bookings.aspx?JobId=" + jobId + "&" + "CampusPIN=" + campusPin + "&" + "ContractorId=" + contractorID);
})

Then(/^a ContractorID filter in row "(.*)" should be pre-filled with the given ContractorID "(.*)"$/, function (row,contractorID) {
  let contractorIDElement = $(interpretingPage.jobFilterFieldDropdownOptionLocator.replace("<dynamicIndex>",row.toString()).replace("<dynamicOption>","Contractor ID"));
  let contractorIDFilterSelectedStatus = action.isSelectedWait(contractorIDElement,20000,"Contractor ID filter dropdown in Interpreting steps");
  chai.expect(contractorIDFilterSelectedStatus).to.be.true;
  let contractorIDValuePreFilledElement = $(interpretingPage.jobFilterValueTextBoxLocator.replace("<dynamicIndex>",row.toString()));
  let contractorIDValuePreFilled = action.getElementValue(contractorIDValuePreFilledElement,"Contractor ID in Interpreting steps");
  chai.expect(contractorIDValuePreFilled).to.equal(contractorID);
})

When(/^open the above created Job Request in claims page$/, function () {
  action.launchURL("https://li-uat.languageloop.com.au/LoopedIn/ClaimDetails.aspx?JobId=" + GlobalData.CURRENT_JOB_ID.toString());
})