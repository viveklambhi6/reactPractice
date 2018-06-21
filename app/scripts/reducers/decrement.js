import * as types from "../constants/constants";
const initialState={
  counter:0

}
const decrement=(state= initialState,action,aa)=>{
	switch (action.type) {
   case types.DEC_COUNTER:
     return {
       ...state,
       counter: state.counter - action.data
     }
   
    default:
     return state
 }
}
export default decrement;