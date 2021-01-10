
module.exports = {
    
    get InterpretingLink()
    { return $('//a[text()="Interpreting"]')
    },

    get logoutButton()
    {
        return $('//a[@title="Logout"]')
    },

    get accountManagementLink()
    {
        return $('//a[text()="Account Management"]')
    },

    get claimsLink(){
        return $('//a[text()="Claims"]')
    },

    get contractorEngagementLink(){
        return $('//a[text()="Contractor Engagement"]')
    },

    get contractorMessageOKButton(){
        return $('//*[contains(text(),"Message for Interpreters")]/../..//input[@type="submit"]/..')
    }}
