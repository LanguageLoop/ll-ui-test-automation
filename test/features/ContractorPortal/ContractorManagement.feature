@ContractorManagement
Feature: Contractor Management features

   Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @ResetPassword 
  Scenario Outline: Reset password for contractor.
   When I login with "<username>" and "<password>"
   And I handle contractor message
   And I click "<contractor name>" user link
   And I click reset password button
   Then I verify the reset password email confirmation message

   Examples:
   | username                 | password | dropdownfilter      |  contractor name  |
   | suzanehanna@hotmail.com  | Test1    | Available Jobs      |  Suzane HANNA     |

   @EditProfile
   Scenario Outline: Edit the profile details
    When I login with "<username>" and "<password>"
    And I handle contractor message
    And I click "<contractor name>" user link
    And I click edit profile details link
    And I enter preferred name "<preferred name>"
    And I enter abn "<abn>"
    And I click check abn button
    And I enter company name "<company name>"
    And I click save button in my details
    And I click edit profile details link
    Then I verify the profile details are updated "<preferred name>","<abn>","<company name>"

  Examples:
   | username                 | password | dropdownfilter      |  contractor name  | preferred name |  abn         |  company name       |
   | suzanehanna@hotmail.com  | Test1    | Available Jobs      |  Suzane HANNA     |  Su            |  50664505657 |  VITS LANGUAGELINK |
   | suzanehanna@hotmail.com  | Test1    | Available Jobs      |  Suzane HANNA     |  Suzanne       |  53819971946 |  HANNA, SUZANE     |

   @EmergencyContact
   Scenario Outline: Edit emergency contact details
    When I login with "<username>" and "<password>"
    And I handle contractor message
    And I click "<contractor name>" user link
    And I click on emergency contact link
    And I click on manage emergency contact link
    And I enter emergency contact firstname "<first name>"
    And I enter emergency contact lastname "<last name>"
    And I enter emergency contact phonenumber "<phone number>"
    And I enter emergency contact address "<address>"
    And I enter emergency contact email "<email>"
    And I select emergency contact relationship "<relationship>"
    And I select emergency contact country "<country>"
    And I click save button in emergency contact details
    And I click on manage emergency contact link
    Then I verify the emergency contact details are updated "<first name>","<last name>","<phone number>","<relationship>","<address>","<country>","<email>"

 Examples:
   | username                 | password | dropdownfilter      |  contractor name  | first name  |  last name | phone number   | relationship | address  | country   | email              |
   | suzanehanna@hotmail.com  | Test1    | Available Jobs      |  Suzane HANNA     |  Automation |  Tester    |  0399999999    | Spouse       | Hawthorn | Australia | atester@ll.com.au  |
   | suzanehanna@hotmail.com  | Test1    | Available Jobs      |  Suzane HANNA     |  Auto       |  Test      |  0399999991    | Friend       | Armadale | Australia | atest@ll.com.au    |


 @AddLeave @DeleteLeave
   Scenario Outline: Add and delete leave
    When I login with "<username>" and "<password>"
    And I handle contractor message
    And I click "<contractor name>" user link
    And I click add leave link
    And I enter leave start date "<start date>"
    And I enter leave end date "<end date>"
    And I click onsite checkbox
    And I click add leave button
    Then I verify the leave dates "<start date>","<end date>" are added
    And I delete leave
    
  Examples:
   | username                 | password | dropdownfilter      |  contractor name  | start date   |  end date   |
   | suzanehanna@hotmail.com  | Test1    | Available Jobs      |  Suzane HANNA     |  10/10/2023  |  18/10/2023 |

@ExpiredLanguageToggle
   Scenario Outline: Toggle between expired and current naati languages
    When I login with "<username>" and "<password>"
    And I handle contractor message
    And I click "<contractor name>" user link
    Then I verify naati table is present
    And I click expired language toggle
    And I verify naati table is present

  Examples:
    | username                | password   |  contractor name  |
    | suzanehanna@hotmail.com | Test1      |  Suzane HANNA     |

#@StatutoryDeclaration
 #  Scenario Outline: Upload statutory declaration document and verify
  #  When I login with "<username>" and "<password>"
   # And I click "<contractor name>" user link
    #And I upload statutory declaration document
    #Then I verify the statutory declaration document is uploaded   

  #Examples:
   # | username                | password   |  contractor name  |
    #| suzanehanna@hotmail.com | Test1      |  Suzane HANNA     |

@Hepatitis
   Scenario Outline: Upload hepatitis b vaccination document and verify
    When I login with "<username>" and "<password>"
    And I handle contractor message
    And I click "<contractor name>" user link
    And I upload hepatitis document
    Then I verify the hepatitis document is uploaded   

  Examples:
    | username                | password   |  contractor name  |
    | suzanehanna@hotmail.com | Test1      |  Suzane HANNA     |

@WorkWithChildren
   Scenario Outline: Upload working with children document and verify
    When I login with "<username>" and "<password>"
    And I handle contractor message
    And I click "<contractor name>" user link
    And I upload working with children document
    Then I verify the working with children document is uploaded   

  Examples:
    | username                | password   |  contractor name  |
    | suzanehanna@hotmail.com | Test1      |  Suzane HANNA     |

  # @WorkEligibility
  # Scenario Outline: Upload work eligibility document and verify
   # When I login with "<username>" and "<password>"
    #And I click "<contractor name>" user link
    
    #And I upload work eligibility document
    #Then I verify the work eligibility document is uploaded   

  #Examples:
   # | username                | password   |  contractor name  |
    #| suzanehanna@hotmail.com | Test1      |  Suzane HANNA     |

 #LL-225 Scenario 1 - View On Demand TI
 @LL-225 @ViewODTIAvailabilityBlock
 Scenario Outline: View On Demand TI
  When I login with "<username>" and "<password>"
  And I click "<contractor name>" user link
  And the contractor is viewing their profile
  Then they will see the On-demand Telephone Interpreting Availability block above Work Availability

  Examples:
   | username                 | password   |  contractor name    |
   | luciacheung192@gmail.com | Test1      |  Lucia Yee Fong ... |

  #LL-225 Scenario 2 - Changing the state
 @LL-225 @ODTIChangingTheState
 Scenario Outline: Changing the state
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And the contractor is Activated for ODTI
  And I click logout button
  And I login with "<contractor username>" and "<contractor password>"
  And I click "<contractor name>" user link
  And the contractor is viewing their profile
  Then the contractor’s login status and preferred phone is displayed

  Examples:
   | username          | password  | contractor username  | contractor password | contractor name |
   | LLAdmin@looped.in | Octopus@6 | w.f_2006@yahoo.co.uk | Test1               | Aabida SUNASARA |

  #LL-225 Scenario 3: Toggling off the Active button
 @LL-225 @ODTIToggleOffActiveButton
 Scenario Outline: Toggling off the Active button
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And I click logout button
  And I login with "<contractor username>" and "<contractor password>"
  And I click "<contractor name>" user link
  And the contractor is viewing their profile
  Then the section is closed and text Not Activated is displayed

  Examples:
   | username          | password  | contractor username  | contractor password | contractor name |
   | LLAdmin@looped.in | Octopus@6 | w.f_2006@yahoo.co.uk | Test1               | Aabida SUNASARA |

  #LL-225 Scenario 4: UI when Active button is toggled on and no option is selected
 @LL-225 @ActiveOnAndNoOptionSelected
 Scenario Outline: UI when Active button is toggled on and no option is selected
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And the contractor is Activated for ODTI
  And I click logout button
  And I login with "<contractor username>" and "<contractor password>"
  And I click "<contractor name>" user link
  And the contractor is viewing their profile
  Then the contractor’s log out status text is displayed with options Mobile and Home radio options with corresponding phone numbers

  Examples:
   | username          | password  | contractor username  | contractor password | contractor name |
   | LLAdmin@looped.in | Octopus@6 | w.f_2006@yahoo.co.uk | Test1               | Aabida SUNASARA |

  #LL-225 Scenario 5: UI when Active button is toggled on and any phone number option is selected and clicking on Logon button
 @LL-225 @ActiveOnAndPhoneSelected
 Scenario Outline: UI when Active button is toggled on and any phone number option is selected and clicking on Logon button
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And the contractor is Activated for ODTI
  And I click logout button
  And I login with "<contractor username>" and "<contractor password>"
  And I click "<contractor name>" user link
  And the contractor is viewing their profile
  And home phone number option is selected
  And click on Log on button
  Then the contractor’s login available status text is displayed with selected phone numbers "<phone option>"
  And the button Logoff button is displayed

  Examples:
   | username          | password  | contractor username  | contractor password | contractor name | phone option |
   | LLAdmin@looped.in | Octopus@6 | w.f_2006@yahoo.co.uk | Test1               | Aabida SUNASARA | Home         |

  #LL-225 Scenario 6: UI when Active button is toggled on and clicking on Log off button
 @LL-225 @ActiveOnAndClickLogOffButton
 Scenario Outline: UI when Active button is toggled on and clicking on Log off button
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And the contractor is Activated for ODTI
  And I click logout button
  And I login with "<contractor username>" and "<contractor password>"
  And I click "<contractor name>" user link
  And the contractor is viewing their profile
  And home phone number option is selected
  And click on Log on button
  And click on Log off button
  Then the contractor’s log out status text is displayed with options Mobile and Home radio options with corresponding phone numbers
  And the button Logon button is displayed

  Examples:
   | username          | password  | contractor username  | contractor password | contractor name |
   | LLAdmin@looped.in | Octopus@6 | w.f_2006@yahoo.co.uk | Test1               | Aabida SUNASARA |

  #LL-763 Scenario 1: Toggling ON the ‘IS LOGGED ON’ status for a interpreter
 @LL-763 @ToggleOnIsLoggedOn
 Scenario Outline: Toggling ON the ‘IS LOGGED ON’ status for a interpreter
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And the contractor is Activated for ODTI
  And the button Logon button is displayed
  And user is on Admin Tools
  And I click ODTI Contractors header link
  And the Show Logged in Contractors Only toggle is off
  And user search for the contractor "<contractor name>" and toggle on IS LOGGED ON
  And I click LoopedIn header logo
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  Then the user is logged in with default phone number selected under ‘On-demand Telephone Interpreting Availability’ section

  Examples:
   | username          | password  | contractor name |
   | LLAdmin@looped.in | Octopus@6 | Aabida SUNASARA |

  #LL-763 Scenario 2: Toggling OFF the ‘IS LOGGED ON’ status for a interpreter
 @LL-763 @ToggleOffIsLoggedOn
 Scenario Outline: Toggling OFF the ‘IS LOGGED ON’ status for a interpreter
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And the contractor is Activated for ODTI
  And home phone number option is selected
  And click on Log on button
  And the contractor’s login available status text is displayed with selected phone numbers "<phone option>"
  And user is on Admin Tools
  And I click ODTI Contractors header link
  And the Show Logged in Contractors Only toggle is on
  And user search for the contractor "<contractor name>" and toggle off IS LOGGED ON
  And I click LoopedIn header logo
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  Then the contractor’s log out status text is displayed with options Mobile and Home radio options with corresponding phone numbers

  Examples:
   | username          | password  | contractor name | phone option |
   | LLAdmin@looped.in | Octopus@6 | Aabida SUNASARA | Home         |

  #LL-763 Scenario 3: Toggling OFF the ‘SERVICE TI ACTIVE’ status for a interpreter
 @LL-763 @ToggleOffServiceTiActive
 Scenario Outline: Toggling OFF the ‘SERVICE TI ACTIVE’ status for a interpreter
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And the contractor is Activated for ODTI
  And the button Logon button is displayed
  And user is on Admin Tools
  And I click ODTI Contractors header link
  And the Show Logged in Contractors Only toggle is off
  And user search for the contractor "<contractor name>" and toggle off SERVICE TI ACTIVE
  And I click LoopedIn header logo
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  Then the section is closed and text Not Activated is displayed

  Examples:
   | username          | password  | contractor name |
   | LLAdmin@looped.in | Octopus@6 | Aabida SUNASARA |

  #LL-763 Scenario 4: Toggling ON the ‘SERVICE TI ACTIVE’ status for a interpreter
 @LL-763 @ToggleOnServiceTiActive
 Scenario Outline: Toggling ON the ‘SERVICE TI ACTIVE’ status for a interpreter
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And the section is closed and text Not Activated is displayed
  And user is on Admin Tools
  And I click ODTI Contractors header link
  And the Show Logged in Contractors Only toggle is off
  And user search for the contractor "<contractor name>" and toggle on SERVICE TI ACTIVE
  And I click LoopedIn header logo
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  Then the contractor’s log out status text is displayed with options Mobile and Home radio options with corresponding phone numbers
  And the button Logon button is displayed

  Examples:
   | username          | password  | contractor name |
   | LLAdmin@looped.in | Octopus@6 | Aabida SUNASARA |

  #LL-224 Scenario 1: View or check current status from web contractor portal
 @LL-224 @InternalUserCheckODTILoginStatus
 Scenario Outline: UI when Active button is toggled on and no option is selected
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And the contractor is Activated for ODTI
  Then the contractor’s log out status text is displayed with options Mobile and Home radio options with corresponding phone numbers

  Examples:
   | username          | password  | contractor name |
   | LLAdmin@looped.in | Octopus@6 | Aabida SUNASARA |

  #LL-224 Scenario 2: View or check current status from web contractor portal (deactivated)
 @LL-224 @InternalUserCheckODTIStatusDeactivated
 Scenario Outline: View or check current status from web contractor portal (deactivated)
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  Then the section is closed and text Not Activated is displayed
  And the contractor’s current login status is NOT displayed

  Examples:
   | username          | password  | contractor name |
   | LLAdmin@looped.in | Octopus@6 | Aabida SUNASARA |

  #LL-224 Scenario 5: Verify the Work Availability for ODTI for contractor when ODTI Availability is De Activated
 @LL-224 @WorkAvailabilityODTIDeactivated
 Scenario Outline: Verify the Work Availability for ODTI for contractor when ODTI Availability is De Activated
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And I click logout button
  And I login with "<contractor username>" and "<contractor password>"
  And I click "<contractor name>" user link
  And the contractor is viewing their profile
  And I click on Work Availability for ODTI
  Then the text ‘You are not activated for On Demand Telephone Interpreting’ is displayed

  Examples:
   | username          | password  | contractor username  | contractor password | contractor name |
   | LLAdmin@looped.in | Octopus@6 | w.f_2006@yahoo.co.uk | Test1               | Aabida SUNASARA |

  #LL-224 Scenario 6: Verify the Work Availability for ODTI for contractor when ODTI Availability is Activated
 @LL-224 @WorkAvailabilityODTIActivated
 Scenario Outline: Verify the Work Availability for ODTI for contractor when ODTI Availability is Activated
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And the contractor is Activated for ODTI
  And I click logout button
  And I login with "<contractor username>" and "<contractor password>"
  And I click "<contractor name>" user link
  And the contractor is viewing their profile
  And I click on Work Availability for ODTI
  Then the text ‘You are activated for On Demand Telephone Interpreting’ is displayed

  Examples:
   | username          | password  | contractor username  | contractor password | contractor name |
   | LLAdmin@looped.in | Octopus@6 | w.f_2006@yahoo.co.uk | Test1               | Aabida SUNASARA |

  #LL-768 Scenario 1a: Activation toggle switch (as admin / contractor engagement officer)
 @LL-768 @ActivationToggleSwitchAdminCEO
 Scenario Outline: Activation toggle switch (as admin / contractor engagement officer)
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  Then a toggle switch should be displayed on the top-right corner of the On-demand Telephone Interpreting Availability section

  Examples:
   | username        | password  | contractor name |
   | zenq1@ll.com.au | Reset@312 | Aabida SUNASARA |

  #LL-768 Scenario 1b: Activation toggle switch (logged in as contractor)
 @LL-768 @ActivationToggleSwitchContractor
 Scenario Outline: Activation toggle switch (logged in as contractor)
  And I login with "<contractor username>" and "<contractor password>"
  And I click "<contractor name>" user link
  And the contractor is viewing their profile
  Then a toggle switch should NOT be displayed on the top-right corner of the On-demand Telephone Interpreting Availability section

  Examples:
   | contractor username  | contractor password | contractor name |
   | w.f_2006@yahoo.co.uk | Test1               | Aabida SUNASARA |

  #LL-768 Scenario 1c: Activation toggle switch-OFF (as admin / contractor engagement officer)
 @LL-768 @ActivationToggleOffAdminCEO
 Scenario Outline: Activation toggle switch-OFF (as admin / contractor engagement officer)
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And the section is closed and text Not Activated is displayed
  And user is on Admin Tools
  And I click ODTI Contractors header link
  And the Show Logged in Contractors Only toggle is off
  And user search for the contractor "<contractor name>" in admin tools
  Then state of the Contractors "<contractor name>" ODTI Activation ServiceTIActive flag is set to False
  And the Contractors "<contractor name>" ODTI Logged On State is set to False

  Examples:
   | username        | password  | contractor name |
   | zenq1@ll.com.au | Reset@312 | Aabida SUNASARA |

  #LL-768 Scenario 1d: Activation toggle switch-ON (as admin / contractor engagement officer)
 @LL-768 @ActivationToggleOnAdminCEO
 Scenario Outline: Activation toggle switch-ON (as admin / contractor engagement officer)
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And the contractor is Activated for ODTI
  And user is on Admin Tools
  And I click ODTI Contractors header link
  And the Show Logged in Contractors Only toggle is off
  And user search for the contractor "<contractor name>" in admin tools
  Then state of the Contractors "<contractor name>" ODTI Activation ServiceTIActive flag is set to True

  Examples:
   | username        | password  | contractor name |
   | zenq1@ll.com.au | Reset@312 | Aabida SUNASARA |

  #LL-768 Scenario 2: Logon/Logoff and phone number select controls  (as admin / contractor engagement officer)
 @LL-768 @LogonLogoffAndPhoneNumberAdminCEO
 Scenario Outline: Logon/Logoff and phone number select controls  (as admin / contractor engagement officer)
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  Then a toggle switch should be displayed on the top-right corner of the On-demand Telephone Interpreting Availability section
  And the Activate toggle is off for ODTI
  And the contractor is Activated for ODTI
  And home phone number option is selected
  And click on Log on button
  And the contractor’s login available status text is displayed with selected phone numbers "<home phone option>"
  And the button Logoff button is displayed
  And click on Log off button
  And the contractor’s log out status text is displayed with options Mobile and Home radio options with corresponding phone numbers
  And the button Logon button is displayed
  And mobile phone number option is selected
  And click on Log on button
  And the contractor’s login available status text is displayed with selected phone numbers "<mobile phone option>"
  And the button Logoff button is displayed

  Examples:
   | username        | password  | contractor name | home phone option | mobile phone option |
   | zenq1@ll.com.au | Reset@312 | Aabida SUNASARA | Home              | Mobile              |

  #LL-768 Scenario 3a: Work availability popup
 @LL-768 @ActivateOnScheduleOnsiteAreasHidden
 Scenario Outline: Activate toggle on work availability popup Schedule and OnSite Areas section are hidden
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And the contractor is Activated for ODTI
  And I click on Work Availability for ODTI
  Then the Schedule and OnSite Areas section are hidden
  And the text ‘You are activated for On Demand Telephone Interpreting’ is displayed

  Examples:
   | username        | password  | contractor name |
   | zenq1@ll.com.au | Reset@312 | Aabida SUNASARA |

  #LL-768 Scenario 3b: Work availability popup
 @LL-768 @ActivateOffScheduleOnsiteAreasHidden
 Scenario Outline: Activate toggle off work availability popup Schedule and OnSite Areas section are hidden
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the Activate toggle is off for ODTI
  And I click on Work Availability for ODTI
  Then the Schedule and OnSite Areas section are hidden
  And the text ‘You are not activated for On Demand Telephone Interpreting’ is displayed

  Examples:
   | username        | password  | contractor name |
   | zenq1@ll.com.au | Reset@312 | Aabida SUNASARA |

  #LL-797 Scenario 1: The new clearance can be copied from Working with Children with the below items (everything except Card Type)
 @LL-797 @NewClearanceNDISScreening
 Scenario Outline: The new clearance can be copied from Working with Children with the below items (everything except Card Type)
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And I remove NDIS Screening clearance
  And I click add clearance link
  And I select clearance type "<clearance type>"
  And I enter clearance card number "<card number>"
  And I select clearance state of issue "<state of issue>"
  And I enter clearance Document Received Date and Date of expiry
  And I upload proof of clearance file
  And I click save clearance button
  Then I verify NDIS Screening clearance is added
  And I remove NDIS Screening clearance

  Examples:
   | username          | password  | contractor name | clearance type | card number | state of issue |
   | LLAdmin@looped.in | Octopus@6 | Aabida SUNASARA | NDIS Screening | 03266397-02 | Victoria       |

  #LL-797 Scenario 2: We are able to add the clearance for each campus and the system takes into account when searching interpreters for jobs with this clearance type
 @LL-797 @AddClearanceNDISCampusInterpretersJobs
 Scenario Outline: Add the clearance for each campus and the system takes into account when searching interpreters for jobs with this clearance type
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And they remove added preference type option "<preference type option>" in Campus Details
  And they click Add preference button in Campus Details
  And they can select this option "<preference type option>" in Campus Details
  And they select preference option "<preference>" in Campus Details
  And they click save Contract Preference button in Campus Details
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And I remove NDIS Screening clearance
  And I click add clearance link
  And I select clearance type "<clearance type>"
  And I enter clearance card number "<card number>"
  And I select clearance state of issue "<state of issue>"
  And I enter clearance Document Received Date and Date of expiry
  And I upload proof of clearance file
  And I click save clearance button
  And I verify NDIS Screening clearance is added
  And I create a new job request with minimal fields "<job notice length>"
  And I click Interpreting header link
  And I search for created job request
  And I click on job id from interpreting job search results
  And I switch to the job allocation window
  And search for contractor "<contractor name>" in Job Allocation
  Then the contractor "<contractor name>" in the Job gets eligible "<job contractor status>" if they have the NDIS clearance added
  And search for contractor "<ineligible contractor name>" in Job Allocation
  And the contractor "<ineligible contractor name>" on hovering over will give the message as ‘Insufficient Preferences’
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And I remove NDIS Screening clearance
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And they remove added preference type option "<preference type option>" in Campus Details

  Examples:
   | username          | password  | job notice length | campus id | preference type option | preference | contractor name | clearance type | card number | state of issue | job contractor status | ineligible contractor name |
   | LLAdmin@looped.in | Octopus@6 | short notice      | 33124     | NDIS Screening         | Must       | Suzane HANNA    | NDIS Screening | 03266397-02 | Victoria       | Auto Notification     | Rola MIZIAN                |

  #LL-797 Scenario 3a: "NDIS Check" clearance Only users with below roles can make the changes: Account Manager
 @LL-797 @NDISMakeChangesAsAccountManager
 Scenario Outline: NDIS Check clearance Only users with below roles can make the changes: Account Manager
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And they remove added preference type option "<preference type option>" in Campus Details
  And they click Add preference button in Campus Details
  Then they can select this option "<preference type option>" in Campus Details
  And they select preference option "<preference>" in Campus Details
  And they click save Contract Preference button in Campus Details
  And they remove added preference type option "<preference type option>" in Campus Details
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And the user just can view the clearances on Contract Profile page as expected

  Examples:
   | username          | password | campus id | preference type option | preference | contractor name |
   | TestA@gmail.com   | Test1    | 33124     | NDIS Screening         | Must       | Suzane HANNA    |

  #LL-797 Scenario 3b: "NDIS Check" clearance Only users with below roles can make the changes: Administrator
 @LL-797 @NDISMakeChangesAsAdministrator
 Scenario Outline: NDIS Check clearance Only users with below roles can make the changes: Administrator
  When I login with "<username>" and "<password>"
  And I click account management link
  And I search for campus "<campus id>"
  And I click the first campus link from search results
  And they remove added preference type option "<preference type option>" in Campus Details
  And they click Add preference button in Campus Details
  Then they can select this option "<preference type option>" in Campus Details
  And they select preference option "<preference>" in Campus Details
  And they click save Contract Preference button in Campus Details
  And they remove added preference type option "<preference type option>" in Campus Details
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And I remove NDIS Screening clearance
  And I click add clearance link
  And I select clearance type "<clearance type>"
  And I enter clearance card number "<card number>"
  And I select clearance state of issue "<state of issue>"
  And I enter clearance Document Received Date and Date of expiry
  And I upload proof of clearance file
  And I click save clearance button
  And I verify NDIS Screening clearance is added
  And I remove NDIS Screening clearance

  Examples:
   | username          | password  | campus id | preference type option | preference | contractor name | clearance type | card number | state of issue |
   | LLAdmin@looped.in | Octopus@6 | 33124     | NDIS Screening         | Must       | Suzane HANNA    | NDIS Screening | 03266397-02 | Victoria       |

  #LL-797 Scenario 3c: "NDIS Check" clearance Only users with below roles can make the changes: Contractor Engagement Officer
 @LL-797 @NDISMakeChangesAsContractorEngagementOfficer
 Scenario Outline: NDIS Check clearance Only users with below roles can make the changes: Contractor Engagement Officer
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And I remove NDIS Screening clearance
  And I click add clearance link
  And I select clearance type "<clearance type>"
  And I enter clearance card number "<card number>"
  And I select clearance state of issue "<state of issue>"
  And I enter clearance Document Received Date and Date of expiry
  And I upload proof of clearance file
  And I click save clearance button
  Then I verify NDIS Screening clearance is added
  And I remove NDIS Screening clearance

  Examples:
   | username          | password  | contractor name | clearance type | card number | state of issue |
   | LLAdmin@looped.in | Octopus@6 | Suzane HANNA    | NDIS Screening | 03266397-02 | Victoria       |

  #LL-797 Scenario 4: Document Received Date and Date of expiry are mandatory fields
 @LL-797 @DocumentReceivedDateAndExpiryAreMandatory
 Scenario Outline: Document Received Date and Date of expiry are mandatory fields
  When I login with "<username>" and "<password>"
  And I click contractor engagement link
  And I search and select contractor "<contractor name>"
  And they will be navigated to the Contractor’s profile
  And I remove NDIS Screening clearance
  And I click add clearance link
  And I select clearance type "<clearance type>"
  And I enter clearance card number "<card number>"
  And I select clearance state of issue "<state of issue>"
  And I leave clearance Document Received Date and Date of expiry as empty
  And I upload proof of clearance file
  And I click save clearance button
  Then error message ‘Required filed!’ is displayed under Document Received Date and Date of expiry fields

  Examples:
   | username          | password  | contractor name | clearance type | card number | state of issue |
   | LLAdmin@looped.in | Octopus@6 | Suzane HANNA    | NDIS Screening | 03266397-02 | Victoria       |