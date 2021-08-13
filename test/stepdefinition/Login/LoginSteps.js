const GlobalData = require("../../data/GlobalData")



Given(/^the looped in login page is opened$/,  function(){
   browser.reloadSession()
   browser.url(GlobalData.BASE_URL)
})


 Then(/^login is successful$/,   function(){

    
 })

 When(/^I login with "(.*)" and "(.*)"$/,   function(username,password){
  /*  if(username.includes("LLAdmin"))
    {
       username="admin@ll.com"
       password="Test1"
    }*/
    action.enterValue(Login.usernameInput,username)
    action.enterValue(Login.passwordInput,password)
    action.clickElement(Login.loginButton) 
    browser.waitUntil(()=>browser.getTitle()==="HomePage" || browser.getTitle()==="Bookings" ,{timeout:20000, timeoutMsg:'login not happened within 20s', interval:500 })
    
})

