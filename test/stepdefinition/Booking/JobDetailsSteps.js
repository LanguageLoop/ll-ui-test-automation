When(/^I click on Duplicate button$/, function(){
    browser.pause(2000)
    action.isVisibleWait(jobDetailsPage.duplicateButton,30000);
    action.clickElement(jobDetailsPage.duplicateButton);
    action.waitUntilLoadingIconDisappears();
    action.isVisibleWait(jobRequestPage.dateInput,30000);
    //browser.pause(2000)
    browser.waitUntil(
        () => jobRequestPage.dateInput.isEnabled(),{timeout:10000, timeoutMsg:'Input is not enabled in 10s',interval:500}
    )
})

When(/^I click on Edit button$/, function(){
    browser.pause(5000)
    jobDetailsPage.editButton.waitForClickable({timeout:10000},{interval:1000})
    action.clickElement(jobDetailsPage.editButton)
    jobRequestPage.saveAndProceedToSummaryButton.waitUntil(()=>{
        return jobRequestPage.saveAndProceedToSummaryButton.isClickable()}, {
         timeout: 20000, timeoutMsg: 'edit page not loaded within 20s', interval:1000
     
       })
})

When(/^I click on Cancel button$/, function(){
    browser.pause(2000)
    browser.refresh()
    action.clickElement(jobDetailsPage.cancelButton)
})

When(/^I click confirm cancel yes button$/, function(){
    browser.pause(2000)
    try{
        action.isVisibleWait(jobDetailsPage.confirmCancelYesButton,10000)
    jobDetailsPage.confirmCancelYesButton.waitForClickable({timeout:10000})
    action.clickElement(jobDetailsPage.confirmCancelYesButton)
    }
    catch(Err){
    }
})

When(/^I click yes to confirm late rejection$/, function(){
    browser.pause(2000)
    action.clickElement(jobDetailsPage.lateRejectionConfirmYesButton)
})

When(/^I click yes to confirm no show$/, function(){
    browser.pause(2000)
    action.clickElement(jobDetailsPage.interpreterNoShowConfirmYesButton)
})

When(/^I select "(.*)" cancel reason$/, function(reason){
    browser.pause(2000)
    action.selectTextFromDropdown(jobDetailsPage.cancelReasonDropdown, reason)
})

When(/^I select "(.*)" on behalf$/, function(onbehalf){
    browser.pause(2000)
    action.selectTextFromDropdown(jobDetailsPage.cancelOnBehalfDropdown, onbehalf)
})

When(/^I submit cancel job confirmation$/, function(){
    jobDetailsPage.cancelSubmitButton.waitForClickable({timeout:10000},{interval:1000})
    action.clickElement(jobDetailsPage.cancelSubmitButton)
    browser.waitUntil(()=>browser.getTitle()==='Bookings',20000,'Cancel taking more time',1000)
})

When(/^I confirm yes to cancellation fee$/, function(){
    browser.pause(5000)
    action.clickElement(jobDetailsPage.jobCancellationFeeConfirmYesButton)
    try{
        jobDetailsPage.jobCancellationFeeConfirmYesButton.waitForExist({timeout:3000})
        action.clickElement(jobDetailsPage.jobCancellationFeeConfirmYesButton)
      }
      catch(Err)
      {
      }
})

When(/^I search for contractor "(.*)"$/, function(contractor){
    browser.pause(2000)
    action.enterValueAndPressReturn(jobDetailsPage.searchContractorInput,contractor)
})

When(/^I get the first contractor on list$/, function(){
    browser.pause(2000)
    GlobalData.CONTRACTOR_NAME= $('//div[contains(@class,"ContractorName")]//a[contains(@id,"ContractorList")]').getText()
})

When(/^I search for first contractor on list$/, function(){
    browser.pause(2000)
    action.enterValueAndPressReturn(jobDetailsPage.searchContractorInput,GlobalData.CONTRACTOR_NAME)
})

When(/^I refresh the page$/, function(){
    browser.pause(5000)
    browser.refresh()
})

When(/^I set the contractor job status from "(.*)" to "(.*)"$/, function(original_jobstatus,new_jobstatus){
    browser.pause(2000)
    action.isVisibleWait($('//div[@class="ContractorTable"]//a[text()="'+original_jobstatus+'"]'),30000)
    action.elementExists(jobDetailsPage.contractorListTable)
    action.clickElement($('//div[@class="ContractorTable"]//a[text()="'+original_jobstatus+'"]'))
    browser.pause(5000)
    //action.clickElement(jobDetailsPage.autoNotificationLink)
    action.selectTextFromDropdown(jobDetailsPage.jobContractorStatusDropdown,new_jobstatus)
    // browser.pause(20000)
    /*var jobStatus = $('//*[contains(@id,"wtcontJobStatusVisible")]')
    var jobStatuses =['Allocated','Voicemail Left','Refused Job','Unavailable']
    browser.waitUntil(()=> {
        return jobStatuses.filter(jobstat=>jobstat===jobStatus.getText()) },{timeout:15000,timeoutMsg:'jobStatus not changed in 15s',interval:2000})*/
    const confirmationWindow =$('//*[text()[contains(.,"Overlap Confirmation")]]')
    action.isVisibleWait(confirmationWindow,30000)
    if(confirmationWindow.isDisplayed())
    {
        const confirmYes =$('//input[contains(@id,"wtActions_wt145")]')
        action.isClickableWait(confirmYes,30000)
        action.clickElement(confirmYes)
    }
})

When(/^I click on accept metro service checkbox$/, function(){
    action.clickElement(jobDetailsPage.acceptMetroServiceCheckBox)
})

Then(/^I verify the assignment type "(.*)" is updated$/,function(assignmenttype){
    chai.expect(jobDetailsPage.assignmentTypeLabel.getText() == assignmenttype).to.be.true
})

Then(/^I verify the NAATI "(.*)" is updated$/,function(naati){
    chai.expect(jobDetailsPage.NAATILabel.getText() == naati).to.be.true
})

Then(/^I verify the gender preference "(.*)" is updated$/,function(gender){
    chai.expect(jobDetailsPage.genderPreferneceLabel.getText() == gender).to.be.true
})

Then(/^I confirm the job is cancelled without fee$/,function(){
    chai.expect(action.elementExists(jobDetailsPage.jobCancelledWithoutFeeMessage)).to.be.true
})

Then(/^I confirm the job is cancelled with fee$/,function(){
    chai.expect(action.elementExists(jobDetailsPage.jobCancelledWithFeeMessage)).to.be.true
})

Then(/^I confirm the job status "(.*)"$/, function(jobstatus){
    chai.expect(action.elementExists($('//div[@class="ContractorTable"]//a[text()="'+jobstatus+'"]'))).to.be.true
})

When(/^I change the contractor "(.*)" job status from "(.*)" to "(.*)"$/, function (contractor, original_jobStatus, new_jobStatus) {
    let originalJobStatusList = original_jobStatus.split(",");
    for (let i = 0; i < originalJobStatusList.length; i++) {
        let contractorStatusElement = $('//div[@class="ContractorTable"]//a[text()="'+contractor+'"]/parent::div/parent::div//child::a[text()="' + originalJobStatusList[i] + '"]')
        let statusVisible = action.isVisibleWait(contractorStatusElement, 10000);
        if (statusVisible) {
            action.clickElement(contractorStatusElement);
            break;
        }
    }
    action.isVisibleWait(jobDetailsPage.jobContractorStatusDropdown, 10000);
    action.selectTextFromDropdown(jobDetailsPage.jobContractorStatusDropdown, new_jobStatus);
    const confirmationWindow = $('//*[text()[contains(.,"Overlap Confirmation")]]');
    action.isVisibleWait(confirmationWindow, 30000);
    if (confirmationWindow.isDisplayed()) {
        const confirmYes = $('//input[contains(@id,"wtActions_wt145")]');
        action.isClickableWait(confirmYes, 30000);
        action.clickElement(confirmYes);
    }
})