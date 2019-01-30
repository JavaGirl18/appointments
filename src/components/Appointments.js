import React, { Component } from 'react';
import {connect} from 'react-redux'
import {toggleSet} from '../actions/appointmentActions'
import styled from 'styled-components'
import {getAppointments} from '../actions/appointmentActions'
import AppointmentForm  from "./AppointmentForm";
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
const Card=styled.div`
height 300px;
width: 300px;
padding: 50px;
background-color:blue;
border:solid;
border-radius: 30px;
box-shadow:  10px 10px 5px #888888;
`
const Container = styled.div`
padding: 30px;
display: flex;
justify-content: space-between;
`

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
        if(this.props.show) {
          return null;
        }
      //  const allAppointments = 
                
                  
          
        return (
         <Container>
           <h1>Available Appointments</h1>
      {this.props.appointments.map(appointment=>(
                        <div key={appointment.id}>
    
                        {appointment.appointmentTime}
                            {appointment.name} 
                            {appointment.number} 
                           
                             
                             <button onClick={()=> this.toggleModal()}>Make Appointment</button>
                             {/* <button onClick={()=> this.toggleModal()}>{appointment.id}View Appoinment</button> */}
                                 <AppointmentForm 
 key={appointment.id}
 appointment={appointment}
        show={this.state.isOpen}
          onClose={this.toggleModal} />  
                       
                              </div>

                              
    ))}
         
  
  <Card>



  </Card>
          
     </Container>

           
           
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

