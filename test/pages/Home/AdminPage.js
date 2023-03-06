
module.exports = {

    get accountsSection()
    {
        return $('//span[text()="Accounts"]/parent::div/parent::div/parent::div/parent::div');
    },

    get accountsUserDetailsTable()
    {
        return $('//table[contains(@id,"UserDetailTable")]');
    },

    get creationDateColumn()
    {
        return $('//table[contains(@id,"UserDetailTable")]/child::thead/child::tr/child::th[text()="Creation date"]');
    },

    get creationDateAfterUserNameColumn()
    {
        return $('//th[text()="Username"]/following-sibling::th[text()="Creation date"]');
    },

    get creationDateBeforeMobilePhoneColumn()
    {
        return $('//th[text()="Mobile Phone"]/preceding-sibling::th[text()="Creation date"]');
    },

    get creationDateRowValueLocator(){
        return '(//table[contains(@id,"UserDetailTable")]/child::tbody//child::td[3])[<dynamic>]';
    },

    get creationDateColumnHeader(){
        return $('//th[text()="Creation date"]');
    },

    get accountsTableFirstRow(){
        return $('//table[contains(@id,"UserDetailTable")]/child::tbody/child::tr[1]');
    },

    get roleFilterDropdown(){
        return $('//select[contains(@id,"UserManagement") and contains(@id,"dropdown")]');
    },

    get roleFilterDropdownBelowSearchField(){
        return $('//input[@title="Search by Name, Username, Mobile Number and Role"]/ancestor::div/descendant::select[contains(@id,"UserManagement") and contains(@id,"dropdown")]');
    },

    get roleDropdownGroupLabelsLocator(){
        return '//optgroup[@label="<dynamic>"]';
    },

    get clientGroupOptionsLocator(){
        return '//optgroup[@label="Client Group"]/child::option[text()="<dynamic>"]';
    },

    get contractorGroupOptionsLocator(){
        return '//optgroup[@label="Contractor Group"]/child::option[text()="<dynamic>"]';
    },

    get staffGroupOptionsLocator(){
        return '//optgroup[@label="Staff Group"]/child::option[text()="<dynamic>"]';
    },

    get searchButton(){
        return $('//input[contains(@id,"UserManagement") and contains(@value,"Search")]')
    },

    get creationDateOfCreatedUserLocator(){
        return '//table[contains(@id,"UserDetailTable")]/child::tbody//child::a[contains(normalize-space(),"<dynamic>")]/following::td[2]'
    },

    get createAccountButton(){
        return $('//input[@value="Create Account"]');
    },

    get roleToggleLocator(){
        return '//span[text()="<dynamic>"]/parent::div/following-sibling::div//child::label';
    },

    get firstNameFieldCreateAccount(){
        return $('//input[contains(@id,"FirstName")]');
    },

    get emailFieldCreateAccount(){
        return $('//input[contains(@id,"UserEmail")]');
    },

    get landLineNumberFieldCreateAccount(){
        return $('//input[contains(@id,"LandlinePhoneNumber")]');
    },

    get saveDetailButton(){
        return $('//input[@value="Save Detail"]');
    },

    get userCreatedMessage(){
        return $('//span[text()="User profile was successfully saved."]');
    },

    get userProfileNameText(){
        return $('//span[@class="Text_white"]');
    },

    get createdDateTextUnderProfilePic(){
        return $('//div[contains(text(),"Created Date:")]')
    },

    get accountsSearchByTextBox(){
        return $('//input[@title="Search by Name, Username, Mobile Number and Role"]');
    },

    get accountSearchResultLinkLocator(){
        return '//table[contains(@id,"UserDetailTable")]//child::td[contains(text(),"<dynamic>")]/preceding-sibling::td/child::a';
    },

    get editProfileButton(){
        return $('//input[@value="Edit Profile"]');
    },

    get show$AmountsOnODTICheckbox(){
        return $('//div[text()="Show $ amounts on On Demand TI Dashboard"]/parent::div//child::input');
    },

    get naatiAccreditations() {
        return $('//div[text()="Naati Accreditations"]/parent::div/parent::div');
    },

    get fisrtNaatiLevelElement() {
        return '//table[contains(@id, "NaatiAccre")]/child::tbody/tr[<dynamic1>]/td[<dynamic2>]/a';
    },

    get fisrtNaatiWeightElement() {
        return '//table[contains(@id, "NaatiAccre")]/child::tbody/tr[<dynamic1>]/td[<dynamic2>]/div';
    },

    get manageNaatiAccreditationPopup() {
        return $('//span[text()="Manage Naati Accreditation"]');
    },

    get naatiWeightField() {
        return $('//input[contains(@name, "Naati_Weight")]');
    },

    get saveButton() {
        return $('//span[text()="Manage Naati Accreditation"]/following::input[contains(@id,"btnSaveModal")]');
    },

    get errorMessage() {
        return $('//span[contains(text(), "more than 1000")]');
    },

    get closeButton() {
        return $('//span[text()="Manage Naati Accreditation"]/preceding-sibling::a/child::span[contains(@class,"remove")]');
    },

    get languagesSection() {
        return $('//div[text()="Languages"]/parent::div/parent::div');
    },

    get languageSearchField() {
        return $('//input[@title="Search by language name or shortcode"]');
    },

    get searchLanguageButton() {
        return $('//input[contains(@id, "ServiceLanguage") and (@value="Search")]');
    },

    get languageResultTable() {
        return $('//table[contains(@id, "LanguageTable")]');
    },

    get languageText() {
        return '//a[contains(text(), "<dynamic>")]';
    },
    get manageLanguagePopup() {
        return $('//span[text() = "Manage Language"]');
    },

    get languageExplanationText() {
        return '//div[contains(text(), "<dynamic>")]';
    },

    get backNavigationButton() {
        return $('//span[@class="fa fa-fw fa-angle-left"]/parent::a[contains(@id,"Title")]');
    },

    get resetPasswordButton() {
        return $('//input[@value="Reset Password"]');
    },

    get terminateUserButton() {
        return $('//input[@value="Terminate User"]');
    },

    get lastNameFieldCreateAccount(){
        return $('//input[contains(@id,"LastName")]');
    },

    get emailFieldReadOnly() {
        return $('//input[contains(@id,"UserEmail") and (@readonly="readonly")]');
    },

    get birthDayTextBox() {
        return $('//input[contains(@id,"DOB")]');
    },

    get officeLocationTextBox() {
        return $('//input[contains(@id,"txtAddress")]');
    },

    get mobileNumberTextBox() {
        return $('//input[contains(@id,"MobilePhone")]');
    },

    get startDateTimeReadOnly() {
        return $('//input[contains(@id,"StartDateTime") and (@readonly="readonly")]');
    },

    get preventConcurrentSessionsCheckbox() {
        return $('//div[text()="Prevent concurrent sessions"]/preceding-sibling::div/input[@type="checkbox"]');
    },

    get rolesSectionOnProfile() {
        return $('//span[text()="Roles"]/parent::div');
    },

    get clientGroupRoles() {
        return $('//span[text()="Client Group"]/parent::div');
    },

    get roleToggleEnabledLocator() {
        return '//span[text()="<dynamic>"]/parent::div/following-sibling::div//child::label[contains(@class,"changed")]'
    },

    get groupRolesDynamicLocator() {
        return '//span[text()="<dynamic>"]/parent::div';
    },

    get savedTextOnProfileDynamicLocator() {
        return '//*[text()="<dynamic>"]';
    },

    get cancelButtonEditProfile() {
        return $('//input[@value="Cancel" and (contains(@id,"Actions"))]')
    },

    get editIconNextToEmailAddress() {
        return $('//a[contains(@id,"MainContent_UserManagement_") and not(contains(@id,"Email"))]');
    },

    get changeEmailPopup() {
        return $('//span[text()="Confirm Change of Email"]/parent::div/parent::div');
    },

    get newEmailTextBoxOnPopup() {
        return $('//input[contains(@id,"NewEmail")]');
    },

    get confirmEmailTextBoxOnPopup() {
        return $('//input[contains(@id,"ConfirmEmail")]');
    },

    get changeEmailButton() {
        return $('//input[@value="Change email"]');
    },

    get emailAddressAlreadyExistsMessage() {
        return $('//span[text()="Email address already exist."]');
    },

    get changeEmailPopupCloseButton() {
        return $('//a[contains(@id,"ChangeEmailDialog_block_wtlbtnAltusDialogClose")]');
    },

    get userStatusText() {
        return $('//div[@class="Status OSInline"]/label');
    },

    get confirmationEmailSentMessage() {
        return $('//span[text()="Confirmation email has been sent to your new email address. Please complete the confirmation to accept the changes in system."]');
    },

    get emailAndConfirmEmailDoNotMatch() {
        return $('//span[text()="Email and confirm email do not match"]');
    }
}