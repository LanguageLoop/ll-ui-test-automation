
Given(/^The Admin is viewing the Accounts section on the Admin page$/, function () {
   let accountsSectionDisplayStatus = action.isVisibleWait(adminPage.accountsSection, 5000);
   chai.expect(accountsSectionDisplayStatus).to.be.true;
})

When(/^They view the table$/, function () {
   let tableDisplayStatus = action.isVisibleWait(adminPage.accountsUserDetailsTable, 5000);
   chai.expect(tableDisplayStatus).to.be.true;
})

Then(/^They will see a Creation Date column$/, function () {
   let creationDateColDisplayStatus = action.isVisibleWait(adminPage.creationDateColumn, 5000);
   chai.expect(creationDateColDisplayStatus).to.be.true;
})

Then(/^This will display after the Username column$/, function () {
   let afterUsernameColDisplayStatus = action.isVisibleWait(adminPage.creationDateAfterUserNameColumn, 5000);
   chai.expect(afterUsernameColDisplayStatus).to.be.true;
})

Then(/^Be displayed before the Mobile Phone column$/, function () {
   let beforeMobilePhoneColDisplayStatus = action.isVisibleWait(adminPage.creationDateBeforeMobilePhoneColumn, 5000);
   chai.expect(beforeMobilePhoneColDisplayStatus).to.be.true;
})

Then(/^The table will be sorted by Creation Date by default newest at the top$/, function () {
   let creationDateRow1Element = $(adminPage.creationDateRowValueLocator.replace("<dynamic>", "1"));
   let creationDateRow2Element = $(adminPage.creationDateRowValueLocator.replace("<dynamic>", "2"));
   let creationDateRow1Value = action.getElementText(creationDateRow1Element)
   let creationDateRow2Value = action.getElementText(creationDateRow2Element)
   let dateNew = datetime.parseDateString(creationDateRow1Value);
   let dateOld = datetime.parseDateString(creationDateRow2Value);
   let newestFirstStatus = dateNew.getTime() > dateOld.getTime();
   chai.expect(newestFirstStatus).to.be.true;
})

When(/^They click the Creation Date column header$/, function () {
   action.isClickableWait(adminPage.creationDateColumnHeader, 5000);
   action.clickElement(adminPage.creationDateColumnHeader);
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
   let creationDateRow1Value = action.getElementText(creationDateRow1Element);
   let firstRowText = action.getElementText(adminPage.accountsTableFirstRow);
   chai.expect(creationDateRow1Value).to.equal(blankDateText);
   chai.expect(firstRowText).to.includes(oldestAccountText);
})

Then(/^They will see a Role filter dropdown$/, function () {
   let roleDropdownDisplayStatus = action.isVisibleWait(adminPage.roleFilterDropdown, 5000);
   chai.expect(roleDropdownDisplayStatus).to.be.true;
})

Then(/^This will be below the search field$/, function () {
   let roleDropdownBelowSearchStatus = action.isVisibleWait(adminPage.roleFilterDropdownBelowSearchField, 5000);
   chai.expect(roleDropdownBelowSearchStatus).to.be.true;
})

Then(/^The options will be grouped into the following labels: "(.*)","(.*)","(.*)"$/, function (clientGroupLabel, contractorGroupLabel, StaffGroupLabel) {
   let clientGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>", clientGroupLabel));
   let clientGroupLabelExistStatus = action.isExistingWait(clientGroupLabelElement, 2000);
   let contractorGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>", contractorGroupLabel));
   let contractorGroupLabelExistStatus = action.isExistingWait(contractorGroupLabelElement, 2000);
   let staffGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>", StaffGroupLabel));
   let staffGroupLabelExistStatus = action.isExistingWait(staffGroupLabelElement, 2000);
   chai.expect(clientGroupLabelExistStatus).to.be.true;
   chai.expect(contractorGroupLabelExistStatus).to.be.true;
   chai.expect(staffGroupLabelExistStatus).to.be.true;
})

Then(/^These labels "(.*)","(.*)","(.*)" are not clickable$/, function (clientGroupLabel, contractorGroupLabel, StaffGroupLabel) {
   let clientGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>", clientGroupLabel));
   let clientGroupLabelClickableStatus = action.isClickableWait(clientGroupLabelElement, 2000);
   let contractorGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>", contractorGroupLabel));
   let contractorGroupLabelClickableStatus = action.isClickableWait(contractorGroupLabelElement, 2000);
   let staffGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>", StaffGroupLabel));
   let staffGroupLabelClickableStatus = action.isClickableWait(staffGroupLabelElement, 2000);
   chai.expect(clientGroupLabelClickableStatus).to.be.false;
   chai.expect(contractorGroupLabelClickableStatus).to.be.false;
   chai.expect(staffGroupLabelClickableStatus).to.be.false;
})

Given(/^The Admin or Internal user has clicked the Role filter dropdown$/, function () {
   action.isVisibleWait(adminPage.roleFilterDropdown, 5000);
   action.clickElement(adminPage.roleFilterDropdown);
})

Then(/^They will see the following child options in the order under each label: Client Group "(.*)" Contractor Group "(.*)" Staff Group"(.*)"$/, function (clientGroupOptions, contractorGroupOptions, staffGroupOptions) {
   let clientGroupOptionsList = clientGroupOptions.split(",");
   for (let optionIndex = 0; optionIndex < clientGroupOptionsList.length; optionIndex++) {
      let clientGroupOption = $(adminPage.clientGroupOptionsLocator.replace("<dynamic>", clientGroupOptionsList[optionIndex]));
      let clientOptionExistStatus = action.isExistingWait(clientGroupOption, 5000);
      chai.expect(clientOptionExistStatus).to.be.true;
   }
   let contractorGroupOptionsList = contractorGroupOptions.split(",");
   for (let optionIndex = 0; optionIndex < contractorGroupOptionsList.length; optionIndex++) {
      let contractorGroupOption = $(adminPage.contractorGroupOptionsLocator.replace("<dynamic>", contractorGroupOptionsList[optionIndex]));
      let contractorOptionExistStatus = action.isExistingWait(contractorGroupOption, 5000);
      chai.expect(contractorOptionExistStatus).to.be.true;
   }
   let staffGroupOptionsList = staffGroupOptions.split(",");
   for (let optionIndex = 0; optionIndex < staffGroupOptionsList.length; optionIndex++) {
      let staffGroupOption = $(adminPage.staffGroupOptionsLocator.replace("<dynamic>", staffGroupOptionsList[optionIndex]));
      let staffOptionExistStatus = action.isExistingWait(staffGroupOption, 5000);
      chai.expect(staffOptionExistStatus).to.be.true;
   }
})

Then(/^These options Client Group "(.*)" Contractor Group "(.*)" Staff Group"(.*)" can be selected$/, function (clientGroupOptions, contractorGroupOptions, staffGroupOptions) {
   let clientGroupOptionsList = clientGroupOptions.split(",");
   for (let optionIndex = 0; optionIndex < clientGroupOptionsList.length; optionIndex++) {
      let clientGroupOption = $(adminPage.clientGroupOptionsLocator.replace("<dynamic>", clientGroupOptionsList[optionIndex]));
      action.selectTextFromDropdown(adminPage.roleFilterDropdown, clientGroupOptionsList[optionIndex]);
      let clientOptionSelectedStatus = action.isSelectedWait(clientGroupOption, 5000);
      chai.expect(clientOptionSelectedStatus).to.be.true;
   }
   let contractorGroupOptionsList = contractorGroupOptions.split(",");
   for (let optionIndex = 0; optionIndex < contractorGroupOptionsList.length; optionIndex++) {
      let contractorGroupOption = $(adminPage.contractorGroupOptionsLocator.replace("<dynamic>", contractorGroupOptionsList[optionIndex]));
      action.selectTextFromDropdown(adminPage.roleFilterDropdown, contractorGroupOptionsList[optionIndex]);
      let contractorOptionSelectedStatus = action.isSelectedWait(contractorGroupOption, 5000);
      chai.expect(contractorOptionSelectedStatus).to.be.true;
   }
   let staffGroupOptionsList = staffGroupOptions.split(",");
   for (let optionIndex = 0; optionIndex < staffGroupOptionsList.length; optionIndex++) {
      let staffGroupOption = $(adminPage.staffGroupOptionsLocator.replace("<dynamic>", staffGroupOptionsList[optionIndex]));
      action.selectTextFromDropdown(adminPage.roleFilterDropdown, staffGroupOptionsList[optionIndex]);
      let staffOptionSelectedStatus = action.isSelectedWait(staffGroupOption, 5000);
      chai.expect(staffOptionSelectedStatus).to.be.true;
   }
})

Given(/^The user has selected an option "(.*)" from the Role filter dropdown$/, function (roleFilterOption) {
   action.clickElement(adminPage.roleFilterDropdown);
   action.selectTextFromDropdown(adminPage.roleFilterDropdown, roleFilterOption);
})

Then(/^The dropdown is closed$/, function () {
   action.clickElement(adminPage.roleFilterDropdown);
})

When(/^The user has clicked the search button$/, function () {
   action.isClickableWait(adminPage.searchButton, 5000)
   action.clickElement(adminPage.searchButton);
})

Then(/^The table is filtered by the selected role and shows result "(.*)"$/, function (expectedOldestResultForRole) {
   action.isClickableWait(adminPage.creationDateColumnHeader, 5000)
   action.clickElement(adminPage.creationDateColumnHeader);
   browser.waitUntil(
      () => action.getElementText(adminPage.accountsTableFirstRow).includes(expectedOldestResultForRole),
      {
         timeout: 5000,
         timeoutMsg: 'Expected table to be sorted with the oldest results within given time'
      }
   );
   let firstRowText = action.getElementText(adminPage.accountsTableFirstRow);
   chai.expect(firstRowText).to.includes(expectedOldestResultForRole);
})

Then(/^The table shows all accounts "(.*)", "(.*)" regardless of the role$/, function (expectedResultAdmin, expectedResultNonAdmin) {
   action.isClickableWait(adminPage.creationDateColumnHeader, 5000)
   action.clickElement(adminPage.creationDateColumnHeader);
   browser.waitUntil(
      () => action.getElementText(adminPage.accountsUserDetailsTable).includes(expectedResultAdmin),
      {
         timeout: 5000,
         timeoutMsg: 'Expected table to be sorted with all the oldest results within given time'
      }
   );
   let tableText = action.getElementText(adminPage.accountsUserDetailsTable);
   chai.expect(tableText).to.includes(expectedResultAdmin);
   chai.expect(tableText).to.includes(expectedResultNonAdmin);
})

Then(/^The user "(.*)" will be displayed in the Admin > Accounts section$/, function (expectedUser) {
   expectedUser = GlobalData.BOOKING_OFFICER_FIRSTNAME;
   browser.waitUntil(
      () => action.getElementText(adminPage.accountsUserDetailsTable).includes(expectedUser),
      {
         timeout: 5000,
         timeoutMsg: 'Expected table to be sorted with all the oldest results within given time'
      }
   );
   let tableText = action.getElementText(adminPage.accountsUserDetailsTable);
   chai.expect(tableText).to.includes(expectedUser);
})

Then(/^The Created Date is captured in the form of DD slash MM slash YYYY HH:MM:SS$/, function () {
   let createdUserCreationDateTextElement = $(adminPage.creationDateOfCreatedUserLocator.replace("<dynamic>", GlobalData.BOOKING_OFFICER_FIRSTNAME));
   action.isVisibleWait(createdUserCreationDateTextElement, 10000);
   let creationDateActual = action.getElementText(createdUserCreationDateTextElement);
   let currentDate = datetime.getCurrentDate();
   chai.expect(creationDateActual.split(" ")[0]).to.equal(currentDate)
   chai.expect(creationDateActual.charAt(2)).to.equal("/")
   chai.expect(creationDateActual.charAt(5)).to.equal("/")
   chai.expect(creationDateActual.charAt(13)).to.equal(":")
   chai.expect(creationDateActual.charAt(16)).to.equal(":")
})

When(/^Clicks Create Account$/, function () {
   action.isClickableWait(adminPage.createAccountButton, 5000);
   action.clickElement(adminPage.createAccountButton);
})

When(/^Selects any role "(.*)"$/, function (role) {
   let roleToggleElement = $(adminPage.roleToggleLocator.replace("<dynamic>", role));
   action.isClickableWait(roleToggleElement, 10000);
   action.clickElement(roleToggleElement);
})

Given(/^Fills out all the required details "(.*)", email, "(.*) in Admin Page"$/, function (firstName, landLineNumber) {
   action.isVisibleWait(adminPage.firstNameFieldCreateAccount, 10000);
   firstName = firstName + (Math.floor(Math.random() * 100000) + 1).toString()
   GlobalData.BOOKING_OFFICER_FIRSTNAME = firstName
   action.enterValue(adminPage.firstNameFieldCreateAccount, GlobalData.BOOKING_OFFICER_FIRSTNAME);
   let email = GlobalData.BOOKING_OFFICER_FIRSTNAME + "@ll.com"
   action.enterValue(adminPage.emailFieldCreateAccount, email);
   action.enterValue(adminPage.landLineNumberFieldCreateAccount, landLineNumber);
})

When(/^They click the Save Detail button$/, function () {
   action.isClickableWait(adminPage.saveDetailButton, 10000);
   action.clickElement(adminPage.saveDetailButton);
})

Then(/^The user is created in Admin Page$/, function () {
   let userCreatedMessageDisplayStatus = action.isVisibleWait(adminPage.userCreatedMessage, 10000);
   chai.expect(userCreatedMessageDisplayStatus).to.be.true;
})

Given(/^The user has access to the User’s profile$/, function () {
   let userProfileNameDisplayStatus = action.isVisibleWait(adminPage.userProfileNameText, 10000);
   chai.expect(userProfileNameDisplayStatus).to.be.true;
})

Given(/^They view the profile$/, function () {
   action.isClickableWait(adminPage.userProfileNameText, 10000);
   action.clickElement(adminPage.userProfileNameText);
})

Then(/^They will see the Created Date: DD MM YYYY HH:MM:SS under the Profile picture box AND this applies to all roles$/, function () {
   let createdDateFullText = action.getElementText(adminPage.createdDateTextUnderProfilePic);
   let createdDateValue = createdDateFullText.split(": ")[1];
   chai.expect(createdDateValue.charAt(2)).to.equal("/");
   chai.expect(createdDateValue.charAt(5)).to.equal("/");
   chai.expect(createdDateValue.charAt(13)).to.equal(":");
   chai.expect(createdDateValue.charAt(16)).to.equal(":");
})

When(/^I search and select account "(.*)" in Admin$/, function (account) {
   action.isVisibleWait(adminPage.accountsSearchByTextBox, 10000);
   action.enterValue(adminPage.accountsSearchByTextBox, account);
   action.isClickableWait(adminPage.searchButton, 10000);
   action.clickElement(adminPage.searchButton);
   let accountSearchResultLink = $(adminPage.accountSearchResultLinkLocator.replace("<dynamic>", account));
   action.isClickableWait(accountSearchResultLink, 20000)
   action.clickElement(accountSearchResultLink);
})

When(/^I click Edit Profile Button in Account Profile$/, function () {
   action.isClickableWait(adminPage.editProfileButton, 10000);
   action.clickElement(adminPage.editProfileButton);
})

When(/^I select show dollar amounts on ODTI checkbox if not already selected$/, function () {
   let show$AmountsOnODTISelectedStatus = action.isSelectedWait(adminPage.show$AmountsOnODTICheckbox, 10000);
   if (show$AmountsOnODTISelectedStatus === false) {
      action.clickElement(adminPage.show$AmountsOnODTICheckbox);
   }
   browser.waitUntil(
      () => action.isSelectedWait(adminPage.show$AmountsOnODTICheckbox, 0) === true,
      {
         timeout: 5000,
         timeoutMsg: 'Expected checkbox to selected with in 5 sec'
      }
   );
   show$AmountsOnODTISelectedStatus = action.isSelectedWait(adminPage.show$AmountsOnODTICheckbox, 10000);
   chai.expect(show$AmountsOnODTISelectedStatus).to.be.true;
})

When(/^I unselect show dollar amounts on ODTI checkbox if already selected$/, function () {
   let show$AmountsOnODTISelectedStatus = action.isSelectedWait(adminPage.show$AmountsOnODTICheckbox, 10000);
   if (show$AmountsOnODTISelectedStatus === true) {
      action.clickElement(adminPage.show$AmountsOnODTICheckbox);
   }
   browser.waitUntil(
      () => action.isSelectedWait(adminPage.show$AmountsOnODTICheckbox, 0) === false,
      {
         timeout: 5000,
         timeoutMsg: 'Expected checkbox to be not selected with in 5 sec'
      }
   );
   show$AmountsOnODTISelectedStatus = action.isSelectedWait(adminPage.show$AmountsOnODTICheckbox, 10000);
   chai.expect(show$AmountsOnODTISelectedStatus).to.be.false;
})

When(/^I click save detail button$/, function () {
   action.isClickableWait(adminPage.saveDetailButton, 10000);
   action.clickElement(adminPage.saveDetailButton);
})

When(/^The Admin is viewing the Naati Accreditations section on the Admin page$/, function () {
   let naatiAccreditationsSections = action.isVisibleWait(adminPage.naatiAccreditations, 5000);
   chai.expect(naatiAccreditationsSections).to.be.true;
   let naatiElelemntValue = $(adminPage.fisrtNaatiWeightElement.replace("<dynamic1>", "1").replace("<dynamic2>", "5"));
   GlobalData.ACTUAL_NAATI_WEIGHT_VALUE = action.getElementText(naatiElelemntValue);
})

When(/^I select the fisrt Naati Level$/, function () {
   let fisrtNaatiElement = $(adminPage.fisrtNaatiLevelElement.replace("<dynamic1>", "1").replace("<dynamic2>", "2"));
   action.isClickableWait(fisrtNaatiElement, 10000);
   action.clickElement(fisrtNaatiElement);
})

When(/^I see Manage Naati Accreditation popup is displayed$/, function () {
   let manageNaatiAccreditationPopupStatus = action.isVisibleWait(adminPage.manageNaatiAccreditationPopup, 10000);
   chai.expect(manageNaatiAccreditationPopupStatus).to.be.true;
})

When(/^I enter the NAATI Weight equal to "(.*)" by clearing the previous existing value$/, function (expectedNaatiWeight) {
   let naatiWeightFieldStatus = action.isVisibleWait(adminPage.naatiWeightField, 10000);
   chai.expect(naatiWeightFieldStatus).to.be.true;
   GlobalData.PREVIOUS_NAATI_VALUE = action.getElementValue(adminPage.naatiWeightField);
   action.enterValue(adminPage.naatiWeightField, expectedNaatiWeight);
})

When(/^I click on Save button$/, function () {
   action.isClickableWait(adminPage.saveButton, 10000);
   action.clickElement(adminPage.saveButton);
})

Then(/^the entered Naati Weight should be saved and displayed value "(.*)"$/, function (expectedNewNaatiWeight) {
   let naatiElelemntValue = $(adminPage.fisrtNaatiWeightElement.replace("<dynamic1>", "1").replace("<dynamic2>", "5"));
   browser.waitUntil(
      () => action.getElementText(naatiElelemntValue) === expectedNewNaatiWeight,
      {
         timeout: 20000,
         timeoutMsg: 'expected Naati weight to be displayed in 20s'
      }
   );
   let naatiElelemntValueActual = action.getElementText(naatiElelemntValue);
   chai.expect(naatiElelemntValueActual).to.equal(expectedNewNaatiWeight);
})

When(/^I revert the Naati Weight to the orginal value$/, function () {
   let fisrtNaatiElement = $(adminPage.fisrtNaatiLevelElement.replace("<dynamic1>", "1").replace("<dynamic2>", "2"));
   action.isClickableWait(fisrtNaatiElement, 10000);
   action.clickElement(fisrtNaatiElement);
   action.enterValue(adminPage.naatiWeightField, GlobalData.PREVIOUS_NAATI_VALUE);
   action.isClickableWait(adminPage.saveButton, 10000);
   action.clickElement(adminPage.saveButton);
   let naatiElelemntValue = $(adminPage.fisrtNaatiWeightElement.replace("<dynamic1>", "1").replace("<dynamic2>", "5"));
   browser.waitUntil(
      () => action.getElementText(naatiElelemntValue) === GlobalData.PREVIOUS_NAATI_VALUE,
      {
         timeout: 20000,
         timeoutMsg: 'expected Naati weight to be displayed in 20s'
      }
   );
   let revertedValue = action.getElementText(naatiElelemntValue);
   chai.expect(revertedValue).to.equal(GlobalData.PREVIOUS_NAATI_VALUE);
})