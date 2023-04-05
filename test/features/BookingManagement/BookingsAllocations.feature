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