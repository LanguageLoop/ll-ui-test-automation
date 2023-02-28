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
        if (action.isSelectedWait(billToCheckboxElement, 1000) === false) {
            action.clickElement(billToCheckboxElement);
        }
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
    let newBlockRulesOnProfileCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    for (let rule = 0; rule < newBlockRulesOnProfileCount; rule++) {
        let newRuleDisplayStatus = action.isVisibleWait(contractorEngagementPage.newBlockRuleLinksOnProfile[rule], 10000);
        chai.expect(newRuleDisplayStatus).to.be.true;
    }
})

Then(/^the selected JobTypes are applied to all the BillTo’s "(.*)" blocking for the contractor$/, function (billTos) {
    let billTosExpected = billTos.split(",");
    let newBlockRulesLinksCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    for (let rule = 0; rule < newBlockRulesLinksCount; rule++) {
        let newRuleLinkTextActual = action.getElementText(contractorEngagementPage.newBlockRuleLinksOnProfile[rule], 10000);
        chai.expect(newRuleLinkTextActual).to.includes(billTosExpected[rule]);
    }
})

Then(/^the selected blocked Job Types "(.*)" are displayed in brackets after the Contractor name "(.*)"$/, function (jobTypes, contractorName) {
    let jobTypesExpected = jobTypes.split(",");
    let newBlockRulesLinksCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    for (let rule = 0; rule < newBlockRulesLinksCount; rule++) {
        let newRuleLinkTextActual = action.getElementText(contractorEngagementPage.newBlockRuleLinksOnProfile[rule], 10000);
        let jobTypesInBracketsNextToContractorName = " " + contractorName + " " + "[" + jobTypesExpected[0] + ", " + jobTypesExpected[1] + "]"
        chai.expect(newRuleLinkTextActual).to.includes(jobTypesInBracketsNextToContractorName);
    }
})

Then(/^the admin clicks on Remove on a block$/, function () {
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

Then(/^no blocked job types "(.*)" brackets will be displayed$/, function (jobTypes) {
    let jobTypesExpected = jobTypes.split(",");
    let newBlockRulesLinksCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    for (let rule = 0; rule < newBlockRulesLinksCount; rule++) {
        let newRuleLinkTextActual = action.getElementText(contractorEngagementPage.newBlockRuleLinksOnProfile[rule], 10000);
        for (let option = 0; option < jobTypesExpected.length; option++) {
            chai.expect(newRuleLinkTextActual).to.not.includes(jobTypesExpected[option]);
        }
        chai.expect(newRuleLinkTextActual).to.not.includes("[");
        chai.expect(newRuleLinkTextActual).to.not.includes("]");
    }
})

When(/^the inputs "(.*)", "(.*)", "(.*)", "(.*)" are invalid or incomplete in Bill-To tab$/, function (billTos, severityLevel, startDate, endDate) {
    if (billTos !== null) {
        let billTosList = billTos.split(",");
        for (let option = 0; option < billTosList.length; option++) {
            let billToCode = billTosList[option].split("-")[0].trim();
            action.addValueAndPressReturnTab(contractorEngagementPage.billToSearchBox, billToCode);
            let billToCheckboxElement = $(contractorEngagementPage.billToDynamicCheckboxLocator.replace("<dynamic>", billTosList[option]));
            action.isVisibleWait(billToCheckboxElement, 10000);
            action.clickElement(billToCheckboxElement);
        }
    }
    action.selectTextFromDropdown(contractorEngagementPage.billToSeverityDropdown, severityLevel);
    action.enterValue(contractorEngagementPage.startDateBillTo, startDate);
    action.enterValue(contractorEngagementPage.endDateBillTo, endDate);
    action.pressKeys("Tab");
})

Then(/^the Contractor Blocking popup stays open$/, function () {
    let contractorBlockModalPopupDisplayStatus = action.isVisibleWait(contractorEngagementPage.contractorBlockingModalPopup, 10000);
    chai.expect(contractorBlockModalPopupDisplayStatus).to.be.true;
})

Then(/^an appropriate message "(.*)" is displayed$/, function (expectedMessage) {
    action.isVisibleWait(contractorEngagementPage.addBlockPopupFeedbackMessage, 10000);
    let addBlockPopupFeedbackMessageActual = action.getElementText(contractorEngagementPage.addBlockPopupFeedbackMessage);
    chai.expect(addBlockPopupFeedbackMessageActual).to.equal(expectedMessage);
})

When(/^the admin clicks on the name "(.*)" of a block$/, function (blockName) {
    let activeBlockerLinkElement = $(contractorEngagementPage.activeBlockerLinkLocator.replace("<dynamic>", blockName));
    action.isVisibleWait(activeBlockerLinkElement, 10000);
    action.clickElement(activeBlockerLinkElement);
})

When(/^the block is a "(.*)" block$/, function (tabName) {
    action.isVisibleWait(contractorEngagementPage.activeTabOnAddBlockPopup, 10000);
    let activeTabNameActual = action.getElementText(contractorEngagementPage.activeTabOnAddBlockPopup);
    chai.expect(activeTabNameActual).to.equal(tabName);
})

Then(/^the type of Block appears as the only tab "(.*)"$/, function (tab1Expected) {
    let contractorBlockPopupTabsActual = action.getElementText(contractorEngagementPage.contractorBlockPopupTabs);
    chai.expect(contractorBlockPopupTabsActual).to.equal(tab1Expected);
})

When(/^the tab displays "(.*)"$/, function (tabName) {
    let activeTabNameElement = $(contractorEngagementPage.activeTabNameLocator.replace("<dynamic>",tabName));
    let activeTabNameDisplayStatus = action.isVisibleWait(activeTabNameElement,10000);
    chai.expect(activeTabNameDisplayStatus).to.be.true;
})

When(/^the Admin can make changes "(.*)" and save$/, function (severityLevel) {
    action.selectTextFromDropdown(contractorEngagementPage.billToSeverityDropdown, severityLevel);
    action.enterValue(contractorEngagementPage.startDateBillTo, datetime.getShortNoticeDate());
    action.enterValue(contractorEngagementPage.endDateBillTo, datetime.getRandomFutureDate());
    action.pressKeys("Tab");
    action.isVisibleWait(contractorEngagementPage.saveButtonOnBlockingPopup, 10000);
    action.clickElement(contractorEngagementPage.saveButtonOnBlockingPopup);
})

Then(/^the block "(.*)" sadly disappears from the list…$/, function (blockName) {
    let newBlockRulesOnProfileCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    chai.expect(newBlockRulesOnProfileCount).to.equal(0);
    let activeBlockerLinkElement = $(contractorEngagementPage.activeBlockerLinkLocator.replace("<dynamic>", blockName));
    let blockDisplayStatus = action.isVisibleWait(activeBlockerLinkElement, 3000);
    chai.expect(blockDisplayStatus).to.be.false;
})

When(/^the expiry date "(.*)", "(.*)" is prior to the current date$/, function (startDate, endDate) {
    action.isVisibleWait(contractorEngagementPage.startDateBillTo,10000)
    action.enterValue(contractorEngagementPage.startDateBillTo, startDate);
    action.enterValue(contractorEngagementPage.endDateBillTo, endDate);
    action.pressKeys("Tab");
    action.isVisibleWait(contractorEngagementPage.saveButtonOnBlockingPopup, 10000);
    action.clickElement(contractorEngagementPage.saveButtonOnBlockingPopup);
})

When(/^Add Naati Accreditation "(.*)","(.*)","(.*)","(.*)" if not available$/, function (service, from, to, level) {
    let accreditationFromToLanguagesAvailable = $(contractorEngagementPage.accreditationFromToLanguagesLocator.replace("<dynamic1>",from).replace("<dynamic2>",to));
    if (action.isVisibleWait(accreditationFromToLanguagesAvailable,1000) === false){
        action.isVisibleWait(contractorEngagementPage.addAccreditationLink,10000);
        action.clickElement(contractorEngagementPage.addAccreditationLink);
        action.isVisibleWait(contractorEngagementPage.serviceDropdown,10000);
        action.selectTextFromDropdown(contractorEngagementPage.serviceDropdown, service);
        action.enterValueAndPressReturn(contractorEngagementPage.fromLanguageDropdown, from);
        action.enterValueAndPressReturn(contractorEngagementPage.toLanguageDropdown, to);
        action.selectTextFromDropdown(contractorEngagementPage.naatiAccreditationDropdown, level);
        action.clickElement(contractorEngagementPage.saveAndCloseButton);
    }
})

When(/^the Interpreter has one active NAATI accreditations for a language "(.*)" to "(.*)"$/, function (from, to) {
    let accreditationLanguagesServiceLink = $(contractorEngagementPage.accreditationFromToLanguagesServiceLinkLocator.replace("<dynamic1>",from).replace("<dynamic2>",to));
    action.isVisibleWait(accreditationLanguagesServiceLink,10000);
    action.clickElement(accreditationLanguagesServiceLink);
    action.isClickableWait(contractorEngagementPage.validateButton, 10000);
    action.clickElement(contractorEngagementPage.validateButton);
    action.isExistingWait(contractorEngagementPage.naatiCertificationsFirstText,10000)
    let actualCertificationsCount = contractorEngagementPage.naatiCertificationsText.length;
    action.clickElement(contractorEngagementPage.cancelButtonOnNaatiAcceditationPopup);
    chai.expect(actualCertificationsCount).to.equal(1);
})

Then(/^on Contractor Details History page, the NAATI accreditation "(.*)" will have been allocated to the interpreter’s profile$/, function (expectedNaatiAccreditation) {
    action.isVisibleWait(contractorEngagementPage.viewHistoryButton, 10000);
    action.clickElement(contractorEngagementPage.viewHistoryButton);
    action.isVisibleWait(contractorEngagementPage.showContractAuditTrialsLink, 10000);
    action.clickElement(contractorEngagementPage.showContractAuditTrialsLink);
    action.isNotVisibleWait(contractorEngagementPage.auditHistoryNoItemsToShowMessage,20000);
    browser.waitUntil(
        () =>  action.isVisibleWait(contractorEngagementPage.auditHistoryNoItemsToShowMessage, 0) === false,
        {
            timeout: 20000,
            timeoutMsg: 'expected no items message to disappear in 20s'
        }
    );
    let actualAuditHistoryBody = action.getElementText(contractorEngagementPage.auditHistoryTableBody);
    chai.expect(actualAuditHistoryBody).to.includes(expectedNaatiAccreditation);
})

When(/^I search and select contractor "(.*)"$/, function (contractor) {
    action.isVisibleWait(contractorEngagementPage.searchContractorInput,10000);
    action.enterValue(contractorEngagementPage.searchContractorInput, contractor);
    action.pressKeys("Tab");
    let contractorSearchResultElement = $(contractorEngagementPage.contractorSearchResultLocator.replace("<dynamic>", contractor));
    action.isVisibleWait(contractorSearchResultElement, 20000);
    action.clickElement(contractorSearchResultElement);
})

Then(/^the selected Bill Tos "(.*)" are displayed in separate rows, each for 1 Bill To$/, function (billTos) {
    let billTosList = billTos.split(",");
    let newBlockRulesOnProfileCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    for (let rule = 0; rule < newBlockRulesOnProfileCount; rule++) {
        let newRuleTextActual = action.getElementText(contractorEngagementPage.newBlockRuleLinksOnProfile[rule]);
        chai.expect(newRuleTextActual).to.includes(billTosList[rule])
    }
})

Then(/^I click on any of the above created blocks and see that block contains the selected Bill To "(.*)" only$/, function (billTos) {
    let billTosList = billTos.split(",");
    for (let rule = 0; rule < billTosList.length; rule++) {
        action.clickElement(contractorEngagementPage.newBlockRuleLinksOnProfile[rule]);
        action.isVisibleWait(contractorEngagementPage.billToValueTextBox, 20000);
        let billToValueActual = action.getElementValue(contractorEngagementPage.billToValueTextBox);
        action.isVisibleWait(contractorEngagementPage.contractorBlockingPopupCloseButton, 20000);
        action.clickElement(contractorEngagementPage.contractorBlockingPopupCloseButton);
        chai.expect(billToValueActual).to.equal(billTosList[rule]);
    }
})

When(/^the user selects at least 1 Bill To "(.*)"$/, function (billTos) {
    if (billTos !== null) {
        let billTosList = billTos.split(",");
        for (let option = 0; option < billTosList.length; option++) {
            let billToCode = billTosList[option].split("-")[0].trim();
            action.addValueAndPressReturnTab(contractorEngagementPage.billToSearchBox, billToCode);
            let billToCheckboxElement = $(contractorEngagementPage.billToDynamicCheckboxLocator.replace("<dynamic>", billTosList[option]));
            action.isVisibleWait(billToCheckboxElement, 10000);
            action.clickElement(billToCheckboxElement);
        }
    }
})

When(/^do not enter any value in Date Started field "(.*)"$/, function (severityLevel) {
    action.selectTextFromDropdown(contractorEngagementPage.billToSeverityDropdown, severityLevel);
    action.enterValue(contractorEngagementPage.startDateBillTo, "");
    action.enterValue(contractorEngagementPage.endDateBillTo, datetime.getRandomFutureDate());
    action.pressKeys("Tab");
})

Then(/^the error message "(.*)" is displayed below the Date Started field$/, function (errorMessage) {
    action.isVisibleWait(contractorEngagementPage.dateStartedErrorMessage, 10000);
    let errorMessageActual = action.getElementText(contractorEngagementPage.dateStartedErrorMessage);
    chai.expect(errorMessageActual).to.equal(errorMessage);
})

When(/^do not select any Job Type$/, function () {
    let jobTypesCheckboxesCount = contractorEngagementPage.jobTypesCheckBoxesCount;
    for (let checkBoxIndex = 0; checkBoxIndex < jobTypesCheckboxesCount; checkBoxIndex++) {
        let checkBoxElements = contractorEngagementPage.jobTypesCheckBoxes;
        action.isVisibleWait(checkBoxElements[checkBoxIndex], 10000);
        let checkBoxSelectedStatus = action.isSelectedWait(checkBoxElements[checkBoxIndex], 10000);
        if (checkBoxSelectedStatus === true) {
            action.clickElement(checkBoxElements[checkBoxIndex]);
        }
    }
})

Then(/^the error message "(.*)" is displayed below the Job Types$/, function (errorMessage) {
    action.isVisibleWait(contractorEngagementPage.jobTypesErrorMessage, 10000);
    let errorMessageActual = action.getElementText(contractorEngagementPage.jobTypesErrorMessage);
    chai.expect(errorMessageActual).to.equal(errorMessage);
})

When(/^the Admin can make changes "(.*)"$/, function (severityLevel) {
    action.selectTextFromDropdown(contractorEngagementPage.billToSeverityDropdown, severityLevel);
    action.enterValue(contractorEngagementPage.startDateBillTo, datetime.getShortNoticeDate());
    action.enterValue(contractorEngagementPage.endDateBillTo, datetime.getRandomFutureDate());
    action.pressKeys("Tab");
})

When(/^click on Cancel icon$/, function () {
    action.isVisibleWait(contractorEngagementPage.contractorBlockingPopupCloseButton, 10000);
    action.clickElement(contractorEngagementPage.contractorBlockingPopupCloseButton);
})

Then(/^the changes made "(.*)" should not be displayed as we clicked on Cancel button$/, function (expectedSeverity) {
    action.isVisibleWait(contractorEngagementPage.billToSeverityDropdown, 10000);
    let severityLevelActual = action.getElementText(contractorEngagementPage.severitySelectedOption);
    chai.expect(severityLevelActual).to.not.equal(expectedSeverity);
})

When(/^the block is created with expiry date "(.*)", "(.*)" prior to the current date$/, function (startDate, endDate) {
    action.isVisibleWait(contractorEngagementPage.startDateBillTo,10000)
    action.enterValue(contractorEngagementPage.startDateBillTo, startDate);
    action.enterValue(contractorEngagementPage.endDateBillTo, endDate);
    action.pressKeys("Tab");
})

When(/^I click on Show Expired toggle$/, function () {
    action.isVisibleWait(contractorEngagementPage.showExpiredBlocksToggleCheck, 10000);
    action.clickElement(contractorEngagementPage.showExpiredBlocksToggleCheck);
})

When(/^I click on save on blocking popup$/, function () {
    action.isVisibleWait(contractorEngagementPage.saveButtonOnBlockingPopup, 10000);
    action.clickElement(contractorEngagementPage.saveButtonOnBlockingPopup);
})

When(/^I click on Manage basic details link$/, function () {
    action.isVisibleWait(contractorEngagementPage.manageBasicDetails, 10000);
    action.clickElement(contractorEngagementPage.manageBasicDetails);
})

When(/^I see the My Details popup is displayed$/, function () {
    action.isVisibleWait(contractorEngagementPage.myDetailsPopup, 10000);
})

When(/^I clear the Contractor ABN and Company Name fields$/, function () {
    action.isVisibleWait(contractorEngagementPage.contractorABNField, 10000);
    action.isVisibleWait(contractorEngagementPage.companyNameField, 10000);
    action.clearValue(contractorEngagementPage.contractorABNField);
    action.clearValue(contractorEngagementPage.companyNameField);
})

When(/^I enter a valid "(.*)" without spaces$/, function (abnNumber) {
    action.enterValue(contractorEngagementPage.contractorABNField, abnNumber);
    action.pressKeys("Tab");
    let actualABNNumber = action.getElementValue(contractorEngagementPage.contractorABNField);
    chai.expect(actualABNNumber).to.equal(abnNumber);
})

When(/^I click on Check button$/, function () {
    action.isClickableWait(contractorEngagementPage.checkButton, 10000);
    action.clickElement(contractorEngagementPage.checkButton);
})

Then(/^a thumbs up icon will appear next to the Check button with hover over message ABN is valid$/, function () {
    let thumpsUpIconDisplaysStatus = action.isVisibleWait(contractorEngagementPage.thumpsUpIcon, 10000);
    chai.expect(thumpsUpIconDisplaysStatus).to.be.true;
    action.moveToElement(contractorEngagementPage.thumpsUpIcon);
    let abnValidTextStatus = action.isExistingWait(contractorEngagementPage.thumpsUpToolTipText, 1000)
    chai.expect(abnValidTextStatus).to.be.true;
})

When(/^I enter invalid "(.*)" without spaces$/, function (invalidABNNumber) {
    action.enterValue(contractorEngagementPage.contractorABNField, invalidABNNumber);
    action.pressKeys("Tab");
    let actualABNNumber = action.getElementValue(contractorEngagementPage.contractorABNField);
    chai.expect(actualABNNumber).to.equal(invalidABNNumber);
})

Then(/^a thumbs down icon will appear next to the Check button with hover over error message No details found for ABN "(.*)"$/, function (enteredABNNumber) {
    let thumpsDownIconDisplaysStatus = action.isVisibleWait(contractorEngagementPage.thumpsDownIcon, 10000);
    chai.expect(thumpsDownIconDisplaysStatus).to.be.true;
    action.moveToElement(contractorEngagementPage.thumpsDownIcon);
    let inValidToolTipText = $(contractorEngagementPage.thumpsDownToolTipText.replace("<dynamic>", enteredABNNumber));
    let abnInValidTextStatus = action.isExistingWait(inValidToolTipText, 1000)
    chai.expect(abnInValidTextStatus).to.be.true;
})

When(/^I enter valid "(.*)" with spaces$/, function (abnNumber) {
    action.enterValue(contractorEngagementPage.contractorABNField, abnNumber);
    action.pressKeys("Tab");
    let actualABNNumber = action.getElementValue(contractorEngagementPage.contractorABNField);
    chai.expect(actualABNNumber).to.equal(abnNumber);
})

When(/^I see My Details popup is closed$/, function () {
    let status = action.isClickableWait(contractorEngagementPage.manageBasicDetails, 10000);
    chai.expect(status).to.be.true;
})

Then(/^I see the ABN value is saved correctly and equals to "(.*)"$/, function (abnNumber) {
    let actualABNNumber = action.getElementValue(contractorEngagementPage.contractorABNField);
    chai.expect(actualABNNumber).to.equal(abnNumber);
})

Then(/^I see the ABN value is saved without spaces correctly and equals to "(.*)"$/, function (abnNumber) {
    let actualABNNumber = action.getElementValue(contractorEngagementPage.contractorABNField);
    chai.expect(actualABNNumber).to.equal(abnNumber);
})

Then(/^a thumbs down icon will appear next to the Check button with hover over error message No details found for ABN$/, function (){
    let thumpsDownIconDisplaysStatus = action.isVisibleWait(contractorEngagementPage.thumpsDownIcon, 10000);
    chai.expect(thumpsDownIconDisplaysStatus).to.be.true;
    action.moveToElement(contractorEngagementPage.thumpsDownIcon);
    let abnValidTextStatus = action.isExistingWait(contractorEngagementPage.thumpsDownToolTipForNoABN, 1000)
    chai.expect(abnValidTextStatus).to.be.true;
})

When(/^I click on Save contractor button$/, function () {
    action.isClickableWait(contractorEngagementPage.saveContractorButton);
    action.clickElement(contractorEngagementPage.saveContractorButton);
})