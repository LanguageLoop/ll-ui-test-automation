
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
        action.clickElement(accountManagementPage.createCampusLink,"Create Campus link in Account Management page")
        browser.pause(2000)

        action.clickElement(accountManagementPage.metroRadioButton,"Metro radio button in Account Management page")


        $('//span[@class="fa fa-fw fa-pencil-square-o"]').click()
        browser.pause(2000)
        action.enterLocation(accountManagementPage.campusAddressInput,address1,"Campus address text box in Account Management page")
        action.enterValue(accountManagementPage.address2Input,address2,"Campus address 2 text box in Account Management page")

        action.enterValue(accountManagementPage.campusPostName1Input,name1,"Campus Post Name 1 text box in Account Management page")
        browser.pause(1000)
        action.enterValue(accountManagementPage.campusPostName2Input,name2,"Campus Post Name 2 text box in Account Management page")

        $$('//span[@class="fa fa-fw fa-pencil-square-o"]')[1].click()
        browser.pause(2000)
        action.enterLocation(accountManagementPage.postalAddressInput,address1,"Postal Address text box in Account Management page")
        action.enterValue(accountManagementPage.postalAddress2Input,address2,"Postal Address 2 text box in Account Management page")

        action.enterValue(accountManagementPage.campusNameInput,campusname,"Campus Name text box in Account Management page")

       // action.selectTextFromDropdown(accountManagementPage.entityTypeDropdown,entitytype)


        action.selectTextFromDropdown(accountManagementPage.overrideInvoiceFrequencyDropdown,frequency,"Override invoice frequency dropdown in Account Management page")


        action.enterValue(accountManagementPage.campusABNInput,abn,"Campus ABN text box in Account Management page")
        browser.pause(2000)
        action.clickElement(accountManagementPage.abnCheckButton,"ABN check button in Account Management page")
        browser.pause(2000)

        action.clickElement(accountManagementPage.chargeGSTCheckbox,"Charge GST  checkbox in Account Management page")

        action.clearValue(accountManagementPage.companyNameInput,"Company Name text box in Account Management page")

        action.enterValue(accountManagementPage.companyNameInput,companyname,"Company Name text box in Account Management page")

        action.enterValue(accountManagementPage.tradingNameInput,tradingname,"Trading Name text box in Account Management page")
        action.enterValue(accountManagementPage.PONumberInput,ponumber,"PO Number text box in Account Management page")
        accountManagementPage.selectBillToLink.waitForDisplayed({timeout:5000,timeoutMsg:'select bill to link not displayed',interval:500})
        action.clickElement(accountManagementPage.selectBillToLink,"Select Bill To link in Account Management page")

        browser.pause(5000)
        action.enterValue(accountManagementPage.searchBillToInput,billto,"Search Bill To text box in Account Management page")

        browser.pause(2000)
        action.clickElement(accountManagementPage.firstBillToTitle,"First Bill To Title in Account Management page")
        browser.pause(2000)
        action.clickElement(accountManagementPage.assignButton,"Assign Button in Account Management page")
        browser.pause(2000)

        action.enterValue(accountManagementPage.videoLoopPinInput,pin,"Video Loop Pin text box in Account Management page")




        action.clickElement(accountManagementPage.saveButton,"Save button in Account Management page")
        browser.pause(3000)
        action.clickElement(homePage.accountManagementLink,"Account Management link in Account Management page")
        browser.pause(2000)
})