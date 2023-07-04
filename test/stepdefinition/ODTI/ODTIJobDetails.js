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

When(/^the user has selected Task "(.*)" and added message "(.*)"$/, function (task,message) {
    action.isVisibleWait(ODTIJobDetailsPage.jobTaskDropdown, 10000, "Task dropdown on Job Task popup in ODTI job details page");
    action.selectTextFromDropdown(ODTIJobDetailsPage.jobTaskDropdown,task, "Task dropdown on Job Task popup in ODTI job details page");
    action.isVisibleWait(ODTIJobDetailsPage.messageTextarea, 10000, "message textarea on Job Task popup in ODTI job details page");
    message = message + (Math.floor(Math.random() * 1000000) + 1).toString()
    GlobalData.JOB_TASK_MESSAGE = message
    action.enterValue(ODTIJobDetailsPage.messageTextarea,message, "message textarea on Job Task popup in ODTI job details page");
})

When(/^the user has clicked the Save button$/, function () {
    action.isVisibleWait(ODTIJobDetailsPage.saveButtonOnJobTaskPopup, 10000, "Save Button on Job Task popup in ODTI job details page");
    action.clickElement(ODTIJobDetailsPage.saveButtonOnJobTaskPopup, "Save Button on Job Task popup in ODTI job details page");
    action.isNotVisibleWait(ODTIJobDetailsPage.saveButtonOnJobTaskPopup, 3000, "Save Button on Job Task popup in ODTI job details page");
})

Then(/^the job task note is saved$/, function () {
    action.isVisibleWait(ODTIJobDetailsPage.jobNotesSavedList, 10000, "Job Notes saved list in ODTI job details page");
    browser.waitUntil(function () {
        return (action.getElementText(ODTIJobDetailsPage.jobNotesSavedList, "Job Notes saved list in ODTI job details page").includes(GlobalData.JOB_TASK_MESSAGE)) === true
    }, {
        timeout: 5000,
        timeoutMsg: 'expected Job notes saved text to display within 5s',
        interval: 500
    })
    let savedNoteListTextActual = action.getElementText(ODTIJobDetailsPage.jobNotesSavedList, "Job Notes saved list in ODTI job details page");
    chai.expect(savedNoteListTextActual).to.includes(GlobalData.JOB_TASK_MESSAGE);
})

Then(/^the Job Task popup is closed$/, function () {
    let jobTaskPopupDisplayStatus = action.isVisibleWait(ODTIJobDetailsPage.jobTaskPopup, 1000, "Job Task popup in ODTI job details page");
    chai.expect(jobTaskPopupDisplayStatus).to.be.false;
})

When(/^the user has added messages "(.*)" to existing note$/, function (messages) {
    GlobalData.JOB_TASK_COMMENTS = [];
    GlobalData.JOB_TASK_COMMENTS.push(GlobalData.JOB_TASK_MESSAGE);
    let messagesList = messages.split(",");
    for (let i = 0; i < messagesList.length; i++) {
        let jobTaskExistingMessage = $(ODTIJobDetailsPage.jobNotesExistingMessageDynamicLocator.replace("<dynamic>", GlobalData.JOB_TASK_MESSAGE));
        action.isVisibleWait(jobTaskExistingMessage, 10000, "Existing Message " + GlobalData.JOB_TASK_MESSAGE + " on Job Task popup in ODTI job details page");
        action.clickElement(jobTaskExistingMessage, "Existing Message " + GlobalData.JOB_TASK_MESSAGE + " on Job Task popup in ODTI job details page");
        action.isVisibleWait(ODTIJobDetailsPage.messageTextarea, 10000, "message textarea on Job Task popup in ODTI job details page");
        messagesList[i] = messagesList[i] + (Math.floor(Math.random() * 1000000) + 1).toString();
        action.enterValue(ODTIJobDetailsPage.messageTextarea, messagesList[i], "message textarea on Job Task popup in ODTI job details page");
        GlobalData.JOB_TASK_MESSAGE = messagesList[i];
        GlobalData.JOB_TASK_COMMENTS.push(GlobalData.JOB_TASK_MESSAGE);
        action.clickElement(ODTIJobDetailsPage.saveButtonOnJobTaskPopup, "Save Button on Job Task popup in ODTI job details page");
        action.isNotVisibleWait(ODTIJobDetailsPage.saveButtonOnJobTaskPopup, 3000, "Save Button on Job Task popup in ODTI job details page");
    }
})

When(/^the user clicks on an existing note$/, function () {
    let jobTaskExistingMessage = $(ODTIJobDetailsPage.jobNotesExistingMessageDynamicLocator.replace("<dynamic>", GlobalData.JOB_TASK_MESSAGE));
    action.isVisibleWait(jobTaskExistingMessage, 10000, "Existing Message " + GlobalData.JOB_TASK_MESSAGE + " on Job Task popup in ODTI job details page");
    action.clickElement(jobTaskExistingMessage, "Existing Message " + GlobalData.JOB_TASK_MESSAGE + " on Job Task popup in ODTI job details page");
})

Then(/^displays the previous comments under the Discussion section if any$/, function () {
    action.isVisibleWait(ODTIJobDetailsPage.discussionSectionCommentsList, 10000, "Discussion Section Comments List in ODTI job details page");
    let discussionSectionCommentsListTextActual = action.getElementText(ODTIJobDetailsPage.discussionSectionCommentsList, "Discussion Section Comments List in ODTI job details page");
    for (let i = 0; i < GlobalData.JOB_TASK_COMMENTS.length; i++) {
        chai.expect(discussionSectionCommentsListTextActual).to.includes(GlobalData.JOB_TASK_COMMENTS[i]);
    }
})

Then(/^the previous comments are sorted by newest-first order$/, function () {
    let discussionListCommentMessageList = [];
    for (let i = 0; i < ODTIJobDetailsPage.discussionListCommentMessageCount; i++) {
        let discussionListCommentMessage = $(ODTIJobDetailsPage.discussionListCommentMessageDynamicLocator.replace("<dynamic>", (i + 1).toString()));
        let discussionListCommentMessageText = action.getElementText(discussionListCommentMessage, "Discussion list comment message in ODTI job details page");
        discussionListCommentMessageList.push(discussionListCommentMessageText);
    }
    GlobalData.JOB_TASK_COMMENTS.reverse();
    for (let k = 0; k < discussionListCommentMessageList.length; k++) {
        chai.expect(discussionListCommentMessageList[k].trim()).to.equal(GlobalData.JOB_TASK_COMMENTS[k].trim());
    }
})

Then(/^the latest added message for the existing note is displayed$/, function () {
    action.isVisibleWait(ODTIJobDetailsPage.jobNotesSavedList, 10000, "Job Notes saved list in ODTI job details page");
    browser.waitUntil(function () {
        return (action.getElementText(ODTIJobDetailsPage.jobNotesSavedList, "Job Notes saved list in ODTI job details page").includes(GlobalData.JOB_TASK_COMMENTS[GlobalData.JOB_TASK_COMMENTS.length - 1])) === true
    }, {
        timeout: 5000,
        timeoutMsg: 'expected Job notes saved text to display within 5s',
        interval: 500
    })
    let savedNoteListTextActual = action.getElementText(ODTIJobDetailsPage.jobNotesSavedList, "Job Notes saved list in ODTI job details page");
    chai.expect(savedNoteListTextActual).to.includes(GlobalData.JOB_TASK_COMMENTS[GlobalData.JOB_TASK_COMMENTS.length - 1]);
})