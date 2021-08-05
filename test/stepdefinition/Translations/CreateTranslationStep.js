const { wrapCallSite } = require("source-map-support");

When(/^I click translations link$/, function() {
	translationsPage.translationsLink.waitForExist({timeout:5000})
    action.clickElement(translationsPage.translationsLink)
});

When(/^I click start a new project$/, function() {
	translationsPage.startNewProject.waitForExist({timeout:5000})
	action.clickElement(translationsPage.startNewProject)
});


When(/^I enter  campus pin "([^"]*)"$/, function(args1) {
	translationsPage.campusPinInput.setValue(args1)
	//To press enter button
	browser.keys("\uE007")
	translationsPage.selectContactWin.waitForExist({timeout:5000})
	
	translationsPage.selectContact.waitForClickable({timeout:5000})
	action.clickElement(translationsPage.selectContact)
	translationsPage.nextButton.waitUntil(()=>{
	return translationsPage.nextButton.isDisplayed()}, 5000)
		


});


When(/^I click next$/, function() {
	action.clickElement(translationsPage.nextButton)
	browser.pause(7000)
});


When(/^I enter "([^"]*)"$/, function(project)  {
	project = project + (Math.floor(Math.random() * 1000000) + 1).toString()
	translationsPage.projName.setValue(project)
	browser.pause(3000)
});

When(/^I select "([^"]*)", "([^"]*)","([^"]*)"$/, function (manager,service,workflow) {
	translationsPage.projManager.selectByVisibleText(manager)
	browser.pause(2000)
	translationsPage.serviceType.selectByVisibleText(service)
	browser.pause(2000)
	translationsPage.selWorkflow.selectByVisibleText(workflow)
	browser.pause(2000)
});

When(/^I select preferred delivery date$/, () => {
	var preferDeldate = datetime.getLongNoticeDate()
	action.enterDate(translationsPage.delDate,preferDeldate)
});


When(/^I select "([^"]*)" and "([^"]*)"$/, function(langFrom,langTo)  {
	action.enterValueAndPressReturn(translationsPage.languageFrom,langFrom)
	action.enterValueAndPressReturn(translationsPage.languageTo,langTo)
});


When(/^I upload translation files$/, function()  {
	action.clickElement(translationsPage.addFilesLink)
	translationsPage.addFiles.waitForExist()
	action.uploadFile(translationsPage.addFiles,"./test/data/translationfile1.docx")
	translationsPage.upload.waitUntil(()=>{
		return translationsPage.upload.isClickable()},7000)
	action.clickElement(translationsPage.upload)
});


When(/^I click on Save & Proceed button$/, function()  {
	action.clickElement(translationsPage.save)
	browser.pause(4000)
});

When(/^I click on Submit$/, () => {
	return true;
});
