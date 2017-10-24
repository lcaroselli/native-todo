import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './App';

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    App
  )
}

export default configureStore;
