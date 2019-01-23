import React, { Component } from 'react';
import {connect} from 'react-redux'
import {toggleSet} from '../actions/appointmentActions'

class Appointments extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.appointments.map(appointment=>(
                        <li key={appointment.id} onClick={()=> this.props.toggleSet(appointment.id)}>{appointment.appointmentTime}: 
                            {appointment.name} Enter your name
                            {appointment.number} Enter your number
                            </li>
    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      appointments: state.appointments
    }
  }
  
  export default connect(mapStateToProps, {toggleSet})(Appointments)

