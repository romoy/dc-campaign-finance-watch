import React from 'react/addons';
import ReactDOM from 'react-dom';
import {Input} from 'react-bootstrap';

class ChartSelectorComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    _handleChange() {
        let chart = ReactDOM.findDOMNode(this.refs.chart).value;
        this.props.onChartSelected(chart);
    }

    render() {
        return (
            <div>
                <h4 className="instructions">
                    <p> 1. Choose to create a visualization based on </p>
                </h4>
                <select ref="chart"
                        onChange={this._handleChange.bind(this)}>
                    <option value="">Click here to view visualization options!</option>
                    <option value="contributionOverTime">Contributions Over Time</option>
                    <option value="contributorBreakdown">Breakdown of Contributions</option>
                    <option value="contributorDendogram">Tree of Contributors</option>
                </select>
            </div>
        );
    }
}

export default ChartSelectorComponent;
