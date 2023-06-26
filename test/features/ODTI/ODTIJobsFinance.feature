@ODTIJobsFinance
Feature: ODTI Jobs Finance features

  Background: Load the Loopedin login page
    Given the looped in login page is opened

 #LL-627 Scenario 1 - Finance user sees ODTI menu item
  @LL-627 @FinanceUserSeesODTIMenu
  Scenario Outline: Finance user sees ODTI menu item
    When I login with "<username>" and "<password>"
    And they view the main top navigation
    Then they will see the ODTI menu item
    And it will appear between the Interpreting and Account Management menu items

    Examples:
      | username              | password |
      | testauto@finance1.com | Test1    |

  #LL-627 Scenario 3 - CS user clicks ODTI menu item
  @LL-627 @CSUserClicksODTIMenuItem
  Scenario Outline: CS user clicks ODTI menu item
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    Then they will see the ODTI Interpreters page by default
    And they will see the ODTI Jobs option in the page dropdown
    And they can swap to the ODTI Jobs page

    Examples:
      | username       | password |
      | zenq@cso10.com | Test1    |

    #LL-627 Scenario 4 - CS / Finance user views ODTI Jobs search section
  @LL-627 @FinanceViewsODTIJobSearch
  Scenario Outline: CS / Finance user views ODTI Jobs search section
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    Then they will see the following fields by default in the Search section: Search by contractor, language and contact ID, RecordStatus
    And the following filters can be added from Advanced Search as per the Jobs Management page: "<advanced search filter options>"

    Examples:
      | username              | password | advanced search filter options                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
      | testauto@finance1.com | Test1    | ServiceChargeID,OperatorFlag,Campus PIN,Campus Name,ContractorID,Contractor Name,DID Number,Language,Job Date,Exported (INVP),Exported (PAYP),VITSAHFlag,ContractorAHFlag,InterpreterDuration (In Sec),Bill To Code,Contract name,ClientChargeTotalExGST,InterpreterPaymentTotalExGST,NESPhone,NESConnectionFee,Custom Fields,FiveMinuteRule,RecordStatus,Budget Code - Dimension List,Client Type - Dimension List,PRP dim - Dimension List,Region - Dimension List,Reporting - Dimension List,Service Type - Dimension List,Shortcode - Dimension List,ShortcodeNew - Dimension List |

    #LL-627 Scenario 5a - CS user views ODTI Jobs table
  @LL-627 @CSUserViewsODTIJobsTable
  Scenario Outline: CS user views ODTI Jobs table
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they will see a table
    And this will only display jobs that have been Completed Billing & Merging processes done
    Then The columns available for ODTI Jobs for the user are "<column headers>"
    And the relevant information will be shown under each column
    And ODTI Service Charge ID, Campus Name and Interpreter Name will all be hyperlinked and in bold font weight
    And the number of records will be displayed at the bottom of the table as per existing functionality
    And the user will not see the "<column header not displayed>" column

    Examples:
      | username       | password | column headers                                                                                                         | column header not displayed     |
      | zenq@cso10.com | Test1    | ODTI SERVICE CHARGE ID,CALL START,CALL DURATION,CAMPUS NAME,LANGUAGE,INTERPRETER NAME,CALL TYPE,CLIENT CHARGE SUBTOTAL | INTERPRETER CHARGE TOTAL EX GST |

    #LL-627 Scenario 5b - Finance user views ODTI Jobs table
  @LL-627 @FinanceUserViewsODTIJobsTable
  Scenario Outline: Finance user views ODTI Jobs table
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they will see a table
    And this will only display jobs that have been Completed Billing & Merging processes done
    Then The columns available for ODTI Jobs for the user are "<column headers>"
    And the relevant information will be shown under each column
    And ODTI Service Charge ID, Campus Name and Interpreter Name will all be hyperlinked and in bold font weight
    And the number of records will be displayed at the bottom of the table as per existing functionality

    Examples:
      | username              | password | column headers                                                                                                                                         |
      | testauto@finance1.com | Test1    | ODTI SERVICE CHARGE ID,CALL START,CALL DURATION,CAMPUS NAME,LANGUAGE,INTERPRETER NAME,CALL TYPE,CLIENT CHARGE SUBTOTAL,INTERPRETER CHARGE TOTAL EX GST |

    #LL-627 Scenario 6 - CS / Finance user clicks a hyperlink
  @LL-627 @FinanceClicksHyperlink
  Scenario Outline: CS / Finance user clicks a hyperlink
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they will see a table
    And they click the ODTI Service Charge ID hyperlink
    Then they are navigated to the Job Details page in a new tab
    And they click the Campus Name hyperlink
    And they are navigated to the Campus Details page in a new tab
    And they click the Interpreter Name
    And they are navigated to the Interpreter’s Profile page in a new tab

    Examples:
      | username              | password |
      | testauto@finance1.com | Test1    |

    #LL-676 Scenario 1a: Must select valid campus pin
  @LL-676 @MustSelectValidCampusPin
  Scenario Outline: Must select valid campus pin
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they will see a table
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And I want to change the campus pin by clicking on the Edit icon
    And I click on Migrate & Recalculate Job Fee without selecting a new campus pin
    Then an inline message in red will appear New PIN must be selected and valid

    Examples:
      | username              | password |
      | testauto@finance1.com | Test1    |

    #LL-676 Scenario 1b: New campus pin is for a different contract
  @LL-676 @NewCampusPinDifferentContract
  Scenario Outline: New campus pin is for a different contract
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they will see a table
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And I want to change the campus pin by clicking on the Edit icon
    And I select the new campus pin "<new campus pin>" which is for a different contract
    Then a pop up message will appear before I can proceed The new campus pin is for a different contract, are you sure you want to proceed

    Examples:
      | username              | password | new campus pin |
      | testauto@finance1.com | Test1    | 33124          |

    #LL-676 Scenario 1c: The rate schedule is available for both campus contracts e.g. PH rate, BH hours
  @LL-676 @RateScheduleAvailableCampusContracts
  Scenario Outline: The rate schedule is available for both campus contracts e.g. PH rate, BH hours
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they will see a table
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And I want to change the campus pin by clicking on the Edit icon
    And I select the new campus pin "<new campus pin>" which is for a different contract
    And I click OK on alert popups after selecting the a new campus pin
    And I click on Migrate & Recalculate Job Fee after selecting a new campus pin
    Then an following error message will appear The Job PIN could not be migrated No contract rate found for Contract ID: XX’ and will not allow the user to proceed with that PIN

    Examples:
      | username              | password | new campus pin |
      | testauto@finance1.com | Test1    | 32548          |

    #LL-676 Scenario 1d: Validation for Service Type
  @LL-676 @ValidationServiceType
  Scenario Outline: Validation for Service Type
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they will see a table
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And I want to change the campus pin by clicking on the Edit icon
    And I select the new campus pin "<new campus pin>" which is for a different contract
    And a pop up message will appear before I can proceed The new campus pin is for a different contract, are you sure you want to proceed
    Then a message will appear Service Type is not enabled, do you want to proceed

    Examples:
      | username              | password | new campus pin |
      | testauto@finance1.com | Test1    | 33124          |

    #LL-676 Scenario 1e: All mandatory custom field must completed
  @LL-676 @MandatoryCustomFieldsMustCompleted
  Scenario Outline: All mandatory custom field must completed
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they will see a table
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And I want to change the campus pin by clicking on the Edit icon
    And I select the new campus pin "<new campus pin>" which is for a different contract
    And a pop up message will appear before I can proceed The new campus pin is for a different contract, are you sure you want to proceed
    And I click on Migrate & Recalculate Job Fee after selecting a new campus pin
    Then an inline message in red will appear Please ensure that all mandatory custom fields are completed

    Examples:
      | username              | password | new campus pin |
      | testauto@finance1.com | Test1    | 30889          |

    #LL-676 Scenario 3: Trying to select Inactive campus pin from Find Campus PIN popup
  @LL-676 @TrySelectInactiveCampusPin
  Scenario Outline: Trying to select Inactive campus pin from Find Campus PIN popup
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they will see a table
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And I want to change the campus pin by clicking on the Edit icon
    Then a pop up will display the campus pin "<new campus pin>" in the results, and on hovering over message Campus is disabled

    Examples:
      | username              | password | new campus pin |
      | testauto@finance1.com | Test1    | 28063          |


    #LL-676 Scenario 4: Entering the campus pin that does not exists in Find Campus PIN popup
  @LL-676 @EnterCampusPinThatDoesNotExist
  Scenario Outline: Entering the campus pin that does not exists in Find Campus PIN popup
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they will see a table
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And I want to change the campus pin by clicking on the Edit icon
    And I enter the campus pin "<new campus pin>" which does not exist
    Then a pop up will display a message No campus PIN to show…

    Examples:
      | username              | password | new campus pin |
      | testauto@finance1.com | Test1    | 999999         |