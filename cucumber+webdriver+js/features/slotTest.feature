Feature: First test

  @smoke
  Scenario: Play one round
    Given Open superslot site
    When Play one round
    Then Wait until spin button will be enable