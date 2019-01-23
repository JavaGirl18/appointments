import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Appts from './components/Appointments'

class App extends Component {
  render() {


    const AllAppointments = (props) => {
      return (
        <Appts appointments {...props} />
      )
    }
    return (
      <Router> 
     
         <Route exact path='/' component={AllAppointments}></Route>
       </Router>
    );
  }
}

export default App;
