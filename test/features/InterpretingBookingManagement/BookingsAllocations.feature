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