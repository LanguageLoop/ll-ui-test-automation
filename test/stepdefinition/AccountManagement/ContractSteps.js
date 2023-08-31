When(/^I search for contract "(.*)"$/, function(title){
    browser.pause(2000)
    action.enterValueAndPressReturn(accountManagementPage.searchContractInput, title,"Search Contract text box in Contract page")
    browser.pause(2000)
})

When(/^I click the first contract from search list$/, function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.firstContract,"First contract from search results in Contract page")
    browser.pause(2000)
})
When(/^I click add contract link$/, function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.addContractLink,"Add contract link in Contract page")
    browser.pause(2000)
})

When(/^I enter contract title "(.*)"$/, function(name){
    //make the contract title unique by appending a random number
    name = name + (Math.floor(Math.random() * 1000000) + 1).toString()
    GlobalData.CONTRACT_TITLE= name
    action.isVisibleWait(contractManagementPage.contractTitleInput,10000,"Contact title text box in Contract page");
    action.enterValue(contractManagementPage.contractTitleInput, name,"Contact title text box in Contract page")
})

When(/^I enter contract payment terms "(.*)"$/, function(terms){
    action.enterValue(contractManagementPage.paymentTermsInput, terms,"Payment terms text box in Contract page")
})

When(/^I enter contract number "(.*)"$/, function(number){
    action.enterValue(contractManagementPage.contractNumberInput, number,"Contact Number text box in Contract page")
})

When(/^I enter contract commencement date "(.*)"$/, function(dateStr){
    var temp_date=dateStr
    if(dateStr=="today")
    {
    temp_date=new Date()
    temp_date=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
    }
    action.enterValueAndPressReturn(contractManagementPage.contractCommencementDateInput, temp_date,"Contact commencement date text box in Contract page")
    browser.pause(2000)
})

When(/^I enter contract completion date "(.*)"$/, function(dateStr){
    action.enterValueAndPressReturn(contractManagementPage.contractCompletionDateInput, dateStr,"Contact completion date text box in Contract page")
    browser.pause(2000)
})

When(/^I upload contract file$/, function(){
    browser.pause(2000)
    action.uploadFile(contractManagementPage.contractFileUploadControl,"./test/data/ContractDocument.docx","Contact file upload control in Contract page")
    browser.pause(2000)
})

When(/^I click save contract button$/, function(){
    action.isVisibleWait(contractManagementPage.saveContractButton,10000,"Save Contact button in Contract page")
    action.clickElement(contractManagementPage.saveContractButton,"Save Contact button in Contract page")
    browser.pause(4000)
})

When(/^I click copy contract button$/, function(){
    action.isVisibleWait(contractManagementPage.copyContractButton,10000,"Copy Contact button in Contract page")
    action.clickElement(contractManagementPage.copyContractButton,"Copy Contact button in Contract page")
    browser.pause(2000)
})

When(/^I click add minimum naati level$/, function(){
    browser.pause(2000)
    action.clickElement(contractManagementPage.addNAATIMinimumLevelLink,"Add NAATI minimum level link in Contract page")
    browser.pause(2000)
})

When(/^I click add contract rates$/, function(){
    action.isVisibleWait(contractManagementPage.addContractRateButton,10000,"Add Contact Rate button in Contract page");
    action.clickElement(contractManagementPage.addContractRateButton,"Add Contact Rate button in Contract page");
})

When(/^I enter contract rate details "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, function(name,businesshour,language,contractminperiod,contractminrate,contractongoing,contractorminperiod,contractorminrate,contractorongoing){
    browser.pause(2000)
    name = name + (Math.floor(Math.random() * 100000) + 1).toString()
    GlobalData.CONTRACT_NAME= name
    action.enterValue(contractManagementPage.contractNameInput, name,"Contact Name text box in Contract page")
    action.selectTextFromDropdown(contractManagementPage.contractBusinessHour,businesshour,"Contact Business Hour dropdown in Contract page")
   // action.selectTextFromDropdown(contractManagementPage.contractLanguageDropdown, language)
   action.enterValueAndPressReturn(contractManagementPage.contractLanguageDropdown, language,"Contact Language dropdown in Contract page")

    action.clickElement(contractManagementPage.scheduleSegment,"Schedule segment in Contract page")

    //contract section
    action.enterValue(contractManagementPage.minimumPeriodContract, contractminperiod,"Minimum Period Contract in Contract page")
    action.enterValue(contractManagementPage.minimumRateContract, contractminrate,"Minimum Rate Contract in Contract page")
    action.enterValue(contractManagementPage.ongoingPeriodContract, contractongoing,"Ongoing Period in Contract page")

    //contractor section
    action.enterValue(contractManagementPage.minimumPeriodContractor, contractorminperiod,"Minimum Period Contract in Contract page")
    action.enterValue(contractManagementPage.minimumRateContractor, contractorminrate,"Minimum Rate Contract in Contract page")
    action.enterValue(contractManagementPage.ongoingPeriodContractor, contractorongoing,"Ongoing Period in Contract page")

    //click save button
    action.clickElement(contractManagementPage.saveContractRateButton,"Save Contact Rate button in Contract page")
    browser.pause(2000)
})

When(/^I click add assignment type$/, function(){
    browser.pause(2000)
    action.clickElement(contractManagementPage.addAssignmentTypeLink,"Add assignment type link in Contract page")
})

When(/^I enter assignment type label "(.*)"$/, function(label){
    label = label + (Math.floor(Math.random() * 100000) + 1).toString()
    GlobalData.ASSIGNMENT_LABEL= label
    browser.pause(2000)
    action.enterValue(contractManagementPage.assignmentLabelInput,label,"Assignment label text box in Contract page")
})

When(/^I click add assignment button$/, function(){
    browser.pause(2000)
    action.clickElement(contractManagementPage.addAssignmentTypeButton,"Add assignment type button in Contract page")
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
    action.clickElement(contractManagementPage.naatiMinimumLevelItems[naatiLength-1],"NAATI minimum level item in Contract page")
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
    action.clickElement(contractManagementPage.naatiMinimumLevelTables[1].$('tbody').$('//*[contains(text(),"Remove")]'),"NAATI minimum level item remove in Contract page")
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
    action.isExistingWait(contractManagementPage.contractHeadingText,10000,"Contract heading text in Contract page");
    action.isVisibleWait(contractManagementPage.contractHeadingText,10000,"Contract heading text in Contract page");
    console.log("Actual :"+contractManagementPage.contractHeadingText.getText().toString())
    chai.expect(contractManagementPage.contractHeadingText.getText().toString() == title+(parseInt(res)+1)).to.be.true
})

Then(/^they will be navigated to the Contract page$/, function () {
    action.navigateToLatestWindow();
    action.isVisibleWait(contractManagementPage.contractHeadingText,10000,"Contract heading text in Contract page");
    let pageTitleActual = action.getPageTitle().trim();
    chai.expect(pageTitleActual).to.equal("Contract Details");
})

Given(/^the Manage Rate popup appears$/, function () {
    let manageRatePopupDisplayStatus = action.isVisibleWait(contractManagementPage.manageRatePopup, 10000,"Manage rate popup in Contract page");
    chai.expect(manageRatePopupDisplayStatus).to.be.true;
})

When(/^they select "(.*)" from Service Language dropdown$/, function (serviceLanguage) {
    action.isVisibleWait(contractManagementPage.manageRateServiceLanguageDropdownLink, 10000,"Manage Service language dropdown link in Contract page");
    action.enterValueAndPressReturn(contractManagementPage.manageRateServiceLanguageDropdownLink, serviceLanguage,"Manage Service language dropdown link in Contract page");
})

Then(/^the new ODTI fields will display using the existing layout under the Contract Rates "(.*)" and Contractor Rates "(.*)" sections$/, function (contractRatesFields, contractorRatesFields) {
    let contractRatesFieldsList = contractRatesFields.split(",");
    for (let contractIndex = 0; contractIndex < contractRatesFieldsList.length; contractIndex++) {
        let contractRatesFieldElement = $(contractManagementPage.contractRatesDynamicFieldLocator.replace("<dynamicFieldName>", contractRatesFieldsList[contractIndex]));
        let contractRatesFieldDisplayStatus = action.isVisibleWait(contractRatesFieldElement, 10000,"Contract rates field in Contract page");
        chai.expect(contractRatesFieldDisplayStatus).to.be.true;
    }
    let contractorRatesFieldsList = contractorRatesFields.split(",");
    for (let contractorIndex = 0; contractorIndex < contractorRatesFieldsList.length; contractorIndex++) {
        let contractorRatesFieldElement = $(contractManagementPage.contractorRatesDynamicFieldLocator.replace("<dynamicFieldName>", contractorRatesFieldsList[contractorIndex]));
        let contractorRatesFieldDisplayStatus = action.isVisibleWait(contractorRatesFieldElement, 10000,"Contract rates field in Contract page");
        chai.expect(contractorRatesFieldDisplayStatus).to.be.true;
    }
})

Then(/^the following fields are hidden "(.*)"$/, function (fieldLabels) {
    let fieldLabelsList = fieldLabels.split(",");
    for (let index = 0; index < fieldLabelsList.length; index++) {
        let fieldElement = $(contractManagementPage.fieldNameCommonLocator.replace("<dynamicFieldName>", fieldLabelsList[index]));
        let fieldDisplayStatus = action.isVisibleWait(fieldElement, 1000,fieldLabelsList[index]+" field in Contract page");
        chai.expect(fieldDisplayStatus).to.be.false;
    }
})

Then(/^the Schedule Segment section is hidden$/, function () {
    let scheduleSegmentSectionDisplayStatus = action.isVisibleWait(contractManagementPage.scheduleSegmentSection, 1000,"Schedule segment section in Contract page");
    chai.expect(scheduleSegmentSectionDisplayStatus).to.be.false;
})

Then(/^the user can add rates "(.*)" for Client contract rates "(.*)"$/, function (contractRatesValues, contractRatesFields) {
    let contractRatesFieldsList = contractRatesFields.split(",");
    let contractRatesValuesList = contractRatesValues.split(",");
    for (let contractIndex = 0; contractIndex < contractRatesFieldsList.length; contractIndex++) {
        let contractRatesFieldElement = $(contractManagementPage.contractRatesDynamicFieldLocator.replace("<dynamicFieldName>", contractRatesFieldsList[contractIndex]));
        action.enterValue(contractRatesFieldElement, contractRatesValuesList[contractIndex],"Contract rates field in Contract page");
    }
})

Then(/^the user can add rates "(.*)" for Client contractor rates "(.*)"$/, function (contractorRatesValues, contractorRatesFields) {
    let contractorRatesFieldsList = contractorRatesFields.split(",");
    let contractorRatesValuesList = contractorRatesValues.split(",");
    for (let contractorIndex = 0; contractorIndex < contractorRatesFieldsList.length; contractorIndex++) {
        let contractorRatesFieldElement = $(contractManagementPage.contractorRatesDynamicFieldLocator.replace("<dynamicFieldName>", contractorRatesFieldsList[contractorIndex]));
        action.enterValue(contractorRatesFieldElement, contractorRatesValuesList[contractorIndex],"Contract rates field " + contractorRatesFieldsList[contractorIndex] +" in Contract page");
    }
})

Then(/^the user can add NAATI Accreditation Level "(.*)"$/, function (NAATILevel) {
    action.isVisibleWait(contractManagementPage.manageRateNAATILevelDropdown,10000,"Manage Rate NAATI level dropdown in Contract page");
    action.selectTextFromDropdown(contractManagementPage.manageRateNAATILevelDropdown,NAATILevel,"Manage Rate NAATI level dropdown in Contract page");
})

Then(/^the user can add Hour Type "(.*)"$/, function (hourType) {
    action.isVisibleWait(contractManagementPage.manageRateHourTypeDropdown,10000,"Manage Rate hour type dropdown in Contract page");
    action.selectTextFromDropdown(contractManagementPage.manageRateHourTypeDropdown,hourType,"Manage Rate hour type dropdown in Contract page");
})

When(/^the user can add Name "(.*)"$/, function (name) {
    action.isVisibleWait(contractManagementPage.manageRateNameTextBox, 10000,"Manage Rate name text box in Contract page");
    name = name + (Math.floor(Math.random() * 100000) + 1).toString()
    GlobalData.CONTRACT_RATE_NAME = name;
    action.enterValue(contractManagementPage.manageRateNameTextBox, name,"Manage Rate name text box in Contract page");
})

When(/^they click the Save Rate button$/, function () {
    action.isVisibleWait(contractManagementPage.saveContractRateButton,10000,"Save Contract Rate button in Contract page");
    action.clickElement(contractManagementPage.saveContractRateButton,"Save Contract Rate button in Contract page");
})

Then(/^the contract rate data will save$/, function () {
    action.isNotVisibleWait(contractManagementPage.manageRatePopup, 10000);
    let manageRatePopupDisplayStatus = action.isVisibleWait(contractManagementPage.manageRatePopup, 10000,"Manage Rate popup in Contract page");
    chai.expect(manageRatePopupDisplayStatus).to.be.false;
})

Then(/^they will return to the Contract Details page$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.includes("Contract Details");
})

Then(/^the saved ODTI Contract Rates will be displayed in the Contract Rates Schedule table "(.*)"$/, function (serviceLanguageAccordion) {
    let serviceLanguageAccordionElement = $(contractManagementPage.savedServiceLanguageAccordionDynamicLocator.replace("<dynamicServiceLanguageAccordion>",serviceLanguageAccordion));
    action.isVisibleWait(serviceLanguageAccordionElement,10000,"Service Language Accordion in Contract page");
    action.clickElement(serviceLanguageAccordionElement,"Service Language Accordion in Contract page");
    let savedContractRateElement = $(contractManagementPage.savedContractRateInTableDynamicLocator.replace("<dynamicContractRateName>",GlobalData.CONTRACT_RATE_NAME));
    let savedContractRateDisplayStatus = action.isVisibleWait(savedContractRateElement,10000,"Saved Contract Rate in Contract page");
    chai.expect(savedContractRateDisplayStatus).to.be.true;
})

Then(/^the inline error message will be displayed at the field: eg Required field!$/, function () {
    let nameRequiredFieldErrorDisplayStatus = action.isVisibleWait(contractManagementPage.requiredFieldErrorMessageUnderNameField,10000,"Name Required field! error message in Contract page");
    chai.expect(nameRequiredFieldErrorDisplayStatus).to.be.true;
})

Then(/^the user will remain on the Manage Rate popup$/, function () {
    let manageRatePopupDisplayStatus = action.isVisibleWait(contractManagementPage.manageRatePopup, 10000,"Manage Rate popup in Contract page");
    chai.expect(manageRatePopupDisplayStatus).to.be.true;
})

Then(/^the inline error message will be displayed at the field: eg Please enter whole minutes with no decimals.$/, function () {
    let wholeMinNoDecimalsErrorDisplayStatus = action.isVisibleWait(contractManagementPage.wholeMinutesWithNoDecimalsErrorMessage,10000,"whole minutes with no decimals error message in Contract page");
    chai.expect(wholeMinNoDecimalsErrorDisplayStatus).to.be.true;
})

When(/^has expanded Service Language Accordion "(.*)"$/, function (serviceLanguageAccordion) {
    let serviceLanguageAccordionElement = $(contractManagementPage.savedServiceLanguageAccordionDynamicLocator.replace("<dynamicServiceLanguageAccordion>",serviceLanguageAccordion));
    action.isVisibleWait(serviceLanguageAccordionElement,10000,"Service Language Accordion in Contract page");
    action.clickElement(serviceLanguageAccordionElement,"Service Language Accordion in Contract page");
})

Then(/^the MIN PERIOD column under the Contract Rates Schedule table should display the corresponding Minimum Period 1 mins value "(.*)" from Contract Rate$/, function (minPeriod1ValueExpected) {
    action.isVisibleWait(contractManagementPage.minPeriodValueInTable,10000);
    browser.waitUntil(
        () => action.getElementText(contractManagementPage.minPeriodValueInTable,"Min Period Value in Contract page") !== "",
        {
            timeout: 20000,
            timeoutMsg: 'Expected Contract Rates Schedule table should display the corresponding Minimum Period 1 value',
            interval: 1000
        }
    );
    let minPeriod1ValueActual = action.getElementText(contractManagementPage.minPeriodValueInTable,"Min Period Value in Table in Contract page");
    chai.expect(minPeriod1ValueActual).to.equal(minPeriod1ValueExpected);
})

Then(/^display the minutes value as for example 10 mins no decimal places$/, function () {
    action.isVisibleWait(contractManagementPage.minPeriodValueInTable,10000,"Min Period Value in Table in Contract page");
    let minPeriod1ValueActual = action.getElementText(contractManagementPage.minPeriodValueInTable,"Min Period Value in Table in Contract page");
    chai.expect(minPeriod1ValueActual).to.not.includes(".")
})

When(/^they click Add preference button in Contract Details$/, function () {
    action.isVisibleWait(contractManagementPage.contractAddPreferenceLink, 10000,"Contract add preference link in Contract page");
    action.clickElement(contractManagementPage.contractAddPreferenceLink,"Contract add preference link in Contract page");
})

When(/^click the Preference Type dropdown in Contract Details$/, function () {
    action.isVisibleWait(contractManagementPage.contractPreferenceTypeDropdown, 10000,"Contract preference type dropdown in Contract page");
    action.clickElement(contractManagementPage.contractPreferenceTypeDropdown,"Contract preference type dropdown in Contract page");
})

Then(/^they will see an ODTI gender preference option with the label "(.*)" in Contract Details$/, function (optionLabel) {
    let preferenceTypeDropdownOptionElement = $(contractManagementPage.contractPreferenceTypeDropdownOptionLocator.replace("<dynamicOption>", optionLabel));
    let ODTIGenderPreferenceOptionDisplayStatus = action.isVisibleWait(preferenceTypeDropdownOptionElement, 10000,"Contract preference type dropdown option " + optionLabel + " in Contract page");
    chai.expect(ODTIGenderPreferenceOptionDisplayStatus).to.be.true;
})

Then(/^this option "(.*)" will appear under the Gender option in Contract Details$/, function (optionLabel) {
    let preferenceTypeDropdownOptionSiblingElement = $(contractManagementPage.contractPreferenceTypeDropdownOptionSiblingLocator.replace("<dynamicOption1>", "Gender").replace("<dynamicOption2>", optionLabel));
    let optionUnderGenderOptionExistStatus = action.isExistingWait(preferenceTypeDropdownOptionSiblingElement, 10000,"Contract preference type dropdown option " + optionLabel + " sibling in Contract page");
    chai.expect(optionUnderGenderOptionExistStatus).to.be.true;
})

Then(/^they can select this option "(.*)" in Contract Details$/, function (optionLabel) {
    action.selectTextFromDropdown(contractManagementPage.contractPreferenceTypeDropdown, optionLabel,"Contract preference type dropdown option " + optionLabel + " sibling in Contract page");
    let preferenceTypeDropdownOptionElement = $(contractManagementPage.contractPreferenceTypeDropdownOptionLocator.replace("<dynamicOption>", optionLabel));
    let optionSelectedStatus = action.isSelectedWait(preferenceTypeDropdownOptionElement, 10000,"Contract preference type dropdown option " + optionLabel + " sibling in Contract page");
    chai.expect(optionSelectedStatus).to.be.true;
})

When(/^they select preference option "(.*)" in Contract Details$/, function (option) {
    action.isVisibleWait(contractManagementPage.contractPreferenceDropdown,20000,"Contact Preference dropdown in Contract page");
    action.selectTextFromDropdown(contractManagementPage.contractPreferenceDropdown, option,"Contact Preference dropdown in Contract page");
})

When(/^they remove added preference type option "(.*)" in Contract Details$/, function (optionLabel) {
    let preferenceTypeRemoveIconElement = $(contractManagementPage.contractPreferenceTypeRemoveIconLocator.replace("<dynamicOption>", optionLabel));
    action.isVisibleWait(preferenceTypeRemoveIconElement,20000,"Preference type remove icon in Contract page");
    action.clickElement(preferenceTypeRemoveIconElement,"Preference type remove icon in Contract page");
    action.isNotVisibleWait(preferenceTypeRemoveIconElement,20000,"Preference type remove icon in Contract page");
})

When(/^they close the Add Preference popup in Contract Details$/, function () {
    action.isVisibleWait(contractManagementPage.contractAddPreferencePopupCloseButton, 10000,"Contract Add preference close button in Contract page");
    action.clickElement(contractManagementPage.contractAddPreferencePopupCloseButton,"Contract Add preference close button in Contract page");
})

When(/^they click save Contract Preference button in Contract Details/, function () {
    action.isVisibleWait(contractManagementPage.saveContractPreferenceButton, 10000,"Save Contract preference button in Contract page");
    action.clickElement(contractManagementPage.saveContractPreferenceButton,"Save Contract preference button in Contract page");
})

When(/^related contract do not have Gender On-Demand TI preference added$/, function () {
    let genderODTIPreferenceAddedDisplayStatus = action.isVisibleWait(contractManagementPage.contractGenderODTIPreferenceAdded, 1000,"Contract Gender ODTI preference added in Contract page");
    chai.expect(genderODTIPreferenceAddedDisplayStatus).to.be.false;
})

Then(/^in contract page, the actual preference set "(.*)" still stays the same$/, function (option) {
    let contractGenderODTIDropdownOptionLocatorElement = $(contractManagementPage.contractGenderODTIDropdownOptionLocator.replace("<dynamicOption>", option));
    let optionSelectedStatus = action.isSelectedWait(contractGenderODTIDropdownOptionLocatorElement, 10000,"Contract Gender ODTI dropdown option added in Contract page");
    chai.expect(optionSelectedStatus).to.be.true;
})

When(/^the Admin adds a Customised ODTI Field "(.*)","(.*)","(.*)"$/, function (fieldName, maxLength, audioLabel) {
    action.isVisibleWait(contractManagementPage.addCustomizedFieldLink, 10000,"Add Customized field link in Contract page");
    action.clickElement(contractManagementPage.addCustomizedFieldLink,"Add Customized field link in Contract page");
    GlobalData.CUSTOMISED_FIELD_NAME = fieldName + (Math.floor(Math.random() * 100000) + 1).toString();
    action.enterValue(contractManagementPage.fieldNameTextBoxOnEditOptions,GlobalData.CUSTOMISED_FIELD_NAME,"Field name text box in Contract page");
    action.clickElement(contractManagementPage.freeTextRadioButton,"Free text radio button in Contract page");
    action.clickElement(contractManagementPage.audibleInODTICheckboxOnEditOptions,"Audible in ODTI checkbox on edit options in Contract page");
    action.isVisibleWait(contractManagementPage.maxLengthTextBoxOnEditOptions,10000,"Max length text box on edit options in Contract page");
    action.enterValue(contractManagementPage.maxLengthTextBoxOnEditOptions,maxLength,"Max length text box on edit options in Contract page");
    action.enterValue(contractManagementPage.audioLabelTextBoxOnEditOptions,audioLabel,"Audio label text box on edit options in Contract page");
    action.clickElement(contractManagementPage.addButtonOnEditOptions,"Add button on edit options in Contract page");
})

Then(/^the Customised ODTI Field is removed$/, function () {
    let customisedFieldToggle = $(contractManagementPage.customisedFieldToggleDynamicLocator.replace("<dynamic>", GlobalData.CUSTOMISED_FIELD_NAME));
    action.isVisibleWait(customisedFieldToggle, 10000,"Customized field toggle in Contract page");
    action.clickElement(customisedFieldToggle,"Customized field toggle in Contract page");
    let customisedFieldRemoveLink = $(contractManagementPage.customisedFieldRemoveLinkDynamicLocator.replace("<dynamic>", GlobalData.CUSTOMISED_FIELD_NAME));
    action.isVisibleWait(customisedFieldRemoveLink, 10000,"Customized field remove link in Contract page");
    action.clickElement(customisedFieldRemoveLink,"Customized field remove link in Contract page");
    action.isNotVisibleWait(customisedFieldToggle, 10000,"Customized field toggle in Contract page");
})

When(/^in the popup I select Use Minimum Rate 2 option$/, function () {
    action.isVisibleWait(contractManagementPage.useMinimumRate2Checkbox, 10000, "Use Minimum Rate 2 checkbox in Add Assignment type popup in Contract page");
    action.clickElement(contractManagementPage.useMinimumRate2Checkbox, "Use Minimum Rate 2 checkbox in Add Assignment type popup in Contract page");
})

When(/^fill the mandatory fields "(.*)","(.*)","(.*)" in Add Assignment type popup$/, function (minPeriodHours, ongoingPeriodHours, serviceUsedByContract) {
    action.isVisibleWait(contractManagementPage.minimumPeriodHoursAssignmentTypeTextBox, 10000, "Minimum period hours text box in Add Assignment type popup in Contract page");
    action.enterValue(contractManagementPage.minimumPeriodHoursAssignmentTypeTextBox, minPeriodHours, "Minimum period hours text box  in Add Assignment type popup in Contract page");
    action.isVisibleWait(contractManagementPage.ongoingMinimumPeriodHoursAssignmentTypeTextBox, 10000, "Ongoing Minimum period hours text box in Add Assignment type popup in Contract page");
    action.enterValue(contractManagementPage.ongoingMinimumPeriodHoursAssignmentTypeTextBox, ongoingPeriodHours, "Ongoing Minimum period hours text box  in Add Assignment type popup in Contract page");
    let serviceUsedByContractOptionCheckbox = $(contractManagementPage.serviceUsedByContractOptionCheckboxDynamicLocator.replace("<dynamic>", serviceUsedByContract));
    action.isVisibleWait(serviceUsedByContractOptionCheckbox, 10000, "Service UsedBy Contract Option " + serviceUsedByContract + " Checkbox in Add Assignment type popup in Contract page");
    action.clickElement(serviceUsedByContractOptionCheckbox, "Service UsedBy Contract Option " + serviceUsedByContract + " Checkbox in Add Assignment type popup in Contract page");
})

Then(/^the assignment type should be Saved without any error$/, function () {
    let counter = 0;
    while (action.isVisibleWait(contractManagementPage.assignmentTypesPaginationNextLink, 3000, "Assignment types Pagination next link in Contract page") === true && counter < 10) {
        action.clickElement(contractManagementPage.assignmentTypesPaginationNextLink, "Assignment types Pagination next link in Contract page");
        action.isNotVisibleWait(contractManagementPage.assignmentTypesPaginationNextLink, 1000, "Assignment types Pagination next link in Contract page");
    }
    counter++
    let assignmentTypesAddedInTableTextActual = action.getElementText(contractManagementPage.assignmentTypesAddedInTableText, "Assignment types added in table in Contract page");
    chai.expect(assignmentTypesAddedInTableTextActual).to.includes(GlobalData.ASSIGNMENT_LABEL);
})

When(/^I disable the added assignment type in contract$/, function () {
    let toggleForAddedAssignmentTypeInTable = $(contractManagementPage.toggleForAddedAssignmentTypeInTableDynamicLocator.replace("<dynamic>",GlobalData.ASSIGNMENT_LABEL));
    action.isVisibleWait(toggleForAddedAssignmentTypeInTable, 10000, "Toggle for assignment type option-"+GlobalData.ASSIGNMENT_LABEL+" in Contract page");
    action.clickElement(toggleForAddedAssignmentTypeInTable, "Toggle for assignment type option-"+GlobalData.ASSIGNMENT_LABEL+" in Contract page");
    let disableLinkForAddedAssignmentTypeInTable = $(contractManagementPage.disableLinkForAddedAssignmentTypeInTableDynamicLocator.replace("<dynamic>",GlobalData.ASSIGNMENT_LABEL));
    action.isVisibleWait(disableLinkForAddedAssignmentTypeInTable, 10000, "Disable link for assignment type option-"+GlobalData.ASSIGNMENT_LABEL+" in Contract page");
    action.clickElement(disableLinkForAddedAssignmentTypeInTable, "Disable link for assignment type option-"+GlobalData.ASSIGNMENT_LABEL+" in Contract page");
    action.isNotVisibleWait(disableLinkForAddedAssignmentTypeInTable, 10000, "Disable link for assignment type option-"+GlobalData.ASSIGNMENT_LABEL+" in Contract page");
})