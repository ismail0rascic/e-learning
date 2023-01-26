import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import authReducer from "./reducers/authReducer";
import errorReducer from "./reducers/errorReducer";
import userReducer from "./reducers/userReducer";

import postReducer from "./reducers/postReducer";
import commentReducer from "./reducers/commentReducer";
import searchReducer from "./reducers/searchReducer";
import messageReducer from "./reducers/messageReducer";
import authUserReducer from "./reducers/authUserReducer";
const rootReducer = combineReducers({
  authR: authReducer,
  errorR: errorReducer,
  userR: userReducer,
  postR: postReducer,
  commentR: commentReducer,
  searchR: searchReducer,
  messageR: messageReducer,
  authUserR:authUserReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
