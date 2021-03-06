# ReactJS Cucumber ATDD Kata

This kata will build your skill with the following in the ReactJS framework:

* Configuring the app for testing with Cucumber
* Acceptance Test Driven Development with Cucumber

## Instructions

When you complete this kata, you will know how to do the following:

* Test drive Fizzbuzz logic using acceptance tests in Cucumber

A question you may have is how many tests do you need to write in Cucumber
versus Jest/Enzyme?

Keep in mind that you won't normally provide all of your test coverage with
Acceptance Tests.  The right balance depends on the developers and the needs
of the project.  In general, you don't want to duplicate coverage between
different layers of the test pyramid.

However, there are at least two reasonable choices for FizzBuzz:
* 4 acceptance tests to cover fizz, buzz, fizzbuzz, and integer, no unit tests
* 4 unit tests to cover fizz, buzz, fizzbuzz, and integer, and one acceptance test

For the purposes of the this kata, you'll probably get more mileage out of the former
but, in normal development, your tests will probably look more like the latter.

You should be able to complete the kata from scratch, without Googling, in one hour
or less.

### Configuring for Acceptance Testing with Cucumber
* Configure for Jest and Enzyme
* [Install Jest Cucumber](https://www.npmjs.com/package/jest-cucumber)

Create a ```features``` directory at the root of your project and, within it, a ```step_definitions``` directory.
Your .feature files will go in features and the supporting step files will go in step_definitions.

### Gherkins

```
Feature: FizzBuzz
  As a user
  I want to see the result of the FizzBuzz calculation
  So that I can easily identify numbers divisible by 3 and 5

  Scenario: Returns a number when given a number not divisible by 3 or 5
    Given Input contains 17
    When I click submit
    Then 17 is displayed

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
```

### The Magical Wonder of FizzBuzz
FizzBuzz is a deceptively simple programming problem used by countless
IT recruiters to find out if candidates indeed have at least some of the
programming skills they claim.  You can implement it in almost any form
of computer language in no more than a couple minutes.  If you can provide
input to a function, display the output, and write a couple if-thens, you 
can complete FizzBuzz.

Here are the rules:
* Given an input integer
    * If the integer is divisible by 3, return or display Fizz
    * If it is divisible by 5, return or display Buzz
    * If it is divisible by both, return or display FizzBuzz
    * Otherwise, just return the display the input number
    
But wait!  Don't just fixate on a bunch of if-elseif-else stuff.  In interviews,
FizzBuzz can be an opportunity to show your technical depth.  How would you
thin slice this problem?  Is there more than one way?  How would you test
drive it?  What kinds of tests give you the best value?

And, for the implementation itself, what happens if you can't use if blocks?
Does the implementation language give you other structures you can use?
What happens if a number is divisible by both 3 and 5?  Is there any point
in checking for 3 and 5 individually?  

How could you write the code in an
OO style?  A functional style?  Could you write code that would do the
evaluation using only binary logic operators?  What if you need to evaluate
billions of numbers really fast in a stream?  How could you parallelize the
operation?  Does knowing the answer to one number make it easier to find
the answer for another?  What are the characteristics of your function?
Does it run in constant time?  Why or why not?

The point is that there's a wealth of opportunities to explore the whole of 
computer science, even with such a simple program.  So enjoy doing this
implementation and let it fill your mind with ideas.

