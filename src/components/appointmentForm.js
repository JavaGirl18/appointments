import React, { Component } from 'react';
import {connect} from 'react-redux'

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
border:solid;
`


class AppointmentForm extends Component {
    constructor(props){
        super(props)
this.state = {
    appointment:{
    name:'',
    number:'',
    set: false
},
isOpen: false, 
red: false
}

    }

  

    handleUpdate = event => {
        const copyOfState = { ...this.state.appointment };
        const attributeName = event.target.name;
        const attributeValue = event.target.value;
        copyOfState[attributeName] = attributeValue;
    
        this.setState({ appointment: copyOfState });
      };

handleSubmit = (event) => {
    console.log("submitting")
    event.preventDefault()
    const appointment ={
        id: this.state.appointment.id,
        name: this.getName.value,
        number: this.getNumber.value,
        set: true
        // appointmentTime: this.props.appointmentTime
    }
    this.setState({appointment})
    console.log(appointment)
 this.props.dispatch({type: 'UPDATE', id: this.props.appointment.id, appointment:appointment})
alert('appointment created')
if(alert){
this.props.onClose()

}
if(appointment.set === true){
  
// this.props.changeColor()
console.log("true")
}

  }



//   toggleModal = () => {
//     console.log('toggle')
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }

    render() {
        // console.log(this.props)
  if(!this.props.show) {
      return null;
    }
    
        return (
            <div>

            <form class="form" onSubmit={this.handleSubmit}>
            {this.props.children}
            <input class ="inputData" name='name' required type='text' onChange={this.handleUpdate}  value={this.state.appointment.name} ref={(input)=> this.getName=input} placeholder="Enter your name"/>
            <input class ="inputData" name='number' type='text' onChange={this.handleUpdate}  value={this.state.appointment.number} ref={(input)=> this.getNumber=input} placeholder="Enter your number"
        />
        <div className="footer">
            <input class='submit' type='submit' value="  Create New Appointment"  />
          
         
          </div>
     
            </form>
           
           {/* <addAppointment/> */}
         </div>
        );
    }
}
 
AppointmentForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    // onSubmit: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    // addAppointment: PropTypes.func.isRequired
  };

export default connect(null,)(AppointmentForm) 