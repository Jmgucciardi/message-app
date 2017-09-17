import React from 'react';
import {shallow, mount, render} from 'enzyme';

jest.dontMock('./CreateMessages');


const createMessages = require('./CreateMessages');

describe("Create Messages", () => {
    it('contains spec with an expetation', () => {
        expect(true).toBe(true);
            expect(shallow(<createMessages />).contains(<div className="messageInput" />)).toBe(true);
    });
    it("will contain button with className 'submitButton' ", () => {
        expect(shallow(<createMessages />).contains(<button className="submitButton" />)).toBe(true);
    });
    it("will contain one link, routing you to the homepage", () => {
        expect(shallow(<createMessages />).contains(<Link classname="RouteToHome" />)).toBe(true);
    });
});