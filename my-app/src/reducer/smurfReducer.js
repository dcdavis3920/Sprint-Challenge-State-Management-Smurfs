import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAIL,
  POST_CHARACTER_SUCCESS,
  POST_CHARACTER_FAIL,
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
        fetchingCharacters: true,
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetchingCharacters: false,
        error: "",
      };
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        fetchingCharacters: false,
        error: action.payload,
      };
    case POST_SMURF_SUCCESS:
      const newCharacter = {
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0,
      };
      return { ...state, characters: [...state.characters, newCharacter] };
    case POST_SMURF_FAIL:
      return {
        ...state,
        addingCharacter: false,
        error: action.payload,
        fetchingCharacters: false,
      };
    default:
      return state;
  }
};

export default reducer;
