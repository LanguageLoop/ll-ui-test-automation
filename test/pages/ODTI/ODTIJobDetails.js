
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
    },

    get ensureAllMandatoryFieldsCompletedErrorMessage() {
        return $('//div[text()="Please ensure that all mandatory custom fields are completed"]');
    },

    get disabledPinSearchResultTextDynamicLocator() {
        return '//span[contains(@id,"ChangeJobPINModal") and text()="<dynamic>"]';
    },

    get campusIsDisabledHoverMessage() {
        return $('//span[text()="Campus is disabled"]');
    },

    get noCampusPinToShowText() {
        return $('//td[text()="No campus PIN to show..."]');
    },

    get mandatoryFieldTextBoxDynamicLocator() {
        return '//span[text()="<dynamic>"]/parent::div/following-sibling::div[1]/input';
    },

    get campusPinLink() {
        return $('//div[contains(@id,"CampusPinLink")]');
    },

    get campusTotalRateTextBox() {
        return $('//input[contains(@id,"InputClientTotal")]');
    },

    get addAJobTaskOrNoteLink() {
        return $('//a[contains(@id,"AddJobTaskOrNote")]');
    },

    get jobTaskPopup() {
        return $('//span[text()="View Job Task"]/parent::div/parent::div');
    },

    get jobTaskDropdown() {
        return $('//div[text()="Task"]/select');
    },

    get messageTextarea() {
        return $('//textarea[contains(@id,"txtTaskNoteMessage")]');
    },

    get saveButtonOnJobTaskPopup() {
        return $('//input[@value="Save" and (contains(@id,"TaskNoteDialog_block"))]');
    },

    get xButtonOnJobTaskPopup() {
        return $('//a[contains(@id,"TaskNoteDialog_block")]/span[@class="fa fa-fw fa-remove"]');
    },

    get jobNotesSavedList() {
        return $('//div[contains(@id,"JobTaskNoteList")]');
    },

    get jobNotesExistingMessageDynamicLocator() {
        return '//div[contains(@id,"JobTaskNoteList")]//div[contains(text(),"<dynamic>")]';
    },

    get discussionSectionCommentsList() {
        return $('//span[text()="Discussion"]/parent::div[contains(@id,"DiscussionList")]');
    },

    get discussionListCommentMessageCount() {
        return $$('//div[@class="DiscussionListRecord"]/div[contains(@class,"CommentMessage")]').length;
    },

    get discussionListCommentMessageDynamicLocator() {
        return '(//div[@class="DiscussionListRecord"]/div[contains(@class,"CommentMessage")])[<dynamic>]';
    },

    get moreLinkUnderJobNotes() {
        return $('//div[contains(@id,"JobHistToggle")]/a[text()="more"]');
    },

    get jobNotesRowMessageDynamicLocator() {
        return '//div[contains(@id,"JobTaskNoteList")]//div[@class="JobTaskNoteListRecord"][<dynamic>]//div[contains(@class,"MarginGutter")][1]';
    },

    get jobDynamicFieldNameLocator() {
        return '//div[contains(@id,"JobDetails")]//span[text()="<dynamic>"]';
    },

    get clientCallIdLink() {
        return $('//span[text()="Client Call ID"]/parent::div//a');
    },

    get campusDynamicFieldInputValueLocator() {
        return '//label[text()="<dynamic>"]/parent::div/following-sibling::div//input';
    },

    get jobDynamicFieldValueTextLocator() {
        return '//div[contains(@id,"JobDetails")]//span[text()="<dynamic>"]/following-sibling::div';
    },

    get processCampusButton(){
        return $('//input[@value="Process Campus"]')
    },

    get reprocessCampusButton(){
        return $('//input[@value="Reprocess Campus"]')
    },

    get reprocessCampusToBeReexportedConfirmation() {
        return $('//div[text()="Reprocess campus to be re-exported?"]');
    },

    get yesButtonOnReprocessDialog() {
        return $('//div[contains(@id,"ReprocessDialog")]//input[@value="Yes"]');
    }
}