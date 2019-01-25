import { combineReducers } from 'redux'
import appointmentsReducer from './appointmentsReducer'

// Combine all our reducers together
export default combineReducers({
  appointments: appointmentsReducer
});

