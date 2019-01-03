Feature: FizzBuzz
  As a user
  I want to see the result of the FizzBuzz calculation
  So that I can easily identify numbers divisible by 3 and 5

  Scenario: Returns a number when given a number
    Given Input contains 10
    When I click submit
    Then 10 is displayed