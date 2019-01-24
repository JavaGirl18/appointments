import React, { Component } from 'react';
import {connect} from 'react-redux'
import {toggleSet} from '../actions/appointmentActions'
import styled from 'styled-components'
import {AppointmentForm  } from "./AppointmentForm";


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
 this.state = { isOpen: false };
  
}

  toggleModal = () => {
    console.log('toggle')
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


    render()    
    
       {
        return (
         <div>
          <Container>
                
                    {this.props.appointments.map(appointment=>(
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
    ))}
             
            </Container>
          
     </div>

           
           
        );
   
       

 
     
    }
}

const mapStateToProps = (state) => {
    return {
      appointments: state.appointments

    }
  }
  
  export default connect(mapStateToProps) (Appointments)

