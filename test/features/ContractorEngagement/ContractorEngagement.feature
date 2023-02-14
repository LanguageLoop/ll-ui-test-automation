@ContractorEngagement
Feature: Contractor Engagement features

  Background: Load the Loopedin login page
    Given the looped in login page is opened


  @CreateContractor
  Scenario Outline: Create Contractor.
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I click add contractor button
    And I enter contractor details "<salutation>","<gender>","<name>","<pin>","<mobile>","<dob>","<email>","<address>"
    And I click contractor engagement link
    Then I verify contractor is created

    Examples:
      | username          | password  | salutation | gender | name                  | pin  | mobile     | dob        | email | address                 |
      | LLAdmin@looped.in | Octopus@6 | Mr         | Male   | Automation Contractor | 2323 | 0400000000 | 20-04-1982 | aa    | St Kilda VIC, Australia |


  @AddNAATIAccreditation
  Scenario Outline: Add naati accreditation
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And I click add accreditation link
    And I enter naati details "<service>","<from>","<to>","<level>"
    Then I verify the created naati accreditation "<from>","<to>"
    And I delete the naati accreditation

    Examples:
      | username          | password  | contractor  | service     | from      | to      | level      |
      | LLAdmin@looped.in | Octopus@6 | Contractor1 | Interpreter | AFRIKAANS | ENGLISH | Recognised |


  @AddContractorNotes
  Scenario Outline: Add contractor notes
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And I click add notes link
    And I enter contractor notes details "<title>","<message>"
    Then I verify contractor notes "<title>","<message>"
    And I delete contractor notes

    Examples:
      | username          | password  | contractor | title      | message |
      | LLAdmin@looped.in | Octopus@6 | Automation | Automation | Testing |

  @AddWorkEligbility
  Scenario Outline: Add contractor work eligibility
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I click add contractor button
    And I enter contractor details "<salutation>","<gender>","<name>","<pin>","<mobile>","<dob>","<email>","<address>"
    And I click contractor engagement link
    And I search and open created contractor
    And I click add work eligibility link
    And I enter work eligibility details "<id>","<number>","<years>"
    Then I verify work eligibility

    Examples:
      | username          | password  | contractor | clearance    | salutation | gender | name       | pin  | mobile     | dob        | email | address                 | id                  | number | years |
      | LLAdmin@looped.in | Octopus@6 | Automation | Police Check | Mr         | female | Automation | 1232 | 0400000000 | 12-12-1982 | all   | St Kilda VIC, Australia | Permanent Residence | 123456 | 4     |


  @AddClearance
  Scenario Outline: Add contractor clearance
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I click add contractor button
    And I enter contractor details "<salutation>","<gender>","<name>","<pin>","<mobile>","<dob>","<email>","<address>"
    And I click contractor engagement link
    And I search and open created contractor
    And I click add clearance link
    And I enter clearance details "<clearance>"
    Then I verify clearance "<clearance>"
    Then I delete clearances

    Examples:
      | username          | password  | contractor | clearance    | salutation | gender | name       | pin  | mobile     | dob        | email | address                 |
      | LLAdmin@looped.in | Octopus@6 | Automation | Police Check | Mr         | female | Automation | 1232 | 0400000000 | 12-12-1982 | all   | St Kilda VIC, Australia |


  @AddAvailability
  Scenario Outline: Create Contractor.
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I click add contractor button
    And I enter contractor details "<salutation>","<gender>","<name>","<pin>","<mobile>","<dob>","<email>","<address>"
    And I click contractor engagement link
    And I search and open created contractor
    And I click add availability link
    And I enter availability details "<type>","<words>"
    Then I verify availability details "<type>"

    Examples:
      | username          | password  | salutation | gender | name                  | pin  | mobile     | dob        | email | address                 | type        | words |
      | LLAdmin@looped.in | Octopus@6 | Mr         | Male   | Automation Contractor | 2323 | 0400000000 | 20-04-1982 | aa    | St Kilda VIC, Australia | Translation | 5     |


  @AddWorkPreference
  Scenario Outline: Add work preference
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and open contractor "<contractor>"
    And I click add work preference link
    And I enter preference details "<company>"
    Then I verify work preference "<company>"
    And I delete work preferences

    Examples:
      | username          | password  | contractor | company                 |
      | LLAdmin@looped.in | Octopus@6 | Automation | BOLTON CLARKE - DH RDNS |


  @AddReferees @test12
  Scenario Outline: Add  referee
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and open contractor "<contractor>"
    And I click add referee link
    And I enter referee details "<agency>","<name>"
    Then I verify referee "<agency>","<name>"
    And I delete referees

    Examples:
      | username          | password  | contractor | agency        | name        |
      | LLAdmin@looped.in | Octopus@6 | Automation | BOLTON CLARKE | Auto tester |



  #@50
  #Scenario: 50 contractors
   #When I login with "developer@languageloop.com.au" and "Password12!"
   #And I click contractor engagement link
   #When I create 50 contractors
   #When I want data


  @ValidateNAATIAccreditation@valNaati
  Scenario Outline: Add naati accreditation where LL Language name is different from NAATI language name
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And I see any naati accreditation already present
    And I click add accreditation link
    And I enter all naati details "<service>","<from>","<to>","<level>","<naati>"
    Then I verify the created naati accreditation "<from>","<to>"
    And I delete the naati accreditation

    Examples:
      | username          | password  | contractor | service     | from     | to       | level                             | naati     |
      | LLAdmin@looped.in | Octopus@6 | 6155       | Interpreter | ASSYRIAN | ENGLISH  | Recognised Practising Interpreter | CPN9LK67K |
      | LLAdmin@looped.in | Octopus@6 | 6268       | Translator  | ASSYRIAN | ENGLISH  | 3-into English                    | CPN7CL35L |
      | LLAdmin@looped.in | Octopus@6 | 6268       | Translator  | ENGLISH  | ASSYRIAN | 3-from English                    | CPN7CL35L |

   #LL-613 Block COVID Vax Exemption UI Scenario 1: Admin user clicks Add a Block
  @BlockCovidVaxExemption @AdminClicksAddBlock
  Scenario Outline: Block COVID Vax Exemption UI Admin user clicks Add a Block
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the admin is on the Contractor Profile page
    And the admin clicks on Add a Block
    Then the Contractor Blocking modal popup pops-up
    And there should be 3 Tabs : "<contractorPopupTab1>", "<contractorPopupTab2>", "<contractorPopupTab3>"

    Examples:
      | username          | password  | contractor | contractorPopupTab1 | contractorPopupTab2 | contractorPopupTab3 |
      | LLAdmin@looped.in | Octopus@6 | 12558      | Organisation        | Campus              | Bill-To             |

  #LL-613 Block COVID Vax Exemption UI Scenario 2a: Admin user clicks on the Bill To tab
  @BlockCovidVaxExemption @AdminClicksBillTo
  Scenario Outline: Block COVID Vax Exemption UI Admin user clicks on the Bill To tab
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the admin clicks on Add a Block
    And the Contractor Blocking modal popup pops-up
    And the admin clicks on the Bill To tab
    Then it should show a list of Contract Bill To’s
    And the search box should allow the admin to filter by Bill To name "<billToName>"
    And the user can select 1 or more Bill Tos

    Examples:
      | username          | password  | contractor | billToName                    |
      | LLAdmin@looped.in | Octopus@6 | 12558      | Catholic Education - User Pay |


   #LL-613 Block COVID Vax Exemption UI Scenario 2b: Job Types Selection
  @BlockCovidVaxExemption @JobTypesSelection
  Scenario Outline: Block COVID Vax Exemption UI Job Types Selection
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the admin clicks on Add a Block
    And the Contractor Blocking modal popup pops-up
    And the admin clicks on the Bill To tab
    Then it should show a list of Job Types, each with a checkbox
    And each Job Type should be default checked

    Examples:
      | username          | password  | contractor |
      | LLAdmin@looped.in | Octopus@6 | 12558      |

  #LL-613 Block COVID Vax Exemption UI Scenario 3a: Admin user Saves a block, success
  @BlockCovidVaxExemption @SavesBlockAtLeast1JobType
  Scenario Outline: Block COVID Vax Exemption UI Admin user Saves a block, success
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the admin clicks on Add a Block
    And the Contractor Blocking modal popup pops-up
    And the admin clicks on the Bill To tab
    And the inputs "<billTos>", "<severityLevel>" are valid in Bill-To tab
    And at least 1 Job Type "<jobTypes>" is selected
    Then the block is saved
    And the Contractor Blocking popup closes
    And the new block rule is displayed on the contractor’s profile
    And the selected JobTypes are applied to all the BillTo’s "<billTos>" blocking for the contractor
    And the selected blocked Job Types "<jobTypes>" are displayed in brackets after the Contractor name "<contractor>"
    And the admin clicks on Remove on a block

    Examples:
      | username          | password  | contractor | billTos                                                                    | severityLevel | jobTypes              |
      | LLAdmin@looped.in | Octopus@6 | 12558      | UserPay1 - Catholic Education - User Pay,MAGC14 - Magistrates Court - Hume | 1             | On Site,Pre-booked TI |

  #LL-613 Block COVID Vax Exemption UI Scenario 3b: Admin user Saves a block with all Job Types, success
  @BlockCovidVaxExemption @SavesBlockAllJobTypes
  Scenario Outline: Block COVID Vax Exemption UI Admin user Saves a block with all Job Types, success
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the admin clicks on Add a Block
    And the Contractor Blocking modal popup pops-up
    And the admin clicks on the Bill To tab
    And the inputs "<billTos>", "<severityLevel>" are valid in Bill-To tab
    And each Job Type should be default checked
    Then the block is saved
    And the Contractor Blocking popup closes
    And the new block rule is displayed on the contractor’s profile
    And the selected JobTypes are applied to all the BillTo’s "<billTos>" blocking for the contractor
    And no blocked job types "<jobTypes>" brackets will be displayed
    And the admin clicks on Remove on a block

    Examples:
      | username          | password  | contractor | billTos                                                                    | severityLevel | jobTypes                                                                           |
      | LLAdmin@looped.in | Octopus@6 | 12558      | UserPay1 - Catholic Education - User Pay,MAGC14 - Magistrates Court - Hume | 1             | Translation,On Site,Pre-booked TI,Video Conferencing,VideoLoop,On Demand Telephone |

    #LL-613 Block COVID Vax Exemption UI Scenario 3c: Admin user Saves a block
  @BlockCovidVaxExemption @SavesBlockInvalidInputs
  Scenario Outline: Block COVID Vax Exemption UI Admin user Saves a block
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the admin clicks on Add a Block
    And the Contractor Blocking modal popup pops-up
    And the admin clicks on the Bill To tab
    And the inputs "<billTos>", "<severityLevel>", "<startDate>", "<endDate>" are invalid or incomplete in Bill-To tab
    And each Job Type should be default checked
    And the block is saved
    Then the Contractor Blocking popup stays open
    And an appropriate message "<feedbackMessage>" is displayed

    Examples:
      | username          | password  | contractor | billTos   | severityLevel | startDate   | endDate | feedbackMessage                        |
      | LLAdmin@looped.in | Octopus@6 | 12558      |           | Level         |             |         | At least one blocking must be selected |

    #LL-613 Block COVID Vax Exemption UI Scenario 4: Admin edits a block
  @BlockCovidVaxExemption @EditBlock
  Scenario Outline: Block COVID Vax Exemption UI Admin edits a block
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the admin clicks on Add a Block
    And the Contractor Blocking modal popup pops-up
    And the admin clicks on the Bill To tab
    And the inputs "<billTo>", "<severityLevel>" are valid in Bill-To tab
    And each Job Type should be default checked
    And the block is saved
    And the Contractor Blocking popup closes
    And the new block rule is displayed on the contractor’s profile
    And the admin clicks on the name "<billTo>" of a block
    And the block is a "<billToTab>" block
    Then the Contractor Blocking modal popup pops-up
    And the type of Block appears as the only tab "<billToTab>"
    And the tab displays "<billToTab>"
    And it should show a list of Job Types, each with a checkbox
    And the Admin can make changes "<severityLevel>" and save
    And the Contractor Blocking popup closes
    And the admin clicks on Remove on a block

    Examples:
      | username          | password  | contractor | billTo                                   | severityLevel | billToTab |
      | LLAdmin@looped.in | Octopus@6 | 12558      | UserPay1 - Catholic Education - User Pay | 2             | Bill-To   |

    #LL-613 Block COVID Vax Exemption UI Scenario 5: Admin deletes a block
  @BlockCovidVaxExemption @DeleteABlock
  Scenario Outline: Block COVID Vax Exemption UI Admin deletes a block
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the admin clicks on Add a Block
    And the Contractor Blocking modal popup pops-up
    And the admin clicks on the Bill To tab
    And the inputs "<billTos>", "<severityLevel>" are valid in Bill-To tab
    And each Job Type should be default checked
    And the block is saved
    And the Contractor Blocking popup closes
    And the new block rule is displayed on the contractor’s profile
    And the admin clicks on Remove on a block
    Then the block "<billTos>" sadly disappears from the list…

    Examples:
      | username          | password  | contractor | billTos                                  | severityLevel |
      | LLAdmin@looped.in | Octopus@6 | 12558      | UserPay1 - Catholic Education - User Pay | 1             |

    #LL-613 Block COVID Vax Exemption UI Scenario 6: Block Expires
  @BlockCovidVaxExemption @BlockExpires
  Scenario Outline: Block COVID Vax Exemption UI Block Expires
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the admin clicks on Remove on a block
    And the admin clicks on Add a Block
    And the Contractor Blocking modal popup pops-up
    And the admin clicks on the Bill To tab
    And the inputs "<billTo>", "<severityLevel>" are valid in Bill-To tab
    And each Job Type should be default checked
    And the block is saved
    And the Contractor Blocking popup closes
    And the new block rule is displayed on the contractor’s profile
    And the admin clicks on the name "<billTo>" of a block
    And the expiry date "<startDate>", "<endDate>" is prior to the current date
    And the Contractor Blocking popup closes
    Then the block "<billTo>" sadly disappears from the list…

    Examples:
      | username          | password  | contractor | billTo                                   | severityLevel | startDate  | endDate    |
      | LLAdmin@looped.in | Octopus@6 | 12558      | UserPay1 - Catholic Education - User Pay | 1             | 05-02-2023 | 06-02-2023 |

    #LL-666 NAATI - Dual Certification Scenario 1b: 1 active NAATI accreditation
  @NaatiDualCertification @OneActiveNaati
  Scenario Outline: Dual Certification One active NAATI accreditation
    When I login with "<username>" and "<password>"
    And I click contractor engagement link
    And I search and select contractor "<contractor>"
    And the Interpreter has one active NAATI accreditations for a language "<from>" to "<to>"
    Then on Contractor Details History page, the NAATI accreditation "<Naati Accreditation>" will have been allocated to the interpreter’s profile

    Examples:
      | username          | password  | contractor    | Naati Accreditation               | from      | to      |
      | LLAdmin@looped.in | Octopus@6 | Abir ISKANDAR | Certified Provisional Interpreter | ARABIC    | ENGLISH |