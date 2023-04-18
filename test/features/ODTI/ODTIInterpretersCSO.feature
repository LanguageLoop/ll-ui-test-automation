@ODTIJobsCBO
Feature: ODTI Interpreters CSO features

  Background: Load the Loopedin login page
    Given the looped in login page is opened

    #LL-447 Scenario 1 - CS user sees ODTI menu item
  @LL-447 @CSUserSeesODTIMenu
  Scenario Outline: CS user sees ODTI menu item
    When I login with "<username>" and "<password>"
    And they view the main top navigation
    Then they will see the ODTI menu item
    And it will appear between the Interpreting and Translation menu items

    Examples:
      | username          | password  |
      | LLAdmin@looped.in | Octopus@6 |

    #LL-447 Scenario 2 - CS user clicks ODTI menu item
  @LL-447 @CSUserClicksODTIMenu
  Scenario Outline: CS user clicks ODTI menu item
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    Then they are navigated to the ODTI page

    Examples:
      | username cso   | password cso |
      | zenq@cso10.com | Test1        |

    #LL-447 Scenario 3 - CS user views ODTI Interpreters page
  @LL-447 @CSUserViewsInterpretersPage
  Scenario Outline: CS user views ODTI Interpreters page
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    Then they will see the ODTI Interpreters page by default
    And they will see a dropdown to switch to the ODTI Jobs page
    And they will see a dropdown to select Language
    And they will a dropdown to select Logon Status with label Any - LogOn Status

    Examples:
      | username cso   | password cso |
      | zenq@cso10.com | Test1        |

    #LL-447 Scenario 4 - CS user views Language search
  @LL-447 @CSUserViewsLanguageSearch
  Scenario Outline: CS user views Language search
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    Then they will see a language searchable dropdown
    And the label will be: Language
    And the user will be able to search for a language "<language>"
    And the user will be able to select a single Language "<language>"

    Examples:
      | username cso   | password cso | language |
      | zenq@cso10.com | Test1        | CHINESE  |

    #LL-447 Scenario 4a - CS user views “Any-LogOn Status” search
  @LL-447 @CSUserViewsLogOnStatusSearch
  Scenario Outline: CS user views Any-LogOn Status search
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    Then they will a dropdown to select Logon Status with label Any - LogOn Status
    And the label will be: Any-LogOn Status
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status options>"

    Examples:
      | username cso   | password cso | language | logon status options          |
      | zenq@cso10.com | Test1        | CHINESE  | Any - LogOn Status,True,False |

    #LL-447 Scenario 5a - CS user selects language
  @LL-447 @CSUserSelectsLanguage
  Scenario Outline: CS user selects language
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And they will see a language searchable dropdown
    And the label will be: Language
    And the user will be able to search for a language "<language>"
    Then the table will appear
    And show only interpreters "<interpreters>" with that Language

    Examples:
      | username cso   | password cso | language | interpreters                                          |
      | zenq@cso10.com | Test1        | CHINESE  | Bowen (Bella) LYU,Lai Wan LEUNG,Lucia Yee Fong CHEUNG |

  #LL-447 Scenario 5b - CS user selects 'Any-LogOn Status'.
  @LL-447 @CSUserSelectsAnyLogOnStatus
  Scenario Outline: CS user selects Any-LogOn Status
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    Then the table will appear
    And show only interpreters with selected Language and the LogOn Status "<logon status column>" containing "<logon status results>" status

    Examples:
      | username cso   | password cso | language | logon status option | logon status column | logon status results |
      | zenq@cso10.com | Test1        | Zenq3    | Any - LogOn Status  |   6                 | True,False           |

    #LL-447 Scenario 6a - CS user views table
  @LL-447 @CSUserViewsTable
  Scenario Outline: CS user views table
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    Then the table will appear
    And the table will have the following columns: "<column headers>"
    And the data will be displayed under each column as per the mockup
    And Name will be hyperlinked to the Contractor profile

    Examples:
      | username cso   | password cso | language | logon status option | column headers                                                                                                     |
      | zenq@cso10.com | Test1        | Zenq3    | Any - LogOn Status  | CONTRACTOR ID,NAME,NAATI LEVEL,GENDER,PHONE,LOGON STATUS,ATTEMPTS,ON CALL,CURRENT BOOKING START/END,JOB/CONTACT ID |

    #LL-447 Scenario 6b - NAATI level shown for current language
  @LL-447 @NAATILevelShownForLanguage
  Scenario Outline: NAATI level shown for current language
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the user will be able to search for a language "<language>"
    And the table will have the following columns: "<column headers>"
    Then it will show the NAATI Level for that Language or Contractor

    Examples:
      | username cso   | password cso | language | column headers |
      | zenq@cso10.com | Test1        | CHINESE  | NAATI LEVEL    |

    #LL-447 Scenario 6c - Table shows current job
  #GIVEN the CS user is looking at the table
  #THEN the table will show the current ongoing job for the interpreter
  #AND the table will not show cancelled jobs
  @LL-447 @TableShowsCurrentJob
  Scenario Outline: Table shows current job
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And click on Job Type option "<request job type>" in Job Requester Details
    And I select "<Requester Name>" from the requester name dropdown
    And I click next button
    And I select language "<language>"
    And I select assignment type "<assignment type>"
    And I enter schedule "<date>" and "<time>"
    And I enter "<email>" email address
    And I click save and proceed to summary button
    And I click continue on Job continue confirmation popup
    And I handle duplicate job warning window
    And I click submit button
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<new status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<new status>"
    And the looped in login page is opened
    And I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the table will appear
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    Then the table will show the current ongoing job for the interpreter "<contractor>"
    And the looped in login page is opened
    And I login with "<username>" and "<password>"
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And the booking is cancelled on behalf of "<Requester Name>"
    And the looped in login page is opened
    And I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the table will appear
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    And the table will not show cancelled jobs for the interpreter "<contractor>"

    Examples:
      | username          | password  | contractor | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | original status                 | new status | username cso   | password cso | logon status option | service     | from      | to      | level        |
      | LLAdmin@looped.in | Octopus@6 | Automation | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Fullday         | current date | 09:30 | hh@bb.com.au | Auto Notification,- No status - | Allocated  | zenq@cso10.com | Test1        | Any - LogOn Status  | Interpreter | zz-Zenq2  | ENGLISH | Professional |

    #LL-447Scenario 6d - Table shows next pre-booked job.
  #GIVEN the CS user is looking at the table
  #AND the interpreter is not currently on a job
  #THEN the table will also show the next pre-booked job for the interpreter
  #AND this will be the next pre-booked job with a start time within the next 15 minutes
  #Example: Current time = 11:00am, the next pre-booked job for an interpreter is 11:15am and will display in the table
  @LL-447 @TableShowsNextPreBookedJob
  Scenario Outline: Table shows next pre-booked job
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And click on Job Type option "<request job type>" in Job Requester Details
    And I select "<Requester Name>" from the requester name dropdown
    And I click next button
    And I select language "<language>"
    And I select assignment type "<assignment type>"
    And I enter schedule "<date>" and "<time>"
    And I enter "<email>" email address
    And I click save and proceed to summary button
    And I click continue on Job continue confirmation popup
    And I handle duplicate job warning window
    And I click submit button
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<new status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<new status>"
    And the looped in login page is opened
    And I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the table will appear
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    Then the table will also show the next pre-booked job for the interpreter "<contractor>"
    And this will be the next pre-booked job with a start time within the next 15 minutes for the interpreter "<contractor>"
    And the looped in login page is opened
    And I login with "<username>" and "<password>"
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And the booking is cancelled on behalf of "<Requester Name>"

    Examples:
      | username          | password  | contractor | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date                   | time  | email        | original status                 | new status | username cso   | password cso | logon status option | service     | from      | to      | level        |
      | LLAdmin@looped.in | Octopus@6 | Automation | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Fullday         | within fifteen minutes | 09:30 | hh@bb.com.au | Auto Notification,- No status - | Allocated  | zenq@cso10.com | Test1        | Any - LogOn Status  | Interpreter | zz-Zenq2  | ENGLISH | Professional |

    #LL-447 Scenario 6e - Table shows empty Job ID and Start/End Time
  @LL-447 @TableShowsEmptyJobIdAndTime
  Scenario Outline: Table shows empty Job ID and Start/End Time
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    Then if the Job ID has no data, then the Start End time also has no data

    Examples:
      | username cso   | password cso | language | logon status option |
      | zenq@cso10.com | Test1        | zz-Zenq2 | Any - LogOn Status  |

    #LL-447 Scenario 6f - Table shows filled Job ID and Start/End Time
  @LL-447 @TableShowsFilledJobIdAndTime
  Scenario Outline: Table shows filled Job ID and Start/End Time
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    Then if the Job ID has data, then the Start End time also has data

    Examples:
      | username cso   | password cso | language | logon status option |
      | zenq@cso10.com | Test1        | zz-Zenq2 | Any - LogOn Status  |

    #LL-447 Scenario 7 - CS user clicks contractor name
  @LL-447 @CSUserClicksContractorName
  Scenario Outline: CS user clicks contractor name
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    And they click on the hyperlinked Contractor name
    Then they are navigated to the Contractor Profile and this will open in a new browser tab

    Examples:
      | username cso   | password cso | language | logon status option |
      | zenq@cso10.com | Test1        | zz-Zenq2 | Any - LogOn Status  |

    #LL-447 Scenario 9 - CS user do not select ‘Language' and 'Any-LogOn Status'.
  @LL-447 @CSUserDoNotSelectLanguageAndLogOnStatus
  Scenario Outline: CS user do not select Language and Any-LogOn Status
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    Then no results will be displayed in the table
    And show the text as 'No items to show...’

    Examples:
      | username cso   | password cso |
      | zenq@cso10.com | Test1        |

    #LL-447 Scenario 10 - CS performs sorting on each column.
  @LL-447 @CSUserPerformsSortODTIInterpreters
  Scenario Outline: CS performs sorting on each column
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    Then the columns are sorted correctly when I click on each column which are sortable "<column headers>"

    Examples:
      | username cso   | password cso | language | logon status option | column headers                                                                                                     |
      | zenq@cso10.com | Test1        | zz-Zenq2 | Any - LogOn Status  | Contractor ID,Name,NAATI Level,Gender,Empty,Logon Status,Attempts,On Call,CURRENT BOOKING Start/End,Job/Contact ID |

    #LL-447 Scenario 8 - CS user clicks Job ID
  @LL-447 @CSUserClicksJobID
  Scenario Outline: CS user clicks Job ID
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I click on new job request button
    And I enter campus pin "<campus pin>"
    And I select "<Requester Name>" from the requester name dropdown
    And I click next button
    And I select language "<language>"
    And I select assignment type "<assignment type>"
    And I enter schedule "<date>" and "<time>"
    And I enter "<email>" email address
    And I click save and proceed to summary button
    And I click continue on Job continue confirmation popup
    And I handle duplicate job warning window
    And I click submit button
    And the job created success message should appear
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And search for contractor "<contractor>" in Job Allocation
    And I change the contractor "<contractor>" job status from "<original status>" to "<new status>"
    And I handle duplicate job updated warning message by refreshing browser and change contractor "<contractor>" status "<original status>","<new status>"
    And the looped in login page is opened
    And I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the table will appear
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    And they click on the hyperlinked Job ID "<contractor>"
    Then they are navigated to the ODTI Job Details page and this will open in a new browser tab
    And the looped in login page is opened
    And I login with "<username>" and "<password>"
    And I click Interpreting header link
    And I select "<dropdownfilter>" from the filter dropdown
    And I search for created job request
    And I verify the job is listed in search results
    And I click on first job id from interpreting job list
    And I switch to the job allocation window
    And the booking is cancelled on behalf of "<Requester Name>"

    Examples:
      | username          | password  | contractor | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | original status                 | new status | username cso   | password cso | logon status option | service     | from      | to      | level        |
      | LLAdmin@looped.in | Octopus@6 | Automation |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Fullday         | current date | 09:30 | hh@bb.com.au | Auto Notification,- No status - | Allocated  | zenq@cso10.com | Test1        | Any - LogOn Status  | Interpreter | zz-Zenq2  | ENGLISH | Professional |

    #LL-447 Scenario 11 - CS views different pages using page numbers in pagination.
  @LL-447 @CSUserUsesPageNumbersInPagination
  Scenario Outline: CS views different pages using page numbers in pagination
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    And the table will appear
    And I click on page number "<page number>"
    Then I should be navigated to page "<page number>"

    Examples:
      | username cso   | password cso | language | logon status option | page number |
      | zenq@cso10.com | Test1        | ARABIC   | Any - LogOn Status  | 2           |

    #LL-447 Scenario 12 - CS views different pages using ‘>’ arrows in pagination.
  @LL-447 @CSUserUsesPaginationNextIcon
  Scenario Outline: CS views different pages using ‘>’ arrows in pagination
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    And the table will appear
    And I click on next page arrow
    And I should be navigated to page "<page number>"

    Examples:
      | username cso   | password cso | language | logon status option | page number |
      | zenq@cso10.com | Test1        | ARABIC   | Any - LogOn Status  | 2           |

    #LL-447 Scenario 13 - CS views different pages using ‘<’ arrows in pagination
  @LL-447 @CSUserUsesPaginationPreviousIcon
  Scenario Outline: CS views different pages using ‘<’ arrows in pagination
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    And the table will appear
    And I click on next page arrow
    And I click on previous page arrow
    And I should be navigated to page "<page number>"

    Examples:
      | username cso   | password cso | language | logon status option | page number |
      | zenq@cso10.com | Test1        | ARABIC   | Any - LogOn Status  | 1           |

    #LL-447 Scenario 5c - CS user selects 'Any-LogOn Status' as True
  @LL-447 @CSUserSelectsLogOnStatusTrue
  Scenario Outline: CS user selects Any-LogOn Status as True
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    Then the table will appear
    And show only interpreters with selected Language and the LogOn Status "<logon status column>" containing "<logon status results>" status

    Examples:
      | username cso   | password cso | language | logon status option | logon status column | logon status results |
      | zenq@cso10.com | Test1        | Zenq3    | True                |   6                 | True                 |

    #LL-447 Scenario 5d - CS user selects 'Any-LogOn Status' as False
  @LL-447 @CSUserSelectsLogOnStatusFalse
  Scenario Outline: CS user selects Any-LogOn Status as False
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And they are navigated to the ODTI page
    And they will see the ODTI Interpreters page by default
    And the user will be able to search for a language "<language>"
    And the user will be able to select status for the selected language using options "<logon status option>"
    Then the table will appear
    And show only interpreters with selected Language and the LogOn Status "<logon status column>" containing "<logon status results>" status

    Examples:
      | username cso   | password cso | language | logon status option | logon status column | logon status results |
      | zenq@cso10.com | Test1        | Zenq3    | False               |   6                 | False                |