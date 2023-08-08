
module.exports ={
    get emergencyContactLink(){
        return $('//*[text()="Emergency Contact"]')
    },

    get manageEmergencyContactLink(){
        return $('//a[contains(text(),"Manage emergency contact")]')
    },

    get addLeaveLink(){
        return $('//a[contains(text(),"Add leave")]')
    },

    get leaveStartDateInput(){
        return $('//input[contains(@id,"wttxtStartDate")]')
    },

    get leaveEndDateInput(){
        return $('//input[contains(@id,"wttxtEndDate")]')
    },

    get onSiteCheckbox(){
        return $('//*[contains(text(),"Manage Holidays")]/../..//*[text()="On Site"]/..//input')
    },

    get translationCheckbox(){
        return $('//*[contains(text(),"Manage Holidays")]/../..//*[text()="Translation"]/..//input')
    },

    get preBookedTICheckbox(){
        return $('//*[contains(text(),"Manage Holidays")]/../..//*[text()="Pre-booked TI"]/..//input')
    },

    get preBookedVideoCheckbox(){
        return $('//*[contains(text(),"Manage Holidays")]/../..//*[text()="Pre-booked Video"]/..//input')
    },

    get addLeaveButton(){
        return $('//input[@value="Add Leave"]')
    },

    get leaveToggleButton(){
        return $('//table[contains(@id,"LeaveDates")]//td[4]//*[@class="HorizontalDots"]')
    },

    get leaveTable(){
        return $('//table[contains(@id,"LeaveDates")]')
    },

    get leaveTableStartDate(){
        return $('//table[contains(@id,"LeaveDates")]//td[1]')
    },

    get leaveTableEndDate(){
        return $('//table[contains(@id,"LeaveDates")]//td[2]')
    },

    get deleteLeaveLink(){
        return $('//table[contains(@id,"LeaveDates")]//a[contains(@id,"wtPlaceholderLinks_wtlnkDelete")]')
    },

    get resetPasswordButton(){
        return $('//*[@value="Reset Password"]')
    },

    get editDetailsLink(){
        return $('//a[contains(text(),"Edit profile details")]')
    },

    get preferredNameInput(){
        return $('//input[contains(@id,"PreferredName")]')
    },

    get religionDropdown(){
        return $('//select[contains(@id,"ReligionId")]')
    },

    get abnInput(){
        return $('//input[contains(@id,"Contractor_ABN")]')
    },

    get abnCheckButton(){
        return $('//input[@value="Check"]')
    },

    get entityTypeDropdown(){
        return $('//select[contains(@id,"EntityType")]')
    },

    get companyNameInput(){
        return $('//input[contains(@id,"CompanyName")]')
    },

    get businessTypeDropdown(){
        return $('//select[contains(@id,"IndustryTypes")]')
    },

    get saveButton(){
        return $('//*[text()="My Details"]/../..//input[@value="Save"]')
    },

    get resetEmailConfirmationMessage(){
        return $('//*[text()="Reset password email has been sent."]')
    },

    get emergencyFirstNameInput(){
        return $('//input[contains(@id,"wttxtName")]')
    },

    get emergencyLastNameInput(){
        return $('//input[contains(@id,"wttxtLastName")]')
    },

    get emergencyPhoneNumberInput(){
        return $('//input[contains(@id,"wttxtPhoneNumber2")]')
    },

    get emergencyRelationshipDropdown(){
        return $('//select[contains(@id,"wtcbRelationship2")]')
    },

    get emergencyRelationshipDropdownSelectedText(){
        return $('//select[contains(@id,"wtcbRelationship2")]//option[@selected="selected"]')
    },

    get emergencyAddressInput(){
        return $('//textarea[contains(@id,"wttxtAddress3")]')
    },

    get emergencyEmailInput(){
        return $('//input[contains(@id,"wttxtEmail3")]')
    },

    get emergencyCountryDropdown(){
        return $('//select[contains(@id,"wtcbCountry3")]')
    },

    get emergencyCountryDropdownSelectedText(){
        return $('//select[contains(@id,"wtcbCountry3")]//option[@selected="selected"]')
    },

    get saveEmergencyContactButton(){
        return $('//*[contains(text(),"Manage Emergency Contact")]/../..//input[contains(@id,"wtbtnSave")]')
    },

    get languageShowExpiredToggle(){
        return $('//*[text()="Show expired"]/..//input/..')
    },

    get naatiTable(){
        return $('//table[contains(@id,"wttrNAATIAccreditation")]')
    },

    get workEligibilityUploadLink(){
        return $('//*[text()="Work Eligibility"]/..//a[text()="Upload a document"]')
    },

    get workEligibilityDocumentLink(){
        return $('//*[text()="Working rights.docx"]')
    },

    get hepatitisToggleButton(){
        return $('//*[text()="Hepatitis B"]/../../..//*[contains(@name,"wtlblToggle")]')
    },

    get hepatitisDocumentLink(){
        return $('.//*[text()="Hepatitis.docx"]')
    },

    get hepatitisUploadFileLink(){
        return $('//*[text()="Hepatitis B"]/../../..//a[text()="Upload File"]')
    },

    get statutoryDeclarationToggleButton(){
        return $('//*[text()="Statutory Declaration"]/../../..//*[contains(@name,"wtlblToggle")]')
    },

    get statutoryDeclarationUploadFileLink(){
        return $('//*[text()="Statutory Declaration"]/../../..//a[text()="Upload File"]')
    },

    get statutoryDocumentLink(){
        return $('//*[text()="Statutory Declaration.docx"]')
    },

    get workingWithChildrenToggleButton(){
        return $('//*[text()="Working With Children"]/../../..//*[contains(@name,"wtlblToggle")]')
    },

    get workingWithChildrenDocumentLink(){
        return $('//*[text()="Working With Children.docx"]')
    },

    get workingWithChildrenUploadFileLink(){
        return $('//*[text()="Working With Children"]/../../..//a[text()="Upload File"]')
    },

    get clearanceDocumentUploadControl(){
        return $('//*[text()="Proof of Clearance"]/../..//input[@type="file"]')
    },

    get workEligibilityDocumentUploadControl(){
        return $('//*[text()="Proof of PR / Visa"]/../..//input[@type="file"]')
    },

    get saveButtonOnProofOfClearancePopup(){
        return $('//span[text()="Proof of Clearance"]/parent::div/parent::div//input[@value="Save"]');
    },

    get ODTIAvailabilityBlock() {
        return $('//div[text()="On-demand Telephone Interpreting Availability"]/ancestor::div[contains(@id,"block_wtODTI")]');
    },

    get ODTIAvailabilityBlockAboveWorkAvailability() {
        return $('//div[contains(@id,"contContractorWorkAvailability")]/preceding::div[contains(@id,"contODTIContractorAvailability")]');
    },

    get myProfilePageHeader() {
        return $('//div[text()="My Profile"]');
    },

    get contractorLoginStatusAndPreferredPhone() {
        return $('//div[contains(@id,"ODTI_Container")]');
    },

    get notActivatedText() {
        return $('//div[text()="Not Activated"]');
    },

    get contractorLogonLogoffStatusText() {
        return $('//div[contains(@id,"ODTI_Container")]/div[1]');
    },

    get contractorLogonLogoffStatusText() {
        return $('//div[contains(@id,"ODTI_Container")]/div[1]');
    },

    get mobileRadioOptionWithPhoneNumber() {
        return $('//div[contains(text(),"Mobile:")]/parent::div//input[@type="radio"]');
    },

    get homeRadioOptionWithPhoneNumber() {
        return $('//div[contains(text(),"Home:")]/parent::div//input[@type="radio"]');
    },

    get logonButton() {
        return $('//input[@value="Log on"]');
    },

    get loginAvailableStatusText() {
        return $('//div[text()="You are available and your current contact number is:"]');
    },

    get selectedPhoneNumberOptionDynamicLocator() {
        return '//div[contains(text(),"<dynamic>:")]';
    },

    get logoffButton() {
        return $('//input[@value="Log off"]');
    },

    get contractorLoggedInWithDefaultPhoneSelected() {
        return $('//div[text()="Contractor available and current contact number is:"]/following-sibling::div[contains(text(),"Home:")]');
    },

    get workAvailabilityListOptionDynamicLocator() {
        return '//div[text()="Work Availability"]/parent::div/div[2]//div[text()="<dynamic>"]';
    },

    get workAvailabilityListOptionExpandedLinks() {
        return $$('//a[contains(@id,"ContractorAvailabilityTable")]');
    },

    get workAvailabilityNotActivatedODTIText() {
        return $('//div[text()="You are not activated for On Demand Telephone Interpreting"]');
    },

    get workAvailabilityActivatedODTIText() {
        return $('//div[text()="You are activated for On Demand Telephone Interpreting"]');
    }
}