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

When(/^I select "([^"]*)", "([^"]*)","([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});

When(/^I select "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I select "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I select "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I select "([^"]*)" and "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});

When(/^I upload "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

When(/^I click on Save & Proceed button$/, () => {
	return true;
});

When(/^I click on Submit$/, () => {
	return true;
});
