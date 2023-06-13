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

    #LL-577: Scenario 8b - Saving the Language option
  @LL-577 @SavingLanguageOption
  Scenario Outline: Saving the Language option
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And the admin has clicked the Edit icon beside a language option
    And from out of nowhere, a modal window for Edit Language magically appears!
    And has selected a language "<language Name>" form Language Name drop-down in Edit Language modal
    And has clicked the SAVE button in Edit Language modal
    Then the modal window for Edit Language closes
    And the table now reflects the selected language "<language Name>" for the keypad option

    Examples:
      | username          | password  | language Name |
      | LLAdmin@looped.in | Octopus@6 | ARABIC        |

    #LL-577: Scenario 8c - Cancelling the modal
  @LL-577 @CancellingLanguageOptionModal
  Scenario Outline: Cancelling the Language option modal
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And the admin has clicked the Edit icon beside a language option
    And from out of nowhere, a modal window for Edit Language magically appears!
    And has selected a language "<language Name>" form Language Name drop-down in Edit Language modal
    And has clicked the CANCEL button in Edit Language modal
    Then the modal window for Edit Language closes
    And the keypad option remains unchanged

    Examples:
      | username          | password  | language Name |
      | LLAdmin@looped.in | Octopus@6 | ARABIC        |

    #LL-577: Scenario 9: Entering the same DID number that already exists
  @LL-577 @EnteringDIDNumberAlreadyExists
  Scenario Outline: Cancel in DID Configuration
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And has selected the TI Service Type "<TI Service Type>" in DID configuration
    And has typed in a Campus PIN "<campus pin>" in DID configuration
    And the user enters the same DID number "<DID number>" that already exists
    And the user has filled in all the required data "<welcome Audio File Name>", "<closed Audio File Name>", "<language Audio File>", "<timezone>" in New DID Configuration
    And has clicked the SAVE button in New DID Configuration page
    Then the error text message Duplicate phone number exists! is displayed

    Examples:
      | username          | password  | campus pin | TI Service Type | DID number    | welcome Audio File Name | closed Audio File Name | language Audio File | timezone             |
      | LLAdmin@looped.in | Octopus@6 | 29449      | Client TIXP     | 6173 0821 466 | test1.wmv               | test2.wmv              | test3.wmv           | (UTC+10:00) Brisbane |

    #LL-577: Scenario 10: Adding the time blocks that exists between the existing time blocks
  @LL-577 @AddingTimeBlocksBetweenExisting
  Scenario Outline: Adding the time blocks that exists between the existing time blocks
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the Admin is on the Edit DID Configuration screen of Campus "<campus>"
    And the user is navigated to the Edit DID Configuration screen
    And the admin has clicked the Add More icon under the day-schedule
    And a schedule time modal window appears in DID configuration
    And has selected start time "<start Time>" and end time "<end Time>" on the schedule-edit modal
    And the user enters the same time block with weekdays "<weekdays>" that comes in the same time block and same days which already exists
    And has clicked the SAVE button on schedule time modal
    Then the error text message Time block overlaps with another time block is displayed

    Examples:
      | username          | password  | campus                  | start Time | end Time | weekdays |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD | 01:00:00   | 03:00:00 | Sat,Sun  |

    #LL-605: Scenario 1: New Table Schedule
  @LL-605 @NewTableSchedule
  Scenario Outline: Closed Message
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the Admin is on the Edit DID Configuration screen of Campus "<campus>"
    And the user is navigated to the Edit DID Configuration screen
    Then they see the new schedule table "<table headers>" instead of the old one
    And an Add More button is shown under the schedule table

    Examples:
      | username          | password  | campus                  | table headers                                      |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD | Start - End Time,Is Business Hours,Weekdays,Delete |

    #LL-605: Scenario 2a: Clicking Add More button
  @LL-605 @ClickingAddMoreButton
  Scenario Outline: Clicking Add More button
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the Admin is on the Edit DID Configuration screen of Campus "<campus>"
    And the user is navigated to the Edit DID Configuration screen
    And the admin has clicked the Add More icon under the day-schedule
    Then a schedule time modal window appears in DID configuration

    Examples:
      | username          | password  | campus                  |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD |

    #LL-605: Scenario 2b: Adding Time Block
  @LL-605 @AddingTimeBlock
  Scenario Outline: Clicking Add More button
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the Admin is on the Edit DID Configuration screen of Campus "<campus>"
    And the user is navigated to the Edit DID Configuration screen
    And the admin has clicked the Add More icon under the day-schedule
    And a schedule time modal window appears in DID configuration
    Then has selected start time "<start Time1>" and end time "<end Time1>" on the schedule-edit modal
    And the times are displayed in 24hr format in schedule time modal
    And a time block must be 30 min plus duration
    And a time block can apply to 1 or more week days "<weekdays>"
    And a time block can be set to BH or AH
    And has selected start time "<start Time2>" and end time "<end Time2>" on the schedule-edit modal
    And has clicked the SAVE button on schedule time modal
    And the error text message Time block overlaps with another time block is displayed

    Examples:
      | username          | password  | campus                  | start Time1 | end Time1 | start Time2 | end Time2 | weekdays |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD | 01:00:00    | 01:15:00  | 02:00:00    | 05:00:00  | Sat,Sun  |

    #LL-605: Scenario 2c: Click Cancel
  @LL-605 @ClickCancelOnSchedule
  Scenario Outline: Click Cancel
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And fetches the schedule table text
    And the admin has clicked the Add More icon under the day-schedule
    And a schedule time modal window appears in DID configuration
    And has selected start time "<start Time>" and end time "<end Time>" on the schedule-edit modal
    And has clicked the CANCEL button on schedule time modal
    Then the schedule time modal window closes in DID configuration
    And no changes are saved in the schedule

    Examples:
      | username          | password  | start Time | end Time |
      | LLAdmin@looped.in | Octopus@6 | 01:00:00   | 03:00:00 |

    #LL-605: Scenario 2d: Click Save Validation
  @LL-605 @ClickSaveValidation
  Scenario Outline: Click Save Validation
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And the admin has clicked the Add More icon under the day-schedule
    And a schedule time modal window appears in DID configuration
    Then has selected start time "<start Time1>" and end time "<end Time1>" on the schedule-edit modal
    And a time block can apply to 1 or more week days "<weekdays>"
    And a time block can be set to BH or AH
    And has clicked the SAVE button on schedule time modal
    And the new time block "<start Time1>","<end Time1>" is added to the table
    And the admin has clicked the Add More icon under the day-schedule
    And a schedule time modal window appears in DID configuration
    And has selected start time "<start Time2>" and end time "<end Time2>" on the schedule-edit modal
    And a time block can apply to 1 or more week days "<weekdays>"
    And a time block can be set to BH or AH
    And has clicked the SAVE button on schedule time modal
    Then the schedule time modal window closes in DID configuration
    And the new time block "<start Time2>","<end Time2>" is added to the table
    And Is Business Hours is displayed with a tick
    And the table is sorted by Start time earliest time at the top

    Examples:
      | username          | password  | start Time1 | end Time1 | start Time2 | end Time2 | weekdays |
      | LLAdmin@looped.in | Octopus@6 | 01:00:00    | 02:00:00  | 02:00:00    | 05:00:00  | Sat,Sun  |

    #LL-605: Scenario 2e: Overlapping time block validation
  @LL-605 @OverlappingTimeBlockValidation
  Scenario Outline: Overlapping time block validation
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And the admin has clicked the Add More icon under the day-schedule
    And a schedule time modal window appears in DID configuration
    And has selected start time "<start Time1>" and end time "<end Time1>" on the schedule-edit modal
    And a time block can apply to 1 or more week days "<weekdays>"
    And has clicked the SAVE button on schedule time modal
    And the admin has clicked the Add More icon under the day-schedule
    And a schedule time modal window appears in DID configuration
    And has selected start time "<start Time2>" and end time "<end Time2>" on the schedule-edit modal
    And a time block can apply to 1 or more week days "<weekdays>"
    And has clicked the SAVE button on schedule time modal
    Then the error text message Time block overlaps with another time block is displayed
    And the user will remain on the Schedule Time Picker popup

    Examples:
      | username          | password  | start Time1 | end Time1 | start Time2 | end Time2 | weekdays |
      | LLAdmin@looped.in | Octopus@6 | 01:00:00    | 04:00:00  | 02:00:00    | 03:00:00  | Sun,Mon  |

    #LL-605: Scenario 3: Clicking Delete
  @LL-605 @ClickingDeleteTimeBlock
  Scenario Outline: Clicking Delete time block
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    And the admin has clicked the Add More icon under the day-schedule
    And a schedule time modal window appears in DID configuration
    And has selected start time "<start Time>" and end time "<end Time>" on the schedule-edit modal
    And a time block can apply to 1 or more week days "<weekdays>"
    And has clicked the SAVE button on schedule time modal
    And the admin clicks on the x icon in the schedule table
    Then that time block "<start Time>","<end Time>" is deleted
    And the Time Block is removed from the table
    And a feedback message is displayed: Time block deleted

    Examples:
      | username          | password  | start Time | end Time | weekdays |
      | LLAdmin@looped.in | Octopus@6 | 01:00:00   | 04:00:00 | Sun,Mon  |

    #LL-646: Scenario 1a: There should be a Delete icon beside the Pencil icon
  @LL-646 @DeleteIconBesidePencilIcon
  Scenario Outline: There should be a Delete icon beside the Pencil icon
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the Admin is on the Edit DID Configuration screen of Campus "<campus>"
    And the user is navigated to the Edit DID Configuration screen
    Then there should be an X icon on each of the language options that has a language set
    And options with no Language set do not have an X icon

    Examples:
      | username          | password  | campus                  |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD |

    #LL-646: Scenario 1b: Clicking the Delete icon, removes the Language assigned to the numeric option
  @LL-646 @ClickDeleteRemoveLanguageAssigned
  Scenario Outline: Clicking the Delete icon, removes the Language assigned to the numeric option
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the Admin is on the Edit DID Configuration screen of Campus "<campus>"
    And the user is navigated to the Edit DID Configuration screen
    And the Admin clicks the X icon in Language Options table
    Then the language option is cleared in Language Options table
    And the X icon disappears in Language Options table

    Examples:
      | username          | password  | campus                  |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD |