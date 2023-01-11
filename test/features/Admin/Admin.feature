@Admin
Feature: Admin features

  Background: Load the Loopedin login page
    Given the looped in login page is opened
   

 #LL-608 Scenario 1 - new column displayed for creation date
  @NewColumnCreationDate
  Scenario Outline: New column displayed for creation date
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Accounts section on the Admin page
    And They view the table
    Then They will see a Creation Date column
    And This will display after the Username column
    And Be displayed before the Mobile Phone column
    And The table will be sorted by Creation Date by default newest at the top

    Examples:
      | username          | password  |
      | LLAdmin@looped.in | Octopus@6 |