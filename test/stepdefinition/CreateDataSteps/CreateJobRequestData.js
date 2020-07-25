

When(/^I create a new job request with minimal fields "(.*)"$/,  function(notice){
   createJobRequest(notice,"33124","Halfday","ARABIC","Certified Interpreter","Automation Tester")
})

When(/^I create a new vic roads job request with minimal fields "(.*)"$/,  function(notice){
  createJobRequest(notice,"10647","HalfDay","HAZARAGI","Non-Accredited","Automation Tester")
})

When(/^I create a new vic roads job request for bulk requests "(.*)"$/,  function(notice){
  createJobRequest(notice,"10139","Car Drive","ARABIC","Paraprofessional","Automation Tester")
})

function createJobRequest(notice, campuspin,assignmenttype,language,naatilevel,requester)
{
  var temp_date_time=datetime.getScheduleDateTime(notice,"9:30")
  var temp_conf_date_time= datetime.getConfirmationDateTime(notice,"9:30")

  
  action.clickElement(homePage.InterpretingLink)
  action.selectTextFromDropdown(interpretingPage.filterDropdown,"Management")
  action.clickElement(interpretingPage.newJobRequestButton)
  action.enterValueAndPressReturn(jobRequestPage.campusPinInput,campuspin)
  action.enterValueAndPressReturn(jobRequestPage.requesterNameDropdown,requester)
  action.clickElement(jobRequestPage.nextButton)

  action.enterValueAndPressReturn(jobRequestPage.languageDropdown,language)

  action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,assignmenttype)
  action.selectTextFromDropdown(jobRequestPage.naatiLevelDropdown, naatilevel)
  action.enterDateAndTime(jobRequestPage.dateInput,jobRequestPage.timeInput, temp_date_time[0],temp_date_time[1] ) 
  
  action.enterValue(jobRequestPage.confirmEmailInput,"hh@ll.com.au")
 // browser.pause(4000)

  action.enterDateAndTime(jobRequestPage.confirmationDate,jobRequestPage.confirmationTime,temp_conf_date_time[0],temp_conf_date_time[1])
 // browser.keys('Tab')
  browser.pause(2000)
  action.clickElement(jobRequestPage.saveAndProceedToSummaryButton)
  browser.pause(2000)

  try{
    jobRequestPage.continueButton.waitForExist({timeout:3000})
    action.clickElement(jobRequestPage.continueButton)
  }
  catch(Err)
  {
  }
  browser.pause(2000)

  action.clickElement(jobRequestPage.submitButton)
 jobRequestPage.successMessageText.waitForExist({timeout:6000})
browser.waitUntil(
      () => jobRequestPage.successMessageText.getText().includes("The Job#"), 5000, 'link not visible'
  );
  var jobNumber = jobRequestPage.successMessageText.getText().match(/\d+/g).map(Number)
  GlobalData.CURRENT_JOB_ID=jobNumber


}