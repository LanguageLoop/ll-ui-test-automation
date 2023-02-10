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
    name = name + (Math.floor(Math.random() * 100000) + 1).toString()
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
    action.clickElement(contractManagementPage.saveContractButton)
    browser.pause(4000)
})

When(/^I click copy contract button$/, function(){
    action.clickElement(contractManagementPage.copyContractButton)
    browser.pause(2000)
})

When(/^I click add minimum naati level$/, function(){
    browser.pause(2000)
    action.clickElement(contractManagementPage.addNAATIMinimumLevelLink)
    browser.pause(2000)
})

When(/^I click add contract rates$/, function(){
    browser.pause(2000)
    action.clickElement(contractManagementPage.addContractRateButton)
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
    action.isVisibleWait(contractManagementPage.contractHeadingText,10000);
    chai.expect(contractManagementPage.contractHeadingText.getText().toString() == title+(parseInt(res)+1)).to.be.true
})

