import React, { Component } from 'react';
import {connect} from 'react-redux'
import {toggleSet} from '../actions/appointmentActions'
import styled from 'styled-components'
import {getAppointments} from '../actions/appointmentActions'
import AppointmentForm  from "./AppointmentForm";
import PropTypes from 'prop-types';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import ShowAppointments from './ShowAppointments';





class Appointments extends Component {
state={
  isOpen:false
}

componentWillMount(){
  this.props.getAppointments()


}

  toggleModal = () => {
    console.log('toggle')
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  


    render() 
    
 
       {  
       
      //  const allAppointments = 
                
                  
          
        return ( 
          <div class="parentContainer">
        <h1 class="center">Available Appointments</h1>
         <div class ='container' >
          
      {this.props.appointments.map(appointment=>(
                        <Card class='card' body inverse color="info" key={appointment.id}>
    
                       <CardTitle>{appointment.appointmentTime}</CardTitle> 
                        <br></br>
                            {appointment.name} 
                            <br></br>
                            {appointment.number} 
                           
                             
                            
                             {/* <button onClick={()=> this.toggleModal()}>{appointment.id}View Appoinment</button> */}
                                 <AppointmentForm 
 key={appointment.id}
 appointment={appointment}
        show={this.state.isOpen}
          onClose={this.toggleModal} />  
                       
                     
                              </Card>

                              
    ))}     
     </div>
     <Button color="secondary" onClick={()=> this.toggleModal()}>Make Appointment</Button>
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
