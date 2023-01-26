import { SHOW_MESSAGE, CLEAR_MESSAGE } from "../actions/types";
const initialState = false;
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return action.payload;
    case CLEAR_MESSAGE:
      return false;
    default:
      return state;
  }
}
