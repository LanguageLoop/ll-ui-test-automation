@CampusConfiguration
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

    #LL-489: Scenario 5 - Cancel
  @LL-489 @CampusODTIConfigurationCancel
  Scenario Outline: Campus ODTI Configuration Cancel
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And the Admin is on the Campus Configuration screen
    And has typed in a Campus PIN "<campus pin>"
    And the PIN is searched
    And the user has filled in all the required data configuration toggles "<configuration toggles>"
    And the user has clicked the CANCEL button
    Then the data entered is not saved
    And the admin is navigated back to the configuration list screen

    Examples:
      | username          | password  | configuration toggles                                                                                      | campus pin |
      | LLAdmin@looped.in | Octopus@6 | Accept Calls on Public Holidays,Prompt Gender Preference,Prompt if More than 30 Mins,Prompt for NES Number | 33124      |

    #LL-489: Scenario 6: User is unable to edit the Campus pin and Service type in the Edit Campus Configuration
  @LL-489 @UnableToEditCampusPinServiceType
  Scenario Outline: User is unable to edit the Campus pin and Service type in the Edit Campus Configuration
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And the Admin is on the Edit Campus Configuration screen of Campus "<campus>"
    And the Edit Campus Configuration Page is displayed
    Then the Service Type and Campus pin fields are read only
    And user cannot update the Service Type and Campus pin fields values

    Examples:
      | username          | password  | campus                  |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD |

    #LL-489: Scenario 7: User is able to edit configuration settings in the Edit Campus Configuration
  @LL-489 @EditConfigurationSettings
  Scenario Outline: User is able to edit configuration settings in the Edit Campus Configuration
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And the Admin is on the Edit Campus Configuration screen of Campus "<campus>"
    And the Edit Campus Configuration Page is displayed
    And make Configuration Is Active to Active or Inactive
    And update the options settings under Configuration section "<configuration toggles>"
    And clicks on Save button in Edit Campus Configuration
    And the Admin is on the Edit Campus Configuration screen of Campus "<campus>"
    And the Edit Campus Configuration Page is displayed
    Then the campus details "<configuration toggles updated>" are updated
    And make Configuration Is Active to Active or Inactive
    And update the options settings under Configuration section "<configuration toggles>"
    And clicks on Save button in Edit Campus Configuration

    Examples:
      | username          | password  | campus                  | configuration toggles                                                                                      | configuration toggles updated                                                                                                      |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD | Accept Calls on Public Holidays,Prompt Gender Preference,Prompt if More than 30 Mins,Prompt for NES Number | Configuration Is Active,Accept Calls on Public Holidays,Prompt Gender Preference,Prompt if More than 30 Mins,Prompt for NES Number |

    #LL-489: Scenario 8: User can perform search using DID or Campus Pin
  @LL-489 @SearchUsingDIDOrCampusPin
  Scenario Outline: User can perform search using DID or Campus Pin
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And user searches for Campus name or DID "<campus name>" by entering valid data in the search field
    And clicks on Search button in DID Campus configuration
    Then the correct search results campus "<campus>" are displayed

    Examples:
      | username          | password  | campus                  | campus name     |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD | Contoso Pty LTD |