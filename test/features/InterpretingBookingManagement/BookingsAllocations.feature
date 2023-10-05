@BookingsAllocations
Feature: Bookings Allocations Features

  Background: Load Loopedin login page
    Given the looped in login page is opened


    #LL-636 Scenario 1: Campus PIN in URL
  @LL-636 @CampusPINInURL
  Scenario Outline: Campus PIN in URL
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And a user has accessed the Bookings "<allocations>" screen
    And the URL contains the CampusPIN parameter "<campusPIN>"
    Then the Bookings Allocations screen will display
    And a CampusPIN filter should be pre-filled with the given CampusPIN "<campusPIN>"
    And the rest of the form should display as if the user has filtered by Campus PIN "<campusName>"

    Examples:
      | username        | password  | allocations | campusPIN | campusName      |
      | zenq2@ll.com.au | Reset@312 | Allocations | 29449     | Contoso Pty LTD |

    #LL-636 Scenario 2: Contractor ID in URL
  @LL-636 @ContractorIDInURL
  Scenario Outline: Contractor ID in URL
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And a user has accessed the Bookings "<allocations>" screen
    And the URL contains the ContractorID parameter "<contractorID>"
    Then the Bookings Allocations screen will display
    And a ContractorID filter should be pre-filled with the given ContractorID "<contractorID>"
    And the rest of the form should display as if the user has filtered by ContractorID "<interpreterName>"

    Examples:
      | username        | password  | allocations | contractorID | interpreterName |
      | zenq2@ll.com.au | Reset@312 | Allocations | 6155         | Adel ODISH      |

    #LL-636 Scenario 3: Entering Inactive Campus pin in the URL
  @LL-636 @InactiveCampusPINInURL
  Scenario Outline: Entering Inactive Campus pin in the URL
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And a user has accessed the Bookings "<allocations>" screen
    And the URL contains the CampusPIN parameter "<campusPIN>"
    Then the Bookings Allocations screen will display
    And a CampusPIN filter should be pre-filled with the given CampusPIN "<campusPIN>"
    And the rest of the form should display as if the user has filtered by Campus PIN "<campusName>"

    Examples:
      | username        | password  | allocations | campusPIN | campusName                                       |
      | zenq2@ll.com.au | Reset@312 | Allocations | 31690     | Albury Wodonga Health - DH Community Health Test |

    #LL-636 Scenario 4: Entering Campus pin in the URL that does not exists
  @LL-636 @CampusPINInURLThatDoesNotExist
  Scenario Outline: Entering Campus pin in the URL that does not exists
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And a user has accessed the Bookings "<allocations>" screen
    And the URL contains the CampusPIN parameter "<campusPIN>"
    Then the Bookings Allocations screen will display
    And a CampusPIN filter should be pre-filled with the given CampusPIN "<campusPIN>"
    And the results should not be displayed as there are no jobs to show

    Examples:
      | username        | password  | allocations | campusPIN |
      | zenq2@ll.com.au | Reset@312 | Allocations | 29        |

    #LL-636 Scenario 5: Entering Contractor ID that is not Active in the URL
  @LL-636 @InActiveContractorIDInURL
  Scenario Outline: Entering Contractor ID that is not Active in the URL
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And a user has accessed the Bookings "<allocations>" screen
    And the URL contains the ContractorID parameter "<contractorID>"
    Then the Bookings Allocations screen will display
    And a ContractorID filter should be pre-filled with the given ContractorID "<contractorID>"
    And the results should not be displayed as there are no jobs to show

    Examples:
      | username        | password  | allocations | contractorID |
      | zenq2@ll.com.au | Reset@312 | Allocations | 5667         |

    #LL-636  Scenario 6: Entering Contractor ID in the URL that does not exists
  @LL-636 @ContractorIDInURLThatDoesNotExist @LL-6361
  Scenario Outline: Entering Contractor ID in the URL that does not exists
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And a user has accessed the Bookings "<allocations>" screen
    And the URL contains the ContractorID parameter "<contractorID>"
    Then the Bookings Allocations screen will display
    And a ContractorID filter should be pre-filled with the given ContractorID "<contractorID>"
    And the results should not be displayed as there are no jobs to show

    Examples:
      | username        | password  | allocations | contractorID |
      | zenq2@ll.com.au | Reset@312 | Allocations | 5            |

    #LL-636 Scenario 7: As Client - Campus PIN filter should not be added on entering Campus pin in the URL
  @LL-636 @AsClientCampusPINInURL @LL-6361
  Scenario Outline: Campus PIN in URL
    When I login with "<username cbo>" and "<password cbo>"
    And I click Interpreting header link
    And enter the Campus pin "<campusPIN>" that is Active in the URL
    Then the Bookings Allocations screen will display
    And a CampusPIN filter should not be displayed and pre filled with the given Campus PIN "<campusPIN>"

    Examples:
      | username cbo   | password cbo | campusPIN |
      | zenq@cbo11.com | Test1        | 29449     |

    #LL-636 Scenario 8: As Client - Contractor ID filter should not be added on entering Contractor ID in the URL
  @LL-636 @AsClientContractorIDInURL @LL-6361
  Scenario Outline: Contractor ID in URL
    When I login with "<username cbo>" and "<password cbo>"
    And I click Interpreting header link
    And enter the ContractorID "<contractorID>" that is Active in the URL
    Then the Bookings Allocations screen will display
    And a Contractor ID filter should not be displayed and pre filled with the given Contractor ID "<contractorID>"

    Examples:
      | username cbo   | password cbo | contractorID |
      | zenq@cbo11.com | Test1        | 6155         |

    #LL-635 Scenario 1: Campus PIN in URL (internal)
  @LL-635 @CampusPINInURLBookingRequest
  Scenario Outline: Campus PIN in URL (internal) Booking Request
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And an internal user has accessed the Booking Request screen from URL
    And the Booking Request URL contains the CampusPIN parameter "<campusPIN>"
    Then the Job Request screen will display
    And the CampusPIN "<campusPIN>" should be prefilled in the input box
    And RequesterMode should be set to Phone
    And the rest of the form should display as if the user has typed a Campus PIN and pressed enter "<job requester details>"

    Examples:
      | username        | password  | campusPIN | job requester details |
      | zenq2@ll.com.au | Reset@312 | 29449     | 29449,Contoso Pty LTD |

    #LL-635 Scenario 2: Invalid Campus PIN in URL (internal)
  @LL-635 @InvalidCampusPINInURLBookingRequest
  Scenario Outline: Invalid Campus PIN in URL (internal)
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And an internal user has accessed the Booking Request screen from URL
    And the Booking Request URL contains the CampusPIN parameter "<invalid campusPIN>"
    Then the Job Request screen will display
    And the CampusPIN "<invalid campusPIN>" should be prefilled in the input box
    And the error message No Campus PIN found is displayed
    And the rest of the form should display as if the user has typed a Campus PIN and pressed enter "<job requester details>"

    Examples:
      | username        | password  | invalid campusPIN | job requester details |
      | zenq2@ll.com.au | Reset@312 | 2944909           | 2944909               |

    #LL-635 Scenario 3: Inactive Campus PIN in URL (internal)
  @LL-635 @InactiveCampusPINInURLBookingRequest
  Scenario Outline: Inactive Campus PIN in URL (internal)
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And an internal user has accessed the Booking Request screen from URL
    And the Booking Request URL contains the CampusPIN parameter "<inactive campusPIN>"
    Then the Job Request screen will display
    And the CampusPIN "<inactive campusPIN>" should be prefilled in the input box
    And the error message The Campus is Inactive is displayed
    And the rest of the form should display as if the user has typed a Campus PIN and pressed enter "<job requester details>"

    Examples:
      | username        | password  | inactive campusPIN | job requester details |
      | zenq2@ll.com.au | Reset@312 | 28063              | 28063                 |

    #LL-635 Scenario 4: Campus PIN in URL (CBO User with multiple campuses)
  @LL-635 @CampusPINInURLCBOMultiple
  Scenario Outline: Campus PIN in URL (CBO User with multiple campuses)
    When I login with "<username cbo>" and "<password cbo>"
    And I click Interpreting header link
    And an CBO user has accessed the Booking Request screen from URL
    And user enters Campus PIN "<campusPIN option>" in the URL
    Then the Job Request screen will display
    And the CampusPIN "<campusPIN option>" should not be prefilled in the input box for CBO
    And the page still stays as if no campus is selected for CBO

    Examples:
      | username cbo   | password cbo | campusPIN option |
      | zenq@cbo11.com | Test1        | 29449            |

    #LL-635 Scenario 5: Campus PIN in URL (CBO User with single campus)
  @LL-635 @CampusPINInURLCBOSingle
  Scenario Outline: Campus PIN in URL (CBO User with single campus)
    When I login with "<username cbo>" and "<password cbo>"
    And I click Interpreting header link
    And an CBO user has accessed the Booking Request screen from URL
    And user enters Campus PIN "<campusPIN option>" in the URL
    Then the Job Request screen will display
    And the CampusPIN "<campusPIN option>" is prefilled in the input box as it has only 1 campus pin for CBO

    Examples:
      | username cbo   | password cbo | campusPIN option |
      | zenq@cbo10.com | Test1        | 29449            |

    #LL-665 Scenario 1: Job Request screen does not show “Audible in ODTI” custom fields
  @LL-665 @JobRequestDoesNotShowCustomODTI
  Scenario Outline: Job Request screen does not show Audible in ODTI custom fields
    When I login with "<username>" and "<password>"
    And I click account management link
    And I search for campus "<campus pin>"
    And I click the first campus link from search results
    And they click add Customised Field
    And they select ‘Audible in ODTI’ checkbox
    And the Max Length and Audio-label fields will display
    And the Admin enters Customised ODTI Field data "<customised field name>","<max length>","<audio label>" in campus
    And the Admin clicks the ‘Add’ button On Manage Customized Field
    And the customised field will be created
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And click on Job Type option "<request job type>" in Job Requester Details
    And I select "<Requester Name>" from the requester name dropdown
    And I click next button
    And the Additional information section is shown
    Then any Audible in ODTI custom fields are not shown
    And other custom fields "<Custom Fields>" are still visible or editable
    And I click account management link
    And I search for campus "<campus pin>"
    And I click the first campus link from search results
    And I click on delete icon on Customised ODTI Field in Campus
    And the custom field is deleted in campus

    Examples:
      | username          | password  | campus pin | customised field name | max length | audio label      | request job type     | dropdownfilter | Requester Name    | Custom Fields                       |
      | LLAdmin@looped.in | Octopus@6 | 33124      | AutomationField       | 50         | automation label | Pre-Booked Telephone | Management     | Automation Tester | PO Number,Your Reference,Department |

    #LL-665 Scenario 2: On editing the existing Pre booked Job, the Job Request screen does not show “Audible in ODTI” custom fields
  @LL-665 @EditJobRequestDoesNotShowCustomODTI
  Scenario Outline: On editing the existing Pre booked Job, the Job Request screen does not show “Audible in ODTI” custom fields
    When I login with "<username>" and "<password>"
    And I click account management link
    And I search for campus "<campus pin>"
    And I click the first campus link from search results
    And they click add Customised Field
    And they select ‘Audible in ODTI’ checkbox
    And the Max Length and Audio-label fields will display
    And the Admin enters Customised ODTI Field data "<customised field name>","<max length>","<audio label>" in campus
    And the Admin clicks the ‘Add’ button On Manage Customized Field
    And the customised field will be created
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
    And user clicks on Edit button in Job Allocation
    And the Additional information section is shown
    Then any Audible in ODTI custom fields are not shown
    And other custom fields "<Custom Fields>" are still visible or editable
    And I click account management link
    And I search for campus "<campus pin>"
    And I click the first campus link from search results
    And I click on delete icon on Customised ODTI Field in Campus
    And the custom field is deleted in campus

    Examples:
      | username          | password  | campus pin | customised field name | max length | audio label      | request job type     | dropdownfilter | Requester Name    | language   | assignment type   | date         | time  | email        | Custom Fields                       |
      | LLAdmin@looped.in | Octopus@6 | 33124      | AutomationField       | 50         | automation label | Pre-Booked Telephone | Management     | Automation Tester |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | PO Number,Your Reference,Department |

    #LL-665 Scenario 3: Unselecting the AUDIBLE IN ODTI option for few of the custom fields for which option is already enabled
  @LL-665 @UnselectJobRequestShowsCustomODTI
  Scenario Outline: Unselecting the AUDIBLE IN ODTI option for few of the custom fields for which option is already enabled
    When I login with "<username>" and "<password>"
    And I click account management link
    And I search for campus "<campus pin>"
    And I click the first campus link from search results
    And they click add Customised Field
    And they select ‘Audible in ODTI’ checkbox
    And the Max Length and Audio-label fields will display
    And the Admin enters Customised ODTI Field data "<customised field name>","<max length>","<audio label>" in campus
    And the Admin clicks the ‘Add’ button On Manage Customized Field
    And the customised field will be created
    And they select Customised field in the Campus page
    And the Manage Customised Field modal is displayed
    And user deselects the option AUDIBLE IN ODTI for the existing custom field
    And the Admin clicks the ‘Save’ button On Manage Customized Field
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And click on Job Type option "<request job type>" in Job Requester Details
    And I select "<Requester Name>" from the requester name dropdown
    And I click next button
    And the Additional information section is shown
    Then the custom field for which the option is Audible in ODTI is unselected is displayed
    And other custom fields "<Custom Fields>" are still visible or editable
    And I click account management link
    And I search for campus "<campus pin>"
    And I click the first campus link from search results
    And I click on delete icon on Customised ODTI Field in Campus
    And the custom field is deleted in campus

    Examples:
      | username          | password  | campus pin | customised field name | max length | audio label      | request job type     | dropdownfilter | Requester Name    | Custom Fields                       |
      | LLAdmin@looped.in | Octopus@6 | 33124      | AutomationField       | 50         | automation label | Pre-Booked Telephone | Management     | Automation Tester | PO Number,Your Reference,Department |

    #LL-665 Scenario 4: Selecting the AUDIBLE IN ODTI option for few of the custom fields for which option is not enabled earlier
  @LL-665 @SelectJobRequestDoesNotShowCustomODTI
  Scenario Outline: Selecting the AUDIBLE IN ODTI option for few of the custom fields for which option is not enabled earlier
    When I login with "<username>" and "<password>"
    And I click account management link
    And I search for campus "<campus pin>"
    And I click the first campus link from search results
    And they click add Customised Field
    And the Admin enters Customised ODTI Field Name "<customised field name>" in campus
    And the Admin clicks the ‘Add’ button On Manage Customized Field
    And the customised field will be created
    And they select Customised field in the Campus page
    And the Manage Customised Field modal is displayed
    And they select ‘Audible in ODTI’ checkbox
    And the Admin enters Customised ODTI Field Max length "<max length>" and Audio-label "<audio label>" in campus
    And the Admin clicks the ‘Save’ button On Manage Customized Field
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And click on Job Type option "<request job type>" in Job Requester Details
    And I select "<Requester Name>" from the requester name dropdown
    And I click next button
    And the Additional information section is shown
    Then any Audible in ODTI custom fields are not shown
    And other custom fields "<Custom Fields>" are still visible or editable
    And I click account management link
    And I search for campus "<campus pin>"
    And I click the first campus link from search results
    And I click on delete icon on Customised ODTI Field in Campus
    And the custom field is deleted in campus

    Examples:
      | username          | password  | campus pin | customised field name | max length | audio label      | request job type     | dropdownfilter | Requester Name    | Custom Fields                       |
      | LLAdmin@looped.in | Octopus@6 | 33124      | AutomationField       | 50         | automation label | Pre-Booked Telephone | Management     | Automation Tester | PO Number,Your Reference,Department |

    #LL-722 Scenario 1: Campus PIN in URL
  @LL-722 @MyJobsCampusPINInURL
  Scenario Outline: Campus PIN in URL Booking My Jobs
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And a user has accessed the Bookings "<My Jobs>" screen
    And the URL contains the CampusPIN parameter "<campusPIN>"
    Then the Bookings Management screen will display
    And a CampusPIN filter should be pre-filled with the given CampusPIN "<campusPIN>"
    And the rest of the form should display as if the user has filtered by Campus PIN "<campusName>"

    Examples:
      | username          | password  | My Jobs | campusPIN | campusName      |
      | LLAdmin@looped.in | Octopus@6 | My Jobs | 29449     | Contoso Pty LTD |

    #LL-722 Scenario 2: Contractor ID in URL
  @LL-722 @MyJobsContractorIDInURL
  Scenario Outline: Contractor ID in URL Booking My Jobs
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And a user has accessed the Bookings "<My Jobs>" screen
    And the URL contains the ContractorID parameter "<contractorID>"
    Then the Bookings Management screen will display
    And a ContractorID filter should be pre-filled with the given ContractorID "<contractorID>"
    And the rest of the form should display as if the user has filtered by ContractorID "<interpreterName>"

    Examples:
      | username          | password  | My Jobs | contractorID | interpreterName |
      | LLAdmin@looped.in | Octopus@6 | My Jobs | 6155         | Adel ODISH      |

    #LL-722 Scenario 3: Job ID in URL
  @LL-722 @MyJobsJobIDInURL
  Scenario Outline: Job ID in URL Booking My Jobs
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And a user has accessed the Bookings "<My Jobs>" screen
    And the URL contains the JobId parameter "<JobID>"
    Then the Bookings Management screen will display
    And the search field should be pre-filled with the given JobID "<JobID>"
    And the rest of the form should display as if the user has filtered or searched by JobID "<JobID>"

    Examples:
      | username          | password  | My Jobs | JobID   |
      | LLAdmin@looped.in | Octopus@6 | My Jobs | 0084483 |

    #LL-722 Scenario 4: User can perform search using all 3 types of filters in the URL
  @LL-722 @PerformSearch3TypesFilters
  Scenario Outline: User can perform search using all 3 types of filters in the URL
    When I login with "<username>" and "<password>"
    And I click Interpreting header link
    And a user has accessed the Bookings "<My Jobs>" screen
    And the URL contains the JobId parameter "<JobID>",Campus PIN "<campusPIN>" and ContractorID "<contractorID>" at once, sepearted by & symbol
    Then the Bookings Management screen will display
    And the search field should be pre-filled with the given JobID "<JobID>"
    And the rest of the form should display as if the user has filtered or searched by JobID "<JobID>"
    And a CampusPIN filter should be pre-filled with the given CampusPIN "<campusPIN>"
    And the rest of the form should display as if the user has filtered by Campus PIN "<campusName>"
    And a ContractorID filter in row "<row2>" should be pre-filled with the given ContractorID "<contractorID>"
    And the rest of the form should display as if the user has filtered by ContractorID "<interpreterName>"

    Examples:
      | username          | password  | My Jobs | JobID   | campusPIN | campusName      | contractorID | interpreterName | row2 |
      | LLAdmin@looped.in | Octopus@6 | My Jobs | 1614563 | 29449     | Contoso Pty LTD | 1453         | Ivanka JURIC    | 2    |

    #LL-925 Scenario 1 : Return Job is clicked
  @LL-925 @ContractorReturnJobIsClicked
  Scenario Outline: Return Job is clicked
    When I login with "<username>" and "<password>"
    And I create a new job request with minimal fields "<job notice length>"
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<new status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<new status>"
    And I confirm the job status "<new status>"
    And the looped in login page is opened
    And I login with "<contractor username>" and "<contractor password>"
    And I select "<allocated jobs option>" from the filter dropdown
    And I search for selected job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And they clicked on the Return Job button
    Then a popup is shown, with title Job Return Reason
    And the popup contains some text on why we ask
    And the popup contains a dropdown with the options "<return reason options>"
    And the popup has 2 buttons to Cancel and Confirm Return
    And they clicked the Confirm Return button

    Examples:
      | username          | password  | job notice length | contractor   | original status                 | new status | contractor username     | contractor password | allocated jobs option | return reason options                                                                                                                                                                  |
      | LLAdmin@looped.in | Octopus@6 | long notice       | Suzane HANNA | Auto Notification,- No status - | Allocated  | suzanehanna@hotmail.com | Test1               | Allocated Jobs        | Accepted in Error,Conflict of Interest,Pay Rates,Illness / Medical Appointment,Transport Issues,Personal Emergency,Accepted another job elsewhere,Accepted another job at LanguageLoop |

    #LL-925 Scenario 2 : Canceled
  @LL-925 @ContractorReturnJobCanceled
  Scenario Outline: Return Job is Canceled
    When I login with "<username>" and "<password>"
    And I create a new job request with minimal fields "<job notice length>"
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<new status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<new status>"
    And I confirm the job status "<new status>"
    And the looped in login page is opened
    And I login with "<contractor username>" and "<contractor password>"
    And I select "<allocated jobs option>" from the filter dropdown
    And I search for selected job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And they clicked on the Return Job button
    And a popup is shown, with title Job Return Reason
    And they clicked the Cancel button on return job popup
    Then the Job Return Reason popup is closed
    And the job is not returned and no changes are saved
    And I click return job button

    Examples:
      | username          | password  | job notice length | contractor   | original status                 | new status | contractor username     | contractor password | allocated jobs option |
      | LLAdmin@looped.in | Octopus@6 | long notice       | Suzane HANNA | Auto Notification,- No status - | Allocated  | suzanehanna@hotmail.com | Test1               | Allocated Jobs        |

    #LL-925 Scenario 3: Confirmed Return before Job Handback Exclusion Zone
  @LL-925 @ContractorConfirmedReturnBeforeHEZ
  Scenario Outline: Confirmed Return before Job Handback Exclusion Zone
    When I login with "<username>" and "<password>"
    And I create a new job request with minimal fields "<job notice length>"
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<new status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<new status>"
    And I confirm the job status "<new status>"
    And the looped in login page is opened
    And I login with "<contractor username>" and "<contractor password>"
    And I select "<allocated jobs option>" from the filter dropdown
    And I search for selected job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And they clicked on the Return Job button
    And a popup is shown, with title Job Return Reason
    And the popup has 2 buttons to Cancel and Confirm Return
    And they clicked the Confirm Return button
    Then the Job Return Reason popup is closed
    And I verify the job is not listed in search results

    Examples:
      | username          | password  | job notice length | contractor   | original status                 | new status | contractor username     | contractor password | allocated jobs option |
      | LLAdmin@looped.in | Octopus@6 | long notice       | Suzane HANNA | Auto Notification,- No status - | Allocated  | suzanehanna@hotmail.com | Test1               | Allocated Jobs        |

    #LL-925 Scenario 4: Confirmed Return AFTER Job Handback Exclusion Zone
  @LL-925 @ContractorConfirmedReturnAfterHEZ
  Scenario Outline: Confirmed Return AFTER Job Handback Exclusion Zone
    When I login with "<username>" and "<password>"
    And I create a new job request with minimal fields "<job notice length>"
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<new status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<new status>"
    And I confirm the job status "<new status>"
    And the looped in login page is opened
    And I login with "<contractor username>" and "<contractor password>"
    And I select "<allocated jobs option>" from the filter dropdown
    And I search for selected job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And they clicked on the Return Job button
    Then a error message Please note you can’t return this job on the portal You will need to call us to return your job is displayed
    And the job is not returned and no changes are saved
    And the looped in login page is opened
    And I login with "<username>" and "<password>"
    And I click Interpreting header link
    And I select "<management filter>" from the filter dropdown
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And the booking is cancelled on behalf of "<Requester Name>"

    Examples:
      | username          | password  | job notice length | contractor   | original status                 | new status | contractor username     | contractor password | allocated jobs option | management filter | Requester Name    |
      | LLAdmin@looped.in | Octopus@6 | short notice      | Suzane HANNA | Auto Notification,- No status - | Allocated  | suzanehanna@hotmail.com | Test1               | Allocated Jobs        | Management        | Automation Tester |

    #LL-926 Scenario 1 : Internal Staff Return Job is clicked
  @LL-926 @InternalStaffReturnJobIsClicked
  Scenario Outline: Internal Staff Return Job is clicked
    When I login with "<username>" and "<password>"
    And I create a new job request with minimal fields "<job notice length>"
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<allocated status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<allocated status>"
    And I confirm the job status "<allocated status>"
    And I change the contractor "<contractor>" job status from "<allocated status>" to "<returned status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<allocated status>","<returned status>"
    Then a popup is shown, with title Job Return Reason
    And the popup contains some text on why we ask
    And the popup contains a dropdown with the options "<return reason options>"
    And the popup has 2 buttons to Cancel and Confirm Return
    And they clicked the Confirm Return button

    Examples:
      | username          | password  | job notice length | contractor   | original status                 | allocated status | returned status | return reason options                                                                                                                                                                                      |
      | LLAdmin@looped.in | Octopus@6 | long notice       | Suzane HANNA | Auto Notification,- No status - | Allocated        | Returned        | Accepted in Error,Conflict of Interest,Pay Rates,Illness / Medical Appointment,Transport Issues,Personal Emergency,Accepted another job elsewhere,Accepted another job at LanguageLoop,LL Allocation Error |

    #LL-926 Scenario 2 : Internal Staff Canceled
  @LL-926 @InternalStaffReturnJobCanceled
  Scenario Outline: Internal Staff Return Job is Canceled
    When I login with "<username>" and "<password>"
    And I create a new job request with minimal fields "<job notice length>"
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<allocated status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<allocated status>"
    And I confirm the job status "<allocated status>"
    And I change the contractor "<contractor>" job status from "<allocated status>" to "<returned status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<allocated status>","<returned status>"
    And a popup is shown, with title Job Return Reason
    And they clicked the Cancel button on return job popup
    Then the Job Return Reason popup is closed
    And I confirm the job status "<allocated status>"
    And I change the contractor "<contractor>" job status from "<allocated status>" to "<returned status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<allocated status>","<returned status>"
    And a popup is shown, with title Job Return Reason
    And they clicked the Confirm Return button

    Examples:
      | username          | password  | job notice length | contractor   | original status                 | allocated status | returned status |
      | LLAdmin@looped.in | Octopus@6 | long notice       | Suzane HANNA | Auto Notification,- No status - | Allocated        | Returned        |

    #LL-926 Scenario 3: Internal Staff Confirmed Return before Job Handback Exclusion Zone
  @LL-926 @InternalStaffConfirmedReturnBeforeHEZ
  Scenario Outline: Internal Staff Confirmed Return before Job Handback Exclusion Zone
    When I login with "<username>" and "<password>"
    And I create a new job request with minimal fields "<job notice length>"
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<allocated status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<allocated status>"
    And I confirm the job status "<allocated status>"
    And I change the contractor "<contractor>" job status from "<allocated status>" to "<returned status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<allocated status>","<returned status>"
    And a popup is shown, with title Job Return Reason
    And the popup has 2 buttons to Cancel and Confirm Return
    And they clicked the Confirm Return button
    Then the Job Return Reason popup is closed
    And I confirm the job status "<returned status>"

    Examples:
      | username          | password  | job notice length | contractor   | original status                 | allocated status | returned status |
      | LLAdmin@looped.in | Octopus@6 | long notice       | Suzane HANNA | Auto Notification,- No status - | Allocated        | Returned        |

    #LL-926 Scenario 4: Confirmed Return AFTER Job Handback Exclusion Zone
  @LL-926 @InternalStaffConfirmedReturnAfterHEZ
  Scenario Outline: Internal Staff Confirmed Return AFTER Job Handback Exclusion Zone
    When I login with "<username>" and "<password>"
    And I create a new job request with minimal fields "<job notice length>"
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<allocated status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<allocated status>"
    And I confirm the job status "<allocated status>"
    And I change the contractor "<contractor>" job status from "<allocated status>" to "<returned status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<allocated status>","<returned status>"
    And a popup is shown, with title Job Return Reason
    And the popup has 2 buttons to Cancel and Confirm Return
    And they clicked the Confirm Return button
    Then the Job Return Reason popup is closed
    And search for contractor "<contractor>" in Job Allocation
    And I confirm the job status "<returned status>"

    Examples:
      | username          | password  | job notice length  | contractor   | original status                 | allocated status | returned status |
      | LLAdmin@looped.in | Octopus@6 | short notice       | Suzane HANNA | Auto Notification,- No status - | Allocated        | Returned        |

    #LL-936 Scenario 1 : Job has not been returned
  @LL-936 @JobHasNotBeenReturned
  Scenario Outline: Job has not been returned
    When I login with "<username>" and "<password>"
    And I create a new job request with minimal fields "<job notice length>"
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<allocated status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<allocated status>"
    And I confirm the job status "<allocated status>"
    And the user is on the Job Detail page
    Then the Late Job Return checkbox and label are displayed
    And the Job Return checkbox is unchecked and is read-only
    And the Job Return checkbox label is "<Late Job Return label>"

    Examples:
      | username          | password  | job notice length | contractor   | original status                 | allocated status | Late Job Return label |
      | LLAdmin@looped.in | Octopus@6 | long notice       | Suzane HANNA | Auto Notification,- No status - | Allocated        | Late Job Return       |

    #LL-936 Scenario 2a : Job has been returned, with no IsLateJobReturn
  @LL-936 @JobReturnedWithNoIsLateJobReturn
  Scenario Outline: Job has been returned, with no IsLateJobReturn
    When I login with "<username>" and "<password>"
    And I create a new job request with minimal fields "<job notice length>"
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<allocated status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<allocated status>"
    And I confirm the job status "<allocated status>"
    And I change the contractor "<contractor>" job status from "<allocated status>" to "<returned status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<allocated status>","<returned status>"
    And a popup is shown, with title Job Return Reason
    And the popup has 2 buttons to Cancel and Confirm Return
    And they clicked the Confirm Return button
    And the Job Return Reason popup is closed
    And I confirm the job status "<returned status>"
    And the user is on the Job Detail page
    Then the Late Job Return by checkbox and label are displayed
    And the Job Return checkbox is unchecked and is read-only
    And the Job Return by checkbox label is "<Late Job Return by label>""<contractor>"

    Examples:
      | username          | password  | job notice length | contractor   | original status                 | allocated status | returned status | Late Job Return by label |
      | LLAdmin@looped.in | Octopus@6 | long notice       | Suzane HANNA | Auto Notification,- No status - | Allocated        | Returned        | Late Job Return by       |

    #LL-936 Scenario 2b : CSO Job has been returned, with no IsLateJobReturn
  @LL-936 @CSOJobReturnedWithNoIsLateJobReturn
  Scenario Outline: CSO Job has been returned, with no IsLateJobReturn
    When I login with "<username cso>" and "<password cso>"
    And I create a new job request with minimal fields "<job notice length>"
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<allocated status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<allocated status>"
    And I confirm the job status "<allocated status>"
    And I change the contractor "<contractor>" job status from "<allocated status>" to "<returned status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<allocated status>","<returned status>"
    And a popup is shown, with title Job Return Reason
    And the popup has 2 buttons to Cancel and Confirm Return
    And they clicked the Confirm Return button
    And the Job Return Reason popup is closed
    And I confirm the job status "<returned status>"
    And the user is on the Job Detail page
    Then the Late Job Return by checkbox and label are displayed
    And the Job Return checkbox is unchecked and is read-only
    And the Job Return by checkbox label is "<Late Job Return by label>""<contractor>"

    Examples:
      | username cso   | password cso | job notice length | contractor   | original status                 | allocated status | returned status | Late Job Return by label |
      | zenq@cso10.com | Test1        | long notice       | Suzane HANNA | Auto Notification,- No status - | Allocated        | Returned        | Late Job Return by       |

    #LL-936 Scenario 3 : Job has been returned, with at least 1 IsLateJobReturn
  @LL-936 @JobReturnedWithOneIsLateJobReturn
  Scenario Outline: Job has been returned, with at least 1 IsLateJobReturn
    When I login with "<username>" and "<password>"
    And I create a new job request with minimal fields "<job notice length>"
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<allocated status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<allocated status>"
    And I confirm the job status "<allocated status>"
    And I change the contractor "<contractor>" job status from "<allocated status>" to "<returned status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<allocated status>","<returned status>"
    And a popup is shown, with title Job Return Reason
    And the popup has 2 buttons to Cancel and Confirm Return
    And they clicked the Confirm Return button
    And the Job Return Reason popup is closed
    And the user is on the Job Detail page
    Then the Late Job Return by checkbox and label are displayed
    And the Job Return checkbox is checked and is read-only
    And the Job Return by checkbox label is "<Late Job Return by label>""<contractor>"

    Examples:
      | username          | password  | job notice length | contractor   | original status                 | allocated status | returned status | Late Job Return by label |
      | LLAdmin@looped.in | Octopus@6 | short notice      | Suzane HANNA | Auto Notification,- No status - | Allocated        | Returned        | Late Job Return by       |