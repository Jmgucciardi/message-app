import React from 'react';
import {shallow, mount, render} from 'enzyme';

/* 
 * Unit testing for the get messages component, still in devlopment, checking to make sure the known elements
 * are in fact there and returning true. 
 */

jest.dontMock('./GetMessages');


const getMessages = require('./GetMessages');

describe("Get Messages", () => {
    it('contains spec with an expetation', () => {
        expect(true).toBe(true);
            expect(shallow(<getMessages />).contains(<div className="GenerateMessage" />)).toBe(true);
    });
    it("will contain button with className 'submitButton' ", () => {
        expect(shallow(<getMessages />).contains(<button className="RemoveMessage" />)).toBe(true);
    });
    it("will contain one link, routing you to the homepage", () => {
        expect(shallow(<getMessages />).contains(<div classname="ShowMessage" />)).toBe(true);
    });
});