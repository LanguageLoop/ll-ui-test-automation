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
      | username          | password  | dropdownfilter | campus pin | Requester Name    | language | assignment type | date         | time  | duration | email        |
      | LLAdmin@looped.in | Octopus@6 | Management     | 33124      | Automation Tester | ARABIC   | Halfday         | short notice | 09:30 | 4 hours  | hh@bb.com.au |
      | LLAdmin@looped.in | Octopus@6 | Management     | 33124      | Automation Tester | ARABIC   | Halfday         | long notice  | 09:30 | 4 hours  | hh@bb.com.au |


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
      | username          | password  | dropdownfilter | campus pin | Requester Name    | language | assignment type | date        | time  | duration | email        | manual reason      |
      | LLAdmin@looped.in | Octopus@6 | Management     | 33124      | Automation Tester | ARABIC   | Halfday         | long notice | 09:30 | 4 hours  | hh@bb.com.au | manual reason text |

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
      | username          | password  | dropdownfilter | campus pin | Requester Name    | language | assignment type | date         | time  | duration | email        | gender preference |
      | LLAdmin@looped.in | Octopus@6 | Management     | 33124      | Automation Tester | ARABIC   | Halfday         | short notice | 09:30 | 4 hours  | hh@bb.com.au | Female            |

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
      | username          | password  | dropdownfilter | campus pin | Requester Name    | language | assignment type | date        | time  | duration | email        | interpreter count |
      | LLAdmin@looped.in | Octopus@6 | Management     | 33124      | Automation Tester | ARABIC   | Halfday         | long notice | 09:30 | 4 hours  | hh@bb.com.au | 3                 |


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
      | username          | password  | dropdownfilter | campus pin | Requester Name    | language | assignment type | date        | time  | duration | email        | ancestry preference |
      | LLAdmin@looped.in | Octopus@6 | Management     | 33124      | Automation Tester | ARABIC   | Halfday         | long notice | 09:30 | 4 hours  | hh@bb.com.au | Austrian            |

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
      | username          | password  | dropdownfilter | campus pin | Requester Name    | language | assignment type | date         | time  | duration | email        | religion preference |
      | LLAdmin@looped.in | Octopus@6 | Management     | 33124      | Automation Tester | ARABIC   | Halfday         | short notice | 09:30 | 4 hours  | hh@bb.com.au | Christian           |

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
      | job notice length | username          | password  | dropdownfilter | campus pin | Requester Name    | language | assignment type | date        | time  | duration | email        | job status  |
      | long notice       | LLAdmin@looped.in | Octopus@6 | Management     | 33124      | Automation Tester | ARABIC   | Halfday         | long notice | 09:30 | 4 hours  | hh@bb.com.au | Unallocated |

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
      | job notice length | username          | password  | dropdownfilter | campus pin | Requester Name    | language | assignment type  | date         | time  | duration | email        | job status  |
      | long notice       | LLAdmin@looped.in | Octopus@6 | Management     | 33124      | Automation Tester | ARABIC   | Zero min ongoing | short notice | 09:30 | 4 hours  | hh@bb.com.au | Unallocated |


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
      | username     | password | dropdownfilter | campus pin                      | Requester Name    | language | assignment type | date         | time  | duration | email        |
      | divya@bc.com | Test1    | Management     | 33124 - BOLTON CLARKE - DH RDNS | Automation Tester | ARABIC   | Halfday         | short notice | 09:30 | 4 hours  | hh@bb.com.au |

  #LL-612 Scenario 2 - Admin creates CBO from New Booking
  @CreateCBOFromNewBooking
  Scenario Outline: Admin creates CBO from New Booking
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And I select "<dropdown filter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And Click the Plus New Requester button
    And Clicks Add New User
    And Fill out all the required details "<firstname>", email, "<landline number>"
    And They click the Save button
    Then The user is created in job request
    And I click Admin header link
    And The user "<firstname>" will be displayed in the Admin > Accounts section
    And The Created Date is captured in the form of DD slash MM slash YYYY HH:MM:SS

    Examples:
      | username          | password  | dropdown filter | campus pin | firstname     | landline number |
      | LLAdmin@looped.in | Octopus@6 | Management      | 33124      | AutomationCBO | 0212345678      |

  ##LL-716 Scenario 1 - As CSO User - Instructions for Interpreter
  @InstructionsInterpreterText
  Scenario Outline: CSO user can see the Instructions for Interpreter
    When I login with "<username cso>" and "<password cso>"
    And I click Interpreting header link
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And I select "<Requester Name>" from the requester name dropdown
    And I click next button
    Then I see the Interpreter text "<Interpreter text>"

    Examples:
      | username cso   | password cso | campus pin | Requester Name    | Interpreter text                                                                            |
      | zenq@cso10.com | Test1        | 33124      | Automation Tester | Instructions for Interpreter (Please DO NOT include interpreter’s name or personal details) |


    #LL-682 Covid vax exemption allocation logic Scenario 1a: The contractor is blocked from a Bill To
    #GIVEN a User has requested Prebooked job > AND the Job Campus belongs to a certain BillTo > AND the Job Type is one of the blocked Job Types >
    #AND a contractor is blocked for that BillTo > THEN the blocked contractor is not eligible for that Job
  @ContractorBlock @ContractorBlockedBillTo
  Scenario Outline: The contractor is blocked from a Bill To
    When I login with "<username>" and "<password>"
    And I click account management link
    And I search for campus "<campus id>"
    And I click the first campus link from search results
    And the Job Campus belongs to a certain BillTo "<campus PinBillToCode>"
    And I click contractor engagement link
    And I search and open contractor "<contractor>"
    And the admin clicks on Add a Block
    And the Contractor Blocking modal popup pops-up
    And the admin clicks on the Bill To tab
    And the inputs "<billTo>", "<severityLevel>" are valid in Bill-To tab
    And at least 1 Job Type "<jobTypes>" is selected
    And the block is saved
    And the Contractor Blocking popup closes
    And the new block rule is displayed on the contractor’s profile
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And click on Job Type option "<request job type>" in Job Requester Details
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
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And user clicks on Reset auto notifications link and refresh the page
    And search for contractor "<contractor>" in Job Allocation
    Then the blocked contractor "<contractor>" status is "<status>" for that Job
    And I click contractor engagement link
    And I search and open contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the block "<billTo>" sadly disappears from the list…

    Examples:
      | username          | password  | campus id | campus PinBillToCode | contractor | billTo          | severityLevel | jobTypes      | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | status       |
      | LLAdmin@looped.in | Octopus@6 | 33124     |  33124 - DH006       | Automation | DH006 - DH RDNS | 1             | Pre-booked TI | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | Not eligible |

    #LL-682 Covid vax exemption allocation logic Scenario 1b: The contractor is not Blocked from a Job Type
    #GIVEN a User has requested Prebooked job > AND the Job Campus belongs to a certain BillTo > AND they are not blocked from a Job Type
    #AND a contractor is blocked for that BillTo > THEN the blocked contractor is eligible for that Job
  @ContractorBlock @ContractorNotBlockedJobType
  Scenario Outline: The contractor is blocked from a Bill To
    When I login with "<username>" and "<password>"
    And I click account management link
    And I search for campus "<campus id>"
    And I click the first campus link from search results
    And the Job Campus belongs to a certain BillTo "<campus PinBillToCode>"
    And I click contractor engagement link
    And I search and open contractor "<contractor>"
    And the admin clicks on Add a Block
    And the Contractor Blocking modal popup pops-up
    And the admin clicks on the Bill To tab
    And the inputs "<billTo>", "<severityLevel>" are valid in Bill-To tab
    And at least 1 Job Type "<jobTypes>" is selected
    And the block is saved
    And the Contractor Blocking popup closes
    And the new block rule is displayed on the contractor’s profile
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And click on Job Type option "<request job type>" in Job Requester Details
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
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And user clicks on Reset auto notifications link and refresh the page
    And search for contractor "<contractor>" in Job Allocation
    Then the blocked contractor "<contractor>" status is "<status>" for that Job
    And I click contractor engagement link
    And I search and open contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the block "<billTo>" sadly disappears from the list…

    Examples:
      | username          | password  | campus id | campus PinBillToCode | contractor | billTo          | severityLevel | jobTypes      | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | status            |
      | LLAdmin@looped.in | Octopus@6 | 33124     |  33124 - DH006       | Automation | DH006 - DH RDNS | 1             | On Site       | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | Auto Notification |

    #LL-682 Covid vax exemption allocation logic Scenario 2: The contractor is not blocked
    #GIVEN a User has requested Prebooked job > AND the Job Campus belongs to a certain BillTo >
    #AND a contractor is not blocked for that BillTo > THEN the contractor is eligible for that Job
  @ContractorBlock @ContractorNotBlocked
  Scenario Outline: The contractor is not blocked
    When I login with "<username>" and "<password>"
    And I click account management link
    And I search for campus "<campus id>"
    And I click the first campus link from search results
    And the Job Campus belongs to a certain BillTo "<campus PinBillToCode>"
    And I click contractor engagement link
    And I search and open contractor "<contractor>"
    And the admin clicks on Add a Block
    And the Contractor Blocking modal popup pops-up
    And the admin clicks on the Bill To tab
    And the inputs "<billTo>", "<severityLevel>" are valid in Bill-To tab
    And at least 1 Job Type "<jobTypes>" is selected
    And the block is saved
    And the Contractor Blocking popup closes
    And the new block rule is displayed on the contractor’s profile
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And click on Job Type option "<request job type>" in Job Requester Details
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
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And user clicks on Reset auto notifications link and refresh the page
    And search for contractor "<contractor>" in Job Allocation
    Then the blocked contractor "<contractor>" status is "<status>" for that Job
    And I click contractor engagement link
    And I search and open contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the block "<billTo>" sadly disappears from the list…

    Examples:
      | username          | password  | campus id | campus PinBillToCode | contractor | billTo                                   | severityLevel | jobTypes      | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | status            |
      | LLAdmin@looped.in | Octopus@6 | 33124     |  33124 - DH006       | Automation | UserPay1 - Catholic Education - User Pay | 1             | On Site       | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | Auto Notification |