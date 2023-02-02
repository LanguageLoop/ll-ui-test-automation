When(/^I view the ODTI > ODTI Jobs page$/, function () {
    action.isVisibleWait(ODTIJobsPage.titleDropdown, 10000);
    action.selectTextFromDropdown(ODTIJobsPage.titleDropdown, "ODTI Jobs");
    let ODTIJobsOptionInTitleDropdown = $(ODTIJobsPage.titleDropdownOption.replace("<dynamic>","ODTI Jobs"));
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
    let serviceChargeIDVisibleStatus = action.isVisibleWait(serviceChargeID1TextElement,10000);
    let serviceChargeIDTagName = action.getElementTagName(serviceChargeID1TextElement);
    chai.expect(serviceChargeIDVisibleStatus).to.be.true;
    chai.expect(serviceChargeIDTagName).to.not.equal(clickableTageName);
    let campusName1TextElement = $(ODTIJobsPage.campusNameValueTextLocator.replace("<dynamic>", "1"));
    let campusNameVisibleStatus = action.isVisibleWait(campusName1TextElement,10000);
    let campusNameTagName = action.getElementTagName(campusName1TextElement);
    chai.expect(campusNameVisibleStatus).to.be.true;
    chai.expect(campusNameTagName).to.not.equal(clickableTageName);
    let interpreterName1TextElement = $(ODTIJobsPage.interpreterNameValueTextLocator.replace("<dynamic>", "1"));
    let interpreterNameVisibleStatus = action.isVisibleWait(interpreterName1TextElement,10000);
    let interpreterNameTagName = action.getElementTagName(interpreterName1TextElement);
    chai.expect(interpreterNameVisibleStatus).to.be.true;
    chai.expect(interpreterNameTagName).to.not.equal(clickableTageName);
})

Then(/^The No odti billings to show... message is displayed$/, function () {
    let noBillingsMessageDisplayStatus = action.isVisibleWait(ODTIJobsPage.noBillingsMessageText,20000);
    chai.expect(noBillingsMessageDisplayStatus).to.be.true;
})

When(/^I click on Export to Excel link$/, function () {
    action.isClickableWait(ODTIJobsPage.exportToExcelLink,20000);
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
    action.isClickableWait(ODTIJobsPage.actualCountArrowButton,20000);
    action.clickElement(ODTIJobsPage.actualCountArrowButton);
})

Then(/^The actual count of records is greater than expected records "(.*)"$/, function (expectedCount) {
    action.isVisibleWait(ODTIJobsPage.actualCountRecordsValueText,10000);
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
    let serviceChargeIDVisibleStatus = action.isVisibleWait(serviceChargeID1TextElement,10000);
    let serviceChargeIDTagName = action.getElementTagName(serviceChargeID1TextElement);
    chai.expect(serviceChargeIDVisibleStatus).to.be.true;
    chai.expect(serviceChargeIDTagName).to.not.equal(clickableTageName);
    let campusName1TextElement = $(ODTIJobsPage.campusNameValueTextLocator.replace("<dynamic>", "1"));
    let campusNameVisibleStatus = action.isVisibleWait(campusName1TextElement,10000);
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
    action.isVisibleWait(ODTIJobsPage.searchByTextBox,10000);
    action.addValueAndPressReturnTab(ODTIJobsPage.searchByTextBox,searchValue);
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

