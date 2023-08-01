

When(/^I click Interpreting header link$/,   function(){
   action.isVisibleWait(homePage.InterpretingLink,30000,"Interpreting link in Home page");
   action.clickElement(homePage.InterpretingLink,"Interpreting link in Home page")
})

When(/^I click Claims header link$/,   function(){
   action.isVisibleWait(homePage.claimsLink,30000,"Claims link in Home page");
   action.clickElement(homePage.claimsLink,"Claims link in Home page")
   browser.pause(2000)
})

When(/^I click account management link$/, function(){
   action.clickElement(homePage.accountManagementLink,"Account Management link in Home page")
   browser.pause(2000)
})

When(/^I click logout button$/, function(){
   action.isVisibleWait(homePage.logoutButton,20000,"Logout button in Home page")
   action.clickElement(homePage.logoutButton,"Logout button in Home page")
})

When(/^I click contractor engagement link$/, function(){
   action.clickElement(homePage.contractorEngagementLink,"Contractor Engagement link in Home page")
   browser.waitUntil(()=>browser.getTitle()=='Contractors',{timeout:5000,timeoutMsg:'Contractors page not displayed in 5s',inteval:500})
   //browser.pause(2000)
})

When(/^I handle contractor message$/, function(){
   browser.pause(3000)
   try{
      homePage.contractorMessageOKButton.waitForExist({timeout:10000})
      browser.keys("Tab")
      browser.pause(2000)
      browser.keys("Tab")
      browser.pause(2000)
      browser.keys("Tab")
      browser.pause(2000)
      browser.keys(" ")
      //action.clickElement(jobRequestPage.contractorMessageOKButton)
    }
    catch(Err)
    {
    }
})

When(/^I click Admin header link$/,   function(){
   action.isClickableWait(homePage.adminLink,10000,"Admin link in Home page")
   action.clickElement(homePage.adminLink,"Admin link in Home page")
})

When(/^I click ODTI header link$/,   function(){
   action.isClickableWait(homePage.ODTILink,10000,"ODTI link in Home page")
   action.clickElement(homePage.ODTILink,"ODTI link in Home page")
})

When(/^they view the main top navigation$/,   function(){
   let topMenuDisplayStatus = action.isVisibleWait(homePage.mainTopNavigationMenu,1000,"Main Top Navigation Menu in Home page")
   chai.expect(topMenuDisplayStatus).to.be.true;
})

Then(/^they will see the ODTI menu item$/,   function(){
   let ODTIMenuItem = action.isVisibleWait(homePage.ODTILink,10000,"ODTI link in Home page")
   chai.expect(ODTIMenuItem).to.be.true;
})

Then(/^it will appear between the Interpreting and Translation menu items$/,   function(){
   let ODTIMenuItemBetweenInterpretingAndTranslation = action.isVisibleWait(homePage.ODTIMenuItemBetweenInterpretingAndTranslations,10000,"ODTI Menu item between Interpreting and Translation in Home page")
   chai.expect(ODTIMenuItemBetweenInterpretingAndTranslation).to.be.true;
})

Then(/^it will appear between the Interpreting and Account Management menu items$/,   function(){
   let ODTIMenuItemBetweenInterpretingAndAccountManagement = action.isVisibleWait(homePage.ODTIMenuItemBetweenInterpretingAndAccountManagement,10000,"ODTI Menu item between Interpreting and Account Management in Home page")
   chai.expect(ODTIMenuItemBetweenInterpretingAndAccountManagement).to.be.true;
})

When(/^I click LoopedIn header logo$/,   function(){
   action.isClickableWait(homePage.loopedInHeaderLogo,10000,"LoopedIn header link in Home page");
   action.clickElement(homePage.loopedInHeaderLogo,"LoopedIn header link in Home page");
})