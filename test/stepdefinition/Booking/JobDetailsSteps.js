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
        let contractorStatusElement = $('//div[@class="ContractorTable"]//a[contains(text(),"'+contractor+'")]/parent::div/parent::div//child::a[text()="' + originalJobStatusList[i] + '"]')
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

Then(/^this will show 1 contractor that was connected to the call$/, function () {
    let jobContractorLink = $(jobDetailsPage.jobAllocationDynamicValueLinkLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "1"));
    let jobContractorDisplayStatus = action.isVisibleWait(jobContractorLink, 10000);
    chai.expect(jobContractorDisplayStatus).to.be.true;
    let jobAllocationTableRowsCount = jobDetailsPage.jobAllocationTableBodyRowsCount;
    chai.expect(jobAllocationTableRowsCount).to.equal(1);
})

Then(/^they will see the Campus PIN hyperlinked$/, function () {
    let campusPinHyperlinkDisplayStatus = action.isVisibleWait(jobDetailsPage.campusPinHyperlink,10000);
    chai.expect(campusPinHyperlinkDisplayStatus).to.be.true;
})

Then(/^they click the Campus PIN$/, function () {
    action.clickElement(jobDetailsPage.campusPinHyperlink);
})

Then(/^they will see the Contract Name hyperlinked$/, function () {
    let contractNameHyperlinkDisplayStatus = action.isVisibleWait(jobDetailsPage.contractNameHyperlink,10000);
    chai.expect(contractNameHyperlinkDisplayStatus).to.be.true;
})

Then(/^they click the Contract Name$/, function () {
    action.clickElement(jobDetailsPage.contractNameHyperlink);
})

When(/^the user is viewing the allocated interpreter section$/, function () {
    let jobAllocationSectionDisplayStatus = action.isVisibleWait(jobDetailsPage.jobAllocationSection,10000);
    chai.expect(jobAllocationSectionDisplayStatus).to.be.true;
})

Then(/^they click on the Contractor Name$/, function () {
    let contractNameHyperLink = $(jobDetailsPage.jobAllocationDynamicValueLinkLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "1"));
    action.isVisibleWait(contractNameHyperLink,10000);
    action.clickElement(contractNameHyperLink);
})

Then(/^they will see a heading with the Job ID number and the Campus Name as per existing functionality$/, function () {
    let jobIDAndCampusNameValueInJobDetails = action.getElementText(jobDetailsPage.jobIdLabel);
    chai.expect(jobIDAndCampusNameValueInJobDetails).to.includes(GlobalData.ODTI_SERVICE_CHARGE_JOB_ID_IN_TABLE);
    chai.expect(jobIDAndCampusNameValueInJobDetails).to.includes(GlobalData.ODTI_CAMPUS_NAME);
})

Then(/^they will see the following details and information in the Job Info section: "(.*)", "(.*)"$/, function (sectionName, labels) {
    let labelsList = labels.split(",");
    for (let index = 0; index < labelsList.length; index++) {
        let jobInfoSectionLabelElement = $(jobDetailsPage.jobInfoSectionLabelsDynamicLocator.replace("<dynamicSectionName>", sectionName).replace("<dynamicLabel>", labelsList[index]));
        let jobInfoLabelDisplayStatus = action.isVisibleWait(jobInfoSectionLabelElement, 10000);
        chai.expect(jobInfoLabelDisplayStatus).to.be.true;
    }
})
Then(/^they will see the Allocated Interpreter section under the Job Info section as per existing functionality for Job Bookings$/, function () {
    let jobAllocationSectionUnderJobInfoDisplayStatus = action.isVisibleWait(jobDetailsPage.jobAllocationSectionUnderJobInfoSection,10000);
    chai.expect(jobAllocationSectionUnderJobInfoDisplayStatus).to.be.true;
})

Then(/^the job allocation table will show the following: "(.*)"$/, function (expectedHeaders) {
    let expectedHeadersList = expectedHeaders.split(",")
    action.isVisibleWait(jobDetailsPage.jobAllocationTableHeaders, 10000);
    let jobAllocationTableHeadersActual = action.getElementText(jobDetailsPage.jobAllocationTableHeaders);
    for (let index = 0; index < expectedHeadersList.length; index++) {
        chai.expect(jobAllocationTableHeadersActual).to.includes(expectedHeadersList[index]);
    }
})

Then(/^the job allocation table will not show the following: "(.*)"$/, function (expectedHeaders) {
    let expectedHeadersList = expectedHeaders.split(",")
    action.isVisibleWait(jobDetailsPage.jobAllocationTableHeaders, 10000);
    let jobAllocationTableHeadersActual = action.getElementText(jobDetailsPage.jobAllocationTableHeaders);
    for (let index = 0; index < expectedHeadersList.length; index++) {
        chai.expect(jobAllocationTableHeadersActual).to.not.includes(expectedHeadersList[index]);
    }
})

Then(/^the Contractor’s name will be hyperlinked$/, function () {
    let contractNameHyperLink = $(jobDetailsPage.jobAllocationDynamicValueLinkLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "1"));
    let contractNameHyperLinkDisplayStatus = action.isVisibleWait(contractNameHyperLink,10000);
    chai.expect(contractNameHyperLinkDisplayStatus).to.be.true;
})