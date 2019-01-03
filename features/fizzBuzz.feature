Feature: FizzBuzz
  As a user
  I want to see the result of the FizzBuzz calculation
  So that I can easily identify numbers divisible by 3 and 5

  Scenario: Returns a number when given a number not divisible by 3 or 5
    Given Input contains 17
    When I click submit
    Then 17 is displayed

  Scenario: Returns fizz when given a three
    Given Input contains 3
    When I click submit
    Then fizz is displayed

  Scenario: Returns fizz when given a number divisible by three
    Given Input contains 6
    When I click submit
    Then fizz is displayed

  Scenario: Returns buzz when given a number divisible by five
    Given Input contains 10
    When I click submit
    Then buzz is displayed

  Scenario: Returns fizzbuzz when given a number divisible by three and five
    Given Input contains 30
    When I click submit
    Then fizzbuzz is displayed