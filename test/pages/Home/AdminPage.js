
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
    }
}
