import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import PropTypes from 'prop-types';
import AppointmentForm  from "./AppointmentForm";

class AppointmentList extends Component {
    state={
        isOpen:false
      }


      toggleModal = (key) => {
        console.log(key)
        this.setState({
         
          isOpen: !this.state.isOpen
        }); 
          console.log(this.state)
      }
    
    render() {
       var appointment = this.props.appointment
        return (
            <div>
                
                <Card class='card' body inverse color="info" key={appointment.id}>
    
    <CardTitle>
    {appointment.appointmentTime}
     <br></br>
    {appointment.name}
         <br></br>
       {appointment.number}
       <AppointmentForm 
       appointment={appointment}
       isOpen={this.state.isOpen}
       onClose={this.toggleModal}/>
       <button onClick={()=> this.toggleModal(`appointment${appointment.id}`)}>Schedule New Appointment</button>
        </CardTitle> 
          
         
          {/* <button onClick={()=> this.toggleModal()}>{appointment.id}View Appoinment</button> */}
              {/* <AppointmentForm 
key={appointment.id}
appointment={appointment}
show={this.state.isOpen}
onClose={this.toggleModal} />  
     */}
  
           </Card>
         



            </div>
        );
    }
}

AppointmentList.prototypes={
    getAppointments: PropTypes.func.isRequired,
    appointments: PropTypes.array.isRequired,
    newAppointment: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    addAppointment: PropTypes.func.isRequired
  }

export default AppointmentList;