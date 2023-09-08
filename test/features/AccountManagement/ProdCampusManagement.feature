@ProdCampusManagement
Feature: Prod Campus Management features

  Background: Load the Loopedin prod login page
    Given the looped in prod login page is opened

    # Test flow automated to delete the covid booster vaccinations on multiple campuses listed in excel file
  @DeleteCovidBoosterVaccinationIfDisplayed
  Scenario Outline: Delete Covid Booster Vaccination If Displayed
    When I login with "<username>" and "<password>"
    And I search and select campus and delete covid booster if displayed

    Examples:
      | username                        | password  |
      | LLAdmin@looped.in               | Octopus@6 |
#     | accountmanager@languageloop.com | Prod1     |