"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jobReducer = _interopRequireDefault(require("./jobs/jobReducer"));

var _redux = require("redux");

var _authReducer = _interopRequireDefault(require("./auth/authReducer"));

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var persistConfig = {
  key: 'root',
  storage: _storage["default"],
  whitelist: ['auth']
}; // const authPersistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['auth'],
// }
// const jobsPersistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['jobs'],
// }

var rootReducer = (0, _redux.combineReducers)({
  auth: _authReducer["default"],
  jobs: _jobReducer["default"]
});

var _default = (0, _reduxPersist.persistReducer)(persistConfig, rootReducer); // import { combineReducers } from 'redux'
// import auth from './auth/authReducer'
// export default combineReducers({ auth, })
// import { persistReducer } from 'redux-persist'
// import { combineReducers } from 'redux'
// import storage from 'redux-persist/lib/storage'
// import auth from './auth/authReducer'
// const rootPersistConfig = {
//   key: 'root',
//   storage: storage,
//   blacklist: ['auth'],
// }
// const authPersistConfig = {
//   key: 'auth',
//   storage: storage,
//   blacklist: ['somethingTemporary'],
// }
// const rootReducer = combineReducers({
//   auth: persistReducer(authPersistConfig, auth),
// })
// // export default combineReducers({ auth })
// export default persistReducer(rootPersistConfig, rootReducer)


exports["default"] = _default;