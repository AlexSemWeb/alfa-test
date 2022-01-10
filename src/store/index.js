import { createStore, applyMiddleware, combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  postsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
