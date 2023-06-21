When(/^I want to change the campus pin by clicking on the Edit icon$/, function () {
    action.isVisibleWait(ODTIJobDetailsPage.campusPinEditIcon, 10000,"Campus Pin edit icon in ODTI job details page");
    action.clickElement(ODTIJobDetailsPage.campusPinEditIcon, "Campus Pin edit icon in ODTI job details page");
})

When(/^I click on Migrate & Recalculate Job Fee without selecting a new campus pin$/, function () {
    action.isVisibleWait(ODTIJobDetailsPage.migrateAndRecalculateJobFeeButton, 10000,"Migrate And Recalculate Job Fee Button in ODTI job details page");
    action.clickElement(ODTIJobDetailsPage.migrateAndRecalculateJobFeeButton, "Migrate And Recalculate Job Fee Button in ODTI job details page");
})

Then(/^an inline message in red will appear New PIN must be selected and valid$/, function () {
    let newPinMustBeSelectedAndValidErrorMessageDisplayStatus = action.isVisibleWait(ODTIJobDetailsPage.newPinMustBeSelectedAndValidErrorMessage, 10000,"New PIN must be selected and valid Error message in ODTI job details page");
    chai.expect(newPinMustBeSelectedAndValidErrorMessageDisplayStatus).to.be.true;
})