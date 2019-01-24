import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Appts from './components/Appointments'
import Modal from './components/appointmentForm'

class App extends Component {
  render() {


    const AllAppointments = (props) => {
      return (
        <Appts  {...props} />
      )
    }
    const Form = (props) => {
      return (
        <Modal  {...props} />
      )
    }
    return (
      <Router>
        <Switch>

              <Route exact path='/' render={AllAppointments}></Route> 
              <Route exact path='/newAppointment' render={Form}></Route> 
     </Switch>
     </Router>
    );
  }
}

export default App;
