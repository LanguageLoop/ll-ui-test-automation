
Given(/^the looped in login page is opened$/,  function(){
    action.reloadSession()
    action.launchURL(GlobalData.BASE_URL)
})


 Then(/^login is successful$/,   function(){

    
 })

 When(/^I login with "(.*)" and "(.*)"$/,  function(username,password){
  /*  if(username.includes("LLAdmin"))
    {
       username="admin@ll.com"
       password="Test1"
    }*/
    action.enterValue(Login.usernameInput,username,"Username text box in Login page")
    action.enterValue(Login.passwordInput,password,"Password text box in Login page")
    action.clickElement(Login.loginButton,"Login Button in Login page")
    if(action.isVisibleWait(Login.passwordExpired,0,"Password Expired Message in Login page")){
       browser.pause(3000)
      if(username==='LLAdmin@looped.in')
      {
      action.enterValue(Login.newPassword,"Octopus@6","Password text box in Login page")
      action.enterValue(Login.confirmNewPassword,"Octopus@6","Confirm Password text box in Login page")
      action.clickElement(Login.savePassword,"Save Password button in Login page")
      }
      else
      {
        //action.enterValue(Login.newPassword,"Test1")
        //browser.executeScript("Login.newPassword.value='Test1'")
          action.enterValue(Login.newPassword, "Test1", "Password text box in Login page")
          action.enterValue(Login.confirmNewPassword, "Test1", "Confirm Password text box in Login page")
          action.clickElement(Login.savePassword, "Save Password button in Login page")
      }
    action.enterValue(Login.usernameInput,username,"Username text box in Login page")
    action.enterValue(Login.passwordInput,password,"Password text box in Login page")
    action.clickElement(Login.loginButton,"Login Button in Login page")
   }
    browser.waitUntil(()=>browser.getTitle()==="HomePage" || browser.getTitle()==="Bookings" || browser.getTitle()==="Account Management" ,{timeout:20000, timeoutMsg:'login not happened within 20s', interval:500 })
    
})

Then(/^they will not be able to login$/, function () {
    let loginButtonDisplayStatus = action.isVisibleWait(Login.loginButton, 10000,"Login Button in Login page");
    chai.expect(loginButtonDisplayStatus).to.be.true;
})

Then(/^the ‘Invalid username or password.’ error message will be displayed$/, function () {
    let invalidUserOrPasswordMessageDisplayStatus = action.isVisibleWait(Login.invalidUsernameOrPasswordMessage, 10000,"Invalid username or password message in Login page");
    chai.expect(invalidUserOrPasswordMessageDisplayStatus).to.be.true;
})

When(/^they login with their updated email "(.*)" and "(.*)"$/, function (username, password) {
    action.enterValue(Login.usernameInput, username,"Username text box in Login page");
    action.enterValue(Login.passwordInput, password,"Password text box in Login page");
    action.clickElement(Login.loginButton,"Login Button in Login page");
})

Then(/^they will be able to login$/, function () {
    let loginButtonDisplayStatus = action.isVisibleWait(Login.loginButton, 1000,"Login Button in Login page");
    chai.expect(loginButtonDisplayStatus).to.be.false;
})

Given(/^the ODTI DID Configurations page is opened$/, function () {
    browser.url(GlobalData.ODTI_DID_URL);
})