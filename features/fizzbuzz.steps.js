import { defineFeature, loadFeature } from 'jest-cucumber';
import {mount} from "enzyme";
import React from "react";
import App from "../src/App";

const feature = loadFeature('./features/fizzbuzz.feature');

defineFeature(feature, test => {
    test('Display Fizzbuzz', ({ given, when, then }) => {
        let rendered;
        let fizzbuzz;
        given('I run the app', () => {
            rendered = mount(<App />);
        });

        when('I am on the app screen', () => {
            fizzbuzz = rendered.find('p');
        });

        then('I display fizzbuzz', () => {
            expect(fizzbuzz.text()).toEqual('fizzbuzz');
        });
    });
});