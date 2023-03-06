
module.exports = {

    
    get usernameInput()
    { 
        return $('//*[@placeholder="Username"]')
    },
        
    get passwordInput()
    { 
        return $('//*[@placeholder="Password"]') 
    },

    get loginButton()
    { 
         return $('//*[@type="submit" and @value="Login"]') 
    },
    get username()
    {
        return $('#username')
    },

    get password()
    {
        return $('#password')
    },

    get login()
    {
        return $('button[type="submit"]')
    },
    get passwordExpired()
    {
        return $('//span[text()[contains(.,"Password expired. Please change it")]]')
    },
    get newPassword()
    {
        return $('input[placeholder="New password"]')
    },
    get confirmNewPassword()
    {
        return $('input[placeholder="Confirm new password"]')
    },
    get savePassword()
    {
        return $('input[value="Save password"]')
    },

    get invalidUsernameOrPasswordMessage() {
        return $('//span[text()="Invalid username or password."]');
    }
}

