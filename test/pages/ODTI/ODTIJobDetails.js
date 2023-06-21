
module.exports = {

    get campusPinEditIcon() {
        return $('//span[text()="Campus PIN"]/parent::div//span[@class="fa fa-fw fa-edit"]');
    },

    get migrateAndRecalculateJobFeeButton() {
        return $('//input[@value="Migrate & Recalculate Job Fee"]');
    },

    get newPinMustBeSelectedAndValidErrorMessage() {
        return $('//div[text()="New PIN must be selected and valid"]');
    }
}