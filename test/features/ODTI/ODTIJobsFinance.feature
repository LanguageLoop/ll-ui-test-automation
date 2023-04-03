@ODTIJobsCBO
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