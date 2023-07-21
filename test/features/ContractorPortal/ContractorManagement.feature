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