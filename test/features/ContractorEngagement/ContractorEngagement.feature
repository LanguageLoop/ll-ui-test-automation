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
   | username           | password | salutation |   gender  | name                  |  pin  | mobile     | dob        | email        | address                   |
   | LLAdmin@looped.in  | Uranus@6 | Mr         |  Male     | Automation Contractor |  2323 | 0400000000 | 20-04-1982 | aa           |  St Kilda VIC, Australia  |


  @AddNAATIAccreditation
  Scenario Outline: Add naati accreditation
   When I login with "<username>" and "<password>"
   And I click contractor engagement link
   And I search and open contractor "<contractor>"
   And I click add accreditation link
   And I enter naati details "<service>","<from>","<to>","<level>"
   Then I verify the created naati accreditation "<from>","<to>"
   And I delete the naati accreditation
   
  Examples:
  | username           |  password |  contractor  | service        | from       |   to     | level      |
  | LLAdmin@looped.in  | Uranus@6  | Automation   |  Interpreter   |  AFRIKAANS | ENGLISH  | Recognised |


   @AddContractorNotes 
  Scenario Outline: Add contractor notes 
   When I login with "<username>" and "<password>"
   And I click contractor engagement link
   And I search and open contractor "<contractor>"
   And I click add notes link
   And I enter contractor notes details "<title>","<message>"
   Then I verify contractor notes "<title>","<message>"
   And I delete contractor notes
   
  Examples:
  | username           |  password |  contractor  | title       |  message   |
  | LLAdmin@looped.in  | Uranus@6  | Automation   |  Automation |  Testing   |

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
  | username           |  password |  contractor  | clearance       | salutation | gender    | name        |  pin  | mobile      |  dob         |  email    | address                  | id                  |
  | LLAdmin@looped.in  | Uranus@6  | Automation   |  Police Check   |  Mr        |  female   | Automation  | 1232  | 0400000000  | 12-12-1982   | all       | St Kilda VIC, Australia  | Permanent Residence |


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
  | username           |  password |  contractor  | clearance       | salutation | gender    | name        |  pin  | mobile      |  dob         |  email    | address                  |
  | LLAdmin@looped.in  | Uranus@6  | Automation   |  Police Check   |  Mr        |  female   | Automation  | 1232  | 0400000000  | 12-12-1982   | all       | St Kilda VIC, Australia  |


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
   | username           | password | salutation |   gender  | name                  |  pin  | mobile     | dob        | email        | address                   |  type        |  words  |
   | LLAdmin@looped.in  | Uranus@6 | Mr         |  Male     | Automation Contractor |  2323 | 0400000000 | 20-04-1982 | aa           |  St Kilda VIC, Australia  | Translation  |   5     |


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
  | username           |  password |  contractor  | company                     |
  | LLAdmin@looped.in  | Uranus@6  | Automation   |   BOLTON CLARKE - DH RDNS   |


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
  | username           |  password |  contractor  | agency            |  name       |
  | LLAdmin@looped.in  | Uranus@6  | Automation   |   BOLTON CLARKE   | Auto tester |



  #@50
  #Scenario: 50 contractors
   #When I login with "developer@languageloop.com.au" and "Password12!"
   #And I click contractor engagement link
   #When I create 50 contractors
   #When I want data


