
const GlobalData = require("../../data/GlobalData")

When(/^I create a new campus$/,{timeout:3600000}, function(){
   //data
   address1="1 St Kilda Rd, St Kilda VIC 3182"
   address2="1 St Kilda Rd, St Kilda VIC 3182, Australia"
   name1="first post"
   name2="second post"
   campusname = "Melbourne LL" + (Math.floor(Math.random() * 1000000) + 1).toString()
   GlobalData.CAMPUS_NAME= campusname  
   console.log("CAMPUS : : : : : : : : : : : : : : : "+campusname)
   entitytype="Government"
   frequency="Weekly"
   abn="53819971946"
   companyname="company ll"
   tradingname="trading name"
   ponumber="42345"
   billto="department of transport"
   pin="1234"



        browser.pause(2000)
        action.clickElement(accountManagementPage.createCampusLink)
        browser.pause(2000)
        
        action.clickElement(accountManagementPage.metroRadioButton)

    
        $('//span[@class="fa fa-fw fa-pencil-square-o"]').click()
        browser.pause(2000)
        action.enterLocation(accountManagementPage.campusAddressInput,address1)
        action.enterValue(accountManagementPage.address2Input,address2)
    
        action.enterValue(accountManagementPage.campusPostName1Input,name1)
        browser.pause(1000)
        action.enterValue(accountManagementPage.campusPostName2Input,name2)
    
        $$('//span[@class="fa fa-fw fa-pencil-square-o"]')[1].click()
        browser.pause(2000)
        action.enterLocation(accountManagementPage.postalAddressInput,address1)
        action.enterValue(accountManagementPage.postalAddress2Input,address2)
    
        action.enterValue(accountManagementPage.campusNameInput,campusname)
    
       // action.selectTextFromDropdown(accountManagementPage.entityTypeDropdown,entitytype)
    
    
        action.selectTextFromDropdown(accountManagementPage.overrideInvoiceFrequencyDropdown,frequency)
    
    
        action.enterValue(accountManagementPage.campusABNInput,abn)
        browser.pause(2000)
        action.clickElement(accountManagementPage.abnCheckButton)
        browser.pause(2000)
    
        action.clickElement(accountManagementPage.chargeGSTCheckbox)
    
        action.clearValue(accountManagementPage.companyNameInput)
        
        action.enterValue(accountManagementPage.companyNameInput,companyname)
        
        action.enterValue(accountManagementPage.tradingNameInput,tradingname)
        action.enterValue(accountManagementPage.PONumberInput,ponumber)
        accountManagementPage.selectBillToLink.waitForDisplayed({timeout:5000,timeoutMsg:'select bill to link not displayed',interval:500})
        action.clickElement(accountManagementPage.selectBillToLink)
        
        browser.pause(5000)
        action.enterValue(accountManagementPage.searchBillToInput,billto)
    
        browser.pause(2000)
        action.clickElement(accountManagementPage.firstBillToTitle)
        browser.pause(2000)
        action.clickElement(accountManagementPage.assignButton)
        browser.pause(2000)

        action.enterValue(accountManagementPage.videoLoopPinInput,pin)
    
    
       
    
        action.clickElement(accountManagementPage.saveButton)
        browser.pause(3000)
        action.clickElement(homePage.accountManagementLink)
        browser.pause(2000)
})