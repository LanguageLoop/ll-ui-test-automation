

When(/^I select "(.*)" from the requester name dropdown$/,   function(listitem){
 action.enterValueAndPressReturn(jobRequestPage.requesterNameDropdown,listitem)
})

When(/^I select language "(.*)"$/,   function(listitem){
  browser.pause(2000)
  action.enterValueAndPressReturn(jobRequestPage.languageDropdown,listitem)
})

When(/^I enter campus pin "(.*)"$/,function(campuspin){
  action.enterValueAndPressReturn(jobRequestPage.campusPinInput,campuspin)
})

When(/^I select campus pin "(.*)"$/,function(campuspin){
  action.enterValueAndPressReturn(jobRequestPage.campusPINComboBox,campuspin)
})

When(/^I enter time "(.*)"$/,function(time){
  jobRequestPage.timeInput.waitForExist({timeout:5000})
  jobRequestPage.timeInput.waitForEnabled({timeout:5000})
  jobRequestPage.timeInput.waitForClickable({timeout:5000})
  jobRequestPage.timeInput.clearValue()
  action.enterValue(jobRequestPage.timeInput,time)
  browser.pause(1000)
  browser.keys('Tab')
})

When(/^I enter schedule "(.*)" and "(.*)"$/,function(dateStr,timeStr){
  var temp_date_time = datetime.getScheduleDateTime(dateStr,timeStr)
  action.enterDateAndTime(jobRequestPage.dateInput,jobRequestPage.timeInput,temp_date_time[0],temp_date_time[1])
})

When(/^I enter confirmation date and time "(.*)" and "(.*)"$/, function(notice,timeStr){
  var temp_date_time=datetime.getConfirmationDateTime(notice,timeStr)
  action.enterDateAndTime(jobRequestPage.confirmationDate,jobRequestPage.confirmationTime,temp_date_time[0],temp_date_time[1])
})

When(/^I select assignment type "(.*)"$/, function(assignmenttype){
  browser.pause(2000)
  action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,assignmenttype)
})

When(/^I select duration "(.*)"$/, function(duration){
  action.selectTextFromDropdown(jobRequestPage.durationDropdown, duration)
})

When(/^I enter nature of request "(.*)"$/,function(request){
  action.enterValue(jobRequestPage.natureOfRequestInput,request)
})

When(/^I select NAATI type "(.*)"$/, function(naati){
  action.selectTextFromDropdown(jobRequestPage.naatiLevelDropdown,naati)
})

When(/^I enter "(.*)" email address$/,function(email){
  jobRequestPage.confirmEmailInput.scrollIntoView()
  browser.pause(2000)
  action.enterValue(jobRequestPage.confirmEmailInput,email)
})

When(/^I click save and proceed to summary button$/,function(){
  action.clickElement(jobRequestPage.saveAndProceedToSummaryButton)
})

When(/^I click submit button$/,function(){
  try{
  //browser.pause(2000)
  jobRequestPage.submitButton.waitForExist({timeout:3000})
  action.clickElement(jobRequestPage.submitButton)
  }
  catch(Err){

  }
})
When(/^I click submit and summary button$/,function(){
  browser.pause(2000)
  action.clickElement(jobRequestPage.submitAndSummaryButton)
})

When(/^I click next button$/,function(){
  action.clickElement(jobRequestPage.nextButton)
})

When(/^I click on manual reason checkbox$/,function(){
  action.clickElement(jobRequestPage.manualAllocationCheckBox)
})

When(/^I enter manual reason "(.*)"$/,function(manualreason){
  action.enterValue(jobRequestPage.manualAllocationReasonInput,manualreason)
})

When(/^I click gender preference must checkbox$/,function(){
  action.clickElement(jobRequestPage.genderPreferenceCheckBox)
})

When(/^I select gender "(.*)"$/,function(gender){
  action.selectTextFromDropdown(jobRequestPage.genderDropdown,gender)
})

When(/^I click ancestry preference must checkbox$/,function(){
  action.clickElement(jobRequestPage.ancestryPreferenceCheckBox)
})

When(/^I select ancestry "(.*)"$/,function(ancestry){
  browser.pause(1000)
  action.enterValueAndPressReturn(jobRequestPage.ancestryDropdown,ancestry)
  browser.pause(1000)
})

When(/^I click religion preference must checkbox$/,function(){
  action.clickElement(jobRequestPage.religionPreferenceCheckBox)
})

When(/^I select religion "(.*)"$/,function(religion){
  browser.pause(1000)
  action.enterValueAndPressReturn(jobRequestPage.religionDropdown,religion)
  browser.pause(1000)
})

When(/^I click preferred interpreter must checkbox$/,function(){
  action.clickElement(jobRequestPage.preferredInterpreterMustCheckBox)
})

When(/^I search for interpreter "(.*)"$/,function(interpreter){
  action.enterValue(jobRequestPage.searchForInterpreterInput,interpreter)
  browser.pause(5000)
})

When(/^I click add preferred interpreter button$/,function(){
  action.clickElement(jobRequestPage.addInterpreterLink)
  browser.pause(5000)
})

When(/^I select "(.*)" interpreters from the list$/,function(count){
  var check_boxes=jobRequestPage.interpreterSearchResultsCheckBoxes
  for(i=0;i<count;i++)
  {
    action.clickElement(check_boxes[i])
  }
})

When(/^I click add interpreters button$/,function(){
  action.clickElement(jobRequestPage.addInterpretersButton)
})

When(/^I handle duplicate job warning window$/,function(){
  
  try{
    jobRequestPage.continueButton.waitForExist({timeout:3000})
    action.clickElement(jobRequestPage.continueButton)
  }
  catch(Err)
  {
  }
})

When(/^I click yes to confirm editing job request$/, function(){
  action.clickElement(jobRequestPage.editJobConfirmationYesButton)
})

When(/^I click back link$/, function(){
  browser.pause(2000)
  action.clickElement(jobRequestPage.backLink)
})

When(/^I enter location "(.*)"$/, function(location){
  //browser.pause(2000)
  try{
  jobRequestPage.locationInput.waitForExist({timeout:3000})
  action.enterLocation(jobRequestPage.locationInput,location)
  }
  catch(Err){}
})

When(/^I enter department "(.*)"$/, function(department){
  action.enterValue(jobRequestPage.departmentInput,department)
})

When(/^I enter your reference number "(.*)"$/, function(reference){
  action.enterValue(jobRequestPage.yourReferenceInput,reference)
})

When(/^I enter PO number "(.*)"$/, function(ponumber){
  action.enterValue(jobRequestPage.POInput,ponumber)
})

When(/^I click nes link$/, function(){
  action.clickElement(jobRequestPage.nesLink)
})

When(/^I enter nes first name "(.*)"$/, function(firstname){
  browser.pause(1000)
  action.enterValue(jobRequestPage.nesFirstNameInput,firstname)
})

When(/^I click nes save button$/, function(){
  action.clickElement(jobRequestPage.nesSaveButton)
  browser.pause(2000)
})

When(/^I enter report to location "(.*)"$/, function(location){
  action.enterValue(jobRequestPage.reportToLocationInput, location)
})

When(/^I enter report to name "(.*)"$/, function(name){
  action.enterValue(jobRequestPage.reportToNameInput, name)
})

When(/^I enter report to phone number "(.*)"$/, function(phonenumber){
  browser.pause(2000)
  action.enterValue(jobRequestPage.reportToPhoneNumberInput, phonenumber)
})

When(/^I click common instruction checkbox$/, function(){
  action.clickElement(jobRequestPage.commonInstructionCheckBox)
})

When(/^I add job file$/, function(){
  action.clickElement(jobRequestPage.addJobFileLink)
  browser.pause(2000)
  action.uploadFile(jobRequestPage.addJobFileControl,"./test/data/JobFile.docx")
  browser.pause(2000)
  action.clickElement(jobRequestPage.uploadAllFilesButton)
  browser.pause(2000)
})

When(/^I select confirmation mode "(.*)"$/, function(confirmationmode){
  action.selectTextFromDropdown(jobRequestPage.confirmModeDropdown, confirmationmode)
})

When(/^I enter confirmation phone number "(.*)"$/, function(phonenumber){
  browser.pause(2000)
  action.enterValue(jobRequestPage.confirmPhoneNumberInput,phonenumber)
})

When(/^I click on job details tab "(.*)"$/, function(jobdetail){
  switch(jobdetail)
  {
    case "Onsite":
      action.clickElement(jobRequestPage.onsiteTab)
      break
    case "Pre-booked Video":
      action.clickElement(jobRequestPage.prebookedVideoTab)
      browser.pause(2000)
      try{
        jobRequestPage.noChangeRequiredButton.waitForExist({timeout:3000})
        action.clickElement(jobRequestPage.noChangeRequiredButton)
      }
      catch(Err)
      {
      }
      action.clickElement(jobRequestPage.videoLinkEditorInput)
      browser.pause(2000)
      browser.keys("Link to video")
     // action.enterValue(jobRequestPage.videoLinkEditorInput,"Link to video")
      break
    case "Pre-Booked Telephone":
      action.clickElement(jobRequestPage.prebookedTelephoneTab)
      browser.pause(2000)
      try{
        jobRequestPage.noChangeRequiredButton.waitForExist({timeout:3000})
        action.clickElement(jobRequestPage.noChangeRequiredButton)
      }
      catch(Err)
      {
      }
      break
    case "Home Visit":
      action.clickElement(jobRequestPage.homeVisitTab)
      break
  }
})

When(/^I enter interpreter instructions "(.*)"$/, function(instruction){
  action.enterValue(jobRequestPage.interpreterInstructionsInput, instruction)
})

When(/^I click no change required button$/,function()
{
  browser.pause(2000)
  try{
    jobRequestPage.noChangeRequiredButton.waitForExist({timeout:3000})
    action.clickElement(jobRequestPage.noChangeRequiredButton)
  }
  catch(Err)
  {
  }
})

Then(/^the job created success message should appear$/, function(){
  
  jobRequestPage.successMessageText.waitForExist({timeout:12000})
  chai.expect(action.elementExists(jobRequestPage.successMessage)).to.be.true
  browser.waitUntil(
      () => jobRequestPage.successMessageText.getText().includes("The Job#"), 20000, 'link not visible'
  );
  
  var jobNumber = jobRequestPage.successMessageText.getText().match(/\d+/g).map(Number)
  GlobalData.CURRENT_JOB_ID=jobNumber
  
  
})

Then(/^I verify the created job id is listed$/, function(){
  browser.pause(2000)
  chai.expect(action.elementExists('//a[text()="'+GlobalData.CURRENT_JOB_ID+'"]')).to.be.true
})



