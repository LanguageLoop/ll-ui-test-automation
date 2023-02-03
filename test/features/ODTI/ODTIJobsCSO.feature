@ODTIJobsCBO
Feature: ODTI Jobs CSO features

  Background: Load the Loopedin login page
    Given the looped in login page is opened

 #Scenario 1 - As CSO User - Verifying the default results displayed
  @Regression @RegressionS26 @CSORecordsDisplay
  Scenario Outline: CSO user can see the default results and record status
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    Then The RecordStatus Is Export
    And All the available jobs are displayed

    Examples:
      | username cso   | password cso |
      | zenq@cso10.com | Test1        |

    #Scenario 2 - AS CSO User - Verify the Max records displayed as 500
  @Regression @RegressionS27 @CSORecordsMax500
  Scenario Outline: CSO user can see the Max records displayed as 500
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    Then The RecordStatus Is Export
    And All the available jobs are displayed
    And The records count in records counter has expected records "<expected records>"

    Examples:
      | username cso   | password cso | expected records |
      | zenq@cso10.com | Test1        | 500              |

    #Scenario 3 - AS CSO User -Verifying the default results displayed and click on Export to Excel link
  @Regression @RegressionS28 @CSORecordsExportExcel
  Scenario Outline: CSO user can see default records and click on Export to Excel link
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    Then The RecordStatus Is Export
    And All the available jobs are displayed
    And The records count in records counter has expected records "<expected records>"
    And I click on Export to Excel link
    And The Excel file is downloaded

    Examples:
      | username cso   | password cso | expected records |
      | zenq@cso10.com | Test1        | 500              |

    #Scenario 4 - AS CSO User - Verify the results displayed on performing search by Contractor using the Search field
  @Regression @RegressionS32 @CSOSearchByContractor
  Scenario Outline: CSO user can perform search by Contractor using the Search field
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I enter the search value "<contractor>" in the search field
    Then The records are displayed only for the entered filter value "<Interpreter Name>" under column number "<Interpreter Name column number>"

    Examples:
      | username cso   | password cso | contractor | Interpreter Name | Interpreter Name column number |
      | zenq@cso10.com | Test1        | Majid      | Majid BRAHMAN    | 6                              |

    #Scenario 5 - AS CSO User - Verify the results displayed on performing search by Language using the Search field
  @Regression @RegressionS33 @CSOSearchByLanguage
  Scenario Outline: CSO user can perform search by Language using the Search field
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I enter the search value "<language>" in the search field
    Then The records are displayed only for the entered filter value "<language>" under column number "<Language column number>"

    Examples:
      | username cso   | password cso | language | Language column number |
      | zenq@cso10.com | Test1        | CROATIAN | 5                      |

    #Scenario 6 - AS CSO User - Verify the results displayed on performing search by Contact ID using the Search field
  @Regression @RegressionS34 @CSOSearchByContactID
  Scenario Outline: CSO user can perform search by Contact ID using the Search field
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I enter the search value "<contact ID>" in the search field
    Then The records are displayed only for the entered filter value "<ODTI SERVICE CHARGE ID>" under column number "<ODTI SERVICE CHARGE ID column number>"

    Examples:
      | username cso   | password cso | contact ID   | ODTI SERVICE CHARGE ID | ODTI SERVICE CHARGE ID column number |
      | zenq@cso10.com | Test1        | 197934812168 | 100000002470           | 1                                    |

    #Scenario 7 - AS CSO User - Verify the results displayed on performing search using invalid data on entering in Search field
  @Regression @RegressionS35 @CSOSearchByInvalidData
  Scenario Outline: CSO user sees No odti billings to show message search is performed using invalid data
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I enter the search value "<invalid value>" in the search field
    Then The No odti billings to show... message is displayed

    Examples:
      | username cso   | password cso | invalid value     |
      | zenq@cso10.com | Test1        | AutoInvalidSearch |

    #Scenario 8 - As CSO User - Verify the Columns available in the ODTI Jobs as CSO user
  @Regression @RegressionS29 @CSOColumnHeaders
  Scenario Outline: CSO user has columns available in the ODTI Jobs
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    Then The columns available for ODTI Jobs for the user are "<column headers>"

    Examples:
      | username cso   | password cso | column headers                                                                                                          |
      | zenq@cso10.com | Test1        | ODTI SERVICE CHARGE ID,CALL START,CALL DURATION,CAMPUS NAME,LANGUAGE,INTERPRETER NAME,CALL TYPE,CLIENT CHARGE SUBTOTAL  |

      #Scenario 10 - User should be able to view different pages using pagination when they are more number of records
  @Regression @RegressionS30 @CSOPagination
  Scenario Outline: User should be able to view different pages using pagination when they are more number of records
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I click on page number "<page number>"
    Then I should be navigated to page "<page number>"
    And I click on next page arrow
    And I should be navigated to page "<next page number>"
    And I click on previous page arrow
    And I should be navigated to page "<previous page number>"

      Examples:
      | username cso   | password cso | page number | next page number  | previous page number |
      | zenq@cso10.com | Test1        | 3           | 4                 | 3                    |

    #Scenario 11 - AS CSO User - User should be able to click jobs under 'ODTI SERVICE CHARGE ID' column
  @Regression @RegressionS36 @CSOClicksJobID
  Scenario Outline: CSO user should be able to click jobs under ODTI SERVICE CHARGE ID column
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click on a Job ID value under ODTI SERVICE CHARGE ID column
    Then I should be navigated to the Job detail page "<job detail page url>" of the respective job that is clicked

    Examples:
      | username cso   | password cso | job detail page url        |
      | zenq@cso10.com | Test1        | OnDemandTI/JobDetails.aspx |

    #Scenario 14 - As CSO User - Applying Advanced Search Filters
  @Regression @RegressionS39 @CSOAdvancedFilters
  Scenario Outline: CSO user can apply advanced search filters
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    Then The records are displayed only for the entered filter value "<language>" under column number "<Language column number>"
    And The records are displayed only for the entered filter value "<Interpreter Name>" under column number "<Interpreter Name column number>"

    Examples:
      | username cso   | password cso | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | language | Language column number | Interpreter Name | Interpreter Name column number |
      | zenq@cso10.com | Test1        | Language        | 2                     | Is                  | 2                         | zz-Zenq2       | 2                    | Contractor Name | 3                     | Is                  | 3                         | Sunia TUITUPOU | 1                    | zz-Zenq2 | 5                      | Sunia TUITUPOU   | 6                              |

    #Scenario 15 - As CSO User - Applying Advanced Search Filters and verify that results  are display only for the selected filters and the total records value should be updated
  @Regression @RegressionS40 @CSOAdvancedFilterRecords
  Scenario Outline: CSO user can apply advanced search filters
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I get the records count in ODTI before adding filters
    And I click Advanced search link in Admin
    And I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    Then The total record value should be updated as per the number of records displayed

    Examples:
      | username cso   | password cso | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 |
      | zenq@cso10.com | Test1        | Language        | 2                     | Is                  | 2                         | zz-Zenq2       | 2                    | Contractor Name | 3                     | Is                  | 3                         | Sunia TUITUPOU | 1                    |

    #Scenario 16 - As CSO User - Removing the applied Advanced Search filters
  @Regression @RegressionS41 @CSOAdvancedFiltersRemoved
  Scenario Outline: CSO user can apply advanced search filters
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I get the records count in ODTI before adding filters
    And I click Advanced search link in Admin
    And I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    And The total record value should be updated as per the number of records displayed
    And I Click on the X Icon beside the filters applied
    Then All the Jobs are displayed as no filters are applied and the number of records gets updated

    Examples:
      | username cso   | password cso | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 |
      | zenq@cso10.com | Test1        | Language        | 2                     | Is                  | 2                         | zz-Zenq2       | 2                    | Contractor Name | 3                     | Is                  | 3                         | Sunia TUITUPOU | 1                    |