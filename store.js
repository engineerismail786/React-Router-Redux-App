import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import animalReducer from "./datareducer";
const middleware = [thunk];
const store = createStore(
  animalReducer,
  compose(
    applyMiddleware(...middleware),
    
  )
);
export default store;
