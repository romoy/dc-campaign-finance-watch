import React from 'react';
import _ from 'lodash';
import { Button, ButtonToolbar, Col, Row } from 'react-bootstrap';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleCampaignSelection, selections, campaigns } = this.props;

    return (
      <div>
        {_.sortBy(campaigns, 'name').map((c, idx) => {
          return (
            <Row key={idx}>
              <Col xs={4}>
                <h5>{c.name}: </h5>
              </Col>
              <Col xs={8}>
                <ButtonToolbar className="well" key={idx}>
                  {_.sortBy(c.campaigns, 'year').map((ca, idx) => {
                    if (
                      selections[c.id] &&
                      _.includes(selections[c.id].campaigns, ca)
                    ) {
                      return (
                        <Button
                          bsStyle="info"
                          bsSize="small"
                          key={idx}
                          block
                          disabled
                        >
                          {ca.raceTypeDetail} {ca.year}
                        </Button>
                      );
                    }
                    return (
                      <Button
                        bsStyle="info"
                        onClick={() =>
                          handleCampaignSelection(c.name, c.id, ca)}
                        bsSize="small"
                        key={idx}
                        block
                      >
                        {ca.raceTypeDetail} {ca.year}
                      </Button>
                    );
                  })}
                </ButtonToolbar>
              </Col>
              <hr />
            </Row>
          );
        })}
      </div>
    );
  }
}

export default SearchResults;
