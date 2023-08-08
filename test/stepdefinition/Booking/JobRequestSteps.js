When(/^I select "(.*)" from the requester name dropdown$/,   function(listitem){
  action.isVisibleWait(jobRequestPage.requesterNameDropdown,20000,"Requester name dropdown in Job request page");
  action.enterValueAndPressReturn(jobRequestPage.requesterNameDropdown,listitem,"Requester name dropdown in Job request page");
  browser.pause(5000)
})

When(/^I select language "(.*)"$/,   function(listitem){
  browser.pause(2000)
  action.isVisibleWait(jobRequestPage.languageDropdown,30000,"Language dropdown in Job request page");
  action.enterValueAndPressReturn(jobRequestPage.languageDropdown,listitem,"Language dropdown in Job request page")
})

When(/^I enter campus pin "(.*)"$/,function(campuspin){
  action.isClickableWait(jobRequestPage.campusPinInput,20000,"Campus pin text box in Job request page")
  action.enterValueAndPressReturn(jobRequestPage.campusPinInput,campuspin,"Campus pin text box in Job request page")
  const jobType=$('label[class="ButtonGroup_button Button active"]')
  browser.waitUntil(()=> jobRequestPage.requesterNameDropdown.isEnabled(),{timeout:7000,timeoutMsg:'job type is not enabled',interval:500})
})

When(/^I select campus pin "(.*)"$/,function(campuspin){
  browser.pause(2000)
  action.enterValueAndPressReturn(jobRequestPage.campusPINComboBox,campuspin,"Campus pin combo box in Job request page")
})

When(/^I enter time "(.*)"$/,function(time){
  action.isVisibleWait(jobRequestPage.timeInput,20000,"Time text box in Job request page")
  action.isClickableWait(jobRequestPage.timeInput,20000,"Time text box in Job request page")
  jobRequestPage.timeInput.waitForExist({timeout:5000})
  jobRequestPage.timeInput.waitForEnabled({timeout:5000})
  jobRequestPage.timeInput.waitForClickable({timeout:5000})
  jobRequestPage.timeInput.clearValue()
  action.enterValue(jobRequestPage.timeInput,time,"Time text box in Job request page")
  browser.pause(1000)
  browser.keys('Tab')
})

When(/^I enter schedule "(.*)" and "(.*)"$/,function(dateStr,timeStr){
  var temp_date_time = datetime.getScheduleDateTime(dateStr,timeStr)
  action.isClickableWait(jobRequestPage.dateInput,20000,"Date text box in Job request page")
  action.enterDateAndTime(jobRequestPage.dateInput,jobRequestPage.timeInput,temp_date_time[0],temp_date_time[1],"Time text box in Job request page")
  action.waitUntilLoadingIconDisappears();
})

When(/^I enter confirmation date and time "(.*)" and "(.*)"$/, function(notice,timeStr){
  var temp_date_time=datetime.getConfirmationDateTime(notice,timeStr)
  action.enterDateAndTime(jobRequestPage.confirmationDate,jobRequestPage.confirmationTime,temp_date_time[0],temp_date_time[1],"Confirmation Time text box in Job request page")
  action.waitUntilLoadingIconDisappears();
})

When(/^I select assignment type "(.*)"$/, function(assignmenttype){
  browser.pause(2000)
  action.isVisibleWait(jobRequestPage.assignmentTypeDropdown,20000,"Assignment type dropdown in Job request page");
  action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,assignmenttype,"Assignment type dropdown in Job request page")
})

When(/^I select duration "(.*)"$/, function(duration){
  let times=$('(//input[contains(@id,"wtEarliestStartTime")])[1]')
   times.waitUntil(()=>{
    return times.getValue()!=null}, 5000)
  action.selectTextFromDropdown(jobRequestPage.durationDropdown, duration)
})

When(/^I enter nature of request "(.*)"$/,function(request){
  action.enterValue(jobRequestPage.natureOfRequestInput,request,"Nature of request text box in Job request page")
})

When(/^I select NAATI type "(.*)"$/, function(naati){
  action.selectTextFromDropdown(jobRequestPage.naatiLevelDropdown,naati,"NAATI level dropdown in Job request page")
})

When(/^I enter "(.*)" email address$/,function(email){
  jobRequestPage.confirmEmailInput.scrollIntoView()
  browser.pause(2000)
  action.enterValue(jobRequestPage.confirmEmailInput,email,"Confirmation Email text box in Job request page")
})

When(/^I click save and proceed to summary button$/,function(){
  action.isClickableWait(jobRequestPage.saveAndProceedToSummaryButton,30000,"Save and proceed to summary button in Job request page")
  jobRequestPage.saveAndProceedToSummaryButton.waitForClickable({timeout:7000},{timeoutMsg:'saveAndProceedToSummaryButton not clickable in 7s'},{interval:500})
  action.clickElement(jobRequestPage.saveAndProceedToSummaryButton,"Save and proceed to summary button in Job request page")
  action.waitUntilLoadingIconDisappears();
})

When(/^I click submit button$/,function(){
  browser.pause(2000)
  action.isVisibleWait(jobRequestPage.submitButton,30000,"Submit button in Job request page");
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
  action.clickElement(jobRequestPage.submitAndSummaryButton,"Submit and Summary button in Job request page")
})

When(/^I click next button$/,function(){
  action.isVisibleWait(jobRequestPage.nextButton,20000,"Next button in Job request page");
  jobRequestPage.nextButton.waitForClickable({timeout:5000,timeoutMsg:'next button not clickable in 5s',interval:500})
  action.clickElement(jobRequestPage.nextButton,"Next button in Job request page")
})

When(/^I click on manual reason checkbox$/,function(){
  action.clickElement(jobRequestPage.manualAllocationCheckBox,"Manual allocation checkbox in Job request page")
})

When(/^I enter manual reason "(.*)"$/,function(manualreason){
  action.enterValue(jobRequestPage.manualAllocationReasonInput,manualreason,"Manual allocation reason in Job request page")
})

When(/^I click gender preference must checkbox$/,function(){
  action.clickElement(jobRequestPage.genderPreferenceCheckBox,"Gender preference checkbox in Job request page")
})

When(/^I select gender "(.*)"$/,function(gender){
  action.selectTextFromDropdown(jobRequestPage.genderDropdown,gender,"Gender dropdown in Job request page")
})

When(/^I click ancestry preference must checkbox$/,function(){
  action.clickElement(jobRequestPage.ancestryPreferenceCheckBox,"Ancestry preference checkbox in Job request page")
})

When(/^I select ancestry "(.*)"$/,function(ancestry){
  browser.pause(1000)
  action.enterValueAndPressReturn(jobRequestPage.ancestryDropdown,ancestry,"Ancestry dropdown in Job request page")
  browser.pause(1000)
  logger.info(jobRequestPage.ancestryDropdown.getText())
  chai.expect(jobRequestPage.ancestryDropdown.getText().includes(ancestry)).to.be.true
})

When(/^I click religion preference must checkbox$/,function(){
  action.clickElement(jobRequestPage.religionPreferenceCheckBox,"Religion preference checkbox in Job request page")
})

When(/^I select religion "(.*)"$/,function(religion){
  browser.pause(1000)
  action.enterValueAndPressReturn(jobRequestPage.religionDropdown,religion,"Religion dropdown in Job request page")
  browser.pause(1000)
})

When(/^I click preferred interpreter must checkbox$/,function(){
  action.clickElement(jobRequestPage.preferredInterpreterMustCheckBox,"Preferred interpreter must checkbox in Job request page")
})

When(/^I search for interpreter "(.*)"$/,function(interpreter){
  action.enterValue(jobRequestPage.searchForInterpreterInput,interpreter,"Search for interpreter text box in Job request page")
  browser.pause(5000)
})

When(/^I click add preferred interpreter button$/,function(){
  action.clickElement(jobRequestPage.addInterpreterLink,"Add interpreter link in Job request page")
  browser.pause(5000)
})

When(/^I select "(.*)" interpreters from the list$/,function(count){
  var check_boxes=jobRequestPage.interpreterSearchResultsCheckBoxes
  for(i=0;i<count;i++)
  {
    action.clickElement(check_boxes[i],"Interpreter search result checkbox in Job request page")
  }
})

When(/^I click add interpreters button$/,function(){
  action.clickElement(jobRequestPage.addInterpretersButton,"Add interpreters button in Job request page")
})

When(/^I handle duplicate job warning window$/,function(){
  
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
})

When(/^I click yes to confirm editing job request$/, function(){
  action.isVisibleWait(jobRequestPage.editJobConfirmationYesButton,10000,"Edit Job confirmation Yes button in Job request page")
  action.clickElement(jobRequestPage.editJobConfirmationYesButton,"Edit Job confirmation Yes button in Job request page")
})

When(/^I click back link$/, function(){
  browser.pause(2000)
  action.clickElement(jobRequestPage.backLink,"Back link in Job request page")
})

When(/^I enter location "(.*)"$/, function(location){
  //browser.pause(2000)
  try{
  jobRequestPage.locationInput.waitForExist({timeout:10000})
  action.enterLocation(jobRequestPage.locationInput,location,"Location text box in Job request page")
  }
  catch(Err){}
})

When(/^I enter department "(.*)"$/, function(department){
  action.enterValue(jobRequestPage.departmentInput,department,"Department text box in Job request page")
})

When(/^I enter your reference number "(.*)"$/, function(reference){
  action.enterValue(jobRequestPage.yourReferenceInput,reference,"Your reference text box in Job request page")
})

When(/^I enter PO number "(.*)"$/, function(ponumber){
  action.enterValue(jobRequestPage.POInput,ponumber,"PO number text box in Job request page")
})

When(/^I click nes link$/, function(){
  action.clickElement(jobRequestPage.nesLink,"NES link in Job request page")
})

When(/^I enter nes first name "(.*)"$/, function(firstname){
  browser.pause(1000)
  action.isVisibleWait(jobRequestPage.nesFirstNameInput,10000,"NES first name text box in Job request page");
  action.enterValue(jobRequestPage.nesFirstNameInput,firstname,"NES first name text box in Job request page")
})

When(/^I click nes save button$/, function(){
  action.clickElement(jobRequestPage.nesSaveButton,"NES Save button in Job request page")
  browser.pause(2000)
})

When(/^I enter report to location "(.*)"$/, function(location){
  action.enterValue(jobRequestPage.reportToLocationInput, location,"Report to location text box in Job request page")
})

When(/^I enter report to name "(.*)"$/, function(name){
  action.enterValue(jobRequestPage.reportToNameInput, name,"Report to name text box in Job request page")
})

When(/^I enter report to phone number "(.*)"$/, function(phonenumber){
  browser.pause(2000)
  action.enterValue(jobRequestPage.reportToPhoneNumberInput, phonenumber,"Report to phone number text box in Job request page")
})

When(/^I click common instruction checkbox$/, function(){
  action.clickElement(jobRequestPage.commonInstructionCheckBox,"Common instruction check box in Job request page")
})

When(/^I add job file$/, function(){
  action.clickElement(jobRequestPage.addJobFileLink,"Add job file link in Job request page")
  browser.pause(2000)
  action.uploadFile(jobRequestPage.addJobFileControl,"./test/data/JobFile.docx","Add job file control in Job request page")
  browser.pause(2000)
  action.clickElement(jobRequestPage.uploadAllFilesButton,"Upload all files button in Job request page")
  browser.pause(2000)
})

When(/^I select confirmation mode "(.*)"$/, function(confirmationmode){
  action.selectTextFromDropdown(jobRequestPage.confirmModeDropdown, confirmationmode,"Confirmation mode dropdown in Job request page")
})

When(/^I enter confirmation phone number "(.*)"$/, function(phonenumber){
  browser.pause(2000)
  action.enterValue(jobRequestPage.confirmPhoneNumberInput,phonenumber,"Confirm phone number text box in Job request page")
})

When(/^I click on job details tab "(.*)"$/, function(jobdetail){
  switch(jobdetail)
  {
    case "Onsite":
      action.clickElement(jobRequestPage.onsiteTab,"On site tab in Job request page")
      break
    case "Pre-booked Video":
      action.clickElement(jobRequestPage.prebookedVideoTab,"Pre-booked Video tab in Job request page")
      browser.pause(2000)
      try{
        jobRequestPage.noChangeRequiredButton.waitForExist({timeout:3000})
        action.clickElement(jobRequestPage.noChangeRequiredButton,"No change required button in Job request page")
      }
      catch(Err)
      {
      }
      action.clickElement(jobRequestPage.videoLinkEditorInput,"Video link editor text box in Job request page")
      browser.pause(2000)
      browser.keys("Link to video")
     // action.enterValue(jobRequestPage.videoLinkEditorInput,"Link to video")
      break
    case "Pre-Booked Telephone":
      action.clickElement(jobRequestPage.prebookedTelephoneTab,"Pre-booked Telephone tab in Job request page")
      browser.pause(2000)
      try{
        jobRequestPage.noChangeRequiredButton.waitForExist({timeout:3000})
        action.clickElement(jobRequestPage.noChangeRequiredButton,"No change required button in Job request page")
      }
      catch(Err)
      {
      }
      break
    case "Home Visit":
      action.clickElement(jobRequestPage.homeVisitTab,"Home visit tab in Job request page")
      break
  }
})

When(/^I enter interpreter instructions "(.*)"$/, function(instruction){
  action.enterValue(jobRequestPage.interpreterInstructionsInput, instruction,"Interpreter instructions text box in Job request page")
})

When(/^I click no change required button$/,function()
{
  browser.pause(2000)
  try{
    jobRequestPage.noChangeRequiredButton.waitForExist({timeout:3000})
    action.clickElement(jobRequestPage.noChangeRequiredButton,"No change required button in Job request page")
  }
  catch(Err)
  {
  }
})

Then(/^the job created success message should appear$/, function(){
  console.time('t2')
  action.isVisibleWait(jobRequestPage.successMessageText,90000,"Success message text in Job request page");
  jobRequestPage.successMessageText.waitForExist({timeout:12000})
  chai.expect(action.elementExists(jobRequestPage.successMessage,"Success message text in Job request page")).to.be.true
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
  chai.expect(action.elementExists('//a[text()="'+GlobalData.CURRENT_JOB_ID+'"]',"Current Job ID "+GlobalData.CURRENT_JOB_ID+" in Job request page")).to.be.true
})

When(/^I handle job updated warning message by refreshing assignment type "(.*)"$/,function(assignmenttype){
  try {
    let refreshCount = 0;
    while (action.isVisibleWait(jobRequestPage.jobGotUpdatedWarningMessage,10000,"Job got updated warning message in Job request page") && refreshCount <10){
      logger.info("Refreshing assignment type-"+refreshCount)
      browser.refresh()
      action.isClickableWait(jobRequestPage.assignmentTypeDropdown,30000,"Assignment type dropdown in Job request page")
      action.enterValueAndPressReturn(jobRequestPage.assignmentTypeDropdown,assignmenttype,"Assignment type dropdown in Job request page")
      action.isClickableWait(jobRequestPage.saveAndProceedToSummaryButton,30000,"Save and proceed to summary button in Job request page")
      action.clickElement(jobRequestPage.saveAndProceedToSummaryButton,"Save and proceed to summary button in Job request page")
      refreshCount++
    }
  } catch (Err){
    logger.info("Failed to handle job updated warning message-"+Err)
  }
})

When(/^I handle job updated warning message by refreshing NAATI type "(.*)"$/,function(naati){
  try {
    let refreshCount = 0;
    while (action.isVisibleWait(jobRequestPage.jobGotUpdatedWarningMessage,10000,"Job got updated warning message in Job request page") && refreshCount <10){
      logger.info("Refreshing naati-"+refreshCount)
      browser.refresh()
      action.clickElement(jobRequestPage.nextButton,"Next button in Job request page")
      action.selectTextFromDropdown(jobRequestPage.naatiLevelDropdown,naati,"NAATI level dropdown in Job request page")
      action.isClickableWait(jobRequestPage.saveAndProceedToSummaryButton,30000,"Save and proceed to summary button in Job request page")
      action.clickElement(jobRequestPage.saveAndProceedToSummaryButton,"Save and proceed to summary button in Job request page")
      refreshCount++
    }
  } catch (Err){
    logger.info("Failed to handle job updated warning message-"+Err)
  }
})

Given(/^Click the Plus New Requester button$/, function(){
    action.isClickableWait(jobRequestPage.newRequesterPlusButton,10000,"New requester plus button in Job request page");
    action.clickElement(jobRequestPage.newRequesterPlusButton,"New requester plus button in Job request page");
})

Given(/^Clicks Add New User$/, function(){
  action.isExistingWait(jobRequestPage.addNewUserButton,10000,"Add new user button in Job request page");
  action.isClickableWait(jobRequestPage.addNewUserButton,10000,"Add new user button in Job request page");
  action.clickElement(jobRequestPage.addNewUserButton,"Add new user button in Job request page");
})

Given(/^Fill out all the required details "(.*)", email, "(.*)"$/, function(firstName,landLineNumber){
  action.isVisibleWait(jobRequestPage.firstNameFieldBookingOfficer,10000,"First Name text box booking officer in Job request page");
  firstName = firstName + (Math.floor(Math.random() * 100000) + 1).toString()
  GlobalData.BOOKING_OFFICER_FIRSTNAME = firstName
  action.enterValue(jobRequestPage.firstNameFieldBookingOfficer,GlobalData.BOOKING_OFFICER_FIRSTNAME,"First Name text box booking officer in Job request page");
  let email = GlobalData.BOOKING_OFFICER_FIRSTNAME + "@ll.com"
  action.enterValue(jobRequestPage.emailFieldBookingOfficer,email,"Email text box booking officer in Job request page");
  action.enterValue(jobRequestPage.landLineNumberFieldBookingOfficer,landLineNumber,"Landline number text box booking officer in Job request page");
})

When(/^They click the Save button$/, function(){
  action.isClickableWait(jobRequestPage.saveButtonBookingOfficer,10000,"Save button booking officer in Job request page");
  action.clickElement(jobRequestPage.saveButtonBookingOfficer,"Save button booking officer in Job request page");
})

Then(/^The user is created in job request$/,function(){
  let requesterNameTextActual = $(jobRequestPage.requesterNameTextValueLocator.replace("<dynamic>",GlobalData.BOOKING_OFFICER_FIRSTNAME))
  let requesterNameDisplayStatus = action.isVisibleWait(requesterNameTextActual,10000,"Requester name text in Job request page");
  chai.expect(requesterNameDisplayStatus).to.be.true;
})

Then(/^I see the Interpreter text "(.*)"$/, function(expectedInterpreterText){
  action.isVisibleWait(jobRequestPage.interpreterInstructionsText, 10000);
  let actualInterpreterText = action.getElementText(jobRequestPage.interpreterInstructionsText,"Interpreter instructions text in Job request page");
  logger.info("actual text is ",actualInterpreterText);
  logger.info("expected text is ",expectedInterpreterText);
  chai.expect(actualInterpreterText).to.equals(expectedInterpreterText);
})

When(/^click on Job Type option "(.*)" in Job Requester Details$/,function(requestJobType){
  let requestJobTypeOption = $(jobRequestPage.jobTypeOptionLocator.replace("<dynamic>",requestJobType));
  action.isVisibleWait(requestJobTypeOption,10000,"Request job type option in Job request page");
  action.clickElement(requestJobTypeOption,"Request job type option in Job request page");
  let requestJobTypeOptionElementClass = action.getElementAttribute(requestJobTypeOption, "class","Request job type option in Job request page");
  let counter = 0;
  while (requestJobTypeOptionElementClass.includes("active") === false && counter < 3) {
    action.clickElement(requestJobTypeOption,"Request job type option in Job request page");
    browser.pause(3000);
    requestJobTypeOptionElementClass = action.getElementAttribute(requestJobTypeOption, "class","Request job type option in Job request page");
    counter++
  }
})

When(/^search for contractor "(.*)" in Job Allocation$/,function(contractorNameOrID){
  action.waitUntilLoadingIconDisappears();
  action.isVisibleWait(jobRequestPage.contractorSearchBoxJobAllocation,20000,"Contractor search box job allocation in Job request page");
  action.enterValue(jobRequestPage.contractorSearchBoxJobAllocation,contractorNameOrID,"Contractor search box job allocation in Job request page");
  action.pressKeys("Tab");
})

When(/^the blocked contractor "(.*)" status is "(.*)" for that Job$/,function(contractorName,expectedStatus){
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>",contractorName));
  action.isVisibleWait(contractorJobStatusLink,10000,"Contractor job status link in Job request page");
  let contractorJobStatusTextActual = action.getElementText(contractorJobStatusLink,"Contractor job status link in Job request page");
  chai.expect(contractorJobStatusTextActual).to.equal(expectedStatus);
})

When(/^the blocked contractor "(.*)" status is eligible for that Job$/,function(contractorName){
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>",contractorName));
  action.isVisibleWait(contractorJobStatusLink,10000,"Contractor job status link in Job request page");
  let contractorJobStatusTextActual = action.getElementText(contractorJobStatusLink,"Contractor job status link in Job request page");
  chai.expect(contractorJobStatusTextActual).to.not.equal("Not eligible");
})

When(/^user clicks on Reset auto notifications link and refresh the page$/,function(){
  action.isVisibleWait(jobRequestPage.resetAutoNotificationsLink,20000,"Reset auto notifications link in Job request page");
  action.clickElement(jobRequestPage.resetAutoNotificationsLink,"Reset auto notifications link in Job request page");
  action.waitUntilLoadingIconDisappears();
  browser.refresh();
})

When(/^I enter travel approved "(.*)"$/, function (travelApproved) {
  action.isVisibleWait(jobRequestPage.travelApprovedTextBox, 10000,"Travel approved text box in Job request page");
  action.enterValue(jobRequestPage.travelApprovedTextBox, travelApproved,"Travel approved text box in Job request page");
})

When(/^Accept Metro Service is not selected$/, function () {
  let acceptMetroServiceCheckboxStatus = action.isSelectedWait(jobRequestPage.acceptMetroServiceCheckbox, 1000,"Accept metro service check box in Job request page");
  chai.expect(acceptMetroServiceCheckboxStatus).to.be.false;
})

Then(/^interpreters "(.*)" who live outside the "(.*)" KM are not eligible for the job$/, function (contractorName, distance) {
  let contractorDistanceActualText = $(jobRequestPage.contractorDistanceLocator.replace("<dynamic>", contractorName));
  contractorDistanceActualText = action.getElementText(contractorDistanceActualText,"Contractor distance actual text in Job request page");
  let contractorDistanceKmValue = contractorDistanceActualText.split(" ")[0];
  chai.expect(parseInt(contractorDistanceKmValue)).to.be.greaterThan(parseInt(distance));
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>", contractorName));
  action.isVisibleWait(contractorJobStatusLink, 10000,"Contractor job status link in Job request page");
  let contractorJobStatusTextActual = action.getElementText(contractorJobStatusLink,"Contractor job status link in Job request page");
  chai.expect(contractorJobStatusTextActual).to.equal("Not eligible");
})

When(/^the booking is cancelled on behalf of "(.*)"$/, function (requesterName) {
  action.isVisibleWait(jobRequestPage.jobStatusLink, 10000,"Job status link in Job request page");
  action.clickElement(jobRequestPage.jobStatusLink,"Job status link in Job request page");
  action.isVisibleWait(jobRequestPage.jobStatusDropdown, 10000,"Job status dropdown in Job request page");
  action.selectTextFromDropdown(jobRequestPage.jobStatusDropdown, "Cancel","Job status dropdown in Job request page");
  action.isVisibleWait(jobRequestPage.jobCancelConfirmationPopupText, 10000,"Job cancel confirmation popup text in Job request page");
  action.isVisibleWait(jobRequestPage.cancelConfirmationYesButton, 10000,"Cancel confirmation yes button in Job request page");
  action.clickElement(jobRequestPage.cancelConfirmationYesButton,"Cancel confirmation yes button in Job request page");
  action.isVisibleWait(jobRequestPage.cancelReasonDropdown, 10000,"Cancel reason dropdown in Job request page");
  action.selectTextFromDropdown(jobRequestPage.cancelReasonDropdown, "Job request error (Date,Time, Duration, etc..)","Cancel reason dropdown in Job request page");
  action.isVisibleWait(jobRequestPage.cancelOnBehalfDropdown, 10000,"Cancel on behalf dropdown in Job request page");
  action.selectTextFromDropdown(jobRequestPage.cancelOnBehalfDropdown, requesterName,"Cancel on behalf dropdown in Job request page");
  action.isVisibleWait(jobRequestPage.submitButtonConfirmationPopup, 10000,"Submit button confirmation popup in Job request page");
  action.clickElement(jobRequestPage.submitButtonConfirmationPopup,"Submit button confirmation popup in Job request page");
  action.isVisibleWait(jobRequestPage.searchByJobIdTextBox, 10000,"Search by job ID text box in Job request page");
})

Then(/^interpreters "(.*)" who live between "(.*)" KM and "(.*)" KM are eligible for the job "(.*)"$/, function (contractorName, distanceFrom, distanceTo, expectedContractorStatus) {
  let contractorDistanceActualText = $(jobRequestPage.contractorDistanceLocator.replace("<dynamic>", contractorName));
  contractorDistanceActualText = action.getElementText(contractorDistanceActualText,"Contractor distance actual text in Job request page");
  let contractorDistanceKmValue = contractorDistanceActualText.split(" ")[0];
  let distanceIsBetweenValues = parseInt(contractorDistanceKmValue) >= parseInt(distanceFrom) && parseInt(contractorDistanceKmValue) <= parseInt(distanceTo);
  chai.expect(distanceIsBetweenValues).to.be.true;
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>", contractorName));
  action.isVisibleWait(contractorJobStatusLink, 10000,"Contractor Job status link in Job request page");
  let contractorJobStatusTextActual = action.getElementText(contractorJobStatusLink,"Contractor Job status link in Job request page");
  if (contractorJobStatusTextActual.includes(expectedContractorStatus)) {
    chai.expect(contractorJobStatusTextActual).to.equal(expectedContractorStatus);
  } else {
    chai.expect(contractorJobStatusTextActual).to.equal("- No status -");
  }
})

Then(/^interpreters "(.*)" who live within the "(.*)" KM are eligible for the job "(.*)"$/, function (contractorName, distance, expectedContractorStatus) {
  let contractorDistanceActualText = $(jobRequestPage.contractorDistanceLocator.replace("<dynamic>", contractorName));
  contractorDistanceActualText = action.getElementText(contractorDistanceActualText,"Contractor distance actual text in Job request page");
  let contractorDistanceKmValue = contractorDistanceActualText.split(" ")[0];
  let distanceIsWithinLimit = parseInt(contractorDistanceKmValue) <= parseInt(distance)
  chai.expect(distanceIsWithinLimit).to.be.true;
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>", contractorName));
  action.isVisibleWait(contractorJobStatusLink, 10000,"Contractor Job status link in Job request page");
  let contractorJobStatusTextActual = action.getElementText(contractorJobStatusLink,"Contractor Job status link in Job request page");
  if (contractorJobStatusTextActual.includes(expectedContractorStatus)) {
    chai.expect(contractorJobStatusTextActual).to.equal(expectedContractorStatus);
  } else {
    chai.expect(contractorJobStatusTextActual).to.equal("- No status -");
  }
})

When(/^Accept Metro Service is selected$/, function () {
  action.isVisibleWait(jobRequestPage.acceptMetroServiceCheckbox, 10000,"Accept metro service checkbox in Job request page");
  action.clickElement(jobRequestPage.acceptMetroServiceCheckbox,"Accept metro service checkbox in Job request page");
  let acceptMetroServiceCheckboxStatus = action.isSelectedWait(jobRequestPage.acceptMetroServiceCheckbox, 1000,"Accept metro service checkbox in Job request page");
  chai.expect(acceptMetroServiceCheckboxStatus).to.be.true;
})

When(/^the contractor "(.*)" above will not be eligible for the Prebooked job$/, function (contractorName) {
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>", contractorName));
  action.isVisibleWait(contractorJobStatusLink, 10000,"Contractor job status link in Job request page");
  browser.execute((el) => {
    const hoverEvent = new MouseEvent('mouseover', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(hoverEvent);
  }, contractorJobStatusLink);
  logger.info("Moved mouse to Contractor job status link in Job request page")
  let contractorBlockedTextExistStatus = action.isExistingWait(jobRequestPage.organisationCampusBlocksContractorText, 3000,"Organization campus blocks contractor text in Job request page");
  chai.expect(contractorBlockedTextExistStatus).to.be.true;
})

When(/^the contractor above "(.*)" status will be "(.*)" for the Job$/,function(contractorName,expectedContractorStatus){
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>",contractorName));
  action.isVisibleWait(contractorJobStatusLink,10000,"Contractor job status link in Job request page");
  let contractorJobStatusTextActual = action.getElementText(contractorJobStatusLink,"Contractor job status link in Job request page");
  if (contractorJobStatusTextActual.includes(expectedContractorStatus)) {
    chai.expect(contractorJobStatusTextActual).to.equal(expectedContractorStatus);
  } else {
    chai.expect(contractorJobStatusTextActual).to.equal("- No status -");
  }
})

Then(/^in the ‘Instructions for Interpreters’, the user sees the text "(.*)" as Label$/, function (expectedLabel) {
  action.isVisibleWait(jobRequestPage.instructionsForInterpreterLabelText, 10000,"Instructions for interpreter label text in Job request page");
  let instructionsLabelActual = action.getElementText(jobRequestPage.instructionsForInterpreterLabelText,"Instructions for interpreter label text in Job request page");
  chai.expect(instructionsLabelActual).to.equal(expectedLabel);
})

When(/^I handle job updated warning message by refreshing browser and change status "(.*)","(.*)","(.*)"$/, function (contractorNameOrID, original_jobStatus, new_jobStatus) {
  try {
    let refreshCount = 0;
    while (action.isVisibleWait(jobRequestPage.jobGotUpdatedWarningMessage, 10000,"Job got updated warning message in Job request page") && refreshCount < 10) {
      logger.info("Refreshing browser-" + refreshCount)
      browser.refresh()
      action.isVisibleWait(jobRequestPage.contractorSearchBoxJobAllocation, 20000,"Contractor search box job allocation in Job request page");
      action.enterValue(jobRequestPage.contractorSearchBoxJobAllocation, contractorNameOrID);
      action.pressKeys("Tab");
      let jobStatusElement = $('//div[@class="ContractorTable"]//a[text()="' + original_jobStatus + '"]')
      action.isVisibleWait(jobStatusElement, 30000,"Job status in Job request page")
      action.clickElement(jobStatusElement,"Job status in Job request page")
      action.isVisibleWait(jobDetailsPage.jobContractorStatusDropdown, 10000,"Job contractor status dropdown in Job request page")
      action.selectTextFromDropdown(jobDetailsPage.jobContractorStatusDropdown, new_jobStatus,"Job contractor status dropdown in Job request page")
      const confirmationWindow = $('//*[text()[contains(.,"Overlap Confirmation")]]')
      action.isVisibleWait(confirmationWindow, 5000,"Confirmation window in Job request page")
      if (confirmationWindow.isDisplayed()) {
        const confirmYes = $('//input[contains(@id,"wtActions_wt145")]')
        action.isClickableWait(confirmYes, 30000,"Confirm Yes in Job request page")
        action.clickElement(confirmYes,"Confirm Yes in Job request page")
      }
      refreshCount++
    }
  } catch (Err) {
    logger.info("Failed to handle job updated warning message-" + Err)
  }
})

When(/^I handle duplicate job updated warning message by refreshing browser and change contractor "(.*)" status "(.*)","(.*)"$/, function (contractor, original_jobStatus, new_jobStatus) {
  try {
    let refreshCount = 0;
    while (action.isVisibleWait(jobRequestPage.jobGotUpdatedWarningMessage, 10000,"Job got updated warning message in Job request page") && refreshCount < 10) {
      logger.info("Refreshing browser-" + refreshCount)
      browser.refresh()
      let originalJobStatusList = original_jobStatus.split(",");
      for (let i = 0; i < originalJobStatusList.length; i++) {
        let contractorStatusElement = $('//div[@class="ContractorTable"]//a[text()="' + contractor + '"]/parent::div/parent::div//child::a[text()="' + originalJobStatusList[i] + '"]')
        let statusVisible = action.isVisibleWait(contractorStatusElement, 10000,"Contractor status in Job request page");
        if (statusVisible) {
          action.clickElement(contractorStatusElement,"Contractor status in Job request page");
          break;
        }
      }
      action.isVisibleWait(jobDetailsPage.jobContractorStatusDropdown, 10000,"Job contractor status dropdown in Job request page")
      action.selectTextFromDropdown(jobDetailsPage.jobContractorStatusDropdown, new_jobStatus,"Job contractor status dropdown in Job request page")
      const confirmationWindow = $('//*[text()[contains(.,"Overlap Confirmation")]]')
      action.isVisibleWait(confirmationWindow, 5000,"Confirmation window in Job request page")
      if (confirmationWindow.isDisplayed()) {
        const confirmYes = $('//input[contains(@id,"wtActions_wt145")]')
        action.isClickableWait(confirmYes, 30000,"Confirm yes in Job request page")
        action.clickElement(confirmYes,"Confirm yes in Job request page")
      }
      refreshCount++
    }
  } catch (Err) {
    logger.info("Failed to handle job updated warning message-" + Err)
  }
})

When(/^I select campus pin "(.*)" from Campus PIN dropdown$/, function (campusPin) {
  action.isVisibleWait(jobRequestPage.campusPinDropDown, 10000,"Campus pin dropdown in Job request page");
  action.selectTextFromDropdown(jobRequestPage.campusPinDropDown, campusPin,"Campus pin dropdown in Job request page");
})

When(/^I enter short notice schedule date$/, function () {
  let tempDate = datetime.getShortNoticeDate()
  action.isVisibleWait(jobRequestPage.dateInput, 20000,"Date text box in Job request page");
  action.enterValue(jobRequestPage.dateInput, tempDate,"Date text box in Job request page");
  browser.pause(4000)
})

When(/they have selected a Time "(.*)" from the time picker$/, function (time) {
  action.isVisibleWait(jobRequestPage.timePickerTextBox, 10000,"Time picker text box in Job request page");
  action.isEnabledWait(jobRequestPage.timePickerTextBox, 10000,"Time picker text box in Job request page");
  action.clickElement(jobRequestPage.timePickerTextBox);
  browser.pause(3000);
  let timePickerListOptionElements = $$(jobRequestPage.timePickerListOptionElements.replace("<dynamic>", time)).length;
  for (let i = 1; i <= timePickerListOptionElements; i++) {
    let timePickerListOption = $(jobRequestPage.timePickerListOptionLocator.replace("<dynamic1>", time).replace("<dynamic2>", i.toString()));
    if (action.isVisibleWait(timePickerListOption, 3000,"Time picker list option in Job request page")) {
      action.isClickableWait(timePickerListOption, 10000,"Time picker list option in Job request page");
      action.clickElement(timePickerListOption,"Time picker list option in Job request page");
      action.isVisibleWait(jobRequestPage.campusTimeText, 10000,"Campus time text in Job request page");
      break;
    }
  }
})

Then(/the Time "(.*)" will be selected and the time picker will close$/, function (time) {
  browser.waitUntil(() => action.getElementAttribute(jobRequestPage.timePickerTextBox, "origvalue","Time picker text box in Job request page") === time, {
    timeout: 10000,
    timeoutMsg: 'time is not selected after 10sec',
    interval: 500
  })
  let timeValueSelected = action.getElementAttribute(jobRequestPage.timePickerTextBox, "origvalue","Time picker text box in Job request page");
  chai.expect(timeValueSelected).to.equal(time);
  let timePickerListDisplayStatus = action.isVisibleWait(jobRequestPage.timePickerList, 1000,"Time picker list in Job request page");
  chai.expect(timePickerListDisplayStatus).to.be.false;
})

When(/^I enter long notice schedule date$/, function () {
  let tempDate = datetime.getLongNoticeDate()
  action.isVisibleWait(jobRequestPage.dateInput, 20000,"Date text box in Job request page");
  action.enterValue(jobRequestPage.dateInput, tempDate,"Date text box in Job request page");
  action.waitUntilLoadingIconDisappears();
})

When(/^I click continue on Job continue confirmation popup$/, function () {
  let confirmationPopupElementsCount = jobRequestPage.jobContinueConfirmationPopupTextElements.length;
  for (let index = 0; index < confirmationPopupElementsCount; index++) {
    let popupElements = jobRequestPage.jobContinueConfirmationPopupTextElements;
    action.isVisibleWait(popupElements[index], 10000);
    let popupVisibleStatus = action.isVisibleWait(popupElements[index], 10000,"Popup elements in Job request page");
    if (popupVisibleStatus === true) {
      action.clickElement(jobRequestPage.continueButtonElements[index],"Continue button elements in Job request page");
    }
  }
})

When(/^I enter CF_OnSite "(.*)"$/, function(CF_OnSite){
  action.isVisibleWait(jobRequestPage.cfOnSiteTextBox,10000,"CF on site text box in Job request page")
  action.enterValue(jobRequestPage.cfOnSiteTextBox,CF_OnSite,"CF on site text box in Job request page")
})

Then(/^the Job Request screen will display$/, function () {
  let pageTitleActual = action.getPageTitle();
  chai.expect(pageTitleActual).to.includes("Booking Request");
})

Then(/^the CampusPIN "(.*)" should be prefilled in the input box$/, function (campusPin) {
  action.isVisibleWait(jobRequestPage.campusPinInput, 20000,"Campus pin text box in Job request page");
  let campusPinPrefilledValueActual = action.getElementValue(jobRequestPage.campusPinInput,"Campus pin text box in Job request page");
  chai.expect(campusPinPrefilledValueActual).to.equal(campusPin);
})

Then(/^RequesterMode should be set to Phone$/, function () {
  let requesterModePhoneActiveDisplayStatus = action.isVisibleWait(jobRequestPage.requesterModePhoneActive, 20000,"Requester mode phone active in Job request page");
  chai.expect(requesterModePhoneActiveDisplayStatus).to.be.true;
})

Then(/^the rest of the form should display as if the user has typed a Campus PIN and pressed enter "(.*)"$/, function (jobRequesterDetails) {
  let jobRequesterDetailsList = jobRequesterDetails.split(",");
  let jobRequesterDetailsPageHtml = action.getElementHTML(jobRequestPage.jobRequesterDetailsForm,"Job requester detail form in Job request page");
  for (let i = 0; i < jobRequesterDetailsList.length; i++) {
    chai.expect(jobRequesterDetailsPageHtml).to.includes(jobRequesterDetailsList[i]);
  }
})

Then(/^the error message No Campus PIN found is displayed$/, function () {
  let noCampusPinFoundMessageDisplayStatus = action.isVisibleWait(jobRequestPage.noCampusPinFoundMessage, 20000,"No campus pin found message in Job request page");
  chai.expect(noCampusPinFoundMessageDisplayStatus).to.be.true;
})

Then(/^the error message The Campus is Inactive is displayed$/, function () {
  let campusInactiveMessageDisplayStatus = action.isVisibleWait(jobRequestPage.campusInactiveMessage, 20000,"Campus inactive message in Job request page");
  chai.expect(campusInactiveMessageDisplayStatus).to.be.true;
})

Then(/^the CampusPIN "(.*)" should not be prefilled in the input box for CBO$/, function (campusPin) {
  let campusPinDropdownOption = $(jobRequestPage.campusPinDropDownOption.replace("<dynamic>",campusPin));
  let campusPinDropdownOptionSelectedStatus = action.isSelectedWait(campusPinDropdownOption, 1000,"Campus pin dropdown option in Job request page");
  chai.expect(campusPinDropdownOptionSelectedStatus).to.be.false;
})

Then(/^the page still stays as if no campus is selected for CBO$/, function () {
  let selectedCampusLocationValueExistStatus = action.isExistingWait(jobRequestPage.locationAddressValueField, 1000,"Location address value in Job request page");
  chai.expect(selectedCampusLocationValueExistStatus).to.be.false;
})

Then(/^the CampusPIN "(.*)" is prefilled in the input box as it has only 1 campus pin for CBO$/, function (campusPin) {
  let campusPinDropdownOption = $(jobRequestPage.campusPinDropDownOption.replace("<dynamic>",campusPin));
  let campusPinDropdownOptionSelectedStatus = action.isSelectedWait(campusPinDropdownOption, 1000,"Campus pin dropdown in Job request page");
  chai.expect(campusPinDropdownOptionSelectedStatus).to.be.true;
})

When(/^the Additional information section is shown$/, function () {
  let additionalInformationSectionDisplayStatus = action.isVisibleWait(jobRequestPage.additionalInformationSection, 10000,"Additional Information Section in Job Request Page");
  chai.expect(additionalInformationSectionDisplayStatus).to.be.true;
})

When(/^any Audible in ODTI custom fields are not shown$/, function () {
  let customFieldLabel = $(jobRequestPage.customFieldDynamicLabel.replace("<dynamic>",GlobalData.CUSTOMISED_FIELD_NAME));
  let audibleInOdtiCustomFieldDisplayStatus = action.isVisibleWait(customFieldLabel, 1000,"Audible in ODTI custom field "+GlobalData.CUSTOMISED_FIELD_NAME+" in Job Request Page");
  chai.expect(audibleInOdtiCustomFieldDisplayStatus).to.be.false;
})

When(/^other custom fields "(.*)" are still visible or editable$/, function (customFields) {
  let customFieldsList = customFields.split(",");
  for (let i = 0; i < customFieldsList.length; i++) {
    let customFieldLabel = $(jobRequestPage.customFieldDynamicLabel.replace("<dynamic>", customFieldsList[i]));
    let audibleInOdtiCustomFieldDisplayStatus = action.isVisibleWait(customFieldLabel, 10000,"Custom field "+customFieldsList[i]+" in Job Request Page");
    chai.expect(audibleInOdtiCustomFieldDisplayStatus).to.be.true;
  }
})

When(/^the custom field for which the option is Audible in ODTI is unselected is displayed$/, function () {
  let customFieldLabel = $(jobRequestPage.customFieldDynamicLabel.replace("<dynamic>",GlobalData.CUSTOMISED_FIELD_NAME));
  let audibleInOdtiCustomFieldDisplayStatus = action.isVisibleWait(customFieldLabel, 1000,"Audible in ODTI custom field "+GlobalData.CUSTOMISED_FIELD_NAME+" in Job Request Page");
  chai.expect(audibleInOdtiCustomFieldDisplayStatus).to.be.true;
})

Then(/^the Find Contractor popup appears$/, function () {
  let findContractorPopupDisplayStatus = action.isVisibleWait(jobRequestPage.findContractorPopup,10000,"Find Contractor Popup in Job Request Page");
  chai.expect(findContractorPopupDisplayStatus).to.be.true;
})

Then(/^the names of the available contractors are still hidden$/, function () {
  let findContractorTableNameHeaderDisplayStatus = action.isVisibleWait(jobRequestPage.findContractorTableNameHeader,0,"Find Contractor Table Name header in Job Request Page");
  chai.expect(findContractorTableNameHeaderDisplayStatus).to.be.false;
})