const defaultState=[
    {
     appointmentTime: Date,  
     name: String, 
     number: Number,
     set: false 
    },
    {
        appointmentTime: Date,  
        name: String, 
        number: Number,
        set: false 
       }
]

function appointments (state = defaultState, action){
    switch (action.type){
        default:
        return state
    }
}

export default appointments