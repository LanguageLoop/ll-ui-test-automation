When(/^user hover over TOTAL CALLS field in Language Serviceability$/, function () {
    action.isVisibleWait(ODTILanguageServiceabilityPage.totalCallsInfoIcon,10000,"TOTAL CALLS info icon in ODTI Language Serviceability Page");
    browser.execute((el) => {
        const hoverEvent = new MouseEvent('mouseover', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        el.dispatchEvent(hoverEvent);
    }, ODTILanguageServiceabilityPage.totalCallsInfoIcon);
    logger.info("Hovered mouse over TOTAL CALLS info icon in ODTI Language Serviceability Page");
});

Then(/^Total calls received for all languages, including unanswered calls text is displayed$/, function () {
    let totalCallsInfoIconTextExistStatus = action.isExistingWait(ODTILanguageServiceabilityPage.totalCallsInfoIconText, 10000, "TOTAL CALLS info icon text Total calls received for all languages, including unanswered calls in ODTI Language Serviceability Page");
    chai.expect(totalCallsInfoIconTextExistStatus).to.be.true;
});

When(/^user hover over TOTAL CALLS CONNECTED field in Language Serviceability$/, function () {
    action.isVisibleWait(ODTILanguageServiceabilityPage.totalCallsConnectedInfoIcon,10000,"TOTAL CALLS CONNECTED info icon in ODTI Language Serviceability Page");
    browser.execute((el) => {
        const hoverEvent = new MouseEvent('mouseover', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        el.dispatchEvent(hoverEvent);
    }, ODTILanguageServiceabilityPage.totalCallsConnectedInfoIcon);
    logger.info("Hovered mouse over TOTAL CALLS CONNECTED info icon in ODTI Language Serviceability Page");
});

Then(/^Total calls where atleast one interpreter was connected to the call, even for less than 60seconds text is displayed$/, function () {
    let totalCallsConnectedInfoIconTextExistStatus = action.isExistingWait(ODTILanguageServiceabilityPage.totalCallsConnectedInfoIconText, 10000, "TOTAL CALLS CONNECTED info icon text Total calls where atleast one interpreter was connected to the call, even for less than 60seconds in ODTI Language Serviceability Page");
    chai.expect(totalCallsConnectedInfoIconTextExistStatus).to.be.true;
});

When(/^user hover over SERVICEABILITY % field in Language Serviceability$/, function () {
    action.isVisibleWait(ODTILanguageServiceabilityPage.serviceabilityPercentageInfoIcon,10000,"SERVICEABILITY % info icon in ODTI Language Serviceability Page");
    browser.execute((el) => {
        const hoverEvent = new MouseEvent('mouseover', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        el.dispatchEvent(hoverEvent);
    }, ODTILanguageServiceabilityPage.serviceabilityPercentageInfoIcon);
    logger.info("Hovered mouse over SERVICEABILITY % info icon in ODTI Language Serviceability Page");
});

Then(/^Total calls connected by Total calls text is displayed$/, function () {
    let totalCallsConnectedInfoIconTextExistStatus = action.isExistingWait(ODTILanguageServiceabilityPage.serviceabilityPercentageInfoIconText, 10000, "SERVICEABILITY % info icon text Total calls connected/Total calls in ODTI Language Serviceability Page");
    chai.expect(totalCallsConnectedInfoIconTextExistStatus).to.be.true;
});