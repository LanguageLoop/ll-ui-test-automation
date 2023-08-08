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
  Scenario Outline: Create Booking with minimal required field values1
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
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
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
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the block "<billTo>" sadly disappears from the list…

    Examples:
      | username          | password  | campus id | campus PinBillToCode | contractor | service     | from      | to      | level        | billTo          | severityLevel | jobTypes      | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | status       |
      | LLAdmin@looped.in | Octopus@6 | 33124     |  33124 - DH006       | Automation | Interpreter | zz-Zenq2  | ENGLISH | Professional | DH006 - DH RDNS | 1             | Pre-booked TI | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | Not eligible |

    #LL-682 Covid vax exemption allocation logic Scenario 1b: The contractor is not Blocked from a Job Type
    #GIVEN a User has requested Prebooked job > AND the Job Campus belongs to a certain BillTo > AND they are not blocked from a Job Type
    #AND a contractor is blocked for that BillTo > THEN the blocked contractor is eligible for that Job
  @ContractorBlock @ContractorNotBlockedJobType
  Scenario Outline: The contractor is not Blocked from a Job Type
    When I login with "<username>" and "<password>"
    And I click account management link
    And I search for campus "<campus id>"
    And I click the first campus link from search results
    And the Job Campus belongs to a certain BillTo "<campus PinBillToCode>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
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
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the block "<billTo>" sadly disappears from the list…

    Examples:
      | username          | password  | campus id | campus PinBillToCode | contractor | service     | from      | to      | level        | billTo          | severityLevel | jobTypes      | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | status            |
      | LLAdmin@looped.in | Octopus@6 | 33124     |  33124 - DH006       | Automation | Interpreter | zz-Zenq2  | ENGLISH | Professional | DH006 - DH RDNS | 1             | On Site       | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | Auto Notification |

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
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
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
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the block "<billTo>" sadly disappears from the list…

    Examples:
      | username          | password  | campus id | campus PinBillToCode | contractor | service     | from      | to      | level        | billTo                                   | severityLevel | jobTypes      | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | status            |
      | LLAdmin@looped.in | Octopus@6 | 33124     |  33124 - DH006       | Automation | Interpreter | zz-Zenq2  | ENGLISH | Professional | UserPay1 - Catholic Education - User Pay | 1             | On Site       | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | Auto Notification |

    #LL-618 Scenario 1: Standard Job
  @MetroNotSelectedStandardOutside25 @LL-618
  Scenario Outline: Interpreters who live outside the 25kms are not eligible for standard job when Accept Metro Service is not selected
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And I select "<Requester Name>" from the requester name dropdown
    And I click next button
    And I select language "<language>"
    And I select assignment type "<assignment type>"
    And I enter travel approved "<travel approved>"
    And I enter schedule "<date>" and "<time>"
    And I enter "<email>" email address
    And I click save and proceed to summary button
    And I handle duplicate job warning window
    And I click submit button
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And Accept Metro Service is not selected
    Then interpreters "<contractor>" who live outside the "<distance in KM>" KM are not eligible for the job
    And the booking is cancelled on behalf of "<Requester Name>"

    Examples:
      | username          | password  | dropdownfilter | campus pin | Requester Name    | language | assignment type            | travel approved | date            | time  | email        | contractor  | distance in KM   |
      | LLAdmin@looped.in | Octopus@6 | Management     | 51907      | Sumi Watson       | ARABIC   | QLD-GOV01-Interview-Onsite | Test            | fortnight after | 09:30 | hh@bb.com.au | Rola MIZIAN | 25               |

     #LL-618 Scenario 2: Short Notice Job (48 hours notice)
  @MetroNotSelectedShortNoticeOutside25 @LL-618
  Scenario Outline: Interpreters who live outside the 25kms are not eligible for Short Notice Job when Accept Metro Service is not selected
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And I select "<Requester Name>" from the requester name dropdown
    And I click next button
    And I select language "<language>"
    And I select assignment type "<assignment type>"
    And I enter travel approved "<travel approved>"
    And I enter schedule "<date>" and "<time>"
    And I enter "<email>" email address
    And I click save and proceed to summary button
    And I handle duplicate job warning window
    And I click submit button
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And Accept Metro Service is not selected
    Then interpreters "<contractor>" who live outside the "<distance in KM>" KM are not eligible for the job
    And the booking is cancelled on behalf of "<Requester Name>"

    Examples:
      | username          | password  | dropdownfilter | campus pin | Requester Name    | language | assignment type            | travel approved | date            | time  | email        | contractor  | distance in KM   |
      | LLAdmin@looped.in | Octopus@6 | Management     | 51907      | Sumi Watson       | ARABIC   | QLD-GOV01-Interview-Onsite | Test            | short notice    | 09:30 | hh@bb.com.au | Rola MIZIAN | 25               |

    #LL-618 Scenario 3a: Other Campus, default distance is applied (standard) [Regression Test]
  @MetroNotSelectedStandardOtherCampus @LL-618
  Scenario Outline: Interpreters who live between 25kms and 45kms are eligible for standard job when Accept Metro Service is not selected
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
    And I click save and proceed to summary button
    And I handle duplicate job warning window
    And I click submit button
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And Accept Metro Service is not selected
    Then interpreters "<contractor>" who live between "<distance from in KM>" KM and "<distance to in KM>" KM are eligible for the job "<job contractor status>"
    And the booking is cancelled on behalf of "<Requester Name>"

    Examples:
      | username          | password  | dropdownfilter | campus pin | Requester Name    | language | assignment type | date            | time  | email        | contractor    | distance from in KM | distance to in KM | job contractor status |
      | LLAdmin@looped.in | Octopus@6 | Management     | 33124      | Automation Tester | ARABIC   | Halfday         | fortnight after | 09:30 | hh@bb.com.au | Alaa ELHASSAN | 25                  | 45                | Auto Notification     |

    #LL-618 Scenario 3b: Other Campus, default distance is applied (short notice) [Regression Test]
  @MetroNotSelectedShortNoticeOtherCampus @LL-618
  Scenario Outline: Interpreters who live between 25kms and 45kms are eligible for short notice job when Accept Metro Service is not selected
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
    And I click save and proceed to summary button
    And I handle duplicate job warning window
    And I click submit button
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And Accept Metro Service is not selected
    Then interpreters "<contractor>" who live between "<distance from in KM>" KM and "<distance to in KM>" KM are eligible for the job "<job contractor status>"
    And the booking is cancelled on behalf of "<Requester Name>"

    Examples:
      | username          | password  | dropdownfilter | campus pin | Requester Name    | language | assignment type | date            | time  | email        | contractor    | distance from in KM | distance to in KM | job contractor status |
      | LLAdmin@looped.in | Octopus@6 | Management     | 33124      | Automation Tester | ARABIC   | Halfday         | short notice    | 09:30 | hh@bb.com.au | Alaa ELHASSAN | 25                  | 45                | Auto Notification     |

    #LL-618 Scenario 3c: Other Campus, default distance is applied (standard) [Regression Test]
  @MetroNotSelectedStandardWithin25 @LL-618
  Scenario Outline: Interpreters who live within the 25kms are eligible for standard job when Accept Metro Service is not selected
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And I select "<Requester Name>" from the requester name dropdown
    And I click next button
    And I select language "<language>"
    And I select assignment type "<assignment type>"
    And I enter travel approved "<travel approved>"
    And I enter schedule "<date>" and "<time>"
    And I select NAATI type "<NAATI>"
    And I enter "<email>" email address
    And I click save and proceed to summary button
    And I handle duplicate job warning window
    And I click submit button
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And Accept Metro Service is not selected
    Then interpreters "<contractor>" who live within the "<distance in KM>" KM are eligible for the job "<job contractor status>"
    And the booking is cancelled on behalf of "<Requester Name>"

    Examples:
      | username          | password  | dropdownfilter | campus pin | Requester Name | language | assignment type            | travel approved | date            | time  | email        | contractor         | distance in KM | job contractor status | NAATI          |
      | LLAdmin@looped.in | Octopus@6 | Management     | 51907      | Sumi Watson    | ARABIC   | QLD-GOV01-Interview-Onsite | Test            | fortnight after | 09:30 | hh@bb.com.au | Rawaa ABDUL JABBAR | 25             | Auto Notification     | Non-Accredited |

    #LL-618 Scenario 3d: Other Campus, default distance is applied (short notice) [Regression Test]
  @MetroSelectedShortNoticeWithin100 @LL-618
  Scenario Outline: Interpreters who live within the 25kms are eligible for short notice job when Accept Metro Service is not selected
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And I select "<Requester Name>" from the requester name dropdown
    And I click next button
    And I select language "<language>"
    And I select assignment type "<assignment type>"
    And I enter travel approved "<travel approved>"
    And I enter schedule "<date>" and "<time>"
    And I select NAATI type "<NAATI>"
    And I enter "<email>" email address
    And I click save and proceed to summary button
    And I handle duplicate job warning window
    And I click submit button
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And Accept Metro Service is selected
    And search for contractor "<contractor>" in Job Allocation
    Then interpreters "<contractor>" who live within the "<distance in KM>" KM are eligible for the job "<job contractor status>"
    And the booking is cancelled on behalf of "<Requester Name>"

    Examples:
      | username          | password  | dropdownfilter | campus pin | Requester Name    | language | assignment type            | travel approved | date            | time  | email        | contractor                | distance in KM   | job contractor status | NAATI          |
      | LLAdmin@looped.in | Octopus@6 | Management     | 51907      | Sumi Watson       | ARABIC   | QLD-GOV01-Interview-Onsite | Test            | short notice    | 09:30 | hh@bb.com.au | Sara Hassan Shakir HASSAN | 100              | Auto Notification     | Non-Accredited |

    #LL-682 Covid vax exemption allocation logic Scenario 3: User creates a Prebooked Job and then user adds a block for PreBooked job type in the contractor page
  #GIVEN a User has requested Prebooked job > #AND the Job Campus belongs to a certain BillTo
  #AND a contractor has no block created for that BillTo > #AND I see the Prebooked job created has the above contractor eligible
  #AND I add a block for Prebooked Job type for the above contractor for the Campus Bill To the job belongs to
  #AND I refresh/reopen the above job created > #THEN the contractor above will not be eligible for the Prebooked job
  @ContractorBlock @ContractorBlockedAfterJobCreated @LL-682
  Scenario Outline: User creates a Prebooked Job and then user adds a block for PreBooked job type in the contractor page
    When I login with "<username>" and "<password>"
    And I click account management link
    And I search for campus "<campus id>"
    And I click the first campus link from search results
    And the Job Campus belongs to a certain BillTo "<campus PinBillToCode>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
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
    And the contractor above "<contractor>" status will be "<eligible status>" for the Job
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Add a Block
    And the Contractor Blocking modal popup pops-up
    And the admin clicks on the Bill To tab
    And the inputs "<billTo>", "<severityLevel>" are valid in Bill-To tab
    And at least 1 Job Type "<jobTypes>" is selected
    And the block is saved
    And the Contractor Blocking popup closes
    And the new block rule is displayed on the contractor’s profile
    And I click Interpreting header link
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And user clicks on Reset auto notifications link and refresh the page
    Then the contractor "<contractor>" above will not be eligible for the Prebooked job
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the block "<billTo>" sadly disappears from the list…

    Examples:
      | username          | password  | campus id | campus PinBillToCode | contractor | service     | from      | to      | level        | billTo          | severityLevel | jobTypes      | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | eligible status   |
      | LLAdmin@looped.in | Octopus@6 | 33124     |  33124 - DH006       | Automation | Interpreter | zz-Zenq2  | ENGLISH | Professional | DH006 - DH RDNS | 1             | Pre-booked TI | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | Auto Notification |

    #LL-682 Covid vax exemption allocation logic Scenario 4: In contractor page, user edits the existing block that has prebooked type selected and deselects a PreBooked job type and verify the contractor eligibility for Prebooked job
  #GIVEN a contractor has block created for that Campus BillTo for Prebooked job type
  #WHEN User has requested Prebooked job > #AND I see that the above contractor is not eligible for the above created prebooked job type
  #AND in contractor, I edit the block and deselect the prebooked job type > #AND I refresh/reopen the above job created
  #THEN the contractor above will be eligible for the Prebooked job
  @ContractorBlock @ContractorUnblockedByEditing @LL-682
  Scenario Outline: In contractor page, user edits the existing block that has prebooked type selected and deselects a PreBooked job type and verify the contractor eligibility for Prebooked job
    When I login with "<username>" and "<password>"
    And I click account management link
    And I search for campus "<campus id>"
    And I click the first campus link from search results
    And the Job Campus belongs to a certain BillTo "<campus PinBillToCode>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
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
    And the blocked contractor "<contractor>" status is "<not eligible status>" for that Job
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on the name "<billTo>" of a block
    And it should show a list of Job Types, each with a checkbox
    And do not select any Job Type
    And at least 1 Job Type "<jobTypes2>" is selected
    And I click on save on blocking popup
    And I click Interpreting header link
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And user clicks on Reset auto notifications link and refresh the page
    Then the contractor above "<contractor>" status will be "<eligible status>" for the Job
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the block "<billTo>" sadly disappears from the list…

    Examples:
      | username          | password  | campus id | campus PinBillToCode | contractor | service     | from      | to      | level        | billTo          | severityLevel | jobTypes      | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | not eligible status | jobTypes2 | eligible status   |
      | LLAdmin@looped.in | Octopus@6 | 33124     |  33124 - DH006       | Automation | Interpreter | zz-Zenq2  | ENGLISH | Professional | DH006 - DH RDNS | 1             | Pre-booked TI | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | Not eligible        | On Site   | Auto Notification |

    #LL-682 Covid vax exemption allocation logic Scenario 5: In contractor page, user removes the existing block that has prebooked type selected and verify the contractor eligibility for Prebooked job
  #GIVEN a contractor has block created for that Campus BillTo for Prebooked job type > #WHEN User has requested Prebooked job
  #AND I see that the above contractor is not eligible for the above created prebooked job type
  #AND in contractor page, I remove the block that has prebooked job type
  #AND I refresh/reopen the above job created > #THEN the contractor above will be eligible for the Prebooked job
  @ContractorBlock @ContractorUnblockedByRemoving @LL-682
  Scenario Outline: In contractor page, user removes the existing block that has prebooked type selected and verify the contractor eligibility for Prebooked job
    When I login with "<username>" and "<password>"
    And I click account management link
    And I search for campus "<campus id>"
    And I click the first campus link from search results
    And the Job Campus belongs to a certain BillTo "<campus PinBillToCode>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
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
    And the blocked contractor "<contractor>" status is "<not eligible status>" for that Job
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the block "<billTo>" sadly disappears from the list…
    And I click Interpreting header link
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And user clicks on Reset auto notifications link and refresh the page
    Then the contractor above "<contractor>" status will be "<eligible status>" for the Job

    Examples:
      | username          | password  | campus id | campus PinBillToCode | contractor | service     | from      | to      | level        | billTo          | severityLevel | jobTypes      | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | not eligible status | eligible status   |
      | LLAdmin@looped.in | Octopus@6 | 33124     |  33124 - DH006       | Automation | Interpreter | zz-Zenq2  | ENGLISH | Professional | DH006 - DH RDNS | 1             | Pre-booked TI | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | Not eligible        | Auto Notification |

    #LL-682 Covid vax exemption allocation logic Scenario 6: In contractor page, user makes the existing block that has prebooked type as expired and verify the contractor eligibility for Prebooked job
  #GIVEN a contractor has block created for that Campus BillTo for Prebooked job type > #WHEN User has requested Prebooked job
  #AND I see that the above contractor is not eligible for the above created prebooked job type
  #AND in contractor page, I select the block that has prebooked job type > #AND I enter the date as past date in Date Finished field and save the block
  #AND I refresh/reopen the above job created > #THEN the contractor above will be eligible for the Prebooked job
  @ContractorBlock @ContractorUnblockedByExpiring @LL-682
  Scenario Outline: In contractor page, user makes the existing block that has prebooked type as expired and verify the contractor eligibility for Prebooked job
    When I login with "<username>" and "<password>"
    And I click account management link
    And I search for campus "<campus id>"
    And I click the first campus link from search results
    And the Job Campus belongs to a certain BillTo "<campus PinBillToCode>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
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
    And the blocked contractor "<contractor>" status is "<not eligible status>" for that Job
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on the name "<billTo>" of a block
    And the expiry date "<startDate>", "<endDate>" is prior to the current date
    And the Contractor Blocking popup closes
    And the block "<billTo>" sadly disappears from the list…
    And I click Interpreting header link
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And user clicks on Reset auto notifications link and refresh the page
    Then the contractor above "<contractor>" status will be "<eligible status>" for the Job
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And I click on Show Expired toggle
    And the admin clicks on Remove on a block

    Examples:
      | username          | password  | campus id | campus PinBillToCode | contractor | service     | from      | to      | level        | billTo          | severityLevel | jobTypes      | startDate  | endDate    | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | not eligible status | eligible status   |
      | LLAdmin@looped.in | Octopus@6 | 33124     |  33124 - DH006       | Automation | Interpreter | zz-Zenq2  | ENGLISH | Professional | DH006 - DH RDNS | 1             | Pre-booked TI | 05-02-2023 | 06-02-2023 | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | Not eligible        | Auto Notification |

    #LL-716 Expand the label on the client new job request screen
    # In the ‘Instructions for Interpreters’, the user sees the following text as Label
    #Instructions for Interpreter (Please DO NOT include interpreter’s name or personal details)
  @CreateJobRequest @InstructionsForInterpreterLabel @LL-716
  Scenario Outline: User sees the Instructions for Interpreters text as Label
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And I select "<Requester Name>" from the requester name dropdown
    And I click next button
    Then in the ‘Instructions for Interpreters’, the user sees the text "<Instructions for Interpreters label>" as Label

    Examples:
      | username       | password | dropdownfilter | campus pin | Requester Name    | Instructions for Interpreters label                                                         |
      | zenq@cso10.com | Test1    | Management     | 33124      | Automation Tester | Instructions for Interpreter (Please DO NOT include interpreter’s name or personal details) |

    #LL-731 Scenario 1: User creates a Job by adding the same details as in the above mentioned issue and allocates the interpreter to job
  @CreateAndAllocateJobToHnin28642 @LL-731
  Scenario Outline: User creates a Job and allocates the interpreter Hnin HMONE to the job for campus 28642
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
    And I click save and proceed to summary button
    And I handle duplicate job warning window
    And I click submit button
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<new status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<new status>"
    Then I confirm the job status "<new status>"

    Examples:
      | username          | password  | dropdownfilter | campus pin | Requester Name | language  | assignment type        | date            | time  | email        | contractor | original status                 | new status |
      | LLAdmin@looped.in | Octopus@6 | Management     | 28642      | Karen          | BURMESE   | FH01-Interview/Meeting | short notice    | 09:30 | hh@bb.com.au | Hnin HMONE | Auto Notification,- No status - | Allocated  |

    #LL-731 Scenario 2: User duplicates the a Job and allocates the interpreter to job
  @DuplicateAndAllocateJobToHnin28642 @LL-731
  Scenario Outline: User duplicates a Job and allocates the interpreter Hnin HMONE to the job for campus 28642
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
    And I click save and proceed to summary button
    And I handle duplicate job warning window
    And I click submit button
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<new status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<new status>"
    And I confirm the job status "<new status>"
    And I click on Duplicate button
    And I enter schedule "<date>" and "<time>"
    And I click save and proceed to summary button
    And I handle duplicate job warning window
    And I click submit button
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And I change the contractor "<contractor>" job status from "<original status>" to "<new status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<new status>"
    Then I confirm the job status "<new status>"

    Examples:
      | username          | password  | dropdownfilter | campus pin | Requester Name | language | assignment type        | date         | time  | email        | contractor | original status                 | new status |
      | LLAdmin@looped.in | Octopus@6 | Management     | 28642      | Karen          | BURMESE  | FH01-Interview/Meeting | short notice | 09:30 | hh@bb.com.au | Hnin HMONE | Auto Notification,- No status - | Allocated  |

    #LL-723 Scenario 1: Time picker closes after user selects time from time picker
  @TimePickerCloseAfterSelectingTime @LL-723
  Scenario Outline: Time picker closes after user selects time from time picker
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And I click on new job request button
    And I select campus pin "<campusPin>" from Campus PIN dropdown
    And I select language "<language>"
    And I enter short notice schedule date
    And they have selected a Time "<time>" from the time picker
    Then the Time "<time>" will be selected and the time picker will close

    Examples:
      | username       | password | campusPin               | language | time  |
      | zenq@cbo11.com | Test1    | 29449 - Contoso Pty LTD | zz-Zenq2 | 01:00 |

    #LL-723 Scenario 2: User changes the selected time and then set the Time again
  @ChangeSelectedTimeAndSetTime @LL-723
  Scenario Outline: Time picker closes after user selects time from time picker
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And I click on new job request button
    And I select campus pin "<campusPin>" from Campus PIN dropdown
    And I select language "<language>"
    And I enter long notice schedule date
    And they have selected a Time "<time>" from the time picker
    And the Time "<time>" will be selected and the time picker will close
    And I enter short notice schedule date
    And they have selected a Time "<new time>" from the time picker
    Then the Time "<new time>" will be selected and the time picker will close

    Examples:
      | username       | password | campusPin               | language | time  | new time |
      | zenq@cbo11.com | Test1    | 29449 - Contoso Pty LTD | zz-Zenq2 | 00:45 | 01:00    |

    #LL-730 Scenario 1: Find Contractor popup appears
  @LL-730 @FindContractorPopup
  Scenario Outline: Find Contractor popup appears
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And I click on new job request button
    And I select campus pin "<campusPin>" from Campus PIN dropdown
    And I select language "<language>"
    And I enter long notice schedule date
    And they have selected a Time "<time>" from the time picker
    And I select assignment type "<assignment type>"
    And I click add preferred interpreter button
    Then the Find Contractor popup appears
    And the names of the available contractors are still hidden

    Examples:
      | username          | password | campusPin                       | language | time  | assignment type |
      | atester@ll.com.au | Test1    | 33124 - BOLTON CLARKE - DH RDNS | ARABIC   | 10:00 | DH05-HalfDay    |