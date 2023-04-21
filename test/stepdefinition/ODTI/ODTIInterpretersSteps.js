When(/^they are navigated to the ODTI page$/, function () {
    let pageTitleActual = action.getPageTitle()
    chai.expect(pageTitleActual).to.includes("ODTI");
})

Then(/^they will see the ODTI Interpreters page by default$/, function () {
    let ODTIInterpretersPageOption = $(ODTIInterpretersPage.ODTIJobsSwitchDropdownOptionLocator.replace("<dynamic>", "ODTI Interpreters"));
    let InterpretersPageSelectedStatus = action.isSelectedWait(ODTIInterpretersPageOption, 10000);
    chai.expect(InterpretersPageSelectedStatus).to.be.true;
})

Then(/^they will see a dropdown to switch to the ODTI Jobs page$/, function () {
    let ODTIJobsSwitchDropdownDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTIJobsSwitchDropdown, 10000);
    chai.expect(ODTIJobsSwitchDropdownDisplayStatus).to.be.true;
})

Then(/^they will see a dropdown to select Language$/, function () {
    let ODTILanguageSwitchDropdownDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTILanguageSwitchDropdown, 10000);
    chai.expect(ODTILanguageSwitchDropdownDisplayStatus).to.be.true;
})

Then(/^they will a dropdown to select Logon Status with label Any - LogOn Status$/, function () {
    let ODTILogonStatusDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTILogonStatusDropdown, 10000);
    chai.expect(ODTILogonStatusDisplayStatus).to.be.true;
    let ODTILogonStatusDropdownLabelDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTILogonStatusDropdownLabel, 10000);
    chai.expect(ODTILogonStatusDropdownLabelDisplayStatus).to.be.true;
})

Then(/^they will see a language searchable dropdown$/, function () {
    action.isVisibleWait(ODTIInterpretersPage.ODTILanguageSwitchDropdown, 10000);
    action.clickElement(ODTIInterpretersPage.ODTILanguageSwitchDropdown);
    let languageDropdownSearchBoxDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.languageDropdownSearchBox, 10000);
    chai.expect(languageDropdownSearchBoxDisplayStatus).to.be.true;
})

Then(/^the label will be: Language$/, function () {
    let languageDropdownLanguageLabelElement = $(ODTIInterpretersPage.ODTILanguageDropdownLabel.replace("<dynamic>", "- Language -"));
    let languageDropdownLabelDisplayStatus = action.isVisibleWait(languageDropdownLanguageLabelElement, 10000);
    chai.expect(languageDropdownLabelDisplayStatus).to.be.true;
})

Then(/^the user will be able to search for a language "(.*)"$/, function (language) {
    browser.refresh();
    if (action.isVisibleWait(ODTIInterpretersPage.languageDropdownSearchBox, 5000) === false) {
        action.clickElement(ODTIInterpretersPage.ODTILanguageSwitchDropdown);
    }
    action.enterValueAndPressReturn(ODTIInterpretersPage.languageDropdownSearchBox, language);
})

Then(/^the user will be able to select a single Language "(.*)"$/, function (language) {
    let languageSelectedElement = $(ODTIInterpretersPage.ODTILanguageDropdownLabel.replace("<dynamic>", language));
    let languageSelectedDisplayStatus = action.isVisibleWait(languageSelectedElement, 10000);
    chai.expect(languageSelectedDisplayStatus).to.be.true;
})

Then(/^the label will be: Any-LogOn Status$/, function () {
    let logonStatusDropdownLabelElement = $(ODTIInterpretersPage.logonStatusDropdownOptionLabel.replace("<dynamic>", "Any - LogOn Status"));
    let logonStatusDropdownLabelSelectedStatus = action.isSelectedWait(logonStatusDropdownLabelElement, 10000);
    chai.expect(logonStatusDropdownLabelSelectedStatus).to.be.true;
})

Then(/^the user will be able to select status for the selected language using options "(.*)"$/, function (logonStatus) {
    action.isVisibleWait(ODTIInterpretersPage.ODTILogonStatusDropdown);
    let logonStatusListOptions = logonStatus.split(",");
    for (let index = 0; index < logonStatusListOptions.length; index++) {
        action.selectTextFromDropdown(ODTIInterpretersPage.ODTILogonStatusDropdown, logonStatusListOptions[index]);
        let logonStatusDropdownLabelElement = $(ODTIInterpretersPage.logonStatusDropdownOptionLabel.replace("<dynamic>", logonStatusListOptions[index]));
        let logonStatusDropdownLabelSelectedStatus = action.isSelectedWait(logonStatusDropdownLabelElement, 10000);
        chai.expect(logonStatusDropdownLabelSelectedStatus).to.be.true;
    }
})

Then(/^the table will appear$/, function () {
    let ODTIInterpretersResultsTableDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTIInterpretersResultsTable,10000);
    chai.expect(ODTIInterpretersResultsTableDisplayStatus).to.be.true;
})

Then(/^show only interpreters "(.*)" with that Language$/, function (interpreters) {
    browser.pause(5000);
    let interpretersList = interpreters.split(",");
    let ODTIInterpretersResultsTableTextActual = action.getElementText(ODTIInterpretersPage.ODTIInterpretersResultsTableBody);
    for (let index = 0; index < interpretersList.length; index++) {
        chai.expect(ODTIInterpretersResultsTableTextActual).to.includes(interpretersList[index]);
    }
})

Then(/^show only interpreters with selected Language and the LogOn Status "(.*)" containing "(.*)" status$/, function (columnNumber,logonStatus) {
    browser.pause(5000);
    let logonStatusList = logonStatus.split(",");
    let logonStatusActual = [];
    let totalRowsCount = ODTIInterpretersPage.interpreterResultRowsCount;
    for (let row = 1; row <= totalRowsCount; row++) {
        let columnValueElement = $(ODTIInterpretersPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", row.toString()).replace("<dynamicColumnNumber>", columnNumber.toString()));
        let actualColumnValue = action.getElementText(columnValueElement);
        logonStatusActual.push(actualColumnValue);
    }
    chai.expect(logonStatusActual).to.include.members(logonStatusList);
})

Then(/^the table will have the following columns: "(.*)"$/, function (expectedColumns) {
    let columnsList = expectedColumns.split(",");
    let ODTIInterpretersTableColumnsActual = action.getElementText(ODTIInterpretersPage.interpreterColumnHeaders);
    for (let index = 0; index < columnsList.length; index++) {
        chai.expect(ODTIInterpretersTableColumnsActual).to.includes(columnsList[index]);
    }
})

Then(/^the data will be displayed under each column as per the mockup$/, function () {
    let ODTITableDataDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTIInterpretersResultsTableBody,10000);
    chai.expect(ODTITableDataDisplayStatus).to.be.true;
})

Then(/^Name will be hyperlinked to the Contractor profile$/, function () {
    browser.pause(5000);
    let columnValueElement = $(ODTIInterpretersPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "2"));
    let actualContractorNameHTML = action.getElementHTML(columnValueElement);
    chai.expect(actualContractorNameHTML).to.includes("<a ");
    chai.expect(actualContractorNameHTML).to.includes("href");
})

Then(/^it will show the NAATI Level for that Language or Contractor$/, function () {
    browser.pause(5000);
    let interpreterNAATILevels = ["Conference (Senior)","Conference","Certified Interpreter","Professional","Certified Provisional Interpreter","Recognised","Non-Accredited"];
    let columnValueElement = $(ODTIInterpretersPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "3"));
    let actualNAATIText = action.getElementText(columnValueElement);
    chai.expect(interpreterNAATILevels).to.include(actualNAATIText);
})

Then(/^the table will show the current ongoing job for the interpreter "(.*)"$/, function (interpreter) {
    browser.pause(5000);
    let columnValueElement = $(ODTIInterpretersPage.interpreterResultsLinkTextValueLocator.replace("<dynamicRowLinkText>", interpreter).replace("<dynamicColumnNumber>", "10"));
    let actualJobID = action.getElementText(columnValueElement);
    chai.expect(actualJobID).to.equal(GlobalData.CURRENT_JOB_ID.toString());
})

Then(/^the table will not show cancelled jobs for the interpreter "(.*)"$/, function (interpreter) {
    browser.pause(5000);
    let columnValueElement = $(ODTIInterpretersPage.interpreterResultsLinkTextValueLocator.replace("<dynamicRowLinkText>", interpreter).replace("<dynamicColumnNumber>", "10"));
    let actualJobID = action.getElementText(columnValueElement);
    chai.expect(actualJobID).to.not.equal(GlobalData.CURRENT_JOB_ID.toString());
})

Then(/^the table will also show the next pre-booked job for the interpreter "(.*)"$/, function (interpreter) {
    browser.pause(5000);
    let columnValueElement = $(ODTIInterpretersPage.interpreterResultsLinkTextValueLocator.replace("<dynamicRowLinkText>", interpreter).replace("<dynamicColumnNumber>", "10"));
    let actualJobID = action.getElementText(columnValueElement);
    chai.expect(actualJobID).to.equal(GlobalData.CURRENT_JOB_ID.toString());
})

Then(/^this will be the next pre-booked job with a start time within the next 15 minutes for the interpreter "(.*)"$/, function (interpreter) {
    browser.pause(5000);
    let columnValueElement = $(ODTIInterpretersPage.interpreterResultsLinkTextValueLocator.replace("<dynamicRowLinkText>", interpreter).replace("<dynamicColumnNumber>", "9"));
    let bookingTimeActual = action.getElementText(columnValueElement);
    console.log("bookingTimeActual="+bookingTimeActual);
    bookingTimeActual = bookingTimeActual.split(" - ")[0].toString();
    let bookingTime24HoursActual = datetime.get24HrsFormatTime(bookingTimeActual);
    let temp_date_time = datetime.getScheduleDateTime("within fifteen minutes", "00:00");
    console.log("bookingTimeActual="+bookingTimeActual);
    console.log("bookingTime24HoursActual="+bookingTime24HoursActual);
    console.log("temp_date_time="+temp_date_time);
    let withInFifteenMinutesTime = temp_date_time[1];
    let jobTimeIsWithinNext15Minutes = datetime.compareTimeValues(bookingTime24HoursActual, withInFifteenMinutesTime);
    console.log("bookingTime24HoursActual="+bookingTime24HoursActual);
    console.log("withInFifteenMinutesTime="+withInFifteenMinutesTime);
    console.log("jobTimeIsWithinNext15Minutes="+jobTimeIsWithinNext15Minutes);
    if (jobTimeIsWithinNext15Minutes !== null) {
        chai.expect(jobTimeIsWithinNext15Minutes).to.be.true;
    }
})

Then(/^if the Job ID has no data, then the Start End time also has no data$/, function () {
    browser.pause(5000);
    let totalRowsCount = ODTIInterpretersPage.interpreterResultRowsCount;
    for (let row = 1; row <= totalRowsCount; row++) {
        let jobIdValueElement = $(ODTIInterpretersPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", row.toString()).replace("<dynamicColumnNumber>", "10"));
        let bookingTimeValueElement = $(ODTIInterpretersPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", row.toString()).replace("<dynamicColumnNumber>", "9"));
        let jobIdText = action.getElementText(jobIdValueElement);
        let bookingTimeText = action.getElementText(bookingTimeValueElement);
        if (jobIdText === "") {
            chai.expect(bookingTimeText).to.equal("");
        }
    }
})

Then(/^if the Job ID has data, then the Start End time also has data$/, function () {
    browser.pause(5000);
    let totalRowsCount = ODTIInterpretersPage.interpreterResultRowsCount;
    for (let row = 1; row <= totalRowsCount; row++) {
        let jobIdValueElement = $(ODTIInterpretersPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", row.toString()).replace("<dynamicColumnNumber>", "10"));
        let bookingTimeValueElement = $(ODTIInterpretersPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", row.toString()).replace("<dynamicColumnNumber>", "9"));
        let jobIdText = action.getElementText(jobIdValueElement);
        let bookingTimeText = action.getElementText(bookingTimeValueElement);
        if (jobIdText !== "") {
            chai.expect(bookingTimeText).to.not.equal("");
        }
    }
})

When(/^they click on the hyperlinked Contractor name$/, function () {
    browser.pause(5000);
    let actualContractorNameElement = $(ODTIInterpretersPage.interpreterResultsValueLinkLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "2"));
    GlobalData.CONTRACTOR_NAME = action.getElementText(actualContractorNameElement).toLowerCase();
    action.clickElement(actualContractorNameElement);
})

When(/^they are navigated to the Contractor Profile and this will open in a new browser tab$/, function () {
    action.navigateToLatestWindow();
    action.isVisibleWait(ODTIJobsPage.selectedInterpreterNameText, 10000);
    let currentInterpreterPageUrl = action.getPageUrl();
    chai.expect(currentInterpreterPageUrl).to.includes("ManagementModules/PreviewContractorProfile.aspx");
    let contractorNameInProfile = action.getElementText(ODTIJobsPage.selectedInterpreterNameText).toLowerCase();
    chai.expect(contractorNameInProfile).to.includes(GlobalData.CONTRACTOR_NAME);
})

Then(/^no results will be displayed in the table$/, function () {
    let ODTIInterpretersResultsEmptyTableDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTIInterpretersResultsEmptyTable, 10000);
    chai.expect(ODTIInterpretersResultsEmptyTableDisplayStatus).to.be.true;
})

Then(/^show the text as 'No items to show...’$/, function () {
    let noItemsToShowTextDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.noItemsToShowText, 1000);
    chai.expect(noItemsToShowTextDisplayStatus).to.be.true;
})

Then(/^the columns are sorted correctly when I click on each column which are sortable "(.*)"$/, function (columnHeaders) {
    let columnHeadersList = columnHeaders.split(",");
    for (let header = 0; header < columnHeadersList.length; header++) {
        let valuesActual = [];
        let valuesSorted = [];
        let timeMeridiemValues = [];
        let columnHeaderElement = $(ODTIJobsPage.columnHeaderLocator.replace("<dynamic>", columnHeadersList[header]))
        if (columnHeadersList[header] !== "Empty") {
            action.clickElement(columnHeaderElement);
            browser.pause(3000);
            let totalRowsCount = ODTIInterpretersPage.interpreterResultRowsCount;
            for (let row = 1; row <= totalRowsCount; row++) {
                let headerIndex = header + 1;
                let columnValueElement = $(ODTIInterpretersPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", row.toString()).replace("<dynamicColumnNumber>", headerIndex.toString()));
                if (action.isExistingWait(columnValueElement, 0)) {
                    valuesActual.push(action.getElementText(columnValueElement));
                }
            }
            if (valuesActual[valuesActual.length - 1].includes(":")) {
                for (let i = 0; i < valuesActual.length; i++) {
                    let timeValueActual = valuesActual[i].split(" ")[1];
                    if (timeValueActual === "AM" || timeValueActual === "PM") {
                        timeMeridiemValues.push(timeValueActual);
                    }
                }
                valuesActual = timeMeridiemValues;
                valuesSorted = [...valuesActual].sort();
            } else if (valuesActual[1].includes("$")) {
                valuesActual = valuesActual.map(function (element) {
                    return element.replace(/\$/g, "");
                });
                valuesSorted = [...valuesActual].sort((a, b) => a - b);
            } else {
                valuesSorted = [...valuesActual].sort();
            }
            chai.expect(valuesActual).to.have.ordered.members(valuesSorted);
        }
    }
})

When(/^they click on the hyperlinked Job ID "(.*)"$/, function (interpreter) {
    browser.pause(5000);
    let jobIDLinkElement = $(ODTIInterpretersPage.interpreterResultsLinkTextLinkLocator.replace("<dynamicRowLinkText>", interpreter).replace("<dynamicColumnNumber>", "10"));
    GlobalData.ODTI_JOB_CONTRACT_ID = action.getElementText(jobIDLinkElement);
    action.clickElement(jobIDLinkElement);
})

Then(/^they are navigated to the ODTI Job Details page and this will open in a new browser tab$/, function () {
    action.navigateToLatestWindow();
    action.isVisibleWait(ODTIInterpretersPage.jobIDTextInODTIJobAllocationPage, 10000);
    let currentInterpreterPageUrl = action.getPageUrl();
    chai.expect(currentInterpreterPageUrl).to.includes("BookingJobAllocation.aspx");
    let jobIDInAllocationPage = action.getElementText(ODTIInterpretersPage.jobIDTextInODTIJobAllocationPage);
    chai.expect(jobIDInAllocationPage).to.includes(GlobalData.ODTI_JOB_CONTRACT_ID);
})

Then(/^they will see the ODTI Jobs option in the page dropdown$/, function () {
    action.isVisibleWait(ODTIInterpretersPage.ODTIJobsSwitchDropdown,10000);
    let dropdownOptionsActual = action.getElementText(ODTIInterpretersPage.ODTIJobsSwitchDropdown);
    chai.expect(dropdownOptionsActual).to.includes("ODTI Jobs");
})

Then(/^they can swap to the ODTI Jobs page$/, function () {
    action.isVisibleWait(ODTIInterpretersPage.ODTIJobsSwitchDropdown,10000);
    action.selectTextFromDropdown(ODTIInterpretersPage.ODTIJobsSwitchDropdown,"ODTI Jobs");
    let ODTIJobsPageOption = $(ODTIInterpretersPage.ODTIJobsSwitchDropdownOptionLocator.replace("<dynamic>", "ODTI Jobs"));
    let ODTIJobsPageSelectedStatus = action.isSelectedWait(ODTIJobsPageOption, 10000);
    chai.expect(ODTIJobsPageSelectedStatus).to.be.true;
})

When(/^user cancels the already existing ongoing jobs for the language "(.*)" and interpreter "(.*)" on behalf of "(.*)"$/, function (language, interpreter, requesterName) {
    let ODTIJobsPageWindowHandle = action.getWindowHandle();
    if (action.isVisibleWait(ODTIInterpretersPage.languageDropdownSearchBox, 5000) === false) {
        action.clickElement(ODTIInterpretersPage.ODTILanguageSwitchDropdown);
    }
    action.enterValueAndPressReturn(ODTIInterpretersPage.languageDropdownSearchBox, language);
    browser.pause(5000);
    let jobIDLinkElement = $(ODTIInterpretersPage.interpreterResultsLinkTextLinkLocator.replace("<dynamicRowLinkText>", interpreter).replace("<dynamicColumnNumber>", "10"));
    let counter = 0;
    while (GlobalData.CURRENT_JOB_ID.toString() !== action.getElementText(jobIDLinkElement) && action.isVisibleWait(jobIDLinkElement, 10000) === true && counter <= 6) {
        console.log("Cancelling the already existing ongoing jobs for the language and interpreter")
        action.clickElement(jobIDLinkElement);
        action.navigateToLatestWindow();
        action.isVisibleWait(ODTIInterpretersPage.jobIDTextInODTIJobAllocationPage, 10000);
        action.isVisibleWait(jobRequestPage.jobStatusLink, 10000);
        action.clickElement(jobRequestPage.jobStatusLink);
        action.isVisibleWait(jobRequestPage.jobStatusDropdown, 10000);
        action.selectTextFromDropdown(jobRequestPage.jobStatusDropdown, "Cancel");
        action.isVisibleWait(jobRequestPage.jobCancelConfirmationPopupText, 10000);
        action.isVisibleWait(jobRequestPage.cancelConfirmationYesButton, 10000);
        action.clickElement(jobRequestPage.cancelConfirmationYesButton);
        action.isVisibleWait(jobRequestPage.cancelReasonDropdown, 10000);
        action.selectTextFromDropdown(jobRequestPage.cancelReasonDropdown, "Job request error (Date,Time, Duration, etc..)");
        action.isVisibleWait(jobRequestPage.cancelOnBehalfDropdown, 10000);
        action.selectTextFromDropdown(jobRequestPage.cancelOnBehalfDropdown, requesterName);
        action.isVisibleWait(jobRequestPage.submitButtonConfirmationPopup, 10000);
        action.clickElement(jobRequestPage.submitButtonConfirmationPopup);
        action.isVisibleWait(jobRequestPage.searchByJobIdTextBox, 10000);
        action.navigateToWindowHandle(ODTIJobsPageWindowHandle);
        browser.refresh();
        if (action.isVisibleWait(ODTIInterpretersPage.languageDropdownSearchBox, 5000) === false) {
            action.clickElement(ODTIInterpretersPage.ODTILanguageSwitchDropdown);
        }
        action.isVisibleWait(ODTIInterpretersPage.languageDropdownSearchBox, 5000);
        action.enterValueAndPressReturn(ODTIInterpretersPage.languageDropdownSearchBox, language);
    }
})