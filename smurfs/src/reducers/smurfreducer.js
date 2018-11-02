/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH_SMURFS, SUCCESS_FETCH, FAILURE } from "../actions";

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
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs:[...state.smurfs, ...action.payload]
      };

    case FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      }
    default:
      return state;
  }
}