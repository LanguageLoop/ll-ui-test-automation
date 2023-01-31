@ODTIJobsContractor
Feature: ODTI Jobs Contractor features

  Background: Load the Loopedin login page
    Given the looped in login page is opened

 #Scenario 1 - As Contractor user - Select the Start and End date filters that has Jobs to be displayed
  @Regression @RegressionS18 @ContractorJobsDisplayed
  Scenario Outline: Contractor user selects the Start and End date filters that has Jobs to be displayed
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
    And I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    Then The records count in records counter is same as in Admin
    And The ODTI SERVICE CHARGE ID values are in the same order as Admin
    And The results displayed are within the date range "<start date>", "<end date>"

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | filter option 3 | filter option index 3 | filter comparator 3 | filter comparator index 3 | filter value 3 | filter value index 3 | username contractor      | password contractor | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 15-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 21-01-2023     | 2                    | ContractorID    | 4                     | Is                  | 4                         | 1293           | 3                    | luciacheung192@gmail.com | Test1               | 16-01-2023 | 20-01-2023 |

    #Scenario 2 - As Contractor user - Select the Start and End date filters that has no Jobs to be displayed
  @Regression @RegressionS19 @ContractorJobsNotDisplayed
  Scenario Outline: Contractor user selects the Start and End date filters that has no Jobs to be displayed
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
    And The No odti billings to show... message is displayed
    And the looped in login page is opened
    And I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    Then The records count in records counter is same as in Admin
    And The No odti billings to show... message is displayed

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | filter option 3 | filter option index 3 | filter comparator 3 | filter comparator index 3 | filter value 3 | filter value index 3 | username contractor      | password contractor | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 19-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 21-01-2023     | 2                    | ContractorID    | 4                     | Is                  | 4                         | 1293           | 3                    | luciacheung192@gmail.com | Test1               | 20-01-2023 | 20-01-2023 |

    #Scenario 3 - Verify the Columns available in the ODTI Jobs
  @Regression @RegressionS20 @ContractorColumnHeaders
  Scenario Outline: Verify the Columns available in the ODTI Jobs for contractor
    When I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    Then The columns available for ODTI Jobs for the user are "<column headers>"

    Examples:
      | username contractor      | password contractor | column headers                                                                                 |
      | luciacheung192@gmail.com | Test1               | ODTI SERVICE CHARGE ID,CALL START,CALL DURATION,CAMPUS NAME,LANGUAGE,CALL TYPE,INTERPRETER FEE |

    #Scenario 4 - As Contractor user - Verifying if the results displayed contains only exported Jobs
  @Regression @RegressionS21 @ContractorSeesExported
  Scenario Outline: Contractor user can see only exported Jobs
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
    And I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    Then The records count in records counter is same as in Admin
    And The ODTI SERVICE CHARGE ID values are in the same order as Admin
    And The results displayed are within the date range "<start date>", "<end date>"

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | filter option 3 | filter option index 3 | filter comparator 3 | filter comparator index 3 | filter value 3 | filter value index 3 | username contractor      | password contractor | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 22-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 28-01-2023     | 2                    | ContractorID    | 4                     | Is                  | 4                         | 1293           | 3                    | luciacheung192@gmail.com | Test1               | 23-01-2023 | 27-01-2023 |

    #Scenario 5 - As Contractor user - Verify the Job IDs, Campus Name are Unclickable
  @Regression @RegressionS22 @ContractorResultsNotClickable
  Scenario Outline: Contractor user cannot click Job IDs, Campus Name
    When I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    Then The ODTI Service Charge ID and Campus Name results are not clickable and read only

    Examples:
      | username contractor      | password contractor | start date | end date   |
      | luciacheung192@gmail.com | Test1               | 23-01-2023 | 27-01-2023 |

    #Scenario 6 - As Contractor user - select the desired Start Date and End date filters Click on Export to Excel link
  @Regression @RegressionS23 @ContractorRecordsExportExcel
  Scenario Outline: Contractor user can select the desired Start Date and End date filters and Export to Excel
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
    And the looped in login page is opened
    And I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    And The records count in records counter is same as in Admin
    And The results displayed are within the date range "<start date>", "<end date>"
    And I click on Export to Excel link
    Then The Excel file is downloaded

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | filter option 3 | filter option index 3 | filter comparator 3 | filter comparator index 3 | filter value 3 | filter value index 3 | username contractor      | password contractor | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 08-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 14-01-2023     | 2                    | ContractorID    | 4                     | Is                  | 4                         | 1293           | 3                    | luciacheung192@gmail.com | Test1               | 09-01-2023 | 13-01-2023 |

    #Scenario 7 - As Contractor User - select the desired Start Date and End date filters that has more than 500 records
  @Regression @RegressionS24 @ContractorMoreThan500Records
  Scenario Outline: Contractor user selects the Start Date and End date filters that has more than 500 records
    When I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    And I click on actual count arrow button
    Then The actual count of records is greater than expected records "<records count>"

    Examples:
      | username contractor      | password contractor | start date | end date   | records count |
      | csaramella@yahoo.com.au  | Test1               | 01-01-2022 | 01-01-2023 | 500           |