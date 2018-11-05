import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import mainReducer from './reducer';

const rootReducer = combineReducers({
    main: mainReducer,
    form: formReducer,
});

export default rootReducer;