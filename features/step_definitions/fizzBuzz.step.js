import {defineFeature, loadFeature} from 'jest-cucumber';
import {mount} from "enzyme";
import React from "react";
import App from "../../src/App";

const feature = loadFeature('./features/fizzBuzz.feature');

defineFeature(feature, test => {
    test('Returns a number when given a number not divisible by 3 or 5', ({given, when, then}) => {
        const wrapper = mount(<App/>);

        given('Input contains 17', () => {
            wrapper.find('input').simulate('change', {target: {value: '17'}});
        });

        when('I click submit', () => {
            wrapper.find('button').simulate('click');
        });

        then('17 is displayed', () => {
            expect(wrapper.find('p').text()).toEqual('17');
        });
    });

    test('Returns fizz when given a number divisible by three', ({given, when, then}) => {
        const wrapper = mount(<App/>);

        given('Input contains 6', () => {
            wrapper.find('input').simulate('change', {target: {value: '6'}});
        });

        when('I click submit', () => {
            wrapper.find('button').simulate('click');
        });

        then('fizz is displayed', () => {
            expect(wrapper.find('p').text()).toEqual('fizz');
        });
    });

    test('Returns buzz when given a number divisible by five', ({given, when, then}) => {
        const wrapper = mount(<App/>);

        given('Input contains 10', () => {
            wrapper.find('input').simulate('change', {target: {value: '10'}});
        });

        when('I click submit', () => {
            wrapper.find('button').simulate('click');
        });

        then('buzz is displayed', () => {
            expect(wrapper.find('p').text()).toEqual('buzz');
        });
    });

    test('Returns fizzbuzz when given a number divisible by three and five', ({given, when, then}) => {
        const wrapper = mount(<App/>);

        given('Input contains 30', () => {
            wrapper.find('input').simulate('change', {target: {value: '30'}});
        });

        when('I click submit', () => {
            wrapper.find('button').simulate('click');
        });

        then('fizzbuzz is displayed', () => {
            expect(wrapper.find('p').text()).toEqual('fizzbuzz');
        });
    });
});
