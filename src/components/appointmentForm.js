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
border:solid;

`
const Form = styled.div`
backgroundColor: '#fff',
borderRadius: 5,
maxWidth: 500,
minHeight: 300,
margin: '0 auto',
padding: 30
`

class AppointmentForm extends Component {
    constructor(props){
        super(props)
this.state = {
    appointmentTime:'',
        name:"",
        number:''
    ,
       isOpen: false
}
this.handleChange.bind(this)
this.handleSubmit.bind(this)
    }
handleChange = (event)=>{
    console.log(event.target.value)
    this.setState({[event.target.name]: event.target.value})
    
}
//  close=()=>{
//     this.props.onClose
// }

// handleSubmit = (event) => {
//     console.log("submitting")
//     event.preventDefault()
//     const appointment ={
//         name: this.state.name,
//         number: this.state.number,
//         appointmentTime: this.props.appointmentTime
//     }
//  this.props.addAppointment(appointment)
// alert('appointment created')
// if(alert){
// this.props.onClose()
// }

//   }



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
            <Backdrop>

            <form onSubmit={this.handleSubmit}>
            {this.props.children}
            <input 
                      type='text'
          onChange={this.handleChange}
          name='name'
          value={this.props.appointmentTime}
        
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
           
           {/* <addAppointment/> */}
         </Backdrop>
        );
    }
}
 
AppointmentForm.propTypes = {
    onClose: PropTypes.func.isRequired,
    // onSubmit: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    addAppointment: PropTypes.func.isRequired
  };

export default connect(null, { addAppointment })(AppointmentForm) 