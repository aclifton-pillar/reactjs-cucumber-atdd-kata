import {defineFeature, loadFeature} from 'jest-cucumber';
import {mount} from "enzyme";
import React from "react";
import App from "../../src/App";

const feature = loadFeature('./features/fizzBuzz.feature');

defineFeature(feature, test => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<App/>);
    });

    const givenInputContainsX = given => {
        given(/Input contains (\w+)/, input => {
            wrapper.find('input').simulate('change', {target: {value: input}});
        });
    };

    const whenButtonIsClicked = when => {
        when('I click submit', () => {
            wrapper.find('button').simulate('click');
        });
    };

    const thenXIsDisplayed = then => {
        then(/(\w+) is displayed/, result => {
            expect(wrapper.find('p').text()).toEqual(result);
        });
    };

    test('Returns a number when given a number not divisible by 3 or 5', ({given, when, then}) => {
        givenInputContainsX(given);
        whenButtonIsClicked(when);
        thenXIsDisplayed(then);
    });

    test('Returns fizz when given a number divisible by three', ({given, when, then}) => {
        givenInputContainsX(given);
        whenButtonIsClicked(when);
        thenXIsDisplayed(then);
    });

    test('Returns buzz when given a number divisible by five', ({given, when, then}) => {
        givenInputContainsX(given);
        whenButtonIsClicked(when);
        thenXIsDisplayed(then);
    });

    test('Returns fizzbuzz when given a number divisible by three and five', ({given, when, then}) => {
        givenInputContainsX(given);
        whenButtonIsClicked(when);
        thenXIsDisplayed(then);
    });
});
