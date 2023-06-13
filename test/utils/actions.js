var path=require('path')
module.exports={

    enterValue(elt, value, eltFriendlyName)
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
        if (eltFriendlyName !== undefined) {
            logger.info("Entered " + value + " in " + eltFriendlyName);
        }
    },

    clearValue(elt, eltFriendlyName)
    {
        browser.pause(1000)
        elt.waitForDisplayed()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.click()
        elt.clearValue()
        if (eltFriendlyName !== undefined) {
            logger.info("Cleared value in " + eltFriendlyName);
        }
    },

    enterValueAndPressReturn(elt, value, eltFriendlyName)
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
        if (eltFriendlyName !== undefined) {
            logger.info("Entered " + value + " in " + eltFriendlyName);
        }
    },

    clickElement(elt, eltFriendlyName)
    {
        elt.waitForExist({timeout: 20000})
        elt.waitForDisplayed({timeout:10000})
        elt.waitForClickable()
        elt.click()
        if (eltFriendlyName !== undefined) {
            logger.info("Clicked on " + eltFriendlyName);
        }
    },

    doubleClickElement(elt, eltFriendlyName)
    {
        elt.waitForDisplayed({timeout:5000})
        elt.waitForClickable()
        elt.doubleClick()
        if (eltFriendlyName !== undefined) {
            logger.info("Double clicked on " + eltFriendlyName);
        }
    },

    selectTextFromDropdown(elt,text, eltFriendlyName)
    {
        browser.pause(1000)
        elt.waitForDisplayed()
        elt.waitForEnabled()
        elt.waitForClickable()
        elt.selectByVisibleText(text)
        if (eltFriendlyName !== undefined) {
            logger.info("Selected " + text + " in " + eltFriendlyName);
        }
    },

    elementExists(elt, eltFriendlyName)
    {
        if (eltFriendlyName !== undefined) {
            logger.info("Waiting for " + eltFriendlyName + " to exist");
        }
       return elt.waitForDisplayed({timeout:25000})
    },

    uploadFile(elt,filepath, eltFriendlyName)
    {
        
        var abs_path=path.resolve(filepath)
        //for uploding file in docker
        const remoteFilePath = browser.uploadFile(abs_path);
        elt.addValue(remoteFilePath)
       // elt.click()
        if (eltFriendlyName !== undefined) {
            logger.info("Uploaded file " + filepath + " in "+eltFriendlyName);
        }
    },

    enterDateAndTime(dateField,timeField,dateValue,timeValue, eltFriendlyName)
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
        if (eltFriendlyName !== undefined) {
            logger.info("Entered Date " + dateValue + " and Time " + timeValue + " in " + eltFriendlyName);
        }
    },

    enterDate(dateField,dateValue, eltFriendlyName)
    {
        browser.pause(1000)
        this.clickElement(dateField)
        this.clearValue(dateField)
        this.enterValueAndPressReturn(dateField,dateValue.toString())  
        browser.pause(1000)
        browser.keys("Tab")
        if (eltFriendlyName !== undefined) {
            logger.info("Entered Date " + dateValue + " in " + eltFriendlyName);
        }
    },


    enterLocation(locationField,location, eltFriendlyName)
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
        if (eltFriendlyName !== undefined) {
            logger.info("Entered Location " + location + " in " + eltFriendlyName);
        }
    },
    enterStartDate(dateField,dateValue, eltFriendlyName)
    {
        browser.pause(1000)
        this.clickElement(dateField)
        this.clearValue(dateField)
        dateValue = "" + dateValue
        this.enterValueAndPressReturn(dateField,dateValue)  
        browser.pause(1000)
        browser.keys("Tab")
        if (eltFriendlyName !== undefined) {
            logger.info("Entered Date " + dateValue + " in " + eltFriendlyName);
        }
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

    waitForElementClickable(elt, eltFriendlyName){
        if (eltFriendlyName !== undefined) {
            logger.info("Waiting for " + eltFriendlyName + " to be clickable");
        }
        elt.waitForClickable({timeout: 60000})
    },

    isClickableWait(elt,waitTime, eltFriendlyName){
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
        if (eltFriendlyName !== undefined) {
            logger.info(eltFriendlyName + " is clickable status after waiting is "+isClickable);
        }
        return isClickable;
    },

    isVisibleWait(elt,waitTime, eltFriendlyName){
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
        if (eltFriendlyName !== undefined) {
            logger.info(eltFriendlyName + " is Visible status after waiting is "+isVisible);
        }
        return isVisible;
    },

    getElementText(elt, eltFriendlyName){
        let elementText = elt.getText()
        if (eltFriendlyName !== undefined) {
            logger.info("Fetched text of "+eltFriendlyName+" as "+elementText);
        }
        return elementText;
    },

    waitForElementExist(elt,timeoutValue,reverseAction,timeoutMessage,intervalValue, eltFriendlyName){
        if (eltFriendlyName !== undefined) {
            logger.info("Waiting for " + eltFriendlyName + " to exist");
        }
        elt.waitForExist({ timeout:timeoutValue, reverse:reverseAction, timeoutMsg:timeoutMessage, interval:intervalValue })
    },

    isExistingWait(elt,waitTime, eltFriendlyName){
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
        if (eltFriendlyName !== undefined) {
            logger.info(eltFriendlyName + " is Existing status after waiting is "+isExisting);
        }
        return isExisting;
    },

    isSelectedWait(elt,waitTime, eltFriendlyName){
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
        if (eltFriendlyName !== undefined) {
            logger.info(eltFriendlyName + " is Selected status after waiting is "+isSelected);
        }
        return isSelected;
    },

    addValueAndPressReturnTab(elt, value, eltFriendlyName)
    {
        this.isClickableWait(elt,20000)
        elt.clearValue()
        elt.click()
        elt.addValue(value)
        browser.keys('Enter')
        browser.keys("Tab")
        browser.pause(2000)
        if (eltFriendlyName !== undefined) {
            logger.info("Entered " + value + " in " + eltFriendlyName + " and pressed RETURN and TAB keys");
        }
    },

    /**
     * Send a sequence of keystrokes to the active element. You can also use characters like "Left arrow" or "Back space". WebdriverIO will take care of translating them into unicode characters. You’ll find all supported characters here (https://w3c.github.io/webdriver/#keyboard-actions). To do that, the value has to correspond to a key from the table.
     * Modifier like Ctrl, Shift, Alt and Meta will stay pressed, so you need to trigger them again to release them.
     * @param keys
     */
    pressKeys(keys){
        browser.keys(keys)
        if (keys !== undefined) {
            logger.info("Pressed keyboard keys " + keys);
        }
    },

    /**
     * Get the value of a <textarea>, <select> or text <input> found by given selector. If multiple elements are found via the given selector, an array of values is returned instead
     * @param elt
     * @returns {*}
     */
    getElementValue(elt, eltFriendlyName){
        let elementValue = elt.getValue()
        if (eltFriendlyName !== undefined) {
            logger.info("Fetched Value of "+eltFriendlyName+" as "+elementValue);
        }
        return elementValue;
    },

    /**
     * Get tag name of a DOM-element.
     * @param elt
     * @returns {Promise<string> | string}
     */
    getElementTagName(elt, eltFriendlyName){
        let elementTagName = elt.getTagName()
        if (eltFriendlyName !== undefined) {
            logger.info("Fetched Tag Name of "+eltFriendlyName+" as "+elementTagName);
        }
        return elementTagName;
    },

    /**
     * Waits until the loading ajax wait icon disappears
     */
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

    /**
     * The Get Current URL command returns the URL of the current top-level browsing context.
     * @returns {string}
     */
    getPageUrl() {
        let pageURL = browser.getUrl();
        logger.info("Fetched Page URL as "+pageURL);
        return pageURL;
    },

    /**
     * Switches focus to the latest available window
     */
    navigateToLatestWindow() {
        browser.pause(2000);
        let windowHandles = browser.getWindowHandles();
        let newWindowHandle = windowHandles[windowHandles.length - 1];
        browser.switchToWindow(newWindowHandle);
        logger.info("Switched to latest window "+newWindowHandle);
    },

    /**
     * Waits until the element is NOT visible with in wait time and returns true or false if the selected DOM-element is displayed.
     * @param elt
     * @param waitTime
     * @returns {boolean}
     */
    isNotVisibleWait(elt, waitTime, eltFriendlyName) {
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
        if (eltFriendlyName !== undefined) {
            logger.info(eltFriendlyName + " is visible status after waiting is "+isVisible);
        }
        return isVisible;
    },

    /**
     * Moves the mouse to the center of the element
     * @param elt
     */
    moveToElement(elt, eltFriendlyName) {
        this.isVisibleWait(elt, 20000);
        elt.moveTo();
        if (eltFriendlyName !== undefined) {
            logger.info("Moved mouse over "+eltFriendlyName);
        }
    },

    /**
     * Waits until the specified element is enabled and returns true or false if the selected DOM-element is enabled.
     * @param elt
     * @param waitTime
     * @returns {boolean}
     */
    isEnabledWait(elt,waitTime, eltFriendlyName){
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
        if (eltFriendlyName !== undefined) {
            logger.info(eltFriendlyName + " is enabled status after waiting is "+isEnabled);
        }
        return isEnabled;
    },

    /**
     * Get an attribute from a DOM-element based on the attribute name.
     * @param elt
     * @param attributeName
     * @returns {*}
     */
    getElementAttribute(elt,attributeName, eltFriendlyName){
        let elementAttributeValue = elt.getAttribute(attributeName)
        if (eltFriendlyName !== undefined) {
            logger.info("Fetched Attribute " + attributeName + "  value of " + eltFriendlyName + " as " + elementAttributeValue);
        }
        return elementAttributeValue;
    },

    /**
     * Get page title of the current focused window
     * @returns {string}
     */
    getPageTitle() {
        let pageTitle = browser.getTitle();
        logger.info("Fetched Page Title as "+pageTitle);
        return pageTitle;
    },

    /**
     * Get source code of specified DOM element by selector.
     * @param elt
     * @returns {Promise<string> | string}
     */
    getElementHTML(elt, eltFriendlyName){
        let elementHTML = elt.getHTML()
        if (eltFriendlyName !== undefined) {
            logger.info("Fetched Element HTML of " + eltFriendlyName);
        }
        return elementHTML;
    },

    /**
     * The Get Window Handle command returns the window handle for the current top-level browsing context.
     * It can be used as an argument to Switch To Window.
     * @returns {string}
     */
    getWindowHandle() {
        browser.pause(2000);
        let windowHandle = browser.getWindowHandle();
        logger.info("Fetched windowHandle as "+windowHandle);
        return windowHandle;
    },

    /**
     * The Switch To Window command is used to select the current top-level browsing context for the current session, i.e. the one that will be used for processing commands.
     * @param windowHandle
     */
    navigateToWindowHandle(windowHandle) {
        browser.pause(2000);
        browser.switchToWindow(windowHandle);
        logger.info("Switched to window "+windowHandle);
    },

    /**
     * Protocol binding to load the URL of the browser. If a baseUrl is specified in the config, it will be prepended to the url parameter using node's url.resolve() method.
     * @returns {string}
     */
    launchURL(URL) {
        browser.url(URL);
        logger.info("Launched URL "+URL);
    },

    /**
     * Clicks on the element without explicitly waiting for the element
     * @param elt
     */
    clickWithOutWait(elt, eltFriendlyName)
    {
        elt.click()
        if (eltFriendlyName !== undefined) {
            logger.info("Clicked without wait on " + eltFriendlyName);
        }
    },

    /**
     * Fetches and Returns The text of the currently displayed alert.
     * @returns {string}
     */
    getAlertText()
    {
        let alertText = browser.getAlertText();
        logger.info("Fetched Alert text as "+alertText);
        return alertText
    },

    /**
     * Clicks OK on currently displayed alert and accepts the alert.
     */
    acceptAlert()
    {
        logger.info("Accepting the Alert");
        return browser.acceptAlert();
    },

    reloadSession() {
        browser.reloadSession()
        logger.info("Reloaded Session");
    },
}

