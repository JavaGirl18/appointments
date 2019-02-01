import {GET_APPOINTMENTS, UPDATE, TOGGLE_FORM} from '../actions/types'




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
        // clone state
        const newState = { ...state }
        // find the appointment you want to modify
        const targetAppointment = newState.items.find(appointment => appointment.id === action.id)
        // update the target appointment
        targetAppointment.name = action.appointment.name
        targetAppointment.number = action.appointment.number
        targetAppointment.set = true
       
        // return cloned state, this should have the mutated appointment inside
        return newState
  
 

            
    //     case TOGGLE_FORM:
    //     const toggleState = { ...state }
    //     const targetCard = toggleState.items.find(appointment => appointment.id === action.id)
    //     if(appointment.id === action.id){
    //         return{
    //          toggleState,
    //         isOpen: true
    //     }
    // }
           
     
    }
}


// export default appointments