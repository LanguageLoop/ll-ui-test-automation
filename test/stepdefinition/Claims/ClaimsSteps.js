const { before } = require("lodash")

When(/^I enter interview date after "(.*)"$/, function(interviewdate){
    action.enterValue(claimsPage.interviewDateAfter, interviewdate)
})

When(/^I enter interview date before "(.*)"$/, function(beforedate){
   // var temp_date_time=datetime.getScheduleDateTime("long notice","9:30")
    action.enterValue(claimsPage.interviewDateBefore, beforedate)
})

When(/^I close all special search criteria$/, function(){
    var closebuttons= claimsPage.searchCriteriaCloseButtons
    for(var i=0;i<closebuttons.length;i++){
        browser.pause(2000)
        action.clickElement(closebuttons[i])
        browser.pause(2000)

    }
})

When(/^I click on first job id from claims job list$/, function(){
    browser.pause(4000)
    GlobalData.CURRENT_JOB_ID = interpretingPage.jobIdColumnFromSearchResult.getText()
    action.clickElement(interpretingPage.jobIdColumnFromSearchResult)
    browser.pause(5000)
  })

  When(/^I switch to the claims window$/, function(){
    browser.switchWindow('Claim Details *')
    browser.pause(3000)
  })

  When(/^I switch to the claims main window$/, function(){
    browser.switchWindow('Claims*')
    browser.pause(3000)
  })

  When(/^I switch to the campus details window$/, function(){
    browser.switchWindow('CampusDetails *')
    browser.pause(3000)
  })

When(/^I get the campus fee for first job$/, function(){
    browser.pause(2000)
    GlobalData.CAMPUS_FEE= claimsPage.campusFeeCell.getText()
})

When(/^I get the contractor fee for first job$/, function(){
    browser.pause(2000)
    GlobalData.CONTRACTOR_FEE= claimsPage.contractorFeeCell.getText()
})

When(/^I get job actual minutes$/, function(){
    browser.pause(2000)
    GlobalData.JOB_ACTUAL_MINUTES= claimsPage.actualMinutesInput.getAttribute("text")
})

When(/^I get job finish time$/, function(){
    GlobalData.JOB_FINISH_TIME= claimsPage.jobFinishedDateTimeInput.getAttribute("value")
    console.log("JADDU :"+GlobalData.JOB_FINISH_TIME)
    var temp_date=new Date(GlobalData.JOB_FINISH_TIME)
    temp_date.setHours(temp_date.getHours() + 2)
    var temp_date_value=temp_date.getDate()+"-"+(temp_date.getMonth()+1)+"-"+temp_date.getFullYear()
    var temp_time_value= temp_date.getHours()+":"+temp_date.getMinutes()
    GlobalData.NEW_JOB_FINISH_TIME= temp_date_value
})

When(/^I enter new job finish time$/, function(){
    claimsPage.jobFinishedDateTimeInput.click()
    browser.pause(2000)
    claimsPage.jobFinishedDateTimeInput.clearValue()
    browser.pause(2000)
    claimsPage.jobFinishedDateTimeInput.setValue(GlobalData.NEW_JOB_FINISH_TIME)
    browser.keys('Tab')
    browser.pause(2000)
})

When(/^I click process campus button$/, function(){
    browser.refresh()
    browser.pause(2000)
    action.clickElement(claimsPage.processCampusButton)
    browser.pause(2000)
})

When(/^I click reprocess campus button$/, function(){
    browser.refresh()
    browser.pause(2000)
    action.clickElement(claimsPage.reprocessCampusButton)
    browser.pause(2000)
})

When(/^I click process contractor button$/, function(){
    browser.refresh()
    browser.pause(2000)
    action.clickElement(claimsPage.processContractorButton)
    browser.pause(2000)
})

When(/^I click reprocess contractor button$/, function(){
    browser.refresh()
    browser.pause(2000)
    action.clickElement(claimsPage.reprocessContractorButton)
    browser.pause(2000)
})

When(/^I click process campus and contractor button$/, function(){
    browser.refresh()
    browser.pause(2000)
    action.clickElement(claimsPage.processCampusAndContractorButton)
})

When(/^I click reprocess campus and contractor button$/, function(){
    browser.refresh()
    browser.pause(2000)
    action.clickElement(claimsPage.reprocessCampusAndContractorButton)
})

When(/^I handle reprocess confirmation$/, function(){
    try{
        claimsPage.reprocessConfirmYesButton.waitForExist({timeout:5000})
        claimsPage.reprocessConfirmYesButton.click()
      
      }
    catch(Err)
       {
        }
})

When(/^I handle reprocess campus and contractor confirmation$/, function(){
    try{
        claimsPage.reprocessCampusAndContractorConfirmYesButton.waitForExist({timeout:5000})
        claimsPage.reprocessCampusAndContractorConfirmYesButton.click()
      
      }
    catch(Err)
       {
        }
})

When(/^I click the first campus centre from search results$/, function(){
    action.clickElement(claimsPage.campusCentreColumn)
    browser.pause(2000)
})

When(/^I select "(.*)" jobs from search results$/, function(count){
    var boxes= claimsPage.selectJobsCheckboxes
    for(var i=0;i<count;i++)
    {
        action.clickElement(boxes[i])
        browser.pause(2000)
    }
})

When(/^I click bulk process claim button$/, function(){
    browser.pause(2000)
    action.clickElement(claimsPage.bulkClaimProcessButton)
})

When(/^I confirm bulk claim process dialog$/, function(){
    browser.pause(2000)
    action.clickElement(claimsPage.bulkClaimConfirmOkButton)
})

When(/^I click advanced search link$/, function(){
    action.clickElement(claimsPage.advancedSearchLink)
    browser.pause(2000)
})

When(/^I select "(.*)" search criteria category$/, function(criteria){
    action.selectTextFromDropdown(claimsPage.advanceSearchCategoryDropdown,criteria)
    browser.pause(2000)
})

When(/^I select "(.*)" search criteria condition$/, function(condition){
    action.selectTextFromDropdown(claimsPage.advanceSearchConditionDropdown,condition)
    browser.pause(2000)
})

When(/^I get the rsc fee$/, function(){
    browser.pause(4000)

    GlobalData.RSC_FEE= claimsPage.rscFeeInput.getAttribute("value")
})

Then(/^I verify rsc fee is not changed$/, function(){
    console.log("VIHARI ******** "+GlobalData.RSC_FEE)
    chai.expect(GlobalData.RSC_FEE==claimsPage.rscFeeInput.getAttribute("value")).to.be.true
})

Then(/^I confirm the bulk claim process success message appears$/, function(){
    browser.pause(2000)
    chai.expect(action.elementExists(claimsPage.bulkClaimProcessConfirmMessage)).to.be.true
})

Then(/^I verify the contractor fee$/, function(){
    chai.expect(claimsPage.contractorFeeInput.getAttribute("value").replace(" ","")==GlobalData.CONTRACTOR_FEE).to.be.true
})

Then(/^I verify vic road travel fee$/, function(){
    var travel_distance= claimsPage.travelledKMInput.getAttribute("text")
    var actual_travel_fee= claimsPage.travelFeeInput.getAttribute("text")

    var expected_travel_fee= travel_distance*0.85
    console.log("Expected Travel Fee :"+expected_travel_fee +"  Actual Travel Fee :"+actual_travel_fee)
})

Then(/^I verify the campus fee$/, function(){
    console.log("ACTUAL :"+claimsPage.jobCampusFeeInput.getAttribute("value").replace(" ",""))
    console.log("EXPECTED :"+GlobalData.CAMPUS_FEE)
    chai.expect(claimsPage.jobCampusFeeInput.getAttribute("value").replace(" ","")==GlobalData.CAMPUS_FEE).to.be.true
})

Then(/^I verify the job status is "(.*)"$/, function(jobstatus){
    chai.expect(claimsPage.jobStatusColumn.getText()==jobstatus).to.be.true
})