
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