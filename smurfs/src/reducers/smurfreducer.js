/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH_SMURFS, 
        SUCCESS_FETCH, 
        FAILURE,
        ADD_SMURF,
        SUCCESS_ADD,
        ADD_FAILURE } from "../actions";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  error: null,
  addingSmurf: false
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true
      };

    case SUCCESS_FETCH:
    console.log(state.smurfs, action.payload)
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: [...state.smurfs, ...action.payload]
      };

    case FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      };
    
    case ADD_SMURF:
      return {
        ...state,
        addingSmurf: true
      }
    
    case SUCCESS_ADD:
      return {
        ...state,
        addingSmurf: false
      }
    
    case ADD_FAILURE:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload
      }
    default:
      return state;
  }
}
