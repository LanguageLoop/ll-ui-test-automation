
When(/^I navigate to dev page$/, function(){
    browser.url(GlobalData.DEV_URL)
})

When(/^I set the job to "(.*)"$/, function(status){
    searchByJobId(GlobalData. CURRENT_JOB_ID)
    browser.pause(2000)
    setJobStatus(status)
    browser.pause(2000)
})


function searchByJobId(jobid)
{
   action.enterValue(devPage.jobIdInput,jobid,"Job ID input in Dev page")
}

function setJobStatus(status)
{
    switch(status)
    {

    case "Complete":
        action.clickElement(devPage.completeJobButton,"Complete job button in Dev page")
        break
    }

}