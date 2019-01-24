const defaultState=[
    {
        id: 0,
     appointmentTime: "9 a.m.",  
     name: String, 
     number: Number,
     set: false 
    },
    {
        id: 1,
        appointmentTime: "10 a.m",  
        name: String, 
        number: Number,
        set: false 
       },
       {
        id: 2,
        appointmentTime: "11 a.m",  
        name: String, 
        number: Number,
        set: false 
       }
]

function appointments (state = defaultState, action){
    switch (action.type){
        default:
      return state
       case 'ADD_APPOINTMENT':
        return [...state, action.appointment]
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

export default appointments