When(/^selects the same Start date "(.*)" and End date "(.*)" as in ODTI Jobs page$/, function (startDate, endDate) {
    action.isVisibleWait(ODTIDashboardPage.startDateTextBox, 10000, "Start date text box in ODTI Dashboard page");
    action.enterValue(ODTIDashboardPage.startDateTextBox, startDate, "Start date text box in ODTI Dashboard page");
    action.isVisibleWait(ODTIDashboardPage.endDateTextBox, 10000, "End date text box in ODTI Dashboard page");
    action.enterValue(ODTIDashboardPage.endDateTextBox, endDate, "End date text box in ODTI Dashboard page");
    action.waitUntilLoadingIconDisappears();
})

When(/^click on Apply button in ODTI dashboard page$/, function () {
    action.isVisibleWait(ODTIDashboardPage.applyButton, 10000, "Apply Button in ODTI Dashboard page");
    action.clickElement(ODTIDashboardPage.applyButton, "Apply Button in ODTI Dashboard page");
    action.waitUntilLoadingIconDisappears();
})

Then(/^the value displayed for Calls under Summary section should match with the ODTI Jobs page$/, function () {
    action.waitUntilLoadingIconDisappears();
    action.isVisibleWait(ODTIDashboardPage.callsCountValueText, 10000, "Calls count text under summary in ODTI Dashboard page");
    let callsCountInDashboard = action.getElementText(ODTIDashboardPage.callsCountValueText, "Calls count text under summary in ODTI Dashboard page");
    let recordsCountInODTIJobs = GlobalData.ODTI_JOB_RECORDS_COUNT_ADMIN.split(" ")[4];
    chai.expect(callsCountInDashboard).to.equal(recordsCountInODTIJobs);
})
