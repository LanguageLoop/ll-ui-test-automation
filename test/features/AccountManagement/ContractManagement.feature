@ContractManagement
Feature: Contract Management features

   Background: Load the Loopedin login page
   Given the looped in login page is opened

  @AddContract
  Scenario Outline: Add contract
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I click add contract link
   And I enter contract title "<contract title>"
   And I enter contract number "<contract number>"
   And I enter contract commencement date "<commencement date>"
   And I enter contract completion date "<completion date>"
   And I upload contract file
   And I click save contract button
   Then I verify contract is created

   Examples:
   | username          | password   | contract title      | contract number | payment terms     | commencement date | completion date |
   | LLAdmin@looped.in |  Octopus@6  | Automation Contract |  234234R        |  Automation terms |  today            |  20-12-2033     |

  @DuplicateContract
  Scenario Outline: Duplicate contract
   When I login with "<username>" and "<password>"
   And I click account management link 
   And I click add contract link
   And I enter contract title "<contract title>"
   And I enter contract number "<contract number>"
   And I enter contract commencement date "<commencement date>"
   And I enter contract completion date "<completion date>"
   And I upload contract file
   And I click save contract button
   Then I verify contract is created 
   And I click copy contract button
   And I verify duplicate contract is created "<contract title>"

   Examples:
   | username          | password   | contract title      | contract number | payment terms     | commencement date | completion date |
   | LLAdmin@looped.in |  Octopus@6  | Automation Contract |  234234R        |  Automation terms |  today            |  20-12-2033     |

   @AddMinimumNAATILevel @tt
   Scenario Outline: Add minium naati level for contract
   When I login with "<username>" and "<password>"
   And I click account management link 
  
   And I search for contract title "<contract title>"
   And I click the first contract link from search results
  
   And I click add minimum naati level
   And I select service language "<language>"
   And I select service naati level "<naati level>"
   And I click save naati button 
  # Then I verify the minimum naati is added "<language>"
   #And I delete added miniumum naati

    Examples: 
   | username          | password   | contract title                 | language          | naati level |
   | LLAdmin@looped.in |  Octopus@6  | Victorian Government - Bill To | AFRIKAANS - Video | Non-Accredited  |

   @AddCommonInstructions 
   Scenario Outline: Add common instructions for contract
   When I login with "<username>" and "<password>"
   And I click account management link 
  
   And I search for contract title "<contract title>"
   And I click the first contract link from search results
  
   And I click add common instructions button
   And I enter common instruction title "<title>"
   And I enter common instruction description "<description>"
   And I click add common instruction button
   Then I verify common instruction title and description "<title>","<description>"

    Examples: 
   | username          | password   | contract title                 | title              | description         |
   | LLAdmin@looped.in |  Octopus@6  | Victorian Government - Bill To | Automation Testing | simple description  |

   @AddContractRate
   Scenario Outline: Add contract rates
   When I login with "<username>" and "<password>"
   And I click account management link 
  
   And I search for contract title "<contract title>"
   And I click the first contract link from search results
  
   And I click add contract rates
   And I enter contract rate details "<rate name>","<hour>","<language>","<contract min period>","<contract min rate>","<contract ongoing>","<contractor min period>","<contractor min rate>","<contractor ongoing>"
   Then I verify contract rate is added

    Examples: 
   | username          | password   |language               | contract title      | rate name       | hour             | contract min period | contract min rate | contract ongoing | contractor min period | contractor min rate | contractor ongoing|
   | LLAdmin@looped.in |  Octopus@6  | All Languages - Video | Automation Contract | Automation Rate | Business Hour A  |    2                |    200            |  15              |      2                |     250             |     15            |    

    
   @AddAssignmentType
   Scenario Outline: Add assignment types for contract
   When I login with "<username>" and "<password>"
   And I click account management link 
  
   And I search for contract title "<contract title>"
   And I click the first contract link from search results
  
   And I click add assignment type
   And I enter assignment type label "<assignment label> "
  
   And I click add assignment button
   Then I verify assignment type is added
   And I delete assignment type

    Examples: 
   | username          | password   | contract title                 | assignment label      | description         |
   | LLAdmin@looped.in |  Octopus@6  | Victorian Government - Bill To | Automation Assignment | simple description  |

    #LL-282 Scenario 1 - User views ODTI rate fields
 @LL-282 @UserViewsODTIRateFields
 Scenario Outline: User views ODTI rate fields
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for contract title "<contract title>"
  And I click the contract link "<contract title>" from search results
  And I click add contract rates
  And the Manage Rate popup appears
  And they select "<service language>" from Service Language dropdown
  Then the new ODTI fields will display using the existing layout under the Contract Rates "<contract rates fields>" and Contractor Rates "<contractor rates fields>" sections
  And the following fields are hidden "<hidden fields>"
  And the Schedule Segment section is hidden
  And the user can add rates "<contract rates values>" for Client contract rates "<contract rates fields>"
  And the user can add rates "<contractor rates values>" for Client contractor rates "<contractor rates fields>"
  And the user can add NAATI Accreditation Level "<NAATI Level>"
  And the user can add Hour Type "<hour type>"

  Examples:
   | username          | password  | contract title      | service language               | contract rates fields                                                                                                                                                                                                      | contractor rates fields                                                                                                                                                                                 | contract rates values            | contractor rates values     | hidden fields                                                    | NAATI Level    | hour type     |
   | LLAdmin@looped.in | Octopus@6 | Automation Contract | zz-Zenq2 - On Demand Telephone | Minimum Period 1 (mins),Minimum Rate 1 ($/period),Ongoing Period 1 (mins),Ongoing Rate 1 ($/period),NES Connection Fee,Minimum Period 2 (mins),Minimum Rate 2 ($/period),Ongoing Period 2 (mins),Ongoing Rate 2 ($/period) | Minimum Period 1 (mins),Minimum Rate 1 ($/period),Ongoing Period 1 (mins),Ongoing Rate 1 ($/period),Minimum Period 2 (mins),Minimum Rate 2 ($/period),Ongoing Period 2 (mins),Ongoing Rate 2 ($/period) | 1,1.00,2,2.00,6.00,3,3.00,4,4.00 | 1,1.00,2,2.00,3,3.00,4,4.00 | Short Notice,Block Booking,After Hours Booking,Half Day,Full Day | Non-Accredited | After Hours A |

  #LL-282 Scenario 2 - Validate required fields
 @LL-282 @ValidateRequiredFields
 Scenario Outline: Validate required fields
  When I login with "<username>" and "<password>"
  And I click account management link
  And I click add contract link
  And I enter contract title "<contract title>"
  And I enter contract number "<contract number>"
  And I enter contract commencement date "<commencement date>"
  And I enter contract completion date "<completion date>"
  And I upload contract file
  And I click save contract button
  And I verify contract is created
  And I click add contract rates
  And the Manage Rate popup appears
  And they select "<service language>" from Service Language dropdown
  And the user can add rates "<contract rates values>" for Client contract rates "<contract rates fields>"
  And the user can add rates "<contractor rates values>" for Client contractor rates "<contractor rates fields>"
  And the user can add NAATI Accreditation Level "<NAATI Level>"
  And the user can add Hour Type "<hour type>"
  And the user can add Name "<rate name>"
  And they click the Save Rate button
  Then the contract rate data will save
  And they will return to the Contract Details page
  And the saved ODTI Contract Rates will be displayed in the Contract Rates Schedule table "<service language accordion>"

  Examples:
   | username          | password  | contract title           | contract number | commencement date | completion date | contract title      | service language               | contract rates fields                                                                                                                                                                                                      | contractor rates fields                                                                                                                                                                                 | contract rates values            | contractor rates values     | NAATI Level    | hour type     | rate name       | service language accordion |
   | LLAdmin@looped.in | Octopus@6 | Automation Contract test | 234234R         | today             | 20-12-2033      | Automation Contract | zz-Zenq2 - On Demand Telephone | Minimum Period 1 (mins),Minimum Rate 1 ($/period),Ongoing Period 1 (mins),Ongoing Rate 1 ($/period),NES Connection Fee,Minimum Period 2 (mins),Minimum Rate 2 ($/period),Ongoing Period 2 (mins),Ongoing Rate 2 ($/period) | Minimum Period 1 (mins),Minimum Rate 1 ($/period),Ongoing Period 1 (mins),Ongoing Rate 1 ($/period),Minimum Period 2 (mins),Minimum Rate 2 ($/period),Ongoing Period 2 (mins),Ongoing Rate 2 ($/period) | 1,1.00,2,2.00,6.00,3,3.00,4,4.00 | 1,1.00,2,2.00,3,3.00,4,4.00 | Non-Accredited | After Hours A | Automation Rate | On Demand Telephone        |