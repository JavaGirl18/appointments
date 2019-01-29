
import{ GET_APPOINTMENTS, ADD_APPOINTMENT} from './types';
import axios from 'axios'


export const getAppointments = () => dispatch => {
    fetch('https://my-json-server.typicode.com/javagirl18/data/appointments')
      // .then(res => res.json())
    .then(res => res.json())          // convert to plain text
  // .then(json => console.log(json))
      .then(appointments =>
        dispatch({
          type: GET_APPOINTMENTS,
          payload: appointments
        })
      )
      .catch((err) => {
        console.log('ERROR', err)
    })
    
  }

  // export const getOneAppointment = (id) => dispatch => {
  //   const id= request.params.id
  //   axios.get(`https://my-json-server.typicode.com/javagirl18/data/appointments/${id}`)
  //     // .then(res => res.json())
  //   .then(res => res.json())          // convert to plain text
  // // .then(json => console.log(json))
  //     .then(appointment =>
  //       dispatch({
  //         type: GET_APPOINTMENTS,
  //         payload: appointment
  //       })
  //     )
  //     .catch((err) => {
  //       console.log('ERROR', err)
  //   })
    
  // }
  


export const addAppointment = appointmentData => dispatch =>{
    fetch('https://my-json-server.typicode.com/javagirl18/data/appointments', {

    method: 'put',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(appointmentData)
    })
  .then(res => res.json())

    .then(appointments =>
      dispatch({
        type: ADD_APPOINTMENT,
        payload: appointments 
      })
    )
      .catch((err) => {
        console.log('ERROR', err)
    })
    
  }



// export const toggleSet (id) {
//     return {
//       type: 'TOGGLE_SET',
//       id
//     }


