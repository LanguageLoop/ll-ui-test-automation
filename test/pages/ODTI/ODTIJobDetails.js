
module.exports = {

    get campusPinEditIcon() {
        return $('//span[text()="Campus PIN"]/parent::div//span[@class="fa fa-fw fa-edit"]');
    },

    get migrateAndRecalculateJobFeeButton() {
        return $('//input[@value="Migrate & Recalculate Job Fee"]');
    },

    get newPinMustBeSelectedAndValidErrorMessage() {
        return $('//div[text()="New PIN must be selected and valid"]');
    },

    get selectPinLink() {
        return $('//a[text()="Select PIN"]');
    },

    get pinTextBoxUnderFilterBy() {
        return $('input[placeholder="PIN"]')
    },

    get pinSearchResultLinkDynamicLocator() {
        return '//a[contains(@id,"ChangeJobPINModal") and text()="<dynamic>"]';
    },

    get noContractRateFoundErrorMessage() {
        return $('//div[text()="The Job PIN could not be migrated. No contract rate found for Contract ID:1136 and will not allow the user to proceed with that PIN."]');
    }
}