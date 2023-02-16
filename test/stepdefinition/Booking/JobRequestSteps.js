When(/^I select "(.*)" from the requester name dropdown$/,   function(listitem){
 action.enterValueAndPressReturn(jobRequestPage.requesterNameDropdown,listitem)
})

When(/^I select language "(.*)"$/,   function(listitem){
  browser.pause(2000)
  action.enterValueAndPressReturn(jobRequestPage.languageDropdown,listitem)
})

When(/^I enter campus pin "(.*)"$/,function(campuspin){
  action.isClickableWait(jobRequestPage.campusPinInput,20000)
  action.enterValueAndPressReturn(jobRequestPage.campusPinInput,campuspin)
  const jobType=$('label[class="ButtonGroup_button Button active"]')
  browser.waitUntil(()=> jobRequestPage.requesterNameDropdown.isEnabled(),{timeout:7000,timeoutMsg:'job type is not enabled',interval:500})
})

When(/^I select campus pin "(.*)"$/,function(campuspin){
  browser.pause(2000)
  action.enterValueAndPressReturn(jobRequestPage.campusPINComboBox,campuspin)
})

When(/^I enter time "(.*)"$/,function(time){
  action.isClickableWait(jobRequestPage.timeInput,20000)
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
  action.isClickableWait(jobRequestPage.dateInput,20000)
  action.enterDateAndTime(jobRequestPage.dateInput,jobRequestPage.timeInput,temp_date_time[0],temp_date_time[1])
  action.waitUntilLoadingIconDisappears();
})

When(/^I enter confirmation date and time "(.*)" and "(.*)"$/, function(notice,timeStr){
  var temp_date_time=datetime.getConfirmationDateTime(notice,timeStr)
  action.enterDateAndTime(jobRequestPage.confirmationDate,jobRequestPage.confirmationTime,temp_date_time[0],temp_date_time[1])
  action.waitUntilLoadingIconDisappears();
})

When(/^I select assignment type "(.*)"$/, function(assignmenttype){
  browser.pause(2000)
  action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,assignmenttype)
})

When(/^I select duration "(.*)"$/, function(duration){
  let times=$('(//input[contains(@id,"wtEarliestStartTime")])[1]')
   times.waitUntil(()=>{
    return times.getValue()!=null}, 5000)
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
  action.isClickableWait(jobRequestPage.saveAndProceedToSummaryButton,30000)
  jobRequestPage.saveAndProceedToSummaryButton.waitForClickable({timeout:7000},{timeoutMsg:'saveAndProceedToSummaryButton not clickable in 7s'},{interval:500})
  action.clickElement(jobRequestPage.saveAndProceedToSummaryButton)
  action.waitUntilLoadingIconDisappears();
})

When(/^I click submit button$/,function(){
  browser.pause(2000)
  action.isVisibleWait(jobRequestPage.submitButton,30000);
  // jobRequestPage.submitButton.waitForClickable({timeout:10000},{timeoutMsg:'submit not clickable in 10s'},{interval:1000})
  browser.execute("arguments[0].click();", jobRequestPage.submitButton);
  //action.clickElement(jobRequestPage.submitButton)
  /*console.time('t1')
  if(jobRequestPage.submitButton.isClickable())
  {
    jobRequestPage.submitButton.moveTo()
    action.clickElement(jobRequestPage.submitButton)
  }
  else{
  jobRequestPage.submitButton.waitForClickable({timeout:5000})  
  jobRequestPage.submitButton.moveTo()
  action.clickElement(jobRequestPage.submitButton)

  }
  
  console.timeEnd('t1')
  console.timeLog('t1');*/
  
  
})
When(/^I click submit and summary button$/,function(){
  browser.pause(2000)
  action.clickElement(jobRequestPage.submitAndSummaryButton)
})

When(/^I click next button$/,function(){
  jobRequestPage.nextButton.waitForClickable({timeout:5000,timeoutMsg:'next button not clickable in 5s',interval:500})
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
  console.log(jobRequestPage.ancestryDropdown.getText())
  chai.expect(jobRequestPage.ancestryDropdown.getText().includes(ancestry)).to.be.true
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
    action.isVisibleWait(jobRequestPage.continueButton,20000);
    jobRequestPage.continueButton.waitForClickable({timeout:10000,timeoutMsg:'continue button not clickable in 10s',inteval:500})
    browser.execute("arguments[0].click();", jobRequestPage.continueButton)
    //action.clickElement(jobRequestPage.continueButton)
  }
  catch(Err)
  {
  }
})

When(/^I click yes to confirm editing job request$/, function(){
  action.isClickableWait(jobRequestPage.editJobConfirmationYesButton)
  action.clickElement(jobRequestPage.editJobConfirmationYesButton)
})

When(/^I click back link$/, function(){
  browser.pause(2000)
  action.clickElement(jobRequestPage.backLink)
})

When(/^I enter location "(.*)"$/, function(location){
  //browser.pause(2000)
  try{
  jobRequestPage.locationInput.waitForExist({timeout:10000})
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
  action.isVisibleWait(jobRequestPage.nesFirstNameInput,10000);
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
  console.time('t2')
  action.isVisibleWait(jobRequestPage.successMessageText,30000);
  jobRequestPage.successMessageText.waitForExist({timeout:12000})
  chai.expect(action.elementExists(jobRequestPage.successMessage)).to.be.true
  browser.waitUntil(
      () => jobRequestPage.successMessageText.getText().includes("The Job#"), 20000, 'link not visible'
  );
  
  var jobNumber = jobRequestPage.successMessageText.getText().match(/\d+/g).map(Number)
  GlobalData.CURRENT_JOB_ID=jobNumber
  console.timeEnd('t2')
  console.timeLog('t2')

  
})

Then(/^I verify the created job id is listed$/, function(){
  browser.pause(2000)
  chai.expect(action.elementExists('//a[text()="'+GlobalData.CURRENT_JOB_ID+'"]')).to.be.true
})

When(/^I handle job updated warning message by refreshing assignment type "(.*)"$/,function(assignmenttype){
  try {
    let refreshCount = 0;
    while (action.isVisibleWait(jobRequestPage.jobGotUpdatedWarningMessage,10000) && refreshCount <10){
      console.log("Refreshing assignment type-"+refreshCount)
      browser.refresh()
      action.isClickableWait(jobRequestPage.assignmentTypeDropdown,30000)
      action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,assignmenttype)
      action.isClickableWait(jobRequestPage.saveAndProceedToSummaryButton,30000)
      action.clickElement(jobRequestPage.saveAndProceedToSummaryButton)
      refreshCount++
    }
  } catch (Err){
    console.log("Failed to handle job updated warning message-"+Err)
  }
})

When(/^I handle job updated warning message by refreshing NAATI type "(.*)"$/,function(naati){
  try {
    let refreshCount = 0;
    while (action.isVisibleWait(jobRequestPage.jobGotUpdatedWarningMessage,10000) && refreshCount <10){
      console.log("Refreshing naati-"+refreshCount)
      browser.refresh()
      action.clickElement(jobRequestPage.nextButton)
      action.selectTextFromDropdown(jobRequestPage.naatiLevelDropdown,naati)
      action.isClickableWait(jobRequestPage.saveAndProceedToSummaryButton,30000)
      action.clickElement(jobRequestPage.saveAndProceedToSummaryButton)
      refreshCount++
    }
  } catch (Err){
    console.log("Failed to handle job updated warning message-"+Err)
  }
})

Given(/^Click the Plus New Requester button$/, function(){
    action.isClickableWait(jobRequestPage.newRequesterPlusButton,10000);
    action.clickElement(jobRequestPage.newRequesterPlusButton);
})

Given(/^Clicks Add New User$/, function(){
  action.isExistingWait(jobRequestPage.addNewUserButton,10000);
  action.isClickableWait(jobRequestPage.addNewUserButton,10000);
  action.clickElement(jobRequestPage.addNewUserButton);
})

Given(/^Fill out all the required details "(.*)", email, "(.*)"$/, function(firstName,landLineNumber){
  action.isVisibleWait(jobRequestPage.firstNameFieldBookingOfficer,10000);
  firstName = firstName + (Math.floor(Math.random() * 100000) + 1).toString()
  GlobalData.BOOKING_OFFICER_FIRSTNAME = firstName
  action.enterValue(jobRequestPage.firstNameFieldBookingOfficer,GlobalData.BOOKING_OFFICER_FIRSTNAME);
  let email = GlobalData.BOOKING_OFFICER_FIRSTNAME + "@ll.com"
  action.enterValue(jobRequestPage.emailFieldBookingOfficer,email);
  action.enterValue(jobRequestPage.landLineNumberFieldBookingOfficer,landLineNumber);
})

When(/^They click the Save button$/, function(){
  action.isClickableWait(jobRequestPage.saveButtonBookingOfficer,10000);
  action.clickElement(jobRequestPage.saveButtonBookingOfficer);
})

Then(/^The user is created in job request$/,function(){
  let requesterNameTextActual = $(jobRequestPage.requesterNameTextValueLocator.replace("<dynamic>",GlobalData.BOOKING_OFFICER_FIRSTNAME))
  let requesterNameDisplayStatus = action.isVisibleWait(requesterNameTextActual,10000);
  chai.expect(requesterNameDisplayStatus).to.be.true;
})

Then(/^I see the Interpreter text "(.*)"$/, function(expectedInterpreterText){
  action.isVisibleWait(jobRequestPage.interpreterInstructionsText, 10000);
  let actualInterpreterText = action.getElementText(jobRequestPage.interpreterInstructionsText);
  console.log("actual text is",actualInterpreterText);
  console.log("expected text is",expectedInterpreterText);
  chai.expect(actualInterpreterText).to.equals(expectedInterpreterText);
})

When(/^click on Job Type option "(.*)" in Job Requester Details$/,function(requestJobType){
  let requestJobTypeOption = $(jobRequestPage.jobTypeOptionLocator.replace("<dynamic>",requestJobType));
  action.isVisibleWait(requestJobTypeOption,10000);
  action.clickElement(requestJobTypeOption);
})

When(/^search for contractor "(.*)" in Job Allocation$/,function(contractorNameOrID){
  action.waitUntilLoadingIconDisappears();
  action.isVisibleWait(jobRequestPage.contractorSearchBoxJobAllocation,20000);
  action.enterValue(jobRequestPage.contractorSearchBoxJobAllocation,contractorNameOrID);
  action.pressKeys("Tab");
})

When(/^the blocked contractor "(.*)" status is "(.*)" for that Job$/,function(contractorName,expectedStatus){
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>",contractorName));
  action.isVisibleWait(contractorJobStatusLink,10000);
  let contractorJobStatusTextActual = action.getElementText(contractorJobStatusLink);
  chai.expect(contractorJobStatusTextActual).to.equal(expectedStatus);
})

When(/^the blocked contractor "(.*)" status is eligible for that Job$/,function(contractorName){
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>",contractorName));
  action.isVisibleWait(contractorJobStatusLink,10000);
  let contractorJobStatusTextActual = action.getElementText(contractorJobStatusLink);
  chai.expect(contractorJobStatusTextActual).to.not.equal("Not eligible");
})

When(/^user clicks on Reset auto notifications link and refresh the page$/,function(){
  action.isVisibleWait(jobRequestPage.resetAutoNotificationsLink,20000);
  action.clickElement(jobRequestPage.resetAutoNotificationsLink);
  action.waitUntilLoadingIconDisappears();
  browser.refresh();
})

When(/^I enter travel approved "(.*)"$/, function (travelApproved) {
  action.isVisibleWait(jobRequestPage.travelApprovedTextBox, 10000);
  action.enterValue(jobRequestPage.travelApprovedTextBox, travelApproved);
})

When(/^Accept Metro Service is not selected$/, function () {
  let acceptMetroServiceCheckboxStatus = action.isSelectedWait(jobRequestPage.acceptMetroServiceCheckbox, 1000);
  chai.expect(acceptMetroServiceCheckboxStatus).to.be.false;
})

Then(/^interpreters "(.*)" who live outside the "(.*)" KM are not eligible for the job$/, function (contractorName, distance) {
  let contractorDistanceActualText = $(jobRequestPage.contractorDistanceLocator.replace("<dynamic>", contractorName));
  contractorDistanceActualText = action.getElementText(contractorDistanceActualText);
  let contractorDistanceKmValue = contractorDistanceActualText.split(" ")[0];
  chai.expect(parseInt(contractorDistanceKmValue)).to.be.greaterThan(parseInt(distance));
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>", contractorName));
  action.isVisibleWait(contractorJobStatusLink, 10000);
  let contractorJobStatusTextActual = action.getElementText(contractorJobStatusLink);
  chai.expect(contractorJobStatusTextActual).to.equal("Not eligible");
})

When(/^the booking is cancelled on behalf of "(.*)"$/, function (requesterName) {
  action.isVisibleWait(jobRequestPage.jobStatusLink, 10000);
  action.clickElement(jobRequestPage.jobStatusLink);
  action.isVisibleWait(jobRequestPage.jobStatusDropdown, 10000);
  action.selectTextFromDropdown(jobRequestPage.jobStatusDropdown, "Cancel");
  action.isVisibleWait(jobRequestPage.jobCancelConfirmationPopupText, 10000);
  action.isVisibleWait(jobRequestPage.cancelConfirmationYesButton, 10000);
  action.clickElement(jobRequestPage.cancelConfirmationYesButton);
  action.isVisibleWait(jobRequestPage.cancelReasonDropdown, 10000);
  action.selectTextFromDropdown(jobRequestPage.cancelReasonDropdown, "Job request error (Date,Time, Duration, etc..)");
  action.isVisibleWait(jobRequestPage.cancelOnBehalfDropdown, 10000);
  action.selectTextFromDropdown(jobRequestPage.cancelOnBehalfDropdown, requesterName);
  action.isVisibleWait(jobRequestPage.submitButtonConfirmationPopup, 10000);
  action.clickElement(jobRequestPage.submitButtonConfirmationPopup);
  action.isVisibleWait(jobRequestPage.searchByJobIdTextBox, 10000);
})

Then(/^interpreters "(.*)" who live between "(.*)" KM and "(.*)" KM are eligible for the job "(.*)"$/, function (contractorName, distanceFrom, distanceTo, expectedContractorStatus) {
  let contractorDistanceActualText = $(jobRequestPage.contractorDistanceLocator.replace("<dynamic>", contractorName));
  contractorDistanceActualText = action.getElementText(contractorDistanceActualText);
  let contractorDistanceKmValue = contractorDistanceActualText.split(" ")[0];
  let distanceIsBetweenValues = parseInt(contractorDistanceKmValue) >= parseInt(distanceFrom) && parseInt(contractorDistanceKmValue) <= parseInt(distanceTo);
  chai.expect(distanceIsBetweenValues).to.be.true;
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>", contractorName));
  action.isVisibleWait(contractorJobStatusLink, 10000);
  let contractorJobStatusTextActual = action.getElementText(contractorJobStatusLink);
  chai.expect(contractorJobStatusTextActual).to.equal(expectedContractorStatus);
})

Then(/^interpreters "(.*)" who live within the "(.*)" KM are eligible for the job "(.*)"$/, function (contractorName, distance, expectedContractorStatus) {
  let contractorDistanceActualText = $(jobRequestPage.contractorDistanceLocator.replace("<dynamic>", contractorName));
  contractorDistanceActualText = action.getElementText(contractorDistanceActualText);
  let contractorDistanceKmValue = contractorDistanceActualText.split(" ")[0];
  let distanceIsWithinLimit = parseInt(contractorDistanceKmValue) <= parseInt(distance)
  chai.expect(distanceIsWithinLimit).to.be.true;
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>", contractorName));
  action.isVisibleWait(contractorJobStatusLink, 10000);
  let contractorJobStatusTextActual = action.getElementText(contractorJobStatusLink);
  chai.expect(contractorJobStatusTextActual).to.equal(expectedContractorStatus);
})

When(/^Accept Metro Service is selected$/, function () {
  action.isVisibleWait(jobRequestPage.acceptMetroServiceCheckbox, 10000);
  action.clickElement(jobRequestPage.acceptMetroServiceCheckbox);
  let acceptMetroServiceCheckboxStatus = action.isSelectedWait(jobRequestPage.acceptMetroServiceCheckbox, 1000);
  chai.expect(acceptMetroServiceCheckboxStatus).to.be.true;
})
