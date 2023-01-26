import { GET_COMMENT, REFRESH_COMMENT } from "../actions/types";
const initialState = [];
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COMMENT:
      return action.payload;
    case REFRESH_COMMENT:
      return action.payload;
    default:
      return state;
  }
}
