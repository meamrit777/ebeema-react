import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./RootReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 
console.log("###",composeEnhancers);
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
  
);
export default store;
