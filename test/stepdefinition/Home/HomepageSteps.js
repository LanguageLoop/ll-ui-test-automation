

When(/^I click Interpreting header link$/,   function(){
   action.clickElement(homePage.InterpretingLink)
})

When(/^I click Claims header link$/,   function(){
   action.clickElement(homePage.claimsLink)
   browser.pause(2000)
})

When(/^I click account management link$/, function(){
   action.clickElement(homePage.accountManagementLink)
   browser.pause(2000)
})

When(/^I click logout button$/, function(){
   action.clickElement(homePage.logoutButton)
})

When(/^I click contractor engagement link$/, function(){
   action.clickElement(homePage.contractorEngagementLink)
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