import {combineReducers} from 'redux';
import tasks from './tasks';
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
  tasks,
  form: formReducer
})
