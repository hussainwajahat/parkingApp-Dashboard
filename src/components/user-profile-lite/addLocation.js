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
          slots :'',   
          SlotsData: [],
        }
        this.handleAddSocial = this.handleAddSocial.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this); 
        this.handleStartChange = this.handleStartChange.bind(this)
        this.handleEndChange = this.handleEndChange.bind(this)
        this.handleRemoveSlot = this.handleRemoveSlot.bind(this)

    }
    handleLocationChange(event) {
      this.setState({location: event.target.value});
   }


handleAddSocial(event) {
  this.setState({slots: event.target.value});
     this.setState({
      SlotsData: this.state.SlotsData.concat({startTime:"",endTime:"",isFilled:false})
     });
  }

handleStartChange(ev,idx){
 const newD = this.state.SlotsData.map((startTime, sidx)=>{
  if(idx !== sidx) return startTime;
  return {...startTime, startTime :ev.target.value}
})
 this.setState({SlotsData: newD})
}
handleEndChange(ev,idx){
  const newD = this.state.SlotsData.map((endTime, sidx)=>{
    if(idx !== sidx) return endTime;
    return {...endTime, endTime :ev.target.value}
  })
  this.setState({SlotsData: newD})
}

handleSubmit = evt => {
  evt.preventDefault();
  const { location, SlotsData } = this.state;
  console.log(this.state)

  var data = {
    slotsData : SlotsData,
    name : location
  }
  debugger
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
};
fetch('http://localhost:3000/locations/addLocations', requestOptions)
  .then(response => {
      return response.json();
  })
  .then((response) => {
    console.log(response)
      debugger
    
  })
  .catch(error =>{
      console.log(error)
      debugger
  })
  this.setState({location:''})
  this.setState({SlotsData:''})
};

handleRemoveSlot = idx => () => {
  this.setState({
    SlotsData: this.state.SlotsData.filter((s, sidx) => idx !== sidx)
  });
};
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
            <Form onSubmit={this.handleSubmit}>
              <Row form>
                {/* Email */}
                <Col md="6" className="form-group">
                  <label htmlFor="feEmail">Location</label>
                  <FormInput
                    type="text"
                    id="feEmail"
                    placeholder="Location"
                    value={this.state.location} onChange={this.handleLocationChange}
                    autoComplete="email"
                  />
                </Col>
                {/* Password */}
                <Col md="6" className="form-group" style={{"marginTop":"29px","textAlign":"center"}}>
                <Button
                type="button"
                onClick={this.handleAddSocial}
                className="small"
                >
                Add Slot
                </Button>
                </Col>
              </Row>
              {this.state.SlotsData.length > 0 && this.state.SlotsData.map((slot,idx) => (
              <Row key={idx} className="Social">
                <Col md="6" className="form-group">
                <label htmlFor={`feStartTime${idx}`}>Start Time</label>
                  <FormInput
                    type="text"
                    id={`feStartTime${idx}`}
                    value={slot.startTime}
                    name={`start_${idx}`}
                    onChange={ (ev) => {this.handleStartChange(ev,idx) }}
                  />
                </Col>
                <Col md="6" className="form-group">
                <label htmlFor={`feEndTime${idx}`}>End Time</label> 
                <a onClick={this.handleRemoveSlot(idx)} style={{float: "right",cursor: "pointer",position: "relative",left: "-5px"}}><b>x</b></a>
                  <FormInput
                    type="text"
                    id={`feEndTime${idx}`}
                    value={slot.endTime}
                    name={`end_${idx}`}
                    onChange={ (ev) => {this.handleEndChange(ev,idx) }}
                  />
                </Col>
              </Row>
            ))}
              <Button>Update & Save</Button>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
)
  }
}

