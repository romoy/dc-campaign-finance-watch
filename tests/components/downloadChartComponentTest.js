'use strict';

describe('Download Chart Component', function () {
    var React = require('react');
    var ReactTestUtils = require('react-addons-test-utils');
    var Button = require('react-bootstrap');
    var DownloadChartComponent = React.createFactory(require('../../client/js/downloadChartComponent'));
    var downloadChartComponent;

    it('renders', function(){
        downloadChartComponent = ReactTestUtils.renderIntoDocument(DownloadChartComponent());
    });

});
