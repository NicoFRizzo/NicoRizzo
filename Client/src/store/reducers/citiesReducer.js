import { SET_FILTER_TEXT } from "../constants/action_type";
import { SET_ON_FILTER_TEXT_CHANGE } from "../constants/action_type";
import { CONNREFUSED } from "dns";

const initialState = {
  filterText2: [],
  onFilterText2Change: []
};

console.log('REDUCER VALUE FILTERTEXT = ', initialState.filterText2)

function rootReducer(state = initialState, action) {
  switch(action.type){
    
    case SET_FILTER_TEXT: {
      console.log('Reducer - SET_FILTER_TEXT', state.filterText2.concat(action.payload))
      return Object.assign({}, state, {
        filterText2: state.filterText2.concat(action.payload)
      });    
    }

    case SET_ON_FILTER_TEXT_CHANGE: {
      return Object.assign({}, state, {
        onFilterText2Change: state.filterText2.concat(action.payload)
      });
    }

    default: return state;

  }

}

export default rootReducer;
