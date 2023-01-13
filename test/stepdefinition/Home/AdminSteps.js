
Given(/^The Admin is viewing the Accounts section on the Admin page$/, function() {
   let accountsSectionDisplayStatus = action.isVisibleWait(adminPage.accountsSection,5000);
   chai.expect(accountsSectionDisplayStatus).to.be.true;
})

When(/^They view the table$/, function() {
   let tableDisplayStatus = action.isVisibleWait(adminPage.accountsUserDetailsTable,5000);
   chai.expect(tableDisplayStatus).to.be.true;
})

Then(/^They will see a Creation Date column$/, function() {
   let creationDateColDisplayStatus = action.isVisibleWait(adminPage.creationDateColumn,5000);
   chai.expect(creationDateColDisplayStatus).to.be.true;
})

Then(/^This will display after the Username column$/, function() {
   let afterUsernameColDisplayStatus = action.isVisibleWait(adminPage.creationDateAfterUserNameColumn,5000);
   chai.expect(afterUsernameColDisplayStatus).to.be.true;
})

Then(/^Be displayed before the Mobile Phone column$/, function() {
   let beforeMobilePhoneColDisplayStatus = action.isVisibleWait(adminPage.creationDateBeforeMobilePhoneColumn,5000);
   chai.expect(beforeMobilePhoneColDisplayStatus).to.be.true;
})

Then(/^The table will be sorted by Creation Date by default newest at the top$/, function() {
   let creationDateRow1Element = $(adminPage.creationDateRowValueLocator.replace("<dynamic>","1"));
   let creationDateRow2Element = $(adminPage.creationDateRowValueLocator.replace("<dynamic>","2"));
   let creationDateRow1Value = action.getElementText(creationDateRow1Element)
   let creationDateRow2Value = action.getElementText(creationDateRow2Element)
   let dateNew = new Date(creationDateRow1Value);
   let dateOld = new Date(creationDateRow2Value);
   let newestFirstStatus = dateNew > dateOld;
   chai.expect(newestFirstStatus).to.be.true;
})

When(/^They click the Creation Date column header$/, function() {
   action.isClickableWait(adminPage.creationDateColumnHeader,5000);
   action.clickElement(adminPage.creationDateColumnHeader);
})

Then(/^The table order will be reversed and will be sorted by oldest-newest Creation Date$/, function() {
   let creationDateRow1Element = $(adminPage.creationDateRowValueLocator.replace("<dynamic>","1"));
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

Then(/^They will see a Role filter dropdown$/, function() {
   let roleDropdownDisplayStatus = action.isVisibleWait(adminPage.roleFilterDropdown,5000);
   chai.expect(roleDropdownDisplayStatus).to.be.true;
})

Then(/^This will be below the search field$/, function() {
   let roleDropdownBelowSearchStatus = action.isVisibleWait(adminPage.roleFilterDropdownBelowSearchField,5000);
   chai.expect(roleDropdownBelowSearchStatus).to.be.true;
})

Then(/^The options will be grouped into the following labels: "(.*)","(.*)","(.*)"$/, function(clientGroupLabel,contractorGroupLabel,StaffGroupLabel) {
   let clientGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>",clientGroupLabel));
   let clientGroupLabelExistStatus = action.isExistingWait(clientGroupLabelElement,2000);
   let contractorGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>",contractorGroupLabel));
   let contractorGroupLabelExistStatus = action.isExistingWait(contractorGroupLabelElement,2000);
   let staffGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>",StaffGroupLabel));
   let staffGroupLabelExistStatus = action.isExistingWait(staffGroupLabelElement,2000);
   chai.expect(clientGroupLabelExistStatus).to.be.true;
   chai.expect(contractorGroupLabelExistStatus).to.be.true;
   chai.expect(staffGroupLabelExistStatus).to.be.true;
})

Then(/^These labels "(.*)","(.*)","(.*)" are not clickable$/, function(clientGroupLabel,contractorGroupLabel,StaffGroupLabel) {
   let clientGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>",clientGroupLabel));
   let clientGroupLabelClickableStatus = action.isClickableWait(clientGroupLabelElement,2000);
   let contractorGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>",contractorGroupLabel));
   let contractorGroupLabelClickableStatus = action.isClickableWait(contractorGroupLabelElement,2000);
   let staffGroupLabelElement = $(adminPage.roleDropdownGroupLabelsLocator.replace("<dynamic>",StaffGroupLabel));
   let staffGroupLabelClickableStatus = action.isClickableWait(staffGroupLabelElement,2000);
   chai.expect(clientGroupLabelClickableStatus).to.be.false;
   chai.expect(contractorGroupLabelClickableStatus).to.be.false;
   chai.expect(staffGroupLabelClickableStatus).to.be.false;
})

Given(/^The Admin or Internal user has clicked the Role filter dropdown$/, function() {
   action.isVisibleWait(adminPage.roleFilterDropdown,5000);
   action.clickElement(adminPage.roleFilterDropdown);
})

Then(/^They will see the following child options in the order under each label: Client Group "(.*)" Contractor Group "(.*)" Staff Group"(.*)"$/, function(clientGroupOptions,contractorGroupOptions,staffGroupOptions) {
   let clientGroupOptionsList = clientGroupOptions.split(",");
   for (let optionIndex=0; optionIndex < clientGroupOptionsList.length; optionIndex++){
      let clientGroupOption = $(adminPage.clientGroupOptionsLocator.replace("<dynamic>",clientGroupOptionsList[optionIndex]));
      let clientOptionExistStatus = action.isExistingWait(clientGroupOption,5000);
      chai.expect(clientOptionExistStatus).to.be.true;
   }
   let contractorGroupOptionsList = contractorGroupOptions.split(",");
   for (let optionIndex=0; optionIndex < contractorGroupOptionsList.length; optionIndex++){
      let contractorGroupOption = $(adminPage.contractorGroupOptionsLocator.replace("<dynamic>",contractorGroupOptionsList[optionIndex]));
      let contractorOptionExistStatus = action.isExistingWait(contractorGroupOption,5000);
      chai.expect(contractorOptionExistStatus).to.be.true;
   }
   let staffGroupOptionsList = staffGroupOptions.split(",");
   for (let optionIndex=0; optionIndex < staffGroupOptionsList.length; optionIndex++){
      let staffGroupOption = $(adminPage.staffGroupOptionsLocator.replace("<dynamic>",staffGroupOptionsList[optionIndex]));
      let staffOptionExistStatus = action.isExistingWait(staffGroupOption,5000);
      chai.expect(staffOptionExistStatus).to.be.true;
   }
})

Then(/^These options Client Group "(.*)" Contractor Group "(.*)" Staff Group"(.*)" can be selected$/, function(clientGroupOptions,contractorGroupOptions,staffGroupOptions) {
   let clientGroupOptionsList = clientGroupOptions.split(",");
   for (let optionIndex=0; optionIndex < clientGroupOptionsList.length; optionIndex++){
      let clientGroupOption = $(adminPage.clientGroupOptionsLocator.replace("<dynamic>",clientGroupOptionsList[optionIndex]));
      action.selectTextFromDropdown(adminPage.roleFilterDropdown,clientGroupOptionsList[optionIndex]);
      let clientOptionSelectedStatus = action.isSelectedWait(clientGroupOption,5000);
      chai.expect(clientOptionSelectedStatus).to.be.true;
   }
   let contractorGroupOptionsList = contractorGroupOptions.split(",");
   for (let optionIndex=0; optionIndex < contractorGroupOptionsList.length; optionIndex++){
      let contractorGroupOption = $(adminPage.contractorGroupOptionsLocator.replace("<dynamic>",contractorGroupOptionsList[optionIndex]));
      action.selectTextFromDropdown(adminPage.roleFilterDropdown,contractorGroupOptionsList[optionIndex]);
      let contractorOptionSelectedStatus = action.isSelectedWait(contractorGroupOption,5000);
      chai.expect(contractorOptionSelectedStatus).to.be.true;
   }
   let staffGroupOptionsList = staffGroupOptions.split(",");
   for (let optionIndex=0; optionIndex < staffGroupOptionsList.length; optionIndex++){
      let staffGroupOption = $(adminPage.staffGroupOptionsLocator.replace("<dynamic>",staffGroupOptionsList[optionIndex]));
      action.selectTextFromDropdown(adminPage.roleFilterDropdown,staffGroupOptionsList[optionIndex]);
      let staffOptionSelectedStatus = action.isSelectedWait(staffGroupOption,5000);
      chai.expect(staffOptionSelectedStatus).to.be.true;
   }
})

Given(/^The user has selected an option "(.*)" from the Role filter dropdown$/, function(roleFilterOption) {
   action.clickElement(adminPage.roleFilterDropdown);
   action.selectTextFromDropdown(adminPage.roleFilterDropdown,roleFilterOption);
})

Then(/^The dropdown is closed$/, function() {
   action.clickElement(adminPage.roleFilterDropdown);
})

When(/^The user has clicked the search button$/, function() {
   action.isClickableWait(adminPage.searchButton,5000)
   action.clickElement(adminPage.searchButton);
})

Then(/^The table is filtered by the selected role and shows result "(.*)"$/, function(expectedOldestResultForRole) {
   action.isClickableWait(adminPage.creationDateColumnHeader,5000)
   action.clickElement(adminPage.creationDateColumnHeader);
   browser.waitUntil(
       () => action.getElementText(adminPage.accountsTableFirstRow).includes(expectedOldestResultForRole),
       {
          timeout: 5000,
          timeoutMsg: 'Expected table to be sorted with the oldest results'
       }
   );
   let firstRowText = action.getElementText(adminPage.accountsTableFirstRow);
   chai.expect(firstRowText).to.includes(expectedOldestResultForRole);
})

Then(/^The table shows all accounts "(.*)", "(.*)" regardless of the role$/, function(expectedResultAdmin,expectedResultNonAdmin) {
   action.isClickableWait(adminPage.creationDateColumnHeader,5000)
   action.clickElement(adminPage.creationDateColumnHeader);
   browser.waitUntil(
       () => action.getElementText(adminPage.accountsUserDetailsTable).includes(expectedResultAdmin),
       {
          timeout: 5000,
          timeoutMsg: 'Expected table to be sorted with all the oldest results'
       }
   );
   let tableText = action.getElementText(adminPage.accountsUserDetailsTable);
   chai.expect(tableText).to.includes(expectedResultAdmin);
   chai.expect(tableText).to.includes(expectedResultNonAdmin);
})