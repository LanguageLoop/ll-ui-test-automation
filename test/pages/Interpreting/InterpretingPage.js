
module.exports={
    get filterDropdown()
    {
        return $('//select[@class="BorderlessShadowlessDropdown"]');

    },

    get newJobRequestButton()
    {
        return $('//input[@value="Start New Job Request"]');
    },

    get searchJobInput()
    {
        return $('//input[@placeholder="Search by Job Id, campus name, and job address"]')
    },

    get jobStatusDropdown()
    {
        return $('//select[contains(@id,"JobStatus")]')
    },

    get jobIdColumnFromSearchResult()
    {
        return $('//*[@data-loopedin-columnname="JobId" or @data-divname="JobIdCol" or @data-columnname="JobId"]')
    },

    get jobIdsColumnFromSearchResult()
    {
        return $$('//*[@data-loopedin-columnname="JobId" or @data-divname="JobIdCol"]')

    },

    get jobIdLinkFromSearchResult()
    {
        return $('//a[text()="'+GlobalData.CURRENT_JOB_ID+'"]')
    },

    get jobSummaryLink()
    {
        return $('//a[@class="GoToSummary"]/..')
    },

    get bulkUploadButton()
    {
        return $('//input[@value="Bulk Upload"]')
    },

    get fromDateInput()
    {
        return $('//input[contains(@id,"EarliestStart")]')
    },

    get toDateInput()
    {
        return $('//input[contains(@id,"EarliestStart2")]')
    },

    get regionalJobsCheckbox()
    {
        return $('//*[contains(text(),"Show Regional Jobs")]//input')
    },

    get jobTable()
    {
        return $('//table[contains(@id,"JobTable")]')
    },

    get acceptJobButton()
    {
        return $('//a[@class="Accept"]')
    },

    get rejectJobButton()
    {
        return $('//a[@class="Reject"]')
    },

    get unavailableJobButton()
    {
        return $('//a[@class="Unavailable"]')
    },

    get returnJobButton()
    {
        return $('//*[text()="Return this job"]')
    },

    get messageForInterpreterOKButton()
    {
        return $('//*[contains(text(),"Message for Interpreters")]/../..//input[@type="submit"]')
    },

    get jobFilterFieldDropdownOptionLocator() {
        return '(//select[contains(@id,"Field")])[<dynamicIndex>]/child::option[text()="<dynamicOption>"]';
    },

    get jobFilterValueTextBoxLocator() {
        return '(//input[contains(@id,"ListAdvanceSearchRule")])[<dynamicIndex>]';
    },

    get jobTableRowsCount() {
        return $$('//div[contains(@id,"JobTable")]/table[contains(@id,"JobTable")]/tbody/tr').length;
    },

    get jobTableDynamicTextValueLocator() {
        return '//div[contains(@id,"JobTable")]/table[contains(@id,"JobTable")]/tbody/tr[<dynamicRowIndex>]/td[<dynamicColumnIndex>]'
    },

    get jobTableNoJobsToShowMessage() {
        return $('//div[contains(@id,"JobTable")]/table[contains(@id,"JobTable")]/tbody/tr/td[text()="No jobs to show..."]');
    },

    get filterDropdownOption()
    {
        return '//select[@class="BorderlessShadowlessDropdown"]/option[text()="<dynamic>"]';
    },

    get cantReturnJobCallUsErrorMessageText() {
        return $('//span[text()="Please note you can’t return this job on the portal. You will need to call us to return your job."]');
    },

    //This is created for internal usage
    get languageColumnTextAvailable() {
        return $('//th/div[contains(@id,"Language")]');
    },

    //This is created for internal usage
    get firstJobIDFromList() {
        return $('//td/div[contains(@id,"JobId")]');
    },

    get JobIDFromLists() {
        return '(//td/div[contains(@id,"JobId")])[<dynamicIndex>]';
    },

    get jobIDRowCount() {
        return $$('//td/div[contains(@id,"JobId")]').length;
    },

    get indexDropdownCount() {
        return $('//select[contains(@name,"wt323")]');
    },
}