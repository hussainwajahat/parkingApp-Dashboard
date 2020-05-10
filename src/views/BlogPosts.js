/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import AddLocation from "../components/user-profile-lite/addLocation";
import LocationList from "../components/user-profile-lite/locationLists";
import {
  Container,
  Row,
  Col,
  Button
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class AddSlot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    

    return (
      <Container fluid className="main-content-container px-4 pb-4">
      {/* Page Header */}
      <Row noGutters className="page-header py-4">
        <PageTitle sm="4" title="Slots" className="text-sm-left" />
      </Row>
      <Row className="" style={{"padding-bottom": "10px","margin-left":"0px"}}> 
        <a href="/add-slot" className="btn btn-primary">Add Slot</a>
      </Row>
  
      <Row>
        <Col>
          <LocationList />
        </Col>
  </Row>
    </Container>

    )
  }
}

export default AddSlot;
