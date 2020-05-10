import React,{Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./routes";
import withTracker from "./withTracker";
import {withRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";


 class App extends Component{
  constructor(props) {
    super(props);
    this.state ={
       nofooter:Boolean,
       noside:Boolean,
       noheader:Boolean
    }
    
}
componentDidMount(){
  var path = window.location.pathname.toString();
  path = path.slice(21);
    if(path == '/'||path == '/signIn'||path == '/signUp'){
    console.log(path,'true')
    this.setState({
      nofooter:true
    });
    this.setState({
      noside:true
    });
    this.setState({
      noheader:true
    });
    // nofooter = true;noside=true;noheader = true;
  }else{
    console.log(path,'false')
    this.setState({
      nofooter:false
    });
    this.setState({
      noside:false
    });
    this.setState({
      noheader:false
    });
  // nofooter = false;noside=false;noheader = false;
}
}
 render(){
 return(
  <Router basename={process.env.REACT_APP_BASENAME}>
    <div>
      
      {routes.map((route, index) => {
        // console.log(route.path,'sssssss')
      //  { console.log(this.componentDidUpdate(route.path),'ddddd')}
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker(props => {
              // console.log(props,'ssssss')
              return (
                <route.layout noNavbar={this.state.noheader} noSide={this.state.noside} noFooter={this.state.nofooter} {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
);
    }}
    export default App;