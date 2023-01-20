@ODTI
Feature: ODTI features

  Background: Load the Loopedin login page
    Given the looped in login page is opened

 #Scenario 1 - CBO user has multiple campuses - Select any campus from the dropdown and select the desired Start Date and End date filters
  @Regression @RegressionS1 @CBOMultipleCampusSelectCampus
  Scenario Outline: CBO user has multiple campuses Select any campus and add desired Start Date and End date filter
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 3>" "<filter option index 3>", "<filter comparator 3>" "<filter comparator index 3>", "<filter value 3>" "<filter value index 3>"
    And I get the records count in records counter in Admin
    And I get the ODTI SERVICE CHARGE ID values In Admin
    And the looped in login page is opened
    And I login with "<username cbo>" and "<password cbo>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I select campus "<campus id>" from the Campus dropdown
    And I enter Start Date "<start date>" and End Date "<end date>"
    Then The records count in records counter is same as in Admin
    And The ODTI SERVICE CHARGE ID values are in the same order as Admin
    And The results displayed are within the date range "<start date>", "<end date>"

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | filter option 3 | filter option index 3 | filter comparator 3 | filter comparator index 3 | filter value 3 | filter value index 3 | username cbo   | password cbo | campus id                                                      | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 01-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 19-01-2023     | 2                    | Campus PIN      | 4                     | Is                  | 4                         | 29449          | 3                    | zenq@cbo11.com | Test1        | 29449 Contoso Pty LTD LYSTERFIELD DRIVE ROXBURGH PARK VIC 3064 | 02-01-2023 | 18-01-2023 |

    #Scenario 2 - CBO user has multiple campuses - Do not select any campus from the dropdown and select the desired Start Date and End date filters
  @Regression @RegressionS2 @CBOMultipleCampusNoCampusSelected
  Scenario Outline: CBO user has multiple campuses Do Not Select any campus and add desired Start Date and End date filters
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 3>" "<filter option index 3>", "<filter comparator 3>" "<filter comparator index 3>", "<filter value 3>" "<filter value index 3>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 4>" "<filter option index 4>", "<filter comparator 4>" "<filter comparator index 4>", "<filter value 4>" "<filter value index 4>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 5>" "<filter option index 5>", "<filter comparator 5>" "<filter comparator index 5>", "<filter value 5>" "<filter value index 5>"
    And I get the records count in records counter in Admin
    And I get the ODTI SERVICE CHARGE ID values In Admin
    And the looped in login page is opened
    And I login with "<username cbo>" and "<password cbo>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    Then The records count in records counter is same as in Admin
    And The ODTI SERVICE CHARGE ID values are in the same order as Admin
    And The results displayed are within the date range "<start date>", "<end date>"

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | filter option 3 | filter option index 3 | filter comparator 3 | filter comparator index 3 | filter value 3 | filter value index 3 | filter option 4 | filter option index 4 | filter comparator 4 | filter comparator index 4 | filter value 4 | filter value index 4 | filter option 5 | filter option index 5 | filter comparator 5 | filter comparator index 5 | filter value 5 | filter value index 5 | username cbo   | password cbo | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 15-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 19-01-2023     | 2                    | Campus PIN      | 4                     | Is                  | 4                         | 48994          | 3                    | Campus PIN      | 5                     | Is                  | 5                         | 29449          | 4                    | Campus PIN      | 6                     | Is                  | 6                         | 30340          | 5                    | zenq@cbo11.com | Test1        | 16-01-2023 | 18-01-2023 |

    #Scenario 3 - CBO user has only one campus - Select the campus from the dropdown and select the desired Start Date and End date filters
  @Regression @RegressionS3 @CBOOneCampusSelectCampus
  Scenario Outline: CBO user has only one campus Select the campus and add desired Start Date and End date filters
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 3>" "<filter option index 3>", "<filter comparator 3>" "<filter comparator index 3>", "<filter value 3>" "<filter value index 3>"
    And I get the records count in records counter in Admin
    And I get the ODTI SERVICE CHARGE ID values In Admin
    And the looped in login page is opened
    And I login with "<username cbo>" and "<password cbo>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I select campus "<campus id>" from the Campus dropdown
    And I enter Start Date "<start date>" and End Date "<end date>"
    Then The records count in records counter is same as in Admin
    And The ODTI SERVICE CHARGE ID values are in the same order as Admin
    And The results displayed are within the date range "<start date>", "<end date>"

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | filter option 3 | filter option index 3 | filter comparator 3 | filter comparator index 3 | filter value 3 | filter value index 3 | username cbo   | password cbo | campus id                                                      | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 01-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 19-01-2023     | 2                    | Campus PIN      | 4                     | Is                  | 4                         | 29449          | 3                    | zenq@cbo10.com | Test1        | 29449 Contoso Pty LTD LYSTERFIELD DRIVE ROXBURGH PARK VIC 3064 | 02-01-2023 | 18-01-2023 |

    #Scenario 4 - CBO user has one campus - Do not select any campus from the dropdown and select the desired Start Date and End date filters
  @Regression @RegressionS4 @CBOOneCampusNoCampusSelected
  Scenario Outline: CBO user has only one campus Do not select any campus and add desired Start Date and End date filters
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 3>" "<filter option index 3>", "<filter comparator 3>" "<filter comparator index 3>", "<filter value 3>" "<filter value index 3>"
    And I get the records count in records counter in Admin
    And I get the ODTI SERVICE CHARGE ID values In Admin
    And the looped in login page is opened
    And I login with "<username cbo>" and "<password cbo>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    Then The records count in records counter is same as in Admin
    And The ODTI SERVICE CHARGE ID values are in the same order as Admin
    And The results displayed are within the date range "<start date>", "<end date>"

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | filter option 3 | filter option index 3 | filter comparator 3 | filter comparator index 3 | filter value 3 | filter value index 3 | username cbo   | password cbo | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 01-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 19-01-2023     | 2                    | Campus PIN      | 4                     | Is                  | 4                         | 29449          | 3                    | zenq@cbo10.com | Test1        | 02-01-2023 | 18-01-2023 |

     #Scenario 5 - Verify the Columns available in the ODTI Jobs
  @Regression @RegressionS5 @CBOColumnHeaders
  Scenario Outline: Verify the Columns available in the ODTI Jobs
    When I login with "<username cbo>" and "<password cbo>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    Then The columns available for ODTI Jobs for the user are "<column headers>"

    Examples:
      | username cbo   | password cbo | column headers                                                                                  |
      | zenq@cbo10.com | Test1        | ODTI SERVICE CHARGE ID,CALL START,CALL DURATION,CAMPUS NAME,LANGUAGE,INTERPRETER NAME,CALL TYPE |