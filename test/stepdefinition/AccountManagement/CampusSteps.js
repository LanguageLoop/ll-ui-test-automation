
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

When(/^They select the plus icon$/, function(){
    GlobalData.TAGS_COUNT_BEFORE_CANCEL = accountManagementPage.dimensionTagsCount
    action.isVisibleWait(accountManagementPage.dimensionTagPlusIcon,10000)
    action.clickElement(accountManagementPage.dimensionTagPlusIcon)
})

When(/^Open the Dimension list dropdown$/, function(){
    action.elementExists(accountManagementPage.dimensionListDropdown,10000)
    action.isClickableWait(accountManagementPage.dimensionListDropdown,10000)
    action.clickElement(accountManagementPage.dimensionListDropdown)
})

When(/^Selects the "(.*)" dimension list option$/, function(dimensionListOption){
    action.isClickableWait(accountManagementPage.dimensionListDropdown,10000)
    action.selectTextFromDropdown(accountManagementPage.dimensionListDropdown,dimensionListOption)
})

Then(/^They will see the new short codes$/,function(){
    accountManagementPage.selectAValueDropdownOptionsList.waitForExist();
    action.isVisibleWait(accountManagementPage.selectAValueDropdownOptionsList)
    let shortCodeListOptionsCount = accountManagementPage.selectAValueDropdownOptionsListCount
    GlobalData.SHORT_CODE_OPTIONS = [];
    GlobalData.SHORT_CODE_OPTIONS_INITIALS = [];
    for (let optionIndex=1; optionIndex<=shortCodeListOptionsCount; optionIndex++){
        let shortCodeListOptionElement = $(accountManagementPage.selectAValueListOptionLocator.replace("<dynamic>",optionIndex.toString()));
        action.isVisibleWait(action.getElementText(shortCodeListOptionElement))
        GlobalData.SHORT_CODE_OPTIONS.push(action.getElementText(shortCodeListOptionElement))
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
    action.isVisibleWait(accountManagementPage.shortCodeListDropdown,10000)
    let dimensionListOptionValueElement = $(accountManagementPage.selectAValueListOptionTextLocator.replace("<dynamic>",shortCodeOptionValue))
    action.waitForElementExist(dimensionListOptionValueElement,10000,false,"Short code option-"+shortCodeOptionValue+" does not exist",500)
    action.selectTextFromDropdown(accountManagementPage.shortCodeListDropdown,shortCodeOptionValue)
})

Then(/^The tag "(.*)","(.*)" will be added in the Dimension Tag Cloud section$/,function(dimensionListOption,optionValue){
    let tagElement = $(accountManagementPage.tagLocator.replace("<dynamic1>",dimensionListOption).replace("<dynamic2>",optionValue))
    let tagVisibleStatus = action.isVisibleWait(tagElement,10000);
    GlobalData.TAGS_COUNT_AFTER_ADD = accountManagementPage.dimensionTagsCount
    chai.expect(tagVisibleStatus).to.be.true;
})

Then(/^They will see the "(.*)" dimension list option$/,function(budgetCodeOption){
    let budgetCodeOptionElement = $(accountManagementPage.dimensionListOptionLocator.replace("<dynamic>",budgetCodeOption));
    let budgetCodeOptionVisibleStatus = action.isVisibleWait(budgetCodeOptionElement,10000);
    chai.expect(budgetCodeOptionVisibleStatus).to.be.true;
})

When(/^They select the red cross x on the tag "(.*)","(.*)"$/, function(dimensionListOption,optionValue){
    let dimensionTagDeleteCrossIconElement = $(accountManagementPage.dimensionTagDeleteCrossIcon.replace("<dynamic1>",dimensionListOption).replace("<dynamic2>",optionValue))
    let tagClickable = action.isClickableWait(dimensionTagDeleteCrossIconElement,10000)
    action.clickElement(dimensionTagDeleteCrossIconElement)
    dimensionTagDeleteCrossIconElement.waitForExist({ timeout:10000, reverse:true, timeoutMsg:"the tag is not deleted within timeout", interval :500 })
})

When(/^They add the "(.*)" list option dimension$/, function(dimensionListOption){
    action.isClickableWait(accountManagementPage.dimensionListDropdown,10000)
    action.selectTextFromDropdown(accountManagementPage.dimensionListDropdown,dimensionListOption)
})

Then(/^They will be able to see the list of Budget Code values$/,function(){
    accountManagementPage.selectAValueDropdownOptionsList.waitForExist();
    action.isVisibleWait(accountManagementPage.selectAValueDropdownOptionsList)
    let budgetCodeListOptionsCount = accountManagementPage.selectAValueDropdownOptionsListCount
    GlobalData.BUDGET_CODE_OPTIONS = [];
    for (let optionIndex=1; optionIndex<=budgetCodeListOptionsCount; optionIndex++){
        let budgetCodeListOptionElement = $(accountManagementPage.selectAValueListOptionLocator.replace("<dynamic>",optionIndex.toString()));
        action.isVisibleWait(action.getElementText(budgetCodeListOptionElement))
        GlobalData.BUDGET_CODE_OPTIONS.push(action.getElementText(budgetCodeListOptionElement))
    }
    chai.expect(budgetCodeListOptionsCount).to.equal(GlobalData.BUDGET_CODE_OPTIONS.length)
})

When(/^They select a value "(.*)" from the Budget Code dropdown$/, function(budgetCodeOptionValue){
    action.isVisibleWait(accountManagementPage.dimensionListDropdown,10000)
    let dimensionListOptionValueElement = $(accountManagementPage.selectAValueListOptionTextLocator.replace("<dynamic>",budgetCodeOptionValue))
    action.waitForElementExist(dimensionListOptionValueElement,10000,false,"Short code option-"+budgetCodeOptionValue+" does not exist",500)
    action.selectTextFromDropdown(accountManagementPage.dimensionListDropdown,budgetCodeOptionValue)
})

When(/^The dimension dropdown is displayed$/, function(){
    let dimensionDropdownDisplayStatus = action.isVisibleWait(accountManagementPage.dimensionListDropdown,10000)
    chai.expect(dimensionDropdownDisplayStatus).to.be.true;
})

When(/^They select the x next to the dropdown$/, function(){
    action.isClickableWait(accountManagementPage.crossIconNextToDropdown,10000)
    action.clickElement(accountManagementPage.crossIconNextToDropdown)
    accountManagementPage.crossIconNextToDropdown.waitForExist({ timeout:10000, reverse:true, timeoutMsg:"the x icon is not removed within timeout", interval :500 })
})

Then(/^The adding of a dimension is cancelled$/,function(){
    let dimensionDropdownDisplayStatus = action.isVisibleWait(accountManagementPage.dimensionListDropdown,5000);
    chai.expect(dimensionDropdownDisplayStatus).to.be.false;
})

Then(/^The tag will not be added to the Dimension Tag Cloud section$/,function(){
    let tagsCountAfterCancel = accountManagementPage.dimensionTagsCount
    chai.expect(tagsCountAfterCancel).to.equal(GlobalData.TAGS_COUNT_BEFORE_CANCEL)
})

Given(/^The Admin is viewing the Campus page$/,function(){
    let campusPageHeaderDisplayStatus = action.isVisibleWait(accountManagementPage.campusPageHeader,2000);
    chai.expect(campusPageHeaderDisplayStatus).to.be.true;
})

Given(/^The Admin is viewing the Dimension Tag Cloud section$/,function(){
    let dimensionTagCloudSectionDisplayStatus = action.isVisibleWait(accountManagementPage.dimensionTagCloudSection,2000);
    chai.expect(dimensionTagCloudSectionDisplayStatus).to.be.true;
})

Given(/^The select a value dropdown is displayed$/, function(){
    let selectAValueDropdownDisplayStatus = action.isVisibleWait(accountManagementPage.selectAValueDropdown,10000)
    chai.expect(selectAValueDropdownDisplayStatus).to.be.true;
})

Then(/^The tag will be deleted$/,function(){
    let tagsCountAfterDelete = accountManagementPage.dimensionTagsCount
    chai.assert.isBelow(tagsCountAfterDelete,parseInt(GlobalData.TAGS_COUNT_AFTER_ADD),'Expected tags after delete-'+tagsCountAfterDelete+' is strictly less than-'+GlobalData.TAGS_COUNT_AFTER_ADD)
})

Then(/^The tag "(.*)","(.*)" will not be visible in the Dimension Tag Cloud section$/,function(dimensionListOption,optionValue){
    let tagElement = $(accountManagementPage.tagLocator.replace("<dynamic1>",dimensionListOption).replace("<dynamic2>",optionValue))
    let tagVisibleStatus = action.isVisibleWait(tagElement,5000);
    chai.expect(tagVisibleStatus).to.be.false;
})

Given(/^The Admin is on the Campus Management page > Manage Campus popup$/, function(){
    action.clickElement(campusDetailsPage.manageCampusLink);
    let manageCampusPopupDisplayStatus = action.isVisibleWait(campusDetailsPage.manageCampusPopup,10000);
    chai.expect(manageCampusPopupDisplayStatus).to.be.true;
})

Given(/^They click Assign Booking Officer > Add New User$/, function(){
    action.isVisibleWait(campusDetailsPage.assignBookingOfficerLink,10000)
    action.isClickableWait(campusDetailsPage.assignBookingOfficerLink,10000)
    action.clickElement(campusDetailsPage.assignBookingOfficerLink);
    action.isVisibleWait(campusDetailsPage.addNewUserButton,10000);
    action.isClickableWait(campusDetailsPage.addNewUserButton,10000);
    action.clickElement(campusDetailsPage.addNewUserButton);
})

Given(/^Fill out all the required details "(.*)", email, "(.*)" on the Select User popup$/, function(firstName,landLineNumber){
    action.isVisibleWait(campusDetailsPage.firstNameFieldBookingOfficer,10000);
    firstName = firstName + (Math.floor(Math.random() * 100000) + 1).toString()
    GlobalData.BOOKING_OFFICER_FIRSTNAME = firstName
    action.enterValue(campusDetailsPage.firstNameFieldBookingOfficer,GlobalData.BOOKING_OFFICER_FIRSTNAME);
    let email = GlobalData.BOOKING_OFFICER_FIRSTNAME + "@ll.com"
    action.enterValue(campusDetailsPage.emailFieldBookingOfficer,email);
    action.enterValue(campusDetailsPage.landLineNumberFieldBookingOfficer,landLineNumber);
})

When(/^They click the Save button on the Select User popup$/,function(){
    action.isClickableWait(campusDetailsPage.saveButtonBookingOfficer,10000);
    action.clickElement(campusDetailsPage.saveButtonBookingOfficer);
})

Then(/^The user is created$/,function(){
    let assignBOLinkDisplayStatus = action.isVisibleWait(campusDetailsPage.assignBookingOfficerLink,20000);
    chai.expect(assignBOLinkDisplayStatus).to.be.true;
})

When(/^The booking officer popup is closed$/,function(){
    action.isVisibleWait(campusDetailsPage.bookingOfficerPopupCloseButton,10000);
    action.isClickableWait(campusDetailsPage.bookingOfficerPopupCloseButton,10000);
    action.clickElement(campusDetailsPage.bookingOfficerPopupCloseButton);
})

Given(/^the Job Campus belongs to a certain BillTo "(.*)"$/,function(pinBillToCode){
    let campusPinBillToCodeLink = $(campusDetailsPage.campusPinBillToCodeLinkLocator.replace("<dynamic>",pinBillToCode));
    let campusPinBillToCodeLinkActualDisplayStatus = action.isVisibleWait(campusPinBillToCodeLink,10000);
    chai.expect(campusPinBillToCodeLinkActualDisplayStatus).to.be.true;
})

Then(/^the campuses "(.*)" should have the original short code "(.*)","(.*)" attached in Dimension Tag Cloud section$/, function (campus, dimensionListOption, optionValues) {
    let campusList = campus.split(",");
    let optionValuesList = optionValues.split(",");
    for (let optionIndex = 0; optionIndex < optionValuesList.length; optionIndex++) {
        action.isVisibleWait(homePage.accountManagementLink, 20000);
        action.clickElement(homePage.accountManagementLink)
        action.isVisibleWait(accountManagementPage.searchCampusInput, 20000);
        action.enterValueAndPressReturn(accountManagementPage.searchCampusInput, campusList[optionIndex]);
        action.pressKeys("Tab");
        action.waitUntilLoadingIconDisappears();
        action.isVisibleWait(accountManagementPage.firstCampusLink, 20000);
        action.clickElement(accountManagementPage.firstCampusLink);
        let dimensionTagCloudSectionDisplayStatus = action.isVisibleWait(accountManagementPage.dimensionTagCloudSection, 2000);
        chai.expect(dimensionTagCloudSectionDisplayStatus).to.be.true;
        let tagElement = $(accountManagementPage.tagLocator.replace("<dynamic1>", dimensionListOption).replace("<dynamic2>", optionValuesList[optionIndex]));
        let tagVisibleStatus = action.isVisibleWait(tagElement, 10000);
        chai.expect(tagVisibleStatus).to.be.true;
    }
})

Then(/^the campuses "(.*)" list should contain the new dimension called "(.*)"$/, function (campus, dimensionListOption) {
    let campusList = campus.split(",");
    for (let optionIndex = 0; optionIndex < campusList.length; optionIndex++) {
        action.isVisibleWait(homePage.accountManagementLink, 20000);
        action.clickElement(homePage.accountManagementLink)
        action.isVisibleWait(accountManagementPage.searchCampusInput, 20000);
        action.enterValueAndPressReturn(accountManagementPage.searchCampusInput, campusList[optionIndex]);
        action.pressKeys("Tab");
        action.waitUntilLoadingIconDisappears();
        action.isVisibleWait(accountManagementPage.firstCampusLink, 20000);
        action.clickElement(accountManagementPage.firstCampusLink);
        action.isVisibleWait(accountManagementPage.dimensionTagPlusIcon, 10000);
        action.clickElement(accountManagementPage.dimensionTagPlusIcon);
        let dimensionListOptionElement = $(accountManagementPage.dimensionListOptionLocator.replace("<dynamic>", dimensionListOption));
        let dimensionListOptionVisibleStatus = action.isVisibleWait(dimensionListOptionElement, 10000);
        chai.expect(dimensionListOptionVisibleStatus).to.be.true;
    }
})

When(/^the dimension dropdown list has X icon beside the dropdown$/, function(){
    let xIconDisplayStatus = action.isVisibleWait(accountManagementPage.crossIconNextToDropdown,10000);
    chai.expect(xIconDisplayStatus).to.be.true;
})

When(/^there should not be any plus icon displayed and multiple dimensions cannot be added simultaneously$/, function(){
    let plusIconDisplayStatus = action.isVisibleWait(accountManagementPage.dimensionTagPlusIcon,10000);
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
    let dimensionOptionTag = action.getElementTagName(tagElement);
    chai.expect(dimensionOptionTag).to.not.equal("a");
})

Then(/^they will be navigated to the Campus page$/, function () {
    action.navigateToLatestWindow();
    action.isVisibleWait(accountManagementPage.campusPageHeader,10000);
    let pageTitleActual = action.getPageTitle().trim();
    chai.expect(pageTitleActual).to.equal("CampusDetails");
})

Then(/^this preference "(.*)" is inherited by the Campus$/, function (preference) {
    let campusOptionElement = $(campusDetailsPage.campusPreferenceSelectedOptionLocator.replace("<dynamic>",preference));
    let campusOptionSelectedStatus = action.isSelectedWait(campusOptionElement,10000);
    chai.expect(campusOptionSelectedStatus).to.be.true;
})

When(/^they click Add preference button in Campus Details$/, function () {
    action.isVisibleWait(campusDetailsPage.campusAddPreferenceLink, 10000);
    action.clickElement(campusDetailsPage.campusAddPreferenceLink);
})

When(/^click the Preference Type dropdown in Campus Details$/, function () {
    action.isVisibleWait(campusDetailsPage.campusPreferenceTypeDropdown, 10000);
    action.clickElement(campusDetailsPage.campusPreferenceTypeDropdown);
})

Then(/^they will see an ODTI gender preference option with the label "(.*)" in Campus Details$/, function (optionLabel) {
    let preferenceTypeDropdownOptionElement = $(campusDetailsPage.campusPreferenceTypeDropdownOptionLocator.replace("<dynamicOption>", optionLabel));
    let ODTIGenderPreferenceOptionDisplayStatus = action.isVisibleWait(preferenceTypeDropdownOptionElement, 10000);
    chai.expect(ODTIGenderPreferenceOptionDisplayStatus).to.be.true;
})

Then(/^this option "(.*)" will appear under the Gender option in Campus Details$/, function (optionLabel) {
    let preferenceTypeDropdownOptionSiblingElement = $(campusDetailsPage.campusPreferenceTypeDropdownOptionSiblingLocator.replace("<dynamicOption1>", "Gender").replace("<dynamicOption2>", optionLabel));
    let optionUnderGenderOptionExistStatus = action.isExistingWait(preferenceTypeDropdownOptionSiblingElement, 10000);
    chai.expect(optionUnderGenderOptionExistStatus).to.be.true;
})

Then(/^they can select this option "(.*)" in Campus Details$/, function (optionLabel) {
    action.selectTextFromDropdown(campusDetailsPage.campusPreferenceTypeDropdown, optionLabel);
    let preferenceTypeDropdownOptionElement = $(campusDetailsPage.campusPreferenceTypeDropdownOptionLocator.replace("<dynamicOption>", optionLabel));
    let optionSelectedStatus = action.isSelectedWait(preferenceTypeDropdownOptionElement, 10000);
    chai.expect(optionSelectedStatus).to.be.true;
})

When(/^they select preference option "(.*)" in Campus Details$/, function (option) {
    action.isVisibleWait(campusDetailsPage.campusPreferenceDropdown,20000);
    action.selectTextFromDropdown(campusDetailsPage.campusPreferenceDropdown, option);
})

When(/^they remove added preference type option "(.*)" in Campus Details$/, function (optionLabel) {
    let preferenceTypeRemoveIconElement = $(campusDetailsPage.campusPreferenceTypeRemoveIconLocator.replace("<dynamicOption>", optionLabel));
    action.isVisibleWait(preferenceTypeRemoveIconElement,20000);
    action.clickElement(preferenceTypeRemoveIconElement);
    action.isNotVisibleWait(preferenceTypeRemoveIconElement,20000);
})

When(/^they click save Contract Preference button in Campus Details/, function () {
    action.isVisibleWait(campusDetailsPage.saveCampusPreferenceButton, 10000);
    action.clickElement(campusDetailsPage.saveCampusPreferenceButton);
})

When(/^preference inherited from the Contract can be overridden "(.*)" on the Campus level$/, function (option) {
    action.isVisibleWait(campusDetailsPage.campusGenderODTIDropdown,20000);
    action.selectTextFromDropdown(campusDetailsPage.campusGenderODTIDropdown, option);
    let campusGenderODTIDropdownOptionLocatorElement = $(campusDetailsPage.campusGenderODTIDropdownOptionLocator.replace("<dynamicOption>", option));
    let optionSelectedStatus = action.isSelectedWait(campusGenderODTIDropdownOptionLocatorElement, 10000);
    chai.expect(optionSelectedStatus).to.be.true;
})

Then(/^the preference is added for the Campus$/, function () {
    let genderODTIPreferenceAddedDisplayStatus = action.isVisibleWait(campusDetailsPage.campusGenderODTIPreferenceAdded, 10000);
    chai.expect(genderODTIPreferenceAddedDisplayStatus).to.be.true;
})

When(/^this preference "(.*)" will have delete icon as this created by campus$/, function (optionLabel) {
    let preferenceTypeRemoveIconElement = $(campusDetailsPage.campusPreferenceTypeRemoveIconLocator.replace("<dynamicOption>", optionLabel));
    let preferenceTypeRemoveIconDisplayStatus = action.isVisibleWait(preferenceTypeRemoveIconElement,20000);
    chai.expect(preferenceTypeRemoveIconDisplayStatus).to.be.true;
})

Then(/^we see the reset option on the right corner and the text Customized appears$/, function () {
    let preferenceTypeResetIconDisplayStatus = action.isVisibleWait(campusDetailsPage.campusODTIPreferenceTypeResetIcon,20000);
    chai.expect(preferenceTypeResetIconDisplayStatus).to.be.true;
    let preferenceTypeCustomisedTextDisplayStatus = action.isVisibleWait(campusDetailsPage.campusODTIPreferenceTypeCustomisedText,20000);
    chai.expect(preferenceTypeCustomisedTextDisplayStatus).to.be.true;
})

When(/^no delete button exists for the "(.*)" block in Campus Details$/, function (optionLabel) {
    let preferenceTypeRemoveIconElement = $(campusDetailsPage.campusPreferenceTypeRemoveIconLocator.replace("<dynamicOption>", optionLabel));
    let ODTIGenderDeleteButtonDisplayStatus = action.isVisibleWait(preferenceTypeRemoveIconElement,2000);
    chai.expect(ODTIGenderDeleteButtonDisplayStatus).to.be.false;
})

When(/^they add a block on a contractor or interpreter "(.*)"$/, function (contractorNameId) {
    action.isVisibleWait(campusDetailsPage.addABlockLink, 10000);
    action.clickElement(campusDetailsPage.addABlockLink);
    action.isVisibleWait(campusDetailsPage.searchByContractorNameAndIdTextBox, 10000);
    action.enterValue(campusDetailsPage.searchByContractorNameAndIdTextBox,contractorNameId);
    let contractorResultCheckboxElement = $(campusDetailsPage.contractorResultCheckboxLocator.replace("<dynamic>",contractorNameId));
    action.isVisibleWait(contractorResultCheckboxElement,10000);
    action.clickElement(contractorResultCheckboxElement);
    action.selectTextFromDropdown(campusDetailsPage.contractorSeverityDropdown, "Level");
    action.enterValue(campusDetailsPage.startDateContractor, "16-04-2023");
    action.enterValue(campusDetailsPage.endDateContractor, datetime.getRandomFutureDate());
    action.pressKeys("Tab");
    action.isVisibleWait(campusDetailsPage.addBlockButton, 10000);
    action.clickElement(campusDetailsPage.addBlockButton);
    action.isNotVisibleWait(campusDetailsPage.addBlockButton, 10000);
})

Then(/^the admin clicks on Remove on campus blocker$/, function () {
    let rule = 0;
    while (action.isVisibleWait(campusDetailsPage.newBlockRuleLinksToggleIcon, 1000) === true) {
        action.isVisibleWait(campusDetailsPage.newBlockRuleLinksToggleIcon, 10000);
        action.clickElement(campusDetailsPage.newBlockRuleLinksToggleIcon);
        action.isVisibleWait(campusDetailsPage.newBlockRuleLinksRemove, 10000);
        action.clickElement(campusDetailsPage.newBlockRuleLinksRemove);
        browser.pause(3000);
        rule++
    }
})

When(/^the user is on the Organisation page$/, function () {
    action.isVisibleWait(campusDetailsPage.campusOrganizationLink,10000);
    action.clickElement(campusDetailsPage.campusOrganizationLink);
})

When(/^user makes the block "(.*)" as expired by adding past date to Date Finished field on Campus page or the Contractor page$/, function (blockName) {
    let activeBlockerLinkElement = $(campusDetailsPage.activeBlockerLinkLocator.replace("<dynamic>", blockName));
    action.isVisibleWait(activeBlockerLinkElement, 10000);
    action.clickElement(activeBlockerLinkElement);
    action.enterValue(campusDetailsPage.endDateContractor, "17-04-2023");
    action.pressKeys("Tab");
    action.isVisibleWait(campusDetailsPage.saveButtonOnBlockingPopup, 10000);
    action.clickElement(campusDetailsPage.saveButtonOnBlockingPopup);
    action.isNotVisibleWait(campusDetailsPage.saveButtonOnBlockingPopup, 10000);
})

When(/^I click on Show Expired toggle in campus page$/, function () {
    action.isVisibleWait(campusDetailsPage.showExpiredBlocksToggleCheck, 10000);
    action.clickElement(campusDetailsPage.showExpiredBlocksToggleCheck);
})

Then(/^the Customised field will be inherited by the Campus$/, function () {
    let customisedFieldOverrideLink = $(campusDetailsPage.customisedFieldsOverrideLinkLocator.replace("<dynamic>",GlobalData.CUSTOMISED_FIELD_NAME));
    let customisedFieldOverrideLinkDisplayStatus = action.isVisibleWait(customisedFieldOverrideLink,10000);
    chai.expect(customisedFieldOverrideLinkDisplayStatus).to.be.true;
})

Then(/^the Customised field can be overridden on the Campus page$/, function () {
    let customisedFieldOverrideLink = $(campusDetailsPage.customisedFieldsOverrideLinkLocator.replace("<dynamic>",GlobalData.CUSTOMISED_FIELD_NAME));
    action.clickElement(customisedFieldOverrideLink);
    let overrideCampusDataButtonOnManageCustomisedFieldDisplayStatus = action.isVisibleWait(campusDetailsPage.overrideCampusDataButtonOnManageCustomisedField,10000);
    chai.expect(overrideCampusDataButtonOnManageCustomisedFieldDisplayStatus).to.be.true;
    action.clickElement(campusDetailsPage.overrideCampusDataButtonOnManageCustomisedField);
})