'use strict';

describe('Download Chart Component', function () {
    var React = require('react');
    var chai = require('chai');
    var ReactTestUtils = require('react-addons-test-utils');
    var BS = require('react-bootstrap');
    var expect = chai.expect;
    var Button = BS.Button;
    var DownloadChartComponent = React.createFactory(require('../../client/js/downloadChartComponent'));

    it('renders', function(){
        var downloadChartComponent = ReactTestUtils.renderIntoDocument(DownloadChartComponent);
        expect(downloadChartComponent).to.not.exist;
    });

});
