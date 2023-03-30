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