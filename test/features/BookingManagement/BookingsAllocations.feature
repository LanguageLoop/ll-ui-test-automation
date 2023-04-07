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