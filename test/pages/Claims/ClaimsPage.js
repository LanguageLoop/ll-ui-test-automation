
module.exports ={
    
    get interviewDateAfter(){
        return $$('//*[contains(@id,"SearchValue") and @placeholder="DD-MM-YYYY"]')[0]
    },

    get interviewDateBefore(){
        return $$('//*[contains(@id,"SearchValue") and @placeholder="DD-MM-YYYY"]')[1]
    },

    get searchJobInput(){
        return (interpretingPage.searchJobInput)
    },

    get campusFeeCell(){
        return $('//*[@data-columnname="CampusFee"]')
    },

    get contractorFeeCell(){
        return $('//*[@data-columnname="ContractorFee"]')
    },

    get searchCriteriaCloseButtons(){
      return $$('//a[contains(@id,"wtListAdvanceSearchRule")]/span[contains(@class,"close")]')
        //return $$('//span[contains(@class,"close")]') - updated to above locator
    },

    get campusFeeInput(){
        return $('//label[text()="Campus Fee"]/..//input')
    },

    get subTotalCampusFeeInput(){
        return $$('//label[text()="Subtotal"]/..//input')[0]
    },

    get jobCampusFeeInput(){
        return $$('//label[text()="Job Fee"]/..//input')[0]
    },

    get contractorFeeInput(){
        //return $('//label[text()="Contractor Payment"]/..//input')
        return $('//label[text()="Interpreter Payment"]/..//input')
    },

    get rscFeeInput(){
        return $('//label[text()="RSC Fee"]/..//input')
    },

    get processCampusButton(){
        return $('//input[@value="Process Campus"]')
    },

    get reprocessCampusButton(){
        return $('//input[@value="Reprocess Campus"]')
    },

    get processContractorButton(){
        //return $('//input[@value="Process Contractor"]')
      return $('//input[@value="Process Interpreter"]')
    },

    get reprocessContractorButton(){
       // return $('//input[@value="Reprocess Contractor"]')
       return $('//input[@value="Reprocess Interpreter"]')
    },

    get processCampusAndContractorButton(){
      //  return $('//input[@value="Process Campus and Contractor"]')
       return $('//input[@value="Process Campus and Interpreter"]')
    },

    get reprocessCampusAndContractorButton(){
        // return $('//input[@value="Reprocess Campus and Contractor"]')
        return $('//input[@value="Reprocess Campus and Interpreter"]')
    },

    get jobStatusColumn(){
        return $('//*[@data-columnname="JobStatus"]')
    },

    get reprocessConfirmYesButton(){
        return $('//*[text()="Reprocess Campus and Interpreter"]/../..//input[@value="Yes"]')
    },

    get reprocessCampusAndContractorConfirmYesButton(){
        return $('//*[text()="Reprocess Campus"]/../..//input[@value="Yes"]')
    },
    get reprocessCampusAndContractorConfirmYesButtonNew(){
        return $('//*[text()="Reprocess Campus and Interpreter"]/../..//input[@value="Yes"]')
    },
    

    get campusCentreColumn(){
        return $('//*[@data-columnname="CampusTitle"]')
    },

    get jobFinishedDateTimeInput(){
        return $('//*[text()="Job Finished"]/../..//input')
    },

    get actualMinutesInput(){
        return $('//*[text()="Actual Minute(s)"]/../..//input')
    },

    get selectJobsCheckboxes(){
        return $$('//*[@data-columnname="Selected"]/input')
    },

    get bulkClaimProcessButton(){
        return $('//input[@value="Bulk Process Campus(es)"]')
    },

    get bulkClaimConfirmOkButton(){
        return $('//*[text()="Bulk Process Confirmation"]/../..//input[@value="Ok"]')
    },

    get bulkClaimProcessConfirmMessage(){
        return $('//*[contains(text(),"succesfully processed")]')
    },

    get travelledKMInput(){
        return $('//*[text()="Travelled KMs"]/..//input')
    },

    get travelFeeInput(){
        return $('//*[text()="Travel KM Fee"]/..//input')
    },

    get advancedSearchLink(){
        return $('//a[contains(text(),"Advanced search")]')
    },

    get advanceSearchCategoryDropdown(){
        return $$('//select[contains(@name,"AdvanceSearchRule")]')[0]
    },

    get advanceSearchConditionDropdown(){
        return $$('//select[contains(@name,"AdvanceSearchRule")]')[1]
    },

    get jobResultsCheckbox(){
        return $('//*[@data-columnname="Selected"]/input')
    },

    get gstTextBoxUnderCampus() {
        return $('(//label[text()="GST"]/following-sibling::input)[1]');
    },

    get jobFeeTextBoxUnderCampus() {
        return $('(//label[text()="Job Fee"]/following-sibling::input)[1]');
    }, 
     get jobIdResult() {

    return $('//table[contains(@id,"JobTable")]//td//a/div');
     }
    }