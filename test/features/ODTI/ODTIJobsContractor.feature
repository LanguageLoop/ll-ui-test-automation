@ODTIJobsContractor
Feature: ODTI Jobs Contractor features

  Background: Load the Loopedin login page
    Given the looped in login page is opened

 #Scenario 1 - As Contractor user - Select the Start and End date filters that has Jobs to be displayed
  @Regression @RegressionS18 @ContractorJobsDisplayed
  Scenario Outline: Contractor user selects the Start and End date filters that has Jobs to be displayed
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 3>" "<filter option index 3>", "<filter comparator 3>" "<filter comparator index 3>", "<filter value 3>" "<filter value index 3>"
    And I get the records count in records counter in Admin
    And I get the ODTI SERVICE CHARGE ID values In Admin
    And the looped in login page is opened
    And I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    Then The records count in records counter is same as in Admin
    And The ODTI SERVICE CHARGE ID values are in the same order as Admin
    And The results displayed are within the date range "<start date>", "<end date>"

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | filter option 3 | filter option index 3 | filter comparator 3 | filter comparator index 3 | filter value 3 | filter value index 3 | username contractor      | password contractor | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 15-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 21-01-2023     | 2                    | ContractorID    | 4                     | Is                  | 4                         | 1293           | 3                    | luciacheung192@gmail.com | Test1               | 16-01-2023 | 20-01-2023 |

    #Scenario 2 - As Contractor user - Select the Start and End date filters that has no Jobs to be displayed
  @Regression @RegressionS19 @ContractorJobsNotDisplayed
  Scenario Outline: Contractor user selects the Start and End date filters that has no Jobs to be displayed
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 3>" "<filter option index 3>", "<filter comparator 3>" "<filter comparator index 3>", "<filter value 3>" "<filter value index 3>"
    And I get the records count in records counter in Admin
    And The No odti billings to show... message is displayed
    And the looped in login page is opened
    And I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    Then The records count in records counter is same as in Admin
    And The No odti billings to show... message is displayed

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | filter option 3 | filter option index 3 | filter comparator 3 | filter comparator index 3 | filter value 3 | filter value index 3 | username contractor      | password contractor | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 19-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 21-01-2023     | 2                    | ContractorID    | 4                     | Is                  | 4                         | 1293           | 3                    | luciacheung192@gmail.com | Test1               | 20-01-2023 | 20-01-2023 |

    #Scenario 3 - Verify the Columns available in the ODTI Jobs
  @Regression @RegressionS20 @ContractorColumnHeaders
  Scenario Outline: Verify the Columns available in the ODTI Jobs for contractor
    When I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    Then The columns available for ODTI Jobs for the user are "<column headers>"

    Examples:
      | username contractor      | password contractor | column headers                                                                                 |
      | luciacheung192@gmail.com | Test1               | ODTI SERVICE CHARGE ID,CALL START,CALL DURATION,CAMPUS NAME,LANGUAGE,CALL TYPE,INTERPRETER FEE |

    #Scenario 4 - As Contractor user - Verifying if the results displayed contains only exported Jobs
  @Regression @RegressionS21 @ContractorSeesExported
  Scenario Outline: Contractor user can see only exported Jobs
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 3>" "<filter option index 3>", "<filter comparator 3>" "<filter comparator index 3>", "<filter value 3>" "<filter value index 3>"
    And I get the records count in records counter in Admin
    And I get the ODTI SERVICE CHARGE ID values In Admin
    And the looped in login page is opened
    And I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    Then The records count in records counter is same as in Admin
    And The ODTI SERVICE CHARGE ID values are in the same order as Admin
    And The results displayed are within the date range "<start date>", "<end date>"

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | filter option 3 | filter option index 3 | filter comparator 3 | filter comparator index 3 | filter value 3 | filter value index 3 | username contractor      | password contractor | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 22-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 28-01-2023     | 2                    | ContractorID    | 4                     | Is                  | 4                         | 1293           | 3                    | luciacheung192@gmail.com | Test1               | 23-01-2023 | 27-01-2023 |

    #Scenario 5 - As Contractor user - Verify the Job IDs, Campus Name are Unclickable
  @Regression @RegressionS22 @ContractorResultsNotClickable
  Scenario Outline: Contractor user cannot click Job IDs, Campus Name
    When I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    Then The ODTI Service Charge ID and Campus Name results are not clickable and read only

    Examples:
      | username contractor      | password contractor | start date | end date   |
      | luciacheung192@gmail.com | Test1               | 23-01-2023 | 27-01-2023 |

    #Scenario 6 - As Contractor user - select the desired Start Date and End date filters Click on Export to Excel link
  @Regression @RegressionS23 @ContractorRecordsExportExcel
  Scenario Outline: Contractor user can select the desired Start Date and End date filters and Export to Excel
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 3>" "<filter option index 3>", "<filter comparator 3>" "<filter comparator index 3>", "<filter value 3>" "<filter value index 3>"
    And I get the records count in records counter in Admin
    And the looped in login page is opened
    And I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    And The records count in records counter is same as in Admin
    And The results displayed are within the date range "<start date>", "<end date>"
    And I click on Export to Excel link
    Then The Excel file is downloaded

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | filter option 3 | filter option index 3 | filter comparator 3 | filter comparator index 3 | filter value 3 | filter value index 3 | username contractor      | password contractor | start date | end date   |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 08-01-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 14-01-2023     | 2                    | ContractorID    | 4                     | Is                  | 4                         | 1293           | 3                    | luciacheung192@gmail.com | Test1               | 09-01-2023 | 13-01-2023 |

    #Scenario 7 - As Contractor User - select the desired Start Date and End date filters that has more than 500 records
  @Regression @RegressionS24 @ContractorMoreThan500Records
  Scenario Outline: Contractor user selects the Start Date and End date filters that has more than 500 records
    When I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    And I click on actual count arrow button
    Then The actual count of records is greater than expected records "<records count>"

    Examples:
      | username contractor      | password contractor | start date | end date   | records count |
      | csaramella@yahoo.com.au  | Test1               | 01-01-2022 | 01-01-2023 | 500           |

    #Scenario 9 - User should be able to view different pages using pagination when they are more number if records
  @Regression @RegressionS25 @ContractorPagination
  Scenario Outline: Contractor should be able to view different pages using pagination
    When I login with "<username contractor>" and "<password contractor>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I enter Start Date "<start date>" and End Date "<end date>"
    And I click on page number "<page number>"
    Then I should be navigated to page "<page number>"
    And I click on next page arrow
    And I should be navigated to page "<next page number>"
    And I click on previous page arrow
    And I should be navigated to page "<previous page number>"

    Examples:
      | username contractor      | password contractor | start date | end date   | page number | next page number  | previous page number |
      | luciacheung192@gmail.com | Test1               | 01-07-2022 | 31-01-2023 | 2           | 3                 | 2                    |

    #LL-679 Scenario 1: Create Note / new popup
  @LL-679 @CreateNoteNewPopup
  Scenario Outline: Create Note new popup
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And the user clicks on Add Job Task or Note link
    Then the Job Task popup displays similar to popup from Prebooked jobs

    Examples:
      | username          | password  |
      | LLAdmin@looped.in | Octopus@6 |

    #LL-679 Scenario 2: Popup contents
  @LL-679 @JobTaskNotePopupContents
  Scenario Outline: Job Task or Note popup contents
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And the user clicks on Add Job Task or Note link
    Then the user can see the items in the popup, as per table

    Examples:
      | username          | password  |
      | LLAdmin@looped.in | Octopus@6 |

    #LL-679 Scenario 3: Save
  @LL-679 @SaveJobTaskNotePopup
  Scenario Outline: Save Job Task or Note popup
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And the user clicks on Add Job Task or Note link
    And the user has selected Task "<note>" and added message "<message>"
    And the user has clicked the Save button
    Then the job task note is saved
    And the Job Task popup is closed

    Examples:
      | username          | password  | note       | message                 |
      | LLAdmin@looped.in | Octopus@6 | Other/Note | automation test message |

    #LL-679 Scenario 4: Re-opening an existing comment
  @LL-679 @ReopenCommentJobTaskNotePopup
  Scenario Outline: Re-opening an existing comment in Job Task or Note popup
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And the user clicks on Add Job Task or Note link
    And the user has selected Task "<note>" and added message "<message>"
    And the user has clicked the Save button
    And the user has added messages "<additional messages>" to existing note
    And the user clicks on an existing note
    Then the Job Task popup displays similar to popup from Prebooked jobs
    And displays the previous comments under the Discussion section if any
    And the previous comments are sorted by newest-first order

    Examples:
      | username          | password  | note       | message                  | additional messages                               |
      | LLAdmin@looped.in | Octopus@6 | Other/Note | automation test1 message | automation test2 message,automation test3 message |

    #LL-679 Scenario 5: Job Notes section will show the newly added message for the existing Notes
  @LL-679 @JobNotesSectionDisplayNewMessage
  Scenario Outline: Job Notes section will show the newly added message for the existing Notes
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And the user clicks on Add Job Task or Note link
    And the user has selected Task "<note>" and added message "<message>"
    And the user has clicked the Save button
    And the user has added messages "<additional messages>" to existing note
    And the Job Task popup is closed
    Then the latest added message for the existing note is displayed

    Examples:
      | username          | password  | note       | message                  | additional messages                               |
      | LLAdmin@looped.in | Octopus@6 | Other/Note | automation test1 message | automation test2 message,automation test3 message |

    #LL-679 Scenario 6: Adding Multiple Notes
  @LL-679 @AddingMultipleNotes
  Scenario Outline: Adding Multiple Notes
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And adds multiple notes with Task "<note>" and message "<messages>"
    Then the notes that are added latest are sorted by newest-first order

    Examples:
      | username          | password  | note       | messages                                                                   |
      | LLAdmin@looped.in | Octopus@6 | Other/Note | automation test1 message,automation test2 message,automation test3 message |

    #LL-679 Scenario 7: User cancels the Note after entering the message
  @LL-679 @CancelNoteAfterEnteringMessage
  Scenario Outline: User cancels the Note after entering the message
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And the user clicks on Add Job Task or Note link
    And the user has selected Task "<note>" and added message "<message>"
    And the user has clicked the close icon
    Then the Job Task popup is closed
    And no notes are added under Job Notes section

    Examples:
      | username          | password  | note       | message                 |
      | LLAdmin@looped.in | Octopus@6 | Other/Note | automation test message |

    #LL-687 Sc1 - by default, a filter on record status should be shown
  @LL-687 @RecordStatusFilterShownByDefault
  Scenario Outline: by default, a filter on record status should be shown
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    Then The RecordStatus Is Export

    Examples:
      | username          | password  |
      | LLAdmin@looped.in | Octopus@6 |

    #LL-687 Sc1b - Display the non-exported records in a different style
  @LL-687 @NonExportedRecordDifferentStyle
  Scenario Outline: Display the non-exported records in a different style
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And the user has not set a RecordStatus filter, or has set it to show "<export value>"
    Then the rows which contain a Do Not Export record will have a Gray font-color

    Examples:
      | username          | password  | export value  |
      | LLAdmin@looped.in | Octopus@6 | Do not export |

    #LL-687 Sc2 - display the record status field
  @LL-687 @DisplayRecordStatusField
  Scenario Outline: display the record status field
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I click on a Job ID value under ODTI SERVICE CHARGE ID column
    And I should be navigated to the Job detail page "<job detail page url>" of the respective job that is clicked
    Then the field "<record status field>" is displayed in job details

    Examples:
      | username          | password  | job detail page url        | record status field |
      | LLAdmin@looped.in | Octopus@6 | OnDemandTI/JobDetails.aspx | Record Status       |

    #LL-687 Sc3 - the CallId should be a link
  @LL-687 @CallIdShouldBeLink
  Scenario Outline: the CallId should be a link
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And I click on a Job ID value under ODTI SERVICE CHARGE ID column
    And I should be navigated to the Job detail page "<job detail page url>" of the respective job that is clicked
    Then the Client call Id in job details is a link
    And when clicked, it goes back to the ODTI Jobs list with a URL parameter for the ClientCallId
    And searches by Client Call Id by default in ODTI jobs
    And does not have the RecordStatus filter

    Examples:
      | username          | password  | job detail page url        |
      | LLAdmin@looped.in | Octopus@6 | OnDemandTI/JobDetails.aspx |