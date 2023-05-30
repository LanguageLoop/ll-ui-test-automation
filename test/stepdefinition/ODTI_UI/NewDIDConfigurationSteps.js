Then(/^the user is navigated to the DID Configuration Details screen$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.equal("New DID Configuration");
})

When(/^a blank form is shown in New DID Configuration$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.didNumberInputTextBox,10000);
    let didNumberOrigValue = action.getElementAttribute(newDIDConfigurationPage.didNumberInputTextBox,"origvalue");
    chai.expect(didNumberOrigValue).to.equal("");
})

When(/^a copy of the existing DID configuration is shown upon clicking duplicate$/, function () {
    let existingDIDConfigurationDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.existingDIDConfiguration,10000);
    chai.expect(existingDIDConfigurationDisplayStatus).to.be.true;
})

When(/^the DID is blank in existing DID configuration upon clicking duplicate$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.didNumberInputTextBox,10000);
    let didNumberOrigValue = action.getElementAttribute(newDIDConfigurationPage.didNumberInputTextBox,"origvalue");
    chai.expect(didNumberOrigValue).to.equal("");
})

When(/^has selected the TI Service Type "(.*)" in DID configuration$/, function (serviceType) {
    action.isVisibleWait(newDIDConfigurationPage.tiServiceTypeDropdown);
    action.selectTextFromDropdown(newDIDConfigurationPage.tiServiceTypeDropdown,serviceType);
})

When(/^has typed in a Campus PIN "(.*)" in DID configuration$/, function (campusPin) {
    action.isVisibleWait(newDIDConfigurationPage.campusPinInputTextBox, 10000);
    action.enterValue(newDIDConfigurationPage.campusPinInputTextBox,campusPin);
})

Then(/^the PIN is searched in DID configuration$/, function () {
    let searchedCampusResultDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.campusNameBelowInputTextBox, 10000);
    chai.expect(searchedCampusResultDisplayStatus).to.be.true;
})

Then(/^the Campus name "(.*)" is displayed below the input box in DID configuration$/, function (campusName) {
    let campusNameTextBelowInputBox = action.getElementText(newDIDConfigurationPage.campusNameBelowInputTextBox);
    chai.expect(campusNameTextBelowInputBox).to.equal(campusName);
})

Then(/^the MILS configuration section is hidden$/, function () {
    let milsConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.milsConfigurationSection, 10000);
    chai.expect(milsConfigurationSectionDisplayStatus).to.be.false;
})

Then(/^the TIXP configuration section is displayed$/, function () {
    let tixpConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.tixpConfigurationSection, 10000);
    chai.expect(tixpConfigurationSectionDisplayStatus).to.be.true;
})

Then(/^the MILS configuration section is displayed$/, function () {
    let milsConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.milsConfigurationSection, 10000);
    chai.expect(milsConfigurationSectionDisplayStatus).to.be.true;
})

Then(/^the TIXP configuration section is hidden$/, function () {
    let tixpConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.tixpConfigurationSection, 10000);
    chai.expect(tixpConfigurationSectionDisplayStatus).to.be.false;
})

Then(/^the MILS and TIXP configuration sections are not shown/, function () {
    let milsConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.milsConfigurationSection, 10000);
    chai.expect(milsConfigurationSectionDisplayStatus).to.be.false;
    let tixpConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.tixpConfigurationSection, 10000);
    chai.expect(tixpConfigurationSectionDisplayStatus).to.be.false;
})

When(/^the user has clicked the CANCEL button in DID configuration$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.cancelButton,10000);
    action.clickElement(newDIDConfigurationPage.cancelButton);
})

Then(/^the data entered is not saved in DID configuration$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.not.includes("New DID Configuration");
})

When(/^the admin has clicked the Add More icon under the day-schedule$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.addMoreButtonUnderSchedule,10000);
    action.clickElement(newDIDConfigurationPage.addMoreButtonUnderSchedule);
})

Then(/^a schedule time modal window appears in DID configuration$/, function () {
    let scheduleTimePickerModalWindowDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.scheduleTimePickerModal, 10000);
    chai.expect(scheduleTimePickerModalWindowDisplayStatus).to.be.true;
})

Then(/^the modal contains drop-down boxes for the start time and end time, and Save & Cancel buttons$/, function () {
    let startTimeDropdownDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.scheduleStartTimeDropdown, 10000);
    chai.expect(startTimeDropdownDisplayStatus).to.be.true;
    let endTimeDropdownDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.scheduleEndTimeDropdown, 10000);
    chai.expect(endTimeDropdownDisplayStatus).to.be.true;
    let saveButtonOnModalDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.saveButtonOnScheduleTimePickerModal, 10000);
    chai.expect(saveButtonOnModalDisplayStatus).to.be.true;
    let cancelButtonOnModalDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.cancelButtonOnScheduleTimePickerModal, 10000);
    chai.expect(cancelButtonOnModalDisplayStatus).to.be.true;
})

Then(/^the drop downs contain a list of times in 15minute increments from 00:00 to 23:59$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.scheduleStartTimeDropdown, 10000);
    let startTimeDropdownTimeValues = action.getElementText(newDIDConfigurationPage.scheduleStartTimeDropdown);
    let endTimeDropdownTimeValues = action.getElementText(newDIDConfigurationPage.scheduleEndTimeDropdown);
    let timeArray = [];
    let startTime = "00:15:00";
    let endTime = "23:59:00";
    // Convert start and end time to Date objects
    let startDate = new Date("2000-01-01 " + startTime);
    let endDate = new Date("2000-01-01 " + endTime);
    // Time difference
    let delta = 15 * 60 * 1000; // 15 minutes in milliseconds
    // Generate time values
    let currentTime = startDate;
    while (currentTime <= endDate) {
        timeArray.push(currentTime.toTimeString().slice(0, 8));
        currentTime = new Date(currentTime.getTime() + delta);
    }
    let numberOfTimeValues = timeArray.length;
    for (let i = 0; i < numberOfTimeValues; i++) {
        chai.expect(startTimeDropdownTimeValues).to.includes(timeArray[i]);
        chai.expect(endTimeDropdownTimeValues).to.includes(timeArray[i]);
    }
})

When(/^has selected start time "(.*)" and end time "(.*)" on the schedule-edit modal$/, function (startTime,endTime) {
    action.isVisibleWait(newDIDConfigurationPage.saveButtonOnScheduleTimePickerModal, 10000);
    action.selectTextFromDropdown(newDIDConfigurationPage.scheduleStartTimeDropdown,startTime);
    action.selectTextFromDropdown(newDIDConfigurationPage.scheduleEndTimeDropdown,endTime);
})

When(/^has clicked the SAVE button on schedule time modal$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.saveButtonOnScheduleTimePickerModal, 10000);
    action.clickElement(newDIDConfigurationPage.saveButtonOnScheduleTimePickerModal);
})

Then(/^the schedule time modal window closes in DID configuration$/, function () {
    let scheduleTimePickerModalWindowDisplayStatus = action.isNotVisibleWait(newDIDConfigurationPage.scheduleTimePickerModal, 2000);
    chai.expect(scheduleTimePickerModalWindowDisplayStatus).to.be.false;
})

Then(/^the selected start time "(.*)" and end time "(.*)" is reflected in the table for that day$/, function (startTime,endTime) {
    action.isVisibleWait(newDIDConfigurationPage.startEndTimeValueInScheduleTable,10000);
    let startEndTimeValuesInTable = action.getElementText(newDIDConfigurationPage.startEndTimeValueInScheduleTable);
    let startEndTimeExpected = startTime.slice(0,5) + " - " + endTime.slice(0,5);
    chai.expect(startEndTimeValuesInTable).to.equal(startEndTimeExpected);
})

When(/^has clicked the CANCEL button on schedule time modal$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.cancelButtonOnScheduleTimePickerModal, 10000);
    action.clickElement(newDIDConfigurationPage.cancelButtonOnScheduleTimePickerModal);
})

Then(/^the schedule for that day remains unchanged$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.startEndTimeValueInScheduleTable,10000);
    let startEndTimeValuesInTable = action.getElementText(newDIDConfigurationPage.startEndTimeValueInScheduleTable);
    chai.expect(startEndTimeValuesInTable).to.equal("No schedules set...");
})

When(/^there is an x icon displayed next to each Time Block row$/, function () {
    let xIconInScheduleTableDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.xIconInScheduleTable, 10000);
    chai.expect(xIconInScheduleTableDisplayStatus).to.be.true;
})

When(/^the admin clicks on the x icon in the schedule table$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.xIconInScheduleTable, 10000);
    action.clickElement(newDIDConfigurationPage.xIconInScheduleTable);
})

Then(/^the Time Block is removed from the table$/, function () {
    let noSchedulesSetMessageDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.noSchedulesSetMessage, 10000);
    chai.expect(noSchedulesSetMessageDisplayStatus).to.be.true;
})

Then(/^a feedback message is displayed: Time block deleted$/, function () {
    let timeBlockDeletedMessageDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.timeBlockDeletedFeedbackMessage, 10000);
    chai.expect(timeBlockDeletedMessageDisplayStatus).to.be.true;
})

When(/^the admin has clicked the Edit icon beside a language option$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.editIconBesideLanguageOption, 10000);
    action.clickElement(newDIDConfigurationPage.editIconBesideLanguageOption);
})

Then(/^from out of nowhere, a modal window for Edit Language magically appears!$/, function () {
    let editLanguageModalDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.editLanguageModalPopup, 10000);
    chai.expect(editLanguageModalDisplayStatus).to.be.true;
})

Then(/^the Edit Language modal contains a drop-down with a list of languages$/, function () {
    let languageDropdownDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.languageDropdownOnEditLanguageModal, 10000);
    chai.expect(languageDropdownDisplayStatus).to.be.true;
})

Then(/^the Edit Language modal contains Save & Cancel buttons$/, function () {
    let saveButtonOnEditLanguageModalDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.saveButtonOnEditLanguageModal, 10000);
    chai.expect(saveButtonOnEditLanguageModalDisplayStatus).to.be.true;
    let cancelButtonOnEditLanguageModalDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.cancelButtonOnEditLanguageModal, 10000);
    chai.expect(cancelButtonOnEditLanguageModalDisplayStatus).to.be.true;
})

When(/^has selected a language "(.*)" form Language Name drop-down in Edit Language modal$/, function (languageName) {
    action.isVisibleWait(newDIDConfigurationPage.languageDropdownOnEditLanguageModal, 10000);
    action.selectTextFromDropdown(newDIDConfigurationPage.languageDropdownOnEditLanguageModal, languageName);
})

When(/^has clicked the SAVE button in Edit Language modal$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.saveButtonOnEditLanguageModal, 10000);
    action.clickElement(newDIDConfigurationPage.saveButtonOnEditLanguageModal);
})

Then(/^the modal window for Edit Language closes$/, function () {
    let editLanguageModalDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.editLanguageModalPopup, 10000);
    chai.expect(editLanguageModalDisplayStatus).to.be.true;
})

Then(/^the table now reflects the selected language "(.*)" for the keypad option$/, function (languageName) {
    action.isVisibleWait(newDIDConfigurationPage.languageSelectedTextInLanguageOptionsTable, 10000);
    let languageSelectedTextActual = action.getElementText(newDIDConfigurationPage.languageSelectedTextInLanguageOptionsTable, 10000);
    chai.expect(languageSelectedTextActual).to.equal(languageName);
})

When(/^has clicked the CANCEL button in Edit Language modal$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.cancelButtonOnEditLanguageModal, 10000);
    action.clickElement(newDIDConfigurationPage.cancelButtonOnEditLanguageModal);
})

Then(/^the keypad option remains unchanged$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.languageSelectedTextInLanguageOptionsTable, 10000);
    let languageSelectedTextActual = action.getElementText(newDIDConfigurationPage.languageSelectedTextInLanguageOptionsTable, 10000);
    chai.expect(languageSelectedTextActual).to.equal("");
})