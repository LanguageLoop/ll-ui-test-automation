
Given(/^The Admin is viewing the Accounts section on the Admin page$/, function () {
   let accountsSectionDisplayStatus = action.isVisibleWait(adminPage.accountsSection, 5000,"Accounts Section in Admin page");
   chai.expect(accountsSectionDisplayStatus).to.be.true;
})

When(/^They view the table$/, function () {
   let tableDisplayStatus = action.isVisibleWait(adminPage.accountsUserDetailsTable, 5000,"Account user details table in Admin page");
   chai.expect(tableDisplayStatus).to.be.true;
})

Then(/^They will see a Creation Date column$/, function () {
   let creationDateColDisplayStatus = action.isVisibleWait(adminPage.creationDateColumn, 5000,"Creation Date column in Admin page");
   chai.expect(creationDateColDisplayStatus).to.be.true;
})

Then(/^This will display after the Username column$/, function () {
   let afterUsernameColDisplayStatus = action.isVisibleWait(adminPage.creationDateAfterUserNameColumn, 5000,"Creation date after user name column in Admin page");
   chai.expect(afterUsernameColDisplayStatus).to.be.true;
})

Then(/^Be displayed before the Mobile Phone column$/, function () {
   let beforeMobilePhoneColDisplayStatus = action.isVisibleWait(adminPage.creationDateBeforeMobilePhoneColumn, 5000,"Creation date before mobile phone column in Admin page");
   chai.expect(beforeMobilePhoneColDisplayStatus).to.be.true;
})

Then(/^The table will be sorted by Creation Date by default newest at the top$/, function () {
   let creationDateRow1Element = $(adminPage.creationDateRowValueLocator.replace("<dynamic>", "1"));
   let creationDateRow2Element = $(adminPage.creationDateRowValueLocator.replace("<dynamic>", "2"));
   let creationDateRow1Value = action.getElementText(creationDateRow1Element,"Creation date in row 1 in Admin page")
   let creationDateRow2Value = action.getElementText(creationDateRow2Element,"Creation date row 2 in Admin page")
   let dateNew = datetime.parseDateString(creationDateRow1Value);
   let dateOld = datetime.parseDateString(creationDateRow2Value);
   let newestFirstStatus = dateNew.getTime() > dateOld.getTime();
   chai.expect(newestFirstStatus).to.be.true;
})

When(/^They click the Creation Date column header$/, function () {
   action.isClickableWait(adminPage.creationDateColumnHeader, 5000,"Creation Date column header in Admin page");
   action.clickElement(adminPage.creationDateColumnHeader,"Creation Date column header in Admin page");
})

Then(/^The table order will be reversed and will be sorted by oldest-newest Creation Date$/, function () {
   let creationDateRow1Element = $(adminPage.creationDateRowValueLocator.replace("<dynamic>", "1"));
   let blankDateText = "", oldestAccountText = "LL Admin";
   browser.waitUntil(
      () => action.getElementText(creationDateRow1Element) === blankDateText,
      {
         timeout: 5000,
         timeoutMsg: 'Expected Dates to be sorted in reverse'
      }
   );
   let creationDateRow1Value = action.getElementText(creationDateRow1Element,"Creation Date in row1 in Admin page");
   let firstRowText = action.getElementText(adminPage.accountsTableFirstRow,"Accounts table first row in Admin page");
   chai.expect(creationDateRow1Value).to.equal(blankDateText);
   chai.expect(firstRowText).to.includes(oldestAccountText);
})

Then(/^They will see a Role filter dropdown$/, function () {
   let roleDropdownDisplayStatus = action.isVisibleWait(adminPage.roleFilterDropdown, 5000,"Role filter dropdown in Admin page");
   chai.expect(roleDropdownDisplayStatus).to.be.true;
})

Then(/^This will be below the search field$/, function () {
   let roleDropdownBelowSearchStatus = action.isVisibleWait(adminPage.roleFilterDropdownBelowSearchField, 5000,"Role filter dropdown below search field in Admin page");
   chai.expect(roleDropdownBelowSearchStatus).to.be.true;
})

Then(/^The options will be grouped into the following labels: "(.*)","(.*)","(.*)"$/, function (clientGroupLabel, contractorGroupLabel, StaffGroupLabel) {
   let clientGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>", clientGroupLabel));
   let clientGroupLabelExistStatus = action.isExistingWait(clientGroupLabelElement, 2000,"Client group label in Admin page");
   let contractorGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>", contractorGroupLabel));
   let contractorGroupLabelExistStatus = action.isExistingWait(contractorGroupLabelElement, 2000,"Contract group label in Admin page");
   let staffGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>", StaffGroupLabel));
   let staffGroupLabelExistStatus = action.isExistingWait(staffGroupLabelElement, 2000,"Staff group label in Admin page");
   chai.expect(clientGroupLabelExistStatus).to.be.true;
   chai.expect(contractorGroupLabelExistStatus).to.be.true;
   chai.expect(staffGroupLabelExistStatus).to.be.true;
})

Then(/^These labels "(.*)","(.*)","(.*)" are not clickable$/, function (clientGroupLabel, contractorGroupLabel, StaffGroupLabel) {
   let clientGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>", clientGroupLabel));
   let clientGroupLabelClickableStatus = action.isClickableWait(clientGroupLabelElement, 2000,"Client group label in Admin page");
   let contractorGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>", contractorGroupLabel));
   let contractorGroupLabelClickableStatus = action.isClickableWait(contractorGroupLabelElement, 2000,"Contract group label in Admin page");
   let staffGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>", StaffGroupLabel));
   let staffGroupLabelClickableStatus = action.isClickableWait(staffGroupLabelElement, 2000,"Staff group label in Admin page");
   chai.expect(clientGroupLabelClickableStatus).to.be.false;
   chai.expect(contractorGroupLabelClickableStatus).to.be.false;
   chai.expect(staffGroupLabelClickableStatus).to.be.false;
})

Given(/^The Admin or Internal user has clicked the Role filter dropdown$/, function () {
   action.isVisibleWait(adminPage.roleFilterDropdown, 5000,"Role filter dropdown in Admin page");
   action.clickElement(adminPage.roleFilterDropdown,"Role filter dropdown in Admin page");
})

Then(/^They will see the following child options in the order under each label: Client Group "(.*)" Contractor Group "(.*)" Staff Group"(.*)"$/, function (clientGroupOptions, contractorGroupOptions, staffGroupOptions) {
   let clientGroupOptionsList = clientGroupOptions.split(",");
   for (let optionIndex = 0; optionIndex < clientGroupOptionsList.length; optionIndex++) {
      let clientGroupOption = $(adminPage.clientGroupOptionsLocator.replace("<dynamic>", clientGroupOptionsList[optionIndex]));
      let clientOptionExistStatus = action.isExistingWait(clientGroupOption, 5000,"Client group option in Admin page");
      chai.expect(clientOptionExistStatus).to.be.true;
   }
   let contractorGroupOptionsList = contractorGroupOptions.split(",");
   for (let optionIndex = 0; optionIndex < contractorGroupOptionsList.length; optionIndex++) {
      let contractorGroupOption = $(adminPage.contractorGroupOptionsLocator.replace("<dynamic>", contractorGroupOptionsList[optionIndex]));
      let contractorOptionExistStatus = action.isExistingWait(contractorGroupOption, 5000,"Contractor group option in Admin page");
      chai.expect(contractorOptionExistStatus).to.be.true;
   }
   let staffGroupOptionsList = staffGroupOptions.split(",");
   for (let optionIndex = 0; optionIndex < staffGroupOptionsList.length; optionIndex++) {
      let staffGroupOption = $(adminPage.staffGroupOptionsLocator.replace("<dynamic>", staffGroupOptionsList[optionIndex]));
      let staffOptionExistStatus = action.isExistingWait(staffGroupOption, 5000,"Staff group option in Admin page");
      chai.expect(staffOptionExistStatus).to.be.true;
   }
})

Then(/^These options Client Group "(.*)" Contractor Group "(.*)" Staff Group"(.*)" can be selected$/, function (clientGroupOptions, contractorGroupOptions, staffGroupOptions) {
   let clientGroupOptionsList = clientGroupOptions.split(",");
   for (let optionIndex = 0; optionIndex < clientGroupOptionsList.length; optionIndex++) {
      let clientGroupOption = $(adminPage.clientGroupOptionsLocator.replace("<dynamic>", clientGroupOptionsList[optionIndex]));
      action.selectTextFromDropdown(adminPage.roleFilterDropdown, clientGroupOptionsList[optionIndex],"Role filter dropdown in Admin page");
      let clientOptionSelectedStatus = action.isSelectedWait(clientGroupOption, 5000,"Client group option in Admin page");
      chai.expect(clientOptionSelectedStatus).to.be.true;
   }
   let contractorGroupOptionsList = contractorGroupOptions.split(",");
   for (let optionIndex = 0; optionIndex < contractorGroupOptionsList.length; optionIndex++) {
      let contractorGroupOption = $(adminPage.contractorGroupOptionsLocator.replace("<dynamic>", contractorGroupOptionsList[optionIndex]));
      action.selectTextFromDropdown(adminPage.roleFilterDropdown, contractorGroupOptionsList[optionIndex],"Role filter dropdown in Admin page");
      let contractorOptionSelectedStatus = action.isSelectedWait(contractorGroupOption, 5000,"Contractor group option in Admin page");
      chai.expect(contractorOptionSelectedStatus).to.be.true;
   }
   let staffGroupOptionsList = staffGroupOptions.split(",");
   for (let optionIndex = 0; optionIndex < staffGroupOptionsList.length; optionIndex++) {
      let staffGroupOption = $(adminPage.staffGroupOptionsLocator.replace("<dynamic>", staffGroupOptionsList[optionIndex]));
      action.selectTextFromDropdown(adminPage.roleFilterDropdown, staffGroupOptionsList[optionIndex],"Role filter dropdown in Admin page");
      let staffOptionSelectedStatus = action.isSelectedWait(staffGroupOption, 5000,"Staff group option in Admin page");
      chai.expect(staffOptionSelectedStatus).to.be.true;
   }
})

Given(/^The user has selected an option "(.*)" from the Role filter dropdown$/, function (roleFilterOption) {
   action.clickElement(adminPage.roleFilterDropdown,"Role filter dropdown in Admin page");
   action.selectTextFromDropdown(adminPage.roleFilterDropdown, roleFilterOption,"Role filter dropdown in Admin page");
})

Then(/^The dropdown is closed$/, function () {
   action.clickElement(adminPage.roleFilterDropdown,"Role filter dropdown in Admin page");
})

When(/^The user has clicked the search button$/, function () {
   action.isClickableWait(adminPage.searchButton, 5000,"Search button in Admin page")
   action.clickElement(adminPage.searchButton,"Search button in Admin page");
})

Then(/^The table is filtered by the selected role and shows result "(.*)"$/, function (expectedOldestResultForRole) {
   action.isClickableWait(adminPage.creationDateColumnHeader, 5000,"Creation date column header in Admin page")
   action.clickElement(adminPage.creationDateColumnHeader,"Creation date column header in Admin page");
   browser.waitUntil(
      () => action.getElementText(adminPage.accountsTableFirstRow,"Accounts table first row in Admin page").includes(expectedOldestResultForRole),
      {
         timeout: 5000,
         timeoutMsg: 'Expected table to be sorted with the oldest results within given time'
      }
   );
   let firstRowText = action.getElementText(adminPage.accountsTableFirstRow,"Accounts table first row in Admin page");
   chai.expect(firstRowText).to.includes(expectedOldestResultForRole);
})

Then(/^The table shows all accounts "(.*)", "(.*)" regardless of the role$/, function (expectedResultAdmin, expectedResultNonAdmin) {
   action.isClickableWait(adminPage.creationDateColumnHeader, 5000,"Creation date column header in Admin page")
   action.clickElement(adminPage.creationDateColumnHeader,"Creation date column header in Admin page");
   browser.waitUntil(
      () => action.getElementText(adminPage.accountsUserDetailsTable,"Accounts user detail table in Admin page").includes(expectedResultAdmin),
      {
         timeout: 5000,
         timeoutMsg: 'Expected table to be sorted with all the oldest results within given time'
      }
   );
   let tableText = action.getElementText(adminPage.accountsUserDetailsTable,"Accounts user detail table in Admin page");
   chai.expect(tableText).to.includes(expectedResultAdmin);
   chai.expect(tableText).to.includes(expectedResultNonAdmin);
})

Then(/^The user "(.*)" will be displayed in the Admin > Accounts section$/, function (expectedUser) {
   expectedUser = GlobalData.BOOKING_OFFICER_FIRSTNAME;
   browser.waitUntil(
      () => action.getElementText(adminPage.accountsUserDetailsTable,"Accounts user detail table in Admin page").includes(expectedUser),
      {
         timeout: 5000,
         timeoutMsg: 'Expected table to be sorted with all the oldest results within given time'
      }
   );
   let tableText = action.getElementText(adminPage.accountsUserDetailsTable,"Accounts user detail table in Admin page");
   chai.expect(tableText).to.includes(expectedUser);
})

Then(/^The Created Date is captured in the form of DD slash MM slash YYYY HH:MM:SS$/, function () {
   let createdUserCreationDateTextElement = $(adminPage.creationDateOfCreatedUserLocator.replace("<dynamic>", GlobalData.BOOKING_OFFICER_FIRSTNAME));
   action.isVisibleWait(createdUserCreationDateTextElement, 10000,"Created user creation date in Admin page");
   let creationDateActual = action.getElementText(createdUserCreationDateTextElement,"Created user creation date in Admin page");
   let currentDate = datetime.getCurrentDate();
   chai.expect(creationDateActual.split(" ")[0]).to.equal(currentDate)
   chai.expect(creationDateActual.charAt(2)).to.equal("/")
   chai.expect(creationDateActual.charAt(5)).to.equal("/")
   chai.expect(creationDateActual.charAt(13)).to.equal(":")
   chai.expect(creationDateActual.charAt(16)).to.equal(":")
})

When(/^Clicks Create Account$/, function () {
   action.isClickableWait(adminPage.createAccountButton, 5000,"Created Account button in Admin page");
   action.clickElement(adminPage.createAccountButton,"Created Account button in Admin page");
})

When(/^Selects any role "(.*)"$/, function (role) {
   let roleToggleElement = $(adminPage.roleToggleLocator.replace("<dynamic>", role));
   action.isVisibleWait(roleToggleElement, 10000,"Role toggle in Admin page");
   action.isClickableWait(roleToggleElement, 10000,"Role toggle in Admin page");
   action.clickElement(roleToggleElement,"Role toggle in Admin page");
   browser.pause(1000);
   let roleToggleStatusElement = $(adminPage.roleToggleStatusLocator.replace("<dynamic>", role));
   let toggleElementClassActual = action.getElementAttribute(roleToggleStatusElement,"class","Role toggle status in Admin page");
   let counter = 0;
   while (toggleElementClassActual.includes("changed") === false && counter < 3) {
      action.clickElement(roleToggleElement,"Role toggle in Admin page");
      toggleElementClassActual = action.getElementAttribute(roleToggleStatusElement, "class","Role toggle status in Admin page");
      counter++;
   }
})

Given(/^Fills out all the required details "(.*)", email, "(.*) in Admin Page"$/, function (firstName, landLineNumber) {
   action.isVisibleWait(adminPage.firstNameFieldCreateAccount, 10000,"First name text box create account in Admin page");
   firstName = firstName + (Math.floor(Math.random() * 100000) + 1).toString()
   GlobalData.BOOKING_OFFICER_FIRSTNAME = firstName
   action.enterValue(adminPage.firstNameFieldCreateAccount, GlobalData.BOOKING_OFFICER_FIRSTNAME,"First name text box create account in Admin page");
   let email = GlobalData.BOOKING_OFFICER_FIRSTNAME + "@ll.com"
   action.enterValue(adminPage.emailFieldCreateAccount, email,"Email text box create account in Admin page");
   action.enterValue(adminPage.landLineNumberFieldCreateAccount, landLineNumber,"Landline number text box create account in Admin page");
})

When(/^They click the Save Detail button$/, function () {
   action.isClickableWait(adminPage.saveDetailButton, 10000,"Save detail button in Admin page");
   action.clickElement(adminPage.saveDetailButton,"Save detail button in Admin page");
})

Then(/^The user is created in Admin Page$/, function () {
   action.isExistingWait(adminPage.userCreatedMessage, 20000);
   let userCreatedMessageDisplayStatus = action.isVisibleWait(adminPage.userCreatedMessage, 20000,"User created message in Admin page");
   chai.expect(userCreatedMessageDisplayStatus).to.be.true;
})

Given(/^The user has access to the User’s profile$/, function () {
   let userProfileNameDisplayStatus = action.isVisibleWait(adminPage.userProfileNameText, 20000,"User profile name text in Admin page");
   chai.expect(userProfileNameDisplayStatus).to.be.true;
})

Given(/^They view the profile$/, function () {
   action.isClickableWait(adminPage.userProfileNameText, 20000,"User profile name text in Admin page");
   action.clickElement(adminPage.userProfileNameText,"User profile name text in Admin page");
})

Then(/^They will see the Created Date: DD MM YYYY HH:MM:SS under the Profile picture box AND this applies to all roles$/, function () {
   action.isVisibleWait(adminPage.createdDateTextUnderProfilePic,20000,"Created date under User profile pic in Admin page");
   let createdDateFullText = action.getElementText(adminPage.createdDateTextUnderProfilePic,"Created date under User profile pic in Admin page");
   let createdDateValue = createdDateFullText.split(": ")[1];
   chai.expect(createdDateValue.charAt(2)).to.equal("/");
   chai.expect(createdDateValue.charAt(5)).to.equal("/");
   chai.expect(createdDateValue.charAt(13)).to.equal(":");
   chai.expect(createdDateValue.charAt(16)).to.equal(":");
})

When(/^I search and select account "(.*)" in Admin$/, function (account) {
   action.isVisibleWait(adminPage.accountsSearchByTextBox, 10000,"Accounts search by text box in Admin page");
   action.enterValue(adminPage.accountsSearchByTextBox, account,"Accounts search by text box in Admin page");
   action.isClickableWait(adminPage.searchButton, 10000,"Search button in Admin page");
   action.clickElement(adminPage.searchButton,"Search button in Admin page");
   let accountSearchResultLink = $(adminPage.accountSearchResultLinkLocator.replace("<dynamic>", account));
   action.isClickableWait(accountSearchResultLink, 20000,"Account Search result link in Admin page")
   action.clickElement(accountSearchResultLink,"Account Search result link in Admin page");
})

When(/^I click Edit Profile Button in Account Profile$/, function () {
   action.isClickableWait(adminPage.editProfileButton, 10000,"Edit profile button in Admin page");
   action.clickElement(adminPage.editProfileButton,"Edit profile button in Admin page");
})

When(/^I select show dollar amounts on ODTI checkbox if not already selected$/, function () {
   let show$AmountsOnODTISelectedStatus = action.isSelectedWait(adminPage.show$AmountsOnODTICheckbox, 10000,"Show $ amounts on ODTI checkbox in Admin page");
   if (show$AmountsOnODTISelectedStatus === false) {
      action.clickElement(adminPage.show$AmountsOnODTICheckbox,"Show $ amounts on ODTI checkbox in Admin page");
   }
   browser.waitUntil(
      () => action.isSelectedWait(adminPage.show$AmountsOnODTICheckbox, 0,"Show $ amounts on ODTI checkbox in Admin page") === true,
      {
         timeout: 5000,
         timeoutMsg: 'Expected checkbox to selected with in 5 sec'
      }
   );
   show$AmountsOnODTISelectedStatus = action.isSelectedWait(adminPage.show$AmountsOnODTICheckbox, 10000,"Show $ amounts on ODTI checkbox in Admin page");
   chai.expect(show$AmountsOnODTISelectedStatus).to.be.true;
})

When(/^I unselect show dollar amounts on ODTI checkbox if already selected$/, function () {
   let show$AmountsOnODTISelectedStatus = action.isSelectedWait(adminPage.show$AmountsOnODTICheckbox, 10000,"Show $ amounts on ODTI checkbox in Admin page");
   if (show$AmountsOnODTISelectedStatus === true) {
      action.clickElement(adminPage.show$AmountsOnODTICheckbox,"Show $ amounts on ODTI checkbox in Admin page");
   }
   browser.waitUntil(
      () => action.isSelectedWait(adminPage.show$AmountsOnODTICheckbox, 0,"Show $ amounts on ODTI checkbox in Admin page") === false,
      {
         timeout: 5000,
         timeoutMsg: 'Expected checkbox to be not selected with in 5 sec'
      }
   );
   show$AmountsOnODTISelectedStatus = action.isSelectedWait(adminPage.show$AmountsOnODTICheckbox, 10000,"Show $ amounts on ODTI checkbox in Admin page");
   chai.expect(show$AmountsOnODTISelectedStatus).to.be.false;
})

When(/^I click save detail button$/, function () {
   action.isClickableWait(adminPage.saveDetailButton, 10000,"Save detail button in Admin page");
   action.clickElement(adminPage.saveDetailButton,"Save detail button in Admin page");
})

When(/^The Admin is viewing the Naati Accreditations section on the Admin page$/, function () {
   let naatiAccreditationsSections = action.isVisibleWait(adminPage.naatiAccreditations, 5000,"NAATI accreditation in Admin page");
   chai.expect(naatiAccreditationsSections).to.be.true;
   let naatiElementValue = $(adminPage.fisrtNaatiWeightElement.replace("<dynamic1>", "1").replace("<dynamic2>", "5"));
   GlobalData.ACTUAL_NAATI_WEIGHT_VALUE = action.getElementText(naatiElementValue,"NAATI value in Admin page");
})

When(/^I select the fisrt Naati Level$/, function () {
   let fisrtNaatiElement = $(adminPage.fisrtNaatiLevelElement.replace("<dynamic1>", "1").replace("<dynamic2>", "2"));
   action.isClickableWait(fisrtNaatiElement, 10000,"First NAATI level in Admin page");
   action.clickElement(fisrtNaatiElement,"First NAATI level in Admin page");
})

When(/^I see Manage Naati Accreditation popup is displayed$/, function () {
   let manageNaatiAccreditationPopupStatus = action.isVisibleWait(adminPage.manageNaatiAccreditationPopup, 10000,"Manage accreditation popup in Admin page");
   chai.expect(manageNaatiAccreditationPopupStatus).to.be.true;
})

When(/^I enter the NAATI Weight equal to "(.*)" by clearing the previous existing value$/, function (expectedNaatiWeight) {
   let naatiWeightFieldStatus = action.isVisibleWait(adminPage.naatiWeightField, 10000,"NAATI weight text box in Admin page");
   chai.expect(naatiWeightFieldStatus).to.be.true;
   GlobalData.PREVIOUS_NAATI_VALUE = action.getElementValue(adminPage.naatiWeightField,"NAATI weight text box in Admin page");
   action.enterValue(adminPage.naatiWeightField, expectedNaatiWeight,"NAATI weight text box in Admin page");
})

When(/^I click on Save button$/, function () {
   action.isClickableWait(adminPage.saveButton, 10000,"Save button in Admin page");
   action.clickElement(adminPage.saveButton,"Save button in Admin page");
})

Then(/^the entered Naati Weight should be saved and displayed value "(.*)"$/, function (expectedNewNaatiWeight) {
   let naatiElementValue = $(adminPage.fisrtNaatiWeightElement.replace("<dynamic1>", "1").replace("<dynamic2>", "5"));
   browser.waitUntil(
      () => action.getElementText(naatiElementValue,"NAATI element value in Admin page") === expectedNewNaatiWeight,
      {
         timeout: 20000,
         timeoutMsg: 'expected Naati weight to be displayed in 20s'
      }
   );
   let naatiElementValueActual = action.getElementText(naatiElementValue,"NAATI element value in Admin page");
   chai.expect(naatiElementValueActual).to.equal(expectedNewNaatiWeight);
})

When(/^I revert the Naati Weight to the orginal value$/, function () {
   let fisrtNaatiElement = $(adminPage.fisrtNaatiLevelElement.replace("<dynamic1>", "1").replace("<dynamic2>", "2"));
   action.isClickableWait(fisrtNaatiElement, 10000,"First NAATI in Admin page");
   action.clickElement(fisrtNaatiElement,"First NAATI in Admin page");
   action.enterValue(adminPage.naatiWeightField, GlobalData.PREVIOUS_NAATI_VALUE,"NAATI weight text box in Admin page");
   action.isClickableWait(adminPage.saveButton, 10000,"Save button in Admin page");
   action.clickElement(adminPage.saveButton,"Save button in Admin page");
   let naatiElelemntValue = $(adminPage.fisrtNaatiWeightElement.replace("<dynamic1>", "1").replace("<dynamic2>", "5"));
   browser.waitUntil(
      () => action.getElementText(naatiElelemntValue,"NAATI element value in Admin page") === GlobalData.PREVIOUS_NAATI_VALUE,
      {
         timeout: 20000,
         timeoutMsg: 'expected Naati weight to be displayed in 20s'
      }
   );
   let revertedValue = action.getElementText(naatiElelemntValue,"NAATI element value in Admin page");
   chai.expect(revertedValue).to.equal(GlobalData.PREVIOUS_NAATI_VALUE);
})

Then(/^the error message "(.*)" is displayed$/, function (expectedErrorMessage) {
   let actualErrorMessage = action.getElementText(adminPage.errorMessage,"Error message in Admin page");
   chai.expect(actualErrorMessage).to.includes(expectedErrorMessage);
})

When(/^the Naati Weight displays previous value only as the entered value is not saved$/, function () {
   action.isClickableWait(adminPage.closeButton, 10000,"Close button in Admin page");
   action.clickElement(adminPage.closeButton,"Close button in Admin page");
   let naatiElelemntValueAfterError = $(adminPage.fisrtNaatiWeightElement.replace("<dynamic1>", "1").replace("<dynamic2>", "5"));
   let naatiWeightValue = action.getElementText(naatiElelemntValueAfterError,"First NAATI element value after error in Admin page");
   chai.expect(naatiWeightValue).to.equals(GlobalData.ACTUAL_NAATI_WEIGHT_VALUE);
})

When(/^The Admin is viewing the Languages section on the Admin page$/, function () {
   let languageSections = action.isVisibleWait(adminPage.languagesSection, 5000,"Languages section in Admin page");
   chai.expect(languageSections).to.be.true;
})

When(/^I enter "(.*)" in search field$/, function (enteredLanguageName) {
   action.isClickableWait(adminPage.languageSearchField,"language search text box in Admin page");
   action.enterValue(adminPage.languageSearchField, enteredLanguageName,"language search text box in Admin page");
})

When(/^I click on Search button$/, function () {
   action.isClickableWait(adminPage.searchLanguageButton,"Search language button in Admin page");
   action.clickElement(adminPage.searchLanguageButton,"Search language button in Admin page");
})

Then(/^the result should display the "(.*)" text with virtual beside the name$/, function (expectedLanguageText) {
   let actualLanguageTextElement = $(adminPage.languageText.replace("<dynamic>", expectedLanguageText));
   let actualLanguageText = action.getElementText(actualLanguageTextElement,"Language text in Admin page");
   chai.expect(actualLanguageText).to.equals(expectedLanguageText,"Language text in Admin page");
})

When(/^I click on the Language "(.*)"$/, function (expectedLanguageName) {
   let actualLanguageTextElement = $(adminPage.languageText.replace("<dynamic>", expectedLanguageName));
   action.isClickableWait(actualLanguageTextElement, 10000,"Language text in Admin page");
   action.clickElement(actualLanguageTextElement,"Language text in Admin page");
})

When(/^I verify the Manage Language popup is displayed$/, function () {
   let manageLanguagePopupStatus = action.isVisibleWait(adminPage.manageLanguagePopup, 10000,"Manage language popup in Admin page");
   chai.expect(manageLanguagePopupStatus).to.be.true;
})

Then(/^the text "(.*)" is displayed$/, function (expectedLangExplanation) {
   let actualLanguageExplanationValue = $(adminPage.languageExplanationText.replace("<dynamic>", expectedLangExplanation));
   let actualLanguageExplanation = action.getElementText(actualLanguageExplanationValue,"Language explanation value in Admin page");
   chai.expect(actualLanguageExplanation).to.equals(expectedLangExplanation);
})

When(/^I get the Creation Date of the user created$/, function () {
   let createdUserCreationDateTextElement = $(adminPage.creationDateOfCreatedUserLocator.replace("<dynamic>", GlobalData.BOOKING_OFFICER_FIRSTNAME));
   action.isVisibleWait(createdUserCreationDateTextElement, 10000,"Created user creation date in Admin page");
   GlobalData.ACTUAL_ACCOUNT_CREATION_DATE = action.getElementText(createdUserCreationDateTextElement,"Created user creation date in Admin page");
})

When(/^I search and select account created account in Admin$/, function () {
   action.isVisibleWait(adminPage.accountsSearchByTextBox, 10000,"Accounts search by text box in Admin page");
   action.enterValue(adminPage.accountsSearchByTextBox, GlobalData.BOOKING_OFFICER_FIRSTNAME,"Accounts search by text box in Admin page");
   action.isClickableWait(adminPage.searchButton, 10000,"Search button in Admin page");
   action.clickElement(adminPage.searchButton,"Search button in Admin page");
   let accountSearchResultLink = $(adminPage.accountSearchResultLinkLocator.replace("<dynamic>", GlobalData.BOOKING_OFFICER_FIRSTNAME));
   action.isClickableWait(accountSearchResultLink, 20000,"Accounts search result link in Admin page")
   action.clickElement(accountSearchResultLink,"Accounts search result link in Admin page");
})

When(/^I Update the profile either by Update or adding or deleting few non mandatory data "(.*)"$/, function (landLineNumber) {
   action.isVisibleWait(adminPage.landLineNumberFieldCreateAccount, 20000,"Landline number text box in Admin page");
   action.enterValue(adminPage.landLineNumberFieldCreateAccount, landLineNumber,"Landline number text box in Admin page");
})

Then(/^I see the message User profile was successfully saved$/, function () {
   let userUpdatedMessageDisplayStatus = action.isVisibleWait(adminPage.userCreatedMessage, 20000,"User created message in Admin page");
   chai.expect(userUpdatedMessageDisplayStatus).to.be.true;
})

When(/^I move back to the admin page$/, function () {
   action.isVisibleWait(adminPage.backNavigationButton, 20000,"Back navigation button in Admin page");
   action.clickElement(adminPage.backNavigationButton,"Back navigation button in Admin page");
})

Then(/^the Creation date of the user edited should not change, it shows the actual creation date only$/, function () {
   let createdUserCreationDateTextElement = $(adminPage.creationDateOfCreatedUserLocator.replace("<dynamic>", GlobalData.BOOKING_OFFICER_FIRSTNAME));
   action.isVisibleWait(createdUserCreationDateTextElement, 10000,"Created user creation in Admin page");
   let creationDateAfterAccountUpdate = action.getElementText(createdUserCreationDateTextElement,"Created user creation in Admin page");
   chai.expect(creationDateAfterAccountUpdate).to.equal(GlobalData.ACTUAL_ACCOUNT_CREATION_DATE);
})

Then(/^I should be able to pick only one role "(.*)" at a time$/, function (option) {
   let clientGroupOption = $(adminPage.clientGroupOptionsLocator.replace("<dynamic>", option));
   action.selectTextFromDropdown(adminPage.roleFilterDropdown, option,"Role filter dropdown in Admin page");
   let clientOptionSelectedStatus = action.isSelectedWait(clientGroupOption, 5000,"Client group option in Admin page");
   chai.expect(clientOptionSelectedStatus).to.be.true;
})

When(/^select multiple roles "(.*)"$/, function (roles) {
   let rolesList = roles.split(",");
   for (let index = 0; index < rolesList.length; index++) {
      let roleToggleElement = $(adminPage.roleToggleLocator.replace("<dynamic>", rolesList[index]));
      action.isVisibleWait(roleToggleElement, 10000,"Role toggle in Admin page");
      action.isClickableWait(roleToggleElement, 10000,"Role toggle in Admin page");
      action.clickElement(roleToggleElement,"Role toggle in Admin page");
      browser.pause(1000);
      let roleToggleStatusElement = $(adminPage.roleToggleStatusLocator.replace("<dynamic>", rolesList[index]));
      let toggleElementClassActual = action.getElementAttribute(roleToggleStatusElement,"class","Role toggle status in Admin page");
      let counter = 0;
      while (toggleElementClassActual.includes("changed") === false && counter < 3) {
         action.clickElement(roleToggleElement,"Role toggle in Admin page");
         toggleElementClassActual = action.getElementAttribute(roleToggleStatusElement,"class","Role toggle status in Admin page");
         counter++;
      }
   }
})

When(/^I search the account created account in Admin$/, function () {
   action.isVisibleWait(adminPage.accountsSearchByTextBox, 10000,"Account search by text box in Admin page");
   action.enterValue(adminPage.accountsSearchByTextBox, GlobalData.BOOKING_OFFICER_FIRSTNAME,"Account search by text box in Admin page");
   action.isClickableWait(adminPage.searchButton, 10000,"Search button in Admin page");
   action.clickElement(adminPage.searchButton,"Search button in Admin page");
})

Then(/^I should see the user that has selected role in the search results$/, function () {
   let accountSearchResultLink = $(adminPage.accountSearchResultLinkLocator.replace("<dynamic>", GlobalData.BOOKING_OFFICER_FIRSTNAME));
   let accountSearchResultDisplayStatus = action.isVisibleWait(accountSearchResultLink, 20000,"Account search result link in Admin page");
   chai.expect(accountSearchResultDisplayStatus).to.be.true;
})

When(/^they try to access LoopedIn via "(.*)"$/, function (URL) {
   browser.url(URL);
})

Then(/^they should be redirected to homepage "(.*)" as a logged in user$/, function (expectedUrl) {
   let pageUrlActual = action.getPageUrl();
   chai.expect(pageUrlActual).to.equal(expectedUrl)
})

Then(/^they should be redirected to login page "(.*)"$/, function (expectedUrl) {
   let pageUrlActual = action.getPageUrl();
   chai.expect(pageUrlActual).to.equal(expectedUrl)
})