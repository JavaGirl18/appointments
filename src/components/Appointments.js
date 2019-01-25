import React, { Component } from 'react';
import {connect} from 'react-redux'
import {toggleSet} from '../actions/appointmentActions'
import styled from 'styled-components'
import {getAppointments} from '../actions/appointmentActions'
import AppointmentForm  from "./AppointmentForm";
import PropTypes from 'prop-types';

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
  constructor(props){
  super(props)
  this.state={
    appointments:[],
    isOpen: false
  }
}


componentWillMount(){
  fetch('db.json')
  .then(res => res.json())
// .then(res => res.text())          // convert to plain text
.then(json => this.setState({appointments: json}))

}

  toggleModal = () => {
    console.log('toggle')
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


    render()    
    
       {  
       const allAppointments = 
                
                    this.state.appointments.map(appointment=>(
                        <Card key={appointment.id}>
                        <ul>
                        <li>
                        {appointment.appointmentTime}: 
                            {appointment.name} Enter your name
                            {appointment.number} Enter your number
                            </li> 
                              </ul>
                              <button onClick={()=> this.toggleModal()}>Make Appointment</button>
                              </Card>
    ))
             
          
        return (
         <Container>
        {allAppointments}
  
        <AppointmentForm 
        show={this.state.isOpen}
          onClose={this.toggleModal}>
    
        </AppointmentForm>
          
     </Container>

           
           
        );
   
       

 
     
    }
  }


const mapStateToProps = state => ({
   
      appointments: state.appointments.items

    });
  
  
  export default connect(mapStateToProps, {getAppointments})(Appointments)

