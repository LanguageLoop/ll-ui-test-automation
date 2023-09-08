
module.exports ={

    //*** CAMPUS MANAGEMENT SECTION ******///
    get searchCampusInput()
    {
        return $('//input[contains(@placeholder,"Search by Campus Name")]')
    },

    get firstCampusLink()
    {
        return $('//table[contains(@id,"CampusTable")]//td//a')
    },

    get createCampusLink()
    {
        return $('//a[contains(text(),"Create Campus")]')
    },
    
    get metroRadioButton()
    {
        return $('//*[text()="Metro"]/../..//input')
    },

    get regionalRadioButton()
    {
        return $('//*[text()="Metro"]/../..//input')
    },
    
    get campusAddressInput()
    {
        return $('//*[text()="Address Search"]/..//input')
    },

    get videoLoopPinInput()
    {
        return $('//*[text()="VideoLoop PIN"]/..//input')
    },

    get address2Input(){
        return $('//*[contains(text(),"Address 2 (Building/Floor/Apartment)")]/../..//input')
    },

    get postalAddress2Input(){
        return $('//*[contains(text(),"Postal Address 2 (Building/Floor/Apartment)")]/../..//input')
    },

    get postalAddressInput(){
        return $$('//*[text()="Address Search"]/..//input')[1]
    },

    get campusNameInput(){
        return $('//*[text()="Campus Name"]/..//input')
    },

    get campusPostName1Input(){
        return $('//*[text()="Campus Post Name 1"]/..//input')
    },

    get campusPostName2Input(){
        return $('//*[text()="Campus Post Name 2"]/..//input')
    },

    get campusABNInput(){
        return $('//input[contains(@name,"wtCampusABN")]')
    },

    get abnCheckButton(){
        return $('//input[@value="Check"]')
    },

    get companyNameInput(){
        return $('//input[contains(@id,"wtCompanyName")]')
    },

    get PONumberInput(){
        return $('//*[text()="PO Number"]/..//input')
    },

    get campusStatusDropdown(){
        return $('//*[text()="Campus Status"]/..//select')
    },

    get entityTypeDropdown(){
        return $('//*[text()="Entity Type"]/..//select')
    },

    get overrideInvoiceFrequencyDropdown(){
        return $('//*[text()="Override Invoice Frequency"]/..//select')
    },

    get businessTypesDropdown(){
        return $('//*[text()="Business Types"]/..//select')
    },

    get tradingNameInput(){
        return $('//input[contains(@id,"wtTradingName")]')
    },

    get chargeGSTCheckbox(){
        return $('//*[text()="Charge GST"]/..//input')
    },

    get regionalCampusCheckbox(){
        return $('//*[text()="Campus is Regional"]/..//input')
    },

    get selectBillToLink(){
        return $('//a[contains(text(),"Select a default Bill-To")]')
    },

    get saveButton(){
        return $$('//*[contains(@id,"wtdialogCampusForm") and text()="Campus"]/../..//input[@value="Save" and @type="submit"]')[2]
    },

    get duplicateCampusSaveButton()
    {
        return $('//*[text()="Possible Duplication"]/../..//input[@value="Save"]')
    },

    get searchBillToInput(){
        return $('//input[contains(@placeholder,"Search by Bill-To Code,")]')
    },

    get firstBillToTitle(){
        return $('//table[contains(@id,"wtBillingTable")]//td')
    },

    get assignButton(){
        return $('//input[@value="Assign"]')
    },

    //*** CONTRACT MANAGEMENT SECTION ******///

    get searchContractInput(){
        return $('//input[contains(@placeholder,"Search by Contract")]')
    },

    get firstContract(){
        return $('//table[contains(@id,"ContractTable")]//td//a')
    },

    get addContractLink(){
        return $('//*[contains(text(),"Add contract")]')
    },

    get dimensionTagPlusIcon(){
        return $('//a[contains(@id,"DimensionTagging")]/child::span[@class="fa fa-fw fa-plus"]')
    },

    get dimensionListDropdown(){
        return $('//select[contains(@id,"DimensionTagging")]')
    },

    get selectAValueDropdownOptionsListCount(){
        return $$('//option[text()=" - select a value - "]/following-sibling::option').length
    },

    get selectAValueDropdownOptionsList(){
        return $('//option[text()=" - select a value - "]/following-sibling::option')
    },

    get shortCodeListDropdown(){
        return $('//select[contains(@id,"DimensionTagging")]')
    },

    get selectAValueListOptionLocator(){
        return '//option[text()=" - select a value - "]/following-sibling::option[<dynamic>]';
    },

    get selectAValueListOptionTextLocator(){
        return '//option[text()=" - select a value - "]/following-sibling::option[text()="<dynamic>"]';
    },

    get tagLocator(){
        return "//i[text()='<dynamic1>']/parent::span[text()='<dynamic2>']"
    },

    get dimensionListOptionLocator(){
        return '//option[text()=" - select a dimension list - "]/following-sibling::option[text()="<dynamic>"]'
    },

    get dimensionTagDeleteCrossIcon(){
        return '//i[text()="<dynamic1>"]/parent::span[text()="<dynamic2>"]//child::span'
    },

    get crossIconNextToDropdown(){
        return $('//select[contains(@id,"DimensionTagging")]/following-sibling::a')
    },

    get dimensionTagsCount(){
        return $$('//span[@class="dimensionTagCloud"]//child::i').length
    },

    get campusPageHeader(){
        return $('//div[@class="Heading1 Title PH OSInline"][text()="Campus"]')
    },

    get dimensionTagCloudSection(){
        return $('//div[text()="Dimension Tag Cloud"]/parent::div')
    },

    get selectAValueDropdown(){
        return $('//option[text()=" - select a value - "]/parent::select')
    },

    get accountManagementPageTitleHeader() {
        return $('//div[text()="Account Management" and contains(@id,"Title")]');
    },

    get accountsSectionHeader() {
        return $('//span[text()="Accounts" and contains(@class,"Heading3")]');
    },

    get createAccountButton() {
        return $('//input[@value="Create Account"]');
    },

    get accountManagementSearchResultLinkLocator(){
        return '//table[contains(@id,"UserDetailTable")]//child::a[contains(text(),"<dynamic>") and contains(@id,"Management")]';
    },

    get accountProfilePageTitleHeader() {
        return $('//div[text()="Account Profile" and contains(@id,"Title")]');
    },

    get contractResultLocator() {
        return '//a[contains(@id,"ContractTable") and text()="<dynamic>"]';
    },

    get campusSearchResultDynamicLinkLocator()
    {
        return '//table[contains(@id,"CampusTable")]//td//a[contains(text(),"<dynamic>")]';
    },

    get covidBoosterVaccinationBlock() {
        return $('//div[contains(@id,"VaccinationList")]//span[text()="Covid Booster"][1]');
    },

    get covidBoosterVaccinationBlockDeleteIcon() {
        return $('//span[text()="Covid Booster"][1]/parent::div/parent::div/parent::div[@class="PreferenceInfoBlock Card"]//span[@class="fa fa-fw fa-trash-o"]');
    }
}