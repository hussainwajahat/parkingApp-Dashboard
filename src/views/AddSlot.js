/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import AddLocation from "../components/user-profile-lite/addLocation";
import {
    Container,
    Col,
    Row,
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

class BlogPosts extends React.Component {
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
        <PageTitle sm="4" title="Add Location" className="text-sm-left" />
    </Row>
    <Row>
        <Col  className="mx-auto">
        <AddLocation />
        </Col>
</Row>
    </Container>

    )
}
}

export default BlogPosts;
