import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAIL,
  POST_SMURF_START,
} from "../actions/smurfAction";

const initialState = {
  fetchingSmurfs: false,
  postingSmurfs: false,
  error: "",
  smurf: [],
};

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
    case POST_SMURF_START:
      return {
        ...state,
        postingSmurfs: true,
      };
    case POST_SMURF_SUCCESS:
      const newSmurf = {
        name: action.payload,
        age: "",
        height: "",
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
