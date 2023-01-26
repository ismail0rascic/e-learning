import { GET_AUTH_USER } from "../actions/types";
const initialState = false;
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_AUTH_USER:
      return action.payload[0];
    default:
      return state;
  }
}
