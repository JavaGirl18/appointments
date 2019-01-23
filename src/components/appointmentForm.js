import React, { Component } from 'react';

class appointmentForm extends Component {
state = {
    newAppointment:''
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
            <div>
                
            </div>
        );
    }
}

export default appointmentForm;