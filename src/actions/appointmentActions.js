
import{ GET_APPOINTMENTS, ADD_APPOINTMENT} from './types';



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


export const addAppointment = appointmentData => dispatch =>{
    fetch('https://my-json-server.typicode.com/javagirl18/data/appointments', {

    method: 'post',
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(appointmentData)
    })
  .then(res => res.json())

    .then(appointment =>
      dispatch({
        type: ADD_APPOINTMENT,
        payload: appointment 
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


