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

When(/^I select the new campus pin "(.*)" which is for a different contract$/, function (campusPin) {
    action.isVisibleWait(ODTIJobDetailsPage.selectPinLink, 10000, "Select Pin link in ODTI job details page");
    action.clickElement(ODTIJobDetailsPage.selectPinLink, "Select Pin link in ODTI job details page");
    action.isVisibleWait(ODTIJobDetailsPage.pinTextBoxUnderFilterBy, 10000, "PIN text box under filter by in ODTI job details page");
    action.enterValue(ODTIJobDetailsPage.pinTextBoxUnderFilterBy, campusPin, "PIN text box under filter by in ODTI job details page");
    let pinSearchResultLink = $(ODTIJobDetailsPage.pinSearchResultLinkDynamicLocator.replace("<dynamic>",campusPin));
    action.isVisibleWait(pinSearchResultLink, 10000, "Pin search result link in ODTI job details page");
    action.clickElement(pinSearchResultLink, "Pin search result link in ODTI job details page");
})

Then(/^a pop up message will appear before I can proceed The new campus pin is for a different contract, are you sure you want to proceed$/, function () {
    browser.waitUntil(function () {
        return (action.isAlertOpenWait(5000)) === true
    }, {
        timeout: 5000,
        timeoutMsg: 'expected alert to be displayed within 5s',
        interval: 500
    })
    let newPinProceedAlertPopupMessage = action.getAlertText();
    chai.expect(newPinProceedAlertPopupMessage).to.equal("The new campus pin is for a different contract, are you sure you want to proceed?")
    action.acceptAlert();
})

When(/^I click OK on alert popups after selecting the a new campus pin$/, function () {
    browser.waitUntil(function () {
        return (action.isAlertOpenWait(5000)) === true
    }, {
        timeout: 5000,
        timeoutMsg: 'expected alert to be displayed within 5s',
        interval: 500
    })
    action.getAlertText();
    action.acceptAlert();
    browser.waitUntil(function () {
        return (action.isAlertOpenWait(5000)) === true
    }, {
        timeout: 5000,
        timeoutMsg: 'expected alert to be displayed within 5s',
        interval: 500
    })
    action.getAlertText();
    action.acceptAlert();
})

When(/^I click on Migrate & Recalculate Job Fee after selecting a new campus pin$/, function () {
    action.isVisibleWait(ODTIJobDetailsPage.migrateAndRecalculateJobFeeButton, 10000,"Migrate And Recalculate Job Fee Button in ODTI job details page");
    action.clickElement(ODTIJobDetailsPage.migrateAndRecalculateJobFeeButton, "Migrate And Recalculate Job Fee Button in ODTI job details page");
})

Then(/^an following error message will appear The Job PIN could not be migrated No contract rate found for Contract ID: XX’ and will not allow the user to proceed with that PIN$/, function () {
    let noContractRateFoundErrorMessageDisplayStatus = action.isVisibleWait(ODTIJobDetailsPage.noContractRateFoundErrorMessage, 10000,"The Job PIN could not be migrated. No contract rate found for Contract ID:xx and will not allow the user to proceed with that PIN. Error message in ODTI job details page");
    chai.expect(noContractRateFoundErrorMessageDisplayStatus).to.be.true;
})

Then(/^a message will appear Service Type is not enabled, do you want to proceed$/, function () {
    browser.waitUntil(function () {
        return (action.isAlertOpenWait(5000)) === true
    }, {
        timeout: 5000,
        timeoutMsg: 'expected alert to be displayed within 5s',
        interval: 500
    })
    let serviceTypeNotEnabledAlertPopupMessage = action.getAlertText();
    chai.expect(serviceTypeNotEnabledAlertPopupMessage).to.equal("Service Type is not enabled, do you want to proceed?")
})

Then(/^an inline message in red will appear Please ensure that all mandatory custom fields are completed$/, function () {
    let ensureAllMandatoryFieldsCompletedErrorMessageDisplayStatus = action.isVisibleWait(ODTIJobDetailsPage.ensureAllMandatoryFieldsCompletedErrorMessage, 10000,"Please ensure that all mandatory custom fields are completed Error message in ODTI job details page");
    chai.expect(ensureAllMandatoryFieldsCompletedErrorMessageDisplayStatus).to.be.true;
})