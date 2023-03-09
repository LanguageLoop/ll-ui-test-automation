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
        browser.waitUntil(() => {
            return browser.execute(() => {
                return document.readyState === 'complete';
            });
        }, {
            timeout: 30000, // 30 seconds
            interval: 1000, // check every 1 second
            timeoutMsg: 'Page not loaded after 30 seconds'
        });
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
    },

    isExistingWait(elt,waitTime){
        let isExisting = false;
        let i = 0;
        while (i <= waitTime) {
            isExisting = elt.isExisting();
            if (isExisting) {
                break;
            } else {
                browser.pause(500);
                i = i + 500;
            }
        }
        return isExisting;
    },

    isSelectedWait(elt,waitTime){
        let isSelected = false;
        let i = 0;
        while (i <= waitTime) {
            isSelected = elt.isSelected();
            if (isSelected) {
                break;
            } else {
                browser.pause(500);
                i = i + 500;
            }
        }
        return isSelected;
    },

    addValueAndPressReturnTab(elt, value)
    {
        this.isClickableWait(elt,20000)
        elt.clearValue()
        elt.click()
        elt.addValue(value)
        browser.keys('Enter')
        browser.keys("Tab")
        browser.pause(2000)
    },

    pressKeys(keys){
        browser.keys(keys)
    },

    getElementValue(elt){
        let elementValue = elt.getValue()
        return elementValue;
    },

    getElementTagName(elt){
        let elementTagName = elt.getTagName()
        return elementTagName;
    },

    waitUntilLoadingIconDisappears() {
        let loadingIconAjaxWait = $('//div[@class="Feedback_AjaxWait" and (contains(@style,"opacity"))]');
        browser.pause(2000);
        loadingIconAjaxWait.waitForExist({
            timeout: 30000,
            reverse: true,
            timeoutMsg: 'Loading Icon still exists after 30 sec',
            interval: 2000
        });
        loadingIconAjaxWait.waitForDisplayed({
            timeout: 30000,
            reverse: true,
            timeoutMsg: 'Loading Icon still visible after 30 sec',
            interval: 2000
        })
    },

    getPageUrl() {
        let pageURL = browser.getUrl();
        console.log("Page URL is: "+pageURL);
        return pageURL;
    },

    navigateToLatestWindow() {
        browser.pause(2000);
        let windowHandles = browser.getWindowHandles();
        let newWindowHandle = windowHandles[windowHandles.length - 1];
        browser.switchToWindow(newWindowHandle);
        console.log("Switched to window: "+newWindowHandle);
    },

    /**
     * Waits until the element is NOT visible with in wait time
     * @param elt
     * @param waitTime
     * @returns {boolean}
     */
    isNotVisibleWait(elt, waitTime) {
        let isVisible = true;
        let i = 0;
        while (i <= waitTime) {
            isVisible = elt.isDisplayed();
            if (isVisible) {
                browser.pause(500);
                i = i + 500;
            } else {
                break;
            }
        }
        return isVisible;
    },

    /**
     * Moves the mouse to the center of the element
     * @param elt
     */
    moveToElement(elt) {
        this.isVisibleWait(elt, 20000);
        elt.moveTo();
    },

    isEnabledWait(elt,waitTime){
        let isEnabled = false;
        let i = 0;
        while (i <= waitTime) {
            isEnabled = elt.isEnabled()
            if (isEnabled) {
                break;
            } else {
                browser.pause(500);
                i = i + 500;
            }
        }
        return isEnabled;
    },

    getElementAttribute(elt,attributeName){
        let elementAttributeValue = elt.getAttribute(attributeName)
        return elementAttributeValue;
    },
}

