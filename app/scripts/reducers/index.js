import { combineReducers } from 'redux'
import commonReducer from "./commonReducer";
import increment from "./increment";
import decrement from "./decrement";

const allReducers = combineReducers({
    common: commonReducer,
    increment: increment,
    decrement:decrement
})

export default allReducers;