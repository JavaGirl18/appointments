import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Appts from './Components/Appointments'
import Modal from './Components/AppointmentForm'

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
      <div>
        <Appts/>
      </div>
    );
  }
}

export default App;
