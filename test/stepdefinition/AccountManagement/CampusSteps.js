
When(/^I click add campus link$/, function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.createCampusLink,"Create Campus Link in campus page")
    browser.pause(2000)

})

When(/^I select campus type "(.*)"$/, function(campustype)
{
    switch(campustype)
    {
        case "Metro":
            action.clickElement(accountManagementPage.metroRadioButton,"Metro radio button in campus page")
            break
        case "Regional":
            action.clickElement(accountManagementPage.regionalRadioButton,"Regional radio button in campus page")
            break
        default:
            break
    }

})
When(/^I enter campus address "(.*)","(.*)"$/, function(address1,address2){
    $('//span[@class="fa fa-fw fa-pencil-square-o"]').click()
    browser.pause(2000)
    action.enterLocation(accountManagementPage.campusAddressInput,address1,"Campus address 1 text box in campus page")
    action.enterValue(accountManagementPage.address2Input,address2,"Campus address 2 text box in campus page")
})

When(/^I enter campus post name "(.*)","(.*)"$/, function(name1,name2){
    action.enterValue(accountManagementPage.campusPostName1Input,name1,"Campus post name 1 text box in campus page")
    browser.pause(1000)
    action.enterValue(accountManagementPage.campusPostName2Input,name2,"Campus post name 2 text box in campus page")
})

When(/^I enter postal address "(.*)","(.*)"$/, function(address1,address2){
    $$('//span[@class="fa fa-fw fa-pencil-square-o"]')[1].click()
    browser.pause(2000)
    action.enterLocation(accountManagementPage.postalAddressInput,address1,"Postal address 1 text box in campus page")
    action.enterValue(accountManagementPage.postalAddress2Input,address2,"Postal address 2 text box in campus page")
})

When(/^I enter new campus name "(.*)"$/,function(campusname){
    action.enterValue(accountManagementPage.campusNameInput,campusname,"Campus name text box in campus page")
})

When(/^I select campus entity type "(.*)"$/, function(entitytype){
    action.selectTextFromDropdown(accountManagementPage.entityTypeDropdown,entitytype,"Entity type dropdown in campus page")
})

When(/^I select override invoice frequency "(.*)"$/, function(frequency){
    action.selectTextFromDropdown(accountManagementPage.overrideInvoiceFrequencyDropdown,frequency,"Override invoice frequency dropdown in campus page")
})

When(/^I enter campus abn "(.*)" and check$/,function(abn){
    action.enterValue(accountManagementPage.campusABNInput,abn,"Campus ABN text box in campus page")
    browser.pause(2000)
    action.clickElement(accountManagementPage.abnCheckButton,"ABN check button in campus page")
    browser.pause(2000)
})

When(/^I click charge gst checkbox$/,function(){
    action.clickElement(accountManagementPage.chargeGSTCheckbox,"Charge GST checkbox in campus page")
})

When(/^I enter campus company name "(.*)"$/,function(companyname){
    action.clearValue(accountManagementPage.companyNameInput,"Company name text box in campus page")
    action.enterValue(accountManagementPage.companyNameInput,companyname,"Company name text box in campus page")
})

When(/^I enter campus trading name "(.*)"$/,function(tradingname){
    action.enterValue(accountManagementPage.tradingNameInput,tradingname,"Trading Name text box in campus page")
})

When(/^I enter campus PO number "(.*)"$/,function(ponumber){
    action.enterValue(accountManagementPage.PONumberInput,ponumber,"PO Number text box in campus page")
})

When(/^I click default bill to link$/,function(){
    action.clickElement(accountManagementPage.selectBillToLink,"Bill To link in campus page")
})

When(/^I search bill to name "(.*)"$/,function(billto){
    browser.pause(5000)
    action.enterValue(accountManagementPage.searchBillToInput,billto,"Search Bill To text box in campus page")
})

When(/^I click first bill to from search results$/,function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.firstBillToTitle,"First Bill To title in campus page")
    browser.pause(2000)
})

When(/^I enter videoloop pin "(.*)"$/, function(pin)
{
    action.enterValue(accountManagementPage.videoLoopPinInput,pin,"Video Loop pin text box in campus page")
})

When(/^I click assign button$/,function(){
    action.clickElement(accountManagementPage.assignButton,"Assign button in campus page")
    browser.pause(2000)
})

When(/^I click save campus button$/, function(){
    action.clickElement(accountManagementPage.saveButton,"Save button in campus page")
    browser.pause(3000)
})

When(/^I click manage campus click$/, function(){
    action.clickElement(campusDetailsPage.manageCampusLink,"Manage Campus link in campus page")
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
    action.clickElement(campusDetailsPage.addPreferenceButton,"Add Preference button in campus page")
    browser.pause(2000)
})

When(/^I select preference type "(.*)"$/, function(preferencetype){
    browser.pause(2000)
    action.selectTextFromDropdown(campusDetailsPage.preferenceTypeDropdown,preferencetype,"Preference type drop down in campus page")
})

When(/^I click save preference button$/, function(){
    action.clickElement(campusDetailsPage.savePreferenceButton,"Save preference button in campus page")
})

When(/^I click delete icon$/, function(){
    action.clickElement(campusDetailsPage.deleteGenderPreference)
    browser.pause(2000)
})

When(/^I delete all preferences$/, function(){
    var deleteButtons= campusDetailsPage.deletePreferenceButtons
    for(var i=0;i<deleteButtons.length;i++)
    {
        action.clickElement(deleteButtons[i],"Delete preference button " + i + " in campus page")
        browser.pause(2000)
    }
})

When(/^I delete all vaccinations$/, function(){
    var deleteButtons= campusDetailsPage.deleteVaccinationButtons
    for(var i=0;i<deleteButtons.length;i++)
    {
        action.clickElement(deleteButtons[i],"Delete vaccination button " + i + " in campus page")
        browser.pause(2000)
    }
})

When(/^I click add vaccination button$/, function(){
    browser.pause(2000)
    action.clickElement(campusDetailsPage.addVaccinationButton,"Add vaccination button in campus page")
    browser.pause(2000)
})

When(/^I select disease "(.*)"$/, function(disease){
    action.selectTextFromDropdown(campusDetailsPage.diseaseDropdown,disease,"Disease dropdown in campus page")
})

When(/^I enter valid months "(.*)"$/, function(months){
    action.clearValue(campusDetailsPage.validMonthsInput,"Valid months text box in campus page")
    action.enterValue(campusDetailsPage.validMonthsInput,months,"Valid months text box in campus page")
})

When(/^I click save vaccination button$/, function(){
    action.clickElement(campusDetailsPage.saveVaccinationButton,"Save vaccination button in campus page")
})

When(/^I click add dimension cloud button$/, function(){
    action.clickElement(campusDetailsPage.addDimensionCloudButton,"Add dimension button in campus page")
})

When(/^I select dimension cloud type and value "(.*)","(.*)"$/, function(type,value){
    browser.pause(2000)
    action.selectTextFromDropdown(campusDetailsPage.dimensionCloudDropdown,type,"Dimension cloud dropdown in campus page")
    browser.pause(2000)
    action.selectTextFromDropdown(campusDetailsPage.dimensionCloudDropdown,value,"Dimension cloud dropdown in campus page")

})

When(/^I click add note button$/, function(){
    browser.pause(2000)
    action.clickElement(campusDetailsPage.addNotesLink,"Add notes link in campus page")
})

When(/^I enter note details "(.*)","(.*)"$/, function(title,message){
    browser.pause(2000)
    action.enterValue(campusDetailsPage.noteTitleInput,title,"Note title text box in campus page")
    action.enterValue(campusDetailsPage.noteMessageInput,message,"Note message text box in campus page")
})

When(/^I click save note button$/, function(){
    action.clickElement(campusDetailsPage.saveNoteButton,"Save note button in campus page")
    browser.pause(2000)
})

When(/^I click add naati override button$/,function(){
    browser.pause(2000)
    action.clickElement(campusDetailsPage.addNAATIOverrideLevelLink,"Add NAATI override level link in campus page")
    browser.pause(2000)
})

When(/^I select service language "(.*)"$/, function(language){
    action.enterValueAndPressReturn(campusDetailsPage.serviceLanguageDropdown,language,"Service language dropdown in campus page")
})

When(/^I select service naati level "(.*)"$/, function(level){
    action.selectTextFromDropdown(campusDetailsPage.naatiLevelDropdown,level,"NAATI level dropdown in campus page")
})

When(/^I click save naati button$/, function(){
    action.clickElement(campusDetailsPage.saveNAATIOverrideButton,"Save NAATI override button in campus page")
    browser.pause(2000)
})

When(/^I click add cancellation fee button$/, function(){
    browser.pause(2000)
    action.clickElement(campusDetailsPage.addCancellationFeeButton,"Add cancellation fee button in campus page")
    browser.pause(2000)
})

When(/^I enter cancellation fee name "(.*)"$/, function(name){
    action.enterValue(campusDetailsPage.cancellationFeeNameInput, name,"Cancellation fee name text box in campus page")
})

When(/^I enter cancellation hours before "(.*)"$/, function(hours){
    action.enterValue(campusDetailsPage.cancellationFeeHoursBeforeInput, hours,"Cancellation fee hours before text box in campus page")
})

When(/^I enter cancellation duration "(.*)"$/, function(duration){
    action.enterValue(campusDetailsPage.cancellationFeeDurationInput,duration,"Cancellation fee duration text box in campus page")
} )

When(/^I enter client fee "(.*)"$/, function(clientfee){
    action.enterValue(campusDetailsPage.cancellationFeeClientFeeInput,clientfee,"Cancellation fee client fee text box in campus page")
})

When(/^I enter unable to service fee "(.*)"$/, function(servicefee){
    action.enterValue(campusDetailsPage.cancellationFeeUnableToServiceFeeInput,servicefee,"Cancellation fee unable to service fee text box in campus page")
})

When(/^I enter failed to attend fee "(.*)"$/, function(failedfee){
    action.enterValue(campusDetailsPage.cancellationFeeFailedToAttendFeeInput,failedfee,"Cancellation fee failed to attend fee text box in campus page")
})

When(/^I click save cancellation fee button$/, function(){
    action.clickElement(campusDetailsPage.saveCancellationButton,"Save cancellation button in campus page")
    browser.pause(7000)
})

When(/^I delete the added cancellation fee$/, function(){
    action.clickElement(campusDetailsPage.cancellationFeeToggleButton,"Cancellation fee toggle button in campus page")
    browser.pause(1000)
    action.clickElement(campusDetailsPage.cancellationFeeRemoveLink,"Cancellation fee remove link in campus page")
})

When(/^I click add NES button$/, function(){
    browser.pause(2000)
    var tlength= campusDetailsPage.nesTableRows.length
    var temp1 =campusDetailsPage.nesTableRows[tlength-1].$$('td')[1]
    if(temp1!=null)
    {    
    var tlength= campusDetailsPage.nesTableRows.length
    //click the toggle button
    action.clickElement(campusDetailsPage.nesTableRows[tlength-1].$('label'),"NES table rows in campus page")
    browser.pause(2000)
    //click remove link
    var rlength= campusDetailsPage.nesRemoveLinks.length
    action.clickElement(campusDetailsPage.nesRemoveLinks[rlength-1],"NES remove links in campus page")
    browser.acceptAlert()
    }    
    action.clickElement(campusDetailsPage.addNESButton,"Add NES button in campus page")
})

When(/^I select nes language "(.*)"$/, function(language){
    action.enterValueAndPressReturn(campusDetailsPage.nesLanguageDropdown,language,"NES language dropdown in campus page")
})

When(/^I click save nes button$/, function(){
    action.clickElement(campusDetailsPage.nesSaveButton,"NES save button in campus page")
    browser.pause(2000)
})

When(/^I click add common instructions button$/, function(){
    action.clickElement(campusDetailsPage.addCommonInstructionLink,"Add common instruction link in campus page")
    browser.pause(2000)
})

When(/^I enter common instruction title "(.*)"$/, function(title){
    action.enterValue(campusDetailsPage.commonInstructiontitleInput,title,"Common instruction title text box in campus page")
})

When(/^I enter common instruction description "(.*)"$/, function(description){
    action.enterValue(campusDetailsPage.commonInstructionMessageInput,description,"Common instruction message text box in campus page")
})

When(/^I click add common instruction button$/, function(){
    action.clickElement(campusDetailsPage.commonInstructionAddButton,"Common instruction add button in campus page")
    browser.pause(4000)
})

When(/^I click add custom field button$/, function(){
    browser.pause(2000)
    action.clickElement(campusDetailsPage.customizedFieldAddLink,"Customized field add link in campus page")
    browser.pause(2000)
})

When(/^I enter field name "(.*)"$/, function(name){
    action.enterValue(campusDetailsPage.fieldNameInput,name,"Field name text box in campus page")
})

When(/^I click custom field add button$/, function(){
    action.clickElement(campusDetailsPage.customizedFieldAddButton,"Customized field add button in campus page")
    browser.pause(2000)
})

Then(/^I verify custom field is added "(.*)"$/, function(name){
    var tlength= campusDetailsPage.customizedFieldTableRows.length
    var temp_name= campusDetailsPage.customizedFieldTableRows[tlength-1].$$('td')[0].getText()
    //verify custom field name
    chai.expect(temp_name==name).to.be.true
})

Then(/^I delete added custom field$/, function(){
    action.clickElement(campusDetailsPage.customizedFieldRemoveButton,"Customized field remove button in campus page")
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
    action.clickElement(campusDetailsPage.removeCommonInstructionButton,"Remove common instruction button in campus page")
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
    action.clickElement(campusDetailsPage.naatiLevelOverrideItems[naatiLength-1],"NAATI level override items in campus page")
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
    action.clickElement(campusDetailsPage.naatiLevelOverrideTables[tlength-1].$('//*[@class="fa fa-fw fa-trash-o fa-lg"]'),"Naati levels override table trash in campus page")
    browser.pause(2000)
    browser.acceptAlert()
    browser.pause(2000)
})

Then(/^I verify travel rate section is present$/, function(){
    chai.expect(action.elementExists(campusDetailsPage.travelRatesHeader,"Travel rates header in campus page")).to.be.true
    chai.expect(action.elementExists(campusDetailsPage.includedTravelHeader,"Included travel header in campus page")).to.be.true
    chai.expect(action.elementExists(campusDetailsPage.hourlyFeeHeader,"Hourly fee header in campus page")).to.be.true
    chai.expect(action.elementExists(campusDetailsPage.distanceFeeHeader,"Distance fee header in campus page")).to.be.true

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
    action.clickElement(campusDetailsPage.noteRemoveLink[removeLength-1],"Note remove link in campus page")
})

Then(/^I verify dimension cloud "(.*)" is present$/, function(dimension){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.dimensionCloudHeader,"Dimension cloud header in campus page")).to.be.true
    chai.expect(action.elementExists($('//span[contains(text(),"'+dimension+'")]')))
    // check if the recently added tag is present. its the last tag of the list
    var tagItemsLength= campusDetailsPage.dimensionCloudTags.length
    chai.expect(action.elementExists(campusDetailsPage.dimensionCloudTags[tagItemsLength-1],"Dimension cloud tags in campus page"))
})

Then(/^I delete the added dimension tag$/, function(){
    var tagDeleteButtonsLength = campusDetailsPage.dimensionCloudDeleteButtons.length
    //click the last delete button to delete the last added dimension cloud
    action.clickElement(campusDetailsPage.dimensionCloudDeleteButtons[tagDeleteButtonsLength-1],"Dimension cloud delete buttons in campus page")
})

Then(/^I verify vaccination "(.*)" is present$/, function(vaccination){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.hepatitisBVaccination),"hepatitis B vaccination in campus page").to.be.true
})

Then(/^I verify gender preference section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.genderPreferenceSection),"Gender preferences section in campus page").to.be.true
})

Then(/^I verify police check preference section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.policeCheckPreferenceSection),"Police check preferences section in campus page").to.be.true
})

Then(/^I verify working with children preference section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.workingWithChildrenPreferenceSection),"Working with children preference section").to.be.true
})

Then(/^I verify campus name "(.*)"$/,function(campusname){
    browser.pause(10000)
    chai.expect(campusDetailsPage.campusNameText.getText()==campusname).to.be.true
})

Then(/^I verify manage campus fields are present$/,function(){
    //chai.expect(action.elementExists(accountManagementPage.campusAddressInput)).to.be.true
    chai.expect(action.elementExists(accountManagementPage.address2Input),"Address 2 text box in campus page").to.be.true

   // chai.expect(action.elementExists(accountManagementPage.postalAddressInput)).to.be.true
    chai.expect(action.elementExists(accountManagementPage.postalAddress2Input),"Postal address 2 text box in campus page").to.be.true
    chai.expect(action.elementExists(accountManagementPage.campusNameInput),"Campus name text box in campus page").to.be.true
    chai.expect(action.elementExists(accountManagementPage.campusABNInput),"Campus ABN text box in campus page").to.be.true
    chai.expect(action.elementExists(accountManagementPage.companyNameInput),"Company name text box in campus page").to.be.true
    chai.expect(action.elementExists(accountManagementPage.PONumberInput),"PO number text box in campus page").to.be.true
    chai.expect(action.elementExists(accountManagementPage.campusStatusDropdown),"Campus status dropdown in campus page").to.be.true
    chai.expect(action.elementExists(accountManagementPage.businessTypesDropdown),"Business type dropdown in campus page").to.be.true
    chai.expect(action.elementExists(accountManagementPage.tradingNameInput),"Trading name text box in campus page").to.be.true
    chai.expect(action.elementExists(accountManagementPage.chargeGSTCheckbox),"Charge GST checkbox in campus page").to.be.true

})

Then(/^I verify the onsite contract section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.contractRatesOnSiteHeader,"Contract Rates on site header in campus page")).to.be.true
    action.clickElement(campusDetailsPage.contractRatesOnSiteHeader,"Contract Rates on site header in campus page")
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.contractRatesOnSiteTable,"Contract Rates on site table in campus page")).to.be.true
    browser.pause(2000)
    action.clickElement(campusDetailsPage.contractRatesOnSiteHeader,"Contract Rates on site header in campus page")
})

Then(/^I verify the prebooked ti contract section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.contractRatesPrebookedTIHeader,"Contract Rates on site prebooked TI header in campus page")).to.be.true
    action.clickElement(campusDetailsPage.contractRatesPrebookedTIHeader,"Contract Rates on site prebooked TI header in campus page")
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.contractRatesPrebookedTITable,"Contract Rates on site prebooked TI table in campus page")).to.be.true
    browser.pause(2000)
    action.clickElement(campusDetailsPage.contractRatesPrebookedTIHeader,"Contract Rates on site prebooked TI header in campus page")
})

Then(/^I verify the prebooked video contract section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.contractRatesPrebookedVideoHeader,"Contract Rates on site prebooked Video header in campus page")).to.be.true
    action.clickElement(campusDetailsPage.contractRatesPrebookedVideoHeader,"Contract Rates on site prebooked Video header in campus page")
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.contractRatesPrebookedVideoTable,"Contract Rates on site prebooked Video table in campus page")).to.be.true
    browser.pause(2000)
    action.clickElement(campusDetailsPage.contractRatesPrebookedVideoHeader,"Contract Rates on site prebooked Video header in campus page")
})

Then(/^I verify bill to contract section is present$/,function(){
    browser.pause(2000)
    chai.expect(action.elementExists(campusDetailsPage.billToDetailsHeading,"Bill to details heading in campus page")).to.be.true
    chai.expect(action.elementExists(campusDetailsPage.billToDetailsTable,"Bill to details table in campus page")).to.be.true

})

When(/^They select the plus icon$/, function(){
    GlobalData.TAGS_COUNT_BEFORE_CANCEL = accountManagementPage.dimensionTagsCount
    action.isVisibleWait(accountManagementPage.dimensionTagPlusIcon,10000,"Dimension tag plus icon in campus page")
    action.clickElement(accountManagementPage.dimensionTagPlusIcon,"Dimension tag plus icon in campus page")
})

When(/^Open the Dimension list dropdown$/, function(){
    action.elementExists(accountManagementPage.dimensionListDropdown,10000,"Dimension list dropdown in campus page")
    action.isClickableWait(accountManagementPage.dimensionListDropdown,10000,"Dimension list dropdown in campus page")
    action.clickElement(accountManagementPage.dimensionListDropdown,"Dimension list dropdown in campus page")
})

When(/^Selects the "(.*)" dimension list option$/, function(dimensionListOption){
    action.isClickableWait(accountManagementPage.dimensionListDropdown,10000,"Dimension list dropdown in campus page")
    action.selectTextFromDropdown(accountManagementPage.dimensionListDropdown,dimensionListOption,"Dimension list dropdown in campus page")
})

Then(/^They will see the new short codes$/,function(){
    accountManagementPage.selectAValueDropdownOptionsList.waitForExist();
    action.isVisibleWait(accountManagementPage.selectAValueDropdownOptionsList,"Select a value dropdown option list in campus page")
    let shortCodeListOptionsCount = accountManagementPage.selectAValueDropdownOptionsListCount
    GlobalData.SHORT_CODE_OPTIONS = [];
    GlobalData.SHORT_CODE_OPTIONS_INITIALS = [];
    for (let optionIndex=1; optionIndex<=shortCodeListOptionsCount; optionIndex++){
        let shortCodeListOptionElement = $(accountManagementPage.selectAValueListOptionLocator.replace("<dynamic>",optionIndex.toString()));
        action.isVisibleWait(action.getElementText(shortCodeListOptionElement,"Select a value dropdown list option in campus page"))
        GlobalData.SHORT_CODE_OPTIONS.push(action.getElementText(shortCodeListOptionElement,"Select a value dropdown list option in campus page"))
        GlobalData.SHORT_CODE_OPTIONS_INITIALS.push(GlobalData.SHORT_CODE_OPTIONS[optionIndex - 1].toString().charAt(0))
    }
    chai.expect(shortCodeListOptionsCount).to.equal(GlobalData.SHORT_CODE_OPTIONS.length)
    chai.expect(shortCodeListOptionsCount).to.equal(GlobalData.SHORT_CODE_OPTIONS_INITIALS.length)
})

Then(/^The new short codes will appear at the top of the list in alphabetical order A-Z$/,function(){
    let shortCodeOptionsOrderedList = [...GlobalData.SHORT_CODE_OPTIONS].sort()
    chai.expect(GlobalData.SHORT_CODE_OPTIONS).to.have.members(shortCodeOptionsOrderedList)
    let shortCodeOptionsOrderedInitials = [...GlobalData.SHORT_CODE_OPTIONS_INITIALS].sort()
    chai.expect(GlobalData.SHORT_CODE_OPTIONS_INITIALS).to.have.ordered.members(shortCodeOptionsOrderedInitials)
})

When(/^They select a value "(.*)" from the select a value dropdown$/, function(shortCodeOptionValue){
    action.isVisibleWait(accountManagementPage.shortCodeListDropdown,10000,"Short code list dropdown list option in campus page")
    let dimensionListOptionValueElement = $(accountManagementPage.selectAValueListOptionTextLocator.replace("<dynamic>",shortCodeOptionValue))
    action.waitForElementExist(dimensionListOptionValueElement,10000,false,"Short code option-"+shortCodeOptionValue+" does not exist",500)
    action.selectTextFromDropdown(accountManagementPage.shortCodeListDropdown,shortCodeOptionValue,"Short code list dropdown in campus page")
})

Then(/^The tag "(.*)","(.*)" will be added in the Dimension Tag Cloud section$/,function(dimensionListOption,optionValue){
    let tagElement = $(accountManagementPage.tagLocator.replace("<dynamic1>",dimensionListOption).replace("<dynamic2>",optionValue))
    let tagVisibleStatus = action.isVisibleWait(tagElement,10000,"Dimension Tag in campus page");
    GlobalData.TAGS_COUNT_AFTER_ADD = accountManagementPage.dimensionTagsCount
    chai.expect(tagVisibleStatus).to.be.true;
})

Then(/^They will see the "(.*)" dimension list option$/,function(budgetCodeOption){
    let budgetCodeOptionElement = $(accountManagementPage.dimensionListOptionLocator.replace("<dynamic>",budgetCodeOption));
    let budgetCodeOptionVisibleStatus = action.isVisibleWait(budgetCodeOptionElement,10000,"Budget code in campus page");
    chai.expect(budgetCodeOptionVisibleStatus).to.be.true;
})

When(/^They select the red cross x on the tag "(.*)","(.*)"$/, function(dimensionListOption,optionValue){
    let dimensionTagDeleteCrossIconElement = $(accountManagementPage.dimensionTagDeleteCrossIcon.replace("<dynamic1>",dimensionListOption).replace("<dynamic2>",optionValue))
    let tagClickable = action.isClickableWait(dimensionTagDeleteCrossIconElement,10000,"Dimension Tag delete cross icon in campus page")
    action.clickElement(dimensionTagDeleteCrossIconElement,"Dimension Tag delete cross icon in campus page")
    dimensionTagDeleteCrossIconElement.waitForExist({ timeout:10000, reverse:true, timeoutMsg:"the tag is not deleted within timeout", interval :500 })
})

When(/^They add the "(.*)" list option dimension$/, function(dimensionListOption){
    action.isClickableWait(accountManagementPage.dimensionListDropdown,10000,"Dimension list dropdown in campus page")
    action.selectTextFromDropdown(accountManagementPage.dimensionListDropdown,dimensionListOption,"Dimension list dropdown in campus page")
})

Then(/^They will be able to see the list of Budget Code values$/,function(){
    accountManagementPage.selectAValueDropdownOptionsList.waitForExist();
    action.isVisibleWait(accountManagementPage.selectAValueDropdownOptionsList,"Select a value dropdown list options list in campus page")
    let budgetCodeListOptionsCount = accountManagementPage.selectAValueDropdownOptionsListCount
    GlobalData.BUDGET_CODE_OPTIONS = [];
    for (let optionIndex=1; optionIndex<=budgetCodeListOptionsCount; optionIndex++){
        let budgetCodeListOptionElement = $(accountManagementPage.selectAValueListOptionLocator.replace("<dynamic>",optionIndex.toString()));
        action.isVisibleWait(action.getElementText(budgetCodeListOptionElement,"Budget code list option in campus page"))
        GlobalData.BUDGET_CODE_OPTIONS.push(action.getElementText(budgetCodeListOptionElement,"Budget code list option in campus page"))
    }
    chai.expect(budgetCodeListOptionsCount).to.equal(GlobalData.BUDGET_CODE_OPTIONS.length)
})

When(/^They select a value "(.*)" from the Budget Code dropdown$/, function(budgetCodeOptionValue){
    action.isVisibleWait(accountManagementPage.dimensionListDropdown,10000)
    let dimensionListOptionValueElement = $(accountManagementPage.selectAValueListOptionTextLocator.replace("<dynamic>",budgetCodeOptionValue))
    action.waitForElementExist(dimensionListOptionValueElement,10000,false,"Short code option-"+budgetCodeOptionValue+" does not exist",500)
    action.selectTextFromDropdown(accountManagementPage.dimensionListDropdown,budgetCodeOptionValue,"Budget code option value in campus page")
})

When(/^The dimension dropdown is displayed$/, function(){
    let dimensionDropdownDisplayStatus = action.isVisibleWait(accountManagementPage.dimensionListDropdown,10000,"Dimension list dropdown  in campus page")
    chai.expect(dimensionDropdownDisplayStatus).to.be.true;
})

When(/^They select the x next to the dropdown$/, function(){
    action.isClickableWait(accountManagementPage.crossIconNextToDropdown,10000,"Cross icon next to dropdown in campus page")
    action.clickElement(accountManagementPage.crossIconNextToDropdown,"Cross icon next to dropdown in campus page")
    accountManagementPage.crossIconNextToDropdown.waitForExist({ timeout:10000, reverse:true, timeoutMsg:"the x icon is not removed within timeout", interval :500 })
})

Then(/^The adding of a dimension is cancelled$/,function(){
    let dimensionDropdownDisplayStatus = action.isVisibleWait(accountManagementPage.dimensionListDropdown,5000,"Dimension list dropdown in campus page");
    chai.expect(dimensionDropdownDisplayStatus).to.be.false;
})

Then(/^The tag will not be added to the Dimension Tag Cloud section$/,function(){
    let tagsCountAfterCancel = accountManagementPage.dimensionTagsCount
    chai.expect(tagsCountAfterCancel).to.equal(GlobalData.TAGS_COUNT_BEFORE_CANCEL)
})

Given(/^The Admin is viewing the Campus page$/,function(){
    let campusPageHeaderDisplayStatus = action.isVisibleWait(accountManagementPage.campusPageHeader,2000,"Campus page header");
    chai.expect(campusPageHeaderDisplayStatus).to.be.true;
})

Given(/^The Admin is viewing the Dimension Tag Cloud section$/,function(){
    let dimensionTagCloudSectionDisplayStatus = action.isVisibleWait(accountManagementPage.dimensionTagCloudSection,2000,"Dimension tag cloud section in campus page");
    chai.expect(dimensionTagCloudSectionDisplayStatus).to.be.true;
})

Given(/^The select a value dropdown is displayed$/, function(){
    let selectAValueDropdownDisplayStatus = action.isVisibleWait(accountManagementPage.selectAValueDropdown,10000,"Select A value dropdown in campus page")
    chai.expect(selectAValueDropdownDisplayStatus).to.be.true;
})

Then(/^The tag will be deleted$/,function(){
    let tagsCountAfterDelete = accountManagementPage.dimensionTagsCount
    chai.assert.isBelow(tagsCountAfterDelete,parseInt(GlobalData.TAGS_COUNT_AFTER_ADD),'Expected tags after delete-'+tagsCountAfterDelete+' is strictly less than-'+GlobalData.TAGS_COUNT_AFTER_ADD)
})

Then(/^The tag "(.*)","(.*)" will not be visible in the Dimension Tag Cloud section$/,function(dimensionListOption,optionValue){
    let tagElement = $(accountManagementPage.tagLocator.replace("<dynamic1>",dimensionListOption).replace("<dynamic2>",optionValue))
    let tagVisibleStatus = action.isVisibleWait(tagElement,5000,"Dimension tag in campus page");
    chai.expect(tagVisibleStatus).to.be.false;
})

Given(/^The Admin is on the Campus Management page > Manage Campus popup$/, function(){
    action.clickElement(campusDetailsPage.manageCampusLink,"Manage campus link in campus page");
    let manageCampusPopupDisplayStatus = action.isVisibleWait(campusDetailsPage.manageCampusPopup,10000,"Manage campus popup in campus page");
    chai.expect(manageCampusPopupDisplayStatus).to.be.true;
})

Given(/^They click Assign Booking Officer > Add New User$/, function(){
    action.isVisibleWait(campusDetailsPage.assignBookingOfficerLink,10000,"Assign booking officer link in campus page")
    action.isClickableWait(campusDetailsPage.assignBookingOfficerLink,10000,"Assign booking officer link in campus page")
    action.clickElement(campusDetailsPage.assignBookingOfficerLink,"Assign booking officer link in campus page");
    action.isVisibleWait(campusDetailsPage.addNewUserButton,10000,"Add new user button in campus page");
    action.isClickableWait(campusDetailsPage.addNewUserButton,10000,"Add new user button in campus page");
    action.clickElement(campusDetailsPage.addNewUserButton,"Add new user button in campus page");
})

Given(/^Fill out all the required details "(.*)", email, "(.*)" on the Select User popup$/, function(firstName,landLineNumber){
    action.isVisibleWait(campusDetailsPage.firstNameFieldBookingOfficer,10000,"First name field booking officer in campus page");
    firstName = firstName + (Math.floor(Math.random() * 100000) + 1).toString()
    GlobalData.BOOKING_OFFICER_FIRSTNAME = firstName
    action.enterValue(campusDetailsPage.firstNameFieldBookingOfficer,GlobalData.BOOKING_OFFICER_FIRSTNAME,"First name field booking officer in campus page");
    let email = GlobalData.BOOKING_OFFICER_FIRSTNAME + "@ll.com"
    action.enterValue(campusDetailsPage.emailFieldBookingOfficer,email,"Email field booking officer in campus page");
    action.enterValue(campusDetailsPage.landLineNumberFieldBookingOfficer,landLineNumber,"Landline number field booking officer in campus page");
})

When(/^They click the Save button on the Select User popup$/,function(){
    action.isClickableWait(campusDetailsPage.saveButtonBookingOfficer,10000,"Save button booking officer in campus page");
    action.clickElement(campusDetailsPage.saveButtonBookingOfficer,"Save button booking officer in campus page");
})

Then(/^The user is created$/,function(){
    let assignBOLinkDisplayStatus = action.isVisibleWait(campusDetailsPage.assignBookingOfficerLink,20000,"Assign booking officer link in campus page");
    chai.expect(assignBOLinkDisplayStatus).to.be.true;
})

When(/^The booking officer popup is closed$/,function(){
    action.isVisibleWait(campusDetailsPage.bookingOfficerPopupCloseButton,10000,"Booking officer popup close button in campus page");
    action.isClickableWait(campusDetailsPage.bookingOfficerPopupCloseButton,10000,"Booking officer popup close button in campus page");
    action.clickElement(campusDetailsPage.bookingOfficerPopupCloseButton,"Booking officer popup close button in campus page");
})

Given(/^the Job Campus belongs to a certain BillTo "(.*)"$/,function(pinBillToCode){
    let campusPinBillToCodeLink = $(campusDetailsPage.campusPinBillToCodeLinkLocator.replace("<dynamic>",pinBillToCode));
    let campusPinBillToCodeLinkActualDisplayStatus = action.isVisibleWait(campusPinBillToCodeLink,10000,"Campus pin bill to code link in campus page");
    chai.expect(campusPinBillToCodeLinkActualDisplayStatus).to.be.true;
})

Then(/^the campuses "(.*)" should have the original short code "(.*)","(.*)" attached in Dimension Tag Cloud section$/, function (campus, dimensionListOption, optionValues) {
    let campusList = campus.split(",");
    let optionValuesList = optionValues.split(",");
    for (let optionIndex = 0; optionIndex < optionValuesList.length; optionIndex++) {
        action.isVisibleWait(homePage.accountManagementLink, 20000,"Account management link in campus page");
        action.clickElement(homePage.accountManagementLink,"Account management link in campus page")
        action.isVisibleWait(accountManagementPage.searchCampusInput, 20000,"Search campus text box in campus page");
        action.enterValueAndPressReturn(accountManagementPage.searchCampusInput, campusList[optionIndex],"Search campus text box in campus page");
        action.pressKeys("Tab");
        action.waitUntilLoadingIconDisappears();
        action.isVisibleWait(accountManagementPage.firstCampusLink, 20000,"First campus link in campus page");
        action.clickElement(accountManagementPage.firstCampusLink,"First campus link in campus page");
        let dimensionTagCloudSectionDisplayStatus = action.isVisibleWait(accountManagementPage.dimensionTagCloudSection, 2000,"Dimension tag cloud section in campus page");
        chai.expect(dimensionTagCloudSectionDisplayStatus).to.be.true;
        let tagElement = $(accountManagementPage.tagLocator.replace("<dynamic1>", dimensionListOption).replace("<dynamic2>", optionValuesList[optionIndex]));
        let tagVisibleStatus = action.isVisibleWait(tagElement, 10000,"Dimension tag in campus page");
        chai.expect(tagVisibleStatus).to.be.true;
    }
})

Then(/^the campuses "(.*)" list should contain the new dimension called "(.*)"$/, function (campus, dimensionListOption) {
    let campusList = campus.split(",");
    for (let optionIndex = 0; optionIndex < campusList.length; optionIndex++) {
        action.isVisibleWait(homePage.accountManagementLink, 20000,"Account management link in campus page");
        action.clickElement(homePage.accountManagementLink,"Account management link in campus page")
        action.isVisibleWait(accountManagementPage.searchCampusInput, 20000,"Search campus text box in campus page");
        action.enterValueAndPressReturn(accountManagementPage.searchCampusInput, campusList[optionIndex],"Search campus text box in campus page");
        action.pressKeys("Tab");
        action.waitUntilLoadingIconDisappears();
        action.isVisibleWait(accountManagementPage.firstCampusLink, 20000,"First campus link in campus page");
        action.clickElement(accountManagementPage.firstCampusLink,"First campus link in campus page");
        action.isVisibleWait(accountManagementPage.dimensionTagPlusIcon, 10000,"Dimension tag plus icon in campus page");
        action.clickElement(accountManagementPage.dimensionTagPlusIcon,"Dimension tag plus icon in campus page");
        let dimensionListOptionElement = $(accountManagementPage.dimensionListOptionLocator.replace("<dynamic>", dimensionListOption));
        let dimensionListOptionVisibleStatus = action.isVisibleWait(dimensionListOptionElement, 10000,"Dimension list option in campus page");
        chai.expect(dimensionListOptionVisibleStatus).to.be.true;
    }
})

When(/^the dimension dropdown list has X icon beside the dropdown$/, function(){
    let xIconDisplayStatus = action.isVisibleWait(accountManagementPage.crossIconNextToDropdown,10000,"Cross icon next to dropdown in campus page");
    chai.expect(xIconDisplayStatus).to.be.true;
})

When(/^there should not be any plus icon displayed and multiple dimensions cannot be added simultaneously$/, function(){
    let plusIconDisplayStatus = action.isVisibleWait(accountManagementPage.dimensionTagPlusIcon,10000,"Dimension tag plus icon in campus page");
    chai.expect(plusIconDisplayStatus).to.be.false;
})

Then(/^select a value dropdown options should not have any value with zzz- prefix in dropdown$/,function(){
    chai.expect(GlobalData.SHORT_CODE_OPTIONS).to.not.includes("zzz-");
})

Then(/^I click on the above dimension created "(.*)","(.*)"$/,function(dimensionListOption,optionValue){
    let tagElement = $(accountManagementPage.tagLocator.replace("<dynamic1>",dimensionListOption).replace("<dynamic2>",optionValue))
    action.clickElement(tagElement);
})

Then(/^the dimension "(.*)","(.*)" is not clickable, it should be readable only$/,function(dimensionListOption,optionValue){
    let tagElement = $(accountManagementPage.tagLocator.replace("<dynamic1>",dimensionListOption).replace("<dynamic2>",optionValue))
    let dimensionOptionTag = action.getElementTagName(tagElement,"Dimension tag in campus page");
    chai.expect(dimensionOptionTag).to.not.equal("a");
})

Then(/^they will be navigated to the Campus page$/, function () {
    action.navigateToLatestWindow();
    action.isVisibleWait(accountManagementPage.campusPageHeader,30000,"Campus page header");
    let pageTitleActual = action.getPageTitle().trim();
    chai.expect(pageTitleActual).to.equal("CampusDetails");
})

Then(/^this preference "(.*)" is inherited by the Campus$/, function (preference) {
    let campusOptionElement = $(campusDetailsPage.campusPreferenceSelectedOptionLocator.replace("<dynamic>",preference));
    let campusOptionSelectedStatus = action.isSelectedWait(campusOptionElement,10000,"Campus preference option " + preference + " in campus page");
    chai.expect(campusOptionSelectedStatus).to.be.true;
})

When(/^they click Add preference button in Campus Details$/, function () {
    action.isVisibleWait(campusDetailsPage.campusAddPreferenceLink, 10000,"Campus add preference link in campus page");
    action.clickElement(campusDetailsPage.campusAddPreferenceLink,"Campus add preference link in campus page");
})

When(/^click the Preference Type dropdown in Campus Details$/, function () {
    action.isVisibleWait(campusDetailsPage.campusPreferenceTypeDropdown, 10000,"Campus preference type dropdown in campus page");
    action.clickElement(campusDetailsPage.campusPreferenceTypeDropdown,"Campus preference type dropdown in campus page");
})

Then(/^they will see an ODTI gender preference option with the label "(.*)" in Campus Details$/, function (optionLabel) {
    let preferenceTypeDropdownOptionElement = $(campusDetailsPage.campusPreferenceTypeDropdownOptionLocator.replace("<dynamicOption>", optionLabel));
    let ODTIGenderPreferenceOptionDisplayStatus = action.isVisibleWait(preferenceTypeDropdownOptionElement, 10000,"Campus preference type dropdown option in campus page");
    chai.expect(ODTIGenderPreferenceOptionDisplayStatus).to.be.true;
})

Then(/^this option "(.*)" will appear under the Gender option in Campus Details$/, function (optionLabel) {
    let preferenceTypeDropdownOptionSiblingElement = $(campusDetailsPage.campusPreferenceTypeDropdownOptionSiblingLocator.replace("<dynamicOption1>", "Gender").replace("<dynamicOption2>", optionLabel));
    let optionUnderGenderOptionExistStatus = action.isExistingWait(preferenceTypeDropdownOptionSiblingElement, 10000,"Campus preference type dropdown option sibling in campus page");
    chai.expect(optionUnderGenderOptionExistStatus).to.be.true;
})

Then(/^they can select this option "(.*)" in Campus Details$/, function (optionLabel) {
    action.selectTextFromDropdown(campusDetailsPage.campusPreferenceTypeDropdown, optionLabel,"Campus preference type dropdown in campus page");
    let preferenceTypeDropdownOptionElement = $(campusDetailsPage.campusPreferenceTypeDropdownOptionLocator.replace("<dynamicOption>", optionLabel));
    let optionSelectedStatus = action.isSelectedWait(preferenceTypeDropdownOptionElement, 10000,"Campus preference type dropdown option " + optionLabel + " in campus page");
    chai.expect(optionSelectedStatus).to.be.true;
})

When(/^they select preference option "(.*)" in Campus Details$/, function (option) {
    action.isVisibleWait(campusDetailsPage.campusPreferenceDropdown,20000,"Campus preference dropdown in campus page");
    action.selectTextFromDropdown(campusDetailsPage.campusPreferenceDropdown, option,"Campus preference dropdown option " + option + " in campus page");
})

When(/^they remove added preference type option "(.*)" in Campus Details$/, function (optionLabel) {
    let preferenceTypeRemoveIconElement = $(campusDetailsPage.campusPreferenceTypeRemoveIconLocator.replace("<dynamicOption>", optionLabel));
    action.isVisibleWait(preferenceTypeRemoveIconElement,20000,"Preference type remove icon in campus page");
    action.clickElement(preferenceTypeRemoveIconElement,"Preference type remove icon in campus page");
    action.isNotVisibleWait(preferenceTypeRemoveIconElement,20000,"Preference type remove icon in campus page");
})

When(/^they click save Contract Preference button in Campus Details/, function () {
    action.isVisibleWait(campusDetailsPage.saveCampusPreferenceButton, 10000,"Save campus preference button in campus page");
    action.clickElement(campusDetailsPage.saveCampusPreferenceButton,"Save campus preference button in campus page");
})

When(/^preference inherited from the Contract can be overridden "(.*)" on the Campus level$/, function (option) {
    action.isVisibleWait(campusDetailsPage.campusGenderODTIDropdown,20000,"Campus gender ODTI dropdown in campus page");
    action.selectTextFromDropdown(campusDetailsPage.campusGenderODTIDropdown, option,"Campus gender ODTI dropdown in campus page");
    let campusGenderODTIDropdownOptionLocatorElement = $(campusDetailsPage.campusGenderODTIDropdownOptionLocator.replace("<dynamicOption>", option));
    let optionSelectedStatus = action.isSelectedWait(campusGenderODTIDropdownOptionLocatorElement, 10000,"Campus gender ODTI dropdown option in campus page");
    chai.expect(optionSelectedStatus).to.be.true;
})

Then(/^the preference is added for the Campus$/, function () {
    let genderODTIPreferenceAddedDisplayStatus = action.isVisibleWait(campusDetailsPage.campusGenderODTIPreferenceAdded, 10000,"Campus gender ODTI preference added in campus page");
    chai.expect(genderODTIPreferenceAddedDisplayStatus).to.be.true;
})

When(/^this preference "(.*)" will have delete icon as this created by campus$/, function (optionLabel) {
    let preferenceTypeRemoveIconElement = $(campusDetailsPage.campusPreferenceTypeRemoveIconLocator.replace("<dynamicOption>", optionLabel));
    let preferenceTypeRemoveIconDisplayStatus = action.isVisibleWait(preferenceTypeRemoveIconElement,20000,"Preference type remove icon in campus page");
    chai.expect(preferenceTypeRemoveIconDisplayStatus).to.be.true;
})

Then(/^we see the reset option on the right corner and the text Customized appears$/, function () {
    let preferenceTypeResetIconDisplayStatus = action.isVisibleWait(campusDetailsPage.campusODTIPreferenceTypeResetIcon,20000,"Campus ODTI preference type reset icon in campus page");
    chai.expect(preferenceTypeResetIconDisplayStatus).to.be.true;
    let preferenceTypeCustomisedTextDisplayStatus = action.isVisibleWait(campusDetailsPage.campusODTIPreferenceTypeCustomisedText,20000,"Campus ODTI preference type customized text in campus page");
    chai.expect(preferenceTypeCustomisedTextDisplayStatus).to.be.true;
})

When(/^no delete button exists for the "(.*)" block in Campus Details$/, function (optionLabel) {
    let preferenceTypeRemoveIconElement = $(campusDetailsPage.campusPreferenceTypeRemoveIconLocator.replace("<dynamicOption>", optionLabel));
    let ODTIGenderDeleteButtonDisplayStatus = action.isVisibleWait(preferenceTypeRemoveIconElement,2000,"Preference type remove icon in campus page");
    chai.expect(ODTIGenderDeleteButtonDisplayStatus).to.be.false;
})

When(/^they add a block on a contractor or interpreter "(.*)"$/, function (contractorNameId) {
    action.isVisibleWait(campusDetailsPage.addABlockLink, 10000,"Add a block link in campus page");
    action.clickElement(campusDetailsPage.addABlockLink,"Add a block link in campus page");
    action.isVisibleWait(campusDetailsPage.searchByContractorNameAndIdTextBox, 10000,"Search by contractor name and ID text box in campus page");
    action.enterValue(campusDetailsPage.searchByContractorNameAndIdTextBox,contractorNameId,"Search by contractor name and ID text box in campus page");
    let contractorResultCheckboxElement = $(campusDetailsPage.contractorResultCheckboxLocator.replace("<dynamic>",contractorNameId));
    action.isVisibleWait(contractorResultCheckboxElement,10000,"Contractor result checkbox in campus page");
    action.clickElement(contractorResultCheckboxElement,"Contractor result checkbox in campus page");
    action.selectTextFromDropdown(campusDetailsPage.contractorSeverityDropdown, "Level","Contractor Severity dropdown in campus page");
    action.enterValue(campusDetailsPage.startDateContractor, "16-04-2023","Start date contractor in campus page");
    action.enterValue(campusDetailsPage.endDateContractor, datetime.getRandomFutureDate(),"End date contractor in campus page");
    action.pressKeys("Tab");
    action.isVisibleWait(campusDetailsPage.addBlockButton, 10000,"Add block button in campus page");
    action.clickElement(campusDetailsPage.addBlockButton,"Add block button in campus page");
    action.isNotVisibleWait(campusDetailsPage.addBlockButton, 10000,"Add block button in campus page");
})

Then(/^the admin clicks on Remove on campus blocker$/, function () {
    let rule = 0;
    while (action.isVisibleWait(campusDetailsPage.newBlockRuleLinksToggleIcon, 1000,"New block rule links toggle icon in campus page") === true) {
        action.isVisibleWait(campusDetailsPage.newBlockRuleLinksToggleIcon, 10000,"New block rule links toggle icon in campus page");
        action.clickElement(campusDetailsPage.newBlockRuleLinksToggleIcon,"New block rule links toggle icon in campus page");
        action.isVisibleWait(campusDetailsPage.newBlockRuleLinksRemove, 10000,"New block rule links remove in campus page");
        action.clickElement(campusDetailsPage.newBlockRuleLinksRemove,"New block rule links remove in campus page");
        browser.pause(3000);
        rule++
    }
})

When(/^the user is on the Organisation page$/, function () {
    action.isVisibleWait(campusDetailsPage.campusOrganizationLink,10000,"Campus organization link in campus page");
    action.clickElement(campusDetailsPage.campusOrganizationLink,"Campus organization link in campus page");
})

When(/^user makes the block "(.*)" as expired by adding past date to Date Finished field on Campus page or the Contractor page$/, function (blockName) {
    let activeBlockerLinkElement = $(campusDetailsPage.activeBlockerLinkLocator.replace("<dynamic>", blockName));
    action.isVisibleWait(activeBlockerLinkElement, 10000,"Active blocker link in campus page");
    action.clickElement(activeBlockerLinkElement,"Active blocker link in campus page");
    action.enterValue(campusDetailsPage.endDateContractor, "17-04-2023","End date contractor in campus page");
    action.pressKeys("Tab");
    action.isVisibleWait(campusDetailsPage.saveButtonOnBlockingPopup, 10000,"Save button on blocking popup in campus page");
    action.clickElement(campusDetailsPage.saveButtonOnBlockingPopup,"Save button on blocking popup in campus page");
    action.isNotVisibleWait(campusDetailsPage.saveButtonOnBlockingPopup, 10000,"Save button on blocking popup in campus page");
})

When(/^I click on Show Expired toggle in campus page$/, function () {
    action.isVisibleWait(campusDetailsPage.showExpiredBlocksToggleCheck, 10000,"Show expired blocks toggle check in campus page");
    action.clickElement(campusDetailsPage.showExpiredBlocksToggleCheck,"Show expired blocks toggle check in campus page");
})

Then(/^the Customised field will be inherited by the Campus$/, function () {
    let customisedFieldOverrideLink = $(campusDetailsPage.customisedFieldsOverrideLinkLocator.replace("<dynamic>",GlobalData.CUSTOMISED_FIELD_NAME));
    let customisedFieldOverrideLinkDisplayStatus = action.isVisibleWait(customisedFieldOverrideLink,10000,"Customized field override link in campus page");
    chai.expect(customisedFieldOverrideLinkDisplayStatus).to.be.true;
})

Then(/^the Customised field can be overridden on the Campus page$/, function () {
    let customisedFieldOverrideLink = $(campusDetailsPage.customisedFieldsOverrideLinkLocator.replace("<dynamic>",GlobalData.CUSTOMISED_FIELD_NAME));
    action.clickElement(customisedFieldOverrideLink,"Customized field override link in campus page");
    let overrideCampusDataButtonOnManageCustomisedFieldDisplayStatus = action.isVisibleWait(campusDetailsPage.overrideCampusDataButtonOnManageCustomisedField,10000);
    chai.expect(overrideCampusDataButtonOnManageCustomisedFieldDisplayStatus).to.be.true;
    action.clickElement(campusDetailsPage.overrideCampusDataButtonOnManageCustomisedField,"Override campus data button on manage customized field in campus page");
})

When(/^they click add Customised Field$/, function () {
    action.isVisibleWait(campusDetailsPage.addCustomizedFieldLink, 10000,"Add Customized field link in campus page");
    action.clickElement(campusDetailsPage.addCustomizedFieldLink,"Add Customized field link in campus page");
})

When(/^the Manage Customised Field modal is displayed$/, function () {
    let manageCustomizedFieldModalDisplayStatus = action.isVisibleWait(campusDetailsPage.manageCustomizedFieldModal, 10000,"Manage Customized field modal in campus page");
    chai.expect(manageCustomizedFieldModalDisplayStatus).to.be.true;
})

Then(/^they will see the ‘Audible in ODTI’ checkbox$/, function () {
    let audibleInODTICheckboxDisplayStatus = action.isVisibleWait(campusDetailsPage.audibleInODTICheckboxOnManageCustomizedField, 10000,"Audible in ODTI checkbox on manage customized field in campus page");
    chai.expect(audibleInODTICheckboxDisplayStatus).to.be.true;
})

When(/^the letters ‘ODTI’ will be a hyperlink$/, function () {
    let audibleInODTICheckboxODTIHyperlinkClass = action.getElementAttribute(campusDetailsPage.audibleInODTICheckboxODTIHyperlink, "class","Audible in ODTI checkbox ODTI hyperlink in campus page");
    chai.expect(audibleInODTICheckboxODTIHyperlinkClass).to.includes("Link")
})

When(/^they hover over the text ‘ODTI’$/, function () {
    action.isVisibleWait(campusDetailsPage.audibleInODTICheckboxODTIHyperlink, 10000,"Audible in ODTI checkbox ODTI hyperlink in campus page");
    browser.execute((el) => {
        const hoverEvent = new MouseEvent('mouseover', {
            bubbles: true,
            cancelable: true,
            view: window
        });
        el.dispatchEvent(hoverEvent);
    }, campusDetailsPage.audibleInODTICheckboxODTIHyperlink);
})

Then(/^a tooltip will display with the following text: On Demand Telephone Interpreting$/, function () {
    let onDemandTelephoneInterpretingTextOnTooltipExistStatus = action.isExistingWait(campusDetailsPage.onDemandTelephoneInterpretingTextOnTooltip, 3000,"On Demand Telephone Interpreting text on tool tip in campus page");
    chai.expect(onDemandTelephoneInterpretingTextOnTooltipExistStatus).to.be.true;
})

When(/^they select ‘Audible in ODTI’ checkbox$/, function () {
    action.isVisibleWait(campusDetailsPage.audibleInODTICheckboxOnManageCustomizedField, 10000,"Audible in ODTI checkbox on manage customized field in campus page");
    action.clickElement(campusDetailsPage.audibleInODTICheckboxOnManageCustomizedField,"Audible in ODTI checkbox on manage customized field in campus page");
})

Then(/^the Max Length and Audio-label fields will display$/, function () {
    let maxLengthTextBoxDisplayStatus = action.isVisibleWait(campusDetailsPage.maxLengthTextBoxOnManageCustomizedField, 10000,"Max length text box on manage customized field in campus page");
    chai.expect(maxLengthTextBoxDisplayStatus).to.be.true;
    let audioLabelTextBoxDisplayStatus = action.isVisibleWait(campusDetailsPage.audioLabelTextBoxOnManageCustomizedField, 10000,"Audio label text box on manage customized field in campus page");
    chai.expect(audioLabelTextBoxDisplayStatus).to.be.true;
})

Then(/^the Max Length and Audio-label fields will be mandatory$/, function () {
    let maxLengthFieldLabelClass = action.getElementAttribute(campusDetailsPage.maxLengthFieldLabelOnManageCustomizedField,"class","Max length field label on manage customized field in campus page");
    chai.expect(maxLengthFieldLabelClass).to.includes("MandatoryLabel");
    let audioLabelFieldLabelClass = action.getElementAttribute(campusDetailsPage.audioLabelFieldLabelOnManageCustomizedField,"class","Audio label field label on manage customized field in campus page");
    chai.expect(audioLabelFieldLabelClass).to.includes("MandatoryLabel");
})

When(/^the Admin enters Customised ODTI Field data "(.*)","(.*)","(.*)" in campus$/, function (fieldName, maxLength, audioLabel) {
    GlobalData.CUSTOMISED_FIELD_NAME = fieldName + (Math.floor(Math.random() * 100000) + 1).toString();
    action.enterValue(campusDetailsPage.fieldNameTextBoxOnManageCustomizedField,GlobalData.CUSTOMISED_FIELD_NAME,"Field name text box on manage customized field in campus page");
    action.clickElement(campusDetailsPage.freeTextRadioButtonOnManageCustomizedField,"Free text radio button on manage customized field in campus page");
    action.isVisibleWait(campusDetailsPage.maxLengthTextBoxOnManageCustomizedField,20000,"Max length text box on manage customized field in campus page");
    action.enterValue(campusDetailsPage.maxLengthTextBoxOnManageCustomizedField,maxLength,"Max length text box on manage customized field in campus page");
    action.enterValue(campusDetailsPage.audioLabelTextBoxOnManageCustomizedField,audioLabel,"Audio label text box on manage customized field in campus page");
})

When(/^the Admin clicks the ‘Add’ button On Manage Customized Field$/, function () {
    action.isVisibleWait(campusDetailsPage.addButtonOnManageCustomizedField,10000,"Add button on manage customized field in campus page");
    action.clickElement(campusDetailsPage.addButtonOnManageCustomizedField,"Add button on manage customized field in campus page");
})

Then(/^the customised field will be created$/, function () {
    let customisedFieldOverrideLink = $(campusDetailsPage.customisedFieldsOverrideLinkLocator.replace("<dynamic>",GlobalData.CUSTOMISED_FIELD_NAME));
    let customisedFieldOverrideLinkDisplayStatus = action.isVisibleWait(customisedFieldOverrideLink,10000,"Customized field override link in campus page");
    chai.expect(customisedFieldOverrideLinkDisplayStatus).to.be.true;
})

Then(/^there is a checkbox checked for the above custom field under the column Audible in ODTI$/, function () {
    let customisedFieldsOverrideAudibleInODTICheckbox = $(campusDetailsPage.customisedFieldsOverrideAudibleInODTICheckboxLocator.replace("<dynamic>",GlobalData.CUSTOMISED_FIELD_NAME));
    let customisedFieldsOverrideAudibleInODTICheckboxSelectedStatus = action.isSelectedWait(customisedFieldsOverrideAudibleInODTICheckbox,10000,"Customized field override Audible in ODTI checkbox in campus page");
    chai.expect(customisedFieldsOverrideAudibleInODTICheckboxSelectedStatus).to.be.true;
})

Then(/^I click on delete icon on Customised ODTI Field in Campus$/, function () {
    let customisedFieldDeleteIcon = $(campusDetailsPage.customisedFieldDeleteIconDynamicLocator.replace("<dynamic>", GlobalData.CUSTOMISED_FIELD_NAME));
    action.isVisibleWait(customisedFieldDeleteIcon, 10000,"Customized field delete icon in campus page");
    action.clickElement(customisedFieldDeleteIcon,"Customized field delete icon in campus page");
    action.getAlertText();
    action.acceptAlert();
    action.isNotVisibleWait(customisedFieldDeleteIcon, 10000,"Customized field delete icon in campus page");
})

Then(/^there is no data in the Max Length and Audio-label fields$/, function () {
    let maxLengthFieldLabelClass = action.getElementValue(campusDetailsPage.maxLengthTextBoxOnManageCustomizedField,"Max length text box on manage customized field in campus page");
    chai.expect(maxLengthFieldLabelClass).to.includes("0");
    let audioLabelFieldLabelClass = action.getElementValue(campusDetailsPage.audioLabelTextBoxOnManageCustomizedField,"Audio label text box on manage customized field in campus page");
    chai.expect(audioLabelFieldLabelClass).to.includes("");
})

When(/^the Admin enters Customised field name "(.*)" in campus$/, function (fieldName) {
    GlobalData.CUSTOMISED_FIELD_NAME = fieldName + (Math.floor(Math.random() * 100000) + 1).toString();
    action.enterValue(campusDetailsPage.fieldNameTextBoxOnManageCustomizedField,GlobalData.CUSTOMISED_FIELD_NAME,"Field name text box on manage customized field in campus page");
})

Then(/^the following inline error message will display: Required field!$/, function () {
    let maxLengthRequiredFieldMessageDisplayStatus = action.isVisibleWait(campusDetailsPage.maxLengthRequiredFieldMessageOnManageCustomizedField, 10000,"Max length required field message on manage customized field in campus page");
    chai.expect(maxLengthRequiredFieldMessageDisplayStatus).to.be.true;
    let audioLabelRequiredFieldMessageDisplayStatus = action.isVisibleWait(campusDetailsPage.audioLabelRequiredFieldMessageOnManageCustomizedField, 10000,"Audio label required field message on manage customized field in campus page");
    chai.expect(audioLabelRequiredFieldMessageDisplayStatus).to.be.true;
})

When(/^they select Customised field in the Campus page$/, function () {
    let customisedFieldOverrideLink = $(campusDetailsPage.customisedFieldsOverrideLinkLocator.replace("<dynamic>",GlobalData.CUSTOMISED_FIELD_NAME));
    action.clickElement(customisedFieldOverrideLink,"Customized field override link in campus page");
})

When(/^Manage Customized Field popup appears$/, function () {
    let customisedFieldOverrideLink = $(campusDetailsPage.customisedFieldsOverrideLinkLocator.replace("<dynamic>",GlobalData.CUSTOMISED_FIELD_NAME));
    action.clickElement(customisedFieldOverrideLink,"Customized field override link in campus page");
})

When(/^I edit any data under Audible in ODTI "(.*)","(.*)" in campus$/, function (maxLength, audioLabel) {
    action.clickElement(campusDetailsPage.freeTextRadioButtonOnManageCustomizedField,"Free text radio button on manage customized field in campus page");
    action.isVisibleWait(campusDetailsPage.maxLengthTextBoxOnManageCustomizedField,20000,"Max length text box on manage customized field in campus page");
    action.enterValue(campusDetailsPage.maxLengthTextBoxOnManageCustomizedField,maxLength,"Max length text box on manage customized field in campus page");
    action.enterValue(campusDetailsPage.audioLabelTextBoxOnManageCustomizedField,audioLabel,"Audio label text box on manage customized field in campus page");
})

When(/^the Admin clicks the ‘Save’ button On Manage Customized Field$/, function () {
    action.isVisibleWait(campusDetailsPage.saveButtonOnManageCustomizedField,10000,"Save button on manage customized field in campus page");
    action.clickElement(campusDetailsPage.saveButtonOnManageCustomizedField,"Save button on manage customized field in campus page");
})

Then(/^the custom field is updated with latest values "(.*)","(.*)"$/, function (maxLength, audioLabel) {
    let maxLengthFieldLabelClass = action.getElementValue(campusDetailsPage.maxLengthTextBoxOnManageCustomizedField,"Max length text box on manage customized field in campus page");
    chai.expect(maxLengthFieldLabelClass).to.includes(maxLength);
    let audioLabelFieldLabelClass = action.getElementValue(campusDetailsPage.audioLabelTextBoxOnManageCustomizedField,"Audio label text box on manage customized field in campus page");
    chai.expect(audioLabelFieldLabelClass).to.includes(audioLabel);
})

Then(/^the custom field is deleted in campus$/, function () {
    let customisedFieldOverrideLink = $(campusDetailsPage.customisedFieldsOverrideLinkLocator.replace("<dynamic>",GlobalData.CUSTOMISED_FIELD_NAME));
    let customisedFieldOverrideLinkDisplayStatus = action.isVisibleWait(customisedFieldOverrideLink,1000,"Customized field override link in campus page");
    chai.expect(customisedFieldOverrideLinkDisplayStatus).to.be.false;
})

When(/^the user clicks on Edit pencil icon, under Service Used By Campus$/, function () {
    action.isVisibleWait(campusDetailsPage.editPencilIconUnderServiceUsedByCampusFirstBillTo,10000,"Edit pencil icon under Service Used By Campus in Campus Details page");
    action.clickElement(campusDetailsPage.editPencilIconUnderServiceUsedByCampusFirstBillTo,"Edit pencil icon under Service Used By Campus in Campus Details page");
})

Then(/^the On Demand Telephone check box is disabled in Bill To Popup$/, function () {
    let onDemandTelephoneCheckboxDisabledDisplayStatus = action.isVisibleWait(campusDetailsPage.onDemandTelephoneCheckboxDisabled,10000,"On Demand Telephone checkbox disabled in Manage Bill-To Popup in Campus Details page");
    chai.expect(onDemandTelephoneCheckboxDisabledDisplayStatus).to.be.true;
})

Then(/^a message is displayed below On Demand Telephone This contract does not have complete Rates for On Demand Telephone$/, function () {
    let noCompleteRatesForODTIMessageDisplayStatus = action.isVisibleWait(campusDetailsPage.noCompleteRatesForODTIMessage,10000,"This contract does not have complete Rates for On Demand Telephone message in Manage Bill-To Popup in Campus Details page");
    chai.expect(noCompleteRatesForODTIMessageDisplayStatus).to.be.true;
})

Then(/^the On Demand Telephone check box is enabled in Bill To Popup$/, function () {
    let onDemandTelephoneCheckboxEnabledDisplayStatus = action.isVisibleWait(campusDetailsPage.onDemandTelephoneCheckboxEnabled,10000,"On Demand Telephone checkbox enabled in Manage Bill-To Popup in Campus Details page");
    chai.expect(onDemandTelephoneCheckboxEnabledDisplayStatus).to.be.true;
})

Then(/^the user can check the box, and click Assign in Bill To Popup$/, function () {
    let onDemandTelephoneCheckboxSelectedStatus = action.isSelectedWait(campusDetailsPage.onDemandTelephoneCheckbox,10000,"On Demand Telephone checkbox in Manage Bill-To Popup in Campus Details page");
    if (onDemandTelephoneCheckboxSelectedStatus === false) {
        action.clickElement(campusDetailsPage.onDemandTelephoneCheckbox,"On Demand Telephone checkbox in Manage Bill-To Popup in Campus Details page");
        action.clickElement(campusDetailsPage.assignButtonOnManageBillToPopup,"Assign Button in Manage Bill-To Popup in Campus Details page");
    }
})

When(/^user deselects the option AUDIBLE IN ODTI for the existing custom field$/, function () {
    let audibleInODTICheckboxSelectedStatus = action.isSelectedWait(campusDetailsPage.audibleInODTICheckboxOnManageCustomizedField, 10000, "Audible in ODTI checkbox on manage customized field in campus page");
    if (audibleInODTICheckboxSelectedStatus === true) {
        action.clickElement(campusDetailsPage.audibleInODTICheckboxOnManageCustomizedField, "Audible in ODTI checkbox on manage customized field in campus page");
    }
})

When(/^the Admin enters Customised ODTI Field Name "(.*)" in campus$/, function (fieldName) {
    GlobalData.CUSTOMISED_FIELD_NAME = fieldName + (Math.floor(Math.random() * 100000) + 1).toString();
    action.enterValue(campusDetailsPage.fieldNameTextBoxOnManageCustomizedField,GlobalData.CUSTOMISED_FIELD_NAME,"Field name text box on manage customized field in campus page");
})

When(/^the Admin enters Customised ODTI Field Max length "(.*)" and Audio-label "(.*)" in campus$/, function (maxLength, audioLabel) {
    action.isVisibleWait(campusDetailsPage.maxLengthTextBoxOnManageCustomizedField,20000,"Max length text box on manage customized field in campus page");
    action.enterValue(campusDetailsPage.maxLengthTextBoxOnManageCustomizedField,maxLength,"Max length text box on manage customized field in campus page");
    action.enterValue(campusDetailsPage.audioLabelTextBoxOnManageCustomizedField,audioLabel,"Audio label text box on manage customized field in campus page");
})