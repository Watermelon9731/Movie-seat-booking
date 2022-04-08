import { combineReducers, createStore } from 'redux';
import { seatReducer } from './reducers/seatReducer';

const rootReducer = combineReducers({
    seatReducer: seatReducer,
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());