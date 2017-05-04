/*eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import client from '../api';
import {
  Row,
  Col,
  FormGroup,
  FormControl,
  ControlLabel
} from 'react-bootstrap';
import DateRangeComponent from '../dateRange.jsx';
import LoaderComponent from '../loader.component.jsx';
import SearchResults from './searchResultsComponent';

class RaceSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      races: [],
      campaigns: [],
      range: {},
      selectedRace: ''
    };
  }

  componentWillMount() {
    var that = this;
    client
      .getRaces()
      .then(function(races) {
        races.unshift('Select a race type');
        that.setState({ races: races });
      })
      .catch(function(err) {
        console.error(err);
      });
  }

  _handleRangeSelected(toDate, fromDate) {
    let that = this;
    let range = { toDate: toDate, fromDate: fromDate };
    this.setState({ range: range });
    if (this.state.selectedRace) {
      client.getCampaigns(this.state.selectedRace, range).then(campaigns => {
        that.setState({ campaigns: campaigns });
      });
    }
  }

  _handleRaceSelection(evt) {
    let race = evt.target.value;
    var that = this;
    client.getCampaigns(race, this.state.range).then(campaigns => {
      that.setState({ campaigns: campaigns, selectedRace: race });
    });
  }

  render() {
    const { races, campaigns } = this.state;
    return (
      <div>
        <LoaderComponent isLoading={this.state.loading} />
        <Row>
          <Col md={6} xs={12}>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select a race type</ControlLabel>
              <FormControl
                ref="raceType"
                componentClass="select"
                placeholder="select"
                onChange={this._handleRaceSelection.bind(this)}
              >
                {races.map((r, idx) => {
                  return <option key={idx} value={r}>{r}</option>;
                })}
              </FormControl>
            </FormGroup>
            <h3>Filter by a date range</h3>
            <DateRangeComponent
              onRangeInput={this._handleRangeSelected.bind(this)}
            />
          </Col>
          <Col xs={6}>
            <h3>Search Results (A-Z)</h3>
            <SearchResults {...this.props} campaigns={campaigns}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RaceSearch;
