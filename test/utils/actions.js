var path=require('path')
module.exports={

    enterValue(elt, value)
    {

        elt.waitForDisplayed()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.click()
        browser.pause(1000)
        this.clearValue(elt)
        browser.pause(1000)
        elt.setValue(value)
        browser.pause(1000)
    },

    clearValue(elt)
    {
        browser.pause(1000)
        elt.waitForDisplayed()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.click()
        elt.clearValue()
    },

    enterValueAndPressReturn(elt, value)
    {
        elt.waitForExist({timeout: 20000})
        elt.waitForDisplayed()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.click()
        browser.pause(1000)
        browser.keys(value)
        browser.pause(2000)
        browser.keys('Enter')
        browser.pause(1000)
    },

    clickElement(elt)
    {
        elt.waitForExist({timeout: 20000})
        elt.waitForDisplayed({timeout:10000})
        elt.waitForClickable()
        elt.click() 
    },

    doubleClickElement(elt)
    {
        elt.waitForDisplayed({timeout:5000})
        elt.waitForClickable()
        elt.doubleClick() 
    },

    selectTextFromDropdown(elt,text)
    {
        browser.pause(1000)
        elt.waitForDisplayed()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.selectByVisibleText(text) 
    },

    elementExists(elt)
    {
       return elt.waitForDisplayed({timeout:25000})
    },

    uploadFile(elt,filepath)
    {
        
        var abs_path=path.resolve(filepath)
        //for uploding file in docker
        const remoteFilePath = browser.uploadFile(abs_path);
        elt.addValue(remoteFilePath)
       // elt.click()
    },

    enterDateAndTime(dateField,timeField,dateValue,timeValue)
    {
        browser.pause(1000)
        this.clickElement(dateField)
        this.clearValue(dateField)
        this.enterValueAndPressReturn(dateField,dateValue.toString())  
        browser.pause(1000)
        browser.keys("Tab")
        this.clickElement(timeField)
        browser.pause(1000)
        this.enterValue(timeField,timeValue)
    },

    enterDate(dateField,dateValue)
    {
        browser.pause(1000)
        this.clickElement(dateField)
        this.clearValue(dateField)
        this.enterValueAndPressReturn(dateField,dateValue.toString())  
        browser.pause(1000)
        browser.keys("Tab")        
    },


    enterLocation(locationField,location)
    {
       
        browser.pause(1000)
        this.clickElement(locationField)
        this.enterValue(locationField,location)
        browser.pause(3000)
        var temp= $$('//*[@class="pac-matched"]')[0] 
        temp.click()
      //  browser.keys("ArrowDown")
       // browser.keys("Enter")
        browser.pause(2000)
    },
    enterStartDate(dateField,dateValue)
    {
        browser.pause(1000)
        this.clickElement(dateField)
        this.clearValue(dateField)
        dateValue = "" + dateValue
        this.enterValueAndPressReturn(dateField,dateValue)  
        browser.pause(1000)
        browser.keys("Tab")        
    },

    domStatusComplete() {
        browser.waitUntil(
            function () {
                const state = browser.execute(function () {
                    return document.readyState;
                });
                return state === 'complete';
            }, {timeout: 60000, timeoutMsg: 'Page is not completely loaded in 60 seconds'}
        );
    },

    waitForElementClickable(elt){
        elt.waitForClickable({timeout: 60000})
    },

    isClickableWait(elt,waitTime){
        let isClickable = false;
        let i = 0;
        while (i <= waitTime) {
            isClickable = elt.isClickable();
            if (isClickable) {
                break;
            } else {
                browser.pause(500);
                i = i + 500;
            }
        }
        return isClickable;
    },

    isVisibleWait(elt,waitTime){
        let isVisible = false;
        let i = 0;
        while (i <= waitTime) {
            isVisible = elt.isDisplayed();
            if (isVisible) {
                break;
            } else {
                browser.pause(500);
                i = i + 500;
            }
        }
        return isVisible;
    },

    getElementText(elt){
        let elementText = elt.getText()
        return elementText;
    },

    waitForElementExist(elt,timeoutValue,reverseAction,timeoutMessage,intervalValue){
        elt.waitForExist({ timeout:timeoutValue, reverse:reverseAction, timeoutMsg:timeoutMessage, interval:intervalValue })
    }
}

