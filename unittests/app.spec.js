import React from 'react';
import {mount} from "enzyme";
import App from "../src/App";

describe("fizzbuzz", () => {
    test("should always display fizzbuzz", () => {
        const rendered = mount(<App />);
        const magical = rendered.find('p');
        expect(magical.text()).toEqual('fizzbuzz');
    });
});