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
const Form = styled.div`
backgroundColor: '#fff',
borderRadius: 5,
maxWidth: 500,
minHeight: 300,
margin: '0 auto',
padding: 30
`

class AppointmentForm extends React.Component {
state = {
    newAppointment :{
        name:"",
        number:''
    },
       isOpen: false
}

handleChange = (event)=>{
    console.log(event.target.value)
    const attributeName = event.target.name
    const attributeValue = event.target.value
    const copyOfNewAppointment = {
        ...this.state.newAppointment
    }
    
    copyOfNewAppointment[attributeName] = attributeValue
    this.setState({ newAppointment: copyOfNewAppointment})
    
}
//  close=()=>{
//     this.props.onClose
// }

handleSubmit = (event) => {
    console.log("submitting")
    event.preventDefault()
    this.props.addAppointment(this.state.newAppointment)
alert('appointment created')
if(alert){
this.props.onClose()
}

  }



  toggleModal = () => {
    console.log('toggle')
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    render() {
        console.log(this.state)
  if(!this.props.show) {
      return null;
    }
    
        return (
            <Backdrop id='form'>

            <form onSubmit={this.handleSubmit}>
            {this.props.children}
           
                     <input
          onChange={this.handleChange}
          name='name'
          value={this.state.newAppointment.name}
        //   placeholder={this.state.newAppointment.name}
        />
                    <input
          onChange={this.handleChange}
          name='number'
          value={this.state.newAppointment.number}
        //   placeholder={this.state.newAppointment.number}
        />
        <div className="footer">
            <input type='submit' value="  Create New Appointment"  />
          
         
          </div>
     
            </form>
            </Backdrop>
        );
    }
}

AppointmentForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    // onSubmit: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
  };

export default connect(null, { addAppointment })(AppointmentForm) 