import { combineReducers } from 'redux'
import appointments from './appointmentsReducer'

// Combine all our reducers together
const rootReducer = combineReducers({
  appointments
})

export default rootReducer