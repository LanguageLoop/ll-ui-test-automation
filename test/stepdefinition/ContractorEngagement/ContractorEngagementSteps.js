const GlobalData = require("../../data/GlobalData")

When(/^I click add contractor button$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addContractorLink,"Add Contractor link on Contractor Engagement page")
})

When(/^I enter contractor details "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, function (salutation, gender, name, pin, mobile, dob, email, address) {
    name = name + (Math.floor(Math.random() * 1000000) + 1).toString()
    email = email + (Math.floor(Math.random() * 1000000) + 1).toString()
    mob = "0" + (400000000 + (Math.floor(Math.random() * 100000000) + 1)).toString()
    GlobalData.NEW_CONTRACTOR_NAME = name
    browser.pause(2000)

    action.selectTextFromDropdown(contractorEngagementPage.salutationDropdown, salutation,"Salutation dropdown on Contractor Engagement page")
    if (gender == "Male") {
        action.clickElement(contractorEngagementPage.maleRadioButton, "Male Radio button on Contractor Engagement page")
    } else {
        action.clickElement(contractorEngagementPage.femaleRadioButton,"Female Radio button on Contractor Engagement page")
    }

    action.enterValue(contractorEngagementPage.telephonePinInput, pin, "Telephone pin Input field on Contractor Engagement page")
    action.enterValue(contractorEngagementPage.firstNameInput, name, "First Name Input field on Contractor Engagement page")
    action.enterValue(contractorEngagementPage.mobileInput, mob, "Mobile field on Contractor Engagement page")
    action.enterValueAndPressReturn(contractorEngagementPage.dateOfBirthDropdown, dob, "Date of Birth field on Contractor Engagement page")
    action.enterValue(contractorEngagementPage.emailInput, email + "@aa.com.au", "Email input field on Contractor Engagement page")

    $('//span[@class="fa fa-fw fa-pencil-square-o"]').click()
    browser.pause(2000)
    action.enterLocation(contractorEngagementPage.addressInput, address, "Address input field on Contractor Engagement page")
    browser.pause(2000)
    browser.keys("Enter")
    browser.pause(2000)
    $$('//span[@class="fa fa-fw fa-pencil-square-o"]')[1].click()
    browser.pause(2000)
    action.enterLocation(contractorEngagementPage.postalAddressInput, address, "Postal address input field on Contractor Engagement page")
    browser.pause(2000)
    browser.keys("Enter")
    if (action.isClickableWait(contractorEngagementPage.emailPreferenceCheckbox, 1000, "Email Preference Checkbox on Contractor Engagement page") === true) {
        action.clickElement(contractorEngagementPage.emailPreferenceCheckbox, "Email Preference Checkbox on Contractor Engagement page")
    }
    action.uploadFile(contractorEngagementPage.workContractFileControl, "./test/data/ContractDocument.docx","Work Contract file field on Contractor Engagement page")
    const uploadedFile = $("//div[text()[contains(.,'ContractDocument.docx')]]")
    browser.waitUntil(() => uploadedFile.getText() === 'ContractDocument.docx', {
        timeout: 7000,
        timeoutMsg: 'file not uploaded in 5s',
        interval: 1000
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
        interval: 500
    })
})

When(/^I search and open contractor "(.*)"$/, function (contractor) {
    browser.pause(2000)
    action.enterValue(contractorEngagementPage.searchContractorInput, contractor, "Search Contractor Input on Contractor Engagement page")
    let contractorSearchResultElement = $(contractorEngagementPage.contractorSearchResultLocator.replace("<dynamic>", contractor));
    action.isVisibleWait(contractorSearchResultElement, 20000, "Contractor Search Result Element on Contractor Engagement page");
    $('//table[contains(@id,"Contractor")]//td//a').click()
})

When(/^I search and open created contractor$/, function () {
    browser.pause(2000)
    action.enterValue(contractorEngagementPage.searchContractorInput, GlobalData.NEW_CONTRACTOR_NAME, "Search Contractor Input on Contractor Engagement page")
    let contractorSearchResultElement = $(contractorEngagementPage.contractorSearchResultLocator.replace("<dynamic>", GlobalData.NEW_CONTRACTOR_NAME));
    action.isVisibleWait(contractorSearchResultElement, 20000, "Contractor Search Result Element on Contractor Engagement page");
    $('//table[contains(@id,"Contractor")]//td//a').click()
})

When(/^I click add accreditation link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addAccreditationLink, "Add Accreditation Link on Contractor Engagement page")
})

When(/^I enter naati details "(.*)","(.*)","(.*)","(.*)"$/, function (service, from, to, level) {
    browser.pause(2000)
    action.selectTextFromDropdown(contractorEngagementPage.serviceDropdown, service, "Service dropdown on Contractor Engagement page")
    action.enterValueAndPressReturn(contractorEngagementPage.fromLanguageDropdown, from, "From Language Dropdown on Contractor Engagement page")
    action.enterValueAndPressReturn(contractorEngagementPage.toLanguageDropdown, to, "To Language Dropdown on Contractor Engagement page")
    action.selectTextFromDropdown(contractorEngagementPage.naatiAccreditationDropdown, level, "Naati Accreditation Level Dropdown on Contractor Engagement page")
    action.clickElement(contractorEngagementPage.saveAndCloseButton, "Save and Close button on Contractor Engagement page")
})

When(/^I enter all naati details "(.*)","(.*)","(.*)","(.*)","(.*)"$/, function (service, from, to, level, naati) {
    browser.pause(2000)
    action.isVisibleWait(contractorEngagementPage.serviceDropdown, 10000, "Service dropdown on Contractor Engagement page")
    action.selectTextFromDropdown(contractorEngagementPage.serviceDropdown, service, "Service dropdown on Contractor Engagement page")
    action.isVisibleWait(contractorEngagementPage.fromLanguageDropdown, 10000, "From Language Dropdown on Contractor Engagement page")
    action.enterValueAndPressReturn(contractorEngagementPage.fromLanguageDropdown, from, "From Language Dropdown on Contractor Engagement page")
    action.isVisibleWait(contractorEngagementPage.toLanguageDropdown, 10000, "To Language Dropdown on Contractor Engagement page")
    action.enterValueAndPressReturn(contractorEngagementPage.toLanguageDropdown, to, "To Language Dropdown on Contractor Engagement page")
    action.isVisibleWait(contractorEngagementPage.naatiAccreditationDropdown, 10000, "Naati Accreditation Level Dropdown on Contractor Engagement page")
    action.selectTextFromDropdown(contractorEngagementPage.naatiAccreditationDropdown, level, "Naati Accreditation Level Dropdown on Contractor Engagement page")
    action.isClickableWait(contractorEngagementPage.naatiNumber, 10000, "Naati number field on Contractor Engagement page")
    action.enterValue(contractorEngagementPage.naatiNumber, naati, "Naati number field on Contractor Engagement page")
    action.isClickableWait(contractorEngagementPage.validateButton, 10000, "Validate button on Contractor Engagement page")
    action.clickElement(contractorEngagementPage.validateButton, "Validate button on Contractor Engagement page")
    action.isVisibleWait(contractorEngagementPage.validFrom, 30000, "Valid From field on Contractor Engagement page")
    var txt = contractorEngagementPage.validFrom.getText()
    console.log(txt)
    var fields = txt.split(': ');
    browser.pause(1000)
    console.log(fields[1].replace(/[/.]/g, "-"))
    action.isClickableWait(contractorEngagementPage.dateIssuedInput, 10000, "Date Issued input field on Contractor Engagement page")
    action.addValueAndPressReturnTab(contractorEngagementPage.dateIssuedInput, fields[1].replace(/[/.]/g, "-"), "Date Issued input field on Contractor Engagement page")
    action.isClickableWait(contractorEngagementPage.saveAndCloseButton, 10000, "Save and Close button on Contractor Engagement page")
    action.clickElement(contractorEngagementPage.saveAndCloseButton, "Save and Close button on Contractor Engagement page")
    browser.pause(2000)
    if (action.isVisibleWait(contractorEngagementPage.translatorXTMAlert, 5000, "TranslatorXTM Alert on Contractor Engagement page")) {
        action.isClickableWait(contractorEngagementPage.xtmConfirmButton, 5000, "XTM Confirm button on Contractor Engagement page")
        action.clickElement(contractorEngagementPage.xtmConfirmButton, "XTM Confirm button on Contractor Engagement page")
    }
});

When(/^I click add notes link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addNotesLink, "Add Notes link on Contractor Engagement page")
})

When(/^I enter contractor notes details "(.*)","(.*)"$/, function (title, message) {
    browser.pause(2000)
    action.enterValue(contractorEngagementPage.noteTitleInput, title, "Note Title Input field on Contractor Engagement page")
    action.enterValue(contractorEngagementPage.noteMessageInput, message, "Note Message Input field on Contractor Engagement page")
    action.clickElement(contractorEngagementPage.saveNotesButton, "Save Note button on Contractor Engagement page")
    browser.pause(2000)
})

When(/^I click add work eligibility link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addWorkEligbileLink, "Add Work Eligbile Link on Contractor Engagement page")
})

When(/^I enter work eligibility details "(.*)","(.*)","(.*)"$/, function (rights, number, years) {
    browser.pause(2000)
    action.selectTextFromDropdown(contractorEngagementPage.workRightsDropdown, rights, "Work Rights Dropdown on Contractor Engagement page")
    action.enterValue(contractorEngagementPage.passportVisaNumberInput, number, "Passport VisaNumber Input on Contractor Engagement page")
    action.uploadFile(contractorEngagementPage.proofOfVisaPassportFileControl, "./test/data/Working rights.docx", "Proof of Visa Passport File Control on Contractor Engagement page")

    action.enterValue(contractorEngagementPage.yearsOfResidenceInput, years, "Years of Residence Input field on Contractor Engagement page")

    action.clickElement(contractorEngagementPage.saveWorkEligibilityButton, "Save Work Eligibility Button on Contractor Engagement page")
    browser.pause(2000)
})

When(/^I click add clearance link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addClearanceLink, "Add Clearance Link on Contractor Engagement page")
})

When(/^I enter clearance details "(.*)"$/, function (clearance) {
    browser.pause(2000)
    action.uploadFile(contractorEngagementPage.clearanceFileControl, "./test/data/ContractDocument.docx", "Clearance File Control on Contractor Engagement page")
    action.selectTextFromDropdown(contractorEngagementPage.clearanceTypeDropdown, clearance, "Clearance Type dropdown on Contractor Engagement page")
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.saveClearanceButton, "Save Clearance Button on Contractor Engagement page")
})

When(/^I click add availability link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addAvailabilityLink, "Add Availability Link on Contractor Engagement page")
    browser.pause(2000)
})

When(/^I enter availability details "(.*)","(.*)"$/, function (type, words) {
    browser.pause(2000)
    if (type == "Translation") {
        contractorEngagementPage.translationAvailabilityCheckbox.click()
    }

    contractorEngagementPage.availabilitySegment.click()
    action.enterValue(contractorEngagementPage.wordsPerDayInput, words, "Words Per Day Input on Contractor Engagement page")
    action.clickElement(contractorEngagementPage.saveAvailabilityButton, "Save Availability Button on Contractor Engagement page")
    browser.pause(2000)
})

When(/^I click add work preference link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addWorkPreferenceLink, "Add Work Preference Link on Contractor Engagement page")
})

When(/^I enter preference details "(.*)"$/, function (company) {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.organisationSection, "Organisation Section on Contractor Engagement page")
    browser.pause(2000)
    action.enterValueAndPressReturn(contractorEngagementPage.searchCompanyNameInput, company, "Search Company Name Input field on Contractor Engagement page")
    action.clickElement(contractorEngagementPage.saveWorkPreferenceButton,  "Save Work Preference Button on Contractor Engagement page")
    browser.pause(2000)
})

When(/^I click add referee link$/, function () {
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addRefereeLink, "Add Referee Link on Conractor Engagement page")
    browser.pause(2000)
})

When(/^I enter referee details "(.*)","(.*)"$/, function (agency, name) {
    browser.pause(2000)
    action.enterValue(contractorEngagementPage.agencyInput, agency, "Agency Input field on Contractor Engagemnet page")
    action.enterValue(contractorEngagementPage.refereeNameInput, name, "refereeNameInput on Contractor Engagement page")
    action.clickElement(contractorEngagementPage.saveRefereeButton, "Save Referee Button on Contractor Engagement page")
    browser.pause(2000)

})

Then(/^I verify referee "(.*)","(.*)"$/, function (agency, name) {
    browser.pause(2000)
    var elt = $('//*[@class="Reference Card"]//*[text()="' + agency + '"]')
    chai.expect(action.elementExists(elt,"Reference card agency in Contractor Engagement page")).to.be.true
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
    chai.expect(action.elementExists(elt,"Working preferences company in Contractor Engagement page")).to.be.true
})

Then(/^I delete work preferences$/, function () {
    browser.pause(2000)
    var elt = contractorEngagementPage.removeWorkPreferenceButtons.length
    for (var i = 0; i < elt - 1; i++) {
        action.clickElement(contractorEngagementPage.removeWorkPreferenceButtons[i], "Remove Work Preference Buttons on Contractor Engagement page")
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
    chai.expect(action.elementExists(contractorEngagementPage.workEligibilityDocumentLink,"Work eligibility document link in Contractor Engagement page")).to.be.true
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
    action.enterValueAndPressReturn(contractorEngagementPage.searchContractorInput, GlobalData.NEW_CONTRACTOR_NAME, "Search Contractor Input field on Contractor Engagement page")
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
    action.isVisibleWait(contractorEngagementPage.addABlockLink, 10000, "Add A Block Link on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.addABlockLink, "Add A Block Link on Contractor Engagement page");
})

Then(/^the Contractor Blocking modal popup pops-up$/, function () {
    let contractorBlockModalPopupDisplayStatus = action.isVisibleWait(contractorEngagementPage.contractorBlockingModalPopup, 10000,"Contract blocking modal popup in Contractor Engagement page");
    chai.expect(contractorBlockModalPopupDisplayStatus).to.be.true;
})

Then(/^there should be 3 Tabs : "(.*)", "(.*)", "(.*)"$/, function (tab1Expected, tab2Expected, tab3Expected) {
    let contractorBlockPopupTabsActual = action.getElementText(contractorEngagementPage.contractorBlockPopupTabs,"Contract block popup tabs in Contractor Engagement page");
    chai.expect(contractorBlockPopupTabsActual).to.includes(tab1Expected);
    chai.expect(contractorBlockPopupTabsActual).to.includes(tab2Expected);
    chai.expect(contractorBlockPopupTabsActual).to.includes(tab3Expected);
})

When(/^the admin clicks on the Bill To tab$/, function () {
    action.isVisibleWait(contractorEngagementPage.billToTab, 10000, "Bill To Tab on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.billToTab, "Bill To Tab on Contractor Engagement page");
})

Then(/^it should show a list of Contract Bill To’s$/, function () {
    let contractBillTosDisplayStatus = action.isVisibleWait(contractorEngagementPage.listOfContractBillTos, 10000, "List Of Contract Bill Tos on Contractor Engagement page");
    chai.expect(contractBillTosDisplayStatus).to.be.true;
})

Then(/^the search box should allow the admin to filter by Bill To name "(.*)"$/, function (billToNameSearch) {
    action.isVisibleWait(contractorEngagementPage.billToSearchBox, 10000, "Bill To search box on Contractor Engagement page");
    action.addValueAndPressReturnTab(contractorEngagementPage.billToSearchBox, billToNameSearch, "Bill To name Search box on Contractor Engagement page");
    let contractBillTosTextActual = action.getElementText(contractorEngagementPage.listOfContractBillTos, "List of Contract Bill Tos on Contractor Engagement page");
    chai.expect(contractBillTosTextActual).to.includes(billToNameSearch);
})

Then(/^the user can select 1 or more Bill Tos$/, function () {
    action.clearValue(contractorEngagementPage.billToSearchBox,"Bill To search box on Contractor Engagement page");
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
        action.isVisibleWait(checkBoxElements[checkBoxIndex], 10000, "Bill To Checkbox on Contractor Engagement page");
        action.clickElement(checkBoxElements[checkBoxIndex], "Bill To Checkbox on Contractor Engagement page");
        //short pause to let the checkboxes get selected
        browser.pause(2000);
        let checkBoxSelectedStatus = action.isSelectedWait(checkBoxElements[checkBoxIndex], 10000, "Bill To Checkbox on Contractor Engagement page");
        chai.expect(checkBoxSelectedStatus).to.be.true;
    }
})

Then(/^it should show a list of Job Types, each with a checkbox$/, function () {
    let jobTypesListDisplayStatus = action.isVisibleWait(contractorEngagementPage.jobTypesListRecords, 10000, "Job Type List Records on Contractor Engagement page");
    chai.expect(jobTypesListDisplayStatus).to.be.true;
})

Then(/^each Job Type should be default checked$/, function () {
    let jobTypesCheckboxesCount = contractorEngagementPage.jobTypesCheckBoxesCount;
    for (let checkBoxIndex = 0; checkBoxIndex < jobTypesCheckboxesCount; checkBoxIndex++) {
        let checkBoxElements = contractorEngagementPage.jobTypesCheckBoxes;
        action.isVisibleWait(checkBoxElements[checkBoxIndex], 10000, "Job Type To Checkbox on Contractor Engagement page");
        let checkBoxSelectedStatus = action.isSelectedWait(checkBoxElements[checkBoxIndex], 10000,"Job type checkbox elements on Contractor Engagement page");
        chai.expect(checkBoxSelectedStatus).to.be.true;
    }
})

When(/^the inputs "(.*)", "(.*)" are valid in Bill-To tab$/, function (billTos, severityLevel) {
    let billTosList = billTos.split(",");
    for (let option = 0; option < billTosList.length; option++) {
        let billToCode = billTosList[option].split("-")[0].trim();
        action.addValueAndPressReturnTab(contractorEngagementPage.billToSearchBox, billToCode, "Bill To Search box on Contractor Engagement page");
        let billToCheckboxElement = $(contractorEngagementPage.billToDynamicCheckboxLocator.replace("<dynamic>", billTosList[option]));
        action.isVisibleWait(billToCheckboxElement, 10000, "Bill To Checkbox element on Contractor Engagement page");
        if (action.isSelectedWait(billToCheckboxElement, 1000, "Bill To Checkbox element on Contractor Engagement page") === false) {
            action.clickElement(billToCheckboxElement, "Bill To Checkbox element on Contractor Engagement page");
        }
    }
    action.selectTextFromDropdown(contractorEngagementPage.billToSeverityDropdown, severityLevel);
    action.enterValue(contractorEngagementPage.startDateBillTo, datetime.getShortNoticeDate(), "Bill To Start Date on Contractor Engagement page");
    action.enterValue(contractorEngagementPage.endDateBillTo, datetime.getRandomFutureDate(), "Bill To End Date on Contractor Engagement page");
    action.pressKeys("Tab");
})

When(/^at least 1 Job Type "(.*)" is selected$/, function (jobTypes) {
    let jobTypesCheckboxesCount = contractorEngagementPage.jobTypesCheckBoxesCount;
    for (let checkBoxIndex = 0; checkBoxIndex < jobTypesCheckboxesCount; checkBoxIndex++) {
        let checkBoxElements = contractorEngagementPage.jobTypesCheckBoxes;
        action.isVisibleWait(checkBoxElements[checkBoxIndex], 10000, "Job Types Checkboxes on Contractor Engagement page");
        let checkBoxSelectedStatus = action.isSelectedWait(checkBoxElements[checkBoxIndex], 10000, "Job Types Checkboxes on Contractor Engagement page");
        if (checkBoxSelectedStatus === true) {
            action.clickElement(checkBoxElements[checkBoxIndex], "Job Types Checkbox on Contractor Engagement page")
        }
    }
    let jobTypesList = jobTypes.split(",");
    for (let option = 0; option < jobTypesList.length; option++) {
        let jobTypeCheckboxElement = $(contractorEngagementPage.jobTypeDynamicCheckboxLocator.replace("<dynamic>", jobTypesList[option]));
        action.isVisibleWait(jobTypeCheckboxElement, 10000, "Job Types Checkbox on Contractor Engagement page");
        action.clickElement(jobTypeCheckboxElement, "Job Types Checkbox on Contractor Engagement page")
    }
})

Then(/^the block is saved$/, function () {
    action.isVisibleWait(contractorEngagementPage.addBlockButton, 10000, "Add block button on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.addBlockButton, "Add block button on Contractor Engagement page");
})

Then(/^the Contractor Blocking popup closes$/, function () {
    browser.waitUntil(
        () => action.isVisibleWait(contractorEngagementPage.contractorBlockingModalPopup, 0, "The Contractor Blocking popup on Contractor Engagement page") === false,
        {
            timeout: 10000,
            timeoutMsg: 'expected Contractor Blocking popup to close in 10s'
        }
    );
    let contractorBlockModalPopupDisplayStatus = action.isVisibleWait(contractorEngagementPage.contractorBlockingModalPopup, 3000, "The Contractor Blocking popup on Contractor Engagement page");
    chai.expect(contractorBlockModalPopupDisplayStatus).to.be.false;
})

Then(/^the new block rule is displayed on the contractor’s profile$/, function () {
    let newBlockRulesOnProfileCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    for (let rule = 0; rule < newBlockRulesOnProfileCount; rule++) {
        let newRuleDisplayStatus = action.isVisibleWait(contractorEngagementPage.newBlockRuleLinksOnProfile[rule], 10000, "The new block rule on contractor’s profile page");
        chai.expect(newRuleDisplayStatus).to.be.true;
    }
})

Then(/^the selected JobTypes are applied to all the BillTo’s "(.*)" blocking for the contractor$/, function (billTos) {
    let billTosExpected = billTos.split(",");
    let newBlockRulesLinksCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    for (let rule = 0; rule < newBlockRulesLinksCount; rule++) {
        let newRuleLinkTextActual = action.getElementText(contractorEngagementPage.newBlockRuleLinksOnProfile[rule], 10000, "The new block rule on contractor’s profile page");
        chai.expect(newRuleLinkTextActual).to.includes(billTosExpected[rule]);
    }
})

Then(/^the selected blocked Job Types "(.*)" are displayed in brackets after the Contractor name "(.*)"$/, function (jobTypes, contractorName) {
    let jobTypesExpected = jobTypes.split(",");
    let newBlockRulesLinksCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    for (let rule = 0; rule < newBlockRulesLinksCount; rule++) {
        let newRuleLinkTextActual = action.getElementText(contractorEngagementPage.newBlockRuleLinksOnProfile[rule], 10000, "The new Block Rule Links On Contractor Engagement page");
        let jobTypesInBracketsNextToContractorName = " " + contractorName + " " + "[" + jobTypesExpected[0] + ", " + jobTypesExpected[1] + "]"
        chai.expect(newRuleLinkTextActual).to.includes(jobTypesInBracketsNextToContractorName);
    }
})

Then(/^the admin clicks on Remove on a block$/, function () {
    let rule = 0;
    while (action.isVisibleWait(contractorEngagementPage.newBlockRuleLinksToggleIcon, 1000,"New Block Rule Links Toggle Icon on Contractor Engagement page") === true) {
        action.isVisibleWait(contractorEngagementPage.newBlockRuleLinksToggleIcon, 10000, "New Block Rule Links Toggle Icon on Contractor Engagement page");
        action.clickElement(contractorEngagementPage.newBlockRuleLinksToggleIcon, "New Block Rule Links Toggle Icon on Contractor Engagement page");
        action.isVisibleWait(contractorEngagementPage.newBlockRuleLinksRemove, 10000, "New Block Rule Links Remove on Contractor Engagement page");
        action.clickElement(contractorEngagementPage.newBlockRuleLinksRemove, "New Block Rule Links Remove on Contractor Engagement page");
        browser.pause(3000);
        rule++
    }
})

Then(/^no blocked job types "(.*)" brackets will be displayed$/, function (jobTypes) {
    let jobTypesExpected = jobTypes.split(",");
    let newBlockRulesLinksCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    for (let rule = 0; rule < newBlockRulesLinksCount; rule++) {
        let newRuleLinkTextActual = action.getElementText(contractorEngagementPage.newBlockRuleLinksOnProfile[rule], 10000,"New Block Rule Links on profile on Contractor Engagement page");
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
            action.addValueAndPressReturnTab(contractorEngagementPage.billToSearchBox, billToCode, "Bill-To Search box on Contractor Engagement page");
            let billToCheckboxElement = $(contractorEngagementPage.billToDynamicCheckboxLocator.replace("<dynamic>", billTosList[option]));
            action.isVisibleWait(billToCheckboxElement, 10000, "Bill to checkbox on Contractor Engagement page");
            action.clickElement(billToCheckboxElement, "Bill to checkbox on Contractor Engagement page");
        }
    }
    action.selectTextFromDropdown(contractorEngagementPage.billToSeverityDropdown, severityLevel, "Bill-To Severity dropdown on Contractor Engagement page");
    action.enterValue(contractorEngagementPage.startDateBillTo, startDate, "Bill-To Start date on Contractor Engagement page");
    action.enterValue(contractorEngagementPage.endDateBillTo, endDate, "Bill-To end date on Contractor Engagement page");
    action.pressKeys("Tab");
})

Then(/^the Contractor Blocking popup stays open$/, function () {
    let contractorBlockModalPopupDisplayStatus = action.isVisibleWait(contractorEngagementPage.contractorBlockingModalPopup, 10000, "Contractor Blocking Modal Popup on Contractor Engagment page");
    chai.expect(contractorBlockModalPopupDisplayStatus).to.be.true;
})

Then(/^an appropriate message "(.*)" is displayed$/, function (expectedMessage) {
    action.isVisibleWait(contractorEngagementPage.addBlockPopupFeedbackMessage, 10000, "Block Popup feedback message on Contractor Engagement page");
    let addBlockPopupFeedbackMessageActual = action.getElementText(contractorEngagementPage.addBlockPopupFeedbackMessage, "Block Popup feedback message on Contractor Engagement page");
    chai.expect(addBlockPopupFeedbackMessageActual).to.equal(expectedMessage);
})

When(/^the admin clicks on the name "(.*)" of a block$/, function (blockName) {
    let activeBlockerLinkElement = $(contractorEngagementPage.activeBlockerLinkLocator.replace("<dynamic>", blockName));
    action.isVisibleWait(activeBlockerLinkElement, 10000, "Active blocker link on Contrcator Engagement page");
    action.clickElement(activeBlockerLinkElement, "Active blocker link on Contrcator Engagement page");
})

When(/^the block is a "(.*)" block$/, function (tabName) {
    action.isVisibleWait(contractorEngagementPage.activeTabOnAddBlockPopup, 10000, "Active Tab on Add Block popup in Contractor Engagement page");
    let activeTabNameActual = action.getElementText(contractorEngagementPage.activeTabOnAddBlockPopup, "Active Tab on Add Block popup in Contractor Engagement page");
    chai.expect(activeTabNameActual).to.equal(tabName);
})

Then(/^the type of Block appears as the only tab "(.*)"$/, function (tab1Expected) {
    let contractorBlockPopupTabsActual = action.getElementText(contractorEngagementPage.contractorBlockPopupTabs, "Contractor bloc popup tabs on Contractor Engagement page");
    chai.expect(contractorBlockPopupTabsActual).to.equal(tab1Expected);
})

When(/^the tab displays "(.*)"$/, function (tabName) {
    let activeTabNameElement = $(contractorEngagementPage.activeTabNameLocator.replace("<dynamic>",tabName));
    let activeTabNameDisplayStatus = action.isVisibleWait(activeTabNameElement,10000, "Active tab name on Contractor Engagement page");
    chai.expect(activeTabNameDisplayStatus).to.be.true;
})

When(/^the Admin can make changes "(.*)" and save$/, function (severityLevel) {
    action.selectTextFromDropdown(contractorEngagementPage.billToSeverityDropdown, severityLevel,"Bill-To Severity dropdown on Contractor Engagement page");
    action.enterValue(contractorEngagementPage.startDateBillTo, datetime.getShortNoticeDate(), "Bill-To Start date on Contractor Engagement page");
    action.enterValue(contractorEngagementPage.endDateBillTo, datetime.getRandomFutureDate(), "Bill-To End date on Contractor Engagement page");
    action.pressKeys("Tab");
    action.isVisibleWait(contractorEngagementPage.saveButtonOnBlockingPopup, 10000, "Save button on blocking popup on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.saveButtonOnBlockingPopup, "Save button on blocking popup on Contractor Engagement page");
})

Then(/^the block "(.*)" sadly disappears from the list…$/, function (blockName) {
    let newBlockRulesOnProfileCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    chai.expect(newBlockRulesOnProfileCount).to.equal(0);
    let activeBlockerLinkElement = $(contractorEngagementPage.activeBlockerLinkLocator.replace("<dynamic>", blockName));
    let blockDisplayStatus = action.isVisibleWait(activeBlockerLinkElement, 3000, "Active Blocker link on Contractor Engagement page");
    chai.expect(blockDisplayStatus).to.be.false;
})

When(/^the expiry date "(.*)", "(.*)" is prior to the current date$/, function (startDate, endDate) {
    action.isVisibleWait(contractorEngagementPage.startDateBillTo,10000, "Bill-To Start Date on Contractor Engagement page")
    action.enterValue(contractorEngagementPage.startDateBillTo, startDate, "Bill-To Start Date on Contractor Engagement page");
    action.enterValue(contractorEngagementPage.endDateBillTo, endDate, "Bill-To End Date on Contractor Engagement page");
    action.pressKeys("Tab");
    action.isVisibleWait(contractorEngagementPage.saveButtonOnBlockingPopup, 10000, "Save button on blocking popup on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.saveButtonOnBlockingPopup, "Save button on blocking popup on Contractor Engagement page");
})

When(/^Add Naati Accreditation "(.*)","(.*)","(.*)","(.*)" if not available$/, function (service, from, to, level) {
    let accreditationFromToLanguagesAvailable = $(contractorEngagementPage.accreditationFromToLanguagesLocator.replace("<dynamic1>",from).replace("<dynamic2>",to));
    if (action.isVisibleWait(accreditationFromToLanguagesAvailable,1000, "Accreditation From To Languages Available on Contractor engagement page") === false){
        action.isVisibleWait(contractorEngagementPage.addAccreditationLink,10000, "Add Accreditation link on Contractor Engagement page");
        action.clickElement(contractorEngagementPage.addAccreditationLink, "Add Accreditation link on Contractor Engagement page");
        action.isVisibleWait(contractorEngagementPage.serviceDropdown,10000, "Service dropdown on Contractor Engagement page");
        action.selectTextFromDropdown(contractorEngagementPage.serviceDropdown, service, "Service dropdown on Contractor Engagement page");
        action.enterValueAndPressReturn(contractorEngagementPage.fromLanguageDropdown, from, "From Language dropdown on Contractor Engagement page");
        action.enterValueAndPressReturn(contractorEngagementPage.toLanguageDropdown, to, "To Language dropdown on Contractor Engagement page");
        action.selectTextFromDropdown(contractorEngagementPage.naatiAccreditationDropdown, level, "Naati Acrreditation dropdown on Contrcator Engagement page");
        action.clickElement(contractorEngagementPage.saveAndCloseButton, "Save and Close button on Contrcator Engagement page");
    }
})

When(/^the Interpreter has one active NAATI accreditations for a language "(.*)" to "(.*)"$/, function (from, to) {
    let accreditationLanguagesServiceLink = $(contractorEngagementPage.accreditationFromToLanguagesServiceLinkLocator.replace("<dynamic1>",from).replace("<dynamic2>",to));
    action.isVisibleWait(accreditationLanguagesServiceLink,10000, "Accreditation languages service link on Contrcator Engagement page");
    action.clickElement(accreditationLanguagesServiceLink, "Accreditation languages service link on Contractor Engagement page");
    action.isClickableWait(contractorEngagementPage.validateButton, 10000, "Validate button on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.validateButton, "Validate Button on Contractor Engagement page");
    action.isExistingWait(contractorEngagementPage.naatiCertificationsFirstText,10000, "Naati Certifications First text on Contractor Engagement page")
    let actualCertificationsCount = contractorEngagementPage.naatiCertificationsText.length;
    action.clickElement(contractorEngagementPage.cancelButtonOnNaatiAcceditationPopup,"Cancel button on Naati Accreditation popup on Contractor Engagement page");
    chai.expect(actualCertificationsCount).to.equal(1);
})

Then(/^on Contractor Details History page, the NAATI accreditation "(.*)" will have been allocated to the interpreter’s profile$/, function (expectedNaatiAccreditation) {
    action.isVisibleWait(contractorEngagementPage.viewHistoryButton, 10000, "View History button on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.viewHistoryButton, "View History button on Contractor Engagement page");
    action.isVisibleWait(contractorEngagementPage.showContractAuditTrialsLink, 10000, "Show contract Audit Trials link on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.showContractAuditTrialsLink, "Show contract Audit Trials link on Contractor Engagement page");
    action.isNotVisibleWait(contractorEngagementPage.auditHistoryNoItemsToShowMessage,20000, "Audit History No Items to Show message on Contractor Engagement page");
    browser.waitUntil(
        () =>  action.isVisibleWait(contractorEngagementPage.auditHistoryNoItemsToShowMessage, 0, "Audit History No Items to Show message on Contractor Engagement") === false,
        {
            timeout: 20000,
            timeoutMsg: 'expected no items message to disappear in 20s'
        }
    );
    browser.pause(5000)
    let actualAuditHistoryBody = action.getElementText(contractorEngagementPage.auditHistoryTableBody, "Audit History Table Body on Contractor Engagement");
    chai.expect(actualAuditHistoryBody).to.includes(expectedNaatiAccreditation);
})

When(/^I search and select contractor "(.*)"$/, function (contractor) {
    action.isVisibleWait(contractorEngagementPage.searchContractorInput,10000, "Search Contract Input on Contractor Engagement page");
    action.enterValue(contractorEngagementPage.searchContractorInput, contractor, "Search Contract Input on Contractor Engagement page");
    action.pressKeys("Tab");
    action.waitUntilLoadingIconDisappears();
    let contractorSearchResultElement = $(contractorEngagementPage.contractorSearchResultLocator.replace("<dynamic>", contractor));
    action.isVisibleWait(contractorSearchResultElement, 20000, "Contractor Search Result Elements on Contractor Engagement page");
    action.clickElement(contractorSearchResultElement, "Contractor Search Result Elements on Contractor Engagement page");
})

Then(/^the selected Bill Tos "(.*)" are displayed in separate rows, each for 1 Bill To$/, function (billTos) {
    let billTosList = billTos.split(",");
    let newBlockRulesOnProfileCount = contractorEngagementPage.newBlockRuleLinksOnProfile.length;
    for (let rule = 0; rule < newBlockRulesOnProfileCount; rule++) {
        let newRuleTextActual = action.getElementText(contractorEngagementPage.newBlockRuleLinksOnProfile[rule], "New Block Rule Link on Profile on Contractor Engagement page");
        chai.expect(newRuleTextActual).to.includes(billTosList[rule])
    }
})

Then(/^I click on any of the above created blocks and see that block contains the selected Bill To "(.*)" only$/, function (billTos) {
    let billTosList = billTos.split(",");
    for (let rule = 0; rule < billTosList.length; rule++) {
        action.clickElement(contractorEngagementPage.newBlockRuleLinksOnProfile[rule], "New Block Rule Link on Profile on Contractor Engagement page");
        action.isVisibleWait(contractorEngagementPage.billToValueTextBox, 20000, "Bill To value text box on Contractor Engagement page");
        let billToValueActual = action.getElementValue(contractorEngagementPage.billToValueTextBox, "Bill To value text box on Contractor Engagement page");
        action.isVisibleWait(contractorEngagementPage.contractorBlockingPopupCloseButton, 20000, "Close button in Contractor Blocking Popup on Contractor Engagement page");
        action.clickElement(contractorEngagementPage.contractorBlockingPopupCloseButton, "Close button in Contractor Blocking Popup on Contractor Engagement page");
        chai.expect(billToValueActual).to.equal(billTosList[rule]);
    }
})

When(/^the user selects at least 1 Bill To "(.*)"$/, function (billTos) {
    if (billTos !== null) {
        let billTosList = billTos.split(",");
        for (let option = 0; option < billTosList.length; option++) {
            let billToCode = billTosList[option].split("-")[0].trim();
            action.addValueAndPressReturnTab(contractorEngagementPage.billToSearchBox, billToCode, "Bill To Code on Contractor Engagement page");
            let billToCheckboxElement = $(contractorEngagementPage.billToDynamicCheckboxLocator.replace("<dynamic>", billTosList[option]));
            action.isVisibleWait(billToCheckboxElement, 10000, "Bill To Checkbox Element on Contractor Engagement page");
            action.clickElement(billToCheckboxElement, "Bill To Checkbox Element on Contractor Engagement page");
        }
    }
})

When(/^do not enter any value in Date Started field "(.*)"$/, function (severityLevel) {
    action.selectTextFromDropdown(contractorEngagementPage.billToSeverityDropdown, severityLevel, "Bill To Severity Dropdown from Contractor Engagement page");
    action.enterValue(contractorEngagementPage.startDateBillTo, "", "Start Date Bill To in Contractor Engagement page");
    action.enterValue(contractorEngagementPage.endDateBillTo, datetime.getRandomFutureDate(), "End Date Bill To on Contractor Engagement page");
    action.pressKeys("Tab");
})

Then(/^the error message "(.*)" is displayed below the Date Started field$/, function (errorMessage) {
    action.isVisibleWait(contractorEngagementPage.dateStartedErrorMessage, 10000, "Date Started error message on Contractor Engagement page");
    let errorMessageActual = action.getElementText(contractorEngagementPage.dateStartedErrorMessage, "Date Started error message on Contractor Engagement page");
    chai.expect(errorMessageActual).to.equal(errorMessage);
})

When(/^do not select any Job Type$/, function () {
    let jobTypesCheckboxesCount = contractorEngagementPage.jobTypesCheckBoxesCount;
    for (let checkBoxIndex = 0; checkBoxIndex < jobTypesCheckboxesCount; checkBoxIndex++) {
        let checkBoxElements = contractorEngagementPage.jobTypesCheckBoxes;
        action.isVisibleWait(checkBoxElements[checkBoxIndex], 10000,"Checkbox Elements on Contractor Engagement page");
        let checkBoxSelectedStatus = action.isSelectedWait(checkBoxElements[checkBoxIndex], 10000, "Checkbox Elements on Contractor Engagement page");
        if (checkBoxSelectedStatus === true) {
            action.clickElement(checkBoxElements[checkBoxIndex], "Checkbox Elements on Contractor Engagement page");
        }
    }
})

Then(/^the error message "(.*)" is displayed below the Job Types$/, function (errorMessage) {
    action.isVisibleWait(contractorEngagementPage.jobTypesErrorMessage, 10000, "Job Types Error Message on Contractor Engagement page");
    let errorMessageActual = action.getElementText(contractorEngagementPage.jobTypesErrorMessage, "Job Types Error Message on Contractor Engagement page");
    chai.expect(errorMessageActual).to.equal(errorMessage);
})

When(/^the Admin can make changes "(.*)"$/, function (severityLevel) {
    action.selectTextFromDropdown(contractorEngagementPage.billToSeverityDropdown, severityLevel, "Bill To Severity dropdown on Contractor Engagement page");
    action.enterValue(contractorEngagementPage.startDateBillTo, datetime.getShortNoticeDate(), "Start Date Bill To on Contractor Engagement page");
    action.enterValue(contractorEngagementPage.endDateBillTo, datetime.getRandomFutureDate(), "End Date Bill To on Contractor Engagement page");
    action.pressKeys("Tab");
})

When(/^click on Cancel icon$/, function () {
    action.isVisibleWait(contractorEngagementPage.contractorBlockingPopupCloseButton, 10000, "Close button in contractor blocking Popup on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.contractorBlockingPopupCloseButton, "Close button in contractor blocking Popup on Contractor Engagement page");
})

Then(/^the changes made "(.*)" should not be displayed as we clicked on Cancel button$/, function (expectedSeverity) {
    action.isVisibleWait(contractorEngagementPage.billToSeverityDropdown, 10000, "Bill to Severity dropdown on Contractor Engagement page");
    let severityLevelActual = action.getElementText(contractorEngagementPage.severitySelectedOption, "Severity Selected Option from Contractor Engagement page");
    chai.expect(severityLevelActual).to.not.equal(expectedSeverity);
})

When(/^the block is created with expiry date "(.*)", "(.*)" prior to the current date$/, function (startDate, endDate) {
    action.isVisibleWait(contractorEngagementPage.startDateBillTo,10000, "Start Date Bill To on Contractor Engagement page")
    action.enterValue(contractorEngagementPage.startDateBillTo, startDate, "Start Date Bill To on Contractor Engagement page");
    action.enterValue(contractorEngagementPage.endDateBillTo, endDate, "End Date Bill To on Contractor Engagement page");
    action.pressKeys("Tab");
})

When(/^I click on Show Expired toggle$/, function () {
    action.isVisibleWait(contractorEngagementPage.showExpiredBlocksToggleCheck, 10000, "Show Expired Blocks Toggle Check on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.showExpiredBlocksToggleCheck, "Show Expired Blocks Toggle Check on Contractor Engagement page");
})

When(/^I click on save on blocking popup$/, function () {
    action.isVisibleWait(contractorEngagementPage.saveButtonOnBlockingPopup, 10000, "Save Button on Blocking Popup on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.saveButtonOnBlockingPopup, "Save Button on Blocking Popup on Contractor Engagement page");
})

When(/^I click on Manage basic details link$/, function () {
    action.isVisibleWait(contractorEngagementPage.manageBasicDetails, 10000, "Manage Basic Details on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.manageBasicDetails, "Manage Basic Details on Contractor Engagement page");
})

When(/^I see the My Details popup is displayed$/, function () {
    action.isVisibleWait(contractorEngagementPage.myDetailsPopup, 10000,"My Details popup on Contractor Engagement page");
})

When(/^I clear the Contractor ABN and Company Name fields$/, function () {
    action.isVisibleWait(contractorEngagementPage.contractorABNField, 10000, "Contractor ABN field on Contractor Engagement page");
    action.isVisibleWait(contractorEngagementPage.companyNameField, 10000, "Company Name field on Contractor Engagement page");
    action.clearValue(contractorEngagementPage.contractorABNField, "Contractor ABN field on Contractor Engagement page");
    action.clearValue(contractorEngagementPage.companyNameField, "Company Name field on Contractor Engagement page");
})

When(/^I enter a valid "(.*)" without spaces$/, function (abnNumber) {
    action.enterValue(contractorEngagementPage.contractorABNField, abnNumber, "Contractor ABN field on Contractor Engagement page");
    action.pressKeys("Tab");
    let actualABNNumber = action.getElementValue(contractorEngagementPage.contractorABNField, "Contractor ABN field on Contractor Engagement page");
    chai.expect(actualABNNumber).to.equal(abnNumber);
})

When(/^I click on Check button$/, function () {
    action.isClickableWait(contractorEngagementPage.checkButton, 10000, "Check button on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.checkButton, "Check button on Contractor Engagement page");
})

Then(/^a thumbs up icon will appear next to the Check button with hover over message ABN is valid$/, function () {
    let thumpsUpIconDisplaysStatus = action.isVisibleWait(contractorEngagementPage.thumpsUpIcon, 10000, "ThumpsUp icon on Contractor Engagement page");
    chai.expect(thumpsUpIconDisplaysStatus).to.be.true;
    action.moveToElement(contractorEngagementPage.thumpsUpIcon, "ThumpsUp icon on Contractor Engagement page");
    let abnValidTextStatus = action.isExistingWait(contractorEngagementPage.thumpsUpToolTipText, 1000, "ThumpsUp Tool tip text on Contractor Engagement page")
    chai.expect(abnValidTextStatus).to.be.true;
})

When(/^I enter invalid "(.*)" without spaces$/, function (invalidABNNumber) {
    action.enterValue(contractorEngagementPage.contractorABNField, invalidABNNumber, "Contractor ABN filed on Contractor Engagement page");
    action.pressKeys("Tab");
    let actualABNNumber = action.getElementValue(contractorEngagementPage.contractorABNField, "Contractor ABN filed on Contractor Engagement page");
    chai.expect(actualABNNumber).to.equal(invalidABNNumber);
})

Then(/^a thumbs down icon will appear next to the Check button with hover over error message No details found for ABN "(.*)"$/, function (enteredABNNumber) {
    let thumpsDownIconDisplaysStatus = action.isVisibleWait(contractorEngagementPage.thumpsDownIcon, 10000, "ThumpsDown icon on Contractor Engagement page");
    chai.expect(thumpsDownIconDisplaysStatus).to.be.true;
    action.moveToElement(contractorEngagementPage.thumpsDownIcon, "ThumpsDown icon on Contractor Engagement page");
    let inValidToolTipText = $(contractorEngagementPage.thumpsDownToolTipText.replace("<dynamic>", enteredABNNumber));
    let abnInValidTextStatus = action.isExistingWait(inValidToolTipText, 1000, "Invalid Tooltip text on Contractor Engagement page")
    chai.expect(abnInValidTextStatus).to.be.true;
})

When(/^I enter valid "(.*)" with spaces$/, function (abnNumber) {
    action.enterValue(contractorEngagementPage.contractorABNField, abnNumber, "Contractor ABN field on Contractor Engagement page");
    action.pressKeys("Tab");
    let actualABNNumber = action.getElementValue(contractorEngagementPage.contractorABNField, "Contractor ABN field on Contractor Engagement page");
    chai.expect(actualABNNumber).to.equal(abnNumber);
})

When(/^I see My Details popup is closed$/, function () {
    let status = action.isClickableWait(contractorEngagementPage.manageBasicDetails, 10000, "Manage Basic Details on Contractor Engagement page");
    chai.expect(status).to.be.true;
})

Then(/^I see the ABN value is saved correctly and equals to "(.*)"$/, function (abnNumber) {
    let actualABNNumber = action.getElementValue(contractorEngagementPage.contractorABNField, "Contractor ABN field on Contractor Engagement page");
    chai.expect(actualABNNumber).to.equal(abnNumber);
})

Then(/^I see the ABN value is saved without spaces correctly and equals to "(.*)"$/, function (abnNumber) {
    let actualABNNumber = action.getElementValue(contractorEngagementPage.contractorABNField, "Contractor ABN field on Contractor Engagement page");
    chai.expect(actualABNNumber).to.equal(abnNumber);
})

Then(/^a thumbs down icon will appear next to the Check button with hover over error message No details found for ABN$/, function (){
    let thumpsDownIconDisplaysStatus = action.isVisibleWait(contractorEngagementPage.thumpsDownIcon, 10000, "Thumps Down icon on Contractor Engagement page");
    chai.expect(thumpsDownIconDisplaysStatus).to.be.true;
    action.moveToElement(contractorEngagementPage.thumpsDownIcon, "Thumps Down icon on Contractor Engagement page");
    let abnValidTextStatus = action.isExistingWait(contractorEngagementPage.thumpsDownToolTipForNoABN, 1000, "ThumpsDown Tool Tip for No ABN on Contractor Engagement page")
    chai.expect(abnValidTextStatus).to.be.true;
})

When(/^I click on Save contractor button$/, function () {
    action.isClickableWait(contractorEngagementPage.saveContractorButton, "Save Contractor Button on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.saveContractorButton, "Save Contractor Button on Contractor Engagement page");
})

When(/^a error text message is displayed below the ABN filed No details found for ABN "(.*)"$/, function (enteredABNNumber){
    let errorMessageDisplayStatus = action.isVisibleWait(contractorEngagementPage.thumpsDownIcon, 10000, "Thumps Down Icon on Contractor Engagement page");
    chai.expect(errorMessageDisplayStatus).to.be.true;
})

Then(/^they will be navigated to the Contractor’s profile$/, function () {
    action.navigateToLatestWindow();
    action.isVisibleWait(contractorEngagementPage.interpreterDetailsHeader,10000, "Interpreter Details Header on Contractor Engagement page");
    let pageTitleActual = action.getPageTitle().trim();
    chai.expect(pageTitleActual).to.equal("PreviewContractorProfile");
})

Then(/^the contractor is Activated for ODTI$/, function () {
    let contractorActivatedStatus = action.isSelectedWait(contractorEngagementPage.ODTIAvailabilityActivateToggleInput,3000,"ODTI Availability Activate toggle input in Contractor Engagement page");
    if (contractorActivatedStatus === false) {
        action.clickElement(contractorEngagementPage.ODTIAvailabilityActivateToggleLabel,"ODTI Availability Activate toggle label in Contractor Engagement page");
        browser.waitUntil(() => action.isSelectedWait(contractorEngagementPage.ODTIAvailabilityActivateToggleInput,0,"ODTI Availability Activate toggle input in Contractor Engagement page") === true, {
            timeout: 5000,
            timeoutMsg: 'contractor toggle not activated in 5s',
        })
    }
})

Then(/^the Activate toggle is off for ODTI$/, function () {
    let contractorActivatedStatus = action.isSelectedWait(contractorEngagementPage.ODTIAvailabilityActivateToggleInput,3000,"ODTI Availability Activate toggle input in Contractor Engagement page");
    if (contractorActivatedStatus === true) {
        action.clickElement(contractorEngagementPage.ODTIAvailabilityActivateToggleLabel,"ODTI Availability Activate toggle label in Contractor Engagement page");
        browser.waitUntil(() => action.isSelectedWait(contractorEngagementPage.ODTIAvailabilityActivateToggleInput,0,"ODTI Availability Activate toggle input in Contractor Engagement page") === false, {
            timeout: 5000,
            timeoutMsg: 'contractor toggle not activated in 5s',
        })
    }
})

Then(/^a toggle switch should be displayed on the top-right corner of the On-demand Telephone Interpreting Availability section$/, function () {
    let contractorActivateToggleSwitchDisplayStatus = action.isVisibleWait(contractorEngagementPage.ODTIAvailabilityActivateToggleLabel,10000,"ODTI Availability Activate toggle in Contractor Engagement page");
    chai.expect(contractorActivateToggleSwitchDisplayStatus).to.be.true;
})

Then(/^a toggle switch should NOT be displayed on the top-right corner of the On-demand Telephone Interpreting Availability section$/, function () {
    let contractorActivateToggleSwitchDisplayStatus = action.isVisibleWait(contractorEngagementPage.ODTIAvailabilityActivateToggleLabel,10000,"ODTI Availability Activate toggle in Contractor Engagement page");
    chai.expect(contractorActivateToggleSwitchDisplayStatus).to.be.false;
})

When(/^I select clearance type "(.*)"$/, function (clearanceType) {
    action.isVisibleWait(contractorEngagementPage.clearanceTypeDropdown, 10000, "Clearance Type dropdown on Contractor Engagement page");
    action.selectTextFromDropdown(contractorEngagementPage.clearanceTypeDropdown, clearanceType, "Clearance Type dropdown on Contractor Engagement page");
})

When(/^I enter clearance card number "(.*)"$/, function (cardNumber) {
    action.isVisibleWait(contractorEngagementPage.cardNumberInput, 10000, "Card number text box in Contractor Engagement page");
    action.enterValue(contractorEngagementPage.cardNumberInput, cardNumber, "Card number text box in Contractor Engagement page");
})

When(/^I select clearance state of issue "(.*)"$/, function (stateOfIssue) {
    action.isVisibleWait(contractorEngagementPage.clearanceStateOfIssueDropdown, 10000, "Clearance State of issue dropdown on Contractor Engagement page");
    action.selectTextFromDropdown(contractorEngagementPage.clearanceStateOfIssueDropdown, stateOfIssue, "Clearance State of issue dropdown on Contractor Engagement page");
})

When(/^I enter clearance Document Received Date and Date of expiry$/, function () {
    action.enterValue(contractorEngagementPage.documentReceivedDate, datetime.getCurrentDate(), "Document received date text box in Create Contractor page");
    action.enterValue(contractorEngagementPage.documentExpiryDate, datetime.getRandomFutureDate(), "Document expiry date text box in Create Contractor page");
    action.pressKeys("Tab");
})

When(/^I upload proof of clearance file$/, function () {
    action.uploadFile(contractorEngagementPage.clearanceFileControl, "./test/data/ContractDocument.docx", "Proof of Clearance File Control on Contractor Engagement page");
    action.isVisibleWait(contractorEngagementPage.uploadedFileDocumentExtensionText, 20000, "Proof of Clearance File document extension text on Contractor Engagement page");
})

When(/^I click save clearance button$/, function () {
    action.isVisibleWait(contractorEngagementPage.saveClearanceButton, 20000, "Save Clearance Button on Contractor Engagement page");
    action.isClickableWait(contractorEngagementPage.saveClearanceButton, 20000, "Save Clearance Button on Contractor Engagement page");
    action.clickElement(contractorEngagementPage.saveClearanceButton, "Save Clearance Button on Contractor Engagement page");
    action.isNotVisibleWait(contractorEngagementPage.saveClearanceButton, 10000, "Save Clearance Button on Contractor Engagement page");
});

Then(/^I verify NDIS Screening clearance is added$/, function () {
    let ndisScreeningClearanceLabelDisplayStatus = action.isVisibleWait(contractorEngagementPage.ndisScreeningClearanceLabel, 10000, "NDIS Screening clearance on Contractor Engagement page");
    chai.expect(ndisScreeningClearanceLabelDisplayStatus).to.be.true;
});

When(/^I remove NDIS Screening clearance$/, function () {
    action.waitUntilLoadingIconDisappears();
    let ndisScreeningToggleDisplayStatus = action.isVisibleWait(contractorEngagementPage.ndisScreeningToggle, 10000, "NDIS Screening toggle on Contractor Engagement page");
    if (ndisScreeningToggleDisplayStatus === true) {
        action.clickElement(contractorEngagementPage.ndisScreeningToggle, "NDIS Screening toggle on Contractor Engagement page");
        action.isVisibleWait(contractorEngagementPage.ndisScreeningRemoveLink, 10000, "NDIS Screening remove link on Contractor Engagement page");
        action.clickElement(contractorEngagementPage.ndisScreeningRemoveLink, "NDIS Screening remove link on Contractor Engagement page");
        action.isNotVisibleWait(contractorEngagementPage.ndisScreeningRemoveLink, 10000, "NDIS Screening remove link on Contractor Engagement page");
    }
});

Then(/^the user just can view the clearances on Contract Profile page as expected$/, function () {
    let clearanceSectionDisplayStatus = action.isVisibleWait(contractorEngagementPage.clearanceSection, 10000, "Add Clearance Link on Contractor Engagement page");
    chai.expect(clearanceSectionDisplayStatus).to.be.true;
    let addClearanceLinkDisplayStatus = action.isVisibleWait(contractorEngagementPage.addClearanceLink, 0, "Add Clearance Link on Contractor Engagement page");
    chai.expect(addClearanceLinkDisplayStatus).to.be.false;
})