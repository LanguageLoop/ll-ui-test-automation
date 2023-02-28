module.exports = {

    get addContractorLink() {
        return $('//*[contains(text(),"Add contractor")]')
    },

    get salutationDropdown() {
        return $('//*[text()="My Details"]/../..//*[text()="Salutation"]/..//select')
    },

    get maleRadioButton() {
        return $('//*[text()="My Details"]/../..//*[text()="Male"]/..//input')
    },

    get femaleRadioButton() {
        return $('//*[text()="My Details"]/../..//*[text()="Female"]/..//input')
    },

    get telephonePinInput() {
        return $('//*[text()="My Details"]/../..//*[text()="Telephone Pin"]/..//input')
    },

    get firstNameInput() {
        return $('//*[text()="My Details"]/../..//*[text()="First Name"]/..//input')
    },

    get lastNameInput() {
        return $('//*[text()="My Details"]/../..//*[text()="Last Name"]/..//input')
    },

    get mobileInput() {
        return $('//*[text()="My Details"]/../..//*[text()="Mobile"]/..//input')
    },

    get telephoneInput() {
        return $('//*[text()="My Details"]/../..//*[text()="Telephone"]/..//input')
    },


    get countryOfBirthDropdown() {
        return $('//*[text()="My Details"]/../..//*[text()="Country of Birth"]/..//select')
    },

    get emailInput() {
        return $('//*[text()="My Details"]/../..//*[text()="Email"]/..//input[contains(@name,"UserDetail")]')
    },

    get emailPreferenceCheckbox() {
        return $('//*[text()="My Details"]/../..//*[text()="Contact Preference"]/..//*[text()="Email"]/..//input')
    },

    get smsPreferenceCheckbox() {
        return $('//*[text()="My Details"]/../..//*[text()="Contact Preference"]/..//*[text()="SMS"]/..//input')
    },

    get gstRegisteredCheckbox() {
        return $('//*[text()="My Details"]/../..//*[text()="Contractor is registered for GST"]/..//input')
    },

    get regionalCheckbox() {
        return $('//*[text()="My Details"]/../..//*[text()="Regional Contractor"]/..//*[text()="SMS"]/..//input')
    },

    get dateOfBirthDropdown() {
        return $('//*[text()="My Details"]/../..//*[text()="DOB"]/..//input')
    },

    get activationDateInput() {
        return $('//*[text()="My Details"]/../..//*[text()="Start Activation Date Time"]/..//input')
    },

    get addressInput() {
        return $('//*[text()="My Details"]/../..//*[text()="Address Search"]/..//input[contains(@name,"txtAddress")]')
    },

    get postalAddressInput() {
        return $$('//*[text()="My Details"]/../..//*[text()="Address Search"]/..//input[contains(@name,"txtAddress")]')[1]
    },

    get workContractFileControl() {
        return $('//*[text()="My Details"]/../..//*[text()="Work Contract File"]/..//*[@type="file"]')
    },

    get saveContractorButton() {
        return $('//*[text()="My Details"]/../..//input[@value="Save"]')
    },

    get idTypeDropdown() {
        return $('//*[text()="My Details"]/../..//*[text()="ID Type"]/..//select')
    },

    get idNumberInput() {
        return $('//*[text()="My Details"]/../..//*[text()="ID  Number"]/..//input')
    },

    get photoIdFileControl() {
        return $('//*[text()="My Details"]/../..//*[text()="Photo ID"]/..//*[@type="file"]')
    },

    get contractorABNInput() {
        return $('//*[text()="My Details"]/../..//*[text()="Contractor ABN"]/..//input[contains(@name,"Contractor_ABN")]')
    },

    get abnCheckButton() {
        return $('//*[text()="My Details"]/../..//input[@value="Check"]')
    },

    get saveButton() {
        return $('//*[text()="My Details"]/../..//input[@value="Save"]')
    },

    get searchContractorInput() {
        return $('//input[contains(@placeholder,"Search by Contractor")]')
    },

    get contractorTable() {
        return $('//table[contains(@id,"Contractor")]')
    },

    get contractorTableRows() {
        return $$('//table[contains(@id,"Contractor")]//tr')
    },

    //NAATI Section

    get addAccreditationLink() {
        return $('//*[contains(text(),"Add accreditation")]')
    },

    get serviceDropdown() {
        return $('//*[contains(text(),"NAATI Accreditation")]/../..//*[text()="Service"]/..//select')
    },

    get fromLanguageDropdown() {
        return $('//*[contains(text(),"NAATI Accreditation")]/../..//*[text()="From Language"]/..//div')
    },

    get toLanguageDropdown() {
        return $('//*[contains(text(),"NAATI Accreditation")]/../..//*[text()="To Language"]/..//div')
    },

    get naatiAccreditationDropdown() {
        return $('//*[contains(text(),"NAATI Accreditation")]/../..//*[text()="NAATI Accreditation"]/..//select')
    },

    get checkNAATIButton() {
        return $('//*[contains(text(),"NAATI Accreditation")]/../..//input[@value="Validate"]')
    },

    get naatiNumberInput() {
        return $('//*[contains(text(),"NAATI Accreditation")]/../..//*[text()="NAATI Number/Practitioner ID"]/..//input')

    },

    get dateIssuedInput() {
        return $('//*[contains(text(),"NAATI Accreditation")]/../..//*[text()="Date Issued"]/..//input')

    },

    get dateOfExpiryInput() {
        return $('//*[contains(text(),"NAATI Accreditation")]/../..//*[text()="Expiry Date"]/..//input')

    },


    get saveAndCloseButton() {
        return $('//*[contains(text(),"NAATI Accreditation")]/../..//input[@value="Save & Close"]')
    },

    get naatiTableRows() {
        return $$('//*[contains(text(),"Naati")]/../../..//table//tr')
    },

    // Notes section

    get addNotesLink() {
        return $('//*[contains(text(),"Add note")]')
    },

    get noteTitleInput() {
        return $('//*[text()="Note"]/../..//*[text()="Title"]/..//input')
    },

    get noteMessageInput() {
        return $('//*[text()="Note"]/../..//*[text()="Message"]/..//textarea')
    },

    get notesTableRows() {
        return $$('//*[contains(text(),"Notes")]/../../..//table//tr')

    },

    get saveNotesButton() {
        return $('//*[text()="Note"]/../..//input[@value="Save"]')
    },


    // Work eligibility section

    get addWorkEligbileLink() {
        return $('//*[contains(text(),"Manage work eligible")]')
    },

    get workRightsDropdown() {
        return $('//*[contains(text(),"Manage work eligibility")]/../..//*[text()="Work Rights"]/..//select')
    },

    get passportVisaNumberInput() {
        return $('//*[contains(text(),"Manage work eligibility")]/../..//*[text()="Passport/Visa Number"]/..//input')
    },

    get proofOfVisaPassportFileControl() {
        return $('//*[contains(text(),"Manage work eligibility")]/../..//*[text()="Proof of PR / Visa"]/../..//*[@type="file"]')
    },

    get yearsOfResidenceInput() {
        return $('//*[contains(text(),"Manage work eligibility")]/../..//*[text()="Year of Residence in Australia"]/..//input')
    },

    get saveWorkEligibilityButton() {
        return $('//*[contains(text(),"Manage work eligibility")]/../..//input[@value="Save"]')
    },

    get workEligibilityDocumentLink() {
        return $('//*[text()="Work Eligibility"]/..//*[contains(text(),"Working rights.docx")]')
    },

    // clearance section

    get addClearanceLink() {
        return $('//*[contains(text(),"Add clearance")]')
    },

    get clearanceTypeDropdown() {
        return $('//*[text()="Add clearance"]/../..//*[text()="Clearance type"]/..//select')
    },

    get clearanceDateOfIssueInput() {
        return $('//*[text()="Add clearance"]/../..//*[text()="Date of issue"]/..//input')
    },

    get clearanceFileControl() {
        return $('//*[text()="Add clearance"]/../..//*[text()="Proof of clearance"]/../..//*[@type="file"]')
    },

    get childrenCardTypeDropdown() {
        return $('//*[text()="Add clearance"]/../..//*[text()="Card type"]/..//select')
    },

    get stateDropdown() {
        return $('//*[text()="Add clearance"]/../..//*[text()="State of issue"]/..//select')
    },

    get documentReceivedDate() {
        return $('//*[text()="Add clearance"]/../..//*[text()="Document Received Date"]/..//input')
    },

    get documentExpiryDate() {
        return $('//*[text()="Add clearance"]/../..//*[text()="Date of expiry"]/..//input')
    },

    get cardNumberInput() {
        return $('//*[text()="Add clearance"]/../..//*[text()="Card number"]/..//input')
    },

    get policeDateInput() {
        return $('//*[text()="Add clearance"]/../..//*[text()="Date of issue"]/..//input')
    },

    get saveClearanceButton() {
        return $('//*[text()="Add clearance"]/../..//input[@value="Save"]')
    },

    get policeCheckToggleButton() {
        return $('//*[text()="Police Check"]/../../..//label')
    },

    get childrenCheckToggleButton() {
        return $('//*[text()="Working With Children"]/../../..//label')
    },

    get clearanceItems() {
        return $$('//*[text()="Clearance"]/../..//*[@class="ClearanceListItem"]')
    },


    // Work availability
    get addAvailabilityLink() {
        return $('//*[contains(text(),"Add availability")]')
    },

    get workAvailabilityTranslationItem() {
        return $('//*[text()="Work Availability"]/..//*[text()="Translation"]')
    },

    get translationAvailabilityCheckbox() {
        return $('//*[text()="Add availability"]/../..//*[text()="Translation"]/..//input')
    },

    get availabilitySegment() {
        return $('//*[text()="Add availability"]/../..//tbody[@class="fc-body"]')
    },

    get wordsPerDayInput() {
        return $('//*[text()="Add availability"]/../..//*[text()="Max Words per Day"]/..//input')
    },

    get saveAvailabilityButton() {
        return $('//*[text()="Add availability"]/../..//input[@value="Save"]')
    },

    // Work preference section

    get addWorkPreferenceLink() {
        return $('//*[contains(text(),"Add work preference")]')
    },

    get organisationSection() {
        return $('//*[contains(text(),"Select Working Preference")]/../..//*[text()="Organisations"]')
    },

    get searchCompanyNameInput() {
        return $('//*[contains(text(),"Select Working Preference")]/../..//*[text()="Organisations"]/../..//input[contains(@placeholder,"Search by Company Name")]')
    },

    get saveWorkPreferenceButton() {
        return $('//*[contains(text(),"Select Working Preference")]/../..//input[@value="Save"]')
    },

    get removeWorkPreferenceButtons() {
        return $$('//*[text()="Working Preferences"]/../../../../../..//span[@class="fa fa-fw fa-remove"]')
    },

    // Referee section

    get addRefereeLink() {
        return $('//*[contains(text(),"Add referee")]')
    },

    get agencyInput() {
        return $('//*[text()="Referee"]/../..//*[text()="Agency"]/..//input')
    },

    get refereeNameInput() {
        return $('//*[text()="Referee"]/../..//*[text()="Name"]/..//input')
    },

    get saveRefereeButton() {
        return $('//*[text()="Referee"]/../..//input[@value="Save"]')
    },

    get referencesToggleButtons() {
        return $$('//*[text()="References"]/..//label')
    },

    get validateButton() {
        return $("input[value='Validate']")
    },
    get naatiNumber() {
        return $('//*[text()[contains(.,"NAATI Number/Practitioner ID")]]/../..//input[contains(@id,"wttxtNAATINumber")]')

    },
    get validFrom() {
        return $('//*[text()[contains(.,"Valid from")]]')

    },
    get translatorXTMAlert() {
        return $('//*[text()[contains(.,"Attention!")]]')
    },
    get xtmConfirmButton() {
        return $('input[type="Submit"][value="Confirm"]')
    },
    get noNaatiAccreditation() {
        return $('//*[text()[contains(.,"No NAATI accreditations to show...")]]')
    },

    get contractorSearchResultLocator() {
        return '//table[contains(@id,"Contractor")]//td/a[contains(text(),"<dynamic>")]'
    },

    get addABlockLink() {
        return $('//a[text()="Add a block"]');
    },

    get contractorBlockingModalPopup() {
        return $('//span[text()="Contractor Blocking"]//parent::div/parent::div[contains(@id,"block_Modal")]');
    },

    get contractorBlockPopupTabs() {
        return $('//div[contains(@id,"block_Modal")]//div[@class="Tabs_header noSwipe "]');
    },

    get billToTab() {
        return $('//div[text()="Bill-To" and contains(@class,"Tabs__tab PH")]');
    },

    get listOfContractBillTos() {
        return $('//span[@class="ListRecords" and contains(@id,"BillTos")]');
    },

    get billToSearchBox() {
        return $('//input[contains(@id,"SearchBillTo")]');
    },

    get billToCheckBoxesCount() {
        return $$('//input[@type="checkbox" and contains(@id,"BillTos")]').length;
    },

    get billToCheckBoxes() {
        return $$('//input[@type="checkbox" and contains(@id,"BillTos")]');
    },

    get jobTypesListRecords() {
        return $('//span[@class="ListRecords" and contains(@id,"ListRecords1")]');
    },

    get jobTypesCheckBoxesCount() {
        return $$('//input[@type="checkbox" and contains(@id,"ListRecords1")]').length;
    },

    get jobTypesCheckBoxes() {
        return $$('//input[@type="checkbox" and contains(@id,"ListRecords1")]');
    },

    get billToDynamicCheckboxLocator() {
        return '//span[contains(text(),"<dynamic>")]/parent::div/preceding-sibling::div/child::input';
    },

    get billToSeverityDropdown() {
        return $('//select[contains(@id,"SeverityBillTo")]');
    },

    get startDateBillTo() {
        return $('//input[contains(@id,"StartDateBillTo")]');
    },

    get endDateBillTo() {
        return $('//input[contains(@id,"EndDateBillTo")]');
    },

    get addBlockButton() {
        return $('//input[@value="Add Block"][@type="submit"]');
    },

    get jobTypeDynamicCheckboxLocator() {
        return '//div[text()="<dynamic>"]/parent::div/child::div/child::input[@type="checkbox"]';
    },

    get newBlockRuleLinksOnProfile() {
        return $$('//table[contains(@id,"Blockings")]/child::tbody/child::tr//child::a[not(text()="Remove")]');
    },

    get newBlockRuleLinksToggleIcon() {
        return $('//table[contains(@id,"Blockings")]/child::tbody/child::tr//child::label[contains(@id,"Toggle")]');
    },

    get newBlockRuleLinksRemove() {
        return $('//table[contains(@id,"Blockings")]/child::tbody/child::tr//child::a[(text()="Remove")]');
    },

    get addBlockPopupFeedbackMessage() {
        return $('//span[@class="Feedback_Message_Text"]');
    },

    get activeBlockerLinkLocator() {
        return '//a[contains(@id,"Blockings") and contains(text(),"<dynamic>")]';
    },

    get activeTabOnAddBlockPopup() {
        return $('//div[contains(@id,"block_Modal")]//div[@class="Tabs__tab PH active"]');
    },

    get activeTabNameLocator() {
        return '//div[contains(@id,"block_Modal")]//div[@class="Tabs__tab PH active"][text()="<dynamic>"]';
    },

    get saveButtonOnBlockingPopup() {
        return $('//input[contains(@id,"blockingDialog") and (@value="Save")]')
    },

    get accreditationFromToLanguagesLocator() {
        return '//table[contains(@id,"NAATIAccreditation")]/tbody/tr/td[2][text()="<dynamic1> > <dynamic2>"]';
    },

    get accreditationFromToLanguagesServiceLinkLocator() {
        return '//table[contains(@id,"NAATIAccreditation")]/tbody/tr/td[2][text()="<dynamic1> > <dynamic2>"]/preceding-sibling::td/a';
    },

    get viewHistoryButton() {
        return $('//input[@value="View History" and (@class="Button")]');
    },

    get showContractAuditTrialsLink() {
        return $('//a[text()="Show Contractor Audit Trails"]');
    },

    get auditHistoryNoItemsToShowMessage() {
        return $('//td[text()="No items to show..."]');
    },

    get auditHistoryTableBody() {
        return $('//table[contains(@id,"AuditHistory")]/tbody');
    },

    get naatiCertificationsText() {
        return $$('//span[contains(@id,"Certifications")]/div');
    },

    get cancelButtonOnNaatiAcceditationPopup() {
        return $('//input[@value="Cancel" and contains(@id,"dialogAccreditation")]')
    },

    get naatiCertificationsFirstText() {
        return $('//span[contains(@id,"Certifications")]/div');
    },

    get billToValueTextBox() {
        return $('//input[contains(@id,"SearchInputWidget") and (@value)]');
    },

    get contractorBlockingPopupCloseButton() {
        return $('//a[contains(@id,"DialogClose") and contains(@id,"blockingDialog")]');
    },

    get dateStartedErrorMessage() {
        return $('//span[contains(@id,"ValidationMessage") and contains(@id,"StartDateBillTo")]');
    },

    get jobTypesErrorMessage() {
        return $('//span[contains(@id,"ServiceValid")]/span[@class="ValidationMessage"]');
    },

    get severitySelectedOption() {
        return $('//select[contains(@id,"SeverityBillTo")]/option[@selected]');
    },

    get showExpiredBlocksToggleCheck() {
        return $('//label[contains(@id,"wt184_block_wtCheckbox")]');
    },

    get manageBasicDetails() {
        return $('//a[contains(text(), "Manage basic details")]');
    },

    get myDetailsPopup() {
        return $('//span[text()="My Details"]');
    },

    get contractorABNField() {
        return $('//div[contains(@id, "ManageBasicDetails")]/input[contains(@name, "Contractor_ABN")]');
    },

    get companyNameField() {
        return $('//div[contains(@id, "ManageBasicDetails")]/input[contains(@name, "ABNCompanyName")]');
    },

    get checkButton() {
        return $('//input[contains(@name, "ManageBasicDetails") and (@value = "Check")]');
    },

    get thumpsUpIcon() {
        return $('//span[contains(@class,"thumbs-o-up")]');
    },

    get thumpsUpToolTipText() {
        return $('//span[text()="ABN is valid."]');
    },

    get thumpsDownIcon() {
        return $('//span[contains(@class,"thumbs-o-down")]');
    },

    get thumpsDownToolTipText() {
        return '//span[text()="No details found for ABN <dynamic>"]';
    },

    get thumpsDownToolTipForNoABN() {
        return $('//span[text()="No details found for ABN "]');
    },
}
