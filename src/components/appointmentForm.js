import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addAppointment} from '../actions/appointmentActions'
import styled from 'styled-components'
import PropTypes from 'prop-types';


const Backdrop = styled.div`
position: 'fixed',
top: 0,
bottom: 0,
left: 0,
right: 0,
backgroundColor: 'rgba(0,0,0,0.3)',
padding: 50

`
// const Form = styled.div`
// backgroundColor: '#fff',
// borderRadius: 5,
// maxWidth: 500,
// minHeight: 300,
// margin: '0 auto',
// padding: 30
// `

class AppointmentForm extends React.Component {
state = {
    newAppointment : {
        appointmentTime:'',
        name:"",
        number:''
    },
        showModal: false
}

handleChange = (event)=>{
    console.log(event.target.value)
    this.setState({newAppointment: event.target.vale})
}

handleSubmit = (event) => {
    event.preventDefault()
    this.props.addAppointment(this.state.newAppointment)
    this.setState({ newAppointment: '' })
  }

    render() {

    
        return (
            <Backdrop>

            <form onSubmit={this.handleSubmit}>
            {this.props.children}
                 <input
          value={this.state.newAppointment.appointmentTime}
        />
                     <input
          onChange={this.handleChange}
          value={this.state.newAppointment.name}
        />
                    <input
          onChange={this.handleChange}
          value={this.state.newAppointment.number}
        />
        <div className="footer">
            <button onClick={this.handleSubmit}  >
            Create New Appointment
            </button>
          </div>
     
            </form>
            </Backdrop>
        );
    }
}

AppointmentForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };

export default connect(null, { addAppointment })(AppointmentForm) 