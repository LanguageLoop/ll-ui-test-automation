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

    #LL-577: Scenario 5 - Cancel
  @LL-577 @DIDODTIConfigurationCancel
  Scenario Outline: Cancel in DID Configuration
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And has selected the TI Service Type "<TI Service Type>" in DID configuration
    And has typed in a Campus PIN "<campus pin>" in DID configuration
    And the user has clicked the CANCEL button in DID configuration
    Then the data entered is not saved in DID configuration
    And the admin is navigated back to the configuration list screen

    Examples:
      | username          | password  | campus pin | TI Service Type |
      | LLAdmin@looped.in | Octopus@6 | 29449      | NES Initiated   |

    #LL-577: Scenario 7a - Adding business hours
  @LL-577 @AddingBusinessHours
  Scenario Outline: Adding business hours
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And the admin has clicked the Add More icon under the day-schedule
    Then a schedule time modal window appears in DID configuration
    And the modal contains drop-down boxes for the start time and end time, and Save & Cancel buttons
    And the drop downs contain a list of times in 15minute increments from 00:00 to 23:59

    Examples:
      | username          | password  |
      | LLAdmin@looped.in | Octopus@6 |

    #LL-577: Scenario 7b - Saving the business hours
  @LL-577 @SavingBusinessHours
  Scenario Outline: Saving the business hours
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And the admin has clicked the Add More icon under the day-schedule
    And a schedule time modal window appears in DID configuration
    And has selected start time "<start Time>" and end time "<end Time>" on the schedule-edit modal
    And has clicked the SAVE button on schedule time modal
    Then the schedule time modal window closes in DID configuration
    And the selected start time "<start Time>" and end time "<end Time>" is reflected in the table for that day

    Examples:
      | username          | password  | start Time | end Time |
      | LLAdmin@looped.in | Octopus@6 | 01:00:00   | 03:00:00 |

    #LL-577: Scenario 7c - Cancelling the schedule-edit modal
  @LL-577 @CancellingBusinessHours
  Scenario Outline: Cancelling the schedule-edit modal
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And the admin has clicked the Add More icon under the day-schedule
    And a schedule time modal window appears in DID configuration
    And has selected start time "<start Time>" and end time "<end Time>" on the schedule-edit modal
    And has clicked the CANCEL button on schedule time modal
    Then the schedule time modal window closes in DID configuration
    And the schedule for that day remains unchanged

    Examples:
      | username          | password  | start Time | end Time |
      | LLAdmin@looped.in | Octopus@6 | 01:00:00   | 03:00:00 |

#LL-577: Scenario 7d - Removing business hours
  @LL-577 @RemovingBusinessHours
  Scenario Outline: Removing business hours
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And the admin has clicked the Add More icon under the day-schedule
    And a schedule time modal window appears in DID configuration
    And has selected start time "<start Time>" and end time "<end Time>" on the schedule-edit modal
    And has clicked the SAVE button on schedule time modal
    And the schedule time modal window closes in DID configuration
    And the selected start time "<start Time>" and end time "<end Time>" is reflected in the table for that day
    And there is an x icon displayed next to each Time Block row
    And the admin clicks on the x icon in the schedule table
    Then the Time Block is removed from the table
    And a feedback message is displayed: Time block deleted

    Examples:
      | username          | password  | start Time | end Time |
      | LLAdmin@looped.in | Octopus@6 | 01:00:00   | 03:00:00 |

    #LL-577: Scenario 8a - Editing a language option
  @LL-577 @EditingLanguageOption
  Scenario Outline: Editing a language option
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And the admin has clicked the Edit icon beside a language option
    And from out of nowhere, a modal window for Edit Language magically appears!
    And the Edit Language modal contains a drop-down with a list of languages
    And the Edit Language modal contains Save & Cancel buttons

    Examples:
      | username          | password  |
      | LLAdmin@looped.in | Octopus@6 |