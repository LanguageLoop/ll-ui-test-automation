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