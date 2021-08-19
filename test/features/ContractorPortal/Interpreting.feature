@Interpreting
Feature: Interpreter features

  Background: open loopedin login page

   Given the looped in login page is opened
  
   

 @SearchForJobs 
  Scenario Outline: Search for jobs as an interpreter in various  job stages
   When I login with "<username>" and "<password>"
   And I handle the message for interpreters dialog
   And I select "<dropdownfilter>" from the filter dropdown
   And I search for job request "<job id>"
   And I enter to date "<to date>"
   And I click on the show regional jobs checkbox
   Then I verify the job table is displayed

   
   Examples:
   | username                 | password | dropdownfilter      | to date     | job id  |
   | suzanehanna@hotmail.com  | Test1    | Available Jobs      |  13-05-2022 | 1560450 |
   | suzanehanna@hotmail.com  | Test1    | Allocated Jobs      |  13-05-2022 | 1560450 |
   | suzanehanna@hotmail.com  | Test1    | Completed Jobs      |  13-05-2022 | 1544161 |
   | suzanehanna@hotmail.com  | Test1    | Rejected Jobs       |  13-05-2022 | 1560450 |
   | suzanehanna@hotmail.com  | Test1    | Cancelled           |  13-05-2022 | 1537266 |
   | suzanehanna@hotmail.com  | Test1    | Failed to Complete  |  13-05-2022 | 1537266 |

 @RejectJobs1 
  Scenario Outline: Reject jobs
  When I login with "<admin username>" and "<admin password>"
  And I create a job request with preffered interpreter "<contractor username>"
  And I click logout button
#login as interpreter
   When I login with "<contractor username>" and "<contractor password>"
   And I handle the message for interpreters dialog
   And I select "<dropdownfilter>" from the filter dropdown
   And I click on first job id from interpreting job list
   And I click reject job button
   And I select "Rejected Jobs" from the filter dropdown
   And I search for selected job request
   Then I verify the job is listed in search results
   
   Examples:
  | job notice length |admin username    | admin password | contractor username      | contractor password | dropdownfilter      | to date     | job id  | campus pin  |  Requester Name      |
  | long notice       |LLAdmin@looped.in |   Octopus@6     | jabmon1@hotmail.com      | Test1               | Available Jobs      |  13-05-2022 | 1560450 | 33124       |  Automation Tester   |
  

 @AcceptJobs 
   Scenario Outline: Accept jobs
    When I login with "<admin username>" and "<admin password>"
    And I create a job request with preffered interpreter "<contractor username>"
    And I click logout button
    #login as interpreter
    When I login with "<contractor username>" and "<contractor password>"
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on first job id from interpreting job list
    And I click accept job button
    And I select "Allocated Jobs" from the filter dropdown
    And I search for selected job request
    Then I verify the job is listed in search results
    And I click on first job id from accepted job list
    And I click return job button
   
    Examples:
   | contractor username  | contractor password | dropdownfilter      | to date     | admin username    | admin password |
   | jabmon1@hotmail.com  | Test1               | Available Jobs      |  13-05-2022 | LLAdmin@looped.in | Octopus@6        |
  
 
 @UnavailableJobs 
  Scenario Outline: Unavailable for job
   When I login with "<admin username>" and "<admin password>"
   And I create a job request with preffered interpreter "<contractor username>"
   And I click logout button
    #login as interpreter
   When I login with "<contractor username>" and "<contractor password>"
   And I handle the message for interpreters dialog
   And I select "<dropdownfilter>" from the filter dropdown
   And I click on first job id from interpreting job list
   And I click unavailable job button
   
   Examples:
  | job notice length |admin username    | admin password | contractor username      | contractor password | dropdownfilter      | to date     | job id  |
  | long notice       |LLAdmin@looped.in |   Octopus@6     | jabmon1@hotmail.com      | Test1               | Available Jobs      |  13-05-2022 | 1560450 |
  

