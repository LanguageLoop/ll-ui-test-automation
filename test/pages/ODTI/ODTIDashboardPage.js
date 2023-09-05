module.exports = {

    get startDateTextBox() {
        return $('//input[contains(@id,"StartDate")]');
    },

    get endDateTextBox() {
        return $('//input[contains(@id,"EndDate")]');
    },

    get applyButton() {
        return $('//input[@value="Apply"]');
    },

    get callsCountValueText() {
        return $('//div[text()="Calls"]/preceding-sibling::div[1]');
    }
}