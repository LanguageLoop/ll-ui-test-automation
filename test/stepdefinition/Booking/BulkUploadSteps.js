
When(/^I upload bulk booking file$/, function(){
    action.uploadFile(bulkUploadPage.fileUploadControl,"./test/data/Bulk_Upload_Bookings.xlsx","File Upload control in Bulk Upload page")
})

When(/^I click on next link$/, function(){
    bulkUploadPage.nextLink.waitForClickable({timeout:10000},{interval:500})
    action.clickElement(bulkUploadPage.nextLink,"Next link in Bulk Upload page")
})

When(/^I click on confirm link$/, function(){
    action.clickElement(bulkUploadPage.confirmLink,"Confirm link in Bulk Upload page")
})

When(/^Job upload confirmation message is displayed$/, function(){
    action.elementExists(bulkUploadPage.fileUploadConfirmationMessage,"File Upload confirmation message in Bulk Upload page")
})

When(/^I enter assignment type "(.*)" for the bulk jobs$/, function(assignmenttype){
    var assignment_types=bulkUploadPage.jobAssignmentTypeDropdown
    for(assignment_type of assignment_types)
    {
        browser.pause(1000)
        action.selectTextFromDropdown(assignment_type,assignmenttype,"Job assignment type dropdown in Bulk Upload page")
    }

    browser.pause(5000)
})

Then(/^Bookings created confirmation message is displayed$/, function(){
   chai.expect(action.elementExists(bulkUploadPage.bookingsCreatedConfirmationMessage,"Bookings created confirmation message in Bulk Upload page")).to.be.true
})