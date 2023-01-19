When(/^I view the ODTI > ODTI Jobs page$/, function () {
    action.isVisibleWait(ODTIJobsPage.titleDropdown,10000);
    action.selectTextFromDropdown(ODTIJobsPage.titleDropdown, "ODTI Jobs");
})

When(/^I select campus "(.*)" from the Campus dropdown$/, function (campusID) {
    action.isVisibleWait(ODTIJobsPage.campusDropdown,10000);
    action.selectTextFromDropdown(ODTIJobsPage.campusDropdown, campusID);
})

When(/^I enter Start Date "(.*)" and End Date "(.*)"$/, function (startDate,endDate) {
    action.isVisibleWait(ODTIJobsPage.startDateTextBox,10000);
    action.addValueAndPressReturnTab(ODTIJobsPage.startDateTextBox, startDate);
    action.isVisibleWait(ODTIJobsPage.endDateTextBox,10000);
    action.addValueAndPressReturnTab(ODTIJobsPage.endDateTextBox, endDate);
})

When(/^I get the records count in records counter in Admin$/, function () {
    browser.pause(10000)
    action.isVisibleWait(ODTIJobsPage.recordsCountText,10000);
    GlobalData.ODTI_JOB_RECORDS_COUNT_ADMIN = action.getElementText(ODTIJobsPage.recordsCountText);
    console.log("Job records in Admin: "+GlobalData.ODTI_JOB_RECORDS_COUNT_ADMIN);
})

When(/^I get the ODTI SERVICE CHARGE ID values In Admin$/, function () {
    action.isClickableWait(ODTIJobsPage.callStartHeader,10000);
    action.clickElement(ODTIJobsPage.callStartHeader);
    browser.pause(5000)
    let totalRowsCount = ODTIJobsPage.totalRowCount;
    GlobalData.ODTI_SERVICE_CHARGE_LIST_ADMIN = [];
    for (let rowIndex = 1; rowIndex <= totalRowsCount; rowIndex++) {
        let serviceChargeIDTextElement = $(ODTIJobsPage.odtiServiceChargeIDTextLocator.replace("<dynamic>", rowIndex.toString()));
        GlobalData.ODTI_SERVICE_CHARGE_LIST_ADMIN.push(action.getElementText(serviceChargeIDTextElement));
    }
    console.log("Service charge IDs in Admin: "+GlobalData.ODTI_SERVICE_CHARGE_LIST_ADMIN)
})

Then(/^I verify the records count in records counter$/, function () {
    browser.pause(10000)
    action.isVisibleWait(ODTIJobsPage.recordsCountText,10000)
    let recordsCountNonAdmin = action.getElementText(ODTIJobsPage.recordsCountText);
    console.log("Job records in User: "+recordsCountNonAdmin);
    chai.expect(GlobalData.ODTI_JOB_RECORDS_COUNT_ADMIN).to.equal(recordsCountNonAdmin);
})

Then(/^I verify the ODTI SERVICE CHARGE ID values$/, function () {
    action.isClickableWait(ODTIJobsPage.callStartHeader,10000);
    action.clickElement(ODTIJobsPage.callStartHeader);
    browser.pause(5000)
    let totalRowsCount = ODTIJobsPage.totalRowCount;
    let serviceChargeIDsNonAdmin = [];
    for (let rowIndex = 1; rowIndex <= totalRowsCount; rowIndex++) {
        let serviceChargeIDTextElement = $(ODTIJobsPage.odtiServiceChargeIDTextLocator.replace("<dynamic>", rowIndex.toString()));
        serviceChargeIDsNonAdmin.push(action.getElementText(serviceChargeIDTextElement));
    }
    console.log("Service charge IDs in User: "+serviceChargeIDsNonAdmin)
    chai.expect(GlobalData.ODTI_SERVICE_CHARGE_LIST_ADMIN).to.have.ordered.members(serviceChargeIDsNonAdmin);
})

When(/^The RecordStatus Is Export$/, function () {
    let recordStatusExistStatus = action.isExistingWait(ODTIJobsPage.recordStatusSelectedOption,30000);
    chai.expect(recordStatusExistStatus).to.be.true;
})

When(/^I click Advanced search link in Admin$/, function () {
    action.isVisibleWait(ODTIJobsPage.advancedSearchLink,10000);
    action.clickElement(ODTIJobsPage.advancedSearchLink);
})

When(/^I add filter "(.*)" "(.*)", "(.*)" "(.*)", "(.*)" "(.*)"$/, function (filterOption,filterOptionIndex,filterComparator,filterComparatorIndex,filterValue,filterValueIndex) {
    let filterFieldDropdownElement = $(ODTIJobsPage.filterFieldDropdownLocator.replace("<dynamic>",filterOptionIndex));
    action.isVisibleWait(filterFieldDropdownElement,10000);
    let filterFieldDropdownOptionElement = $(ODTIJobsPage.filterFieldDropdownOptionLocator.replace("<dynamic1>",filterOptionIndex).replace("<dynamic2>",filterOption));
    action.isExistingWait(filterFieldDropdownOptionElement,10000);
    action.selectTextFromDropdown(filterFieldDropdownElement,filterOption);
    let filterComparisonDropdownElement = $(ODTIJobsPage.filterComparisonDropdownLocator.replace("<dynamic>",filterComparatorIndex));
    action.isVisibleWait(filterComparisonDropdownElement,10000);
    let filterComparisonDropdownOptionElement = $(ODTIJobsPage.filterComparisonDropdownOptionLocator.replace("<dynamic1>",filterComparatorIndex).replace("<dynamic2>",filterComparator));
    action.isExistingWait(filterComparisonDropdownOptionElement,10000)
    action.selectTextFromDropdown(filterComparisonDropdownElement,filterComparator);
    let filterValueTextBoxElement = $(ODTIJobsPage.filterValueTextBoxLocator.replace("<dynamic>",filterValueIndex));
    action.isVisibleWait(filterValueTextBoxElement,10000);
    action.enterValueAndPressReturn(filterValueTextBoxElement,filterValue);
    action.pressKeys("Tab");
})

