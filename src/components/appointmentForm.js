import React, { Component } from 'react';

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

        return (
            <form onSubmit={this.handleSubmit}>
                 <input
          onChange={this.handleChange}
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
            </form>
        );
    }
}

export default appointmentForm;