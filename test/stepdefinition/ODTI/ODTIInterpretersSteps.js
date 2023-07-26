When(/^they are navigated to the ODTI page$/, function () {
    let pageTitleActual = action.getPageTitle()
    chai.expect(pageTitleActual).to.includes("ODTI");
})

Then(/^they will see the ODTI Interpreters page by default$/, function () {
    let ODTIInterpretersPageOption = $(ODTIInterpretersPage.ODTIJobsSwitchDropdownOptionLocator.replace("<dynamic>", "ODTI Interpreters"));
    let InterpretersPageSelectedStatus = action.isSelectedWait(ODTIInterpretersPageOption, 10000,"ODTI Interpreters page option in ODTI Interpreters page");
    chai.expect(InterpretersPageSelectedStatus).to.be.true;
})

Then(/^they will see a dropdown to switch to the ODTI Jobs page$/, function () {
    let ODTIJobsSwitchDropdownDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTIJobsSwitchDropdown, 10000,"ODTI Jobs switch dropdown in ODTI Interpreters page");
    chai.expect(ODTIJobsSwitchDropdownDisplayStatus).to.be.true;
})

Then(/^they will see a dropdown to select Language$/, function () {
    let ODTILanguageSwitchDropdownDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTILanguageSwitchDropdown, 10000,"Language switch dropdown in ODTI Interpreters page");
    chai.expect(ODTILanguageSwitchDropdownDisplayStatus).to.be.true;
})

Then(/^they will a dropdown to select Logon Status with label Any - LogOn Status$/, function () {
    let ODTILogonStatusDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTILogonStatusDropdown, 10000,"Logon status dropdown in ODTI Interpreters page");
    chai.expect(ODTILogonStatusDisplayStatus).to.be.true;
    let ODTILogonStatusDropdownLabelDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTILogonStatusDropdownLabel, 10000,"Logon status dropdown in ODTI Interpreters page");
    chai.expect(ODTILogonStatusDropdownLabelDisplayStatus).to.be.true;
})

Then(/^they will see a language searchable dropdown$/, function () {
    action.isVisibleWait(ODTIInterpretersPage.ODTILanguageSwitchDropdown, 10000,"Language switch dropdown in ODTI Interpreters page");
    action.clickElement(ODTIInterpretersPage.ODTILanguageSwitchDropdown,"Language switch dropdown in ODTI Interpreters page");
    let languageDropdownSearchBoxDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.languageDropdownSearchBox, 10000,"Language dropdown search box in ODTI Interpreters page");
    chai.expect(languageDropdownSearchBoxDisplayStatus).to.be.true;
})

Then(/^the label will be: Language$/, function () {
    let languageDropdownLanguageLabelElement = $(ODTIInterpretersPage.ODTILanguageDropdownLabel.replace("<dynamic>", "- Language -"));
    let languageDropdownLabelDisplayStatus = action.isVisibleWait(languageDropdownLanguageLabelElement, 10000,"Language switch dropdown in ODTI Interpreters page");
    chai.expect(languageDropdownLabelDisplayStatus).to.be.true;
})

Then(/^the user will be able to search for a language "(.*)"$/, function (language) {
    browser.refresh();
    if (action.isVisibleWait(ODTIInterpretersPage.languageDropdownSearchBox, 5000,"Language dropdown search box in ODTI Interpreters page") === false) {
        action.clickElement(ODTIInterpretersPage.ODTILanguageSwitchDropdown,"Language switch dropdown in ODTI Interpreters page");
    }
    action.enterValueAndPressReturn(ODTIInterpretersPage.languageDropdownSearchBox, language,"Language dropdown search box in ODTI Interpreters page");
})

Then(/^the user will be able to select a single Language "(.*)"$/, function (language) {
    let languageSelectedElement = $(ODTIInterpretersPage.ODTILanguageDropdownLabel.replace("<dynamic>", language));
    let languageSelectedDisplayStatus = action.isVisibleWait(languageSelectedElement, 10000,"Language Selected element in ODTI Interpreters page");
    chai.expect(languageSelectedDisplayStatus).to.be.true;
})

Then(/^the label will be: Any-LogOn Status$/, function () {
    let logonStatusDropdownLabelElement = $(ODTIInterpretersPage.logonStatusDropdownOptionLabel.replace("<dynamic>", "Any - LogOn Status"));
    let logonStatusDropdownLabelSelectedStatus = action.isSelectedWait(logonStatusDropdownLabelElement, 10000,"Language status dropdown in ODTI Interpreters page");
    chai.expect(logonStatusDropdownLabelSelectedStatus).to.be.true;
})

Then(/^the user will be able to select status for the selected language using options "(.*)"$/, function (logonStatus) {
    action.isVisibleWait(ODTIInterpretersPage.ODTILogonStatusDropdown,10000,"Language status dropdown in ODTI Interpreters page");
    let logonStatusListOptions = logonStatus.split(",");
    for (let index = 0; index < logonStatusListOptions.length; index++) {
        action.selectTextFromDropdown(ODTIInterpretersPage.ODTILogonStatusDropdown, logonStatusListOptions[index],"Logon status dropdown in ODTI Interpreters page");
        let logonStatusDropdownLabelElement = $(ODTIInterpretersPage.logonStatusDropdownOptionLabel.replace("<dynamic>", logonStatusListOptions[index]));
        let logonStatusDropdownLabelSelectedStatus = action.isSelectedWait(logonStatusDropdownLabelElement, 10000,"Logon status dropdown in ODTI Interpreters page");
        chai.expect(logonStatusDropdownLabelSelectedStatus).to.be.true;
    }
})

Then(/^the table will appear$/, function () {
    let ODTIInterpretersResultsTableDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTIInterpretersResultsTable,10000,"Interpreter results table in ODTI Interpreters page");
    chai.expect(ODTIInterpretersResultsTableDisplayStatus).to.be.true;
})

Then(/^show only interpreters "(.*)" with that Language$/, function (interpreters) {
    browser.pause(5000);
    let interpretersList = interpreters.split(",");
    let ODTIInterpretersResultsTableTextActual = action.getElementText(ODTIInterpretersPage.ODTIInterpretersResultsTableBody,"Interpreter results table body in ODTI Interpreters page");
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
        let actualColumnValue = action.getElementText(columnValueElement,"Column value in ODTI Interpreters page");
        logonStatusActual.push(actualColumnValue);
    }
    chai.expect(logonStatusActual).to.include.members(logonStatusList);
})

Then(/^the table will have the following columns: "(.*)"$/, function (expectedColumns) {
    let columnsList = expectedColumns.split(",");
    let ODTIInterpretersTableColumnsActual = action.getElementText(ODTIInterpretersPage.interpreterColumnHeaders,"Interpreter column headers in ODTI Interpreters page");
    for (let index = 0; index < columnsList.length; index++) {
        chai.expect(ODTIInterpretersTableColumnsActual).to.includes(columnsList[index]);
    }
})

Then(/^the data will be displayed under each column as per the mockup$/, function () {
    let ODTITableDataDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTIInterpretersResultsTableBody,10000,"Interpreter results table body in ODTI Interpreters page");
    chai.expect(ODTITableDataDisplayStatus).to.be.true;
})

Then(/^Name will be hyperlinked to the Contractor profile$/, function () {
    browser.pause(5000);
    let columnValueElement = $(ODTIInterpretersPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "2"));
    let actualContractorNameHTML = action.getElementHTML(columnValueElement,"Contractor Name Column value in ODTI Interpreters page");
    chai.expect(actualContractorNameHTML).to.includes("<a ");
    chai.expect(actualContractorNameHTML).to.includes("href");
})

Then(/^it will show the NAATI Level for that Language or Contractor$/, function () {
    browser.pause(5000);
    let interpreterNAATILevels = ["Conference (Senior)","Conference","Certified Interpreter","Professional","Certified Provisional Interpreter","Recognised","Non-Accredited"];
    let columnValueElement = $(ODTIInterpretersPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "3"));
    let actualNAATIText = action.getElementText(columnValueElement,"NAATI Column value in ODTI Interpreters page");
    chai.expect(interpreterNAATILevels).to.include(actualNAATIText);
})

Then(/^the table will show the current ongoing job for the interpreter "(.*)"$/, function (interpreter) {
    browser.pause(5000);
    let columnValueElement = $(ODTIInterpretersPage.interpreterResultsLinkTextValueLocator.replace("<dynamicRowLinkText>", interpreter).replace("<dynamicColumnNumber>", "10"));
    let actualJobID = action.getElementText(columnValueElement,"Job ID Column value in ODTI Interpreters page");
    chai.expect(actualJobID).to.equal(GlobalData.CURRENT_JOB_ID.toString());
})

Then(/^the table will not show cancelled jobs for the interpreter "(.*)"$/, function (interpreter) {
    browser.pause(5000);
    let columnValueElement = $(ODTIInterpretersPage.interpreterResultsLinkTextValueLocator.replace("<dynamicRowLinkText>", interpreter).replace("<dynamicColumnNumber>", "10"));
    let actualJobID = action.getElementText(columnValueElement,"Job ID Column value in ODTI Interpreters page");
    chai.expect(actualJobID).to.not.equal(GlobalData.CURRENT_JOB_ID.toString());
})

Then(/^the table will also show the next pre-booked job for the interpreter "(.*)"$/, function (interpreter) {
    browser.pause(5000);
    let columnValueElement = $(ODTIInterpretersPage.interpreterResultsLinkTextValueLocator.replace("<dynamicRowLinkText>", interpreter).replace("<dynamicColumnNumber>", "10"));
    let actualJobID = action.getElementText(columnValueElement,"Column value in ODTI Interpreters page");
    chai.expect(actualJobID).to.equal(GlobalData.CURRENT_JOB_ID.toString());
})

Then(/^this will be the next pre-booked job with a start time within the next 15 minutes for the interpreter "(.*)"$/, function (interpreter) {
    browser.pause(5000);
    let columnValueElement = $(ODTIInterpretersPage.interpreterResultsLinkTextValueLocator.replace("<dynamicRowLinkText>", interpreter).replace("<dynamicColumnNumber>", "9"));
    let bookingTimeActual = action.getElementText(columnValueElement,"Column value in ODTI Interpreters page");
    bookingTimeActual = bookingTimeActual.split(" - ")[0].toString();
    let bookingTime24HoursActual = datetime.get24HrsFormatTime(bookingTimeActual);
    let temp_date_time = datetime.getScheduleDateTime("within fifteen minutes", "00:00");
    logger.info("bookingTimeActual="+bookingTimeActual);
    logger.info("bookingTime24HoursActual="+bookingTime24HoursActual);
    logger.info("temp_date_time="+temp_date_time);
    let withInFifteenMinutesTime = temp_date_time[1];
    let jobTimeIsWithinNext15Minutes = datetime.compareTimeValues(bookingTime24HoursActual, withInFifteenMinutesTime);
    logger.info("bookingTime24HoursActual="+bookingTime24HoursActual);
    logger.info("withInFifteenMinutesTime="+withInFifteenMinutesTime);
    logger.info("jobTimeIsWithinNext15Minutes="+jobTimeIsWithinNext15Minutes);
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
        let jobIdText = action.getElementText(jobIdValueElement,"Job ID value in  ODTI Interpreters page");
        let bookingTimeText = action.getElementText(bookingTimeValueElement,"Booking time value in  ODTI Interpreters page");
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
        let jobIdText = action.getElementText(jobIdValueElement,"Job Id value in ODTI Interpreters page");
        let bookingTimeText = action.getElementText(bookingTimeValueElement,"Booking time value in ODTI Interpreters page");
        if (jobIdText !== "") {
            chai.expect(bookingTimeText).to.not.equal("");
        }
    }
})

When(/^they click on the hyperlinked Contractor name$/, function () {
    browser.pause(5000);
    let actualContractorNameElement = $(ODTIInterpretersPage.interpreterResultsValueLinkLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "2"));
    GlobalData.CONTRACTOR_NAME = action.getElementText(actualContractorNameElement,"Contractor Name in ODTI Interpreters page").toLowerCase();
    action.clickElement(actualContractorNameElement);
})

When(/^they are navigated to the Contractor Profile and this will open in a new browser tab$/, function () {
    action.navigateToLatestWindow();
    action.isVisibleWait(ODTIJobsPage.selectedInterpreterNameText, 10000,"Interpreter Name in ODTI Interpreters page");
    let currentInterpreterPageUrl = action.getPageUrl();
    chai.expect(currentInterpreterPageUrl).to.includes("ManagementModules/PreviewContractorProfile.aspx");
    let contractorNameInProfile = action.getElementText(ODTIJobsPage.selectedInterpreterNameText,"Interpreter Name in ODTI Interpreters page").toLowerCase();
    chai.expect(contractorNameInProfile).to.includes(GlobalData.CONTRACTOR_NAME);
})

Then(/^no results will be displayed in the table$/, function () {
    let ODTIInterpretersResultsEmptyTableDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.ODTIInterpretersResultsEmptyTable, 10000,"ODTI Interpreters results empty table in ODTI Interpreters page");
    chai.expect(ODTIInterpretersResultsEmptyTableDisplayStatus).to.be.true;
})

Then(/^show the text as 'No items to show...’$/, function () {
    let noItemsToShowTextDisplayStatus = action.isVisibleWait(ODTIInterpretersPage.noItemsToShowText, 1000,"No items to show text in ODTI Interpreters page");
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
            action.clickElement(columnHeaderElement,"Column header "+ columnHeadersList[header] +" in ODTI Interpreters page");
            browser.pause(3000);
            let totalRowsCount = ODTIInterpretersPage.interpreterResultRowsCount;
            for (let row = 1; row <= totalRowsCount; row++) {
                let headerIndex = header + 1;
                let columnValueElement = $(ODTIInterpretersPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", row.toString()).replace("<dynamicColumnNumber>", headerIndex.toString()));
                if (action.isExistingWait(columnValueElement, 0,"Column value in ODTI Interpreters page")) {
                    valuesActual.push(action.getElementText(columnValueElement,"Column value in ODTI Interpreters page"));
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
    action.clickElement(jobIDLinkElement,"Job Id in ODTI Interpreters page");
})

Then(/^they are navigated to the ODTI Job Details page and this will open in a new browser tab$/, function () {
    action.navigateToLatestWindow();
    action.isVisibleWait(ODTIInterpretersPage.jobIDTextInODTIJobAllocationPage, 10000,"Job Id in ODTI Job allocation page");
    let currentInterpreterPageUrl = action.getPageUrl();
    chai.expect(currentInterpreterPageUrl).to.includes("BookingJobAllocation.aspx");
    let jobIDInAllocationPage = action.getElementText(ODTIInterpretersPage.jobIDTextInODTIJobAllocationPage,"Job Id in ODTI Job allocation page");
    chai.expect(jobIDInAllocationPage).to.includes(GlobalData.ODTI_JOB_CONTRACT_ID);
})

Then(/^they will see the ODTI Jobs option in the page dropdown$/, function () {
    action.isVisibleWait(ODTIInterpretersPage.ODTIJobsSwitchDropdown,10000);
    let dropdownOptionsActual = action.getElementText(ODTIInterpretersPage.ODTIJobsSwitchDropdown,"ODTI Job switch dropdown in ODTI Interpreters page");
    chai.expect(dropdownOptionsActual).to.includes("ODTI Jobs");
})

Then(/^they can swap to the ODTI Jobs page$/, function () {
    action.isVisibleWait(ODTIInterpretersPage.ODTIJobsSwitchDropdown,10000,"ODTI Job switch dropdown in ODTI Interpreters page");
    action.selectTextFromDropdown(ODTIInterpretersPage.ODTIJobsSwitchDropdown,"ODTI Jobs","ODTI Job switch dropdown in ODTI Interpreters page");
    let ODTIJobsPageOption = $(ODTIInterpretersPage.ODTIJobsSwitchDropdownOptionLocator.replace("<dynamic>", "ODTI Jobs"));
    let ODTIJobsPageSelectedStatus = action.isSelectedWait(ODTIJobsPageOption, 10000,"ODTI Jobs page option in ODTI Interpreters page");
    chai.expect(ODTIJobsPageSelectedStatus).to.be.true;
})

When(/^user cancels the already existing ongoing jobs for the language "(.*)" and interpreter "(.*)" on behalf of "(.*)"$/, function (language, interpreter, requesterName) {
    let ODTIJobsPageWindowHandle = action.getWindowHandle();
    if (action.isVisibleWait(ODTIInterpretersPage.languageDropdownSearchBox, 5000,"Language dropdown search box in ODTI Interpreters page") === false) {
        action.clickElement(ODTIInterpretersPage.ODTILanguageSwitchDropdown,"Language switch dropdown in ODTI Interpreters page");
    }
    action.enterValueAndPressReturn(ODTIInterpretersPage.languageDropdownSearchBox, language,"Language dropdown search box in ODTI Interpreters page");
    browser.pause(5000);
    let jobIDLinkElement = $(ODTIInterpretersPage.interpreterResultsLinkTextLinkLocator.replace("<dynamicRowLinkText>", interpreter).replace("<dynamicColumnNumber>", "10"));
    let counter = 0;
    while (GlobalData.CURRENT_JOB_ID.toString() !== action.getElementText(jobIDLinkElement,"Job Id link in ODTI Interpreters page") && action.isVisibleWait(jobIDLinkElement, 10000,"Job Id link in ODTI Interpreters page") === true && counter <= 6) {
        logger.info("Cancelling the already existing ongoing jobs for the language and interpreter")
        action.clickElement(jobIDLinkElement,"Job Id link in ODTI Interpreters page");
        action.navigateToLatestWindow();
        action.isVisibleWait(ODTIInterpretersPage.jobIDTextInODTIJobAllocationPage, 10000,"Job Id text in ODTI Job Allocation page");
        action.isVisibleWait(jobRequestPage.jobStatusLink, 10000,"Job Status link in Job request page");
        action.clickElement(jobRequestPage.jobStatusLink,"Job Status link in Job request page");
        action.isVisibleWait(jobRequestPage.jobStatusDropdown, 10000,"Job Status dropdown in Job request page");
        action.selectTextFromDropdown(jobRequestPage.jobStatusDropdown, "Cancel","Job Status dropdown in Job request page");
        action.isVisibleWait(jobRequestPage.jobCancelConfirmationPopupText, 10000,"Job Cancel confirmation popup text in Job request page");
        action.isVisibleWait(jobRequestPage.cancelConfirmationYesButton, 10000,"Job Cancel confirmation yes button in Job request page");
        action.clickElement(jobRequestPage.cancelConfirmationYesButton,"Job Cancel confirmation yes button in Job request page");
        action.isVisibleWait(jobRequestPage.cancelReasonDropdown, 10000,"Cancel reason dropdown in Job request page");
        action.selectTextFromDropdown(jobRequestPage.cancelReasonDropdown, "Job request error (Date,Time, Duration, etc..)","Cancel reason dropdown in Job request page");
        action.isVisibleWait(jobRequestPage.cancelOnBehalfDropdown, 10000,"Cancel on behalf dropdown in Job request page");
        action.selectTextFromDropdown(jobRequestPage.cancelOnBehalfDropdown, requesterName,"Cancel on behalf dropdown in Job request page");
        action.isVisibleWait(jobRequestPage.submitButtonConfirmationPopup, 10000,"Submit button confirmation popup in Job request page");
        action.clickElement(jobRequestPage.submitButtonConfirmationPopup,"Submit button confirmation popup in Job request page");
        action.isVisibleWait(jobRequestPage.searchByJobIdTextBox, 10000,"Search by Job Id in Job request page");
        action.navigateToWindowHandle(ODTIJobsPageWindowHandle);
        browser.refresh();
        if (action.isVisibleWait(ODTIInterpretersPage.languageDropdownSearchBox, 5000,"Language dropdown search box in ODTI Interpreters page") === false) {
            action.clickElement(ODTIInterpretersPage.ODTILanguageSwitchDropdown,"Language dropdown search box in ODTI Interpreters page");
        }
        action.isVisibleWait(ODTIInterpretersPage.languageDropdownSearchBox, 5000,"Language dropdown search box in ODTI Interpreters page");
        action.enterValueAndPressReturn(ODTIInterpretersPage.languageDropdownSearchBox, language,"Language dropdown search box in ODTI Interpreters page");
    }
})