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

  handleSubmit = (event) => {
    console.log("submitting")
    event.preventDefault()
    const appointment ={
        name: this.state.name,
        number: this.state.number,
        appointmentTime: this.state.appointmentTime
    }
 this.props.addAppointment(appointment)
alert('appointment created')
if(alert){
this.props.onClose()
}

  }



    render() 
    
 
       {  
        if(this.props.show) {
          return null;
        }
       const allAppointments = 
                
                    this.props.appointments.map(appointment=>(
                        <Card key={appointment.id}>
    
                        {appointment.appointmentTime}
                            {appointment.name} 
                            {appointment.number} 
                           
                             
                             <button onClick={()=> this.toggleModal()}>Make Appointment</button>
                             <button onClick={()=> this.toggleModal()}>{appointment.id}View Appoinment</button>
                              </Card>

                              
    ))
         
  const form=(
      <form onSubmit={this.handleSubmit}>
      {this.props.children}
      <input 
                type='text'
    onChange={this.handleChange}
    name='appointmentTime'
    value={this.state.appointmentTime}
  
    placeholder={this.props.appointmentTime}
  />
     <label>Enter your name</label>
               <input 
                type='text'
    onChange={this.handleChange}
    name='name'
    value={this.state.name}
    placeholder={this.state.name}
  />
  <label>Enter your number</label>
              <input
              type='text'
    onChange={this.handleChange}
    name='number'
    value={this.state.number}
    placeholder={this.state.number}
  />
  <div className="footer">
      <input type='submit' value="  Create New Appointment"  />
    
   
    </div>
  
      </form>

  )          
        return (
         <Container>
        {allAppointments}
  
        <AppointmentForm 
        show={this.state.isOpen}
          onClose={this.toggleModal}
          appointments={allAppointments}>
  
    
        </AppointmentForm>
          
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
   
      appointments: state.appointments.items,
      newAppointment : state.appointments.items

    });
  
  
  export default connect(mapStateToProps, {getAppointments})(Appointments)

