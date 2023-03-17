@ODTIJobsCBO
Feature: ODTI Jobs CSO features

  Background: Load the Loopedin login page
    Given the looped in login page is opened

 #Scenario 1 - As CSO User - Verifying the default results displayed
  @Regression @RegressionS26 @CSORecordsDisplay
  Scenario Outline: CSO user can see the default results and record status
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    Then The RecordStatus Is Export
    And All the available jobs are displayed

    Examples:
      | username cso   | password cso |
      | zenq@cso10.com | Test1        |

    #Scenario 2 - AS CSO User - Verify the Max records displayed as 500
  @Regression @RegressionS27 @CSORecordsMax500
  Scenario Outline: CSO user can see the Max records displayed as 500
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    Then The RecordStatus Is Export
    And All the available jobs are displayed
    And The records count in records counter has expected records "<expected records>"

    Examples:
      | username cso   | password cso | expected records |
      | zenq@cso10.com | Test1        | 500              |

    #Scenario 3 - AS CSO User -Verifying the default results displayed and click on Export to Excel link
  @Regression @RegressionS28 @CSORecordsExportExcel
  Scenario Outline: CSO user can see default records and click on Export to Excel link
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    Then The RecordStatus Is Export
    And All the available jobs are displayed
    And The records count in records counter has expected records "<expected records>"
    And I click on Export to Excel link
    And The Excel file is downloaded

    Examples:
      | username cso   | password cso | expected records |
      | zenq@cso10.com | Test1        | 500              |

    #Scenario 4 - AS CSO User - Verify the results displayed on performing search by Contractor using the Search field
  @Regression @RegressionS32 @CSOSearchByContractor
  Scenario Outline: CSO user can perform search by Contractor using the Search field
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I enter the search value "<contractor>" in the search field
    Then The records are displayed only for the entered filter value "<Interpreter Name>" under column number "<Interpreter Name column number>"

    Examples:
      | username cso   | password cso | contractor | Interpreter Name | Interpreter Name column number |
      | zenq@cso10.com | Test1        | Majid      | Majid BRAHMAN    | 6                              |

    #Scenario 5 - AS CSO User - Verify the results displayed on performing search by Language using the Search field
  @Regression @RegressionS33 @CSOSearchByLanguage
  Scenario Outline: CSO user can perform search by Language using the Search field
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I enter the search value "<language>" in the search field
    Then The records are displayed only for the entered filter value "<language>" under column number "<Language column number>"

    Examples:
      | username cso   | password cso | language | Language column number |
      | zenq@cso10.com | Test1        | CROATIAN | 5                      |

    #Scenario 6 - AS CSO User - Verify the results displayed on performing search by Contact ID using the Search field
  @Regression @RegressionS34 @CSOSearchByContactID
  Scenario Outline: CSO user can perform search by Contact ID using the Search field
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I enter the search value "<contact ID>" in the search field
    Then The records are displayed only for the entered filter value "<ODTI SERVICE CHARGE ID>" under column number "<ODTI SERVICE CHARGE ID column number>"

    Examples:
      | username cso   | password cso | contact ID   | ODTI SERVICE CHARGE ID | ODTI SERVICE CHARGE ID column number |
      | zenq@cso10.com | Test1        | 197934812168 | 100000002470           | 1                                    |

    #Scenario 7 - AS CSO User - Verify the results displayed on performing search using invalid data on entering in Search field
  @Regression @RegressionS35 @CSOSearchByInvalidData
  Scenario Outline: CSO user sees No odti billings to show message search is performed using invalid data
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I enter the search value "<invalid value>" in the search field
    Then The No odti billings to show... message is displayed

    Examples:
      | username cso   | password cso | invalid value     |
      | zenq@cso10.com | Test1        | AutoInvalidSearch |

    #Scenario 8 - As CSO User - Verify the Columns available in the ODTI Jobs as CSO user
  @Regression @RegressionS29 @CSOColumnHeaders
  Scenario Outline: CSO user has columns available in the ODTI Jobs
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    Then The columns available for ODTI Jobs for the user are "<column headers>"

    Examples:
      | username cso   | password cso | column headers                                                                                                          |
      | zenq@cso10.com | Test1        | ODTI SERVICE CHARGE ID,CALL START,CALL DURATION,CAMPUS NAME,LANGUAGE,INTERPRETER NAME,CALL TYPE,CLIENT CHARGE SUBTOTAL  |

      #Scenario 10 - User should be able to view different pages using pagination when they are more number of records
  @Regression @RegressionS30 @CSOPagination
  Scenario Outline: User should be able to view different pages using pagination when they are more number of records
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I click on page number "<page number>"
    Then I should be navigated to page "<page number>"
    And I click on next page arrow
    And I should be navigated to page "<next page number>"
    And I click on previous page arrow
    And I should be navigated to page "<previous page number>"

      Examples:
      | username cso   | password cso | page number | next page number  | previous page number |
      | zenq@cso10.com | Test1        | 3           | 4                 | 3                    |

    #Scenario 11 - AS CSO User - User should be able to click jobs under 'ODTI SERVICE CHARGE ID' column
  @Regression @RegressionS36 @CSOClicksJobID
  Scenario Outline: CSO user should be able to click jobs under ODTI SERVICE CHARGE ID column
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click on a Job ID value under ODTI SERVICE CHARGE ID column
    Then I should be navigated to the Job detail page "<job detail page url>" of the respective job that is clicked

    Examples:
      | username cso   | password cso | job detail page url        |
      | zenq@cso10.com | Test1        | OnDemandTI/JobDetails.aspx |

      #Scenario 9 - User should be able to perform sorting on each column
  @Regression @RegressionS31 @CSOTableColumnsSort
  Scenario Outline: CSO user should be able to perform sorting on each column
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    Then The results should be sorted on clicking each column header "<column headers>"

    Examples:
      | username cso   | password cso | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2  | column headers                                                                                                         |
      | zenq@cso10.com | Test1        | Job Date        | 2                     | After               | 2                         | 11-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 19-01-2023     | 2                     | ODTI Service Charge ID,Call Start,Call Duration,Campus Name,Language,Interpreter Name,Call Type,Client Charge Subtotal |

      #Scenario 12 - AS CSO User - User should be able to click Campus Name under 'Campus Name' column
  @Regression @RegressionS37 @CSOClickCampusName
  Scenario Outline: CSO user should be able to click Campus Name under Campus Name column
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click on a Campus Name value under Campus Name column
    Then I should be navigated to the Campus detail page "<Campus detail page url>" of the respective Campus that is clicked

    Examples:
      | username cso   | password cso |  Campus detail page url                |
      | zenq@cso10.com | Test1        |  ManagementModules/CampusDetails.aspx  |

      #Scenario 13 - AS CSO User - User should be able to click Interpreter Name under 'Interpreter Name' column
  @Regression @RegressionS38 @CSOClickInterpreterName
  Scenario Outline: CSO user should be able to click Interpreter Name under Interpreter Name column
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click on a Interpreter Name value under Interpreter Name column
    Then I should be navigated to the Interpreter detail page "<Interpreter detail page url>" of the respective Interpreter that is clicked

    Examples:
      | username cso   | password cso |  Interpreter detail page url                      |
      | zenq@cso10.com | Test1        |  ManagementModules/PreviewContractorProfile.aspx  |

    #Scenario 14 - As CSO User - Applying Advanced Search Filters
  @Regression @RegressionS39 @CSOAdvancedFilters
  Scenario Outline: CSO user can apply advanced search filters
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    Then The records are displayed only for the entered filter value "<language>" under column number "<Language column number>"
    And The records are displayed only for the entered filter value "<Interpreter Name>" under column number "<Interpreter Name column number>"

    Examples:
      | username cso   | password cso | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | language | Language column number | Interpreter Name | Interpreter Name column number |
      | zenq@cso10.com | Test1        | Language        | 2                     | Is                  | 2                         | zz-Zenq2       | 2                    | Contractor Name | 3                     | Is                  | 3                         | Sunia TUITUPOU | 1                    | zz-Zenq2 | 5                      | Sunia TUITUPOU   | 6                              |

    #Scenario 15 - As CSO User - Applying Advanced Search Filters and verify that results  are display only for the selected filters and the total records value should be updated
  @Regression @RegressionS40 @CSOAdvancedFilterRecords
  Scenario Outline: CSO user can apply advanced search filters
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I get the records count in ODTI before adding filters
    And I click Advanced search link in Admin
    And I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    Then The total record value should be updated as per the number of records displayed

    Examples:
      | username cso   | password cso | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 |
      | zenq@cso10.com | Test1        | Language        | 2                     | Is                  | 2                         | zz-Zenq2       | 2                    | Contractor Name | 3                     | Is                  | 3                         | Sunia TUITUPOU | 1                    |

    #Scenario 16 - As CSO User - Removing the applied Advanced Search filters
  @Regression @RegressionS41 @CSOAdvancedFiltersRemoved
  Scenario Outline: CSO user can apply advanced search filters
    When I login with "<username cso>" and "<password cso>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I get the records count in ODTI before adding filters
    And I click Advanced search link in Admin
    And I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    And The total record value should be updated as per the number of records displayed
    And I Click on the X Icon beside the filters applied
    Then All the Jobs are displayed as no filters are applied and the number of records gets updated

    Examples:
      | username cso   | password cso | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 |
      | zenq@cso10.com | Test1        | Language        | 2                     | Is                  | 2                         | zz-Zenq2       | 2                    | Contractor Name | 3                     | Is                  | 3                         | Sunia TUITUPOU | 1                    |

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
  Scenario Outline: CS user sees ODTI menu item
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
  Scenario Outline: CS user views Language search
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