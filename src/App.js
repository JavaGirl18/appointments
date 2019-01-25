import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './configureStore';
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
      <Provider store={store}>
        <AllAppointments/>
      </Provider>
    );
  }
}

export default App;
