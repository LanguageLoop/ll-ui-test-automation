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

When(/^they are navigated to the ODTI page$/, function () {
    let pageTitleActual = action.getPageTitle()
    chai.expect(pageTitleActual).to.includes("ODTI");
})

Then(/^they will see the ODTI Interpreters page by default$/, function () {
    let ODTIInterpretersPageOption = $(ODTIJobsPage.ODTIJobsSwitchDropdownOptionLocator.replace("<dynamic>", "ODTI Interpreters"));
    let InterpretersPageSelectedStatus = action.isSelectedWait(ODTIInterpretersPageOption, 10000);
    chai.expect(InterpretersPageSelectedStatus).to.be.true;
})

Then(/^they will see a dropdown to switch to the ODTI Jobs page$/, function () {
    let ODTIJobsSwitchDropdownDisplayStatus = action.isVisibleWait(ODTIJobsPage.ODTIJobsSwitchDropdown, 10000);
    chai.expect(ODTIJobsSwitchDropdownDisplayStatus).to.be.true;
})

Then(/^they will see a dropdown to select Language$/, function () {
    let ODTILanguageSwitchDropdownDisplayStatus = action.isVisibleWait(ODTIJobsPage.ODTILanguageSwitchDropdown, 10000);
    chai.expect(ODTILanguageSwitchDropdownDisplayStatus).to.be.true;
})

Then(/^they will a dropdown to select Logon Status with label Any - LogOn Status$/, function () {
    let ODTILogonStatusDisplayStatus = action.isVisibleWait(ODTIJobsPage.ODTILogonStatusDropdown, 10000);
    chai.expect(ODTILogonStatusDisplayStatus).to.be.true;
    let ODTILogonStatusDropdownLabelDisplayStatus = action.isVisibleWait(ODTIJobsPage.ODTILogonStatusDropdownLabel, 10000);
    chai.expect(ODTILogonStatusDropdownLabelDisplayStatus).to.be.true;
})

Then(/^they will see a language searchable dropdown$/, function () {
    action.isVisibleWait(ODTIJobsPage.ODTILanguageSwitchDropdown, 10000);
    action.clickElement(ODTIJobsPage.ODTILanguageSwitchDropdown);
    let languageDropdownSearchBoxDisplayStatus = action.isVisibleWait(ODTIJobsPage.languageDropdownSearchBox, 10000);
    chai.expect(languageDropdownSearchBoxDisplayStatus).to.be.true;
})

Then(/^the label will be: Language$/, function () {
    let languageDropdownLanguageLabelElement = $(ODTIJobsPage.ODTILanguageDropdownLabel.replace("<dynamic>", "- Language -"));
    let languageDropdownLabelDisplayStatus = action.isVisibleWait(languageDropdownLanguageLabelElement, 10000);
    chai.expect(languageDropdownLabelDisplayStatus).to.be.true;
})

Then(/^the user will be able to search for a language "(.*)"$/, function (language) {
    if (action.isVisibleWait(ODTIJobsPage.languageDropdownSearchBox, 10000) === false) {
        action.clickElement(ODTIJobsPage.ODTILanguageSwitchDropdown);
    }
    action.enterValueAndPressReturn(ODTIJobsPage.languageDropdownSearchBox, language);
})

Then(/^the user will be able to select a single Language "(.*)"$/, function (language) {
    let languageSelectedElement = $(ODTIJobsPage.ODTILanguageDropdownLabel.replace("<dynamic>", language));
    let languageSelectedDisplayStatus = action.isVisibleWait(languageSelectedElement, 10000);
    chai.expect(languageSelectedDisplayStatus).to.be.true;
})

Then(/^the label will be: Any-LogOn Status$/, function () {
    let logonStatusDropdownLabelElement = $(ODTIJobsPage.logonStatusDropdownOptionLabel.replace("<dynamic>", "Any - LogOn Status"));
    let logonStatusDropdownLabelSelectedStatus = action.isSelectedWait(logonStatusDropdownLabelElement, 10000);
    chai.expect(logonStatusDropdownLabelSelectedStatus).to.be.true;
})

Then(/^the user will be able to select status for the selected language using options "(.*)"$/, function (logonStatus) {
    action.isVisibleWait(ODTIJobsPage.ODTILogonStatusDropdown);
    let logonStatusListOptions = logonStatus.split(",");
    for (let index = 0; index < logonStatusListOptions.length; index++) {
        action.selectTextFromDropdown(ODTIJobsPage.ODTILogonStatusDropdown, logonStatusListOptions[index]);
        let logonStatusDropdownLabelElement = $(ODTIJobsPage.logonStatusDropdownOptionLabel.replace("<dynamic>", logonStatusListOptions[index]));
        let logonStatusDropdownLabelSelectedStatus = action.isSelectedWait(logonStatusDropdownLabelElement, 10000);
        chai.expect(logonStatusDropdownLabelSelectedStatus).to.be.true;
    }
})

Then(/^the table will appear$/, function () {
    let ODTIInterpretersResultsTableDisplayStatus = action.isVisibleWait(ODTIJobsPage.ODTIInterpretersResultsTable,10000);
    chai.expect(ODTIInterpretersResultsTableDisplayStatus).to.be.true;
})

Then(/^show only interpreters "(.*)" with that Language$/, function (interpreters) {
    let interpretersList = interpreters.split(",");
    let ODTIInterpretersResultsTableTextActual = action.getElementText(ODTIJobsPage.ODTIInterpretersResultsTableBody);
    for (let index = 0; index < interpretersList.length; index++) {
        chai.expect(ODTIInterpretersResultsTableTextActual).to.includes(interpretersList[index]);
    }
})

Then(/^show only interpreters with selected Language and the LogOn Status "(.*)" containing "(.*)" status$/, function (columnNumber,logonStatus) {
    browser.pause(5000);
    let logonStatusList = logonStatus.split(",");
    let logonStatusActual = [];
    let totalRowsCount = ODTIJobsPage.interpreterResultRowsCount;
    for (let row = 1; row <= totalRowsCount; row++) {
        let columnValueElement = $(ODTIJobsPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", row.toString()).replace("<dynamicColumnNumber>", columnNumber.toString()));
        let actualColumnValue = action.getElementText(columnValueElement);
        logonStatusActual.push(actualColumnValue);
    }
    chai.expect(logonStatusActual).to.include.members(logonStatusList);
})

Then(/^the table will have the following columns: "(.*)"$/, function (expectedColumns) {
    let columnsList = expectedColumns.split(",");
    let ODTIInterpretersTableColumnsActual = action.getElementText(ODTIJobsPage.interpreterColumnHeaders);
    for (let index = 0; index < columnsList.length; index++) {
        chai.expect(ODTIInterpretersTableColumnsActual).to.includes(columnsList[index]);
    }
})

Then(/^the data will be displayed under each column as per the mockup$/, function () {
    let ODTITableDataDisplayStatus = action.isVisibleWait(ODTIJobsPage.ODTIInterpretersResultsTableBody,10000);
    chai.expect(ODTITableDataDisplayStatus).to.be.true;
})

Then(/^Name will be hyperlinked to the Contractor profile$/, function () {
    let columnValueElement = $(ODTIJobsPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "2"));
    let actualContractorNameHTML = action.getElementHTML(columnValueElement);
    chai.expect(actualContractorNameHTML).to.includes("<a ");
    chai.expect(actualContractorNameHTML).to.includes("href");
})

Then(/^it will show the NAATI Level for that Language or Contractor$/, function () {
    let interpreterNAATILevels = ["Conference (Senior)","Conference","Certified Interpreter","Professional","Certified Provisional Interpreter","Recognised","Non-Accredited"];
    let columnValueElement = $(ODTIJobsPage.interpreterResultsValueLocator.replace("<dynamicRowNumber>", "1").replace("<dynamicColumnNumber>", "3"));
    let actualNAATIText = action.getElementText(columnValueElement);
    chai.expect(interpreterNAATILevels).to.include(actualNAATIText);
})