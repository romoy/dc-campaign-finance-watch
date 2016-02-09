import React from 'react/addons';
import {
    Button
} from 'react-bootstrap';

class DownloadChartComponent extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Button
                className="downloadVisualization"
                onClick={this.props.onDownload}
            >
                Download Visualization
            </Button>
        );
    }
}

export default DownloadChartComponent;
