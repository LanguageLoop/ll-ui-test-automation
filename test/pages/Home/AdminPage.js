
module.exports = {

    get accountsSection()
    {
        return $('//span[text()="Accounts"]/parent::div/parent::div/parent::div/parent::div');
    },

    get accountsUserDetailsTable()
    {
        return $('//table[contains(@id,"UserDetailTable")]');
    },

    get creationDateColumn()
    {
        return $('//table[contains(@id,"UserDetailTable")]/child::thead/child::tr/child::th[text()="Creation date"]');
    },

    get creationDateAfterUserNameColumn()
    {
        return $('//th[text()="Username"]/following-sibling::th[text()="Creation date"]');
    },

    get creationDateBeforeMobilePhoneColumn()
    {
        return $('//th[text()="Mobile Phone"]/preceding-sibling::th[text()="Creation date"]');
    },

    get creationDateRowValueLocator(){
        return '(//table[contains(@id,"UserDetailTable")]/child::tbody//child::td[3])[<dynamic>]';
    },

    get creationDateColumnHeader(){
        return $('//th[text()="Creation date"]');
    },

    get accountsTableFirstRow(){
        return $('//table[contains(@id,"UserDetailTable")]/child::tbody/child::tr[1]');
    },

    get roleFilterDropdown(){
        return $('//select[contains(@id,"UserManagement") and contains(@id,"dropdown")]');
    },

    get roleFilterDropdownBelowSearchField(){
        return $('//input[@title="Search by Name, Username, Mobile Number and Role"]/ancestor::div/descendant::select[contains(@id,"UserManagement") and contains(@id,"dropdown")]');
    },

    get roleDropdownGroupLabelsLocator(){
        return '//optgroup[@label="<dynamic>"]';
    },

    get clientGroupOptionsLocator(){
        return '//optgroup[@label="Client Group"]/child::option[text()="<dynamic>"]';
    },

    get contractorGroupOptionsLocator(){
        return '//optgroup[@label="Contractor Group"]/child::option[text()="<dynamic>"]';
    },

    get staffGroupOptionsLocator(){
        return '//optgroup[@label="Staff Group"]/child::option[text()="<dynamic>"]';
    },

    get searchButton(){
        return $('//input[contains(@id,"UserManagement") and contains(@value,"Search")]')
    },

    get creationDateOfCreatedUserLocator(){
        return '//table[contains(@id,"UserDetailTable")]/child::tbody//child::a[contains(normalize-space(),"<dynamic>")]/following::td[2]'
    },

    get createAccountButton(){
        return $('//input[@value="Create Account"]');
    },

    get roleToggleLocator(){
        return '//span[text()="<dynamic>"]/parent::div/following-sibling::div//child::label';
    },

    get firstNameFieldCreateAccount(){
        return $('//input[contains(@id,"FirstName")]');
    },

    get emailFieldCreateAccount(){
        return $('//input[contains(@id,"UserEmail")]');
    },

    get landLineNumberFieldCreateAccount(){
        return $('//input[contains(@id,"LandlinePhoneNumber")]');
    },

    get saveDetailButton(){
        return $('//input[@value="Save Detail"]');
    },

    get userCreatedMessage(){
        return $('//span[text()="User profile was successfully saved."]');
    },

    get userProfileNameText(){
        return $('//span[@class="Text_white"]');
    },

    get createdDateTextUnderProfilePic(){
        return $('//div[contains(text(),"Created Date:")]')
    },

    get accountsSearchByTextBox(){
        return $('//input[@title="Search by Name, Username, Mobile Number and Role"]');
    },

    get accountSearchResultLinkLocator(){
        return '//table[contains(@id,"UserDetailTable")]//child::td[text()="<dynamic>"]/preceding-sibling::td/child::a';
    },

    get editProfileButton(){
        return $('//input[@value="Edit Profile"]');
    },

    get show$AmountsOnODTICheckbox(){
        return $('//div[text()="Show $ amounts on On Demand TI Dashboard"]/parent::div//child::input');
    },
}
