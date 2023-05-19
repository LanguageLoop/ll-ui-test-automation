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

    #LL-489: Scenario 9: User can perform search using Service Type
  @LL-489 @SearchUsingServiceType
  Scenario Outline: User can perform search using Service Type
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And user selects any Service Type "<service type>" from the dropdown
    And clicks on Search button in DID Campus configuration
    Then the correct search results service type "<service type>" are displayed

    Examples:
      | username          | password  | service type |
      | LLAdmin@looped.in | Octopus@6 | General TI   |

    #LL-515: Scenario 1a - Display List of DID Configurations
  @LL-515 @DisplayListDIDConfigurations
  Scenario Outline: Display List of DID Configurations
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    Then the user sees a table that lists all the DID configurations defined
    And each row shows the "<table headers>" and "<table row links>" links under DID Configuration tab
    And the user sees a New Configuration button under DID Configuration tab

    Examples:
      | username          | password  | table headers                     | table row links |
      | LLAdmin@looped.in | Octopus@6 | DID,Service Type,Campus,Is Active | Edit,Duplicate  |

    #LL-515: Scenario 1b - Display List of Campus Configurations
  @LL-515 @DisplayListCampusConfigurations
  Scenario Outline: Display List of Campus Configurations
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    Then the user sees a table that lists all the Campus configurations defined
    And each row shows the "<table headers>" and "<table row links>" links under Campus Configuration tab
    And the user sees a New Configuration button under Campus Configuration tab

    Examples:
      | username          | password  | table headers                     | table row links |
      | LLAdmin@looped.in | Octopus@6 | Campus,Service Type,DID,Is Active | Edit,Duplicate  |

    #LL-515: Scenario 2a - Clicking “New Configuration”
  @LL-515 @ClickDIDNewConfiguration
  Scenario Outline: Clicking DID New Configuration
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the user has clicked on the New Configuration button under DID Configuration tab
    Then the user is navigated to the DID Configuration Details screen
    And a blank form is shown in New DID Configuration

    Examples:
      | username          | password  |
      | LLAdmin@looped.in | Octopus@6 |

    #LL-515: Scenario 2b - Clicking “New Configuration”
  @LL-515 @ClickCampusNewConfiguration
  Scenario Outline: Clicking Campus New Configuration
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And the user has clicked on the New Configuration button under Campus Configuration tab
    Then the new Campus Configuration Page is displayed
    And a blank form is shown in New Campus Configuration

    Examples:
      | username          | password  |
      | LLAdmin@looped.in | Octopus@6 |

    #LL-515: Scenario 3a - Clicking existing configuration Edit link
  @LL-515 @DIDConfigurationEditLink
  Scenario Outline: Clicking existing DID configuration Edit link
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the Admin is on the Edit DID Configuration screen of Campus "<campus>"
    Then the user is navigated to the Edit DID Configuration screen
    And the existing configuration is shown

    Examples:
      | username          | password  | campus                  |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD |

    #LL-515: Scenario 3b - Clicking existing configuration Edit link
  @LL-489 @CampusConfigurationEditLink
  Scenario Outline: Clicking existing Campus configuration Edit link
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And the Admin is on the Edit Campus Configuration screen of Campus "<campus>"
    Then the Edit Campus Configuration Page is displayed
    And the saved configuration is displayed

    Examples:
      | username          | password  | campus                  |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD |

    #LL-515: Scenario 4a - Clicking existing configuration Duplicate link
  @LL-515 @DIDConfigurationDuplicateLink
  Scenario Outline: Clicking existing DID configuration Duplicate link
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the Admin is on the Duplicate DID Configuration screen of Campus "<campus>"
    Then the user is navigated to the DID Configuration Details screen
    And a copy of the existing DID configuration is shown upon clicking duplicate
    And the DID is blank in existing DID configuration upon clicking duplicate

    Examples:
      | username          | password  | campus                  |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD |

    #LL-515: Scenario 4b - Clicking existing configuration Duplicate link
  @LL-515 @CampusConfigurationDuplicateLink
  Scenario Outline: Clicking existing Campus configuration Duplicate link
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And the Admin is on the Duplicate Campus Configuration screen of Campus "<campus>"
    Then the new Campus Configuration Page is displayed
    And the saved configuration is displayed upon clicking duplicate
    And the Campus PIN is blank upon clicking duplicate

    Examples:
      | username          | password  | campus                  |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD |

    #LL-515: Scenario 5 - Clicking on a Campus name
  @LL-515 @ClickCampusNameConfiguration
  Scenario Outline: Clicking on a Campus name
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And the Admin has clicked on the Campus Name "<campus>" in the campus configuration table
    Then they will be navigated to the Campus page
    And the ODTI DID Configurations page is opened
    And the Admin is on the DID Configurations Tab
    And the Admin has clicked on the Campus Name "<campus>" in the DID configuration table
    And they will be navigated to the Campus page

    Examples:
      | username          | password  | campus                  |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD |

    #LL-515: Scenario 6 - Filter
  @LL-515 @FilterCampusConfiguration
  Scenario Outline: Filter Campus Configuration
    When I login with "<username>" and "<password>"
    And the ODTI DID Configurations page is opened
    And the Admin clicks on Campus Configuration tab
    And user searches for Campus name or DID "<campus name>" by entering valid data in the search field
    And user selects any Service Type "<service type>" from the dropdown
    And clicks on Search button in DID Campus configuration
    Then the correct search results campus "<campus>" are displayed
    Then the correct search results service type "<service type>" are displayed

    Examples:
      | username          | password  | campus                  | campus name     | service type |
      | LLAdmin@looped.in | Octopus@6 | 29449 - Contoso Pty LTD | Contoso Pty LTD | General TI   |