  Feature: Spin button

    Scenario: Play one round

      Given Open superslot site
      And Increase bet
      When Play one round
      Then Wait until spin button will be enable