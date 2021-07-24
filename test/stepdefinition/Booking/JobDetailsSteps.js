
When(/^I click on Duplicate button$/, function(){
    browser.pause(2000)
    action.clickElement(jobDetailsPage.duplicateButton)
    browser.pause(2000)
})

When(/^I click on Edit button$/, function(){
    browser.pause(2000)
    action.clickElement(jobDetailsPage.editButton)
    browser.pause(5000)
})

When(/^I click on Cancel button$/, function(){
    browser.pause(2000)
    browser.refresh()
    action.clickElement(jobDetailsPage.cancelButton)
})

When(/^I click confirm cancel yes button$/, function(){
    browser.pause(2000)
    try{
    jobDetailsPage.confirmCancelYesButton.waitForExist({timeout:10000})
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
    browser.pause(2000)
    action.clickElement(jobDetailsPage.cancelSubmitButton)
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
    action.elementExists(jobDetailsPage.contractorListTable)
    action.clickElement($('//div[@class="ContractorTable"]//a[text()="'+original_jobstatus+'"]'))
    browser.pause(5000)
    //action.clickElement(jobDetailsPage.autoNotificationLink)
    action.selectTextFromDropdown(jobDetailsPage.jobContractorStatusDropdown,new_jobstatus)
    browser.pause(9000)
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