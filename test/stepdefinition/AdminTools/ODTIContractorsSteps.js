
Then(/^the Show Logged in Contractors Only toggle is off$/, function () {
    let showLoggedInContractorsOnlyActivatedStatus = action.isSelectedWait(ODTIContractorsPage.showLoggedInContractorsOnlyToggleInput,3000,"Show logged in contractors only toggle input in ODTI Contractors page");
    if (showLoggedInContractorsOnlyActivatedStatus === true) {
        action.clickElement(ODTIContractorsPage.showLoggedInContractorsOnlyToggleLabel,"Show logged in contractors only toggle label in ODTI Contractors page");
        browser.waitUntil(() => action.isSelectedWait(ODTIContractorsPage.showLoggedInContractorsOnlyToggleInput,0,"Show logged in contractors only toggle input in ODTI Contractors page") === false, {
            timeout: 5000,
            timeoutMsg: 'contractor toggle not disabled in 5s',
        })
    }
})

Then(/^user search for the contractor "(.*)" and toggle on IS LOGGED ON$/, function (contractor) {
    action.isVisibleWait(ODTIContractorsPage.searchByIdAndNameTextBox, 10000, "Search by Id and Name text box in ODTI Contractors page");
    action.enterValue(ODTIContractorsPage.searchByIdAndNameTextBox, contractor, "Search by Id and Name text box in ODTI Contractors page");
    action.clickElement(ODTIContractorsPage.searchButton, 10000, "Search button in ODTI Contractors page");
    action.waitUntilLoadingIconDisappears();
    let isLoggedOnToggleInput = $(ODTIContractorsPage.isLoggedOnToggleInput.replace("<dynamic>", contractor));
    let isLoggedOnToggleLabel = $(ODTIContractorsPage.isLoggedOnToggleLabel.replace("<dynamic>", contractor));
    let isLoggedOnActivatedStatus = action.isSelectedWait(isLoggedOnToggleInput, 3000, "Is logged on contractors toggle input in ODTI Contractors page");
    if (isLoggedOnActivatedStatus === false) {
        action.clickElement(isLoggedOnToggleLabel, "Is logged on contractors toggle label in ODTI Contractors page");
        browser.waitUntil(() => action.isSelectedWait(isLoggedOnToggleInput, 0, "Is logged on contractors toggle input in ODTI Contractors page") === true, {
            timeout: 5000,
            timeoutMsg: 'isLoggedOn toggle not enabled in 5s',
        })
    }
})

Then(/^the Show Logged in Contractors Only toggle is on/, function () {
    let showLoggedInContractorsOnlyActivatedStatus = action.isSelectedWait(ODTIContractorsPage.showLoggedInContractorsOnlyToggleInput, 3000, "Show logged in contractors only toggle input in ODTI Contractors page");
    if (showLoggedInContractorsOnlyActivatedStatus === false) {
        action.clickElement(ODTIContractorsPage.showLoggedInContractorsOnlyToggleLabel, "Show logged in contractors only toggle label in ODTI Contractors page");
        browser.waitUntil(() => action.isSelectedWait(ODTIContractorsPage.showLoggedInContractorsOnlyToggleInput, 0, "Show logged in contractors only toggle input in ODTI Contractors page") === true, {
            timeout: 5000,
            timeoutMsg: 'contractor toggle not enabled in 5s',
        })
    }
})

Then(/^user search for the contractor "(.*)" and toggle off IS LOGGED ON$/, function (contractor) {
    action.isVisibleWait(ODTIContractorsPage.searchByIdAndNameTextBox, 10000, "Search by Id and Name text box in ODTI Contractors page");
    action.enterValue(ODTIContractorsPage.searchByIdAndNameTextBox, contractor, "Search by Id and Name text box in ODTI Contractors page");
    action.clickElement(ODTIContractorsPage.searchButton, "Search button in ODTI Contractors page");
    action.waitUntilLoadingIconDisappears();
    let isLoggedOnToggleInput = $(ODTIContractorsPage.isLoggedOnToggleInput.replace("<dynamic>", contractor));
    let isLoggedOnToggleLabel = $(ODTIContractorsPage.isLoggedOnToggleLabel.replace("<dynamic>", contractor));
    let isLoggedOnActivatedStatus = action.isSelectedWait(isLoggedOnToggleInput, 3000, "Is logged on contractors toggle input in ODTI Contractors page");
    if (isLoggedOnActivatedStatus === true) {
        action.clickElement(isLoggedOnToggleLabel, "Is logged on contractors toggle label in ODTI Contractors page");
        browser.waitUntil(() => action.isSelectedWait(isLoggedOnToggleInput, 0, "Is logged on contractors toggle input in ODTI Contractors page") === false, {
            timeout: 5000,
            timeoutMsg: 'isLoggedOn toggle not disabled in 5s',
        })
    }
})

Then(/^user search for the contractor "(.*)" and toggle off SERVICE TI ACTIVE$/, function (contractor) {
    action.isVisibleWait(ODTIContractorsPage.searchByIdAndNameTextBox, 10000, "Search by Id and Name text box in ODTI Contractors page");
    action.enterValue(ODTIContractorsPage.searchByIdAndNameTextBox, contractor, "Search by Id and Name text box in ODTI Contractors page");
    action.clickElement(ODTIContractorsPage.searchButton, "Search button in ODTI Contractors page");
    action.waitUntilLoadingIconDisappears();
    let serviceTiActiveToggleInput = $(ODTIContractorsPage.serviceTiActiveToggleInput.replace("<dynamic>", contractor));
    let serviceTiActiveToggleLabel = $(ODTIContractorsPage.serviceTiActiveToggleLabel.replace("<dynamic>", contractor));
    let serviceTiActiveActivatedStatus = action.isSelectedWait(serviceTiActiveToggleInput, 3000, "SERVICE TI ACTIVE contractors toggle input in ODTI Contractors page");
    if (serviceTiActiveActivatedStatus === true) {
        action.clickElement(serviceTiActiveToggleLabel, "SERVICE TI ACTIVE contractors toggle label in ODTI Contractors page");
        browser.waitUntil(() => action.isSelectedWait(serviceTiActiveToggleInput, 0, "SERVICE TI ACTIVE contractors toggle input in ODTI Contractors page") === false, {
            timeout: 5000,
            timeoutMsg: 'SERVICE TI ACTIVE toggle not disabled in 5s',
        })
    }
})

Then(/^user search for the contractor "(.*)" and toggle on SERVICE TI ACTIVE$/, function (contractor) {
    action.isVisibleWait(ODTIContractorsPage.searchByIdAndNameTextBox, 10000, "Search by Id and Name text box in ODTI Contractors page");
    action.enterValue(ODTIContractorsPage.searchByIdAndNameTextBox, contractor, "Search by Id and Name text box in ODTI Contractors page");
    action.clickElement(ODTIContractorsPage.searchButton, "Search button in ODTI Contractors page");
    action.waitUntilLoadingIconDisappears();
    let serviceTiActiveToggleInput = $(ODTIContractorsPage.serviceTiActiveToggleInput.replace("<dynamic>", contractor));
    let serviceTiActiveToggleLabel = $(ODTIContractorsPage.serviceTiActiveToggleLabel.replace("<dynamic>", contractor));
    let serviceTiActiveActivatedStatus = action.isSelectedWait(serviceTiActiveToggleInput, 3000, "SERVICE TI ACTIVE contractors toggle input in ODTI Contractors page");
    if (serviceTiActiveActivatedStatus === false) {
        action.clickElement(serviceTiActiveToggleLabel, "SERVICE TI ACTIVE contractors toggle label in ODTI Contractors page");
        browser.waitUntil(() => action.isSelectedWait(serviceTiActiveToggleInput, 0, "SERVICE TI ACTIVE contractors toggle input in ODTI Contractors page") === true, {
            timeout: 5000,
            timeoutMsg: 'SERVICE TI ACTIVE toggle not enabled in 5s',
        })
    }
})

When(/^user search for the contractor "(.*)" in admin tools$/, function (contractor) {
    action.isVisibleWait(ODTIContractorsPage.searchByIdAndNameTextBox, 10000, "Search by Id and Name text box in ODTI Contractors page");
    action.enterValue(ODTIContractorsPage.searchByIdAndNameTextBox, contractor, "Search by Id and Name text box in ODTI Contractors page");
    action.clickElement(ODTIContractorsPage.searchButton, "Search button in ODTI Contractors page");
    action.waitUntilLoadingIconDisappears();
})

Then(/^state of the Contractors "(.*)" ODTI Activation ServiceTIActive flag is set to False$/, function (contractor) {
    let serviceTiActiveToggleInput = $(ODTIContractorsPage.serviceTiActiveToggleInput.replace("<dynamic>", contractor));
    let serviceTiActiveActivatedStatus = action.isSelectedWait(serviceTiActiveToggleInput, 0, "SERVICE TI ACTIVE contractors toggle input in ODTI Contractors page");
    chai.expect(serviceTiActiveActivatedStatus).to.be.false;
})

Then(/^the Contractors "(.*)" ODTI Logged On State is set to False$/, function (contractor) {
    let isLoggedOnToggleInput = $(ODTIContractorsPage.isLoggedOnToggleInput.replace("<dynamic>", contractor));
    let isLoggedOnActivatedStatus = action.isSelectedWait(isLoggedOnToggleInput, 0, "Is logged on contractors toggle input in ODTI Contractors page");
    chai.expect(isLoggedOnActivatedStatus).to.be.false;
})