import uuid from 'uuid'

export function addAppointment (name, number){
    return{
        type: "Add_Appointment",
        appointment:{
            id: uuid(),
            name: name,
            number:number,
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