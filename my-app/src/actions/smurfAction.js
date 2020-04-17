import axios from "axios";
// still need reducers and actions if you are using context API :)

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAIL = "FETCH_SMURF_FAIL";

export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

// step five: build action creators
export const getCharacters = () => (dispatch) => {
  dispatch({ type: FETCH_SMURF_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      console.log("API Data:", res.data);
      dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_SMURF_FAIL, payload: err.res });
    });
};

export const postCharacter = (newCharacter) => (dispatch) => {
  axios
    .post("http://localhost:3333/smurfs", newCharacter)
    .then((res) => {
      dispatch({ type: POST_SMURF_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: POST_SMURF_FAIL, payload: err.response });
    });
};
