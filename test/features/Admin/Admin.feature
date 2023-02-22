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

  #LL-608 Scenario 2 - Reverse order sort on click (existing logic)
  @ReverseOrderCreationDate
  Scenario Outline: Reverse order sort on click (existing logic)
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Accounts section on the Admin page
    And They will see a Creation Date column
    And They click the Creation Date column header
    Then The table order will be reversed and will be sorted by oldest-newest Creation Date

    Examples:
      | username          | password  |
      | LLAdmin@looped.in | Octopus@6 |

  #LL-607 Scenario 1 - view dropdown
  @ViewRoleDropdown
  Scenario Outline: View dropdown
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Accounts section on the Admin page
    And They view the table
    Then They will see a Role filter dropdown
    And This will be below the search field
    And The options will be grouped into the following labels: "<Client Group Label>","<Contractor Group Label>","<Staff Group Label>"
    And These labels "<Client Group Label>","<Contractor Group Label>","<Staff Group Label>" are not clickable

    Examples:
      | username          | password  | Client Group Label | Contractor Group Label | Staff Group Label |
      | LLAdmin@looped.in | Octopus@6 | Client Group       | Contractor Group       | Staff Group       |

  #LL-607 Scenario 2 - select option from dropdown
  @SelectOptionRoleDropdown
  Scenario Outline: Select option from dropdown
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Accounts section on the Admin page
    And They view the table
    And They will see a Role filter dropdown
    And The Admin or Internal user has clicked the Role filter dropdown
    Then They will see the following child options in the order under each label: Client Group "<Client Group Options>" Contractor Group "<Contractor Group Options>" Staff Group"<Staff Group Options>"
    And These options Client Group "<Client Group Options>" Contractor Group "<Contractor Group Options>" Staff Group"<Staff Group Options>" can be selected

    Examples:
      | username          | password  | Client Group Options                                                                                | Contractor Group Options | Staff Group Options                                                                                                                                                                                                                                                                                                                                                           |
      | LLAdmin@looped.in | Octopus@6 | Bookings Officer,Campus Manager,Contract Manager,Organisation Finance Manager,VideoLoop Client Role | Contractor               | Account Manager,Account Payable Officer,Account Receivable Officer,Administrator,After Hours Customer Service,Contractor Engagement Officer ,Customer Service Manager,Customer Service Officer,Developer Features,Finance Manager,Marketing,Relationships and Growth Manager,Senior Customer Service Officer,Team Leader,Translation Project Coordinator,Translations Manager |

  #LL-607 Scenario 3 - user selects option
  @UserSelectsRoleOption
  Scenario Outline: User selects option
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Accounts section on the Admin page
    And They view the table
    And They will see a Role filter dropdown
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    Then The dropdown is closed
    When The user has clicked the search button
    Then The table is filtered by the selected role and shows result "<expected oldest result>"

    Examples:
      | username          | password  | role filter option | expected oldest result |
      | LLAdmin@looped.in | Octopus@6 | Bookings Officer   | Phteven Smith          |

  #LL-607 Scenario 4 - user selects All Roles
  @UserSelectsAllRoles
  Scenario Outline: User selects All Roles
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Accounts section on the Admin page
    And They view the table
    And They will see a Role filter dropdown
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The dropdown is closed
    And The user has clicked the search button
    Then The table shows all accounts "<expected result admin>", "<expected result non admin>" regardless of the role

    Examples:
      | username          | password  | role filter option | expected result admin | expected result non admin |
      | LLAdmin@looped.in | Octopus@6 | All Roles          | LL Admin              | Phteven Smith             |

  #LL-612 Scenario 3 - Admin creates New Account
  @AdminCreatesNewAccount
  Scenario Outline: Admin creates New Account
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And Clicks Create Account
    And Selects any role "<role toggle>"
    And Fills out all the required details "<firstname>", email, "<landline number> in Admin Page"
    And They click the Save Detail button
    Then The user is created in Admin Page
    And I click Admin header link
    And The user "<firstname>" will be displayed in the Admin > Accounts section
    And The Created Date is captured in the form of DD slash MM slash YYYY HH:MM:SS

    Examples:
      | username          | password  | role toggle | firstname     | landline number |
      | LLAdmin@looped.in | Octopus@6 | Contractor  | AutomationCBO | 0212345678      |

  #LL-612 Scenario 4 - View created date
  @ViewCreatedDate
  Scenario Outline: View created date
    When I login with "<username>" and "<password>"
    And The user has access to the User’s profile
    And They view the profile
    Then They will see the Created Date: DD MM YYYY HH:MM:SS under the Profile picture box AND this applies to all roles

    Examples:
      | username        | password  |
      | zenq2@ll.com.au | Reset@312 |
      | zenq@cbo11.com  | Test1     |

  #LL-696 Scenario 1 - NAATI weight less or equal to 1000
  @NaatiEqual1000 @NaatiWeight
  Scenario Outline: User enters NAATI weight less or equal to 1000
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Naati Accreditations section on the Admin page
    And I select the fisrt Naati Level
    And I see Manage Naati Accreditation popup is displayed
    And I enter the NAATI Weight equal to "<Naati Weight>" by clearing the previous existing value
    And I click on Save button
    Then the entered Naati Weight should be saved and displayed value "<Naati Weight>"
    And I revert the Naati Weight to the orginal value

    Examples:
      | username        | password  | Naati Weight |
      | zenq1@ll.com.au | Reset@312 | 1000         |

  #LL-696 Scenario 2 - NAATI weight is greater than 1000
  @NaatiGreater1000 @NaatiWeight
  Scenario Outline: User enters NAATI weight greater than 1000
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Naati Accreditations section on the Admin page
    And I select the fisrt Naati Level
    And I see Manage Naati Accreditation popup is displayed
    And I enter the NAATI Weight equal to "<Naati Weight>" by clearing the previous existing value
    And I click on Save button
    Then the error message "<Error Message>" is displayed
    And the Naati Weight displays previous value only as the entered value is not saved

    Examples:
      | username        | password  | Naati Weight | Error Message           |
      | zenq1@ll.com.au | Reset@312 | 2000         | Can't be more than 1000 |

  #LL-675 Scenario 3 - Virtual label is displayed
  @VirtualLable @VirtualLanguage
  Scenario Outline: User verifies virtual language label
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Languages section on the Admin page
    And I enter "<Language>" in search field
    And I click on Search button
    Then the result should display the "<Virtual Language>" text with virtual beside the name

    Examples:
      | username        | password  | Language | Virtual Language  |
      | zenq1@ll.com.au | Reset@312 | chinese  | CHINESE (virtual) |
      | zenq1@ll.com.au | Reset@312 | Karen    | KAREN (virtual)   |


  #LL-675 Scenario 4a,4b - Virtual language (Karen) and (chinese) explanation shown in popup
  @LanguageExplanation @VirtualLanguage
  Scenario Outline: User verifies if Karen and chinese languages explanation shown in popup
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Languages section on the Admin page
    And I enter "<Language>" in search field
    And I click on Search button
    And the result should display the "<Virtual Language>" text with virtual beside the name
    And I click on the Language "<Virtual Language>"
    And I verify the Manage Language popup is displayed
    Then the text "<Language Text>" is displayed

    Examples:
      | username        | password  | Language | Virtual Language  | Language Text                                                                                  |
      | zenq1@ll.com.au | Reset@312 | chinese  | CHINESE (virtual) | CHINESE is a Virtual Language. It means the interpreter knows both MANDARIN and CANTONESE      |
      | zenq1@ll.com.au | Reset@312 | Karen    | KAREN (virtual)   | KAREN is a Virtual Language. It means the interpreter knows both KAREN (Pwo) and KAREN (S'gaw) |

    #LL-608 Scenario 3- On editing the user account, creation date should not get updated
  @CreationDateNotUpdatedAfterEdit @LL-608
  Scenario Outline: On editing the user account, creation date should not get updated
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Accounts section on the Admin page
    And Clicks Create Account
    And Selects any role "<role toggle>"
    And Fills out all the required details "<firstname>", email, "<landline number> in Admin Page"
    And They click the Save Detail button
    And The user is created in Admin Page
    And I click Admin header link
    And I get the Creation Date of the user created
    And I search and select account created account in Admin
    And I click Edit Profile Button in Account Profile
    And I Update the profile either by Update or adding or deleting few non mandatory data "<landline number2>"
    And They click the Save Detail button
    And I see the message User profile was successfully saved
    And I move back to the admin page
    Then the Creation date of the user edited should not change, it shows the actual creation date only

    Examples:
      | username          | password  | role toggle | firstname     | landline number | landline number2 |
      | LLAdmin@looped.in | Octopus@6 | Contractor  | AutomationCBO | 0212345678      | 0212348765       |

    #LL-608 Scenario 4 - On selecting any role from dropdown, results obtained should also be sorted with newest date at the top
  @SelectRoleResultsSorted @LL-608
  Scenario Outline: New column displayed for creation date
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Accounts section on the Admin page
    And The user has selected an option "<role filter option>" from the Role filter dropdown
    And The table will be sorted by Creation Date by default newest at the top

    Examples:
      | username          | password  | role filter option |
      | LLAdmin@looped.in | Octopus@6 | Bookings Officer   |

    #LL-607 Scenario 5 - User can select only one role at time
  @SelectOnlyOneRole @LL-607
  Scenario Outline: User can select only one role at time
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Accounts section on the Admin page
    And They will see a Role filter dropdown
    And The Admin or Internal user has clicked the Role filter dropdown
    And The user has selected an option "<role filter option1>" from the Role filter dropdown
    Then I should be able to pick only one role "<role filter option1>" at a time
    And The user has selected an option "<role filter option2>" from the Role filter dropdown
    And I should be able to pick only one role "<role filter option2>" at a time

    Examples:
      | username          | password  | role filter option1 | role filter option2 |
      | LLAdmin@looped.in | Octopus@6 | Bookings Officer    | Campus Manager      |

     #LL-607 Scenario 6 - User should appear in Search results, even if user has multiple roles and on selecting any one role
  @UserMultipleRolesAppearsInSearch @LL-607
  Scenario Outline: User should appear in Search results, even if user has multiple roles and on selecting any one role
    When I login with "<username>" and "<password>"
    And I click Admin header link
    And The Admin is viewing the Accounts section on the Admin page
    And Clicks Create Account
    And select multiple roles "<roles toggle>"
    And Fills out all the required details "<firstname>", email, "<landline number> in Admin Page"
    And They click the Save Detail button
    And The user is created in Admin Page
    And I click Admin header link
    And They will see a Role filter dropdown
    And The Admin or Internal user has clicked the Role filter dropdown
    And The user has selected an option "<role filter option1>" from the Role filter dropdown
    And I search the account created account in Admin
    Then I should see the user that has selected role in the search results
    And The user has selected an option "<role filter option2>" from the Role filter dropdown
    And I search the account created account in Admin
    And I should see the user that has selected role in the search results
    And The user has selected an option "<role filter option3>" from the Role filter dropdown
    And I search the account created account in Admin
    And I should see the user that has selected role in the search results

    Examples:
      | username          | password  | roles toggle                                         | firstname     | landline number | role filter option1 | role filter option2 | role filter option3      |
      | LLAdmin@looped.in | Octopus@6 | Bookings Officer,Contractor,Customer Service Officer | AutomationCBO | 0212345678      | Bookings Officer    | Contractor          | Customer Service Officer |