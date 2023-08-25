@CreateTranslation
Feature: Translations

Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 #@CreateTranslationProject@ctp1
  #Scenario Outline: Create a new translation project
   #When I login with "<username>" and "<password>"
   #And I click translations link  
   #And I click start a new project
   #And I enter  campus pin "<campus pin>" 
   #And I click next
   #And I enter "<project name>"
   #And I select "project manager", "service","workflow"
   #And I select "service"
   #And I select "workflow"
   #And I select "preferred del date"
   #And I select "<language frome>" and "<language to>"
   #And I upload "translation files" 
   #And I click on Save & Proceed button
   #And I click on Submit

    #Examples:
   #| username           | password  |campus pin |project name|
   #| LLAdmin@looped.in  | Uranus@6  | 31333     |Test1       |

   #LL-872 Scenario 1: Start a new Quote button is not available for CBO user
  @LL-872 @StartNewQuoteBtnNotAvailableCBO
  Scenario Outline: Start a new Quote button is not available for CBO user
    When I login with "<username cbo>" and "<password cbo>"
    And I click translations link
    Then there should not be Start a new Quote button displayed beside the ‘Start New Project Request’ button

    Examples:
      | username cbo   | password cbo |
      | zenq@cbo11.com | Test1        |

   