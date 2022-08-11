import { legacy_createStore as createStorage, combineReducers } from "redux";

import userReducer from "./modules/user/reducer";

const reducers = combineReducers({ user: userReducer });

const store = createStorage(reducers);

export default store;
