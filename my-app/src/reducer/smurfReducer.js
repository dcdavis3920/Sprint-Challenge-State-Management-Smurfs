import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL,
} from "../actions";

// step one: setup empty reducer and initial state
const initialState = {
  name: "Brainey",
  age: 200,
  height: "5cm",
  id: 0,
};

// step six: write the reducer logic for actions
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        fetchingSmurfs: true,
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        fetchingSmurfs: false,
        error: "",
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload,
      };
    case POST_SMURF_SUCCESS:
      const newSmurf = {
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0,
      };
      return { ...state, smurf: [...state.smurf, newSmurf] };
    case POST_SMURF_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
        fetchingSmurfs: false,
      };
    default:
      return state;
  }
};

export default reducer;
