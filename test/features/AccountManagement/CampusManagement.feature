@CampusManagement
Feature: Campus Management features

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @CreateCampus  @ViewCampus
  Scenario Outline: Create a new campus
   When I login with "<username>" and "<password>"
   And I click account management link  
   And I click add campus link
   And I select campus type "<campus type>"
   And I enter campus address "<campus address1>","<campus address2>"
   And I enter postal address "<postal address1>","<postal address2>"
   And I enter campus post name "<postname1>","<postname2>"
   And I enter new campus name "<campus name>"
   And I enter campus abn "<abn>" and check
   And I select override invoice frequency "<invoice frequency>"
   And I click charge gst checkbox
   And I enter campus company name "<entity name>"
   And I enter campus trading name "<business name>"
   And I enter campus PO number "<po number>"
   And I click default bill to link
   And I search bill to name "<bill to>"
   And I click first bill to from search results
   And I click assign button
   And I enter videoloop pin "<videoloop pin>"
   And I click save campus button
   And I handle duplicate campus dialog
   Then I verify campus name "<campus name>"
   And I click manage campus click
   And I verify manage campus fields are present
   
   Examples:
   | username           | password    | campus type  | campus address1                             | campus address2                              | postname1   | postname2    |  postal address1                   | postal address2  | abn         | campus name  | entity type | entity name  | po number | invoice frequency | business name   |  bill to                | videoloop pin |
   | LLAdmin@looped.in  | Octopus@6    | Metro        |  1 St Kilda Rd, St Kilda VIC 3182           |  1 St Kilda Rd, St Kilda VIC 3182, Australia |  first post | second post  |  1 St Kilda Rd, St Kilda VIC 3182  |  St Kilda Street | 53819971946 | Melbourne LL | Government  | ll company   | 42345     | Weekly            | ll trading name | department of transport | 1234          |
  
  @ViewCampus  @ScheduleRates
  Scenario Outline: View campus schedule rates
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I search for campus "<campus id>"
   And I click the first campus link from search results
   Then I verify the onsite contract section is present
   And I verify the prebooked ti contract section is present

   Examples:
   | username          | password   | campus id        |
   | LLAdmin@looped.in |  Octopus@6  |  33124           |

  @ViewCampus  @BillToContracts
  Scenario Outline: View campus bill to contracts
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I search for campus "<campus id>"
   And I click the first campus link from search results
   Then I verify bill to contract section is present

   Examples:
   | username          | password   | campus id |
   | LLAdmin@looped.in |  Octopus@6  | 33124     |

   @ViewCampus  @AddGenderPreference
  Scenario Outline: View campus gender preferences.
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I search for campus "<campus id>"
   And I click the first campus link from search results
   And I delete all preferences
   And I click add preference button
   And I select preference type "Gender"
   And I click save preference button
   Then I verify gender preference section is present
   And I verify police check preference section is present
   And I verify working with children preference section is present
   And I delete all preferences

   Examples:
   | username          | password   | campus id      |
   | LLAdmin@looped.in |  Octopus@6  | 33124          |

  @ViewCampus  @AddVaccination
  Scenario Outline: View campus vaccinations
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I search for campus "<campus id>"
   And I click the first campus link from search results
   And I delete all vaccinations
   And I click add vaccination button
   And I select disease "<disease>"
   And I enter valid months "<valid months>"
   And I click save vaccination button
   Then I verify vaccination "<disease>" is present

   Examples:
   | username          | password   | campus id | disease      | valid months |
   | LLAdmin@looped.in |  Octopus@6  | 33124     |  Hepatitis B |  2           |

  @ViewCampus  @AddDimension
  Scenario Outline: View campus add dimension
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I search for campus "<campus id>"
   And I click the first campus link from search results
   And I click add dimension cloud button
   And I select dimension cloud type and value "<dimension type>","<dimension value>"
   Then I verify dimension cloud "<dimension value>" is present
   And I delete the added dimension tag

   Examples:
   | username          | password   | campus id | dimension type   | dimension value |
   | LLAdmin@looped.in |  Octopus@6  | 33124     |  Client Type     |  Commercial     |

  @ViewCampus  @AddNote1
  Scenario Outline: View campus add notes
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I search for campus "<campus id>"
   And I click the first campus link from search results
   And I click add note button
   And I enter note details "<note title>","<note message>"
   And I click save note button
   Then I verify the note is added with "<note title>","<note message>"
   And I delete added note

   Examples: 
   | username          | password   | campus id | note title     | note message         |
   | LLAdmin@looped.in |  Octopus@6  | 33124     |  Auto notes    |  Test Automation     |

  @ViewCampus  @TravelRates
  Scenario Outline: View campus check travel rates section.
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I search for campus "<campus id>"
   And I click the first campus link from search results
   Then I verify travel rate section is present

   Examples: 
   | username          | password   | campus id |
   | LLAdmin@looped.in |  Octopus@6  | 33124     | 

   @ViewCampus  @AddNAATIOverride1
  Scenario Outline: Add naati override for campus.
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I create a new campus
   And I search for created campus 
   And I click the first campus link from search results
   And I click add naati override button
   And I select service language "<language>"
   And I select service naati level "<naati level>"
   And I click save naati button
   Then I verify the override naati is added "<language>"
   And I delete added override naati

   Examples: 
   | username          | password   | campus id         | language                       | naati level |
   | LLAdmin@looped.in |  Octopus@6  | Melbourne LL      | GERMAN - Video Conferencing    | Recognised  |

  # @ViewCampus  @CancellationFee
  # Scenario Outline: View campus add cancellation fee.
  #  When I login with "<username>" and "<password>"
  #  And I click account management link 
  #  And I search for campus "<campus id>"
  #  And I click the first campus link from search results
  #  And I click add cancellation fee button
  #  And I enter cancellation fee name "<fee name>"
  #  And I enter cancellation hours before "<hours before>"
  #  And I enter cancellation duration "<duration>"
  #  And I enter client fee "<client fee>"
  #  And I enter unable to service fee "<unable to service fee>"
  #  And I enter failed to attend fee "<failed to attend fee>"
  #  And I click save cancellation fee button
  #  Then I verify cancellation fee is added "<fee name>","<hours before>","<duration>","<client fee>","<unable to service fee>","<failed to attend fee>"
  #  And I delete the added cancellation fee

  #  Examples: 
  #  | username          | password   | campus id          | fee name    | hours before  | duration | client fee | unable to service fee | failed to attend fee |
  #  | LLAdmin@looped.in |  Octopus@6  | Melbourne LL       | Testing fee |  96           |  1       |   5        |        10             |     15               | 

  @ViewCampus  @NES
  Scenario Outline: Add NES
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I search for campus "<campus id>"
   And I click the first campus link from search results
   And I click add NES button
   And I select nes language "<language>"
   And I click save nes button
   Then I verify nes language is added "<language>"
   And I delete the added nes

   Examples: 
   | username          | password   | campus id        | language                      |
   | LLAdmin@looped.in |  Octopus@6  | Melbourne LL     | GERMAN - Video Conferencing   |

  @ViewCampus  @CommonInstruction
  Scenario Outline: View campus check common instructions section.
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I search for campus "<campus id>"
   And I click the first campus link from search results
   And I click add common instructions button
   And I enter common instruction title "<title>"
   And I enter common instruction description "<description>"
   And I click add common instruction button
   Then I verify common instruction title and description "<title>","<description>"
   And I delete added common instruction

   Examples: 
   | username          | password   | campus id  | title               | description      |
   | LLAdmin@looped.in |  Octopus@6  |  32548     | Automation Testing  | Test Instruction |

   @ViewCampus  @CustomizedField
  Scenario Outline: View campus check travel rates section.
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I search for campus "<campus id>"
   And I click the first campus link from search results
   And I click add custom field button
   And I enter field name "<field name>"
   And I click custom field add button
   Then I verify custom field is added "<field name>"
   And I delete added custom field

   Examples: 
   | username          | password   | campus id | field name        | 
   | LLAdmin@looped.in |  Octopus@6  | 32548     | Automation Field  |

 #LL-443 Scenario 3a: Admin views Short Code list
 @ViewShortCodeList
 Scenario Outline: Admin views short code list
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And The Admin is viewing the Campus page
  And They select the plus icon
  And Open the Dimension list dropdown
  And Selects the "<shortcode option>" dimension list option
  Then They will see the new short codes
  And The new short codes will appear at the top of the list in alphabetical order A-Z
  And select a value dropdown options should not have any value with zzz- prefix in dropdown

  Examples:
   | username          | password    | campus id | shortcode option |
   | LLAdmin@looped.in |  Octopus@6  | 33124     | Shortcode        |

  #LL-443 Scenario 3b: Admin selects new Short Code dimension and value
 @NewShortCodeDimensionValue
 Scenario Outline: Admin selects new Short Code dimension and value
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And They select the plus icon
  And Open the Dimension list dropdown
  And Selects the "<shortcode option>" dimension list option
  And They select a value "<shortcode value>" from the select a value dropdown
  Then The tag "<shortcode option>","<shortcode value>" will be added in the Dimension Tag Cloud section
  And They select the red cross x on the tag "<shortcode option>","<shortcode value>"

  Examples:
   | username          | password    | campus id | shortcode option | shortcode value |
   | LLAdmin@looped.in |  Octopus@6  | 33124     | Shortcode        | ACC             |

  #LL-443 Scenario 4a: Admin views Budget Code dimension
 @ViewBudgetCodeDimension
 Scenario Outline: Admin views Budget Code dimension
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And The Admin is viewing the Campus page
  And They select the plus icon
  And Open the Dimension list dropdown
  Then They will see the "<budget code option>" dimension list option

  Examples:
   | username          | password    | campus id | budget code option |
   | LLAdmin@looped.in |  Octopus@6  | 33124     | Budget Code        |

  #LL-443 Scenario 4b: Admin selects Budget Code dimension
 @SelectBudgetCodeDimension
 Scenario Outline: Admin selects Budget Code dimension
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And The Admin is viewing the Dimension Tag Cloud section
  And They select the plus icon
  And Open the Dimension list dropdown
  And They add the "<budget code option>" list option dimension
  Then They will be able to see the list of Budget Code values

  Examples:
   | username          | password    | campus id | budget code option |
   | LLAdmin@looped.in |  Octopus@6  | 33124     | Budget Code        |

  #LL-443 Scenario 4c: Admin adds Budget Code dimension and value
 @AddBudgetCodeDimensionValue
 Scenario Outline: Admin adds Budget Code dimension and value
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And They select the plus icon
  And Open the Dimension list dropdown
  And They add the "<budget code option>" list option dimension
  And They select a value "<budget code value>" from the select a value dropdown
  Then The tag "<budget code option>","<budget code value>" will be added in the Dimension Tag Cloud section
  And They select the red cross x on the tag "<budget code option>","<budget code value>"

  Examples:
   | username          | password    | campus id | budget code option | budget code value |
   | LLAdmin@looped.in |  Octopus@6  | 33124     | Budget Code        | ANZ Bank          |

  #LL-443 Scenario 5a: Admin cancels adding a dimension
 @CancelAddingDimension
 Scenario Outline: Admin cancels adding a dimension
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And The Admin is viewing the Dimension Tag Cloud section
  And They select the plus icon
  And The dimension dropdown is displayed
  And They select the x next to the dropdown
  Then The adding of a dimension is cancelled
  And The tag will not be added to the Dimension Tag Cloud section

  Examples:
   | username          | password    | campus id |
   | LLAdmin@looped.in |  Octopus@6  | 33124     |

  #LL-443 Scenario 5b: Admin cancels adding a dimension and value
 @CancelAddingDimensionValue
 Scenario Outline: Admin cancels adding a dimension and value
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And The Admin is viewing the Dimension Tag Cloud section
  And They select the plus icon
  And They add the "<budget code option>" list option dimension
  And The select a value dropdown is displayed
  And They select the x next to the dropdown
  Then The adding of a dimension is cancelled
  And The tag will not be added to the Dimension Tag Cloud section

  Examples:
   | username          | password    | campus id | budget code option |
   | LLAdmin@looped.in |  Octopus@6  | 33124     | Budget Code        |

  #LL-443 Scenario 6: Admin removes dimension and value
 @RemoveDimensionValue
 Scenario Outline: Admin removes dimension and value
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And They select the plus icon
  And Open the Dimension list dropdown
  And They add the "<budget code option>" list option dimension
  And They select a value "<budget code value>" from the select a value dropdown
  And The tag "<budget code option>","<budget code value>" will be added in the Dimension Tag Cloud section
  And They select the red cross x on the tag "<budget code option>","<budget code value>"
  Then The tag will be deleted
  And The tag "<budget code option>","<budget code value>" will not be visible in the Dimension Tag Cloud section

  Examples:
   | username          | password    | campus id | budget code option | budget code value |
   | LLAdmin@looped.in |  Octopus@6  | 33124     | Budget Code        | ANZ Bank          |

  #LL-612 Scenario 1: Admin creates CBO from Campus
 @CreateCBOFromCampus
 Scenario Outline: Admin creates CBO from Campus
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And The Admin is on the Campus Management page > Manage Campus popup
  And They click Assign Booking Officer > Add New User
  And Fill out all the required details "<firstname>", email, "<landline number>" on the Select User popup
  And They click the Save button on the Select User popup
  Then The user is created
  When The booking officer popup is closed
  And I click Admin header link
  Then The user "<firstname>" will be displayed in the Admin > Accounts section
  And The Created Date is captured in the form of DD slash MM slash YYYY HH:MM:SS

  Examples:
   | username          | password    | campus id | firstname     | landline number |
   | LLAdmin@looped.in |  Octopus@6  | 33124     | AutomationCBO | 0212345678      |

  #LL-642 Scenario 1a: Campuses in the Excel file have the same OLD shortcodes (CampusShortCode column) in the excel
 @SameOldShortCodes @LL-642
 Scenario Outline: Campuses in the list have the same OLD shortcodes
  When I login with "<username>" and "<password>"
  Then the campuses "<campus ids>" should have the original short code "<shortcode option>","<shortcode values>" attached in Dimension Tag Cloud section

  Examples:
   | username          | password    | campus ids                                                  | shortcode option | shortcode values                                                  |
   | LLAdmin@looped.in |  Octopus@6  | 10070,10114,10146,10600,10665,10788,11788,12112,12184,12228 | Shortcode        | CV,VIC RD,Victoria Police,CSV,OPP,VLA,HPV,HEALTH,VIC RD,FAMILY CT |

  #LL-642 Scenario 1b: Campuses in the Excel file have the same NEW shortcodes (Revised Shortcode / Organisation column) in the excel
 @SameNewShortCodes @LL-642
 Scenario Outline: Campuses in the list have the same NEW shortcodes
  When I login with "<username>" and "<password>"
  Then the campuses "<campus ids>" should have the original short code "<shortcode option>","<shortcode values>" attached in Dimension Tag Cloud section

  Examples:
   | username          | password    | campus ids                                                  | shortcode option | shortcode values                                                                                                                                                                             |
   | LLAdmin@looped.in |  Octopus@6  | 10070,10114,10146,10600,10665,10788,11788,12112,12184,12228 | ShortcodeNew     | Corrections Victoria,VicRoads Centre,Victoria Police,Magistrates,Office of Public Prosecutions,Victoria Legal Aid,Alfred Health,Alfred Health,VicRoads Centre,Federal Circuit Court of Aust. |

  #LL-642 Scenario 4: New budget codes should still exist
 @NewBudgetCodesExist @LL-642
 Scenario Outline: New budget codes should still exist
  When I login with "<username>" and "<password>"
  Then the campuses "<campus ids>" should have the original short code "<budget code option>","<shortcode values>" attached in Dimension Tag Cloud section

  Examples:
   | username          | password    | campus ids                                                  | budget code option | shortcode values                                                                                                                                                                                    |
   | LLAdmin@looped.in | Octopus@6   | 10070,10114,10146,10600,10665,10788,11788,12112,12184,12228 | Budget Code        | Corrections Victoria,VicRoads,Victoria Police,Court Services Victoria (CSV),Dept of Justice (VIC),Victoria Legal Aid,Healthshare Victoria (HPV),Unallocated,VicRoads,Federal Circuit Court of Aust. |

  #LL-642 Scenario 5: New Dimension List is created ShortCodeNew
 @ShortCodeNewExists @LL-642
 Scenario Outline: Admin views Budget Code dimension
  When I login with "<username>" and "<password>"
  Then the campuses "<campus ids>" list should contain the new dimension called "<dimension list option>"

  Examples:
   | username          | password    | campus ids                                                  | dimension list option |
   | LLAdmin@looped.in |  Octopus@6  | 10070,10114,10146,10600,10665,10788,11788,12112,12184,12228 | ShortcodeNew          |

  #LL-443 AC 7: User should not be able to add multiple dimensions list at same time
 @MultipleDimensionsNotAtOnce @LL-443
 Scenario Outline: User should not be able to add multiple dimensions list at same time
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And The Admin is viewing the Dimension Tag Cloud section
  And They select the plus icon
  And The dimension dropdown is displayed
  And the dimension dropdown list has X icon beside the dropdown
  Then there should not be any plus icon displayed and multiple dimensions cannot be added simultaneously

  Examples:
   | username          | password    | campus id |
   | LLAdmin@looped.in |  Octopus@6  | 33124     |


   #LL-443 AC8: User should not be able to edit the saved/ existing dimensions.
 @EditExistingDimensionNotAllowed
 Scenario Outline: Admin removes dimension and value
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And They select the plus icon
  And Open the Dimension list dropdown
  And They add the "<budget code option>" list option dimension
  And They select a value "<budget code value>" from the select a value dropdown
  And The tag "<budget code option>","<budget code value>" will be added in the Dimension Tag Cloud section
  And I click on the above dimension created "<budget code option>","<budget code value>"
  Then the dimension "<budget code option>","<budget code value>" is not clickable, it should be readable only
  And They select the red cross x on the tag "<budget code option>","<budget code value>"
  And The tag will be deleted
  And The tag "<budget code option>","<budget code value>" will not be visible in the Dimension Tag Cloud section

  Examples:
   | username          | password    | campus id | budget code option | budget code value |
   | LLAdmin@looped.in |  Octopus@6  | 33124     | Budget Code        | ANZ Bank          |

  #LL-324 Scenario 1b: Admin sees ODTI gender preference option on Campus
 @LL-324 @ODTIGenderPreferenceOnCampus
 Scenario Outline: Admin sees ODTI gender preference option on Campus
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And they click Add preference button in Campus Details
  And click the Preference Type dropdown in Campus Details
  Then they will see an ODTI gender preference option with the label "<preference type option>" in Campus Details
  And this option "<preference type option>" will appear under the Gender option in Campus Details
  And they can select this option "<preference type option>" in Campus Details
  And they select preference option "<preference>" in Campus Details
  And they click save Contract Preference button in Campus Details
  And they remove added preference type option "<preference type option>" in Campus Details

  Examples:
   | username          | password    | campus id | preference type option | preference |
   | LLAdmin@looped.in |  Octopus@6  | 33124     | Gender (On-demand TI)  | Female     |

  #LL-324 Scenario 2: Campus can still add their own Gender (On-Demand TI) even when Contract does not have any
 @LL-324 @CampusAddOwnODTIGenderPreference
 Scenario Outline: Campus can still add their own Gender (On-Demand TI) even when Contract does not have any
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for contract title "<contract title>"
  And I click the contract link "<contract title>" from search results
  And related contract do not have Gender On-Demand TI preference added
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And they click Add preference button in Campus Details
  And click the Preference Type dropdown in Campus Details
  Then they will see an ODTI gender preference option with the label "<preference type option>" in Campus Details
  And this option "<preference type option>" will appear under the Gender option in Campus Details
  And they can select this option "<preference type option>" in Campus Details
  And they select preference option "<preference>" in Campus Details
  And they click save Contract Preference button in Campus Details
  And the preference is added for the Campus
  And this preference "<preference type option>" will have delete icon as this created by campus
  And they remove added preference type option "<preference type option>" in Campus Details

  Examples:
   | username          | password    | contract title                                   | campus id | preference type option | preference |
   | LLAdmin@looped.in |  Octopus@6  | Department of Health and Human Services - Health | 33124     | Gender (On-demand TI)  | Female     |

  #LL-324 Scenario 3: Updating the preference option on Campus level will not change the actual preference set on Contract
 @LL-324 @UpdatePreferenceOnCampusDoesNotChangeOnContract
 Scenario Outline: Updating the preference option on Campus level will not change the actual preference set on Contract
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for contract title "<contract title>"
  And I click the contract link "<contract title>" from search results
  And they click Add preference button in Contract Details
  And they can select this option "<preference type option>" in Contract Details
  And they select preference option "<preference>" in Contract Details
  And they click save Contract Preference button in Contract Details
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And this preference "<preference>" is inherited by the Campus
  And preference inherited from the Contract can be overridden "<override preference>" on the Campus level
  And we see the reset option on the right corner and the text Customized appears
  And I click account management link
  And I search for contract title "<contract title>"
  And I click the contract link "<contract title>" from search results
  Then in contract page, the actual preference set "<preference>" still stays the same
  And they remove added preference type option "<preference type option>" in Contract Details
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And they remove added preference type option "<preference type option>" in Campus Details

  Examples:
   | username          | password  | contract title                                   | preference type option | campus id | preference | override preference |
   | LLAdmin@looped.in | Octopus@6 | Department of Health and Human Services - Health | Gender (On-demand TI)  | 33124     | Female     | Preferred Female    |

  #LL-324 Scenario 4: User cannot delete the preference on Campus level when added on contact page
 @LL-324 @CannotDeleteCampusPreferenceAddedOnContract
 Scenario Outline: User cannot delete the preference on Campus level when added on contact page
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for contract title "<contract title>"
  And I click the contract link "<contract title>" from search results
  And they click Add preference button in Contract Details
  And they can select this option "<preference type option>" in Contract Details
  And they select preference option "<preference>" in Contract Details
  And they click save Contract Preference button in Contract Details
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And this preference "<preference>" is inherited by the Campus
  Then no delete button exists for the "<preference type option>" block in Campus Details
  And I click account management link
  And I search for contract title "<contract title>"
  And I click the contract link "<contract title>" from search results
  And they remove added preference type option "<preference type option>" in Contract Details

  Examples:
   | username          | password  | contract title                                   | preference type option | campus id | preference |
   | LLAdmin@looped.in | Octopus@6 | Department of Health and Human Services - Health | Gender (On-demand TI)  | 33124     | Female     |

  #LL-334 Scenario 1: Block at Campus / Contractor level
 @LL-334 @ContractorBlockOnCampus
 Scenario Outline: Block at Campus / Contractor level
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor>"
  And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And the admin clicks on Remove on campus blocker
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
  And I handle duplicate job warning window
  And I click submit button
  And the job created success message should appear
  And I search for created job request
  And I verify the job is listed in search results
  And I click on first job id from interpreting job list
  And I switch to the job allocation window
  And the contractor above "<contractor>" status will be "<eligible status>" for the Job
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And they add a block on a contractor or interpreter "<contractor>"
  And I click Interpreting header link
  And I select "<dropdownfilter>" from the filter dropdown
  And I search for created job request
  And I verify the job is listed in search results
  And I click on first job id from interpreting job list
  And I switch to the job allocation window
  Then the contractor or interpreter "<contractor>" is unable to view or accept any job for that campus or Organisation
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And the admin clicks on Remove on campus blocker

  Examples:
   | username          | password  | campus id | contractor    | service     | from      | to      | level                 | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | eligible status   |
   | LLAdmin@looped.in | Octopus@6 | 33124     | Tigist KEBEDE | Interpreter | zz-Zenq2  | ENGLISH | Certified Interpreter | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | Auto Notification |

  #LL-334 Scenario 2: Block at Organisation level
 @LL-334 @ContractorBlockOnOrganisation
 Scenario Outline: Scenario 2: Block at Organisation level
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor>"
  And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And the user is on the Organisation page
  And the admin clicks on Remove on Organisation blocker
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
  And I enter PO number "<PO Number>"
  And I enter CF_OnSite "<CF_OnSite>"
  And I enter "<email>" email address
  And I click save and proceed to summary button
  And I handle duplicate job warning window
  And I click submit button
  And the job created success message should appear
  And I search for created job request
  And I verify the job is listed in search results
  And I click on first job id from interpreting job list
  And I switch to the job allocation window
  And the contractor above "<contractor>" status will be "<eligible status>" for the Job
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And the user is on the Organisation page
  And they add a block on a contractor or interpreter "<contractor>" on the Organisation page
  And I click Interpreting header link
  And I select "<dropdownfilter>" from the filter dropdown
  And I search for created job request
  And I verify the job is listed in search results
  And I click on first job id from interpreting job list
  And I switch to the job allocation window
  Then the contractor or interpreter "<contractor>" is unable to view or accept any job for that campus or Organisation
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And the user is on the Organisation page
  And the admin clicks on Remove on Organisation blocker

  Examples:
   | username          | password  | campus id | contractor    | service     | from      | to      | level                 | request job type     | dropdownfilter | campus pin | Requester Name | language   | assignment type   | date         | time  | PO Number | CF_OnSite | email        | eligible status   |
   | LLAdmin@looped.in | Octopus@6 | 31333     | Tigist KEBEDE | Interpreter | zz-Zenq2  | ENGLISH | Certified Interpreter | Pre-Booked Telephone |  Management    |  31333     | Jek kek        |  zz-Zenq2  |   Halfday         | short notice | 09:30 | 1234      | 567       | hh@bb.com.au | Auto Notification |