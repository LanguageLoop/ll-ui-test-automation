@ODTI
Feature: ODTI features

  Background: Load the Loopedin login page
    Given the looped in login page is opened

 #Scenario 1 - CBO user has multiple campuses - Select any campus from the dropdown and select the desired Start Date and End date filters
  @Regression @RegressionS1 @CBOMultipleCampusSelectCampus
  Scenario Outline: New column displayed for creation date
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
    Then I verify the records count in records counter
    And I verify the ODTI SERVICE CHARGE ID values

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | filter option 3 | filter option index 3 | filter comparator 3 | filter comparator index 3 | filter value 3 | filter value index 3 | username cbo   | password cbo | campus id                                                      | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 01-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 19-01-2023     | 2                    | Campus PIN      | 4                     | Is                  | 4                         | 29449          | 3                    | zenq@cbo11.com | Test1        | 29449 Contoso Pty LTD LYSTERFIELD DRIVE ROXBURGH PARK VIC 3064 | 02-01-2023 | 18-01-2023 |

    #Scenario 2 - CBO user has multiple campuses - Do not select any campus from the dropdown and select the desired Start Date and End date filters
  @Regression @RegressionS2 @CBOMultipleCampusNoCampusSelected
  Scenario Outline: New column displayed for creation date
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    And I get the records count in records counter in Admin
    And I get the ODTI SERVICE CHARGE ID values In Admin
    And the looped in login page is opened
    And I login with "<username cbo>" and "<password cbo>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    Then I verify the records count in records counter
    And I verify the ODTI SERVICE CHARGE ID values

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | username cbo   | password cbo | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 15-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 19-01-2023     | 2                    | zenq@cbo11.com | Test1        | 16-01-2023 | 18-01-2023 |