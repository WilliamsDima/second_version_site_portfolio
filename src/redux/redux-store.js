import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import mainReducer from "./reducers/mainReducer";

let reducers = combineReducers({
    main: mainReducer,
    form: formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;