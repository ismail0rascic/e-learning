import { GET_POST, REFRESH_POST } from "../actions/types";
const initialState = [];
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POST:
      return action.payload;
    case REFRESH_POST:
      return action.payload;
    default:
      return state;
  }
}
