@CreateTranslation
Feature: Translations

Background: Load the Loopedin login page
   Given the looped in login page is opened
   

 @CreateTranslationProject@ctp1
  Scenario Outline: Create a new translation project
   When I login with "<username>" and "<password>"
   And I click translations link  
   And I click start a new project
   And I enter  campus pin "<campus pin>" 
   And I click next button
   And I enter "<project name>"
   And I select "project manager", "service","workflow"
   And I select "service"
   And I select "workflow"
   And I select "preferred del date"
   And I select "<language frome>" and "<language to>"
   And I upload "translation files" 
   And I click on Save & Proceed button
   And I click on Submit

    Examples:
   | username           | password  |campus pin |
   | LLAdmin@looped.in  | Uranus@6  | 31333     |

   