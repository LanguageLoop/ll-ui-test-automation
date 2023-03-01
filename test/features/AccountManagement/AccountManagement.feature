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

    #LL-619 Scenario 3: View Client Group profile
  @ViewClientGroupProfile @LL-619
  Scenario Outline: View Client Group profile
    When I login with "<username>" and "<password>"
    And they will see the Accounts section displayed
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The user has clicked the search button
    And they click onto a user "<user account>" who belongs to the Client Group
    Then they are taken to the Account Profile page
    And the Edit Profile, Terminate User & Reset Password buttons are enabled

    Examples:
      | username        | password | role filter option | user account   |
      | TestA@gmail.com | Test1    | Contract Manager   | Britney Spears |

    #LL-619 Scenario 3b: View user belonging to Client and Staff groups
  @ViewClientAndStaffGroupProfile @LL-619
  Scenario Outline: View user belonging to Client and Staff groups
    When I login with "<username>" and "<password>"
    And they will see the Accounts section displayed
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The user has clicked the search button
    And they click onto a user "<user account>" who belongs to both the Staff and Client Group
    Then they are taken to the Account Profile page
    And the user profile will be view-only
    And they will not be able to edit the profile
    And all Edit buttons will be disabled: Terminate User, Reset Password, Edit Profile

    Examples:
      | username        | password | role filter option           | user account        |
      | TestA@gmail.com | Test1    | Organisation Finance Manager | Automation Tester1  |

    #LL-619 Scenario 4: Edit Client Group Profile
  @EditClientGroupProfile @LL-619
  Scenario Outline: Edit Client Group Profile
    When I login with "<username>" and "<password>"
    And they will see the Accounts section displayed
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The user has clicked the search button
    And they click onto a user "<user account>" who belongs to the Client Group
    And they are taken to the Account Profile page
    And they click the Edit Profile button
    Then they will be able to edit the profile fields: "<firstName>", "<lastName>", "<birthDay>", "<officeLocation>", "<landLineNumber>", "<mobileNumber>"
    And they will not be able to edit Email and Start Date Time fields

    Examples:
      | username        | password | role filter option | user account   | firstName     | lastName     | birthDay   | officeLocation       | landLineNumber | mobileNumber |
      | TestA@gmail.com | Test1    | Contract Manager   | Britney Spears | TestAutoFirst | TestAutoLast | 01-01-1996 | Test office location | 03 9875 4612   | 1234567890   |