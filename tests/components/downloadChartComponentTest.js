'use strict';

describe('Download Chart Component', function () {
    var React = require('react');
    var ReactTestUtils = require('react-addons-test-utils');
    var BS = require('react-bootstrap');
    var Button = BS.Button;
    var DownloadChartComponent = React.createFactory(require('../../client/js/downloadChartComponent'));
    var downloadChartComponent;
    var downloadButton;

    it('renders', function(){
        downloadChartComponent = ReactTestUtils.renderIntoDocument(DownloadChartComponent);
        downloadButton = ReactTestUtils.scryRenderedComponentsWithType(downloadChartComponent, 'button');
        assert(downloadButton).to.be.null;
    });

});
