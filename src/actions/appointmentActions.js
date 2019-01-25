
import{ GET_APPOINTMENTS, ADD_APPOINTMENT} from './types';



export const getAppointments = () => dispatch => {
    fetch('db.json')
      .then(res => res.json())
    // .then(res => res.text())          // convert to plain text
//   .then(json => console.log(json))
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
    fetch('db.json', {

    method: 'post',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(appointmentData)
    })
  .then(res => res.text())
  .then(data=>console.log(data)
    // .then(appointment =>
    //   dispatch({
    //     type: ADD_APPOINTMENT,
    //     payload: appointment 
    //   })
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


