import { legacy_createStore as createStore ,combineReducers} from 'redux'
import {modeReducer} from "./reducer"

const rootReducer = combineReducers({
  mode: modeReducer,
});

const store = createStore(rootReducer);

export default store;