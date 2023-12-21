

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

  
  action.clickElement(homePage.InterpretingLink,"Interpreting link in home page")
  action.selectTextFromDropdown(interpretingPage.filterDropdown,"Management","Filter dropdown in Interpreting page")
  action.waitForElementClickable(interpretingPage.newJobRequestButton, "New job request button in Interpreting page")
  //action.isVisibleWait(interpretingPage.newJobRequestButton,30000,"New job request button in Interpreting page")
  action.clickElement(interpretingPage.newJobRequestButton,"New job request button in Interpreting page")
  action.isClickableWait(jobRequestPage.campusPinInput,30000,"Campus pin text box in Job request page")
  action.enterValueAndPressReturn(jobRequestPage.campusPinInput,campuspin,"Campus pin text box in Job request page")
  action.isVisibleWait(jobRequestPage.requesterNameDropdown,30000,"Requester name dropdown in Job request page")
  action.enterValueAndPressReturn(jobRequestPage.requesterNameDropdown,requester,"Requester name dropdown in Job request page")
  browser.pause(2000)
  action.clickElement(jobRequestPage.nextButton,"Requester name dropdown in Job request page")

  browser.pause(2000)
  action.isClickableWait(jobRequestPage.languageDropdown,30000,"Language dropdown in Job request page")
  action.enterValueAndPressReturn(jobRequestPage.languageDropdown,language,"Language dropdown in Job request page")
 
  action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,assignmenttype,"Assignment type dropdown in Job request page")
  action.selectTextFromDropdown(jobRequestPage.naatiLevelDropdown, naatilevel,"NAATI level dropdown in Job request page")
  action.enterDateAndTime(jobRequestPage.dateInput,jobRequestPage.timeInput, temp_date_time[0],temp_date_time[1],"Time text box in Job request page")
  
  action.enterValue(jobRequestPage.confirmEmailInput,"hh@ll.com.au","Confirm email text box in Job request page")
 // browser.pause(4000)

  action.enterDateAndTime(jobRequestPage.confirmationDate,jobRequestPage.confirmationTime,temp_conf_date_time[0],temp_conf_date_time[1],"Confirmation date and time in Job request page")
 // browser.keys('Tab')
  browser.pause(2000)
  action.isClickableWait(jobRequestPage.saveAndProceedToSummaryButton,30000,"Save and proceed to summary button in Job request page")
  action.clickElement(jobRequestPage.saveAndProceedToSummaryButton,"Save and proceed to summary button in Job request page")
  browser.pause(2000)

  try{
    let hoursConfirmationContinueButtonVisibleStatus = action.isVisibleWait(jobRequestPage.hoursConfirmationContinueButton,5000,"Hours confirmation continue button in Job request page");
    if(hoursConfirmationContinueButtonVisibleStatus) {
      action.isClickableWait(jobRequestPage.hoursConfirmationContinueButton,10000,"Hours confirmation continue button in Job request page");
      action.clickElement(jobRequestPage.hoursConfirmationContinueButton,"Hours confirmation continue button in Job request page");
    }
    let pastDateConfirmationContinueButtonVisibleStatus = action.isVisibleWait(jobRequestPage.pastDateConfirmationContinueButton,5000,"Past date confirmation continue button in Job request page");
    if(pastDateConfirmationContinueButtonVisibleStatus) {
      action.isClickableWait(jobRequestPage.pastDateConfirmationContinueButton,10000,"Past date confirmation continue button in Job request page");
      action.clickElement(jobRequestPage.pastDateConfirmationContinueButton,"Past date confirmation continue button in Job request page");
    }
    let continueButtonVisibleStatus = action.isVisibleWait(jobRequestPage.continueButton,5000,"Continue button in Job request page");
    if(continueButtonVisibleStatus) {
      browser.execute("arguments[0].click();", jobRequestPage.continueButton)
    }
  }
  catch(Err)
  {
  }
  browser.pause(4000)
  action.isClickableWait(jobRequestPage.submitButton,30000,"Submit button in Job request page")
  browser.execute("arguments[0].click();", jobRequestPage.submitButton);
 jobRequestPage.successMessageText.waitForExist({timeout:30000},{interval:500})
browser.waitUntil(
      () => jobRequestPage.successMessageText.getText().includes("The Job#"), 10000, 'link not visible'
  );
  var jobNumber = jobRequestPage.successMessageText.getText().match(/\d+/g).map(Number)
  GlobalData.CURRENT_JOB_ID=jobNumber
  logger.info("CURRENT_JOB_ID: "+GlobalData.CURRENT_JOB_ID);

}

function createJobRequestWithPreferredInterpreter(notice, campuspin,assignmenttype,language,naatilevel,requester,interpreter)
{
  var temp_date_time=datetime.getScheduleDateTime(notice,"9:30")
  var temp_conf_date_time= datetime.getConfirmationDateTime(notice,"9:30")

  
  action.clickElement(homePage.InterpretingLink,"Interpreting link in Job request page")
  action.selectTextFromDropdown(interpretingPage.filterDropdown,"Management","Filter dropdown in Job request page")
  action.clickElement(interpretingPage.newJobRequestButton,"New job request button in Job request page")
  action.isClickableWait(jobRequestPage.campusPinInput,30000,"Campus pin text box in Job request page")
  action.enterValueAndPressReturn(jobRequestPage.campusPinInput,campuspin,"Campus pin text box in Job request page")
  action.enterValueAndPressReturn(jobRequestPage.requesterNameDropdown,requester,"Requester name dropdown in Job request page")
  browser.pause(2000)
  action.clickElement(jobRequestPage.nextButton,"Next button in Job request page")

  browser.pause(2000)
  action.isClickableWait(jobRequestPage.languageDropdown,30000,"Language dropdown in Job request page")
  action.enterValueAndPressReturn(jobRequestPage.languageDropdown,language,"Language dropdown in Job request page")

  action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,assignmenttype,"Assignment type dropdown in Job request page")
  action.selectTextFromDropdown(jobRequestPage.naatiLevelDropdown, naatilevel,"NAATI level dropdown in Job request page")
  action.enterDateAndTime(jobRequestPage.dateInput,jobRequestPage.timeInput, temp_date_time[0],temp_date_time[1],"Date and Time text box  in Job request page")
  
  //select preffered interpreter

  action.clickElement(jobRequestPage.preferredInterpreterMustCheckBox,"Preferred interpreter must checkbox in Job request page")
  action.clickElement(jobRequestPage.addInterpreterLink,"Add interpreter link in Job request page")
  browser.pause(5000)
  const findInterpreter=$("//*[text()[contains(.,'Find Interpreter')]]")
  while(action.isVisibleWait(findInterpreter,10000,"Find interpreter in Job request page")==false){
  action.clickElement(jobRequestPage.addInterpreterLink,"Add interpreter link in Job request page")
  browser.waitUntil(()=> findInterpreter.isDisplayed(),{timeout:7000, timeoutMsg:'Find interpreter modal not displayed in 10s', interval:500} )
  console.log("inside "+findInterpreter.isDisplayed())
    break
}
  action.isClickableWait(jobRequestPage.searchForInterpreterInput,10000,"Search for interpreter text box in Job request page")
  action.enterValue(jobRequestPage.searchForInterpreterInput,interpreter,"Search for interpreter text box in Job request page")
  browser.pause(5000)
  //select the first interpreter
  var check_boxes=jobRequestPage.interpreterSearchResultsCheckBoxes
  action.isClickableWait(check_boxes[0],10000,"Interpreter search result checkbox in Job request page")
  action.clickElement(check_boxes[0],"Interpreter search result checkbox in Job request page")
  action.isClickableWait(jobRequestPage.addInterpretersButton,10000,"Add interpreters button in Job request page")
  action.clickElement(jobRequestPage.addInterpretersButton,"Add interpreters button in Job request page")
  action.isClickableWait(jobRequestPage.confirmEmailInput,10000,"Confirm email text box in Job request page")
  action.enterValue(jobRequestPage.confirmEmailInput,"hh@ll.com.au","Confirm email text box in Job request page")
 // browser.pause(4000)
  action.isClickableWait(jobRequestPage.confirmationDate,10000,"Confirmation date text box in Job request page")
  action.enterDateAndTime(jobRequestPage.confirmationDate,jobRequestPage.confirmationTime,temp_conf_date_time[0],temp_conf_date_time[1],"Confirmation date and time text box in Job request page")
 // browser.keys('Tab')
  browser.pause(2000)
  action.isClickableWait(jobRequestPage.saveAndProceedToSummaryButton,30000,"Save and proceed to summary button in Job request page")
  action.clickElement(jobRequestPage.saveAndProceedToSummaryButton,"Save and proceed to summary button in Job request page")
  browser.pause(2000)

  try{
    let hoursConfirmationContinueButtonVisibleStatus = action.isVisibleWait(jobRequestPage.hoursConfirmationContinueButton,5000,"Hours confirmation continue button in Job request page");
    if(hoursConfirmationContinueButtonVisibleStatus) {
      action.isClickableWait(jobRequestPage.hoursConfirmationContinueButton,10000,"Hours confirmation continue button in Job request page");
      action.clickElement(jobRequestPage.hoursConfirmationContinueButton,"Hours confirmation continue button in Job request page");
    }
    let pastDateConfirmationContinueButtonVisibleStatus = action.isVisibleWait(jobRequestPage.pastDateConfirmationContinueButton,5000,"Past date confirmation continue button in Job request page");
    if(pastDateConfirmationContinueButtonVisibleStatus) {
      action.isClickableWait(jobRequestPage.pastDateConfirmationContinueButton,10000,"Past date confirmation continue button in Job request page");
      action.clickElement(jobRequestPage.pastDateConfirmationContinueButton,"Past date confirmation continue button in Job request page");
    }
    let continueButtonVisibleStatus = action.isVisibleWait(jobRequestPage.continueButton,5000,"Continue button in Job request page");
    if(continueButtonVisibleStatus) {
      jobRequestPage.continueButton.waitForClickable({timeout:10000,timeoutMsg:'continue button not clickable in 10s',inteval:500})
      browser.execute("arguments[0].click();", jobRequestPage.continueButton)
      //action.clickElement(jobRequestPage.continueButton)
    }
  }
  catch(Err)
  {
  }
  browser.pause(2000)

  //action.clickElement(jobRequestPage.submitButton)
  action.isClickableWait(jobRequestPage.submitButton,30000,"Submit button in Job request page")
  jobRequestPage.submitButton.waitForClickable({timeout:10000},{interval:1000})  
  browser.execute("arguments[0].click();", jobRequestPage.submitButton);
 jobRequestPage.successMessageText.waitForExist({timeout:10000})
browser.waitUntil(
      () => jobRequestPage.successMessageText.getText().includes("The Job#"), 10000, 'link not visible'
  );
  var jobNumber = jobRequestPage.successMessageText.getText().match(/\d+/g).map(Number)
  GlobalData.CURRENT_JOB_ID=jobNumber
  logger.info("CURRENT_JOB_ID: "+GlobalData.CURRENT_JOB_ID);


}