
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
        return '(//table[contains(@id,"UserDetailTable")]/child::tbody//child::td[3])[<dynamic>]'
    }
}
