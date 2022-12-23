
module.exports={

    get campusPinInput(){
        return $('//input[contains(@id,"CampusPIN")]')
    },

    get requesterNameDropdown(){
        return $('//*[text()="Requester Name"]/..//input/..')
    },
    get languageDropdown(){
        return $('//label[text()="Language"]/../div/div')
    },

    get assignmentTypeDropdown(){
        return $('//label[text()="Assigment Type"]/../div')
    },

    get dateInput(){
        return $('//input[@placeholder="DD-MM-YYYY"]')
    },

    get timeInput(){
        return $('//input[@placeholder="HH:mm"]')
    },

    get durationDropdown(){
        return $('//label[text()="Duration"]/..//select')
    },

    get natureOfRequestInput(){
        return $('//label[text()="Nature Of Request"]/..//select')
    },

    get naatiLevelDropdown(){
        return $('//label[text()="NAATI Level"]/..//select')
    },

    get confirmEmailInput(){
       if ( $('//label[text()="Confirmation Email"]/..//input').isExisting())
      {
            // cso page
         return $('//label[text()="Confirmation Email"]/..//input')
      }
         else
         {
            return $('//label[text()="Confirmation Email"]/../..//input')
         }
        
        
    },

    get confirmModeDropdown(){
        return $('//*[text()="Confirmation Mode"]/..//select')
    },

    get confirmPhoneNumberInput(){
        return $('//input[contains(@id,"wttxtConfPhone")]')
    },

    get saveAndProceedToSummaryButton(){
        return $('//input[@value="Save & Proceed to Summary"]')
    },

    get submitButton(){
        return $('//a[text()="Submit"]')
    },

    get submitAndSummaryButton(){
        return $('//input[@value="Submit & Summary"]')
    },

    get continueButton(){
        return $('//*[text()="Duplication Job Request"]/../..//input[@value="Continue"]')
    },

    get nextButton(){

        if($('//input[@value="Next"]').isExisting())
        {
            //CSO
        return $('//input[@value="Next"]')
        }
        else
        {
            //CBO
        return $('//span[text()="Next"]/..')
        }
    },

    get successMessage() { 
        return $('//*[@class="Feedback_Message_Success"]')
    },

    get requesterNameSearchInput(){
        return $('//*[text()="Requester Name"]/..//input')
    },

    get manualAllocationCheckBox(){
        return $('//*[contains(text(),"This Job Requires Manual Allocation")]/..//input[@type="checkbox"]')
    },

    get manualAllocationReasonInput(){
        return $('//textarea[@placeholder="Manual Allocation Reason"]')
    },

    get genderPreferenceCheckBox(){
        return $('//*[text()="Gender"]/..//*[text()="Must"]//input')
    },

    get genderDropdown(){
        return $('//*[text()="Gender"]/..//select')
    },

    get ancestryPreferenceCheckBox(){
        return $('//*[text()="Heritage / Ancestry"]/..//*[text()="Must"]//input')
    },

    get ancestryDropdown(){
        return $('//*[text()="Heritage / Ancestry"]/..//div[contains(@class,"select2-container")]')
    },

    get religionPreferenceCheckBox(){
        return $('//*[text()="Religion"]/..//*[text()="Must"]//input')
    },

    get religionDropdown()
    {
        return $('//*[text()="Religion"]/..//div[contains(@class,"select2-container")]')
    },

    get addInterpreterLink(){
        return $('//a[text()="Add Interpreter"]')
    },

    get preferredInterpreterMustCheckBox(){
        return $('//*[text()="Preferred Interpreter"]/..//input[@type="checkbox"]')
    },

    get addExcludedInterpreterLink(){
        return $('//a[text()="Add Excluded Interpreter"]')
    },

    get searchForInterpreterInput(){
        return $('//input[contains(@placeholder,"Search by Interpreter")]')
    },

    get addInterpretersButton(){
        return $('//input[@value="Add Interpreter(s)"]')
    },

    get interpreterSearchResultsCheckBox(){
        return $('//*[text()="Find Interpreter"]/../..//table//input')
    },

    get interpreterSearchResultsCheckBoxes(){
        return $$('//*[text()="Find Interpreter"]/../..//table//input')
    },

    get successMessageText(){
        return $('//span[@class="Feedback_Message_Text"]')
    },

    get editJobConfirmationYesButton(){
        return $('//input[@value="Yes" and contains(@name,"dialogModal")]')
    },

    get confirmationDate(){
        return $('//*[contains(@id,"confirmDate")]')
    },

    get confirmationTime(){
        return $('//input[contains(@id,"ConfirmationTime")]')
    },

    get backLink(){
        return $('//a[text()="Back"]')
    },

    get locationInput(){
        return $('//input[contains(@id,"wtInput_wttxtAddress")]')
    },

    get departmentInput(){
        return $('//*[text()="Department"]/../../..//input[contains(@id,"txtInputStd")]')
    },

    get yourReferenceInput(){
        return $('//*[text()="Your reference"]/../../..//input[contains(@id,"txtInputStd")]')
    },

    get POInput(){
        return $('//*[text()="PO Number"]/../../..//input[contains(@id,"txtInputStd")]')
    },

    get nesLink(){
        return $('//a[contains(text(),"Add NES")]')
    },

    get nesFirstNameInput(){
        return $('//*[text()="Manage NES"]/../..//input[contains(@id,"FirstName")]')
    },

    get nesSaveButton(){
        return $('//*[text()="Manage NES"]/../..//input[contains(@id,"Save")]')
    },

    get reportToLocationInput(){
        return $('//*[text()="Location"]/../../..//input')
    },

    get reportToNameInput(){
        return $('//input[contains(@id,"wtinFirstName")]')
    },

    get reportToPhoneNumberInput(){
        return $('//input[contains(@id,"wtinPhoneNumber")]')
    },

    get commonInstructionCheckBox(){
        return $('//*[text()="Common Instructions & Language Notes"]/..//input')
    },

    get addJobFileLink(){
        return $('//a[contains(text(),"Add ") and contains(text(),"job") and contains(text(),"file")]')
    },

    get addJobFileControl(){
        return $('//*[text()="Upload Job File"]/../..//input[@type="file"]')
    },

    get uploadAllFilesButton(){
        return $('//*[text()="Upload Job File"]/../..//input[@value="Upload All File/s"]')
    },

    get homeVisitTab(){
        return $('//*[text()="Home Visit"]')
    },

    get prebookedTelephoneTab(){
        return $('//label[text()="Pre-Booked Telephone"]')
    },

    get prebookedVideoTab(){
        return $('//label[text()="Pre-booked Video"]')
    },

    get onsiteTab(){
        return $('//label[text()="On Site"]')
    },

    get interpreterInstructionsInput(){
        return $('//*[contains(text(),"Instructions for Interpreter")]/..//textarea')
    },

    get videoLinkEditorInput(){
        return $$('//div[@role="presentation"]')[1]
    },

    get noChangeRequiredButton(){
        return $('//*[contains(@value,"No change required")]')
    },

    get campusPINComboBox(){
        return $('//*[contains(text(),"Campus PIN")]/..//select')
    },

    get jobGotUpdatedWarningMessage(){
        return $('//span[text()="This job got updated. Please refresh your browser and try it again."]')
    }


}