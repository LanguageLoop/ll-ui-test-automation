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