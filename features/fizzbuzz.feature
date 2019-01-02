Feature: Fizz the buzz and buzz the fizz
  As a buzzer of fizzes
  I want to transform integers
  So that the we know about multiples of 3 and 5

  Scenario: Display fizzbuzz
    Given any number
    When I display the fizzbuzz page
    Then I should see the word "fizzbuzz"