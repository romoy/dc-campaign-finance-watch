/*eslint-env node, mocha */
/*global expect */
/*eslint no-console: 0*/
'use strict';

let Index = require('../../src/index');
import CreateComponent from '../helpers/shallowRenderHelper.js';

describe('renders', () => {

  it('should render index', () => {
    const IndextComponent = CreateComponent(Index);
  });
});
