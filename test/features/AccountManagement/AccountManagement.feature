@Admin
Feature: Account Management features

  Background: Load the Loopedin login page
    Given the looped in login page is opened

  #LL-619 Scenario 1: Account Manager sees Accounts section
  @AccountManagerAccountsSection @LL-619
  Scenario Outline: Account Manager sees Accounts section
    When I login with "<username>" and "<password>"
    And they view the Account Management page
    And they will see the Accounts section displayed
    Then the Create Account button will not be displayed

    Examples:
      | username          | password |
      | TestA@gmail.com   | Test1    |

    #LL-619 Scenario 2: View Staff Group profile
  @ViewStaffGroupProfile @LL-619
  Scenario Outline: View Staff Group profile
    When I login with "<username>" and "<password>"
    And they will see the Accounts section displayed
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The user has clicked the search button
    And they click onto a user "<user account>" who belongs to the Staff Group or Contractor Group
    Then the user profile will be view-only
    And they will not be able to edit a Staff Group or Contractor profile
    And all Edit buttons will be disabled: Terminate User, Reset Password, Edit Profile

    Examples:
      | username        | password | role filter option      | user account |
      | TestA@gmail.com | Test1    | Account Payable Officer | Mei Chia     |