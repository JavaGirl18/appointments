import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addAppointment} from './actions/appointmentActions'



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

class appointmentForm extends Component {
state = {
    newAppointment = {
        appointmentTime:'',
        name:"",
        number:''
    }
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

        if(!this.props.show) {
            return null;
          }

        return (
            <Backdrop>
            <Form onSubmit={this.handleSubmit}>
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
        <button>Create New Appointment</button>
            </Form>
            </Backdrop>
        );
    }
}

export default connect(null, { addAppointment })(appointmentForm)