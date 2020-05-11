import React, { Component } from "react";
import {
    CardHeader,
    Card,
    CardBody
} from "shards-react";

// const AddLocation = ({ title }) => (
export default class LocationList extends Component {
constructor(props) {
    super(props);
    this.props = props;
    this.state = {
        Location : []
    };
}



componentDidMount() {

    fetch(`${process.env.REACT_APP_BASEURL}/locations/`)
    .then(response => response.json())
    .then(data =>     { 
        this.setState({ Location: data.model }) } )
    };
render() {
    
    return (<Card className="mb-4" >
    <CardHeader className="border-bottom" >
    </CardHeader>
    <CardBody className="p-0 pb-3">
    <table className="table mb-0 text-center">
    <thead className="bg-light">
    <tr>
    <th scope="col" className="border-0">
    Location
    </th>
    <th scope="col" className="border-0">
    Slot Counts
    </th>
    <th scope="col" className="border-0">
    Action
    </th>
    </tr>
    </thead>
    <tbody>
    {this.state.Location.length > 0 && this.state.Location.map((post, idx) => (
        <tr>
        <td>{post.name}</td>
        <td>{post.slotsData.length}</td>
        <td><button class="btn btn-primary mb-2 btn-sm">Edit</button> <button class="btn btn-danger mb-2 btn-sm" >Delete</button></td>
        </tr>
        ))}
        </tbody>
        </table>
        </CardBody>
        </Card>
    );
}
}
