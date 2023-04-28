@ODTIJobsCBO
Feature: ODTI_UI Campus Configuration features

  Background: Load the ODTI DID Configurations page
    Given the looped in login page is opened

 #LL-489: Scenario 1a - Campus ODTI Configuration (New)
  @LL-489 @CampusODTIConfigurationNew
  Scenario Outline: Campus ODTI Configuration (New)
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And the Admin is on the Campus Configuration screen
    And the new Campus Configuration Page is displayed
    And the Service Type is displayed with General TI type by default and not changeable
    And the Campus PIN input and configuration section are displayed

    Examples:
      | username          | password  |
      | LLAdmin@looped.in | Octopus@6 |

    #LL-489: Scenario 1b - Campus ODTI Configuration (Edit)
  @LL-489 @CampusODTIConfigurationEdit
  Scenario Outline: Campus ODTI Configuration (Edit)
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And the Admin is on the Edit Campus Configuration screen of Campus "<campus>"
    And the Edit Campus Configuration Page is displayed
    Then the Campus PIN input and Service Type Dropdown are displayed
    And the saved configuration is displayed

    Examples:
      | username          | password  | campus                  |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD |

    #LL-489: Scenario 1c - Campus ODTI Configuration (Duplicate)
  @LL-489 @CampusODTIConfigurationDuplicate
  Scenario Outline: Campus ODTI Configuration (Duplicate)
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And the Admin is on the Duplicate Campus Configuration screen of Campus "<campus>"
    And the new Campus Configuration Page is displayed
    Then the Campus PIN input and Service Type Dropdown are displayed upon clicking duplicate
    And the saved configuration is displayed upon clicking duplicate
    And the Campus PIN is blank upon clicking duplicate

    Examples:
      | username          | password  | campus                  |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD |

    #LL-489: Scenario 2 - Entering a Campus PIN
  @LL-489 @EnteringCampusPIN
  Scenario Outline: Entering a Campus PIN
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And the Admin is on the Campus Configuration screen
    And has typed in a Campus PIN "<campus pin>"
    Then the PIN is searched
    And the Campus name "<campus name>" is displayed below the input box

    Examples:
      | username          | password  | campus pin | campus name     |
      | LLAdmin@looped.in | Octopus@6 | 29449      | Contoso Pty LTD |