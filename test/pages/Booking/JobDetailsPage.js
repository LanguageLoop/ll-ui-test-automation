
module.exports = {

    get duplicateButton()
    {
        return $('//*[contains(@id,"wtbtnDuplicate")]')
    },

    get editButton()
    {
        return $('//input[@value="Edit"]')
    },

    get cancelButton()
    {
        return $('//*[contains(@id,"wtbtnCancel")]')
    },

    get confirmCancelYesButton()
    {
       // return $('//*[text()="Are you sure, you want to cancel?"]/../../../../..//input[@value="Yes"]')
       return $('//*[contains(@id,"wtConfirmationModal_block_wtActions_wtBtnYes")]')
    },

    get lateRejectionConfirmYesButton(){
        return $('//*[contains(text(),"incur a penalty of Late Arrival - Rejected")]/../../../../../../..//input[@value="Yes"]')
    },

    get interpreterNoShowConfirmYesButton(){
        return $('//*[contains(text(),"incur a penalty of Interpreter No Show")]/../../../../../../..//input[@value="Yes"]')
    },

    get cancelReasonDropdown()
    {
        return $('//*[text()="Reason"]/../..//select')
    },

    get cancelOnBehalfDropdown()
    {
        return $('//*[text()="On Behalf"]/../..//select') 
    },

    get cancelSubmitButton()
    {
        return $$('//*[contains(@id,"ConfirmationModal") and @value="Submit" and @class="Button"]')[1]
    },

    get editConfirmationMessage()
    {
        return $('//*[contains(text(),"Job Detail was successfully saved")]')
    },

    get confirmationYesButton()
    {
        return $('//input[@value="Yes"]')
    },

    get jobIdLabel()
    {
        return $('//*[contains(text(),"Job ID #")]')
    },

    get noJobsListedMessage()
    {
        return $('//td[text()="No jobs to show..."]')
    },

    get jobCancelledWithoutFeeMessage()
    {
        return $('//td//div[text()="Cancelled - without fee"]')
    },

    get jobCancelledWithFeeMessage()
    {
        return $('//td//div[text()="Cancelled with fee"]')
    },

    get jobCancellationFeeConfirmYesButton()
    {
        return $('//*[contains(text(),"This job will incur Cancel Fee of")]/../../../../../../..//input[@value="Yes"]')
    },

    get contractorListTable()
    {
        return $('//*[@class="ContractorTable"]')
    },

    get autoNotificationLink()
    {
        return $('//a[text()="Auto Notification"]')
    },

    get noStatusLink()
    {
        return $('//a[text()="- No Status -"]')
    },

    get noStatusLink()
    {
        return $('//a[text()="Unavailable"]')
    },

    get refusedJobLink()
    {
        return $('//a[text()="Refused Job"]')
    },

    get jobContractorStatusDropdown()
    {
        return $('//select[contains(@id,"JobContractorStatus")]')
    },

    get noStatusLink()
    {
        return $('//a[text()="- No Status -"]')
    },

    get sendNotificationLink()
    {
        return $('//a[text()="Send Notification"]')
    },

    get allocatedLink()
    {
        return $('//a[text()="Allocated"]')
    },

    get returnedLink()
    {
        return $('//a[text()="Returned"]')
    },

    get searchContractorInput(){
        return $('//input[@placeholder="Search by Name or Contractor ID"]')
    },

    get assignmentTypeLabel(){
        return $('//label[text()="Assignment Type"]/../following-sibling::div')
    },

    get NAATILabel()
    {
        return $('//label[text()="NAATI Level"]/following-sibling::*')
    },
    
    get genderPreferneceLabel()
    {
        return $('//*[text()="Gender Preference"]/../following-sibling::*')
    },

    get acceptMetroServiceCheckBox()
    {
        return $('//*[text()="Accept Metro Service"]/..//input')
    },

    get jobAllocationTableBodyRowsCount() {
        return $$('//div[@class="JobAllocationContainer"]/table/tbody/tr').length;
    },

    get jobAllocationDynamicValueLinkLocator() {
        return '//div[@class="JobAllocationContainer"]/table/tbody/tr[<dynamicRowNumber>]/td[<dynamicColumnNumber>]/a';
    },

    get campusPinHyperlink() {
        return $('//div[contains(@id,"CampusPinLink")]/a');
    },

    get contractNameHyperlink() {
        return $('//span[text()="Contract Name"]/parent::div//a');
    },

    get jobAllocationSection() {
        return $('//div[@class="JobAllocationContainer"]');
    },

    get jobInfoSectionLabelsDynamicLocator() {
        return '//span[text()="<dynamicSectionName>"]/parent::div//child::span[text()="<dynamicLabel>"]';
    },

    get jobAllocationSectionUnderJobInfoSection() {
        return $('//div[contains(@id,"DetailsContainer")]//div[@class="JobAllocationContainer"]');
    },

    get jobAllocationTableHeaders() {
        return $('//table[contains(@id,"ODTIServiceChargeTable")]/thead/tr');
    },

    get contractorJobStatusLinkLocator() {
        return '//a[contains(text(),"<dynamic>")]/parent::div/parent::div//a[contains(@id,"JobStatus")]';
    },

    get organisationCampusBlocksContractorText() {
        return $('//span[text()="1. Organisation/Campus blocks Contractor"]');
    },

    get returnThisJobPopup() {
        return $('//span[contains(text(),"Return this Job")]');
    },

    get returnReasonDropdown() {
        return $('//select[contains(@id,"JobReturnDialog")]');
    },

    get returnJobPopupConfirmButton() {
        return $('//input[contains(@id,"JobReturnDialog") and @value="Confirm Return"]')
    }
}