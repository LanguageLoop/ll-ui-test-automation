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