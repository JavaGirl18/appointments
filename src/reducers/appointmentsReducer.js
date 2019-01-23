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
    }
}

export default appointments