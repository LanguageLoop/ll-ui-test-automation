@ProdContractorEngagement
Feature: Prod Contractor Engagement features

  Background: Load the Loopedin prod login page
    Given the looped in prod login page is opened

  #Test flow automated to add block to contractors with campus details
  @ProdAddBlockToContractorsWithCampusDetails
  Scenario Outline: Production add block to contractors with campus details
    When I login with "<username>" and "<password>"
    And I search contractor to add a block with campus details

    Examples:
      | username                        | password  |
      | accountmanager@languageloop.com | Prod1     |