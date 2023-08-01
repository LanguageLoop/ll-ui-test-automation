
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