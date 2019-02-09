import React, { Component } from 'react';
import {connect} from 'react-redux'
import {toggleSet} from '../actions/appointmentActions'
import styled from 'styled-components'
import {getAppointments} from '../actions/appointmentActions'
import AppointmentForm  from "./AppointmentForm";
import AppointmentList from './AppointmentList'
import PropTypes from 'prop-types';
import { Card, Button, CardTitle, CardText } from 'reactstrap';






class Appointments extends Component {

  

componentWillMount(){
  this.props.getAppointments()


}

  toggleModal = (key) => {
    console.log(key)
    this.setState({
   isOpen: !this.state.isOpen
    });
  }

 


    render() 
    {
     const appointments =  this.props.appointments

                                 
        return ( 
          <div>
        <h1 class="center">Available Appointments</h1>
        {appointments.map(appointment=>
          <AppointmentList key={appointment.id} appointment={appointment}/>
          )} 
     
     </div>
 

           
           
        );
   
       

 
     
    }
  }

  Appointments.prototypes={
    getAppointments: PropTypes.func.isRequired,
    appointments: PropTypes.array.isRequired,
    newAppointment: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    addAppointment: PropTypes.func.isRequired
  }


const mapStateToProps = state => ({
   
      appointments: state.appointments.items

    });
  
  
  export default connect(mapStateToProps, {getAppointments})(Appointments)