
When(/^I click add campus link$/, function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.createCampusLink)
    browser.pause(2000)

})

When(/^I select campus type "(.*)"$/, function(campustype)
{
    switch(campustype)
    {
        case "Metro":
            action.clickElement(accountManagementPage.metroRadioButton)
            break
        case "Regional":
            action.clickElement(accountManagementPage.regionalRadioButton)
            break
        default:
            break
    }

})
When(/^I enter campus address "(.*)","(.*)"$/, function(address1,address2){
    $('//span[@class="fa fa-fw fa-pencil-square-o"]').click()
    browser.pause(2000)
    action.enterLocation(accountManagementPage.campusAddressInput,address1)
    action.enterValue(accountManagementPage.address2Input,address2)
})

When(/^I enter campus post name "(.*)","(.*)"$/, function(name1,name2){
    action.enterValue(accountManagementPage.campusPostName1Input,name1)
    browser.pause(1000)
    action.enterValue(accountManagementPage.campusPostName2Input,name2)
})

When(/^I enter postal address "(.*)","(.*)"$/, function(address1,address2){
    $$('//span[@class="fa fa-fw fa-pencil-square-o"]')[1].click()
    browser.pause(2000)
    action.enterLocation(accountManagementPage.postalAddressInput,address1)
    action.enterValue(accountManagementPage.postalAddress2Input,address2)
})

When(/^I enter new campus name "(.*)"$/,function(campusname){
    action.enterValue(accountManagementPage.campusNameInput,campusname)
})

When(/^I select campus entity type "(.*)"$/, function(entitytype){
    action.selectTextFromDropdown(accountManagementPage.entityTypeDropdown,entitytype)
})

When(/^I select override invoice frequency "(.*)"$/, function(frequency){
    action.selectTextFromDropdown(accountManagementPage.overrideInvoiceFrequencyDropdown,frequency)
})

When(/^I enter campus abn "(.*)" and check$/,function(abn){
    action.enterValue(accountManagementPage.campusABNInput,abn)
    browser.pause(2000)
    action.clickElement(accountManagementPage.abnCheckButton)
    browser.pause(2000)
})

When(/^I click charge gst checkbox$/,function(){
    action.clickElement(accountManagementPage.chargeGSTCheckbox)
})

When(/^I enter campus company name "(.*)"$/,function(companyname){
    action.clearValue(accountManagementPage.companyNameInput)
    action.enterValue(accountManagementPage.companyNameInput,companyname)
})

When(/^I enter campus trading name "(.*)"$/,function(tradingname){
    action.enterValue(accountManagementPage.tradingNameInput,tradingname)
})

When(/^I enter campus PO number "(.*)"$/,function(ponumber){
    action.enterValue(accountManagementPage.PONumberInput,ponumber)
})

When(/^I click default bill to link$/,function(){
    action.clickElement(accountManagementPage.selectBillToLink)
})

When(/^I search bill to name "(.*)"$/,function(billto){
    browser.pause(5000)
    action.enterValue(accountManagementPage.searchBillToInput,billto)
})

When(/^I click first bill to from search results$/,function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.firstBillToTitle)
    browser.pause(2000)
})

When(/^I enter videoloop pin "(.*)"$/, function(pin)
{
    action.enterValue(accountManagementPage.videoLoopPinInput,pin)
})

When(/^I click assign button$/,function(){
    action.clickElement(accountManagementPage.assignButton)
    browser.pause(2000)
})

When(/^I click save campus button$/, function(){
    action.clickElement(accountManagementPage.saveButton)
    browser.pause(3000)
})

When(/^I click manage campus click$/, function(){
    action.clickElement(campusDetailsPage.manageCampusLink)
    browser.pause(5000)
})

When(/^I handle duplicate campus dialog$/,function(){
    try{
        accountManagementPage.duplicateCampusSaveButton.waitForExist({timeout:5000})
        accountManagementPage.duplicateCampusSaveButton.click()
      
      }
    catch(Err)
       {
        }
    
})

When(/^I click add preference button$/, function(){
    browser.pause(2000)
    action.clickElement(campusDetailsPage.addPreferenceButton)
    browser.pause(2000)
})

When(/^I select preference type "(.*)"$/, function(preferencetype){
    browser.pause(2000)
    action.selectTextFromDropdown(campusDetailsPage.preferenceTypeDropdown,preferencetype)
})

When(/^I click save preference button$/, function(){
    action.clickElement(campusDetailsPage.savePreferenceButton)
})

When(/^I click delete icon$/, function(){
    action.clickElement(campusDetailsPage.deleteGenderPreference)
    browser.pause(2000)
})

When(/^I delete all preferences$/, function(){
    var deleteButtons= campusDetailsPage.deletePreferenceButtons
    for(var i=0;i<deleteButtons.length;i++)
    {
        action.clickElement(deleteButtons[i])
        browser.pause(2000)
    }
})

When(/^I delete all vaccinations$/, function(){
    var deleteButtons= campusDetailsPage.deleteVaccinationButtons
    for(var i=0;i<deleteButtons.length;i++)
    {
        action.clickElement(deleteButtons[i])
        browser.pause(2000)
    }
})

When(/^I click add vaccination button$/, function(){
    browser.pause(2000)
    action.clickElement(campusDetailsPage.addVaccinationButton)
    browser.pause(2000)
})

When(/^I select disease "(.*)"$/, function(disease){
    action.selectTextFromDropdown(campusDetailsPage.diseaseDropdown,disease)
})

When(/^I enter valid months "(.*)"$/, function(months){
    action.clearValue(campusDetailsPage.validMonthsInput)
    action.enterValue(campusDetailsPage.validMonthsInput,months)
})

When(/^I click save vaccination button$/, function(){
    action.clickElement(campusDetailsPage.saveVaccinationButton)
})

When(/^I click add dimension cloud button$/, function(){
    action.clickElement(campusDetailsPage.addDimensionCloudButton)
})

When(/^I select dimension cloud type and value "(.*)","(.*)"$/, function(type,value){
    browser.pause(2000)
    action.selectTextFromDropdown(campusDetailsPage.dimensionCloudDropdown,type)
    browser.pause(2000)
    action.selectTextFromDropdown(campusDetailsPage.dimensionCloudDropdown,value)

})

When(/^I click add note button$/, function(){
    browser.pause(2000)
    action.clickElement(campusDetailsPage.addNotesLink)
})

When(/^I enter note details "(.*)","(.*)"$/, function(title,message){
    browser.pause(2000)
    action.enterValue(campusDetailsPage.noteTitleInput,title)
    action.enterValue(campusDetailsPage.noteMessageInput,message)
})

When(/^I click save note button$/, function(){
    action.clickElement(campusDetailsPage.saveNoteButton)
    browser.pause(2000)
})

When(/^I click add naati override button$/,function(){
    browser.pause(2000)
    action.clickElement(campusDetailsPage.addNAATIOverrideLevelLink)
    browser.pause(2000)
})

When(/^I select service language "(.*)"$/, function(language){
    action.enterValueAndPressReturn(campusDetailsPage.serviceLanguageDropdown,language)
})

When(/^I select service naati level "(.*)"$/, function(level){
    action.selectTextFromDropdown(campusDetailsPage.naatiLevelDropdown,level)
})

When(/^I click save naati button$/, function(){
    action.clickElement(campusDetailsPage.saveNAATIOverrideButton)
    browser.pause(2000)
})

When(/^I click add cancellation fee button$/, function(){
    browser.pause(2000)
    action.clickElement(campusDetailsPage.addCancellationFeeButton)
    browser.pause(2000)
})

When(/^I enter cancellation fee name "(.*)"$/, function(name){
    action.enterValue(campusDetailsPage.cancellationFeeNameInput, name)
})

When(/^I enter cancellation hours before "(.*)"$/, function(hours){
    action.enterValue(campusDetailsPage.cancellationFeeHoursBeforeInput, hours)
})

When(/^I enter cancellation duration "(.*)"$/, function(duration){
    action.enterValue(campusDetailsPage.cancellationFeeDurationInput,duration)
} )

When(/^I enter client fee "(.*)"$/, function(clientfee){
    action.enterValue(campusDetailsPage.cancellationFeeClientFeeInput,clientfee)
})

When(/^I enter unable to service fee "(.*)"$/, function(servicefee){
    action.enterValue(campusDetailsPage.cancellationFeeUnableToServiceFeeInput,servicefee)
})

When(/^I enter failed to attend fee "(.*)"$/, function(failedfee){
    action.enterValue(campusDetailsPage.cancellationFeeFailedToAttendFeeInput,failedfee)
})

When(/^I click save cancellation fee button$/, function(){
    action.clickElement(campusDetailsPage.saveCancellationButton)
    browser.pause(7000)
})

When(/^I delete the added cancellation fee$/, function(){
    action.clickElement(campusDetailsPage.cancellationFeeToggleButton)
    browser.pause(1000)
    action.clickElement(campusDetailsPage.cancellationFeeRemoveLink)
})

When(/^I click add NES button$/, function(){
    browser.pause(2000)
    var tlength= campusDetailsPage.nesTableRows.length
    var temp1 =campusDetailsPage.nesTableRows[tlength-1].$$('td')[1]
    if(temp1!=null)
    {    
    var tlength= campusDetailsPage.nesTableRows.length
    //click the toggle button
    action.clickElement(campusDetailsPage.nesTableRows[tlength-1].$('label'))
    browser.pause(2000)
    //click remove link
    var rlength= campusDetailsPage.nesRemoveLinks.length
    action.clickElement(campusDetailsPage.nesRemoveLinks[rlength-1])
    browser.acceptAlert()
    }    
    action.clickElement(campusDetailsPage.addNESButton)
})

When(/^I select nes language "(.*)"$/, function(language){
    action.enterValueAndPressReturn(campusDetailsPage.nesLanguageDropdown,language)
})

When(/^I click save nes button$/, function(){
    action.clickElement(campusDetailsPage.nesSaveButton)
    browser.pause(2000)
})

When(/^I click add common instructions button$/, function(){
    action.clickElement(campusDetailsPage.addCommonInstructionLink)
    browser.pause(2000)
})

When(/^I enter common instruction title "(.*)"$/, function(title){
    action.enterValue(campusDetailsPage.commonInstructiontitleInput,title)
})

When(/^I enter common instruction description "(.*)"$/, function(description){
    action.enterValue(campusDetailsPage.commonInstructionMessageInput,description)
})

When(/^I click add common instruction button$/, function(){
    action.clickElement(campusDetailsPage.commonInstructionAddButton)
    browser.pause(4000)
})

When(/^I click add custom field button$/, function(){
    browser.pause(2000)
    action.clickElement(campusDetailsPage.customizedFieldAddLink)
    browser.pause(2000)
})

When(/^I enter field name "(.*)"$/, function(name){
    action.enterValue(campusDetailsPage.fieldNameInput,name)
})

When(/^I click custom field add button$/, function(){
    action.clickElement(campusDetailsPage.customizedFieldAddButton)
    browser.pause(2000)
})

Then(/^I verify custom field is added "(.*)"$/, function(name){
    var tlength= campusDetailsPage.customizedFieldTableRows.length
    var temp_name= campusDetailsPage.customizedFieldTableRows[tlength-1].$$('td')[0].getText()
    //verify custom field name
    chai.expect(temp_name==name).to.be.true
})

Then(/^I delete added custom field$/, function(){
    action.clickElement(campusDetailsPage.customizedFieldRemoveButton)
    browser.pause(2000)
    browser.acceptAlert()
    browser.pause(2000)
})

Then(/^I verify common instruction title and description "(.*)","(.*)"$/, function(title,description){
    var temp_title= campusDetailsPage.commonInstructionTableRows[2].$$('td')[0].getText()
    var temp_description= campusDetailsPage.commonInstructionTableRows[2].$$('td')[1].getText()
    // verify the title
    chai.expect(temp_title==title).to.be.true
    //verify the description
    chai.expect(temp_description==description).to.be.true
})

Then(/^I delete added common instruction$/,function(){
    action.clickElement(campusDetailsPage.removeCommonInstructionButton)
    browser.pause(2000)
    browser.acceptAlert()
    browser.pause(2000)
})

Then(/^I verify nes language is added "(.*)"$/, function(language){
    var tlength= campusDetailsPage.nesTableRows.length
    var temp =campusDetailsPage.nesTableRows[tlength-1].$$('td')[0].getText()
    var temp1 =campusDetailsPage.nesTableRows[tlength-1].$$('td')[1].getText()
    //verify the service
    chai.expect(language.includes(temp)).to.be.true
    //verify the language
    chai.expect(language.includes(temp1)).to.be.true
})

Then(/^I delete the added nes$/, function(){
    var tlength= campusDetailsPage.nesTableRows.length
    //click the toggle button
    action.clickElement(campusDetailsPage.nesTableRows[tlength-1].$('label'))
    browser.pause(2000)
    //click remove link
    var rlength= campusDetailsPage.nesRemoveLinks.length
    action.clickElement(campusDetailsPage.nesRemoveLinks[rlength-1])
    browser.acceptAlert()
    browser.pause(2000)

})

Then(/^I verify cancellation fee is added "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, function(name,leadtime,duration,clientfee,unablefee,failedfee){
    chai.expect(campusDetailsPage.cancellationFeeRows[0].getText()==name).to.be.true
    chai.expect(campusDetailsPage.cancellationFeeRows[1].getText()==leadtime).to.be.true
    chai.expect(campusDetailsPage.cancellationFeeRows[2].getText()==duration).to.be.true
    chai.expect(campusDetailsPage.cancellationFeeRows[3].getText()=="$"+clientfee).to.be.true
    chai.expect(campusDetailsPage.cancellationFeeRows[4].getText()=="$"+unablefee).to.be.true
    chai.expect(campusDetailsPage.cancellationFeeRows[5].getText()=="$"+failedfee).to.be.true
})

Then(/^I verify the override naati is added "(.*)"$/, function(naati){
    //click on the last added item from the override naati section
    var naatiLength= campusDetailsPage.naatiLevelOverrideItems.length
    action.clickElement(campusDetailsPage.naatiLevelOverrideItems[naatiLength-1])
     browser.pause(3000)
    // verify if the added naati item is present
    var tlength= campusDetailsPage.naatiLevelOverrideTables.length
    var temp =campusDetailsPage.naatiLevelOverrideTables[tlength-1].$('//div[@class="Text_orange"]').getText()
    chai.expect(temp==naati).to.be.true
    browser.pause(3000)
})

Then(/^I delete added override naati$/, function(){
    browser.pause(2000)
    var tlength= campusDetailsPage.naatiLevelOverrideTables.length
    action.clickElement(campusDetailsPage.naatiLevelOverrideTables[tlength-1].$('//*[@class="fa fa-fw fa-trash-o fa-lg"]'))
    browser.pause(2000)
    browser.acceptAlert()
    browser.pause(2000)
})

Then(/^I verify travel rate section is present$/, function(){
    chai.expect(action.elementExists(campusDetailsPage.travelRatesHeader)).to.be.true
    chai.expect(action.elementExists(campusDetailsPage.includedTravelHeader)).to.be.true
    chai.expect(action.elementExists(campusDetailsPage.hourlyFeeHeader)).to.be.true
    chai.expect(action.elementExists(campusDetailsPage.distanceFeeHeader)).to.be.true

})

Then(/^I verify the note is added with "(.*)","(.*)"$/, function(title,message){
    browser.pause(3000)
    var rowLength = campusDetailsPage.noteTableRows.length
    var columns= campusDetailsPage.noteTableRows[rowLength-1].$$('td')
    //verify note title
    chai.expect(columns[0].getText()==title).to.be.true
    //verify note message
    chai.expect(columns[1].getText()==message).to.be.true
})

Then(/^I delete added note$/, function(){
    var toggleLength= campusDetailsPage.noteToggleButtons.length
    //click the last button
    action.clickElement(campusDetailsPage.noteToggleButtons[toggleLength-1])
    browser.pause(2000)
    //click remove link
    var removeLength=campusDetailsPage.noteRemoveLink.length
    action.clickElement(campusDetailsPage.noteRemoveLink[removeLength-1])
})

Then(/^I verify dimension cloud "(.*)" is present$/, function(dimension){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.dimensionCloudHeader)).to.be.true
    chai.expect(action.elementExists($('//span[contains(text(),"'+dimension+'")]')))
    // check if the recently added tag is present. its the last tag of the list
    var tagItemsLength= campusDetailsPage.dimensionCloudTags.length
    chai.expect(action.elementExists(campusDetailsPage.dimensionCloudTags[tagItemsLength-1]))
})

Then(/^I delete the added dimension tag$/, function(){
    var tagDeleteButtonsLength = campusDetailsPage.dimensionCloudDeleteButtons.length
    //click the last delete button to delete the last added dimension cloud
    action.clickElement(campusDetailsPage.dimensionCloudDeleteButtons[tagDeleteButtonsLength-1])
})

Then(/^I verify vaccination "(.*)" is present$/, function(vaccination){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.hepatitisBVaccination)).to.be.true
})

Then(/^I verify gender preference section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.genderPreferenceSection)).to.be.true
})

Then(/^I verify police check preference section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.policeCheckPreferenceSection)).to.be.true
})

Then(/^I verify working with children preference section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.workingWithChildrenPreferenceSection)).to.be.true
})

Then(/^I verify campus name "(.*)"$/,function(campusname){
    browser.pause(10000)
    chai.expect(campusDetailsPage.campusNameText.getText()==campusname).to.be.true
})

Then(/^I verify manage campus fields are present$/,function(){
    //chai.expect(action.elementExists(accountManagementPage.campusAddressInput)).to.be.true
    chai.expect(action.elementExists(accountManagementPage.address2Input)).to.be.true

   // chai.expect(action.elementExists(accountManagementPage.postalAddressInput)).to.be.true
    chai.expect(action.elementExists(accountManagementPage.postalAddress2Input)).to.be.true
    chai.expect(action.elementExists(accountManagementPage.campusNameInput)).to.be.true
    chai.expect(action.elementExists(accountManagementPage.campusABNInput)).to.be.true
    chai.expect(action.elementExists(accountManagementPage.companyNameInput)).to.be.true
    chai.expect(action.elementExists(accountManagementPage.PONumberInput)).to.be.true
    chai.expect(action.elementExists(accountManagementPage.campusStatusDropdown)).to.be.true
    chai.expect(action.elementExists(accountManagementPage.businessTypesDropdown)).to.be.true
    chai.expect(action.elementExists(accountManagementPage.tradingNameInput)).to.be.true
    chai.expect(action.elementExists(accountManagementPage.chargeGSTCheckbox)).to.be.true

})

Then(/^I verify the onsite contract section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.contractRatesOnSiteHeader)).to.be.true
    action.clickElement(campusDetailsPage.contractRatesOnSiteHeader)
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.contractRatesOnSiteTable)).to.be.true
    browser.pause(2000)
    action.clickElement(campusDetailsPage.contractRatesOnSiteHeader)
})

Then(/^I verify the prebooked ti contract section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.contractRatesPrebookedTIHeader)).to.be.true
    action.clickElement(campusDetailsPage.contractRatesPrebookedTIHeader)
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.contractRatesPrebookedTITable)).to.be.true
    browser.pause(2000)
    action.clickElement(campusDetailsPage.contractRatesPrebookedTIHeader)
})

Then(/^I verify the prebooked video contract section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.contractRatesPrebookedVideoHeader)).to.be.true
    action.clickElement(campusDetailsPage.contractRatesPrebookedVideoHeader)
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.contractRatesPrebookedVideoTable)).to.be.true
    browser.pause(2000)
    action.clickElement(campusDetailsPage.contractRatesPrebookedVideoHeader)
})

Then(/^I verify bill to contract section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.billToDetailsHeading)).to.be.true
    chai.expect(action.elementExists(campusDetailsPage.billToDetailsTable)).to.be.true

})