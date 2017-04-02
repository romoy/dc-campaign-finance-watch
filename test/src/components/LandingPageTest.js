/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

let LandingPage = require('../../../src/components/LandingPage');
import CreateComponent from '../../helpers/shallowRenderHelper.js';

describe('renders', () => {

  it('should render landing page', () => {
    const LandingPageComponent = CreateComponent(LandingPage);
  });
});
