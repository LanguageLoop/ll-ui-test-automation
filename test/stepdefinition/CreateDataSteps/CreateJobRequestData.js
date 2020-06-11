

When(/^I create a new job request with minimal fields "(.*)"$/,  function(notice){
   createJobRequest(notice,"33124","Halfday","ARABIC","Certified Interpreter")
})

When(/^I create a new vic roads job request with minimal fields "(.*)"$/,  function(notice){
  createJobRequest(notice,"15432","Truck Drive","KIRUNDI","Non-Accredited")
})

function createJobRequest(notice, campuspin,assignmenttype,language,naatilevel)
{
  var temp_date_time=datetime.getScheduleDateTime(notice,"9:30")
  var temp_conf_date_time= datetime.getConfirmationDateTime(notice,"9:30")

  
  action.clickElement(homePage.InterpretingLink)
  action.selectTextFromDropdown(interpretingPage.filterDropdown,"Management")
  action.clickElement(interpretingPage.newJobRequestButton)

  action.enterValueAndPressReturn(jobRequestPage.campusPinInput,campuspin)
  action.enterValueAndPressReturn(jobRequestPage.requesterNameDropdown,"Automation Tester")
  action.clickElement(jobRequestPage.nextButton)
  action.enterValueAndPressReturn(jobRequestPage.languageDropdown,language)
  action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,assignmenttype)
  action.selectTextFromDropdown(jobRequestPage.naatiLevelDropdown, naatilevel)
  action.enterDateAndTime(jobRequestPage.dateInput,jobRequestPage.timeInput, temp_date_time[0],temp_date_time[1] )   
  action.enterDateAndTime(jobRequestPage.confirmationDate,jobRequestPage.confirmationTime,temp_conf_date_time[0],temp_conf_date_time[1])
  browser.pause(2000)
  browser.keys('Tab')
  browser.pause(2000)
  action.enterValue(jobRequestPage.confirmEmailInput,"hh@ll.com.au")

  action.clickElement(jobRequestPage.saveAndProceedToSummaryButton)
  browser.pause(2000)

  try{
    jobRequestPage.continueButton.waitForExist({timeout:5000})
    jobRequestPage.continueButton.click()
  
  }
catch(Err)
   {
    }
  browser.pause(2000)
  action.clickElement(jobRequestPage.submitButton)
  jobRequestPage.successMessageText.waitForExist({timeout:3000})
  browser.waitUntil(
      () => jobRequestPage.successMessageText.getText().includes("The Job#"), 20000, 'link not visible'
  );
  var jobNumber = jobRequestPage.successMessageText.getText().match(/\d+/g).map(Number)

  GlobalData.CURRENT_JOB_ID=jobNumber

}