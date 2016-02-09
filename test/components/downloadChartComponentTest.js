'use strict';

describe('Download Chart Component', function () {
    var React = require('react');
    var chai = require('chai');
    var ReactTestUtils = require('react-addons-test-utils');
    var BS = require('react-bootstrap');
    var expect = chai.expect;
    var Button = BS.Button;
    var DownloadChartComponent = React.createFactory(require('../../lib/js/downloadChartComponent'));

    it('renders', function(){
        const shallowRender = ReactTestUtils.createRenderer();
        shallowRender.render(React.createElement(DownloadChartComponent));
        expect(shallowRender.getRenderOutput().className).to.not.exist;
    });

});
