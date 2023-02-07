const GlobalData = require("../../data/GlobalData")

When(/^I click add contractor button$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addContractorLink)
})

When(/^I enter contractor details "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, function (salutation, gender, name, pin, mobile, dob, email, address) {
    name = name + (Math.floor(Math.random() * 1000000) + 1).toString()
    email = email + (Math.floor(Math.random() * 1000000) + 1).toString()
    mob = "0" + (400000000 + (Math.floor(Math.random() * 100000000) + 1)).toString()
    GlobalData.NEW_CONTRACTOR_NAME = name
    browser.pause(2000)

    action.selectTextFromDropdown(contractorEngagementPage.salutationDropdown, salutation)
    if (gender == "Male") {
        action.clickElement(contractorEngagementPage.maleRadioButton)
    } else {
        action.clickElement(contractorEngagementPage.femaleRadioButton)
    }

    action.enterValue(contractorEngagementPage.telephonePinInput, pin)
    action.enterValue(contractorEngagementPage.firstNameInput, name)
    action.enterValue(contractorEngagementPage.mobileInput, mob)
    action.enterValueAndPressReturn(contractorEngagementPage.dateOfBirthDropdown, dob)
    action.enterValue(contractorEngagementPage.emailInput, email + "@aa.com.au")

    $('//span[@class="fa fa-fw fa-pencil-square-o"]').click()
    browser.pause(2000)
    action.enterLocation(contractorEngagementPage.addressInput, address)
    browser.pause(2000)
    browser.keys("Enter")
    browser.pause(2000)
    $$('//span[@class="fa fa-fw fa-pencil-square-o"]')[1].click()
    browser.pause(2000)
    action.enterLocation(contractorEngagementPage.postalAddressInput, address)
    browser.pause(2000)
    browser.keys("Enter")
    action.clickElement(contractorEngagementPage.emailPreferenceCheckbox)
    action.uploadFile(contractorEngagementPage.workContractFileControl, "./test/data/ContractDocument.docx")
    const uploadedFile = $("//div[text()[contains(.,'ContractDocument.docx')]]")
    browser.waitUntil(() => uploadedFile.getText() === 'ContractDocument.docx', {
        timeout: 7000,
        timeoutMsg: 'file not uploaded in 5s',
        inteval: 1000
    })
    browser.pause(5000)

    //action.clickElement(contractorEngagementPage.saveContractorButton)
    browser.waitUntil(function () {
        if (browser.getTitle() === 'Contractors') {
            contractorEngagementPage.saveContractorButton.click()
        }
        return browser.getTitle() === 'PreviewContractorProfile'
    }, 5000)

    browser.waitUntil(() => browser.getTitle() === 'PreviewContractorProfile', {
        timeout: 5000,
        timeoutMsg: 'preview title not displayed in 5s',
        inteval: 500
    })
})

When(/^I search and open contractor "(.*)"$/, function (contractor) {
    browser.pause(2000)
    action.enterValue(contractorEngagementPage.searchContractorInput, contractor)
    let contractorSearchResultElement = $(contractorEngagementPage.contractorSearchResultLocator.replace("<dynamic>", contractor));
    action.isVisibleWait(contractorSearchResultElement, 20000);
    $('//table[contains(@id,"Contractor")]//td//a').click()
})

When(/^I search and open created contractor$/, function () {
    browser.pause(2000)
    action.enterValue(contractorEngagementPage.searchContractorInput, GlobalData.NEW_CONTRACTOR_NAME)
    let contractorSearchResultElement = $(contractorEngagementPage.contractorSearchResultLocator.replace("<dynamic>", GlobalData.NEW_CONTRACTOR_NAME));
    action.isVisibleWait(contractorSearchResultElement, 20000);
    $('//table[contains(@id,"Contractor")]//td//a').click()
})

When(/^I click add accreditation link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addAccreditationLink)
})

When(/^I enter naati details "(.*)","(.*)","(.*)","(.*)"$/, function (service, from, to, level) {
    browser.pause(2000)
    action.selectTextFromDropdown(contractorEngagementPage.serviceDropdown, service)
    action.enterValueAndPressReturn(contractorEngagementPage.fromLanguageDropdown, from)
    action.enterValueAndPressReturn(contractorEngagementPage.toLanguageDropdown, to)
    action.selectTextFromDropdown(contractorEngagementPage.naatiAccreditationDropdown, level)

    action.clickElement(contractorEngagementPage.saveAndCloseButton)
})

When(/^I enter all naati details "(.*)","(.*)","(.*)","(.*)","(.*)"$/, function (service, from, to, level, naati) {
    browser.pause(2000)
    action.isVisibleWait(contractorEngagementPage.serviceDropdown, 10000)
    action.selectTextFromDropdown(contractorEngagementPage.serviceDropdown, service)
    action.isVisibleWait(contractorEngagementPage.fromLanguageDropdown, 10000)
    action.enterValueAndPressReturn(contractorEngagementPage.fromLanguageDropdown, from)
    action.isVisibleWait(contractorEngagementPage.toLanguageDropdown, 10000)
    action.enterValueAndPressReturn(contractorEngagementPage.toLanguageDropdown, to)
    action.isVisibleWait(contractorEngagementPage.naatiAccreditationDropdown, 10000)
    action.selectTextFromDropdown(contractorEngagementPage.naatiAccreditationDropdown, level)
    action.isClickableWait(contractorEngagementPage.naatiNumber, 10000)
    action.enterValue(contractorEngagementPage.naatiNumber, naati)
    action.isClickableWait(contractorEngagementPage.validateButton, 10000)
    action.clickElement(contractorEngagementPage.validateButton)
    action.isVisibleWait(contractorEngagementPage.validFrom, 30000)
    var txt = contractorEngagementPage.validFrom.getText()
    console.log(txt)
    var fields = txt.split(': ');
    browser.pause(1000)
    console.log(fields[1].replace(/[/.]/g, "-"))
    action.isClickableWait(contractorEngagementPage.dateIssuedInput, 10000)
    action.addValueAndPressReturnTab(contractorEngagementPage.dateIssuedInput, fields[1].replace(/[/.]/g, "-"))
    action.isClickableWait(contractorEngagementPage.saveAndCloseButton, 10000)
    action.clickElement(contractorEngagementPage.saveAndCloseButton)
    browser.pause(2000)
    if (action.isVisibleWait(contractorEngagementPage.translatorXTMAlert, 5000)) {
        action.isClickableWait(contractorEngagementPage.xtmConfirmButton, 5000)
        action.clickElement(contractorEngagementPage.xtmConfirmButton)
    }
});

When(/^I click add notes link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addNotesLink)
})

When(/^I enter contractor notes details "(.*)","(.*)"$/, function (title, message) {
    browser.pause(2000)
    action.enterValue(contractorEngagementPage.noteTitleInput, title)
    action.enterValue(contractorEngagementPage.noteMessageInput, message)
    action.clickElement(contractorEngagementPage.saveNotesButton)
    browser.pause(2000)
})

When(/^I click add work eligibility link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addWorkEligbileLink)
})

When(/^I enter work eligibility details "(.*)","(.*)","(.*)"$/, function (rights, number, years) {
    browser.pause(2000)
    action.selectTextFromDropdown(contractorEngagementPage.workRightsDropdown, rights)
    action.enterValue(contractorEngagementPage.passportVisaNumberInput, number)
    action.uploadFile(contractorEngagementPage.proofOfVisaPassportFileControl, "./test/data/Working rights.docx")

    action.enterValue(contractorEngagementPage.yearsOfResidenceInput, years)

    action.clickElement(contractorEngagementPage.saveWorkEligibilityButton)
    browser.pause(2000)
})

When(/^I click add clearance link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addClearanceLink)
})

When(/^I enter clearance details "(.*)"$/, function (clearance) {
    browser.pause(2000)
    action.uploadFile(contractorEngagementPage.clearanceFileControl, "./test/data/ContractDocument.docx")
    action.selectTextFromDropdown(contractorEngagementPage.clearanceTypeDropdown, clearance)
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.saveClearanceButton)
})

When(/^I click add availability link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addAvailabilityLink)
    browser.pause(2000)
})

When(/^I enter availability details "(.*)","(.*)"$/, function (type, words) {
    browser.pause(2000)
    if (type == "Translation") {
        contractorEngagementPage.translationAvailabilityCheckbox.click()
    }

    contractorEngagementPage.availabilitySegment.click()
    action.enterValue(contractorEngagementPage.wordsPerDayInput, words)
    action.clickElement(contractorEngagementPage.saveAvailabilityButton)
    browser.pause(2000)
})

When(/^I click add work preference link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addWorkPreferenceLink)
})

When(/^I enter preference details "(.*)"$/, function (company) {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.organisationSection)
    browser.pause(2000)
    action.enterValueAndPressReturn(contractorEngagementPage.searchCompanyNameInput, company)
    action.clickElement(contractorEngagementPage.saveWorkPreferenceButton)
    browser.pause(2000)
})

When(/^I click add referee link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addRefereeLink)
    browser.pause(2000)
})

When(/^I enter referee details "(.*)","(.*)"$/, function (agency, name) {
    browser.pause(2000)
    action.enterValue(contractorEngagementPage.agencyInput, agency)
    action.enterValue(contractorEngagementPage.refereeNameInput, name)
    action.clickElement(contractorEngagementPage.saveRefereeButton)
    browser.pause(2000)

})

Then(/^I verify referee "(.*)","(.*)"$/, function (agency, name) {
    browser.pause(2000)
    var elt = $('//*[@class="Reference Card"]//*[text()="' + agency + '"]')
    chai.expect(action.elementExists(elt)).to.be.true
})

Then(/^I delete referees$/, function () {
    var ct = $$('//*[@class="Reference Card"]/..').length
    $('//*[@class="Reference Card"][1]//label').click()
    browser.pause(2000)
    $('//*[@class="Reference Card"][1]//a[2]').click()
    // commented below block as it is not able to find the element [24/05/21]
    //console.log("ct value "+ct)
    /*for(var i=0;i<ct;i++)
    {
        $$('//*[@class="Reference Card"]')[i].$('label').click()
        browser.pause(2000)
        $('(//*[@class="Reference Card"])[i]//a[text()="Remove"]').click()
        browser.pause(2000)


    }*/
})

Then(/^I verify work preference "(.*)"$/, function (company) {
    browser.pause(2000)
    var elt = $('//*[text()="Working Preferences"]/../../../../../..//*[contains(text(),"' + company + '")]')
    chai.expect(action.elementExists(elt)).to.be.true
})

Then(/^I delete work preferences$/, function () {
    browser.pause(2000)
    var elt = contractorEngagementPage.removeWorkPreferenceButtons.length
    for (var i = 0; i < elt - 1; i++) {
        action.clickElement(contractorEngagementPage.removeWorkPreferenceButtons[i])
        browser.pause(2000)
        browser.acceptAlert()
    }
})

Then(/^I verify availability details "(.*)"$/, function (type) {
    if (type == "Translation") {
        chai.expect(action.elementExists(contractorEngagementPage.workAvailabilityTranslationItem)).to.be.true
    }
})

Then(/^I verify clearance "(.*)"$/, function (clearance) {

    var elt = $('//*[text()="Clearance"]').$('//*[@class="Heading3" and text()="' + clearance + '"]')
    chai.expect(action.elementExists(elt)).to.be.true

})

Then(/^I delete clearances$/, function () {
    browser.pause(4000)
    $('//a[contains(@id,"wtPlaceholderLinks_wt")]').scrollIntoView({block: "center"})
    var ct = contractorEngagementPage.clearanceItems.length
    console.log("DRAVID $$$ " + ct)
    for (var i = 0; i < ct; i++) {
        contractorEngagementPage.clearanceItems[i].$('label').click()
        browser.pause(2000)
        contractorEngagementPage.clearanceItems[i].$('//a[contains(@id,"wtPlaceholderLinks_wt")]').click()

    }
})

Then(/^I verify work eligibility$/, function () {
    browser.pause(2000)
    chai.expect(action.elementExists(contractorEngagementPage.workEligibilityDocumentLink)).to.be.true
})

Then(/^I verify contractor notes "(.*)","(.*)"$/, function (title, message) {
    browser.pause(2000)
    var tlength = contractorEngagementPage.notesTableRows.length
    var temp_title = contractorEngagementPage.notesTableRows[tlength - 1].$$('td')[0].getText()
    var temp_message = contractorEngagementPage.notesTableRows[tlength - 1].$$('td')[1].getText()

    chai.expect(temp_title == title).to.be.true
    chai.expect(temp_message == message).to.be.true

})

Then(/^I delete contractor notes$/, function () {
    browser.pause(2000)
    var tlength = contractorEngagementPage.notesTableRows.length
    contractorEngagementPage.notesTableRows[tlength - 1].$('label').click()
    browser.pause(2000)
    //contractorEngagementPage.notesTableRows[tlength-1].$('//a[contains(text(),"Remove")]').waitForClickable({timeout:4000},{interval:500},{timeoutMsg:'not clickable'})
    //contractorEngagementPage.notesTableRows[tlength-1].$('//a[contains(text(),"Remove")]').click()
    browser.execute("arguments[0].click();", contractorEngagementPage.notesTableRows[tlength - 1].$('//a[contains(text(),"Remove")]'));

})

Then(/^I verify the created naati accreditation "(.*)","(.*)"$/, function (from, to) {
    browser.pause(4000)
    var tlength = contractorEngagementPage.naatiTableRows.length
    console.log(tlength)
    //var temp_value= contractorEngagementPage.naatiTableRows[tlength-1].getText()
    for (var i = 1; i < tlength; i++) {
        var temp_value = contractorEngagementPage.naatiTableRows[i].getText()
        console.log("DRAVID $$$$ " + temp_value)
        chai.expect(temp_value.includes(from)).to.be.true
    }
})

Then(/^I delete the naati accreditation$/, function () {
    var tlength = contractorEngagementPage.naatiTableRows.length
    //for(var j=1;j<tlength;j++){
    contractorEngagementPage.naatiTableRows[tlength - 1].$('label').click()
    browser.pause(2000)
    browser.execute("arguments[0].click();", contractorEngagementPage.naatiTableRows[tlength - 1].$('//a[contains(text(),"Remove")]'));
    browser.pause(2000)
    // }
})

Then(/^I verify contractor is created$/, function () {
    browser.pause(2000)
    action.enterValueAndPressReturn(contractorEngagementPage.searchContractorInput, GlobalData.NEW_CONTRACTOR_NAME)
    browser.pause(2000)
    var searchresult = $$('//table[contains(@id,"Contractor")]//td')[1].getText()
    chai.expect(searchresult == GlobalData.NEW_CONTRACTOR_NAME)
})

Then(/^I see any naati accreditation already present$/, function () {
    var tlength = contractorEngagementPage.naatiTableRows.length
    if (contractorEngagementPage.noNaatiAccreditation.isDisplayed() == false) {
        for (var j = 1; j < tlength; j++) {
            contractorEngagementPage.naatiTableRows[j].$('label').click()
            browser.pause(2000)
            contractorEngagementPage.naatiTableRows[j].$('//a[contains(text(),"Remove")]').click()
        }
    }
})

Given(/^the admin is on the Contractor Profile page$/, function () {
    let currentPageUrl = action.getPageUrl();
    chai.expect(currentPageUrl).to.includes("PreviewContractorProfile.aspx");
})

When(/^the admin clicks on Add a Block$/, function () {
    action.isVisibleWait(contractorEngagementPage.addABlockLink, 10000);
    action.clickElement(contractorEngagementPage.addABlockLink);
})

Then(/^the Contractor Blocking modal popup pops-up$/, function () {
    let contractorBlockModalPopupDisplayStatus = action.isVisibleWait(contractorEngagementPage.contractorBlockingModalPopup, 10000);
    chai.expect(contractorBlockModalPopupDisplayStatus).to.be.true;
})

Then(/^there should be 3 Tabs : "(.*)", "(.*)", "(.*)"$/, function (tab1Expected, tab2Expected, tab3Expected) {
    let contractorBlockPopupTabsActual = action.getElementText(contractorEngagementPage.contractorBlockPopupTabs);
    chai.expect(contractorBlockPopupTabsActual).to.includes(tab1Expected);
    chai.expect(contractorBlockPopupTabsActual).to.includes(tab2Expected);
    chai.expect(contractorBlockPopupTabsActual).to.includes(tab3Expected);
})

When(/^the admin clicks on the Bill To tab$/, function () {
    action.isVisibleWait(contractorEngagementPage.billToTab, 10000);
    action.clickElement(contractorEngagementPage.billToTab);
})

Then(/^it should show a list of Contract Bill To’s$/, function () {
    let contractBillTosDisplayStatus = action.isVisibleWait(contractorEngagementPage.listOfContractBillTos, 10000);
    chai.expect(contractBillTosDisplayStatus).to.be.true;
})

Then(/^the search box should allow the admin to filter by Bill To name "(.*)"$/, function (billToNameSearch) {
    action.isVisibleWait(contractorEngagementPage.billToSearchBox, 10000);
    action.addValueAndPressReturnTab(contractorEngagementPage.billToSearchBox, billToNameSearch);
    let contractBillTosTextActual = action.getElementText(contractorEngagementPage.listOfContractBillTos, 10000);
    chai.expect(contractBillTosTextActual).to.includes(billToNameSearch);
})

Then(/^the user can select 1 or more Bill Tos$/, function () {
    action.clearValue(contractorEngagementPage.billToSearchBox);
    browser.waitUntil(
        () => contractorEngagementPage.billToCheckBoxesCount > 1,
        {
            timeout: 20000,
            timeoutMsg: 'expected all Bill To checkboxes to display'
        }
    );
    let billToCheckboxesCount = contractorEngagementPage.billToCheckBoxesCount;
    for (let checkBoxIndex = 0; checkBoxIndex < billToCheckboxesCount; checkBoxIndex++) {
        let checkBoxElements = contractorEngagementPage.billToCheckBoxes;
        action.isVisibleWait(checkBoxElements[checkBoxIndex], 10000);
        action.clickElement(checkBoxElements[checkBoxIndex]);
        //short pause to let the checkboxes get selected
        browser.pause(2000);
        let checkBoxSelectedStatus = action.isSelectedWait(checkBoxElements[checkBoxIndex], 10000);
        chai.expect(checkBoxSelectedStatus).to.be.true;
    }
})

Then(/^it should show a list of Job Types, each with a checkbox$/, function () {
    let jobTypesListDisplayStatus = action.isVisibleWait(contractorEngagementPage.jobTypesListRecords, 10000);
    chai.expect(jobTypesListDisplayStatus).to.be.true;
})

Then(/^each Job Type should be default checked$/, function () {
    let jobTypesCheckboxesCount = contractorEngagementPage.jobTypesCheckBoxesCount;
    for (let checkBoxIndex = 0; checkBoxIndex < jobTypesCheckboxesCount; checkBoxIndex++) {
        let checkBoxElements = contractorEngagementPage.jobTypesCheckBoxes;
        action.isVisibleWait(checkBoxElements[checkBoxIndex], 10000);
        let checkBoxSelectedStatus = action.isSelectedWait(checkBoxElements[checkBoxIndex], 10000);
        chai.expect(checkBoxSelectedStatus).to.be.true;
    }
})

When(/^the inputs "(.*)", "(.*)" are valid in Bill-To tab$/, function (billTos, severityLevel) {
    let billTosList = billTos.split(",");
    for (let option = 0; option < billTosList.length; option++) {
        let billToCode = billTosList[option].split("-")[0].trim();
        action.addValueAndPressReturnTab(contractorEngagementPage.billToSearchBox, billToCode);
        let billToCheckboxElement = $(contractorEngagementPage.billToDynamicCheckboxLocator.replace("<dynamic>", billTosList[option]));
        action.isVisibleWait(billToCheckboxElement, 10000);
        action.clickElement(billToCheckboxElement);
    }
    action.selectTextFromDropdown(contractorEngagementPage.billToSeverityDropdown, severityLevel);
    action.enterValue(contractorEngagementPage.startDateBillTo, datetime.getShortNoticeDate());
    action.enterValue(contractorEngagementPage.endDateBillTo, datetime.getRandomFutureDate());
    action.pressKeys("Tab");
})

When(/^at least 1 Job Type "(.*)" is selected$/, function (jobTypes) {
    let jobTypesCheckboxesCount = contractorEngagementPage.jobTypesCheckBoxesCount;
    for (let checkBoxIndex = 0; checkBoxIndex < jobTypesCheckboxesCount; checkBoxIndex++) {
        let checkBoxElements = contractorEngagementPage.jobTypesCheckBoxes;
        action.isVisibleWait(checkBoxElements[checkBoxIndex], 10000);
        let checkBoxSelectedStatus = action.isSelectedWait(checkBoxElements[checkBoxIndex], 10000);
        if (checkBoxSelectedStatus === true) {
            action.clickElement(checkBoxElements[checkBoxIndex])
        }
    }
    let jobTypesList = jobTypes.split(",");
    for (let option = 0; option < jobTypesList.length; option++) {
        let jobTypeCheckboxElement = $(contractorEngagementPage.jobTypeDynamicCheckboxLocator.replace("<dynamic>", jobTypesList[option]));
        action.isVisibleWait(jobTypeCheckboxElement, 10000);
        action.clickElement(jobTypeCheckboxElement)
    }
})

Then(/^the block is saved$/, function () {
    action.isVisibleWait(contractorEngagementPage.addBlockButton, 10000);
    action.clickElement(contractorEngagementPage.addBlockButton);
})

Then(/^the Contractor Blocking popup closes$/, function () {
    browser.waitUntil(
        () => action.isVisibleWait(contractorEngagementPage.contractorBlockingModalPopup, 0) === false,
        {
            timeout: 10000,
            timeoutMsg: 'expected Contractor Blocking popup to close in 10s'
        }
    );
    let contractorBlockModalPopupDisplayStatus = action.isVisibleWait(contractorEngagementPage.contractorBlockingModalPopup, 3000);
    chai.expect(contractorBlockModalPopupDisplayStatus).to.be.false;
})

Then(/^the new block rule is displayed on the contractor’s profile$/, function () {
    let newBlockRulesOnProfileCount = contractorEngagementPage.newBlockRulesOnProfile.length;
    for (let rule = 0; rule < newBlockRulesOnProfileCount.length; rule++) {
        let newRuleDisplayStatus = action.isVisibleWait(contractorEngagementPage.newBlockRulesOnProfile[rule], 10000);
        chai.expect(newRuleDisplayStatus).to.be.true;
    }
})

Then(/^the selected JobTypes are applied to all the BillTo’s "(.*)" blocking for the contractor$/, function (billTos) {
    let billTosExpected = billTos.split(",");
    let newBlockRulesLinksCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    for (let rule = 0; rule < newBlockRulesLinksCount.length; rule++) {
        let newRuleLinkTextActual = action.getElementText(contractorEngagementPage.newBlockRuleLinksOnProfile[rule], 10000);
        chai.expect(newRuleLinkTextActual).to.includes(billTosExpected[rule]);
    }
})

Then(/^the selected blocked Job Types "(.*)" are displayed in brackets after the Contractor name "(.*)"$/, function (jobTypes, contractorName) {
    let jobTypesExpected = jobTypes.split(",");
    let newBlockRulesLinksCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    for (let rule = 0; rule < newBlockRulesLinksCount.length; rule++) {
        let newRuleLinkTextActual = action.getElementText(contractorEngagementPage.newBlockRuleLinksOnProfile[rule], 10000);
        let jobTypesInBracketsNextToContractorName = " " + contractorName + " " + "[" + jobTypesExpected[0] + " " + jobTypesExpected[1] + "]"
        chai.expect(newRuleLinkTextActual).to.includes(jobTypesInBracketsNextToContractorName);
    }
})

Then(/^the block rules are removed$/, function () {
    let rule = 0;
    while (action.isVisibleWait(contractorEngagementPage.newBlockRuleLinksToggleIcon, 1000) === true) {
        action.isVisibleWait(contractorEngagementPage.newBlockRuleLinksToggleIcon, 10000);
        action.clickElement(contractorEngagementPage.newBlockRuleLinksToggleIcon);
        action.isVisibleWait(contractorEngagementPage.newBlockRuleLinksRemove, 10000);
        action.clickElement(contractorEngagementPage.newBlockRuleLinksRemove);
        browser.pause(3000);
        rule++
    }
})

Then(/^no blocked job types "(.*)" brackets will be displayed"$/, function (jobTypes) {
    let jobTypesExpected = jobTypes.split(",");
    let newBlockRulesLinksCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    for (let rule = 0; rule < newBlockRulesLinksCount.length; rule++) {
        let newRuleLinkTextActual = action.getElementText(contractorEngagementPage.newBlockRuleLinksOnProfile[rule], 10000);
        for (let option = 0; option < jobTypesExpected.length; option++) {
            chai.expect(newRuleLinkTextActual).to.not.includes(jobTypesExpected[option]);
        }
        chai.expect(newRuleLinkTextActual).to.not.includes("[");
        chai.expect(newRuleLinkTextActual).to.not.includes("]");
    }
})