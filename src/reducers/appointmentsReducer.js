import {GET_APPOINTMENTS, ADD_APPOINTMENT} from '../actions/types'




const defaultState={
   appointments:[],
       appointment:{}
    }

  


export default function(state = defaultState, action){
    switch (action.type){
        default:
      return state;
      case GET_APPOINTMENTS:
      return {
          ...state,
          appointments: action.payload
      }
       case ADD_APPOINTMENT:
        return {...state,
             appointment: action.payload
            };
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