
module.exports = {

    get showLoggedInContractorsOnlyToggleInput() {
        return $('//div[text()="Show Logged in Contractors Only"]/parent::div//div[contains(@class,"ToggleButton")]//input');
    },

    get showLoggedInContractorsOnlyToggleLabel() {
        return $('//div[text()="Show Logged in Contractors Only"]/parent::div//div[contains(@class,"ToggleButton")]/label');
    },

    get searchByIdAndNameTextBox() {
        return $('//input[@placeholder="Search by Id and Name"]');
    },

    get searchButton() {
        return $('//input[@value="Search"]');
    },

    get isLoggedOnToggleInput() {
        return '//a[contains(text(),"<dynamic>")]/parent::td/parent::tr/child::td[3]//div[contains(@class,"ToggleButton")]//input';
    },

    get isLoggedOnToggleLabel() {
        return '//a[contains(text(),"<dynamic>")]/parent::td/parent::tr/child::td[3]//div[contains(@class,"ToggleButton")]/label';
    },

    get serviceTiActiveToggleInput() {
        return '//a[contains(text(),"<dynamic>")]/parent::td/parent::tr/child::td[2]//div[contains(@class,"ToggleButton")]//input';
    },

    get serviceTiActiveToggleLabel() {
        return '//a[contains(text(),"<dynamic>")]/parent::td/parent::tr/child::td[2]//div[contains(@class,"ToggleButton")]/label';
    },
}
