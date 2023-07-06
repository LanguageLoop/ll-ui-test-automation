When(/^I view the ODTI > ODTI Jobs page$/, function () {
    action.isVisibleWait(ODTIJobsPage.titleDropdown, 10000);
    action.selectTextFromDropdown(ODTIJobsPage.titleDropdown, "ODTI Jobs");
    let ODTIJobsOptionInTitleDropdown = $(ODTIJobsPage.titleDropdownOption.replace("<dynamic>", "ODTI Jobs"));
    let optionSelectedStatus = action.isSelectedWait(ODTIJobsOptionInTitleDropdown, 10000);
    chai.expect(optionSelectedStatus).to.be.true;
})

When(/^I select campus "(.*)" from the Campus dropdown$/, function (campusID) {
    action.isVisibleWait(ODTIJobsPage.campusDropdown, 10000);
    action.selectTextFromDropdown(ODTIJobsPage.campusDropdown, campusID);
})

When(/^I enter Start Date "(.*)" and End Date "(.*)"$/, function (startDate, endDate) {
    action.isVisibleWait(ODTIJobsPage.startDateTextBox, 10000);
    action.addValueAndPressReturnTab(ODTIJobsPage.startDateTextBox, startDate);
    action.isVisibleWait(ODTIJobsPage.endDateTextBox, 10000);
    action.addValueAndPressReturnTab(ODTIJobsPage.endDateTextBox, endDate);
    browser.pause(5000);
})

When(/^I get the records count in records counter in Admin$/, function () {
    browser.pause(10000)
    action.isVisibleWait(ODTIJobsPage.recordsCountText, 10000);
    GlobalData.ODTI_JOB_RECORDS_COUNT_ADMIN = action.getElementText(ODTIJobsPage.recordsCountText);
    console.log("Job records in Admin: " + GlobalData.ODTI_JOB_RECORDS_COUNT_ADMIN);
})

When(/^I get the ODTI SERVICE CHARGE ID values In Admin$/, function () {
    action.isClickableWait(ODTIJobsPage.callStartHeader, 10000);
    action.clickElement(ODTIJobsPage.callStartHeader);
    browser.pause(5000)
    let totalRowsCount = ODTIJobsPage.totalRowCount;
    GlobalData.ODTI_SERVICE_CHARGE_LIST_ADMIN = [];
    for (let rowIndex = 1; rowIndex <= totalRowsCount; rowIndex++) {
        let serviceChargeIDTextElement = $(ODTIJobsPage.odtiServiceChargeIDTextLocator.replace("<dynamic>", rowIndex.toString()));
        GlobalData.ODTI_SERVICE_CHARGE_LIST_ADMIN.push(action.getElementText(serviceChargeIDTextElement));
    }
    console.log("Service charge IDs in Admin: " + GlobalData.ODTI_SERVICE_CHARGE_LIST_ADMIN)
})

Then(/^The records count in records counter is same as in Admin$/, function () {
    browser.pause(10000)
    action.isVisibleWait(ODTIJobsPage.recordsCountText, 10000)
    let recordsCountNonAdmin = action.getElementText(ODTIJobsPage.recordsCountText);
    console.log("Job records in User: " + recordsCountNonAdmin);
    chai.expect(GlobalData.ODTI_JOB_RECORDS_COUNT_ADMIN).to.equal(recordsCountNonAdmin);
})

Then(/^The ODTI SERVICE CHARGE ID values are in the same order as Admin$/, function () {
    action.isClickableWait(ODTIJobsPage.callStartHeader, 10000);
    action.clickElement(ODTIJobsPage.callStartHeader);
    browser.pause(5000)
    let totalRowsCount = ODTIJobsPage.totalRowCount;
    let serviceChargeIDsNonAdmin = [];
    for (let rowIndex = 1; rowIndex <= totalRowsCount; rowIndex++) {
        let serviceChargeIDTextElement = $(ODTIJobsPage.odtiServiceChargeIDTextLocator.replace("<dynamic>", rowIndex.toString()));
        serviceChargeIDsNonAdmin.push(action.getElementText(serviceChargeIDTextElement));
    }
    console.log("Service charge IDs in User: " + serviceChargeIDsNonAdmin)
    chai.expect(GlobalData.ODTI_SERVICE_CHARGE_LIST_ADMIN).to.have.ordered.members(serviceChargeIDsNonAdmin);
})

When(/^The RecordStatus Is Export$/, function () {
    let recordStatusExistStatus = action.isExistingWait(ODTIJobsPage.recordStatusSelectedOption, 60000);
    chai.expect(recordStatusExistStatus).to.be.true;
})

When(/^I click Advanced search link in Admin$/, function () {
    action.isVisibleWait(ODTIJobsPage.advancedSearchLink, 10000);
    action.clickElement(ODTIJobsPage.advancedSearchLink);
})

When(/^I add filter "(.*)" "(.*)", "(.*)" "(.*)", "(.*)" "(.*)"$/, function (filterOption, filterOptionIndex, filterComparator, filterComparatorIndex, filterValue, filterValueIndex) {
    let filterFieldDropdownElement = $(ODTIJobsPage.filterFieldDropdownLocator.replace("<dynamic>", filterOptionIndex));
    action.isVisibleWait(filterFieldDropdownElement, 20000);
    let filterFieldDropdownOptionElement = $(ODTIJobsPage.filterFieldDropdownOptionLocator.replace("<dynamic1>", filterOptionIndex).replace("<dynamic2>", filterOption));
    action.isExistingWait(filterFieldDropdownOptionElement, 20000);
    action.selectTextFromDropdown(filterFieldDropdownElement, filterOption);
    let filterComparisonDropdownElement = $(ODTIJobsPage.filterComparisonDropdownLocator.replace("<dynamic>", filterComparatorIndex));
    action.isVisibleWait(filterComparisonDropdownElement, 20000);
    let filterComparisonDropdownOptionElement = $(ODTIJobsPage.filterComparisonDropdownOptionLocator.replace("<dynamic1>", filterComparatorIndex).replace("<dynamic2>", filterComparator));
    action.isExistingWait(filterComparisonDropdownOptionElement, 20000)
    action.selectTextFromDropdown(filterComparisonDropdownElement, filterComparator);
    let filterValueTextBoxElement = $(ODTIJobsPage.filterValueTextBoxLocator.replace("<dynamic>", filterValueIndex));
    action.isVisibleWait(filterValueTextBoxElement, 20000);
    action.enterValueAndPressReturn(filterValueTextBoxElement, filterValue);
    action.pressKeys("Tab");
    action.clickElement(ODTIJobsPage.searchByTextBox);
    browser.pause(5000);
    let filterValueSet = action.getElementValue(filterValueTextBoxElement);
    let counter = 0;
    //Checking and re-setting the value if not its set as expected
    while (filterValueSet !== filterValue && counter < 5) {
        action.addValueAndPressReturnTab(filterValueTextBoxElement, filterValue);
        action.clickElement(ODTIJobsPage.searchByTextBox);
        browser.pause(5000);
        filterValueSet = action.getElementValue(filterValueTextBoxElement);
        counter++;
    }
})

Then(/^The results displayed are within the date range "(.*)", "(.*)"$/, function (startDate, endDate) {
    startDate = startDate.replace(/-/g, "/") + " 23:59:59";
    endDate = endDate.replace(/-/g, "/") + " 23:59:59";
    startDate = datetime.parseDateString(startDate)
    endDate = datetime.parseDateString(endDate)
    let totalRowsCount = ODTIJobsPage.totalRowCount;
    for (let rowIndex = 1; rowIndex <= totalRowsCount; rowIndex++) {
        let callStartDateTimeTextElement = $(ODTIJobsPage.callStartDateTimeTextLocator.replace("<dynamic>", rowIndex.toString()));
        let callStartDateTimeText = action.getElementText(callStartDateTimeTextElement);
        callStartDateTimeText = callStartDateTimeText.replace(/\n/g, " ").replace(/-/g, "/");
        let callStartDateTimeActual = datetime.parseDateString(callStartDateTimeText);
        let dateInRange = callStartDateTimeActual.getTime() >= startDate.getTime() || callStartDateTimeActual.getTime() <= endDate.getTime();
        chai.expect(dateInRange).to.be.true;
    }
})

Then(/^The columns available for ODTI Jobs for the user are "(.*)"$/, function (expectedHeaders) {
    action.isVisibleWait(ODTIJobsPage.exportToExcelLink, 30000);
    action.isVisibleWait(ODTIJobsPage.odtiJobTableColumnHeaders, 10000);
    let odtiColumnHeadersActual = action.getElementText(ODTIJobsPage.odtiJobTableColumnHeaders);
    let headerListExpected = expectedHeaders.split(",");
    for (let headerIndex = 0; headerIndex < headerListExpected.length; headerIndex++) {
        chai.expect(odtiColumnHeadersActual).to.includes(headerListExpected[headerIndex]);
    }
})

Then(/^The ODTI Service Charge ID, Campus Name and Interpreter Name results are not clickable and read only$/, function () {
    browser.pause(5000)
    let clickableTageName = "a";
    let serviceChargeID1TextElement = $(ODTIJobsPage.odtiServiceChargeIDTextLocator.replace("<dynamic>", "1"));
    let serviceChargeIDVisibleStatus = action.isVisibleWait(serviceChargeID1TextElement, 10000);
    let serviceChargeIDTagName = action.getElementTagName(serviceChargeID1TextElement);
    chai.expect(serviceChargeIDVisibleStatus).to.be.true;
    chai.expect(serviceChargeIDTagName).to.not.equal(clickableTageName);
    let campusName1TextElement = $(ODTIJobsPage.campusNameValueTextLocator.replace("<dynamic>", "1"));
    let campusNameVisibleStatus = action.isVisibleWait(campusName1TextElement, 10000);
    let campusNameTagName = action.getElementTagName(campusName1TextElement);
    chai.expect(campusNameVisibleStatus).to.be.true;
    chai.expect(campusNameTagName).to.not.equal(clickableTageName);
    let interpreterName1TextElement = $(ODTIJobsPage.interpreterNameValueTextLocator.replace("<dynamic>", "1"));
    let interpreterNameVisibleStatus = action.isVisibleWait(interpreterName1TextElement, 10000);
    let interpreterNameTagName = action.getElementTagName(interpreterName1TextElement);
    chai.expect(interpreterNameVisibleStatus).to.be.true;
    chai.expect(interpreterNameTagName).to.not.equal(clickableTageName);
})

Then(/^The No odti billings to show... message is displayed$/, function () {
    let noBillingsMessageDisplayStatus = action.isVisibleWait(ODTIJobsPage.noBillingsMessageText, 20000);
    chai.expect(noBillingsMessageDisplayStatus).to.be.true;
})

When(/^I click on Export to Excel link$/, function () {
    action.isClickableWait(ODTIJobsPage.exportToExcelLink, 20000);
    try {
        action.clickElement(ODTIJobsPage.exportToExcelLink);
    } catch (err) {
        console.log("Export to excel error: " + err);
        chai.expect(err).to.be.null;
    }
})

Then(/^The Excel file is downloaded$/, function () {
    browser.pause(10000);
    let downloadsDirectoryPath = process.cwd();
    console.log("Directory of workspace: " + downloadsDirectoryPath);
    let odtiExcelFileName = null;
    let filesInDownloads = fs.readdirSync(downloadsDirectoryPath);
    console.log("Files in workspace: " + filesInDownloads);
    for (let i = 0; i < filesInDownloads.length; i++) {
        if (filesInDownloads[i].includes("ODTIReport_")) {
            odtiExcelFileName = filesInDownloads[i];
        }
    }
    console.log("Exported excel file name: " + odtiExcelFileName);
    let excelFilePath = process.cwd() + "/" + odtiExcelFileName;
    console.log("Exported excel file path: " + excelFilePath);
    if (odtiExcelFileName !== null) {
        let excelFileExistStatus = fs.existsSync(excelFilePath);
        console.log("Exported excel file exists status: " + excelFileExistStatus);
        chai.expect(excelFileExistStatus).to.be.true;
        fs.unlinkSync(excelFilePath);
        browser.pause(5000);
    } else {
        console.log("Exported excel file exists status: false");
    }
})

When(/^I click on actual count arrow button$/, function () {
    action.waitUntilLoadingIconDisappears();
    action.isClickableWait(ODTIJobsPage.actualCountArrowButton, 20000);
    action.clickElement(ODTIJobsPage.actualCountArrowButton);
})

Then(/^The actual count of records is greater than expected records "(.*)"$/, function (expectedCount) {
    action.isVisibleWait(ODTIJobsPage.actualCountRecordsValueText, 10000);
    let actualCountOfRecords = action.getElementText(ODTIJobsPage.actualCountRecordsValueText);
    let counter = 0;
    while (parseInt(actualCountOfRecords) <= 500 && counter < 5) {
        browser.pause(3000);
        action.clickElement(ODTIJobsPage.actualCountArrowButton);
        actualCountOfRecords = action.getElementText(ODTIJobsPage.actualCountRecordsValueText);
        counter++;
    }
    actualCountOfRecords = action.getElementText(ODTIJobsPage.actualCountRecordsValueText);
    chai.expect(parseInt(actualCountOfRecords)).to.be.greaterThan(parseInt(expectedCount));
})

Then(/^The records count in records counter is less than expected records "(.*)"$/, function (expectedCount) {
    browser.pause(10000)
    action.isVisibleWait(ODTIJobsPage.recordsCountText, 10000)
    let recordsCountText = action.getElementText(ODTIJobsPage.recordsCountText);
    let recordsCountActual = recordsCountText.split(" ")[0];
    chai.expect(parseInt(recordsCountActual)).to.be.lessThan(parseInt(expectedCount));
})

Then(/^The results should be sorted on clicking each column header "(.*)"$/, function (columnHeaders) {
    let columnHeadersList = columnHeaders.split(",");
    for (let header = 0; header < columnHeadersList.length; header++) {
        let valuesActual = [];
        let valuesSorted = [];
        let columnHeaderElement = $(ODTIJobsPage.columnHeaderLocator.replace("<dynamic>", columnHeadersList[header]))
        if (columnHeadersList[header] !== "Empty") {
            action.clickElement(columnHeaderElement);
        }
        browser.pause(5000);
        let totalRowsCount = ODTIJobsPage.totalRowCount;
        for (let row = 1; row <= totalRowsCount; row++) {
            let headerIndex = header + 1;
            let columnValueElement = $(ODTIJobsPage.columnValueTextLocator.replace("<dynamic1>", row.toString()).replace("<dynamic2>", headerIndex.toString()));
            if (action.isExistingWait(columnValueElement, 0)) {
                valuesActual.push(action.getElementText(columnValueElement));
            }
        }
        if (valuesActual[1].includes(":") && valuesActual[1].length <= 5) {
            valuesSorted = [...valuesActual].sort((a, b) => a - b);
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
})

When(/^I click on page number "(.*)"$/, function (pageNumber) {
    let paginationPageNumberLink = $(ODTIJobsPage.paginationPageNumberLinkLocator.replace("<dynamic>", pageNumber));
    action.isClickableWait(paginationPageNumberLink, 10000);
    action.clickElement(paginationPageNumberLink)
})

When(/^I click on next page arrow$/, function () {
    action.isClickableWait(ODTIJobsPage.nextPageArrowLink, 10000);
    action.clickElement(ODTIJobsPage.nextPageArrowLink)
})

When(/^I click on previous page arrow$/, function () {
    action.isClickableWait(ODTIJobsPage.previousPageArrowLink, 10000);
    action.clickElement(ODTIJobsPage.previousPageArrowLink)
})

Then(/^I should be navigated to page "(.*)"$/, function (expectedPageNumber) {
    browser.waitUntil(
        () => action.getElementText(ODTIJobsPage.currentPageNumberLink) === expectedPageNumber,
        {
            timeout: 20000,
            timeoutMsg: 'expected page to be navigated within 20s'
        }
    );
    let currentPageNumber = action.getElementText(ODTIJobsPage.currentPageNumberLink);
    chai.expect(currentPageNumber).to.equal(expectedPageNumber);
})

Then(/^The columns available for ODTI Jobs for the user doesn't contain "(.*)"$/, function (expectedHeaders) {
    action.isVisibleWait(ODTIJobsPage.odtiJobTableColumnHeaders, 10000);
    let odtiColumnHeadersActual = action.getElementText(ODTIJobsPage.odtiJobTableColumnHeaders);
    let headerListExpected = expectedHeaders.split(",");
    for (let headerIndex = 0; headerIndex < headerListExpected.length; headerIndex++) {
        chai.expect(odtiColumnHeadersActual).to.not.includes(headerListExpected[headerIndex]);
    }
})

Then(/^The ODTI Service Charge ID and Campus Name results are not clickable and read only$/, function () {
    browser.pause(5000)
    let clickableTageName = "a";
    let serviceChargeID1TextElement = $(ODTIJobsPage.odtiServiceChargeIDTextLocator.replace("<dynamic>", "1"));
    let serviceChargeIDVisibleStatus = action.isVisibleWait(serviceChargeID1TextElement, 10000);
    let serviceChargeIDTagName = action.getElementTagName(serviceChargeID1TextElement);
    chai.expect(serviceChargeIDVisibleStatus).to.be.true;
    chai.expect(serviceChargeIDTagName).to.not.equal(clickableTageName);
    let campusName1TextElement = $(ODTIJobsPage.campusNameValueTextLocator.replace("<dynamic>", "1"));
    let campusNameVisibleStatus = action.isVisibleWait(campusName1TextElement, 10000);
    let campusNameTagName = action.getElementTagName(campusName1TextElement);
    chai.expect(campusNameVisibleStatus).to.be.true;
    chai.expect(campusNameTagName).to.not.equal(clickableTageName);
})

Then(/^All the available jobs are displayed$/, function () {
    let availableJobsDisplayStatus = action.isVisibleWait(ODTIJobsPage.availableJobRecordsTable, 10000);
    chai.expect(availableJobsDisplayStatus).to.be.true;
})

Then(/^The records count in records counter has expected records "(.*)"$/, function (expectedCount) {
    action.isVisibleWait(ODTIJobsPage.recordsCountText, 10000)
    let recordsCountTextActual = action.getElementText(ODTIJobsPage.recordsCountText);
    chai.expect(recordsCountTextActual).to.includes(expectedCount);
})

When(/^I enter the search value "(.*)" in the search field$/, function (searchValue) {
    action.isVisibleWait(ODTIJobsPage.searchByTextBox, 10000);
    action.addValueAndPressReturnTab(ODTIJobsPage.searchByTextBox, searchValue);
})

Then(/^The records are displayed only for the entered filter value "(.*)" under column number "(.*)"$/, function (columnFilterValue, columnNumber) {
    browser.pause(5000);
    let totalRowsCount = ODTIJobsPage.totalRowCount;
    for (let row = 1; row <= totalRowsCount; row++) {
        let columnValueElement = $(ODTIJobsPage.columnValueTextLocator.replace("<dynamic1>", row.toString()).replace("<dynamic2>", columnNumber.toString()));
        let actualColumnValue = action.getElementText(columnValueElement);
        chai.expect(actualColumnValue).to.equal(columnFilterValue);
    }
})

When(/^I click on a Job ID value under ODTI SERVICE CHARGE ID column$/, function () {
    browser.pause(5000);
    action.waitUntilLoadingIconDisappears();
    let jobIdFirstValueElement = $(ODTIJobsPage.columnValueLinkLocator.replace("<dynamic1>", "1").replace("<dynamic2>", "1"));
    action.isVisibleWait(jobIdFirstValueElement, 10000);
    GlobalData.ODTI_SERVICE_CHARGE_JOB_ID_IN_TABLE = action.getElementText(jobIdFirstValueElement);
    action.clickElement(jobIdFirstValueElement);
})

Then(/^I should be navigated to the Job detail page "(.*)" of the respective job that is clicked$/, function (expectedPageUrl) {
    action.navigateToLatestWindow();
    action.isVisibleWait(ODTIJobsPage.jobIDTextInODTIJobDetailsPage, 10000);
    let currentPageUrlActual = action.getPageUrl();
    chai.expect(currentPageUrlActual).to.includes(expectedPageUrl);
    let jobIDValueInJobDetails = action.getElementText(ODTIJobsPage.jobIDTextInODTIJobDetailsPage);
    chai.expect(jobIDValueInJobDetails).to.includes(GlobalData.ODTI_SERVICE_CHARGE_JOB_ID_IN_TABLE);
})

When(/^I click on a Campus Name value under Campus Name column$/, function () {
    browser.pause(5000);
    action.waitUntilLoadingIconDisappears();
    let firstCampusNameElement = $(ODTIJobsPage.columnValueLinkLocator.replace("<dynamic1>", "1").replace("<dynamic2>", "4"));
    action.isVisibleWait(firstCampusNameElement, 10000);
    GlobalData.ODTI_CAMPUS_NAME = action.getElementText(firstCampusNameElement);
    action.clickElement(firstCampusNameElement);
})

Then(/^I should be navigated to the Campus detail page "(.*)" of the respective Campus that is clicked$/, function (expectedCampusPageUrl) {
    action.navigateToLatestWindow();
    action.isVisibleWait(ODTIJobsPage.selectedCampusNameText, 10000);
    let currentCampusPageUrl = action.getPageUrl();
    chai.expect(currentCampusPageUrl).to.includes(expectedCampusPageUrl);
    let textInCampusPage = action.getElementText(ODTIJobsPage.selectedCampusNameText);
    chai.expect(textInCampusPage).to.includes(GlobalData.ODTI_CAMPUS_NAME);
})
When(/^I add dropdown filter "(.*)" "(.*)", "(.*)" "(.*)", "(.*)" "(.*)"$/, function (filterOption, filterOptionIndex, filterComparator, filterComparatorIndex, filterValue, filterValueIndex) {
    let filterFieldDropdownElement = $(ODTIJobsPage.filterFieldDropdownLocator.replace("<dynamic>", filterOptionIndex));
    action.isVisibleWait(filterFieldDropdownElement, 20000);
    let filterFieldDropdownOptionElement = $(ODTIJobsPage.filterFieldDropdownOptionLocator.replace("<dynamic1>", filterOptionIndex).replace("<dynamic2>", filterOption));
    action.isExistingWait(filterFieldDropdownOptionElement, 20000);
    action.selectTextFromDropdown(filterFieldDropdownElement, filterOption);
    let filterComparisonDropdownElement = $(ODTIJobsPage.filterComparisonDropdownLocator.replace("<dynamic>", filterComparatorIndex));
    action.isVisibleWait(filterComparisonDropdownElement, 20000);
    let filterComparisonDropdownOptionElement = $(ODTIJobsPage.filterComparisonDropdownOptionLocator.replace("<dynamic1>", filterComparatorIndex).replace("<dynamic2>", filterComparator));
    action.isExistingWait(filterComparisonDropdownOptionElement, 20000)
    action.selectTextFromDropdown(filterComparisonDropdownElement, filterComparator);
    let filterValueTextBoxElement = $(ODTIJobsPage.filterValueDropdownLocator.replace("<dynamic>", filterValueIndex));
    action.isVisibleWait(filterValueTextBoxElement, 20000);
    action.selectTextFromDropdown(filterValueTextBoxElement, filterValue);
    action.clickElement(ODTIJobsPage.searchByTextBox);
    let filterValueOptionElement = $(ODTIJobsPage.filterValueDropdownOptionLocator.replace("<dynamic1>", filterValueIndex).replace("<dynamic2>", filterValue));
    browser.pause(5000);
    let filterValueSet = action.isSelectedWait(filterValueOptionElement);
    let counter = 0;
    //Checking and re-setting the value if not its set as expected
    while (filterValueSet !== false && counter < 5) {
        action.selectTextFromDropdown(filterValueTextBoxElement, filterValue);
        action.clickElement(ODTIJobsPage.searchByTextBox);
        browser.pause(5000);
        filterValueSet = action.isSelectedWait(filterValueOptionElement);
        counter++;
    }
})

When(/^I get the records count in ODTI before adding filters$/, function () {
    browser.pause(5000)
    action.isVisibleWait(ODTIJobsPage.recordsCountText, 10000);
    GlobalData.ODTI_JOB_RECORDS_COUNT = action.getElementText(ODTIJobsPage.recordsCountText);
    console.log("Job records before adding filters: " + GlobalData.ODTI_JOB_RECORDS_COUNT);
})

Then(/^The total record value should be updated as per the number of records displayed$/, function () {
    browser.pause(5000)
    action.isVisibleWait(ODTIJobsPage.recordsCountText, 10000)
    let recordsCountAfterFilters = action.getElementText(ODTIJobsPage.recordsCountText);
    console.log("Job records after adding filters: " + recordsCountAfterFilters);
    chai.expect(GlobalData.ODTI_JOB_RECORDS_COUNT).to.not.equal(recordsCountAfterFilters);
})

When(/^I Click on the X Icon beside the filters applied$/, function () {
    let xIconsCount = ODTIJobsPage.filterCloseXIconsCount
    for (let iconNumber = 0; iconNumber < xIconsCount; iconNumber++) {
        action.isVisibleWait(ODTIJobsPage.filterCloseXIcon,10000);
        action.clickElement(ODTIJobsPage.filterCloseXIcon);
        browser.pause(5000);
    }
})

Then(/^All the Jobs are displayed as no filters are applied and the number of records gets updated$/, function () {
    browser.pause(5000)
    action.waitUntilLoadingIconDisappears();
    action.isVisibleWait(ODTIJobsPage.recordsCountText, 10000)
    let recordsCountAfterFiltersRemoved = action.getElementText(ODTIJobsPage.recordsCountText);
    console.log("Job records after removing filters: " + recordsCountAfterFiltersRemoved);
    chai.expect(GlobalData.ODTI_JOB_RECORDS_COUNT).to.equal(recordsCountAfterFiltersRemoved);
})


When(/^I click on a Interpreter Name value under Interpreter Name column$/, function () {
    browser.pause(5000);
    action.waitUntilLoadingIconDisappears();
    let firstInterpreterNameElement = $(ODTIJobsPage.columnValueLinkLocator.replace("<dynamic1>", "1").replace("<dynamic2>", "6"));
    action.isVisibleWait(firstInterpreterNameElement, 10000);
    GlobalData.ODTI_INTERPRETER_NAME = action.getElementText(firstInterpreterNameElement);
    action.clickElement(firstInterpreterNameElement);
})

Then(/^I should be navigated to the Interpreter detail page "(.*)" of the respective Interpreter that is clicked$/, function (expectedInterpreterPageUrl) {
    action.navigateToLatestWindow();
    action.isVisibleWait(ODTIJobsPage.selectedInterpreterNameText, 10000);
    let currentInterpreterPageUrl = action.getPageUrl();
    chai.expect(currentInterpreterPageUrl).to.includes(expectedInterpreterPageUrl);
    let textInInterpreterPage = action.getElementText(ODTIJobsPage.selectedInterpreterNameText);
    chai.expect(textInInterpreterPage).to.includes(GlobalData.ODTI_INTERPRETER_NAME);
})

Then(/^the user is viewing the Job Details page$/, function () {
    action.navigateToLatestWindow();
    action.isVisibleWait(ODTIJobsPage.jobIDTextInODTIJobDetailsPage, 10000);
    let currentPageUrlActual = action.getPageUrl();
    chai.expect(currentPageUrlActual).to.includes("OnDemandTI/JobDetails.aspx");
})

When(/^I get Campus Name value under Campus Name column$/, function () {
    let firstCampusNameElement = $(ODTIJobsPage.columnValueLinkLocator.replace("<dynamic1>", "1").replace("<dynamic2>", "4"));
    action.isVisibleWait(firstCampusNameElement, 10000);
    GlobalData.ODTI_CAMPUS_NAME = action.getElementText(firstCampusNameElement);
})

Then(/^they will see the following fields by default in the Search section: Search by contractor, language and contact ID, RecordStatus$/, function () {
    let searchByContractorLanguageAndContactIDSearchFieldDisplayStatus = action.isVisibleWait(ODTIJobsPage.searchByContractorLanguageAndContactIDSearchField,20000);
    chai.expect(searchByContractorLanguageAndContactIDSearchFieldDisplayStatus).to.be.true;
    let recordStatusExistStatus = action.isExistingWait(ODTIJobsPage.recordStatusSelectedOption, 60000);
    chai.expect(recordStatusExistStatus).to.be.true;
})

Then(/^the following filters can be added from Advanced Search as per the Jobs Management page: "(.*)"$/, function (advancedSearchFilterOptions) {
    let advancedSearchOptionsList = advancedSearchFilterOptions.split(",");
    let filterFieldElement = $(ODTIJobsPage.filterFieldDropdownLocator.replace("<dynamic>", "1"));
    for (let index = 0; index < advancedSearchOptionsList.length; index++) {
        let advancedSearchFilterOptionsActual = action.getElementText(filterFieldElement);
        chai.expect(advancedSearchFilterOptionsActual).to.includes(advancedSearchOptionsList[index]);
    }
})

When(/^they will see a table$/, function () {
    let availableJobsDisplayStatus = action.isVisibleWait(ODTIJobsPage.availableJobRecordsTable, 60000);
    GlobalData.ODTI_JOBS_PAGE_WINDOW_HANDLE = action.getWindowHandle();
    chai.expect(availableJobsDisplayStatus).to.be.true;
})

When(/^this will only display jobs that have been Completed Billing & Merging processes done$/, function () {
    let recordStatusExistStatus = action.isExistingWait(ODTIJobsPage.recordStatusSelectedOption, 60000);
    chai.expect(recordStatusExistStatus).to.be.true;
})

When(/^the relevant information will be shown under each column$/, function () {
    let tableDataDisplayStatus = action.isVisibleWait(ODTIJobsPage.resultsTableBodyData, 10000);
    chai.expect(tableDataDisplayStatus).to.be.true;
})

When(/^ODTI Service Charge ID, Campus Name and Interpreter Name will all be hyperlinked and in bold font weight$/, function () {
    let serviceChargeID1TextElement = $(ODTIJobsPage.odtiTableResultsHyperlinkDataElementLocator.replace("<dynamicColumnIndex>", "1"));
    let serviceChargeIDHyperlinkDisplayStatus = action.isVisibleWait(serviceChargeID1TextElement, 10000);
    chai.expect(serviceChargeIDHyperlinkDisplayStatus).to.be.true;
    let campusName1TextElement = $(ODTIJobsPage.odtiTableResultsHyperlinkDataElementLocator.replace("<dynamicColumnIndex>", "4"));
    let campusNameHyperlinkDisplayStatus = action.isVisibleWait(campusName1TextElement, 10000);
    chai.expect(campusNameHyperlinkDisplayStatus).to.be.true;
    let interpreterName1TextElement = $(ODTIJobsPage.odtiTableResultsHyperlinkDataElementLocator.replace("<dynamicColumnIndex>", "6"));
    let interpreterNameHyperlinkDisplayStatus = action.isVisibleWait(interpreterName1TextElement, 10000);
    chai.expect(interpreterNameHyperlinkDisplayStatus).to.be.true;
})

When(/^the number of records will be displayed at the bottom of the table as per existing functionality$/, function () {
    let recordsCountDisplayStatus = action.isVisibleWait(ODTIJobsPage.recordsCountText, 10000);
    chai.expect(recordsCountDisplayStatus).to.be.true;
})

Then(/^the user will not see the "(.*)" column$/, function (expectedHeaders) {
    action.isVisibleWait(ODTIJobsPage.exportToExcelLink, 30000);
    action.isVisibleWait(ODTIJobsPage.odtiJobTableColumnHeaders, 10000);
    let odtiColumnHeadersActual = action.getElementText(ODTIJobsPage.odtiJobTableColumnHeaders);
    let headerListExpected = expectedHeaders.split(",");
    for (let headerIndex = 0; headerIndex < headerListExpected.length; headerIndex++) {
        chai.expect(odtiColumnHeadersActual).to.not.includes(headerListExpected[headerIndex]);
    }
})

When(/^they click the ODTI Service Charge ID hyperlink$/, function () {
    let serviceChargeID1TextElement = $(ODTIJobsPage.odtiTableResultsHyperlinkDataElementLocator.replace("<dynamicColumnIndex>", "1"));
    action.isVisibleWait(serviceChargeID1TextElement, 10000);
    action.clickElement(serviceChargeID1TextElement);
})

When(/^they are navigated to the Job Details page in a new tab$/, function () {
    action.navigateToLatestWindow();
    let currentPageUrlActual = action.getPageUrl();
    chai.expect(currentPageUrlActual).to.includes("JobDetails.aspx");
})

When(/^they click the Campus Name hyperlink$/, function () {
    action.navigateToWindowHandle(GlobalData.ODTI_JOBS_PAGE_WINDOW_HANDLE)
    let campusName1TextElement = $(ODTIJobsPage.odtiTableResultsHyperlinkDataElementLocator.replace("<dynamicColumnIndex>", "4"));
    action.isVisibleWait(campusName1TextElement, 10000);
    action.clickElement(campusName1TextElement);
})

When(/^they are navigated to the Campus Details page in a new tab$/, function () {
    action.navigateToLatestWindow();
    let currentPageUrlActual = action.getPageUrl();
    chai.expect(currentPageUrlActual).to.includes("CampusDetails.aspx");
})

When(/^they click the Interpreter Name$/, function () {
    action.navigateToWindowHandle(GlobalData.ODTI_JOBS_PAGE_WINDOW_HANDLE)
    let interpreterName1TextElement = $(ODTIJobsPage.odtiTableResultsHyperlinkDataElementLocator.replace("<dynamicColumnIndex>", "6"));
    action.isVisibleWait(interpreterName1TextElement, 10000);
    action.clickElement(interpreterName1TextElement);
})

When(/^they are navigated to the Interpreter’s Profile page in a new tab$/, function () {
    action.navigateToLatestWindow();
    let currentPageUrlActual = action.getPageUrl();
    chai.expect(currentPageUrlActual).to.includes("PreviewContractorProfile.aspx");
})

When(/^the user has not set a RecordStatus filter, or has set it to show "(.*)"$/, function (filterValue) {
    let filterValueDropdownElement = $(ODTIJobsPage.filterValueDropdownLocator.replace("<dynamic>", "1"));
    action.isVisibleWait(filterValueDropdownElement, 20000, "Filter value dropdown in ODTI Jobs page");
    action.selectTextFromDropdown(filterValueDropdownElement, filterValue, "Filter value dropdown in ODTI Jobs page");
})

When(/^the rows which contain a Do Not Export record will have a Gray font-color$/, function () {
    let serviceChargeID1TextElement = $(ODTIJobsPage.odtiTableResultsHyperlinkDataElementLocator.replace("<dynamicColumnIndex>", "1"));
    action.isVisibleWait(serviceChargeID1TextElement, 10000, "Service charge ID row in ODTI Jobs page");
    browser.waitUntil(
        () => action.getElementAttribute(serviceChargeID1TextElement, "style", "Service charge ID row in ODTI Jobs page") === "color: #AAAAAA;",
        {
            timeout: 20000,
            timeoutMsg: 'expected ODTI Job result attribute to change within 20s'
        }
    );
    let styleColourOfRowElement = action.getElementAttribute(serviceChargeID1TextElement, "style", "Service charge ID row in ODTI Jobs page");
    chai.expect(styleColourOfRowElement).to.equal("color: #AAAAAA;");
})