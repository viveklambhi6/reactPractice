import * as types from "../constants/constants";
const initialState={
  counter:0

}
const increment=(state= initialState,action,aa)=>{
	 switch (action.type) {
   case types.INCREMENT:
     return {
       ...state,
       counter: state.counter + action.data
     }
   case types.ADD_COUNTER:
     return {
       ...state,
       counter: state.counter + action.data
     }
    default:
     return state
 }
}
export default increment;