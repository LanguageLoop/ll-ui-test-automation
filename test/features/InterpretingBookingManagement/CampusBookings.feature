@CampusBookings
Feature: Campus Bookings Feature

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

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
   | username          | password  | campus id | contractor    | service     | from      | to      | level                 | request job type     | dropdownfilter | campus pin | Requester Name | language   | assignment type | date         | time  | PO Number | CF_OnSite | email        | eligible status   |
   | LLAdmin@looped.in | Octopus@6 | 31333     | Tigist KEBEDE | Interpreter | zz-Zenq2  | ENGLISH | Certified Interpreter | Pre-Booked Telephone |  Management    |  31333     | Jek kek        |  zz-Zenq2  |   Half Day      | short notice | 09:30 | 1234      | 567       | hh@bb.com.au | Auto Notification |

  #LL-334 Scenario 4: User deletes the added Block at Campus / Contractor level
 @LL-334 @DeleteContractorBlockOnCampus
 Scenario Outline: User deletes the added Block at Campus / Contractor level
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor>"
  And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And the admin clicks on Remove on campus blocker
  And they add a block on a contractor or interpreter "<contractor>"
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
  And the contractor or interpreter "<contractor>" is unable to view or accept any job for that campus or Organisation
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And the admin clicks on Remove on campus blocker
  And I click Interpreting header link
  And I select "<dropdownfilter>" from the filter dropdown
  And I search for created job request
  And I verify the job is listed in search results
  And I click on first job id from interpreting job list
  And I switch to the job allocation window
  And the contractor above "<contractor>" status will be "<eligible status>" for the Job
  Then on refreshing the Job page, the contractor "<contractor>" will be eligible for the job

  Examples:
   | username          | password  | campus id | contractor    | service     | from      | to      | level                 | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | eligible status   |
   | LLAdmin@looped.in | Octopus@6 | 33124     | Tigist KEBEDE | Interpreter | zz-Zenq2  | ENGLISH | Certified Interpreter | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | Auto Notification |

  #LL-334 Scenario 5: User edits the block and add the Date Finished to the past date at Campus / Contractor level
 @LL-334 @ContractorExpireBlockOnCampus
 Scenario Outline: User edits the block and add the Date Finished to the past date at Campus / Contractor level
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor>"
  And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And I click on Show Expired toggle in campus page
  And the admin clicks on Remove on campus blocker
  And they add a block on a contractor or interpreter "<contractor>"
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
  And the contractor or interpreter "<contractor>" is unable to view or accept any job for that campus or Organisation
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And user makes the block "<active block name>" as expired by adding past date to Date Finished field on Campus page or the Contractor page
  And I click Interpreting header link
  And I select "<dropdownfilter>" from the filter dropdown
  And I search for created job request
  And I verify the job is listed in search results
  And I click on first job id from interpreting job list
  And I switch to the job allocation window
  And the contractor above "<contractor>" status will be "<eligible status>" for the Job
  Then on refreshing the Job page, the contractor "<contractor>" will be eligible for the job

  Examples:
   | username          | password  | campus id | contractor    | service     | from      | to      | level                 | request job type     | dropdownfilter | campus pin | Requester Name      | language   | assignment type   | date         | time  | email        | eligible status   | active block name                 |
   | LLAdmin@looped.in | Octopus@6 | 33124     | Tigist KEBEDE | Interpreter | zz-Zenq2  | ENGLISH | Certified Interpreter | Pre-Booked Telephone |  Management    |  33124     |  Automation Tester  |  zz-Zenq2  |   Halfday         | short notice | 09:30 | hh@bb.com.au | Auto Notification | BOLTON CLARKE - DH RDNS - DH RDNS |

  #LL-334 Scenario 6: User deletes the added Block at Organization level
 @LL-334 @DeleteContractorBlockOnOrganization
 Scenario Outline: User deletes the added Block at Organization level
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor>"
  And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And the user is on the Organisation page
  And the admin clicks on Remove on Organisation blocker
  And they add a block on a contractor or interpreter "<contractor>" on the Organisation page
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
  And the contractor or interpreter "<contractor>" is unable to view or accept any job for that campus or Organisation
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And the user is on the Organisation page
  And the admin clicks on Remove on Organisation blocker
  And I click Interpreting header link
  And I select "<dropdownfilter>" from the filter dropdown
  And I search for created job request
  And I verify the job is listed in search results
  And I click on first job id from interpreting job list
  And I switch to the job allocation window
  And the contractor above "<contractor>" status will be "<eligible status>" for the Job
  Then on refreshing the Job page, the contractor "<contractor>" will be eligible for the job

  Examples:
   | username          | password  | campus id | contractor    | service     | from      | to      | level                 | request job type     | dropdownfilter | campus pin | Requester Name | language   | assignment type | date         | time  | PO Number | CF_OnSite | email        | eligible status   |
   | LLAdmin@looped.in | Octopus@6 | 31333     | Tigist KEBEDE | Interpreter | zz-Zenq2  | ENGLISH | Certified Interpreter | Pre-Booked Telephone |  Management    |  31333     | Jek kek        |  zz-Zenq2  |   Half Day      | short notice | 09:30 | 1234      | 567       | hh@bb.com.au | Auto Notification |

  #LL-334 Scenario 7: User edits the block and add the Date Finished to the past date at Organization level
 @LL-334 @ContractorExpireBlockOnOrganization
 Scenario Outline: User edits the block and add the Date Finished to the past date at Organization level
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor>"
  And Add Naati Accreditation "<service>","<from>","<to>","<level>" if not available
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And the user is on the Organisation page
  And I click on Show Expired toggle in organisation page
  And the admin clicks on Remove on Organisation blocker
  And they add a block on a contractor or interpreter "<contractor>" on the Organisation page
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
  And the contractor or interpreter "<contractor>" is unable to view or accept any job for that campus or Organisation
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And the user is on the Organisation page
  And user makes the block "<active block name>" as expired by adding past date to Date Finished field on Organization
  And I click Interpreting header link
  And I select "<dropdownfilter>" from the filter dropdown
  And I search for created job request
  And I verify the job is listed in search results
  And I click on first job id from interpreting job list
  And I switch to the job allocation window
  And the contractor above "<contractor>" status will be "<eligible status>" for the Job
  Then on refreshing the Job page, the contractor "<contractor>" will be eligible for the job

  Examples:
   | username          | password  | campus id | contractor    | service     | from      | to      | level                 | request job type     | dropdownfilter | campus pin | Requester Name | language   | assignment type | date         | time  | PO Number | CF_OnSite | email        | eligible status   | active block name |
   | LLAdmin@looped.in | Octopus@6 | 31333     | Tigist KEBEDE | Interpreter | zz-Zenq2  | ENGLISH | Certified Interpreter | Pre-Booked Telephone |  Management    |  31333     | Jek kek        |  zz-Zenq2  |   Half Day      | short notice | 09:30 | 1234      | 567       | hh@bb.com.au | Auto Notification | VITS LANGUAGELINK |

  #LL-897 Scenario #1: User enters the valid address and select the address from the suggestions dropdown
 @LL-897 @UserValidAddressSuggestionDropdown
 Scenario Outline: User enters the valid address and select the address from the suggestions dropdown
  When I login with "<username cbo>" and "<password cbo>"
  And I click Interpreting header link
  And I click on new job request button
  And I select campus pin "<campusPin>" from Campus PIN dropdown
  And I enter location "<service address>"
  Then the selected address "<service address>" is displayed under the Service Address field

  Examples:
   | username cbo   | password cbo | campusPin               | service address                                   |
   | zenq@cbo11.com | Test1        | 29449 - Contoso Pty LTD | Lysterfield Dr, Roxburgh Park VIC 3064, Australia |

  #LL-897 Scenario #2: User enters the address which is not available in the Google suggestions dropdown
 @LL-897 @UserEntersAddressNotAvailable
 Scenario Outline: User enters the valid address and select the address from the suggestions dropdown
  When I login with "<username cbo>" and "<password cbo>"
  And I click Interpreting header link
  And I click on new job request button
  And I select campus pin "<campusPin>" from Campus PIN dropdown
  And I enter location "<service address>"
  And I select language "<language>"
  And I enter long notice schedule date
  And they have selected a Time "<time>" from the time picker
  And I select assignment type "<assignment type>"
  And I enter "<email>" email address
  And I click next button
  Then the error message Please click the map or select the address from suggestion list address is displayed

  Examples:
   | username cbo   | password cbo | campusPin               | service address  | time  | assignment type      | email        | language |
   | zenq@cbo11.com | Test1        | 29449 - Contoso Pty LTD | jbcsjkwjscjknscj | 10:00 | CEO01-Interview-Home | hh@bb.com.au | ARABIC   |