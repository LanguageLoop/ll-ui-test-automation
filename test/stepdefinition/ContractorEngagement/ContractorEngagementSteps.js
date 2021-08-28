const GlobalData = require("../../data/GlobalData")

When(/^I click add contractor button$/, function(){
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addContractorLink)
})

When(/^I enter contractor details "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/, function(salutation,gender,name,pin,mobile,dob,email,address){
        name = name + (Math.floor(Math.random() * 1000000) + 1).toString()
        email = email + (Math.floor(Math.random() * 1000000) + 1).toString()
        mob = "0"+(400000000+(Math.floor(Math.random() * 100000000) + 1)).toString()
        GlobalData.NEW_CONTRACTOR_NAME= name     
    browser.pause(2000)

    action.selectTextFromDropdown(contractorEngagementPage.salutationDropdown,salutation)
    if(gender=="Male")
    {
        action.clickElement(contractorEngagementPage.maleRadioButton)
    }
    else
    {
        action.clickElement(contractorEngagementPage.femaleRadioButton)
    }

    action.enterValue(contractorEngagementPage.telephonePinInput,pin)
    action.enterValue(contractorEngagementPage.firstNameInput,name)
    action.enterValue(contractorEngagementPage.mobileInput,mob)
    action.enterValueAndPressReturn(contractorEngagementPage.dateOfBirthDropdown,dob)
    action.enterValue(contractorEngagementPage.emailInput,email+"@aa.com.au")

    $('//span[@class="fa fa-fw fa-pencil-square-o"]').click()
    browser.pause(2000)
    action.enterLocation(contractorEngagementPage.addressInput,address)
    browser.pause(2000)
    browser.keys("Enter")
    browser.pause(2000)
    $$('//span[@class="fa fa-fw fa-pencil-square-o"]')[1].click()
    browser.pause(2000)
    action.enterLocation(contractorEngagementPage.postalAddressInput,address)
    browser.pause(2000)
    browser.keys("Enter")
    action.clickElement(contractorEngagementPage.emailPreferenceCheckbox)
    action.uploadFile(contractorEngagementPage.workContractFileControl,"./test/data/ContractDocument.docx")
    const uploadedFile=$("//div[text()[contains(.,'ContractDocument.docx')]]")
    browser.waitUntil(()=>uploadedFile.getText()==='ContractDocument.docx',{timeout:5000,timeoutMsg:'file not uploaded in 5s',inteval:500})
    //browser.pause(3000)
    
    //action.clickElement(contractorEngagementPage.saveContractorButton)
    browser.waitUntil(function(){
        if(browser.getTitle()==='Contractors'){
         contractorEngagementPage.saveContractorButton.click()
        }
         return browser.getTitle()==='PreviewContractorProfile'
}, 5000)
    
    browser.waitUntil(()=>browser.getTitle()==='PreviewContractorProfile',{timeout:5000,timeoutMsg:'preview title not displayed in 5s',inteval:500})
})

When(/^I search and open contractor "(.*)"$/, function(contractor){
    browser.pause(2000)
    action.enterValue(contractorEngagementPage.searchContractorInput, contractor)
    browser.pause(3000)
    $('//table[contains(@id,"Contractor")]//td//a').click()
})

When(/^I search and open created contractor$/, function(){
    browser.pause(2000)
    action.enterValue(contractorEngagementPage.searchContractorInput, GlobalData.NEW_CONTRACTOR_NAME)
    browser.pause(3000)
    $('//table[contains(@id,"Contractor")]//td//a').click()
})

When(/^I click add accreditation link$/, function(){
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addAccreditationLink)
})

When(/^I enter naati details "(.*)","(.*)","(.*)","(.*)"$/, function(service,from,to,level){
    browser.pause(2000)
    action.selectTextFromDropdown(contractorEngagementPage.serviceDropdown,service)
    action.enterValueAndPressReturn(contractorEngagementPage.fromLanguageDropdown,from)
    action.enterValueAndPressReturn(contractorEngagementPage.toLanguageDropdown,to)
    action.selectTextFromDropdown(contractorEngagementPage.naatiAccreditationDropdown,level)

    action.clickElement(contractorEngagementPage.saveAndCloseButton)
})

When(/^I click add notes link$/,function(){
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addNotesLink)
})

When(/^I enter contractor notes details "(.*)","(.*)"$/,function(title,message){
    browser.pause(2000)
    action.enterValue(contractorEngagementPage.noteTitleInput,title)
    action.enterValue(contractorEngagementPage.noteMessageInput,message)
    action.clickElement(contractorEngagementPage.saveNotesButton)
    browser.pause(2000)
})

When(/^I click add work eligibility link$/, function(){
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addWorkEligbileLink)
})

When(/^I enter work eligibility details "(.*)","(.*)","(.*)"$/, function(rights,number,years){
    browser.pause(2000)
    action.selectTextFromDropdown(contractorEngagementPage.workRightsDropdown,rights)
    action.enterValue(contractorEngagementPage.passportVisaNumberInput, number)
    action.uploadFile(contractorEngagementPage.proofOfVisaPassportFileControl,"./test/data/Working rights.docx")

    action.enterValue(contractorEngagementPage.yearsOfResidenceInput,years)

    action.clickElement(contractorEngagementPage.saveWorkEligibilityButton)
    browser.pause(2000)
})

When(/^I click add clearance link$/, function(){
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addClearanceLink)
})

When(/^I enter clearance details "(.*)"$/, function(clearance){
    browser.pause(2000)
    action.uploadFile(contractorEngagementPage.clearanceFileControl,"./test/data/ContractDocument.docx")
    action.selectTextFromDropdown(contractorEngagementPage.clearanceTypeDropdown,clearance)
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.saveClearanceButton)
})

When(/^I click add availability link$/, function(){
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addAvailabilityLink)
    browser.pause(2000)
})

When(/^I enter availability details "(.*)","(.*)"$/, function(type,words){
    browser.pause(2000)
    if(type=="Translation")
    {
        contractorEngagementPage.translationAvailabilityCheckbox.click()
    }

    contractorEngagementPage.availabilitySegment.click()
    action.enterValue(contractorEngagementPage.wordsPerDayInput,words)
    action.clickElement(contractorEngagementPage.saveAvailabilityButton)
    browser.pause(2000)
})

When(/^I click add work preference link$/, function(){
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addWorkPreferenceLink)
})

When(/^I enter preference details "(.*)"$/, function(company){
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.organisationSection)
    browser.pause(2000)
    action.enterValueAndPressReturn(contractorEngagementPage.searchCompanyNameInput,company)
    action.clickElement(contractorEngagementPage.saveWorkPreferenceButton)
    browser.pause(2000)
})

When(/^I click add referee link$/, function(){
    browser.pause(2000)
    action.clickElement(contractorEngagementPage.addRefereeLink)
    browser.pause(2000)
})

When(/^I enter referee details "(.*)","(.*)"$/, function(agency,name){
    browser.pause(2000)
    action.enterValue(contractorEngagementPage.agencyInput,agency)
    action.enterValue(contractorEngagementPage.refereeNameInput,name)
    action.clickElement(contractorEngagementPage.saveRefereeButton)
    browser.pause(2000)

})

Then(/^I verify referee "(.*)","(.*)"$/, function(agency, name){
    browser.pause(2000)
    var elt =$('//*[@class="Reference Card"]//*[text()="'+agency+'"]')
    chai.expect(action.elementExists(elt)).to.be.true
})

Then(/^I delete referees$/,function(){
    var ct= $$('//*[@class="Reference Card"]/..').length
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

Then(/^I verify work preference "(.*)"$/, function(company){
    browser.pause(2000)
    var elt =  $('//*[text()="Working Preferences"]/../../../../../..//*[contains(text(),"'+company+'")]')
    chai.expect(action.elementExists(elt)).to.be.true
})

Then(/^I delete work preferences$/, function(){
    browser.pause(2000)
    var elt=contractorEngagementPage.removeWorkPreferenceButtons.length
    for(var i=0;i<elt-1;i++)
    {
        action.clickElement(contractorEngagementPage.removeWorkPreferenceButtons[i])
        browser.pause(2000)
        browser.acceptAlert()
    }
})

Then(/^I verify availability details "(.*)"$/, function(type){
    if(type=="Translation")
    {
        chai.expect(action.elementExists(contractorEngagementPage.workAvailabilityTranslationItem)).to.be.true
    }
})

Then(/^I verify clearance "(.*)"$/, function(clearance){
   
   var elt= $('//*[text()="Clearance"]').$('//*[@class="Heading3" and text()="'+clearance+'"]')
   chai.expect(action.elementExists(elt)).to.be.true
  
})

Then(/^I delete clearances$/, function(){
    browser.pause(4000)
    $('//a[contains(@id,"wtPlaceholderLinks_wt9")]').scrollIntoView({block: "center"})
    var ct= contractorEngagementPage.clearanceItems.length
    console.log("DRAVID $$$ "+ct)
    for( var i=0;i<ct;i++)
    {
        contractorEngagementPage.clearanceItems[i].$('label').click()
        browser.pause(2000)
        contractorEngagementPage.clearanceItems[i].$('//a[contains(@id,"wtPlaceholderLinks_wt9")]').click()

    }
})

Then(/^I verify work eligibility$/, function(){
    browser.pause(2000)
    chai.expect(action.elementExists(contractorEngagementPage.workEligibilityDocumentLink)).to.be.true
})

Then(/^I verify contractor notes "(.*)","(.*)"$/,function(title,message){
    browser.pause(2000)
    var tlength= contractorEngagementPage.notesTableRows.length
    var temp_title= contractorEngagementPage.notesTableRows[tlength-1].$$('td')[0].getText()
    var temp_message= contractorEngagementPage.notesTableRows[tlength-1].$$('td')[1].getText()

    chai.expect(temp_title==title).to.be.true
    chai.expect(temp_message==message).to.be.true

})

Then(/^I delete contractor notes$/, function(){
    browser.pause(2000)
    var tlength= contractorEngagementPage.notesTableRows.length
    contractorEngagementPage.notesTableRows[tlength-1].$('label').click()
    browser.pause(2000)
    contractorEngagementPage.notesTableRows[tlength-1].$('//a[contains(text(),"Remove")]').click()

})

Then(/^I verify the created naati accreditation "(.*)","(.*)"$/, function(from,to){
    browser.pause(4000)
   var tlength= contractorEngagementPage.naatiTableRows.length
   var temp_value= contractorEngagementPage.naatiTableRows[tlength-1].getText()
   console.log("DRAVID $$$$ "+temp_value)
   chai.expect(temp_value.includes(from)).to.be.true
})

Then(/^I delete the naati accreditation$/, function(){
    var tlength= contractorEngagementPage.naatiTableRows.length
  contractorEngagementPage.naatiTableRows[tlength-1].$('label').click()
  browser.pause(2000)
  contractorEngagementPage.naatiTableRows[tlength-1].$('//a[contains(text(),"Remove")]').click()
})

Then(/^I verify contractor is created$/, function(){
    browser.pause(2000)
    action.enterValueAndPressReturn(contractorEngagementPage.searchContractorInput, GlobalData.NEW_CONTRACTOR_NAME)
    browser.pause(2000)
    var searchresult =$$('//table[contains(@id,"Contractor")]//td')[1].getText()
    chai.expect(searchresult==GlobalData.NEW_CONTRACTOR_NAME)
})