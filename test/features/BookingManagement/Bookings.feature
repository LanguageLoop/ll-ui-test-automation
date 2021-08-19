@CreateBooking
Feature: Create new booking for Interpreters

   Background: Load Loopedin login page
   Given the looped in login page is opened
  

   @CreateJobRequest1
   Scenario Outline: Create Booking with minimal required field values
   When I login with "<username>" and "<password>"
   And I click Interpreting header link
   And I select "<dropdownfilter>" from the filter dropdown
   And I click on new job request button
   And I enter campus pin "<campus pin>"
   And I select "<Requester Name>" from the requester name dropdown
   And I click next button
   And I select language "<language>"
   And I select assignment type "<assignment type>"
   And I enter schedule "<date>" and "<time>"
   And I enter "<email>" email address
   And I enter confirmation date and time "<date>" and "<time>"
   And I click save and proceed to summary button
   And I handle duplicate job warning window
   And I click submit button
   Then the job created success message should appear
   And I search for created job request
   And I verify the job is listed in search results
   And The job id is added to the file

   Examples:
   | username           | password  | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | duration | email        |
   | LLAdmin@looped.in  | Octopus@6  | Management     |  33124     |  Automation Tester  |  ARABIC    |   Halfday         | short notice | 09:30 | 4 hours  | hh@bb.com.au |
   | LLAdmin@looped.in  | Octopus@6  | Management     |  33124     |  Automation Tester  |  ARABIC    |  Halfday          | long notice  | 09:30 | 4 hours  | hh@bb.com.au |
  
  
   @CreateJobRequest @ManualReason
   Scenario Outline: Create Booking with manual allocation reason
   When I login with "<username>" and "<password>"
   And I click Interpreting header link
   And I select "<dropdownfilter>" from the filter dropdown
   And I click on new job request button
   And I enter campus pin "<campus pin>"
   And I select "<Requester Name>" from the requester name dropdown
   And I click next button
   And I select language "<language>"
   And I select assignment type "<assignment type>"
   And I enter schedule "<date>" and "<time>"
   And I click on manual reason checkbox
   And I enter manual reason "<manual reason>"
   And I enter "<email>" email address
   And I enter confirmation date and time "<date>" and "<time>"
   And I click save and proceed to summary button
   And I handle duplicate job warning window
   And I click submit button
   Then the job created success message should appear
   And The job id is added to the file

   Examples:
   | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | duration | email        | manual reason      |
   | LLAdmin@looped.in  | Octopus@6 | Management     |  33124     |  Automation Tester  |  ARABIC    |      Halfday      | long notice  | 09:30 | 4 hours  | hh@bb.com.au | manual reason text |
  
   @CreateJobRequest @GenderPreference @GenderMust
   Scenario Outline: Create Booking with gender preference
   When I login with "<username>" and "<password>"
   And I click Interpreting header link
   And I select "<dropdownfilter>" from the filter dropdown
   And I click on new job request button
   And I enter campus pin "<campus pin>"
   And I select "<Requester Name>" from the requester name dropdown
   And I click next button
   And I select language "<language>"
   And I select assignment type "<assignment type>"
   And I enter schedule "<date>" and "<time>"
   And I click gender preference must checkbox
   And I select gender "<gender preference>"
   And I enter "<email>" email address
   And I enter confirmation date and time "<date>" and "<time>"
   And I click save and proceed to summary button
   And I handle duplicate job warning window
   And I click submit button
   Then the job created success message should appear
   And The job id is added to the file

   Examples:
   | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | duration | email        | gender preference  |
   | LLAdmin@looped.in  | Octopus@6 | Management     |  33124     |  Automation Tester  |  ARABIC    |  Halfday          | short notice | 09:30 | 4 hours  | hh@bb.com.au | Female             |
  
   @CreateJobRequest @PreferredInterpreters @InterpreterMust
   Scenario Outline: Create Booking with preferred interpreters
   When I login with "<username>" and "<password>"
   And I click Interpreting header link
   And I select "<dropdownfilter>" from the filter dropdown
   And I click on new job request button
   And I enter campus pin "<campus pin>"
   And I select "<Requester Name>" from the requester name dropdown
   And I click next button
   And I select language "<language>"
   And I select assignment type "<assignment type>"
   And I enter schedule "<date>" and "<time>"
   And I click add preferred interpreter button
   And I select "<interpreter count>" interpreters from the list
   And I click add interpreters button
   And I enter "<email>" email address
   And I enter confirmation date and time "<date>" and "<time>"
   And I click save and proceed to summary button
   And I handle duplicate job warning window
   And I click submit button
   Then the job created success message should appear
   And The job id is added to the file

   Examples:
   | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | duration | email        | interpreter count  |
   | LLAdmin@looped.in  | Octopus@6 | Management     |  33124     |  Automation Tester  |  ARABIC    |      Halfday      | long notice  | 09:30 | 4 hours  | hh@bb.com.au | 3                  |
  

  @CreateJobRequest @AncestryPreference @AncestryMust
   Scenario Outline: Create Booking with ancestry preference must
   When I login with "<username>" and "<password>"
   And I click Interpreting header link
   And I select "<dropdownfilter>" from the filter dropdown
   And I click on new job request button
   And I enter campus pin "<campus pin>"
   And I select "<Requester Name>" from the requester name dropdown
   And I click next button
   And I select language "<language>"
   And I select assignment type "<assignment type>"
   And I enter schedule "<date>" and "<time>"
   And I click ancestry preference must checkbox
   And I select ancestry "<ancestry preference>"
   And I enter "<email>" email address
   And I enter confirmation date and time "<date>" and "<time>"
   And I click save and proceed to summary button
   And I handle duplicate job warning window
   And I click submit button
   Then the job created success message should appear
   And The job id is added to the file

   Examples:
   | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | duration | email        | ancestry preference  |
   | LLAdmin@looped.in  | Octopus@6 | Management     |  33124     |  Automation Tester  |  ARABIC    |   Halfday         | long notice  | 09:30 | 4 hours  | hh@bb.com.au | Austrian             |
  
  @CreateJobRequest @ReligionPreference @ReligionMust
   Scenario Outline: Create Booking with religion must preference
   When I login with "<username>" and "<password>"
   And I click Interpreting header link
   And I select "<dropdownfilter>" from the filter dropdown
   And I click on new job request button
   And I enter campus pin "<campus pin>"
   And I select "<Requester Name>" from the requester name dropdown
   And I click next button
   And I select language "<language>"
   And I select assignment type "<assignment type>"
   And I enter schedule "<date>" and "<time>"
   And I click religion preference must checkbox
   And I select religion "<religion preference>"
   And I enter "<email>" email address
   And I enter confirmation date and time "<date>" and "<time>"
   And I click save and proceed to summary button
   And I handle duplicate job warning window
   And I click submit button
   Then the job created success message should appear
   And The job id is added to the file


   Examples:
   | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | duration | email        | religion preference  |
   | LLAdmin@looped.in  | Octopus@6 | Management     |  33124     |  Automation Tester  |  ARABIC    |     Halfday       | short notice | 09:30 | 4 hours  | hh@bb.com.au | Christian            |
  
  @CreateJobRequest @DuplicateJob
  Scenario Outline: Create a job request as a duplicate of another job
   When I login with "<username>" and "<password>"
   And I click Interpreting header link
   And I create a new job request with minimal fields "<job notice length>"
   And I click Interpreting header link
   And I search for created job request
   And I select "<job status>" job status
   And I click on job id from interpreting job search results
   And I switch to the job allocation window
   And I click on Duplicate button
   And I enter schedule "<date>" and "<time>"
   And I click save and proceed to summary button
   And I handle duplicate job warning window
   And I click submit button
   Then the job created success message should appear
   And The job id is added to the file


   Examples:
   | job notice length | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | duration | email        | job status  |
   |  long notice      | LLAdmin@looped.in  | Octopus@6 | Management     |  33124     |  Automation Tester  |  ARABIC    |     Halfday       | long notice  | 09:30 | 4 hours  | hh@bb.com.au | Unallocated |
  
  @CreateJobRequest @BulkUpload
  Scenario Outline: Upload bulk jobs through excel file
   When I login with "<username>" and "<password>"
   And I click Interpreting header link
   And I select "<dropdownfilter>" from the filter dropdown
   And I click on bulk upload button
   And I upload bulk booking file
   And I enter campus pin "<campus pin>"
   And I select "<Requester Name>" from the requester name dropdown
   And I click on next link
   And Job upload confirmation message is displayed
   And I enter assignment type "<assignment type>" for the bulk jobs
   And I click on next link
   And I click on confirm link
   Then Bookings created confirmation message is displayed

   Examples:
   | job notice length | username           | password | dropdownfilter | campus pin | Requester Name      | language   | assignment type           | date         | time  | duration | email        | job status  |
   | long notice       | LLAdmin@looped.in  | Octopus@6 | Management     |  33124     |  Automation Tester  |  ARABIC    |  Zero min ongoing         | short notice | 09:30 | 4 hours  | hh@bb.com.au | Unallocated |
  

  @CreateJobRequest @CBO1
   Scenario Outline: Create Booking with minimal required field values
   When I login with "<username>" and "<password>"
   And I handle the message for interpreters dialog
   And I click Interpreting header link
   And I click on new job request button
   And I select campus pin "<campus pin>"
   And I select language "<language>"
   And I enter schedule "<date>" and "<time>"
   And I select assignment type "<assignment type>"
   And I enter "<email>" email address
   And I enter confirmation date and time "<date>" and "<time>"
   And I click next button
   And I handle duplicate job warning window
   And I click submit and summary button
   Then the job created success message should appear
   And I click Interpreting header link
   And I search for created job request
   And I verify the job is listed in search results
   And The job id is added to the file

   Examples:
   | username      | password  | dropdownfilter | campus pin                        | Requester Name      | language   | assignment type   | date         | time  | duration | email        |
   | divya@bc.com  | Test1     | Management     |  33124 - BOLTON CLARKE - DH RDNS  |  Automation Tester  |  ARABIC    |   Halfday         | short notice | 09:30 | 4 hours  | hh@bb.com.au |
  