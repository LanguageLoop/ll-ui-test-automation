@AccountManagement
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
      | TestA@gmail.com | Test1    | Contract Manager   | Britney Spears | TestAutoFirst | TestAutoLast | 01-01-1996 | Test office location | 03 9875 4612   | 12 3456 7890 |

    #LL-619 Scenario 5: Contractor / Staff group roles hidden
  @ContractorStaffGroupRolesHidden @LL-619
  Scenario Outline: Contractor and Staff group roles hidden
    When I login with "<username>" and "<password>"
    And they will see the Accounts section displayed
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The user has clicked the search button
    And they click onto a user "<user account>" who belongs to the Client Group
    And they are taken to the Account Profile page
    And they click the Edit Profile button
    And they view the Roles section
    Then they will only see the Client Group roles
    And the Client Group toggles "<client group roles>" will be enabled
    And the Account Manager can change the toggles "<client group roles>" as per existing logic
    And all other roles "<other roles>" will be hidden

    Examples:
      | username        | password | role filter option | user account   | client group roles                                                                                  | other roles                  |
      | TestA@gmail.com | Test1    | Contract Manager   | Britney Spears | Bookings Officer,Campus Manager,Contract Manager,Organisation Finance Manager,VideoLoop Client Role | Contractor Group,Staff Group |

    #LL-619 Scenario 6a: Save Client group profile
  @SaveClientGroupProfile @LL-619
  Scenario Outline: Save Client group profile
    When I login with "<username>" and "<password>"
    And they will see the Accounts section displayed
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The user has clicked the search button
    And they click onto a user "<user account>" who belongs to the Client Group
    And they are taken to the Account Profile page
    And they click the Edit Profile button
    And they will be able to edit the profile fields: "<firstName>", "<lastName>", "<birthDay>", "<officeLocation>", "<landLineNumber>", "<mobileNumber>"
    And I click save detail button
    Then I see the message User profile was successfully saved
    And they are taken to the Account Profile page
    And the saved data "<expectedData>" will be displayed
    And they click the Edit Profile button
    And the data changes are reset
    And I click save detail button
    And they are taken to the Account Profile page

    Examples:
      | username        | password | role filter option | user account   | firstName | lastName | birthDay   | officeLocation       | landLineNumber | mobileNumber | expectedData                                                                   |
      | TestA@gmail.com | Test1    | Contract Manager   | Britney Spears | Britney   | Spears   | 01-01-1996 | Test office location | 03 9875 4612   | 12 3456 7890 | 1st January 1996,Britney Spears,Test office location,03 9875 4612,12 3456 7890 |

    #LL-619 Scenario 6b: Cancel Client group profile edits
  @CancelClientGroupProfile @LL-619
  Scenario Outline: Cancel Client group profile edits
    When I login with "<username>" and "<password>"
    And they will see the Accounts section displayed
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The user has clicked the search button
    And they click onto a user "<user account>" who belongs to the Client Group
    And they are taken to the Account Profile page
    And they click the Edit Profile button
    And they will be able to edit the profile fields: "<firstName>", "<lastName>", "<birthDay>", "<officeLocation>", "<landLineNumber>", "<mobileNumber>"
    And they click Cancel button
    Then the data "<expectedData>" will be not saved
    And they are taken to the Account Profile page

    Examples:
      | username        | password | role filter option | user account   | firstName | lastName | birthDay   | officeLocation       | landLineNumber | mobileNumber | expectedData                                       |
      | TestA@gmail.com | Test1    | Contract Manager   | Britney Spears | Britney   | Spears   | 01-01-1996 | Test office location | 03 9875 4612   | 12 3456 7890 | 1st January 1996,Test office location,12 3456 7890 |

    #LL-43 Scenario 1 - Edit email address
  @EditEmailAddress @LL-43
  Scenario Outline: Edit email address
    When I login with "<username>" and "<password>"
    And they will see the Accounts section displayed
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The user has clicked the search button
    And they click onto a user "<user account>" who belongs to the Client Group
    And they are taken to the Account Profile page
    And they will only see the Client Group roles
    And the user clicks on the edit icon next to the email address
    Then the user will be taken to the edit email pop up where they can change the email address

    Examples:
      | username        | password | role filter option | user account   |
      | TestA@gmail.com | Test1    | Contract Manager   | Britney Spears |

    #LL-43 Scenario 6 - User tries to enter email which already exists
  @EnteredEmailAlreadyExists @LL-43
  Scenario Outline: User tries to enter email which already exists
    When I login with "<username>" and "<password>"
    And they will see the Accounts section displayed
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The user has clicked the search button
    And they click onto a user "<user account>" who belongs to the Client Group
    And they are taken to the Account Profile page
    And the user clicks on the edit icon next to the email address
    And the user will be taken to the edit email pop up where they can change the email address
    And has entered a new email address "<emailAddress>","<emailAddress>"
    And the user presses ‘Change Email’ button
    Then a message ‘Email address already exist.’ appears

    Examples:
      | username          | password  | role filter option | user account   | emailAddress                |
      | LLAdmin@looped.in | Octopus@6 | Contract Manager   | Britney Spears | britneyspears@police.gov.au |

    #LL-43 Scenario 7 - User edits the email and click on Cancel icon in the popup
  @EditEmailAndCancel @LL-43
  Scenario Outline: User edits the email and click on Cancel icon in the popup
    When I login with "<username>" and "<password>"
    And they will see the Accounts section displayed
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The user has clicked the search button
    And they click onto a user "<user account>" who belongs to the Client Group
    And they are taken to the Account Profile page
    And the user clicks on the edit icon next to the email address
    And the user will be taken to the edit email pop up where they can change the email address
    And has entered a new email address "<emailAddress>","<emailAddress>"
    And the user clicks 'X' icon
    Then the email address "<emailAddress>" should not be updated


    Examples:
      | username          | password  | role filter option | user account   | emailAddress             |
      | LLAdmin@looped.in | Octopus@6 | Contract Manager   | Britney Spears | testEmail1@police.gov.au |

    #LL-43 Scenario 8 - User enters different emails in New Email field and Confirm Email field
  @EmailsDoNotMatch @LL-43
  Scenario Outline: User enters different emails in New Email field and Confirm Email field
    When I login with "<username>" and "<password>"
    And they will see the Accounts section displayed
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The user has clicked the search button
    And they click onto a user "<user account>" who belongs to the Client Group
    And they are taken to the Account Profile page
    And the user clicks on the edit icon next to the email address
    And the user will be taken to the edit email pop up where they can change the email address
    And has entered a new email address "<newUserEmailAddress>","<confirmEmailAddress>"
    And the user presses ‘Change Email’ button
    Then a message ‘Email and confirm email do not match.’ appears

    Examples:
      | username          | password  | role filter option | user account   | newUserEmailAddress         | confirmEmailAddress      |
      | LLAdmin@looped.in | Octopus@6 | Contract Manager   | Britney Spears | britneyspears@police.gov.au | testEmail1@police.gov.au |

    #LL-43 Scenario 4a - Login with new email - new email not confirmed  (existing user)
  @LoginNewEmailNewNotConfirmed @LL-43
  Scenario Outline: Login with new email - new email not confirmed  (existing user)
    When I login with "<username>" and "<password>"
    And they will see the Accounts section displayed
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The user has clicked the search button
    And they click onto a user "<user account>" who belongs to the Client Group
    And they are taken to the Account Profile page
    And the User Status is Active or Sleeping
    And the user clicks on the edit icon next to the email address
    And the user will be taken to the edit email pop up where they can change the email address
    And has entered a new email address "<newUserEmailAddress>","<newUserEmailAddress>"
    And the user presses ‘Change Email’ button
    And the confirmation email is sent to the email address message is displayed
    And the looped in login page is opened
    And they login with their updated email "<newUserEmailAddress>" and "<newUserPassword>"
    Then they will not be able to login
    And the ‘Invalid username or password.’ error message will be displayed

    Examples:
      | username          | password  | role filter option | user account   | newUserEmailAddress      | newUserPassword |
      | LLAdmin@looped.in | Octopus@6 | Contract Manager   | Britney Spears | testEmail1@police.gov.au | Test1           |

    #LL-43 Scenario 4b - Login with old email - new email not confirmed  (existing user)
  @LoginOldEmailNewNotConfirmed @LL-43
  Scenario Outline: Login with old email - new email not confirmed  (existing user)
    When I login with "<username>" and "<password>"
    And they will see the Accounts section displayed
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The user has clicked the search button
    And they click onto a user "<user account>" who belongs to the Client Group
    And they are taken to the Account Profile page
    And the User Status is Active or Sleeping
    And the user clicks on the edit icon next to the email address
    And the user will be taken to the edit email pop up where they can change the email address
    And has entered a new email address "<newUserEmailAddress>","<newUserEmailAddress>"
    And the user presses ‘Change Email’ button
    And the confirmation email is sent to the email address message is displayed
    And the looped in login page is opened
    And I login with "<oldUserEmail>" and "<oldUserPassword>"
    Then they will be able to login

    Examples:
      | username          | password  | role filter option | user account   | newUserEmailAddress      | oldUserEmail                | oldUserPassword |
      | LLAdmin@looped.in | Octopus@6 | Contract Manager   | Britney Spears | testEmail1@police.gov.au | britneyspears@police.gov.au | Test1           |