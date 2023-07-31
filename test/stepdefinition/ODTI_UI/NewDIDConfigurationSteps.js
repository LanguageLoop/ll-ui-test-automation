Then(/^the user is navigated to the DID Configuration Details screen$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.equal("New DID Configuration");
})

When(/^a blank form is shown in New DID Configuration$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.didNumberInputTextBox,10000, "DID number Input Text box in New DID Configuration page");
    let didNumberOrigValue = action.getElementAttribute(newDIDConfigurationPage.didNumberInputTextBox,"origvalue", "DID number Input Text box in New DID Configuration page");
    chai.expect(didNumberOrigValue).to.equal("");
})

When(/^a copy of the existing DID configuration is shown upon clicking duplicate$/, function () {
    let existingDIDConfigurationDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.existingDIDConfiguration,10000, "Existing DID Configuration in New DID Configuration page");
    chai.expect(existingDIDConfigurationDisplayStatus).to.be.true;
})

When(/^the DID is blank in existing DID configuration upon clicking duplicate$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.didNumberInputTextBox,10000, "DID number Input Text Box in New DID Configuration page");
    let didNumberOrigValue = action.getElementAttribute(newDIDConfigurationPage.didNumberInputTextBox,"origvalue", "DID number Input Text Box in New DID Configuration page");
    chai.expect(didNumberOrigValue).to.equal("");
})

When(/^has selected the TI Service Type "(.*)" in DID configuration$/, function (serviceType) {
    action.isVisibleWait(newDIDConfigurationPage.tiServiceTypeDropdown,10000, "TI Service Type Dropdown in New DID Configuration page");
    action.selectTextFromDropdown(newDIDConfigurationPage.tiServiceTypeDropdown,serviceType, "TI Service Type Dropdown in New DID Configuration page");
})

When(/^has typed in a Campus PIN "(.*)" in DID configuration$/, function (campusPin) {
    action.isVisibleWait(newDIDConfigurationPage.campusPinInputTextBox, 10000, "Campus Pin Input Text Box in New DID Configuration page");
    action.enterValue(newDIDConfigurationPage.campusPinInputTextBox,campusPin, "Campus Pin Input Text Box in New DID Configuration page");
})

Then(/^the PIN is searched in DID configuration$/, function () {
    let searchedCampusResultDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.campusNameBelowInputTextBox, 10000, "Campus Name Below Input TextBox in New DID Configuration page");
    chai.expect(searchedCampusResultDisplayStatus).to.be.true;
})

Then(/^the Campus name "(.*)" is displayed below the input box in DID configuration$/, function (campusName) {
    let campusNameTextBelowInputBox = action.getElementText(newDIDConfigurationPage.campusNameBelowInputTextBox, "Campus Name Below Input TextBox in New DID Configuration page");
    chai.expect(campusNameTextBelowInputBox).to.equal(campusName);
})

Then(/^the MILS configuration section is hidden$/, function () {
    let milsConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.milsConfigurationSection, 10000, "MILS Configuration section in New DID Configuration steps");
    chai.expect(milsConfigurationSectionDisplayStatus).to.be.false;
})

Then(/^the TIXP configuration section is displayed$/, function () {
    let tixpConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.tixpConfigurationSection, 10000, "TIXP configuration section in New DID Configuration page");
    chai.expect(tixpConfigurationSectionDisplayStatus).to.be.true;
})

Then(/^the MILS configuration section is displayed$/, function () {
    let milsConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.milsConfigurationSection, 10000, "MILS Configuration section in New DID Configuration steps");
    chai.expect(milsConfigurationSectionDisplayStatus).to.be.true;
})

Then(/^the TIXP configuration section is hidden$/, function () {
    let tixpConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.tixpConfigurationSection, 10000, "TIXP configuration section in New DID Configuration page");
    chai.expect(tixpConfigurationSectionDisplayStatus).to.be.false;
})

Then(/^the MILS and TIXP configuration sections are not shown/, function () {
    let milsConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.milsConfigurationSection, 10000, "MILS Configuration section in New DID Configuration steps");
    chai.expect(milsConfigurationSectionDisplayStatus).to.be.false;
    let tixpConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.tixpConfigurationSection, 10000, "TIXP configuration section in New DID Configuration page");
    chai.expect(tixpConfigurationSectionDisplayStatus).to.be.false;
})

When(/^the user has clicked the CANCEL button in DID configuration$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.cancelButton,10000, "Cancel button in New DID Configuration page");
    action.clickElement(newDIDConfigurationPage.cancelButton, "Cancel button in New DID Configuration page");
})

Then(/^the data entered is not saved in DID configuration$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.not.includes("New DID Configuration");
})

When(/^the admin has clicked the Add More icon under the day-schedule$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.addMoreButtonUnderSchedule,10000, "Add More Button under schedule in New DID Configuration page");
    action.clickElement(newDIDConfigurationPage.addMoreButtonUnderSchedule, "Add More Button under schedule in New DID Configuration page");
})

Then(/^a schedule time modal window appears in DID configuration$/, function () {
    let scheduleTimePickerModalWindowDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.scheduleTimePickerModal, 10000, "Schedule Time Picker Modal in New DID Configuration page");
    chai.expect(scheduleTimePickerModalWindowDisplayStatus).to.be.true;
})

Then(/^the modal contains drop-down boxes for the start time and end time, and Save & Cancel buttons$/, function () {
    let startTimeDropdownDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.scheduleStartTimeDropdown, 10000, "Schedule Start Time dropdown in New DID Configuration page");
    chai.expect(startTimeDropdownDisplayStatus).to.be.true;
    let endTimeDropdownDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.scheduleEndTimeDropdown, 10000, "Schedule End Time dropdown in New DID Configuration page");
    chai.expect(endTimeDropdownDisplayStatus).to.be.true;
    let saveButtonOnModalDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.saveButtonOnScheduleTimePickerModal, 10000, "Save button on Schedule Time Picker Modal in New DID Configuration page");
    chai.expect(saveButtonOnModalDisplayStatus).to.be.true;
    let cancelButtonOnModalDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.cancelButtonOnScheduleTimePickerModal, 10000, "Cancel button on Schedule Time Picker Modal in New DID Configuration page");
    chai.expect(cancelButtonOnModalDisplayStatus).to.be.true;
})

Then(/^the drop downs contain a list of times in 15minute increments from 00:00 to 23:59$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.scheduleStartTimeDropdown, 10000, "Schedule Start Time dropdown in New DID Configuration page");
    let startTimeDropdownTimeValues = action.getElementText(newDIDConfigurationPage.scheduleStartTimeDropdown, "Schedule Start Time dropdown in New DID Configuration page");
    let endTimeDropdownTimeValues = action.getElementText(newDIDConfigurationPage.scheduleEndTimeDropdown, "Schedule End Time dropdown in New DID Configuration page");
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
    action.isVisibleWait(newDIDConfigurationPage.saveButtonOnScheduleTimePickerModal, 10000, "Save button on Schedule Time Picker Modal in New DID Configuration page");
    action.selectTextFromDropdown(newDIDConfigurationPage.scheduleStartTimeDropdown,startTime, "Schedule Start Time dropdown in New DID Configuration page");
    action.selectTextFromDropdown(newDIDConfigurationPage.scheduleEndTimeDropdown,endTime,"Schedule End Time dropdown in New DID Configuration page");
})

When(/^has clicked the SAVE button on schedule time modal$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.saveButtonOnScheduleTimePickerModal, 10000, "Save button on Schedule Time Picker Modal in New DID Configuration page");
    action.clickElement(newDIDConfigurationPage.saveButtonOnScheduleTimePickerModal, "Save button on Schedule Time Picker Modal in New DID Configuration page");
})

Then(/^the schedule time modal window closes in DID configuration$/, function () {
    let scheduleTimePickerModalWindowDisplayStatus = action.isNotVisibleWait(newDIDConfigurationPage.scheduleTimePickerModal, 2000, "Schedule Time picker modal in New DID Configuration page");
    chai.expect(scheduleTimePickerModalWindowDisplayStatus).to.be.false;
})

Then(/^the selected start time "(.*)" and end time "(.*)" is reflected in the table for that day$/, function (startTime,endTime) {
    action.isVisibleWait(newDIDConfigurationPage.startEndTimeValueInScheduleTable,10000, "Start End Time value in Schedule table in New DID Configuration page");
    let startEndTimeValuesInTable = action.getElementText(newDIDConfigurationPage.startEndTimeValueInScheduleTable, "Start End Time value in Schedule table in New DID Configuration page");
    let startEndTimeExpected = startTime.slice(0,5) + " - " + endTime.slice(0,5);
    chai.expect(startEndTimeValuesInTable).to.equal(startEndTimeExpected);
})

When(/^has clicked the CANCEL button on schedule time modal$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.cancelButtonOnScheduleTimePickerModal, 10000, "Cancel button on Schedule Time Picker Modal in New DID Configuration page");
    action.clickElement(newDIDConfigurationPage.cancelButtonOnScheduleTimePickerModal, "Cancel button on Schedule Time Picker Modal in New DID Configuration page");
})

Then(/^the schedule for that day remains unchanged$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.startEndTimeValueInScheduleTable,10000, "Start End Time value in Schedule table in New DID Configuration page");
    let startEndTimeValuesInTable = action.getElementText(newDIDConfigurationPage.startEndTimeValueInScheduleTable, "Start End Time value in Schedule table in New DID Configuration page");
    chai.expect(startEndTimeValuesInTable).to.equal("No schedules set...");
})

When(/^there is an x icon displayed next to each Time Block row$/, function () {
    let xIconInScheduleTableDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.xIconInScheduleTable, 10000, "X icon in schedule table in New DID Configuration page");
    chai.expect(xIconInScheduleTableDisplayStatus).to.be.true;
})

When(/^the admin clicks on the x icon in the schedule table$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.xIconInScheduleTable, 10000, "X icon in schedule table in New DID Configuration page");
    action.clickElement(newDIDConfigurationPage.xIconInScheduleTable, "X icon in schedule table in New DID Configuration page");
    action.isNotVisibleWait(newDIDConfigurationPage.xIconInScheduleTable, 10000, "X icon in schedule table in New DID Configuration page");
})

Then(/^the Time Block is removed from the table$/, function () {
    let noSchedulesSetMessageDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.noSchedulesSetMessage, 10000, "No schedules set message in New DID Configuration page");
    chai.expect(noSchedulesSetMessageDisplayStatus).to.be.true;
})

Then(/^a feedback message is displayed: Time block deleted$/, function () {
    let timeBlockDeletedMessageDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.timeBlockDeletedFeedbackMessage, 10000, "Time block deleted feedback message in New DID Configuration page");
    chai.expect(timeBlockDeletedMessageDisplayStatus).to.be.true;
})

When(/^the admin has clicked the Edit icon beside a language option$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.editIconBesideLanguageOption, 10000, "Edit icon beside language option in New DID Configuration page");
    action.clickElement(newDIDConfigurationPage.editIconBesideLanguageOption, "Edit icon beside language option in New DID Configuration page");
})

Then(/^from out of nowhere, a modal window for Edit Language magically appears!$/, function () {
    let editLanguageModalDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.editLanguageModalPopup, 10000, "Edit language modal popup in New DID Configuration page");
    chai.expect(editLanguageModalDisplayStatus).to.be.true;
})

Then(/^the Edit Language modal contains a drop-down with a list of languages$/, function () {
    let languageDropdownDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.languageDropdownOnEditLanguageModal, 10000, "Language dropdown on edit language modal in New DID Configuration page");
    chai.expect(languageDropdownDisplayStatus).to.be.true;
})

Then(/^the Edit Language modal contains Save & Cancel buttons$/, function () {
    let saveButtonOnEditLanguageModalDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.saveButtonOnEditLanguageModal, 10000, "Save button on edit language modal in New DID Configuration page");
    chai.expect(saveButtonOnEditLanguageModalDisplayStatus).to.be.true;
    let cancelButtonOnEditLanguageModalDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.cancelButtonOnEditLanguageModal, 10000, "Cancel button on edit language modal in New DID Configuration page");
    chai.expect(cancelButtonOnEditLanguageModalDisplayStatus).to.be.true;
})

When(/^has selected a language "(.*)" form Language Name drop-down in Edit Language modal$/, function (languageName) {
    action.isVisibleWait(newDIDConfigurationPage.languageDropdownOnEditLanguageModal, 10000, "Language dropdown on edit language modal in New DID Configuration page");
    action.selectTextFromDropdown(newDIDConfigurationPage.languageDropdownOnEditLanguageModal, languageName, "Language dropdown on edit language modal in New DID Configuration page");
})

When(/^has clicked the SAVE button in Edit Language modal$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.saveButtonOnEditLanguageModal, 10000, "Save button on edit language modal in New DID Configuration page");
    action.clickElement(newDIDConfigurationPage.saveButtonOnEditLanguageModal, "Save button on edit language modal in New DID Configuration page");
})

Then(/^the modal window for Edit Language closes$/, function () {
    let editLanguageModalDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.editLanguageModalPopup, 10000, "Edit language modal popup in New DID Configuration page");
    chai.expect(editLanguageModalDisplayStatus).to.be.true;
})

Then(/^the table now reflects the selected language "(.*)" for the keypad option$/, function (languageName) {
    action.isVisibleWait(newDIDConfigurationPage.languageSelectedTextInLanguageOptionsTable, 10000, "Language selected text in language options table in New DID Configuration page");
    let languageSelectedTextActual = action.getElementText(newDIDConfigurationPage.languageSelectedTextInLanguageOptionsTable, 10000, "Language selected text in language options table in New DID Configuration page");
    chai.expect(languageSelectedTextActual).to.equal(languageName);
})

When(/^has clicked the CANCEL button in Edit Language modal$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.cancelButtonOnEditLanguageModal, 10000, "Cancel button on edit language modal in New DID Configuration page");
    action.clickElement(newDIDConfigurationPage.cancelButtonOnEditLanguageModal, "Cancel button on edit language modal in New DID Configuration page");
})

Then(/^the keypad option remains unchanged$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.languageSelectedTextInLanguageOptionsTable, 10000, "Language selected text in language options table in New DID Configuration page");
    let languageSelectedTextActual = action.getElementText(newDIDConfigurationPage.languageSelectedTextInLanguageOptionsTable, "Language selected text in language options table in New DID Configuration page");
    chai.expect(languageSelectedTextActual).to.equal("");
})

When(/^the user enters the same DID number "(.*)" that already exists$/, function (DIDNumber) {
    action.isVisibleWait(newDIDConfigurationPage.didNumberInputTextBox, 10000, "DID number input text box in New DID Configuration page");
    action.enterValue(newDIDConfigurationPage.didNumberInputTextBox, DIDNumber, "DID number input text box in New DID Configuration page");
})

When(/^the user has filled in all the required data "(.*)", "(.*)", "(.*)", "(.*)" in New DID Configuration$/, function (welcomeAudioFileName, closedAudioFileName, languageAudioFile, timezone) {
    action.isVisibleWait(newDIDConfigurationPage.welcomeAudioFileNameTextBox, 10000, "Welcome Audio filename text box in New DID  Configuration page");
    action.enterValue(newDIDConfigurationPage.welcomeAudioFileNameTextBox, welcomeAudioFileName, "Welcome Audio filename text box in New DID  Configuration page");
    action.enterValue(newDIDConfigurationPage.closedAudioFileNameTextBox, closedAudioFileName, "Closed Audio filename text box in New DID  Configuration page");
    action.enterValue(newDIDConfigurationPage.languageAudioFileNameTextBox, languageAudioFile, "Language Audio filename text box in New DID  Configuration page");
    action.selectTextFromDropdown(newDIDConfigurationPage.timezoneDropdown, timezone, "Time zone dropdown in New DID Configuration page");
})

When(/^has clicked the SAVE button in New DID Configuration page$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.saveButtonOnNewDIDConfiguration, 10000, "Save button in New DID Configuration page");
    action.clickElement(newDIDConfigurationPage.saveButtonOnNewDIDConfiguration, "Save button in New DID Configuration page");
})

Then(/^the error text message Duplicate phone number exists! is displayed$/, function () {
    let duplicateNumberErrorMessageDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.duplicatePhoneNumberExistsErrorMessage, 10000, "Duplicate phone number exists error message in New DOD Configuration page");
    chai.expect(duplicateNumberErrorMessageDisplayStatus).to.be.true;
})

When(/^the user enters the same time block with weekdays "(.*)" that comes in the same time block and same days which already exists$/, function (weekdays) {
    let weekdaysList = weekdays.split(",");
    for (let i = 0; i < weekdaysList.length; i++) {
        let weekdayCheckbox = $(newDIDConfigurationPage.weekdaysCheckboxOnTimePickerModalDynamicLocator.replace("<dynamic>", weekdaysList[i]));
        action.isVisibleWait(weekdayCheckbox, 10000, "Weekday checkbox in New DID Configuration page");
        action.clickElement(weekdayCheckbox, "Weekday checkbox in New DID Configuration page");
    }
})

Then(/^the error text message Time block overlaps with another time block is displayed$/, function () {
    let blockOverlapsErrorFeedbackMessageDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.blockOverlapsErrorFeedbackMessage, 10000, "Block overlaps error feedback message in New DID Configuration page");
    chai.expect(blockOverlapsErrorFeedbackMessageDisplayStatus).to.be.true;
})

Then(/^they see the new schedule table "(.*)" instead of the old one$/, function (tableHeaders) {
    let newTableHeadersList = tableHeaders.split(",");
    action.isVisibleWait(newDIDConfigurationPage.scheduleTableHeader, 10000, "Schedule table header in New DID Configuration page");
    let scheduleTableHeaderTextActual = action.getElementText(newDIDConfigurationPage.scheduleTableHeader, "Schedule table header in New DID Configuration page");
    newTableHeadersList.forEach(function (header) {
        chai.expect(scheduleTableHeaderTextActual).to.includes(header);
    });
})

Then(/^an Add More button is shown under the schedule table$/, function () {
    let addMoreButtonDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.addMoreButtonUnderSchedule,10000, "Add more button under schedule in New DID Configuration page");
    chai.expect(addMoreButtonDisplayStatus).to.be.true;
})

Then(/^the times are displayed in 24hr format in schedule time modal$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.scheduleStartTimeDropdown, 10000, "Schedule Start Time dropdown in New DID Configuration page");
    let startTimeDropdownTimeValues = action.getElementText(newDIDConfigurationPage.scheduleStartTimeDropdown, "Schedule Start Time dropdown in New DID Configuration page");
    let endTimeDropdownTimeValues = action.getElementText(newDIDConfigurationPage.scheduleEndTimeDropdown, "Schedule Start Time dropdown in New DID Configuration page");
    chai.expect(startTimeDropdownTimeValues).to.includes("23:59:00");
    chai.expect(endTimeDropdownTimeValues).to.includes("23:59:00")
})

When(/^a time block can apply to 1 or more week days "(.*)"$/, function (weekdays) {
    let weekdaysList = weekdays.split(",");
    for (let i = 0; i < weekdaysList.length; i++) {
        let weekdayCheckbox = $(newDIDConfigurationPage.weekdaysCheckboxOnTimePickerModalDynamicLocator.replace("<dynamic>", weekdaysList[i]));
        action.isVisibleWait(weekdayCheckbox, 10000, "Week day checkbox in New DID Configuration page");
        action.clickElement(weekdayCheckbox, "Week day checkbox in New DID Configuration page");
    }
})

Then(/^a time block must be 30 min plus duration$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.saveButtonOnScheduleTimePickerModal, 10000, "Save button on schedule time picker modal in New DID Configuration page");
    action.clickElement(newDIDConfigurationPage.saveButtonOnScheduleTimePickerModal, "Save button on schedule time picker modal in New DID Configuration page");
    let thirtyMinMinimumTimeBlockErrorDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.thirtyMinMinimumTimeBlockError,10000, "Thirty min minimum time block error in New DID Configuration page");
    chai.expect(thirtyMinMinimumTimeBlockErrorDisplayStatus).to.be.true;
})

Then(/^a time block can be set to BH or AH$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.businessHoursCheckbox, 10000, "Business Hours Checkbox in New DID Configuration page");
    action.clickElement(newDIDConfigurationPage.businessHoursCheckbox, "Business Hours Checkbox in New DID Configuration page");
})

Then(/^fetches the schedule table text$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.scheduleTableBody,10000, "Schedule table body in New DID Configuration page");
    GlobalData.DID_SCHEDULE_TABLE_TEXT = action.getElementText(newDIDConfigurationPage.scheduleTableBody, "Schedule table body in New DID Configuration page");
})

Then(/^no changes are saved in the schedule$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.scheduleTableBody,10000,"Schedule table body in New DID Configuration page");
    let didScheduleTableTextAfterCancel = action.getElementText(newDIDConfigurationPage.scheduleTableBody, "Schedule table body in New DID Configuration page");
    chai.expect(GlobalData.DID_SCHEDULE_TABLE_TEXT).to.equal(didScheduleTableTextAfterCancel);
})

Then(/^the new time block "(.*)","(.*)" is added to the table$/, function (startTime,endTime) {
    let startEndTimeExpected = startTime.slice(0,5) + " - " + endTime.slice(0,5);
    browser.waitUntil(() =>
        action.getElementText(newDIDConfigurationPage.scheduleTableBody,"Schedule table body in New DID Configuration page").includes(startEndTimeExpected),{
        timeout: 10000,
        timeoutMsg: 'expected text to include expected time after 10s',
        interval: 1000
    })
    let didScheduleTableBody = action.getElementText(newDIDConfigurationPage.scheduleTableBody, "Schedule table body in New DID Configuration page");
    chai.expect(didScheduleTableBody).to.includes(startEndTimeExpected);
})

Then(/^Is Business Hours is displayed with a tick$/, function () {
    let rowsCount = newDIDConfigurationPage.scheduleTableBodyRowsCount;
    for (let row = 1; row <= rowsCount; row++) {
        let isBusinessHoursCheckBox = $(newDIDConfigurationPage.isBusinessHoursCheckedDynamicLocator.replace("<dynamic>",row.toString()));
        let isBusinessHoursCheckedDisplayStatus = action.isVisibleWait(isBusinessHoursCheckBox,10000, "Is Business hours checkbox in New DID Configuration page");
        chai.expect(isBusinessHoursCheckedDisplayStatus).to.be.true;
    }
})

Then(/^the table is sorted by Start time earliest time at the top$/, function () {
    let rowsCount = newDIDConfigurationPage.scheduleTableBodyRowsCount;
    let startTimeListSorted = [];
    for (let row = 1; row <= rowsCount; row++) {
        let startEndTimeElement = $(newDIDConfigurationPage.startEndTimeDynamicLocator.replace("<dynamic>",row.toString()));
        let startEndTimeText = action.getElementText(startEndTimeElement, "Start end time element in New DID Configuration page");
        let startTimeValue  = startEndTimeText.split(" - ")[0].replace(":","");
        startTimeListSorted.push(startTimeValue);
    }
    let startTimeListActual = [...startTimeListSorted];
    startTimeListSorted.sort(function (a, b) {
        return a - b
    });
    chai.expect(startTimeListActual).to.have.ordered.members(startTimeListSorted);
})

Then(/^the user will remain on the Schedule Time Picker popup$/, function () {
    let scheduleTimePickerModalWindowDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.scheduleTimePickerModal, 10000, "Schedule time picker modal in New DID Configuration page");
    chai.expect(scheduleTimePickerModalWindowDisplayStatus).to.be.true;
})

Then(/^that time block "(.*)","(.*)" is deleted$/, function (startTime,endTime) {
    let startEndTimeExpected = startTime.slice(0,5) + " - " + endTime.slice(0,5);
    action.isVisibleWait(newDIDConfigurationPage.scheduleTableBody,10000, "Schedule table body in New DID Configuration page");
    let didScheduleTableTextAfterDelete = action.getElementText(newDIDConfigurationPage.scheduleTableBody, "Schedule table body in New DID Configuration page");
    chai.expect(didScheduleTableTextAfterDelete).to.not.includes(startEndTimeExpected);
})

Then(/^the Default Configuration Panel should display$/, function () {
    let defaultConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.defaultConfigurationSection, 10000, "Default Configuration Panel in New DID Configuration page");
    chai.expect(defaultConfigurationSectionDisplayStatus).to.be.true;
})

Then(/^all four options "(.*)" should be enabled in Default Configuration$/, function (configurationToggles) {
    let configurationTogglesList = configurationToggles.split(",")
    for (let index = 0; index < configurationTogglesList.length; index++) {
        let configurationToggleElement = $(newDIDConfigurationPage.configurationToggleCheckboxLocator.replace("<dynamic>", configurationTogglesList[index]));
        let toggleOriginalValue = action.getElementAttribute(configurationToggleElement, "origvalue", "Toggle option " + configurationTogglesList[index] + " in New DID Configuration page");
        chai.expect(toggleOriginalValue).to.equal("true");
    }
})