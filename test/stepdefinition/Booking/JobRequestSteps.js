When(/^I select "(.*)" from the requester name dropdown$/,   function(listitem){
  action.isVisibleWait(jobRequestPage.requesterNameDropdown,20000);
  action.enterValueAndPressReturn(jobRequestPage.requesterNameDropdown,listitem);
  browser.pause(5000)
})

When(/^I select language "(.*)"$/,   function(listitem){
  browser.pause(2000)
  action.isVisibleWait(jobRequestPage.languageDropdown,30000);
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
  action.isVisibleWait(jobRequestPage.timeInput,20000)
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
  action.isVisibleWait(jobRequestPage.assignmentTypeDropdown,20000);
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
  action.isVisibleWait(jobRequestPage.nextButton,20000);
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
    let continueButtonVisibleStatus = action.isVisibleWait(jobRequestPage.continueButton,5000);
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
  action.isVisibleWait(jobRequestPage.editJobConfirmationYesButton,10000)
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
  action.isVisibleWait(jobRequestPage.successMessageText,90000);
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
  let requestJobTypeOptionElementClass = action.getElementAttribute(requestJobTypeOption, "class");
  let counter = 0;
  while (requestJobTypeOptionElementClass.includes("active") === false && counter < 3) {
    action.clickElement(requestJobTypeOption);
    browser.pause(3000);
    requestJobTypeOptionElementClass = action.getElementAttribute(requestJobTypeOption, "class");
    counter++
  }
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
  if (contractorJobStatusTextActual.includes(expectedContractorStatus)) {
    chai.expect(contractorJobStatusTextActual).to.equal(expectedContractorStatus);
  } else {
    chai.expect(contractorJobStatusTextActual).to.equal("- No status -");
  }
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
  if (contractorJobStatusTextActual.includes(expectedContractorStatus)) {
    chai.expect(contractorJobStatusTextActual).to.equal(expectedContractorStatus);
  } else {
    chai.expect(contractorJobStatusTextActual).to.equal("- No status -");
  }
})

When(/^Accept Metro Service is selected$/, function () {
  action.isVisibleWait(jobRequestPage.acceptMetroServiceCheckbox, 10000);
  action.clickElement(jobRequestPage.acceptMetroServiceCheckbox);
  let acceptMetroServiceCheckboxStatus = action.isSelectedWait(jobRequestPage.acceptMetroServiceCheckbox, 1000);
  chai.expect(acceptMetroServiceCheckboxStatus).to.be.true;
})

When(/^the contractor "(.*)" above will not be eligible for the Prebooked job$/, function (contractorName) {
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>", contractorName));
  action.isVisibleWait(contractorJobStatusLink, 10000);
  browser.execute((el) => {
    const hoverEvent = new MouseEvent('mouseover', {
      bubbles: true,
      cancelable: true,
      view: window
    });
    el.dispatchEvent(hoverEvent);
  }, contractorJobStatusLink);
  let contractorBlockedTextExistStatus = action.isExistingWait(jobRequestPage.organisationCampusBlocksContractorText, 3000);
  chai.expect(contractorBlockedTextExistStatus).to.be.true;
})

When(/^the contractor above "(.*)" status will be "(.*)" for the Job$/,function(contractorName,expectedContractorStatus){
  let contractorJobStatusLink = $(jobRequestPage.contractorJobStatusLinkLocator.replace("<dynamic>",contractorName));
  action.isVisibleWait(contractorJobStatusLink,10000);
  let contractorJobStatusTextActual = action.getElementText(contractorJobStatusLink);
  if (contractorJobStatusTextActual.includes(expectedContractorStatus)) {
    chai.expect(contractorJobStatusTextActual).to.equal(expectedContractorStatus);
  } else {
    chai.expect(contractorJobStatusTextActual).to.equal("- No status -");
  }
})

Then(/^in the ‘Instructions for Interpreters’, the user sees the text "(.*)" as Label$/, function (expectedLabel) {
  action.isVisibleWait(jobRequestPage.instructionsForInterpreterLabelText, 10000);
  let instructionsLabelActual = action.getElementText(jobRequestPage.instructionsForInterpreterLabelText);
  chai.expect(instructionsLabelActual).to.equal(expectedLabel);
})

When(/^I handle job updated warning message by refreshing browser and change status "(.*)","(.*)","(.*)"$/, function (contractorNameOrID, original_jobStatus, new_jobStatus) {
  try {
    let refreshCount = 0;
    while (action.isVisibleWait(jobRequestPage.jobGotUpdatedWarningMessage, 10000) && refreshCount < 10) {
      console.log("Refreshing browser-" + refreshCount)
      browser.refresh()
      action.isVisibleWait(jobRequestPage.contractorSearchBoxJobAllocation, 20000);
      action.enterValue(jobRequestPage.contractorSearchBoxJobAllocation, contractorNameOrID);
      action.pressKeys("Tab");
      let jobStatusElement = $('//div[@class="ContractorTable"]//a[text()="' + original_jobStatus + '"]')
      action.isVisibleWait(jobStatusElement, 30000)
      action.clickElement(jobStatusElement)
      action.isVisibleWait(jobDetailsPage.jobContractorStatusDropdown, 10000)
      action.selectTextFromDropdown(jobDetailsPage.jobContractorStatusDropdown, new_jobStatus)
      const confirmationWindow = $('//*[text()[contains(.,"Overlap Confirmation")]]')
      action.isVisibleWait(confirmationWindow, 5000)
      if (confirmationWindow.isDisplayed()) {
        const confirmYes = $('//input[contains(@id,"wtActions_wt145")]')
        action.isClickableWait(confirmYes, 30000)
        action.clickElement(confirmYes)
      }
      refreshCount++
    }
  } catch (Err) {
    console.log("Failed to handle job updated warning message-" + Err)
  }
})

When(/^I handle duplicate job updated warning message by refreshing browser and change contractor "(.*)" status "(.*)","(.*)"$/, function (contractor, original_jobStatus, new_jobStatus) {
  try {
    let refreshCount = 0;
    while (action.isVisibleWait(jobRequestPage.jobGotUpdatedWarningMessage, 10000) && refreshCount < 10) {
      console.log("Refreshing browser-" + refreshCount)
      browser.refresh()
      let originalJobStatusList = original_jobStatus.split(",");
      for (let i = 0; i < originalJobStatusList.length; i++) {
        let contractorStatusElement = $('//div[@class="ContractorTable"]//a[text()="' + contractor + '"]/parent::div/parent::div//child::a[text()="' + originalJobStatusList[i] + '"]')
        let statusVisible = action.isVisibleWait(contractorStatusElement, 10000);
        if (statusVisible) {
          action.clickElement(contractorStatusElement);
          break;
        }
      }
      action.isVisibleWait(jobDetailsPage.jobContractorStatusDropdown, 10000)
      action.selectTextFromDropdown(jobDetailsPage.jobContractorStatusDropdown, new_jobStatus)
      const confirmationWindow = $('//*[text()[contains(.,"Overlap Confirmation")]]')
      action.isVisibleWait(confirmationWindow, 5000)
      if (confirmationWindow.isDisplayed()) {
        const confirmYes = $('//input[contains(@id,"wtActions_wt145")]')
        action.isClickableWait(confirmYes, 30000)
        action.clickElement(confirmYes)
      }
      refreshCount++
    }
  } catch (Err) {
    console.log("Failed to handle job updated warning message-" + Err)
  }
})

When(/^I select campus pin "(.*)" from Campus PIN dropdown$/, function (campusPin) {
  action.isVisibleWait(jobRequestPage.campusPinDropDown, 10000);
  action.selectTextFromDropdown(jobRequestPage.campusPinDropDown, campusPin);
})

When(/^I enter short notice schedule date$/, function () {
  let tempDate = datetime.getShortNoticeDate()
  action.isVisibleWait(jobRequestPage.dateInput, 20000);
  action.enterValue(jobRequestPage.dateInput, tempDate);
  browser.pause(4000)
})

When(/they have selected a Time "(.*)" from the time picker$/, function (time) {
  action.isVisibleWait(jobRequestPage.timePickerTextBox, 10000);
  action.isEnabledWait(jobRequestPage.timePickerTextBox, 10000);
  action.clickElement(jobRequestPage.timePickerTextBox);
  browser.pause(3000);
  let timePickerListOptionElements = $$(jobRequestPage.timePickerListOptionElements.replace("<dynamic>", time)).length;
  for (let i = 1; i <= timePickerListOptionElements; i++) {
    let timePickerListOption = $(jobRequestPage.timePickerListOptionLocator.replace("<dynamic1>", time).replace("<dynamic2>", i.toString()));
    if (action.isVisibleWait(timePickerListOption, 3000)) {
      action.isClickableWait(timePickerListOption, 10000);
      action.clickElement(timePickerListOption);
      action.isVisibleWait(jobRequestPage.campusTimeText, 10000);
      break;
    }
  }
})

Then(/the Time "(.*)" will be selected and the time picker will close$/, function (time) {
  browser.waitUntil(() => action.getElementAttribute(jobRequestPage.timePickerTextBox, "origvalue") === time, {
    timeout: 10000,
    timeoutMsg: 'time is not selected after 10sec',
    interval: 500
  })
  let timeValueSelected = action.getElementAttribute(jobRequestPage.timePickerTextBox, "origvalue");
  chai.expect(timeValueSelected).to.equal(time);
  let timePickerListDisplayStatus = action.isVisibleWait(jobRequestPage.timePickerList, 1000);
  chai.expect(timePickerListDisplayStatus).to.be.false;
})

When(/^I enter long notice schedule date$/, function () {
  let tempDate = datetime.getLongNoticeDate()
  action.isVisibleWait(jobRequestPage.dateInput, 20000);
  action.enterValue(jobRequestPage.dateInput, tempDate);
  action.waitUntilLoadingIconDisappears();
})

When(/^I click continue on Job continue confirmation popup$/, function () {
  let confirmationPopupElementsCount = jobRequestPage.jobContinueConfirmationPopupTextElements.length;
  for (let index = 0; index < confirmationPopupElementsCount; index++) {
    let popupElements = jobRequestPage.jobContinueConfirmationPopupTextElements;
    action.isVisibleWait(popupElements[index], 10000);
    let popupVisibleStatus = action.isVisibleWait(popupElements[index], 10000);
    if (popupVisibleStatus === true) {
      action.clickElement(jobRequestPage.continueButtonElements[index]);
    }
  }
})

When(/^I enter CF_OnSite "(.*)"$/, function(CF_OnSite){
  action.isVisibleWait(jobRequestPage.cfOnSiteTextBox,10000)
  action.enterValue(jobRequestPage.cfOnSiteTextBox,CF_OnSite)
})

Then(/^the Job Request screen will display$/, function () {
  let pageTitleActual = action.getPageTitle();
  chai.expect(pageTitleActual).to.includes("Booking Request");
})

Then(/^the CampusPIN "(.*)" should be prefilled in the input box$/, function (campusPin) {
  action.isVisibleWait(jobRequestPage.campusPinInput, 20000);
  let campusPinPrefilledValueActual = action.getElementValue(jobRequestPage.campusPinInput);
  chai.expect(campusPinPrefilledValueActual).to.equal(campusPin);
})

Then(/^RequesterMode should be set to Phone$/, function () {
  let requesterModePhoneActiveDisplayStatus = action.isVisibleWait(jobRequestPage.requesterModePhoneActive, 20000);
  chai.expect(requesterModePhoneActiveDisplayStatus).to.be.true;
})

Then(/^the rest of the form should display as if the user has typed a Campus PIN and pressed enter "(.*)"$/, function (jobRequesterDetails) {
  let jobRequesterDetailsList = jobRequesterDetails.split(",");
  let jobRequesterDetailsPageHtml = action.getElementHTML(jobRequestPage.jobRequesterDetailsForm);
  for (let i = 0; i < jobRequesterDetailsList.length; i++) {
    chai.expect(jobRequesterDetailsPageHtml).to.includes(jobRequesterDetailsList[i]);
  }
})

Then(/^the error message No Campus PIN found is displayed$/, function () {
  let noCampusPinFoundMessageDisplayStatus = action.isVisibleWait(jobRequestPage.noCampusPinFoundMessage, 20000);
  chai.expect(noCampusPinFoundMessageDisplayStatus).to.be.true;
})