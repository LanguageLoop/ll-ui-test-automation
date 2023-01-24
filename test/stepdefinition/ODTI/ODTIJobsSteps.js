When(/^I view the ODTI > ODTI Jobs page$/, function () {
    action.isVisibleWait(ODTIJobsPage.titleDropdown, 10000);
    action.selectTextFromDropdown(ODTIJobsPage.titleDropdown, "ODTI Jobs");
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
    let recordStatusExistStatus = action.isExistingWait(ODTIJobsPage.recordStatusSelectedOption, 30000);
    chai.expect(recordStatusExistStatus).to.be.true;
})

When(/^I click Advanced search link in Admin$/, function () {
    action.isVisibleWait(ODTIJobsPage.advancedSearchLink, 10000);
    action.clickElement(ODTIJobsPage.advancedSearchLink);
})

When(/^I add filter "(.*)" "(.*)", "(.*)" "(.*)", "(.*)" "(.*)"$/, function (filterOption, filterOptionIndex, filterComparator, filterComparatorIndex, filterValue, filterValueIndex) {
    let filterFieldDropdownElement = $(ODTIJobsPage.filterFieldDropdownLocator.replace("<dynamic>", filterOptionIndex));
    action.isVisibleWait(filterFieldDropdownElement, 10000);
    let filterFieldDropdownOptionElement = $(ODTIJobsPage.filterFieldDropdownOptionLocator.replace("<dynamic1>", filterOptionIndex).replace("<dynamic2>", filterOption));
    action.isExistingWait(filterFieldDropdownOptionElement, 10000);
    action.selectTextFromDropdown(filterFieldDropdownElement, filterOption);
    let filterComparisonDropdownElement = $(ODTIJobsPage.filterComparisonDropdownLocator.replace("<dynamic>", filterComparatorIndex));
    action.isVisibleWait(filterComparisonDropdownElement, 10000);
    let filterComparisonDropdownOptionElement = $(ODTIJobsPage.filterComparisonDropdownOptionLocator.replace("<dynamic1>", filterComparatorIndex).replace("<dynamic2>", filterComparator));
    action.isExistingWait(filterComparisonDropdownOptionElement, 10000)
    action.selectTextFromDropdown(filterComparisonDropdownElement, filterComparator);
    let filterValueTextBoxElement = $(ODTIJobsPage.filterValueTextBoxLocator.replace("<dynamic>", filterValueIndex));
    action.isVisibleWait(filterValueTextBoxElement, 10000);
    action.enterValueAndPressReturn(filterValueTextBoxElement, filterValue);
    action.pressKeys("Tab");
    let counter = 0;
    //Checking and re-setting the value if not its set as expected
    while (action.getElementValue(filterValueTextBoxElement) !== filterValue || counter < 5) {
        action.addValueAndPressReturnTab(filterValueTextBoxElement, filterValue);
        browser.pause(5000);
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
    action.clickElement(ODTIJobsPage.exportToExcelLink);
})

Then(/^The Excel file is downloaded$/, function () {
    browser.pause(10000);
    let downloadsDirectoryPath = process.cwd();
    let odtiExcelFileName;
    let filesInDownloads = fs.readdirSync(downloadsDirectoryPath);
    for (let i=0; i<filesInDownloads.length; i++){
        if (filesInDownloads[i].includes("ODTIReport_")){
            odtiExcelFileName = filesInDownloads[i];
        }
    }
    let excelFilePath = process.cwd() + "/" + odtiExcelFileName;
    let excelFileExistStatus = fs.existsSync(excelFilePath);
    chai.expect(excelFileExistStatus).to.be.true;
    fs.unlinkSync(excelFilePath);
    browser.pause(5000);
})

When(/^I click on actual count arrow button$/, function () {
    action.isClickableWait(ODTIJobsPage.actualCountArrowButton,20000);
    action.clickElement(ODTIJobsPage.actualCountArrowButton);
})

Then(/^The actual count of records is greater than expected records "(.*)"$/, function (expectedCount) {
    action.isVisibleWait(ODTIJobsPage.actualCountRecordsValueText,10000);
    let actualCountOfRecords = action.getElementText(ODTIJobsPage.actualCountRecordsValueText);
    chai.expect(parseInt(actualCountOfRecords)).to.be.greaterThan(parseInt(expectedCount));
})

