
module.exports = {

    get didNumberInputTextBox() {
        return $('//input[contains(@id,"DIDConfiguration_PhoneNumber")]');
    },

    get existingDIDConfiguration() {
        return $('//div[contains(@id,"DIDConfigurationForm")]');
    },
}