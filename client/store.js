import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { REQUEST_INIT } from './constants/actionTypes';

//middlewares
import logger from 'redux-logger';
import { requestMiddleware } from './middlewares';
//reducers
import userReducer from './reducers/UserReducer';

// register middlewares based on the environment
const middlewares = (process.env.NODE_ENV !== 'production')
? [logger(), requestMiddleware]
: [requestMiddleware];

// create store with respective combined reducers
const store = createStore(combineReducers({
    form: formReducer,
    user: userReducer,
    isFetching: (state = false, action) => action.type === REQUEST_INIT && action.options.showLoader === true
}), applyMiddleware(...middlewares));


export default store;
