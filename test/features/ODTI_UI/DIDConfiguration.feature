@DIDConfiguration
Feature: ODTI_UI DID Configuration features

  Background: Load the ODTI DID Configurations page
    Given the looped in login page is opened

 #LL-577: Scenario 1a - DID ODTI Configuration (New)
  @LL-577 @DIDODTIConfigurationNew
  Scenario Outline: DID ODTI Configuration (New)
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    Then a blank form is shown in New DID Configuration

    Examples:
      | username          | password  |
      | LLAdmin@looped.in | Octopus@6 |

    #LL-577: Scenario 1b - DID ODTI Configuration (Edit)
  @LL-577 @DIDODTIConfigurationEdit
  Scenario Outline: DID ODTI Configuration (Edit)
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the Admin is on the Edit DID Configuration screen of Campus "<campus>"
    Then the existing configuration is shown

    Examples:
      | username          | password  | campus                  |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD |

    #LL-577: Scenario 1c - DID ODTI Configuration (Duplicate)
  @LL-577 @DIDODTIConfigurationDuplicate
  Scenario Outline: DID ODTI Configuration (Duplicate)
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the Admin is on the Duplicate DID Configuration screen of Campus "<campus>"
    Then a copy of the existing DID configuration is shown upon clicking duplicate
    And the DID is blank in existing DID configuration upon clicking duplicate

    Examples:
      | username          | password  | campus                  |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD |


    #LL-577: Scenario 2 - Entering a Campus PIN
  @LL-577 @DIDODTIConfigurationCampusPin
  Scenario Outline: Entering a Campus PIN in DID Configuration
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And has selected the TI Service Type "<TI Service Type>" in DID configuration
    And has typed in a Campus PIN "<campus pin>" in DID configuration
    Then the PIN is searched in DID configuration
    And the Campus name "<campus name>" is displayed below the input box in DID configuration

    Examples:
      | username          | password  | campus pin | TI Service Type | campus name     |
      | LLAdmin@looped.in | Octopus@6 | 29449      | NES Initiated   | Contoso Pty LTD |

    #LL-577: Scenario 3a - Selecting a Service Type
  @LL-577 @SelectServiceTypeClientTIXP
  Scenario Outline: Selecting a Service Type Client TIXP
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And has selected the TI Service Type "<TI Service Type>" in DID configuration
    Then the MILS configuration section is hidden
    And the TIXP configuration section is displayed

    Examples:
      | username          | password  | TI Service Type |
      | LLAdmin@looped.in | Octopus@6 | Client TIXP     |

    #LL-577: Scenario 3b - Selecting a Service Type
  @LL-577 @SelectServiceTypeNESInitiated
  Scenario Outline: Selecting a Service Type NES Initiated
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And has selected the TI Service Type "<TI Service Type>" in DID configuration
    Then the MILS configuration section is displayed
    And the TIXP configuration section is hidden

    Examples:
      | username          | password  | TI Service Type |
      | LLAdmin@looped.in | Octopus@6 | NES Initiated   |

    #LL-577: Scenario 3c - Selecting a Service Type
  @LL-577 @SelectServiceTypeGeneralTI
  Scenario Outline: Selecting a Service Type Prebooked TI or General TI
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And has selected the TI Service Type "<TI Service Type>" in DID configuration
    Then the MILS and TIXP configuration sections are not shown

    Examples:
      | username          | password  | TI Service Type |
      | LLAdmin@looped.in | Octopus@6 | General TI      |