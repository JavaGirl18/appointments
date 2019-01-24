import uuid from 'uuid'

export function addAppointment (appointmentTime){
    return{
        type: "Add_Appointment",
        appointment:{
            id: uuid(),
            appointmentTime,
            set: false
        }
    }
}

export function toggleSet (id) {
    return {
      type: 'TOGGLE_SET',
      id
    }
  }

