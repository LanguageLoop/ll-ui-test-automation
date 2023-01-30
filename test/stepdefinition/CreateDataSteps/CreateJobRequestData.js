

When(/^I create a new job request with minimal fields "(.*)"$/,  function(notice){
   createJobRequest(notice,"33124","Halfday","ARABIC","Certified Interpreter","Automation Tester")
})

When(/^I create a new vic roads job request with minimal fields "(.*)"$/,  function(notice){
  createJobRequest(notice,"10647","HalfDay","HAZARAGI","Non-Accredited","Automation Tester")
})

When(/^I create a new vic roads job request for bulk requests "(.*)"$/,  function(notice){
  createJobRequest(notice,"10139","Car Drive","ARABIC","Paraprofessional","Automation Tester")
})

When(/^I create a job request with preffered interpreter "(.*)"$/,  function(interpreter){
  createJobRequestWithPreferredInterpreter("random future date","33124","Halfday","ARABIC","Certified Interpreter","Automation Tester",interpreter)
})


function createJobRequest(notice, campuspin,assignmenttype,language,naatilevel,requester)
{
  var temp_date_time=datetime.getScheduleDateTime(notice,"9:30")
  var temp_conf_date_time= datetime.getConfirmationDateTime(notice,"9:30")

  
  action.clickElement(homePage.InterpretingLink)
  action.selectTextFromDropdown(interpretingPage.filterDropdown,"Management")
  action.isClickableWait(interpretingPage.newJobRequestButton,10000)
  interpretingPage.newJobRequestButton.waitForClickable({timeout:5000},{interval:500})
  action.clickElement(interpretingPage.newJobRequestButton)
  action.isClickableWait(jobRequestPage.campusPinInput,30000)
  action.enterValueAndPressReturn(jobRequestPage.campusPinInput,campuspin)
  jobRequestPage.requesterNameDropdown.waitForExist({timeout:5000},{interval:500})
  action.enterValueAndPressReturn(jobRequestPage.requesterNameDropdown,requester)
  browser.pause(2000)
  action.clickElement(jobRequestPage.nextButton)

  browser.pause(2000)
  action.isClickableWait(jobRequestPage.languageDropdown,30000)
  action.enterValueAndPressReturn(jobRequestPage.languageDropdown,language)
 
  action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,assignmenttype)
  action.selectTextFromDropdown(jobRequestPage.naatiLevelDropdown, naatilevel)
  action.enterDateAndTime(jobRequestPage.dateInput,jobRequestPage.timeInput, temp_date_time[0],temp_date_time[1] ) 
  
  action.enterValue(jobRequestPage.confirmEmailInput,"hh@ll.com.au")
 // browser.pause(4000)

  action.enterDateAndTime(jobRequestPage.confirmationDate,jobRequestPage.confirmationTime,temp_conf_date_time[0],temp_conf_date_time[1])
 // browser.keys('Tab')
  browser.pause(2000)
  action.isClickableWait(jobRequestPage.saveAndProceedToSummaryButton,30000)
  action.clickElement(jobRequestPage.saveAndProceedToSummaryButton)
  browser.pause(2000)

  try{
    action.isClickableWait(jobRequestPage.continueButton,30000)
    jobRequestPage.continueButton.waitForClickable({timeout:10000,timeoutMsg:'continue button not clickable in 10s',inteval:500})
    browser.execute("arguments[0].click();", jobRequestPage.continueButton)
    //action.clickElement(jobRequestPage.continueButton)
  }
  catch(Err)
  {
  }
  browser.pause(4000)
  //jobRequestPage.submitButton.waitForClickable({timeout:10000},{interval:1000})
  //action.clickElement(jobRequestPage.submitButton)
  action.isClickableWait(jobRequestPage.submitButton,30000)
  jobRequestPage.submitButton.waitForClickable({timeout:10000},{interval:1000})  
  browser.execute("arguments[0].click();", jobRequestPage.submitButton);
 jobRequestPage.successMessageText.waitForExist({timeout:30000},{interval:500})
browser.waitUntil(
      () => jobRequestPage.successMessageText.getText().includes("The Job#"), 10000, 'link not visible'
  );
  var jobNumber = jobRequestPage.successMessageText.getText().match(/\d+/g).map(Number)
  GlobalData.CURRENT_JOB_ID=jobNumber


}

function createJobRequestWithPreferredInterpreter(notice, campuspin,assignmenttype,language,naatilevel,requester,interpreter)
{
  var temp_date_time=datetime.getScheduleDateTime(notice,"9:30")
  var temp_conf_date_time= datetime.getConfirmationDateTime(notice,"9:30")

  
  action.clickElement(homePage.InterpretingLink)
  action.selectTextFromDropdown(interpretingPage.filterDropdown,"Management")
  action.clickElement(interpretingPage.newJobRequestButton)
  action.isClickableWait(jobRequestPage.campusPinInput,30000)
  action.enterValueAndPressReturn(jobRequestPage.campusPinInput,campuspin)
  action.enterValueAndPressReturn(jobRequestPage.requesterNameDropdown,requester)
  browser.pause(2000)
  action.clickElement(jobRequestPage.nextButton)

  browser.pause(2000)
  action.isClickableWait(jobRequestPage.languageDropdown,30000)
  action.enterValueAndPressReturn(jobRequestPage.languageDropdown,language)

  action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,assignmenttype)
  action.selectTextFromDropdown(jobRequestPage.naatiLevelDropdown, naatilevel)
  action.enterDateAndTime(jobRequestPage.dateInput,jobRequestPage.timeInput, temp_date_time[0],temp_date_time[1] ) 
  
  //select preffered interpreter

  action.clickElement(jobRequestPage.preferredInterpreterMustCheckBox)
  action.clickElement(jobRequestPage.addInterpreterLink)
  browser.pause(5000)
  const findInterpreter=$("//*[text()[contains(.,'Find Interpreter')]]")
  while(action.isVisibleWait(findInterpreter,10000)==false){
  action.clickElement(jobRequestPage.addInterpreterLink)
  browser.waitUntil(()=> findInterpreter.isDisplayed(),{timeout:7000, timeoutMsg:'Find interpreter modal not displayed in 10s', interval:500} )
  console.log("inside "+findInterpreter.isDisplayed())
    break
}
  action.isClickableWait(jobRequestPage.searchForInterpreterInput,10000)
  action.enterValue(jobRequestPage.searchForInterpreterInput,interpreter)
  browser.pause(5000)
  //select the first interpreter
  var check_boxes=jobRequestPage.interpreterSearchResultsCheckBoxes
  action.isClickableWait(check_boxes[0],10000)
  action.clickElement(check_boxes[0])
  action.isClickableWait(jobRequestPage.addInterpretersButton,10000)
  action.clickElement(jobRequestPage.addInterpretersButton)
  action.isClickableWait(jobRequestPage.confirmEmailInput,10000)
  action.enterValue(jobRequestPage.confirmEmailInput,"hh@ll.com.au")
 // browser.pause(4000)
  action.isClickableWait(jobRequestPage.confirmationDate,10000)
  action.enterDateAndTime(jobRequestPage.confirmationDate,jobRequestPage.confirmationTime,temp_conf_date_time[0],temp_conf_date_time[1])
 // browser.keys('Tab')
  browser.pause(2000)
  action.isClickableWait(jobRequestPage.saveAndProceedToSummaryButton,30000)
  action.clickElement(jobRequestPage.saveAndProceedToSummaryButton)
  browser.pause(2000)

  try{
    action.isClickableWait(jobRequestPage.continueButton,30000)
    jobRequestPage.continueButton.waitForClickable({timeout:10000,timeoutMsg:'continue button not clickable in 10s',inteval:500})
    browser.execute("arguments[0].click();", jobRequestPage.continueButton)
    //action.clickElement(jobRequestPage.continueButton)
  }
  catch(Err)
  {
  }
  browser.pause(2000)

  //action.clickElement(jobRequestPage.submitButton)
  action.isClickableWait(jobRequestPage.submitButton,30000)
  jobRequestPage.submitButton.waitForClickable({timeout:10000},{interval:1000})  
  browser.execute("arguments[0].click();", jobRequestPage.submitButton);
 jobRequestPage.successMessageText.waitForExist({timeout:10000})
browser.waitUntil(
      () => jobRequestPage.successMessageText.getText().includes("The Job#"), 10000, 'link not visible'
  );
  var jobNumber = jobRequestPage.successMessageText.getText().match(/\d+/g).map(Number)
  GlobalData.CURRENT_JOB_ID=jobNumber


}