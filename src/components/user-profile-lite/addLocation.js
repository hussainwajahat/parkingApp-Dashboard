import React,{ Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextarea,
  Button
} from "shards-react";

// const AddLocation = ({ title }) => (
export default class AddLocation extends Component {
    constructor(props) {
        super(props);
        this.props= props;
        this.state ={
          location :'',
          slots :''
        }
        this.handleLocationChange = this.handleLocationChange.bind(this); 
        this.handleSlotChange = this.handleSlotChange.bind(this); 
        this.handleLogin = this.handleLogin.bind(this)

    }
    handleLocationChange(event) {
      this.setState({location: event.target.value});
   }
   handleSlotChange(event) {
      this.setState({slots: event.target.value});
   } 
   handleLogin() {
    console.log("EMail: " + this.state.location);
    console.log("Password: " + this.state.slots);
    this.setState({location:''})
    this.setState({slots:0})

}
  render(){
      return(
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Add Locations</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Location</label>
                  <FormInput
                    type="email"
                    id="feEmail"
                    placeholder="Location"
                    value={this.state.location} onChange={this.handleLocationChange}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group">
                  <label htmlFor="fePassword">No Of Slots</label>
                  <FormInput
                    type="number"
                    id="fePassword"
                    placeholder="slots"
                    pattern="[0-9]*"
                    value={this.state.slots} onChange={this.handleSlotChange}
                    autoComplete="current-password"
                  />
                </Col>
              </Row>
              <Button onClick={this.handleLogin}>Update & Save</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
)
  }
}

// UserAccountDetails.propTypes = {
//   /**
//    * The component's title.
//    */
//   title: PropTypes.string
// };

// UserAccountDetails.defaultProps = {
//   title: "Account Details"
// };

