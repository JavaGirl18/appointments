import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk';

const defaultState = {};
const middleware = [thunk]

function configureStore() {
  const store = createStore(
    reducer,
     defaultState,
    compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  );
  return store
}

export default configureStore