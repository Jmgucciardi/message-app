import React from 'react';
import {shallow, mount, render} from 'enzyme';

describe('<CreateUsers />', () => {
    it('should render seven input  <input /> components', () => {
      const wrapper = shallow(<CreateUsers />);
      expect(wrapper.find(input)).to.have.length(7);
    });
    it('should render one form <form /> component', () => {
        const wrapper = shallow(<CreateUsers />);
        expect(wrapper.find(input)).to.have.length(1);
    });
});