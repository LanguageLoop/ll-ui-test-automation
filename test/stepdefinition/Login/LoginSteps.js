const GlobalData = require("../../data/GlobalData")
const Login = require("../../pages/Login/Login")



Given(/^the looped in login page is opened$/,  function(){
   browser.reloadSession()
   browser.url(GlobalData.BASE_URL)
})


 Then(/^login is successful$/,   function(){

    
 })

 When(/^I login with "(.*)" and "(.*)"$/,  function(username,password){
  /*  if(username.includes("LLAdmin"))
    {
       username="admin@ll.com"
       password="Test1"
    }*/
    action.enterValue(Login.usernameInput,username)
    action.enterValue(Login.passwordInput,password)
    action.clickElement(Login.loginButton) 
    if(Login.passwordExpired.isDisplayed()){
       browser.pause(3000)
      if(username==='LLAdmin@looped.in')
      {
      action.enterValue(Login.newPassword,"Octopus@6")
      action.enterValue(Login.confirmNewPassword,"Octopus@6")
      Login.savePassword.click()
      }
      else
      {
        //action.enterValue(Login.newPassword,"Test1")
        //browser.executeScript("Login.newPassword.value='Test1'")
        Login.newPassword.setValue("Test1")
        Login.confirmNewPassword.setValue("Test1")
        Login.savePassword.click()
      }
    action.enterValue(Login.usernameInput,username)
    action.enterValue(Login.passwordInput,password)
    action.clickElement(Login.loginButton) 
   }
    browser.waitUntil(()=>browser.getTitle()==="HomePage" || browser.getTitle()==="Bookings" || browser.getTitle()==="Account Management" ,{timeout:20000, timeoutMsg:'login not happened within 20s', interval:500 })
    
})

Then(/^they will not be able to login$/, function () {
    let loginButtonDisplayStatus = action.isVisibleWait(Login.loginButton, 10000);
    chai.expect(loginButtonDisplayStatus).to.be.true;
})

Then(/^the ‘Invalid username or password.’ error message will be displayed$/, function () {
    let invalidUserOrPasswordMessageDisplayStatus = action.isVisibleWait(Login.invalidUsernameOrPasswordMessage, 10000);
    chai.expect(invalidUserOrPasswordMessageDisplayStatus).to.be.true;
})

When(/^they login with their updated email "(.*)" and "(.*)"$/, function (username, password) {
    action.enterValue(Login.usernameInput, username);
    action.enterValue(Login.passwordInput, password);
    action.clickElement(Login.loginButton);
})

Then(/^they will be able to login$/, function () {
    let loginButtonDisplayStatus = action.isVisibleWait(Login.loginButton, 1000);
    chai.expect(loginButtonDisplayStatus).to.be.false;
})

Given(/^the ODTI DID Configurations page is opened$/, function () {
    browser.url(GlobalData.ODTI_DID_URL);
})