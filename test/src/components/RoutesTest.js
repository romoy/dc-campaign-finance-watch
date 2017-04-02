/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';
import React from 'react';
import { shallow } from 'enzyme';
import Routes from '../../../src/components/Routes.jsx';
import {Route} from 'react-router';

describe('Routes allow access to available components', () => {

  it('should render eight <Route /> components', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.find(Route)).to.have.length(8);
  });
});
