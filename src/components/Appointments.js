import React, { Component } from 'react';
import {connect} from 'react-redux'
import {toggleSet} from '../actions/appointmentActions'
import styled from 'styled-components'

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

    render() {
        return (
            <Container>
                
                    {this.props.appointments.map(appointment=>(
                        <Card>
                        <ul>
                        <li key={appointment.id} onClick={()=> this.props.toggleSet(appointment.id)}>{appointment.appointmentTime}: 
                            {appointment.name} Enter your name
                            {appointment.number} Enter your number
                            </li> 
                              </ul>
                              </Card>
    ))}
             
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      appointments: state.appointments
    }
  }
  
  export default connect(mapStateToProps, {toggleSet})(Appointments)

