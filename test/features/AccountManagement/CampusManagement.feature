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
  And Delete the tag "<shortcode option>","<shortcode value>"

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
  And Delete the tag "<budget code option>","<budget code value>"

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