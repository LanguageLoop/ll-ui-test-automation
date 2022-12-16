
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
  action.selectTextFromDropdown(interpretingPage.filterDropdown,listitem)
  browser.pause(2000)
})

When(/^I click on new job request button$/,function(){
  action.clickElement(interpretingPage.newJobRequestButton)
})

When(/^I select "(.*)" job status$/,function(jobstatus){
  action.selectTextFromDropdown(interpretingPage.jobStatusDropdown,jobstatus)

  browser.waitUntil(()=> {
    return interpretingPage.jobStatusDropdown.getValue()!='__ossli_0'},
    {timeout: 15000, timeoutMsg: ' dropdown value not selected with in 15s', interval:500})
  //browser.pause(2000)
})


When(/^I click on job id from interpreting job search results$/, function(){
  browser.pause(2000)
  action.clickElement(interpretingPage.jobIdColumnFromSearchResult)
  browser.pause(5000)
})

When(/^I click on first job id from interpreting job list$/, function(){
  browser.pause(2000)
  GlobalData.CURRENT_JOB_ID = interpretingPage.jobIdColumnFromSearchResult.getText()
  action.clickElement(interpretingPage.jobIdLinkFromSearchResult)
  browser.pause(5000)
})

When(/^I click on first job id from accepted job list$/, function(){
  browser.pause(2000)
  action.doubleClickElement(interpretingPage.jobIdLinkFromSearchResult)
})

When(/^I switch to the job allocation window$/, function(){
  browser.switchWindow('Job Allocation *')
})


When(/^I click on bulk upload button$/, function(){
  browser.pause(2000)
  action.clickElement(interpretingPage.bulkUploadButton)
  browser.pause(2000)
})

When(/^I search for created job request$/, function(){
  action.clickElement(interpretingPage.searchJobInput)
  action.clearValue(interpretingPage.searchJobInput)
  action.enterValueAndPressReturn(interpretingPage.searchJobInput,GlobalData.CURRENT_JOB_ID.toString())
})

When(/^I search for selected job request$/, function(){
  action.clickElement(interpretingPage.searchJobInput)
  action.clearValue(interpretingPage.searchJobInput)
  action.enterValueAndPressReturn(interpretingPage.searchJobInput,GlobalData.CURRENT_JOB_ID.toString())
})

When(/^I search for job request "(.*)"$/, function(jobid){
  action.clickElement(interpretingPage.searchJobInput)
  action.clearValue(interpretingPage.searchJobInput)
  action.enterValueAndPressReturn(interpretingPage.searchJobInput,jobid)
  browser.pause(2000)
})

When(/^I enter from date "(.*)"$/, function(fromdate){
  action.clickElement(interpretingPage.fromDateInput)
  action.enterValueAndPressReturn(interpretingPage.fromDateInput,fromdate)
})

When(/^I enter to date "(.*)"$/, function(todate){
  action.clickElement(interpretingPage.toDateInput)
  action.enterValueAndPressReturn(interpretingPage.toDateInput,todate)
})

When(/^I click on the show regional jobs checkbox$/, function(){
  action.clickElement(interpretingPage.regionalJobsCheckbox)
})

When(/^I click accept job button$/, function(){
  action.clickElement(interpretingPage.acceptJobButton)
})

When(/^I click reject job button$/, function(){
  action.clickElement(interpretingPage.rejectJobButton)
})

When(/^I click unavailable job button$/, function(){
  action.clickElement(interpretingPage.unavailableJobButton)
})

When(/^I click return job button$/, function(){
  action.clickElement(interpretingPage.returnJobButton)
})

When(/^I click "(.*)" user link$/, function(user){
  const  usernameElt = $('//*[text()="<dynamic>"]'.replace("<dynamic>",user));
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
