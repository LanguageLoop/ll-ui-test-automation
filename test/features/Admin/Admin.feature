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
      | username          | password  | role filter option | expected result admin  | expected result non admin |
      | LLAdmin@looped.in | Octopus@6 | All Roles          | LL Admin               | Phteven Smith             |