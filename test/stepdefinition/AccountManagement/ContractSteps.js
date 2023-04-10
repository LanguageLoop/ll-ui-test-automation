When(/^I search for contract "(.*)"$/, function(title){
    browser.pause(2000)
    action.enterValueAndPressReturn(accountManagementPage.searchContractInput, title)
    browser.pause(2000)
})

When(/^I click the first contract from search list$/, function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.firstContract)
    browser.pause(2000)
})
When(/^I click add contract link$/, function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.addContractLink)
    browser.pause(2000)
})

When(/^I enter contract title "(.*)"$/, function(name){
    //make the contract title unique by appending a random number
    name = name + (Math.floor(Math.random() * 1000000) + 1).toString()
    GlobalData.CONTRACT_TITLE= name
    action.isVisibleWait(contractManagementPage.contractTitleInput,10000);
    action.enterValue(contractManagementPage.contractTitleInput, name)
})

When(/^I enter contract payment terms "(.*)"$/, function(terms){
    action.enterValue(contractManagementPage.paymentTermsInput, terms)
})

When(/^I enter contract number "(.*)"$/, function(number){
    action.enterValue(contractManagementPage.contractNumberInput, number)
})

When(/^I enter contract commencement date "(.*)"$/, function(dateStr){
    var temp_date=dateStr
    if(dateStr=="today")
    {
    temp_date=new Date()
    temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
    }
    action.enterValueAndPressReturn(contractManagementPage.contractCommencementDateInput, temp_date)
    browser.pause(2000)
})

When(/^I enter contract completion date "(.*)"$/, function(dateStr){
    action.enterValueAndPressReturn(contractManagementPage.contractCompletionDateInput, dateStr)
    browser.pause(2000)
})

When(/^I upload contract file$/, function(){
    browser.pause(2000)
    action.uploadFile(contractManagementPage.contractFileUploadControl,"./test/data/ContractDocument.docx")
    browser.pause(2000)
})

When(/^I click save contract button$/, function(){
    action.isVisibleWait(contractManagementPage.saveContractButton,10000)
    action.clickElement(contractManagementPage.saveContractButton)
    browser.pause(4000)
})

When(/^I click copy contract button$/, function(){
    action.isVisibleWait(contractManagementPage.copyContractButton,10000)
    action.clickElement(contractManagementPage.copyContractButton)
    browser.pause(2000)
})

When(/^I click add minimum naati level$/, function(){
    browser.pause(2000)
    action.clickElement(contractManagementPage.addNAATIMinimumLevelLink)
    browser.pause(2000)
})

When(/^I click add contract rates$/, function(){
    action.isVisibleWait(contractManagementPage.addContractRateButton,10000);
    action.clickElement(contractManagementPage.addContractRateButton);
})

When(/^I enter contract rate details "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, function(name,businesshour,language,contractminperiod,contractminrate,contractongoing,contractorminperiod,contractorminrate,contractorongoing){
    browser.pause(2000)
    name = name + (Math.floor(Math.random() * 100000) + 1).toString()
    GlobalData.CONTRACT_NAME= name
    action.enterValue(contractManagementPage.contractNameInput, name)
    action.selectTextFromDropdown(contractManagementPage.contractBusinessHour,businesshour)
   // action.selectTextFromDropdown(contractManagementPage.contractLanguageDropdown, language)
   action.enterValueAndPressReturn(contractManagementPage.contractLanguageDropdown, language)

    action.clickElement(contractManagementPage.scheduleSegment)

    //contract section
    action.enterValue(contractManagementPage.minimumPeriodContract, contractminperiod)
    action.enterValue(contractManagementPage.minimumRateContract, contractminrate)
    action.enterValue(contractManagementPage.ongoingPeriodContract, contractongoing)

    //contractor section
    action.enterValue(contractManagementPage.minimumPeriodContractor, contractorminperiod)
    action.enterValue(contractManagementPage.minimumRateContractor, contractorminrate)
    action.enterValue(contractManagementPage.ongoingPeriodContractor, contractorongoing)

    //click save button
    action.clickElement(contractManagementPage.saveContractRateButton)
    browser.pause(2000)
})

When(/^I click add assignment type$/, function(){
    browser.pause(2000)
    action.clickElement(contractManagementPage.addAssignmentTypeLink)
})

When(/^I enter assignment type label "(.*)"$/, function(label){
    label = label + (Math.floor(Math.random() * 100000) + 1).toString()
    GlobalData.ASSIGNMENT_LABEL= label
    browser.pause(2000)
    action.enterValue(contractManagementPage.assignmentLabelInput,label)
})

When(/^I click add assignment button$/, function(){
    browser.pause(2000)
    action.clickElement(contractManagementPage.addAssignmentTypeButton)
})

Then(/^I verify assignment type is added$/, function(){
    browser.pause(2000)
    var tlength= contractManagementPage.assignmentTypeTableRows.length
    var elt = contractManagementPage.assignmentTypeTableRows[tlength-3].$$('td')[0].$('a').getText()
    chai.expect(elt==GlobalData.ASSIGNMENT_LABEL).to.be.true

})

Then(/^I delete assignment type$/, function(){
    var tlength= contractManagementPage.assignmentTypeTableRows.length
    var dlength= contractManagementPage.disableLink.length

    contractManagementPage.assignmentTypeTableRows[tlength-3].$('label').click()
    browser.pause(3000)
    contractManagementPage.disableLink[dlength-1].click()
   // contractManagementPage.assignmentTypeTableRows[tlength-3].$('//a[text()="Disable"]').
    browser.pause(3000)
  //  browser.positionClick(0)

})

Then(/^I verify contract rate is added$/, function(){
    browser.pause(2000)
  // action.clickElement(contractManagementPage.prebookedVideoContractRates)
    var elt = $('//*[contains(text(),"Contract Rates Schedules")]/../../..//*[contains(text(),"Video")]/../../..//table').$('//a[text()="'+GlobalData.CONTRACT_NAME+'"]')
})

Then(/^I verify the minimum naati is added "(.*)"$/, function(naati){
    //click on the last added item from the override naati section
    browser.refresh()
    browser.pause(3000)
    var naatiLength= contractManagementPage.naatiMinimumLevelItems.length
    action.clickElement(contractManagementPage.naatiMinimumLevelItems[naatiLength-1])
     browser.pause(3000)
    // verify if the added naati item is present
    var tlength= contractManagementPage.naatiMinimumLevelTables.length
    var temp =contractManagementPage.naatiMinimumLevelTables[tlength-1].$('//a').getText()

    chai.expect(naati.includes(temp)).to.be.true
    browser.pause(3000)
})

Then(/^I delete added miniumum naati$/, function(){
    browser.pause(2000)
   
    var tlength= contractManagementPage.naatiMinimumLevelTables.length
   // action.clickElement(contractManagementPage.naatiMinimumLevelTables[tlength-1].$('//div[contains(@id,"wtcontAction")]'))
   // contractManagementPage.naatiMinimumLevelTables[tlength-1].$$('//tbody//td')[1].click()
    browser.pause(3000)
    contractManagementPage.naatiMinimumLevelTables[1].$$('//tbody//tr')[1].$$('td')[2].click()
    contractManagementPage.naatiMinimumLevelTables[1].$$('//tbody//tr')[1].$$('td')[2].moveTo()
   // contractManagementPage.naatiMinimumLevelTables[tlength-1].$$('//tbody//td')[2].$('//div[contains(@id,"wtcontAction")]').doubleClick()
    browser.pause(5000)
    action.clickElement(contractManagementPage.naatiMinimumLevelTables[1].$('tbody').$('//*[contains(text(),"Remove")]'))
    browser.pause(2000)
   
})

Then(/^I verify contract is created$/, function(){
    chai.expect(contractManagementPage.contractHeadingText.getText().toString() == GlobalData.CONTRACT_TITLE.toString()).to.be.true
})

Then(/^I verify duplicate contract is created "(.*)"$/, function(title){
    browser.pause(3000)
    var current_contract=GlobalData.CONTRACT_TITLE
    //get the number at the end of the title. this number is added randomly during creation to keep it unique
    var res = current_contract.replace(/\D/g, "");
    //add one to the number. because when you duplicate a contract, the title is appended by number and 1 is added to it.
    var temp_number= (parseInt(res)+1)
    console.log("Expected :"+ title+(parseInt(res)+1))
    action.waitUntilLoadingIconDisappears();
    action.isExistingWait(contractManagementPage.contractHeadingText,10000);
    action.isVisibleWait(contractManagementPage.contractHeadingText,10000);
    console.log("Actual :"+contractManagementPage.contractHeadingText.getText().toString())
    chai.expect(contractManagementPage.contractHeadingText.getText().toString() == title+(parseInt(res)+1)).to.be.true
})

Then(/^they will be navigated to the Contract page$/, function () {
    action.navigateToLatestWindow();
    action.isVisibleWait(contractManagementPage.contractHeadingText,10000);
    let pageTitleActual = action.getPageTitle().trim();
    chai.expect(pageTitleActual).to.equal("Contract Details");
})

Given(/^the Manage Rate popup appears$/, function () {
    let manageRatePopupDisplayStatus = action.isVisibleWait(contractManagementPage.manageRatePopup, 10000);
    chai.expect(manageRatePopupDisplayStatus).to.be.true;
})

When(/^they select "(.*)" from Service Language dropdown$/, function (serviceLanguage) {
    action.isVisibleWait(contractManagementPage.manageRateServiceLanguageDropdownLink, 10000);
    action.enterValueAndPressReturn(contractManagementPage.manageRateServiceLanguageDropdownLink, serviceLanguage);
})

Then(/^the new ODTI fields will display using the existing layout under the Contract Rates "(.*)" and Contractor Rates "(.*)" sections$/, function (contractRatesFields, contractorRatesFields) {
    let contractRatesFieldsList = contractRatesFields.split(",");
    for (let contractIndex = 0; contractIndex < contractRatesFieldsList.length; contractIndex++) {
        let contractRatesFieldElement = $(contractManagementPage.contractRatesDynamicFieldLocator.replace("<dynamicFieldName>", contractRatesFieldsList[contractIndex]));
        let contractRatesFieldDisplayStatus = action.isVisibleWait(contractRatesFieldElement, 10000);
        chai.expect(contractRatesFieldDisplayStatus).to.be.true;
    }
    let contractorRatesFieldsList = contractorRatesFields.split(",");
    for (let contractorIndex = 0; contractorIndex < contractorRatesFieldsList.length; contractorIndex++) {
        let contractorRatesFieldElement = $(contractManagementPage.contractorRatesDynamicFieldLocator.replace("<dynamicFieldName>", contractorRatesFieldsList[contractorIndex]));
        let contractorRatesFieldDisplayStatus = action.isVisibleWait(contractorRatesFieldElement, 10000);
        chai.expect(contractorRatesFieldDisplayStatus).to.be.true;
    }
})

Then(/^the following fields are hidden "(.*)"$/, function (fieldLabels) {
    let fieldLabelsList = fieldLabels.split(",");
    for (let index = 0; index < fieldLabelsList.length; index++) {
        let fieldElement = $(contractManagementPage.fieldNameCommonLocator.replace("<dynamicFieldName>", fieldLabelsList[index]));
        let fieldDisplayStatus = action.isVisibleWait(fieldElement, 1000);
        chai.expect(fieldDisplayStatus).to.be.false;
    }
})

Then(/^the Schedule Segment section is hidden$/, function () {
    let scheduleSegmentSectionDisplayStatus = action.isVisibleWait(contractManagementPage.scheduleSegmentSection, 1000);
    chai.expect(scheduleSegmentSectionDisplayStatus).to.be.false;
})

Then(/^the user can add rates "(.*)" for Client contract rates "(.*)"$/, function (contractRatesValues, contractRatesFields) {
    let contractRatesFieldsList = contractRatesFields.split(",");
    let contractRatesValuesList = contractRatesValues.split(",");
    for (let contractIndex = 0; contractIndex < contractRatesFieldsList.length; contractIndex++) {
        let contractRatesFieldElement = $(contractManagementPage.contractRatesDynamicFieldLocator.replace("<dynamicFieldName>", contractRatesFieldsList[contractIndex]));
        action.enterValue(contractRatesFieldElement, contractRatesValuesList[contractIndex]);
    }
})

Then(/^the user can add rates "(.*)" for Client contractor rates "(.*)"$/, function (contractorRatesValues, contractorRatesFields) {
    let contractorRatesFieldsList = contractorRatesFields.split(",");
    let contractorRatesValuesList = contractorRatesValues.split(",");
    for (let contractorIndex = 0; contractorIndex < contractorRatesFieldsList.length; contractorIndex++) {
        let contractorRatesFieldElement = $(contractManagementPage.contractorRatesDynamicFieldLocator.replace("<dynamicFieldName>", contractorRatesFieldsList[contractorIndex]));
        action.enterValue(contractorRatesFieldElement, contractorRatesValuesList[contractorIndex]);
    }
})

Then(/^the user can add NAATI Accreditation Level "(.*)"$/, function (NAATILevel) {
    action.isVisibleWait(contractManagementPage.manageRateNAATILevelDropdown,10000);
    action.selectTextFromDropdown(contractManagementPage.manageRateNAATILevelDropdown,NAATILevel);
})

Then(/^the user can add Hour Type "(.*)"$/, function (hourType) {
    action.isVisibleWait(contractManagementPage.manageRateHourTypeDropdown,10000);
    action.selectTextFromDropdown(contractManagementPage.manageRateHourTypeDropdown,hourType);
})

When(/^the user can add Name "(.*)"$/, function (name) {
    action.isVisibleWait(contractManagementPage.manageRateNameTextBox, 10000);
    name = name + (Math.floor(Math.random() * 100000) + 1).toString()
    GlobalData.CONTRACT_RATE_NAME = name;
    action.enterValue(contractManagementPage.manageRateNameTextBox, name);
})

When(/^they click the Save Rate button$/, function () {
    action.isVisibleWait(contractManagementPage.saveContractRateButton,10000);
    action.clickElement(contractManagementPage.saveContractRateButton);
})

Then(/^the contract rate data will save$/, function () {
    action.isNotVisibleWait(contractManagementPage.manageRatePopup, 10000);
    let manageRatePopupDisplayStatus = action.isVisibleWait(contractManagementPage.manageRatePopup, 10000);
    chai.expect(manageRatePopupDisplayStatus).to.be.false;
})

Then(/^they will return to the Contract Details page$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.includes("Contract Details");
})

Then(/^the saved ODTI Contract Rates will be displayed in the Contract Rates Schedule table "(.*)"$/, function (serviceLanguageAccordion) {
    let serviceLanguageAccordionElement = $(contractManagementPage.savedServiceLanguageAccordionDynamicLocator.replace("<dynamicServiceLanguageAccordion>",serviceLanguageAccordion));
    action.isVisibleWait(serviceLanguageAccordionElement,10000);
    action.clickElement(serviceLanguageAccordionElement);
    let savedContractRateElement = $(contractManagementPage.savedContractRateInTableDynamicLocator.replace("<dynamicContractRateName>",GlobalData.CONTRACT_RATE_NAME));
    let savedContractRateDisplayStatus = action.isVisibleWait(savedContractRateElement,10000);
    chai.expect(savedContractRateDisplayStatus).to.be.true;
})

Then(/^the inline error message will be displayed at the field: eg Required field!$/, function () {
    let nameRequiredFieldErrorDisplayStatus = action.isVisibleWait(contractManagementPage.requiredFieldErrorMessageUnderNameField,10000);
    chai.expect(nameRequiredFieldErrorDisplayStatus).to.be.true;
})

Then(/^the user will remain on the Manage Rate popup$/, function () {
    let manageRatePopupDisplayStatus = action.isVisibleWait(contractManagementPage.manageRatePopup, 10000);
    chai.expect(manageRatePopupDisplayStatus).to.be.true;
})

Then(/^the inline error message will be displayed at the field: eg Please enter whole minutes with no decimals.$/, function () {
    let wholeMinNoDecimalsErrorDisplayStatus = action.isVisibleWait(contractManagementPage.wholeMinutesWithNoDecimalsErrorMessage,10000);
    chai.expect(wholeMinNoDecimalsErrorDisplayStatus).to.be.true;
})

When(/^has expanded Service Language Accordion "(.*)"$/, function (serviceLanguageAccordion) {
    let serviceLanguageAccordionElement = $(contractManagementPage.savedServiceLanguageAccordionDynamicLocator.replace("<dynamicServiceLanguageAccordion>",serviceLanguageAccordion));
    action.isVisibleWait(serviceLanguageAccordionElement,10000);
    action.clickElement(serviceLanguageAccordionElement);
})

Then(/^the MIN PERIOD column under the Contract Rates Schedule table should display the corresponding Minimum Period 1 mins value "(.*)" from Contract Rate$/, function (minPeriod1ValueExpected) {
    action.isVisibleWait(contractManagementPage.minPeriodValueInTable,10000);
    browser.waitUntil(
        () => action.getElementText(contractManagementPage.minPeriodValueInTable) !== "",
        {
            timeout: 20000,
            timeoutMsg: 'Expected Contract Rates Schedule table should display the corresponding Minimum Period 1 value',
            interval: 1000
        }
    );
    let minPeriod1ValueActual = action.getElementText(contractManagementPage.minPeriodValueInTable);
    chai.expect(minPeriod1ValueActual).to.equal(minPeriod1ValueExpected);
})

Then(/^display the minutes value as for example 10 mins no decimal places$/, function () {
    action.isVisibleWait(contractManagementPage.minPeriodValueInTable,10000);
    let minPeriod1ValueActual = action.getElementText(contractManagementPage.minPeriodValueInTable);
    chai.expect(minPeriod1ValueActual).to.not.includes(".")
})

When(/^they click Add preference button$/, function () {
    action.isVisibleWait(contractManagementPage.contractAddPreferenceLink, 10000);
    action.clickElement(contractManagementPage.contractAddPreferenceLink);
})

When(/^click the Preference Type dropdown$/, function () {
    action.isVisibleWait(contractManagementPage.contractPreferenceTypeDropdown, 10000);
    action.clickElement(contractManagementPage.contractPreferenceTypeDropdown);
})

Then(/^they will see an ODTI gender preference option with the label "(.*)"$/, function (optionLabel) {
    let preferenceTypeDropdownOptionElement = $(contractManagementPage.contractPreferenceTypeDropdownOptionLocator.replace("<dynamicOption>", optionLabel));
    let ODTIGenderPreferenceOptionDisplayStatus = action.isVisibleWait(preferenceTypeDropdownOptionElement, 10000);
    chai.expect(ODTIGenderPreferenceOptionDisplayStatus).to.be.true;
})

Then(/^this option "(.*)" will appear under the Gender option$/, function (optionLabel) {
    let preferenceTypeDropdownOptionSiblingElement = $(contractManagementPage.contractPreferenceTypeDropdownOptionSiblingLocator.replace("<dynamicOption1>", "Gender").replace("<dynamicOption2>", optionLabel));
    let optionUnderGenderOptionExistStatus = action.isExistingWait(preferenceTypeDropdownOptionSiblingElement, 10000);
    chai.expect(optionUnderGenderOptionExistStatus).to.be.true;
})

Then(/^they can select this option "(.*)"$/, function (optionLabel) {
    action.selectTextFromDropdown(contractManagementPage.contractPreferenceTypeDropdown, optionLabel);
    let preferenceTypeDropdownOptionElement = $(contractManagementPage.contractPreferenceTypeDropdownOptionLocator.replace("<dynamicOption>", optionLabel));
    let optionSelectedStatus = action.isSelectedWait(preferenceTypeDropdownOptionElement, 10000);
    chai.expect(optionSelectedStatus).to.be.true;
})

When(/^they select preference option "(.*)"$/, function (option) {
    action.isVisibleWait(contractManagementPage.contractPreferenceDropdown,20000);
    action.selectTextFromDropdown(contractManagementPage.contractPreferenceDropdown, option);
})

When(/^they remove added preference type option "(.*)"$/, function (optionLabel) {
    let preferenceTypeRemoveIconElement = $(contractManagementPage.contractPreferenceTypeRemoveIconLocator.replace("<dynamicOption>", optionLabel));
    action.isVisibleWait(preferenceTypeRemoveIconElement,20000);
    action.clickElement(preferenceTypeRemoveIconElement);
    action.isNotVisibleWait(preferenceTypeRemoveIconElement,20000);
})

When(/^they close the Add Preference popup$/, function () {
    action.isVisibleWait(contractManagementPage.contractAddPreferencePopupCloseButton, 10000);
    action.clickElement(contractManagementPage.contractAddPreferencePopupCloseButton);
})

When(/^they click save Contract Preference button/, function () {
    action.isVisibleWait(contractManagementPage.saveContractPreferenceButton, 10000);
    action.clickElement(contractManagementPage.saveContractPreferenceButton);
})