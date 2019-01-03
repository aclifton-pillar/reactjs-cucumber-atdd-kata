import { defineFeature, loadFeature } from 'jest-cucumber';
import {mount} from "enzyme";
import React from "react";
import App from "../../src/App";

const feature = loadFeature('./features/fizzBuzz.feature');

defineFeature(feature, test => {
   test('Returns a number when given a number', ({ given, when, then }) => {
       const wrapper = mount(<App/>);

       given('Input contains 10', () => {
           wrapper.find('input').simulate('change', { target: { value: '10' }});
       });

       when('I click submit', () => {
          wrapper.find('button').simulate('click');
       });

       then('10 is displayed', () => {
          expect(wrapper.find('p').text()).toEqual('10');
       });
   });

    test('Returns fizz when given a number divisible by three', ({ given, when, then }) => {
        const wrapper = mount(<App/>);

        given('Input contains 3', () => {
            wrapper.find('input').simulate('change', { target: { value: '3' }});
        });

        when('I click submit', () => {
            wrapper.find('button').simulate('click');
        });

        then('fizz is displayed', () => {
            expect(wrapper.find('p').text()).toEqual('fizz');
        });
    });
});
