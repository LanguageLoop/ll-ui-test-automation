@ODTIJobsAdmin
Feature: ODTI Jobs Admin features

  Background: Load the Loopedin login page
    Given the looped in login page is opened

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

    #LL-687 Sc4 - the reprocessing buttons should be hidden for Export=false
  @LL-687 @ReprocessingButtonsHiddenExportFalse
  Scenario Outline: the reprocessing buttons should be hidden for Export=false
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And the user has not set a RecordStatus filter, or has set it to show "<export value>"
    And I click on a Job ID value under ODTI SERVICE CHARGE ID column
    And I should be navigated to the Job detail page "<job detail page url>" of the respective job that is clicked
    Then the 3 Reprocess buttons are not displayed

    Examples:
      | username          | password  | export value  | job detail page url        |
      | LLAdmin@looped.in | Octopus@6 | Do not export | OnDemandTI/JobDetails.aspx |

    #LL-724 Scenario 1 - GL Code renamed to BillTo Code
  @LL-724 @GLCodeRenamedToBillToCode
  Scenario Outline: GL Code renamed to BillTo Code
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    Then I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I should see the expected Job ID "<job ID>" value under ODTI SERVICE CHARGE ID column

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | job ID       |
      | LLAdmin@looped.in | Octopus@6 | Bill To Code    | 1                     | Is                  | 1                         | DET01          | 1                    | 100000019010 |

    #LL-724 Scenario 2 - Service Description renamed to “DID Number”
  @LL-724 @ServiceDescriptionRenamedToDIDNumber
  Scenario Outline: Service Description renamed to DID Number
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    Then I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And the results displayed belongs to the entered DID number "<filter value 1>"

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | campus name     |
      | LLAdmin@looped.in | Octopus@6 | DID Number      | 1                     | Is                  | 1                         | 61370349780    | 1                    | Contoso Pty LTD |

    #LL-724 Scenario 3 - Contractor Name currently only searches first name
  @LL-724 @ContractorNameSearchFirstLastName
  Scenario Outline: Contractor Name currently only searches first name
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    Then I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I should see the expected Interpreter Name "<Interpreter Name>" value under INTERPRETER NAME column

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | Interpreter Name |
      | LLAdmin@looped.in | Octopus@6 | Contractor Name | 1                     | Is                  | 1                         | Lai Wan LEUNG  | 1                    | Lai Wan LEUNG    |

    #LL-724 Scenario 4 - Contract Name should be a drop-down
  @LL-724 @ContractNameShouldBeDropdown
  Scenario Outline: Contract Name should be a drop-down
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    Then I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I should see the expected Campus Name "<campus name>" value under CAMPUS NAME column

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1                                      | filter value index 1 | campus name                                                      |
      | LLAdmin@looped.in | Octopus@6 | Contract name   | 1                     | Is                  | 1                         | Department of Health and Human Services - Health    | 1                    | Access Health and Community - DH Community Care North West Metro |

    #LL-724 Scenario 5 - VITSAHFlag
  @LL-724 @VITSAHFlag
  Scenario Outline: VITSAHFlag should be a drop-down
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    Then I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And they will see a table
    And I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 2>" "<filter value index 1>"
    And they will see a table

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter value 2 |
      | LLAdmin@looped.in | Octopus@6 | VITSAHFlag      | 1                     | Is                  | 1                         | True           | 1                    | False          |

    #LL-724 Scenario 6 - ContractorAHFlag
  @LL-724 @ContractorAHFlag
  Scenario Outline: ContractorAHFlag should be a drop-down
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    Then I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And they will see a table
    And I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 2>" "<filter value index 1>"
    And they will see a table

    Examples:
      | username          | password  | filter option 1  | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter value 2 |
      | LLAdmin@looped.in | Octopus@6 | ContractorAHFlag | 1                     | Is                  | 1                         | True           | 1                    | False          |

    #LL-724 Scenario 7 - Custom Fields search all ODTI custom fields for the value
  @LL-724 @CustomFieldsSearchAllODTICustomFields
  Scenario Outline: Custom Fields search all ODTI custom fields for the value
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    Then I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And they will see a table

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 |
      | LLAdmin@looped.in | Octopus@6 | Custom Fields   | 1                     | Contains            | 1                         | Test           | 1                    |

    #LL-761 Scenario 1: Verifying the results for filter DID Number using IS condition
  @LL-761 @FilterDIDNumberISCondition
  Scenario Outline: Verifying the results for filter DID Number using IS condition
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    Then I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And the results displayed belongs to the entered DID number "<filter value 1>"

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 |
      | LLAdmin@looped.in | Octopus@6 | DID Number      | 2                     | Is                  | 2                         | 61370349780    | 1                    |

    #LL-761 Scenario 2: Verifying the results for filter DID Number using Is not condition
  @LL-761 @FilterDIDNumberISNotCondition
  Scenario Outline: Verifying the results for filter DID Number using Is not condition
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    Then I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And the results displayed does not belong to the entered DID number "<filter value 1>"

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 |
      | LLAdmin@looped.in | Octopus@6 | DID Number      | 2                     | Is not              | 2                         | 61370349780    | 1                    |

    #LL-761 Scenario 3: Verifying the results for filter VITSAHFlag with IS condition
  @LL-761 @FilterVITSAHFlagISCondition
  Scenario Outline: Verifying the results for filter VITSAHFlag with IS condition
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    Then I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And the results displays the After Hours jobs when VITSAHFlag True
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    Then I add dropdown filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 2>" "<filter value index 2>"
    And they click the ODTI Service Charge ID hyperlink
    And they are navigated to the Job Details page in a new tab
    And the results displays the Business Hours jobs when VITSAHFlag False

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter value 2 | filter value index 2 |
      | LLAdmin@looped.in | Octopus@6 | VITSAHFlag      | 2                     | Is                  | 2                         | True           | 2                    | False          | 2                    |

    #LL-761 Scenario 4: Verifying the results for filter Interpreter Duration (In Sec) with all available conditions
  @LL-761 @FilterInterpreterDurationSecAllConditions
  Scenario Outline: Verifying the results for filter Interpreter Duration (In Sec) with all available conditions
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    Then the results display correct jobs which has the duration less than the duration set in filters "<filter value 1>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 2>" "<filter comparator index 1>", "<filter value 2>" "<filter value index 1>"
    And the results display correct jobs which has the duration less than or equal to the duration set in filters "<filter value 2>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 3>" "<filter comparator index 1>", "<filter value 3>" "<filter value index 1>"
    And the results display correct jobs which has the duration equal to the duration set in filters "<filter value 3>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 4>" "<filter comparator index 1>", "<filter value 4>" "<filter value index 1>"
    And the results display correct jobs which has the duration not equal to the duration set in filters "<filter value 4>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 5>" "<filter comparator index 1>", "<filter value 5>" "<filter value index 1>"
    And the results display correct jobs which has the duration greater than the duration set in filters "<expected value 5>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 6>" "<filter comparator index 1>", "<filter value 6>" "<filter value index 1>"
    And the results display correct jobs which has the duration greater than or equal to the duration set in filters "<expected value 6>"

    Examples:
      | username          | password  | filter option 1              | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter comparator 2 | filter value 2 | filter comparator 3 | filter value 3 | filter comparator 4 | filter value 4 | filter comparator 5 | filter value 5 | expected value 5 | filter comparator 6 | filter value 6 | expected value 6 |
      | LLAdmin@looped.in | Octopus@6 | InterpreterDuration (In Sec) | 2                     | <                   | 2                         | 59             | 1                    | <=                  | 59             | Is                  | 59             | Is not              | 59             | >                   | 60             | 0                | >=                  | 60             | 1                |

    #LL-881 Scenario 1: Call count in Summary value should match the actual jobs under ODTI Jobs page
  @LL-881 @CallCountSummaryMatchJobsInODTIJobs
  Scenario Outline: Call count in Summary value should match the actual jobs under ODTI Jobs page
    When I login with "<username>" and "<password>"
    And I click ODTI header link
    And I view the ODTI > ODTI Jobs page
    And The RecordStatus Is Export
    And I click Advanced search link in Admin
    And I add filter "<filter option 1>" "<filter option index 1>", "<filter comparator 1>" "<filter comparator index 1>", "<filter value 1>" "<filter value index 1>"
    And I click Advanced search link in Admin
    And I add filter "<filter option 2>" "<filter option index 2>", "<filter comparator 2>" "<filter comparator index 2>", "<filter value 2>" "<filter value index 2>"
    And I get the records count in records counter in Admin
    And user navigates to ODTI Dashboard
    And selects the same Start date "<start date dashboard>" and End date "<end date dashboard>" as in ODTI Jobs page
    And click on Apply button in ODTI dashboard page
    Then the value displayed for Calls under Summary section should match with the ODTI Jobs page

    Examples:
      | username          | password  | filter option 1 | filter option index 1 | filter comparator 1 | filter comparator index 1 | filter value 1 | filter value index 1 | filter option 2 | filter option index 2 | filter comparator 2 | filter comparator index 2 | filter value 2 | filter value index 2 | start date dashboard | end date dashboard |
      | LLAdmin@looped.in | Octopus@6 | Job Date        | 2                     | After               | 2                         | 01-03-2023     | 1                    | Job Date        | 3                     | Before              | 3                         | 05-09-2023     | 2                    | 02-03-2023           | 04-09-2023         |