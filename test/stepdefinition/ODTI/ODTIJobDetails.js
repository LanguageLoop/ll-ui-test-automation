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

Then(/^a pop up will display the campus pin "(.*)" in the results, and on hovering over message Campus is disabled$/, function (campusPin) {
    action.isVisibleWait(ODTIJobDetailsPage.selectPinLink, 10000, "Select Pin link in ODTI job details page");
    action.clickElement(ODTIJobDetailsPage.selectPinLink, "Select Pin link in ODTI job details page");
    action.isVisibleWait(ODTIJobDetailsPage.pinTextBoxUnderFilterBy, 10000, "PIN text box under filter by in ODTI job details page");
    action.enterValue(ODTIJobDetailsPage.pinTextBoxUnderFilterBy, campusPin, "PIN text box under filter by in ODTI job details page");
    let disabledPinSearchResultText = $(ODTIJobDetailsPage.disabledPinSearchResultTextDynamicLocator.replace("<dynamic>",campusPin));
    let disabledPinSearchResultTextDisplayStatus = action.isVisibleWait(disabledPinSearchResultText, 10000, "Disabled Pin search result text in ODTI job details page");
    chai.expect(disabledPinSearchResultTextDisplayStatus).to.be.true;
    action.moveToElement(disabledPinSearchResultText,"Disabled Pin search result text in ODTI job details page");
    let campusIsDisableHoverMessageDisplayStatus = action.isVisibleWait(ODTIJobDetailsPage.campusIsDisabledHoverMessage, 10000, "Campus is disabled hover message in ODTI job details page");
    chai.expect(campusIsDisableHoverMessageDisplayStatus).to.be.true;
})

When(/^I enter the campus pin "(.*)" which does not exist$/, function (campusPin) {
    action.isVisibleWait(ODTIJobDetailsPage.selectPinLink, 10000, "Select Pin link in ODTI job details page");
    action.clickElement(ODTIJobDetailsPage.selectPinLink, "Select Pin link in ODTI job details page");
    action.isVisibleWait(ODTIJobDetailsPage.pinTextBoxUnderFilterBy, 10000, "PIN text box under filter by in ODTI job details page");
    action.enterValue(ODTIJobDetailsPage.pinTextBoxUnderFilterBy, campusPin, "PIN text box under filter by in ODTI job details page");
})

Then(/^a pop up will display a message No campus PIN to show…$/, function () {
    let noCampusPinToShowTextDisplayStatus = action.isVisibleWait(ODTIJobDetailsPage.noCampusPinToShowText, 10000,"No campus PIN to show... text in ODTI job details page");
    chai.expect(noCampusPinToShowTextDisplayStatus).to.be.true;
})

When(/^I have completed all mandatory fields "(.*)","(.*)" and submit the change$/, function (mandatoryFields, mandatoryFieldValues) {
    let mandatoryFieldList = mandatoryFields.split(",");
    let mandatoryFieldValuesList = mandatoryFieldValues.split(",");
    for (let i = 0; i < mandatoryFieldList.length; i++) {
        let mandatoryField = $(ODTIJobDetailsPage.mandatoryFieldTextBoxDynamicLocator.replace("<dynamic>", mandatoryFieldList[i]));
        action.isVisibleWait(mandatoryField, 10000, "Mandatory field " + mandatoryFieldList[i] + " in ODTI job details page");
        action.enterValue(mandatoryField, mandatoryFieldValuesList[i], "Mandatory field " + mandatoryFieldList[i] + " in ODTI job details page")
    }
})

Then(/^the new campus pin "(.*)" will be saved against the job$/, function (expectedCampusPin) {
    action.isNotVisibleWait(ODTIJobDetailsPage.migrateAndRecalculateJobFeeButton, 3000,"Migrate And Recalculate Job Fee Button in ODTI job details page");
    action.isVisibleWait(ODTIJobDetailsPage.campusPinLink, 10000, "Saved Campus Pin link in ODTI job details page");
    let campusPinLinkText = action.getElementText(ODTIJobDetailsPage.campusPinLink,"Saved Campus Pin link in ODTI job details page");
    chai.expect(campusPinLinkText).to.equal(expectedCampusPin);
})

When(/^I get the existing campus Total rate value$/, function () {
    action.isVisibleWait(ODTIJobDetailsPage.campusTotalRateTextBox, 10000, "Campus Total rate text box in ODTI job details page");
    GlobalData.ODTI_CAMPUS_RATE_TOTAL = action.getElementValue(ODTIJobDetailsPage.campusTotalRateTextBox, "Campus Total rate text box in ODTI job details page");
})

Then(/^the new rates will be applied on the campus$/, function () {
    action.isVisibleWait(ODTIJobDetailsPage.campusTotalRateTextBox, 10000, "Campus Total rate text box in ODTI job details page");
    let campusRateAfterCampusPinMigrate = action.getElementValue(ODTIJobDetailsPage.campusTotalRateTextBox, "Campus Total rate text box in ODTI job details page");
    chai.expect(campusRateAfterCampusPinMigrate).to.not.equal(GlobalData.ODTI_CAMPUS_RATE_TOTAL)
})

When(/^the user clicks on Add Job Task or Note link$/, function () {
    action.isVisibleWait(ODTIJobDetailsPage.addAJobTaskOrNoteLink, 10000, "Add a job task or note link in ODTI job details page");
    action.clickElement(ODTIJobDetailsPage.addAJobTaskOrNoteLink, "Add a job task or note link in ODTI job details page");
})

Then(/^the Job Task popup displays similar to popup from Prebooked jobs$/, function () {
    let jobTaskPopupDisplayStatus = action.isVisibleWait(ODTIJobDetailsPage.jobTaskPopup, 10000, "Job Task popup in ODTI job details page");
    chai.expect(jobTaskPopupDisplayStatus).to.be.true;
})

Then(/^the user can see the items in the popup, as per table$/, function () {
    let jobTaskDropdownDisplayStatus = action.isVisibleWait(ODTIJobDetailsPage.jobTaskDropdown, 10000, "Task dropdown on Job Task popup in ODTI job details page");
    chai.expect(jobTaskDropdownDisplayStatus).to.be.true;
    let jobTaskMessageTextareaDisplayStatus = action.isVisibleWait(ODTIJobDetailsPage.messageTextarea, 10000, "Job Task message textarea on Job Task popup in ODTI job details page");
    chai.expect(jobTaskMessageTextareaDisplayStatus).to.be.true;
    let jobTaskSaveButtonDisplayStatus = action.isVisibleWait(ODTIJobDetailsPage.saveButtonOnJobTaskPopup, 10000, "Save Button on Job Task popup in ODTI job details page");
    chai.expect(jobTaskSaveButtonDisplayStatus).to.be.true;
    let jobTaskXButtonDisplayStatus = action.isVisibleWait(ODTIJobDetailsPage.xButtonOnJobTaskPopup, 10000, "X button on Job Task popup in ODTI job details page");
    chai.expect(jobTaskXButtonDisplayStatus).to.be.true;
})