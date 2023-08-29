When(/^I click on Duplicate button$/, function(){
    browser.pause(2000)
    action.isVisibleWait(jobDetailsPage.duplicateButton,30000, "Duplicate button in Job Details page");
    action.clickElement(jobDetailsPage.duplicateButton,"Duplicate button in Job Details page");
    action.waitUntilLoadingIconDisappears();
    action.isVisibleWait(jobRequestPage.dateInput,30000,"Date text box in Job Details page");
    //browser.pause(2000)
    browser.waitUntil(
        () => jobRequestPage.dateInput.isEnabled(),{timeout:10000, timeoutMsg:'Input is not enabled in 10s',interval:500}
    )
})

When(/^I click on Edit button$/, function(){
    browser.pause(5000)
    jobDetailsPage.editButton.waitForClickable({timeout:10000},{interval:1000})
    action.clickElement(jobDetailsPage.editButton,"Edit button in Job Details page")
    jobRequestPage.saveAndProceedToSummaryButton.waitUntil(()=>{
        return jobRequestPage.saveAndProceedToSummaryButton.isClickable()}, {
         timeout: 20000, timeoutMsg: 'edit page not loaded within 20s', interval:1000
     
       })
})

When(/^I click on Cancel button$/, function(){
    browser.pause(2000)
    browser.refresh()
    action.clickElement(jobDetailsPage.cancelButton,"Cancel button in Job Details page")
})

When(/^I click confirm cancel yes button$/, function(){
    browser.pause(2000)
    try{
        action.isVisibleWait(jobDetailsPage.confirmCancelYesButton,10000,"Confirm Cancel Yes button in Job Details page")
    jobDetailsPage.confirmCancelYesButton.waitForClickable({timeout:10000})
    action.clickElement(jobDetailsPage.confirmCancelYesButton,"Confirm Cancel Yes button in Job Details page")
    }
    catch(Err){
    }
})

When(/^I click yes to confirm late rejection$/, function(){
    browser.pause(2000)
    action.clickElement(jobDetailsPage.lateRejectionConfirmYesButton,"Late rejection confirm Yes button in Job Details page")
})

When(/^I click yes to confirm no show$/, function(){
    browser.pause(2000)
    action.clickElement(jobDetailsPage.interpreterNoShowConfirmYesButton,"Interpreter no show confirm Yes button in Job Details page")
})

When(/^I select "(.*)" cancel reason$/, function(reason){
    browser.pause(2000)
    action.selectTextFromDropdown(jobDetailsPage.cancelReasonDropdown, reason,"Cancel reason dropdown in Job Details page")
})

When(/^I select "(.*)" on behalf$/, function(onbehalf){
    browser.pause(2000)
    action.selectTextFromDropdown(jobDetailsPage.cancelOnBehalfDropdown, onbehalf,"Cancel On behalf dropdown in Job Details page")
})

When(/^I submit cancel job confirmation$/, function(){
    jobDetailsPage.cancelSubmitButton.waitForClickable({timeout:10000},{interval:1000})
    action.clickElement(jobDetailsPage.cancelSubmitButton,"Cancel Submit button in Job Details page")
    browser.waitUntil(()=>browser.getTitle()==='Bookings',20000,'Cancel taking more time',1000)
})

When(/^I confirm yes to cancellation fee$/, function(){
    browser.pause(5000)
    action.clickElement(jobDetailsPage.jobCancellationFeeConfirmYesButton,"Job Cancellation fee confirm Yes button in Job Details page")
    try{
        jobDetailsPage.jobCancellationFeeConfirmYesButton.waitForExist({timeout:3000})
        action.clickElement(jobDetailsPage.jobCancellationFeeConfirmYesButton,"Job Cancellation fee confirm Yes button in Job Details page")
      }
      catch(Err)
      {
      }
})

When(/^I search for contractor "(.*)"$/, function(contractor){
    browser.pause(2000)
    action.enterValueAndPressReturn(jobDetailsPage.searchContractorInput,contractor,"Search contractor text box in Job Details page")
})

When(/^I get the first contractor on list$/, function(){
    browser.pause(2000)
    GlobalData.CONTRACTOR_NAME= $('//div[contains(@class,"ContractorName")]//a[contains(@id,"ContractorList")]').getText()
})

When(/^I search for first contractor on list$/, function(){
    browser.pause(2000)
    action.enterValueAndPressReturn(jobDetailsPage.searchContractorInput,GlobalData.CONTRACTOR_NAME,"Search contractor text box in Job Details page")
})

When(/^I refresh the page$/, function(){
    browser.pause(5000)
    browser.refresh()
})

When(/^I set the contractor job status from "(.*)" to "(.*)"$/, function(original_jobstatus,new_jobstatus){
    browser.pause(2000)
    action.isVisibleWait($('//div[@class="ContractorTable"]//a[text()="'+original_jobstatus+'"]'),30000)
    action.elementExists(jobDetailsPage.contractorListTable,"Contractor list table in Job Details page")
    action.clickElement($('//div[@class="ContractorTable"]//a[text()="'+original_jobstatus+'"]'),"Contractor list table job status "+original_jobstatus+" in Job Details page")
    browser.pause(5000)
    //action.clickElement(jobDetailsPage.autoNotificationLink)
    action.selectTextFromDropdown(jobDetailsPage.jobContractorStatusDropdown,new_jobstatus,"Contractor list table job status "+new_jobstatus+" dropdown in Job Details page")
    // browser.pause(20000)
    /*var jobStatus = $('//*[contains(@id,"wtcontJobStatusVisible")]')
    var jobStatuses =['Allocated','Voicemail Left','Refused Job','Unavailable']
    browser.waitUntil(()=> {
        return jobStatuses.filter(jobstat=>jobstat===jobStatus.getText()) },{timeout:15000,timeoutMsg:'jobStatus not changed in 15s',interval:2000})*/
    const confirmationWindow =$('//*[text()[contains(.,"Overlap Confirmation")]]')
    action.isVisibleWait(confirmationWindow,30000,"Confirmation window in Job Details page")
    if(confirmationWindow.isDisplayed())
    {
        const confirmYes =$('//input[contains(@id,"wtActions_wt145")]')
        action.isClickableWait(confirmYes,30000,"Confirm Yes button in Job Details page")
        action.clickElement(confirmYes,"Confirm Yes button in Job Details page")
    }
})

When(/^I click on accept metro service checkbox$/, function(){
    action.clickElement(jobDetailsPage.acceptMetroServiceCheckBox,"Accept metro service check box in Job Details page")
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
        let statusVisible = action.isVisibleWait(contractorStatusElement, 10000,"Contractor status in Job Details page");
        if (statusVisible) {
            action.clickElement(contractorStatusElement,"Contractor status in Job Details page");
            break;
        }
    }
    action.isVisibleWait(jobDetailsPage.jobContractorStatusDropdown, 10000,"Job Contractor status dropdown in Job Details page");
    action.selectTextFromDropdown(jobDetailsPage.jobContractorStatusDropdown, new_jobStatus,"Job Contractor status dropdown in Job Details page");
    const confirmationWindow = $('//*[text()[contains(.,"Overlap Confirmation")]]');
    action.isVisibleWait(confirmationWindow, 30000,"Confirmation window in Job Details page");
    if (confirmationWindow.isDisplayed()) {
        const confirmYes = $('//input[contains(@id,"wtActions_wt145")]');
        action.isClickableWait(confirmYes, 30000,"Confirm yes button in Job Details page");
        action.clickElement(confirmYes,"Confirm yes button in Job Details page");
    }
})

Then(/^this will show 1 contractor that was connected to the call$/, function () {
    let jobContractorLink = $(jobDetailsPage.jobAllocationDynamicValueLinkLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "1"));
    let jobContractorDisplayStatus = action.isVisibleWait(jobContractorLink, 10000,"Job contractor link in Job Details page");
    chai.expect(jobContractorDisplayStatus).to.be.true;
    let jobAllocationTableRowsCount = jobDetailsPage.jobAllocationTableBodyRowsCount;
    chai.expect(jobAllocationTableRowsCount).to.equal(1);
})

Then(/^they will see the Campus PIN hyperlinked$/, function () {
    let campusPinHyperlinkDisplayStatus = action.isVisibleWait(jobDetailsPage.campusPinHyperlink,10000,"Campus pin hyperlink in Job Details page");
    chai.expect(campusPinHyperlinkDisplayStatus).to.be.true;
})

Then(/^they click the Campus PIN$/, function () {
    action.clickElement(jobDetailsPage.campusPinHyperlink,"Campus pin hyperlink in Job Details page");
})

Then(/^they will see the Contract Name hyperlinked$/, function () {
    let contractNameHyperlinkDisplayStatus = action.isVisibleWait(jobDetailsPage.contractNameHyperlink,10000,"Contract Name hyperlink in Job Details page");
    chai.expect(contractNameHyperlinkDisplayStatus).to.be.true;
})

Then(/^they click the Contract Name$/, function () {
    action.clickElement(jobDetailsPage.contractNameHyperlink,"Contract Name hyperlink in Job Details page");
})

When(/^the user is viewing the allocated interpreter section$/, function () {
    let jobAllocationSectionDisplayStatus = action.isVisibleWait(jobDetailsPage.jobAllocationSection,10000,"Job allocation section in Job Details page");
    chai.expect(jobAllocationSectionDisplayStatus).to.be.true;
})

Then(/^they click on the Contractor Name$/, function () {
    let contractNameHyperLink = $(jobDetailsPage.jobAllocationDynamicValueLinkLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "1"));
    action.isVisibleWait(contractNameHyperLink,10000,"Job allocation link in Job Details page");
    action.clickElement(contractNameHyperLink,"Job allocation link in Job Details page");
})

Then(/^they will see a heading with the Job ID number and the Campus Name as per existing functionality$/, function () {
    let jobIDAndCampusNameValueInJobDetails = action.getElementText(jobDetailsPage.jobIdLabel,"Job ID label in Job Details page");
    chai.expect(jobIDAndCampusNameValueInJobDetails).to.includes(GlobalData.ODTI_SERVICE_CHARGE_JOB_ID_IN_TABLE);
    chai.expect(jobIDAndCampusNameValueInJobDetails).to.includes(GlobalData.ODTI_CAMPUS_NAME);
})

Then(/^they will see the following details and information in the Job Info section: "(.*)", "(.*)"$/, function (sectionName, labels) {
    let labelsList = labels.split(",");
    for (let index = 0; index < labelsList.length; index++) {
        let jobInfoSectionLabelElement = $(jobDetailsPage.jobInfoSectionLabelsDynamicLocator.replace("<dynamicSectionName>", sectionName).replace("<dynamicLabel>", labelsList[index]));
        let jobInfoLabelDisplayStatus = action.isVisibleWait(jobInfoSectionLabelElement, 10000,"Job info section labels in Job Details page");
        chai.expect(jobInfoLabelDisplayStatus).to.be.true;
    }
})
Then(/^they will see the Allocated Interpreter section under the Job Info section as per existing functionality for Job Bookings$/, function () {
    let jobAllocationSectionUnderJobInfoDisplayStatus = action.isVisibleWait(jobDetailsPage.jobAllocationSectionUnderJobInfoSection,10000,"Job allocation section under job info section in Job Details page");
    chai.expect(jobAllocationSectionUnderJobInfoDisplayStatus).to.be.true;
})

Then(/^the job allocation table will show the following: "(.*)"$/, function (expectedHeaders) {
    let expectedHeadersList = expectedHeaders.split(",")
    action.isVisibleWait(jobDetailsPage.jobAllocationTableHeaders, 10000,"Job allocation table headers in Job Details page");
    let jobAllocationTableHeadersActual = action.getElementText(jobDetailsPage.jobAllocationTableHeaders,"Job allocation table headers in Job Details page");
    for (let index = 0; index < expectedHeadersList.length; index++) {
        chai.expect(jobAllocationTableHeadersActual).to.includes(expectedHeadersList[index]);
    }
})

Then(/^the job allocation table will not show the following: "(.*)"$/, function (expectedHeaders) {
    let expectedHeadersList = expectedHeaders.split(",")
    action.isVisibleWait(jobDetailsPage.jobAllocationTableHeaders, 10000);
    let jobAllocationTableHeadersActual = action.getElementText(jobDetailsPage.jobAllocationTableHeaders,"Job allocation table headers in Job Details page");
    for (let index = 0; index < expectedHeadersList.length; index++) {
        chai.expect(jobAllocationTableHeadersActual).to.not.includes(expectedHeadersList[index]);
    }
})

Then(/^the Contractor’s name will be hyperlinked$/, function () {
    let contractNameHyperLink = $(jobDetailsPage.jobAllocationDynamicValueLinkLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "1"));
    let contractNameHyperLinkDisplayStatus = action.isVisibleWait(contractNameHyperLink,10000,"Contract Name hyperlink in Job Details page");
    chai.expect(contractNameHyperLinkDisplayStatus).to.be.true;
})

Then(/^the contractor or interpreter "(.*)" is unable to view or accept any job for that campus or Organisation$/, function (contractorName) {
    let contractorJobStatusLink = $(jobDetailsPage.contractorJobStatusLinkLocator.replace("<dynamic>", contractorName));
    action.isVisibleWait(contractorJobStatusLink, 10000,"Contractor Job status link in Job Details page");
    browser.execute((el) => {
        const hoverEvent = new MouseEvent('mouseover', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        el.dispatchEvent(hoverEvent);
    }, contractorJobStatusLink);
    let contractorBlockedTextExistStatus = action.isExistingWait(jobDetailsPage.organisationCampusBlocksContractorText, 3000,"Organization campus block contractor text in Job Details page");
    chai.expect(contractorBlockedTextExistStatus).to.be.true;
})

Then(/^on refreshing the Job page, the contractor "(.*)" will be eligible for the job$/, function (contractorName) {
    let contractorJobStatusLink = $(jobDetailsPage.contractorJobStatusLinkLocator.replace("<dynamic>", contractorName));
    action.isVisibleWait(contractorJobStatusLink, 10000,"Organization Job status link in Job Details page");
    browser.execute((el) => {
        const hoverEvent = new MouseEvent('mouseover', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        el.dispatchEvent(hoverEvent);
    }, contractorJobStatusLink);
    let contractorBlockedTextExistStatus = action.isExistingWait(jobDetailsPage.organisationCampusBlocksContractorText, 3000,"Organization campus blocks contractor text in Job Details page");
    chai.expect(contractorBlockedTextExistStatus).to.be.false;
})

When(/^user clicks on Edit button in Job Allocation$/, function () {
    action.isVisibleWait(jobDetailsPage.editButton,20000,"Edit button in Job Allocation page");
    action.clickElement(jobDetailsPage.editButton,"Edit button in Job Allocation page")
})

Then(/^they will see the custom fields section under job info$/, function () {
    let customFieldsSectionDisplayStatus = action.isVisibleWait(jobDetailsPage.customFieldsSection, 10000, "Custom Fields section in Job Details page");
    chai.expect(customFieldsSectionDisplayStatus).to.be.true;
})

Then(/^the new cancellation reasons "(.*)" should be displayed$/, function (cancellationReasons) {
    let cancellationReasonsList = cancellationReasons.split(",");
    action.isVisibleWait(jobDetailsPage.cancelReasonDropdown, 10000, "Cancel reason dropdown in Job Details page");
    for (let optionIndex = 0; optionIndex < cancellationReasonsList.length; optionIndex++) {
        let cancelReasonDropdownOptionElement = $(jobDetailsPage.cancelReasonDropdownOptionDynamicLocator.replace("<dynamic>", cancellationReasonsList[optionIndex]));
        let cancelReasonDropdownOptionExistStatus = action.isExistingWait(cancelReasonDropdownOptionElement, 10000, "Cancellation Reason option-" + cancellationReasonsList[optionIndex] + " in Job Details page");
        chai.expect(cancelReasonDropdownOptionExistStatus).to.be.true;
    }
})