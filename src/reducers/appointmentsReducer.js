import {GET_APPOINTMENTS, UPDATE} from '../actions/types'




const defaultState={
   items:[],
       item:{}
    }

  


export default function(state = defaultState, action){
    switch (action.type){
        default:
      return state;
      case GET_APPOINTMENTS:
      console.log('reducer')
      return {
          ...state,
          items: action.payload
      };
       case UPDATE:
        return state.map((appointment)=>{
            if(appointment.id === action.id){
                return {
                    ...appointment,
                    appointmentTime:action.appointment.appointmentTime,
                    name:action.appointment.name,
                    number:action.appointment.number,
                    set: true
                }
            } else return appointment
        })
            
        case 'TOGGLE_SET':
        const newState = state.map(appointment=>{
            if (appointment.id === action.id){
                appointment.set = !appointment.set
            }
            return appointment
        })
        return newState
    }
}

// export default appointments