import { RUN_SEARCH, SEARCH } from "../actions/types";
const initialState = { run: 0, term: "" };
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return { ...state, term: action.payload };
    case RUN_SEARCH:
      return { ...state, run: state.run + 1 };
    default:
      return state;
  }
}
