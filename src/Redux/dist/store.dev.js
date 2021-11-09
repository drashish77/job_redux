"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeStore = initializeStore;
exports["default"] = exports.persister = exports.store = void 0;

var _redux = require("redux");

var _reduxPersist = require("redux-persist");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _reduxSaga = _interopRequireDefault(require("redux-saga"));

var _rootReducer = _interopRequireDefault(require("./rootReducer"));

var _rootSaga = _interopRequireDefault(require("./rootSaga"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sagaMiddleware = (0, _reduxSaga["default"])();
var middlewares = [sagaMiddleware, _reduxLogger["default"]];
var store = (0, _redux.createStore)(_rootReducer["default"], _redux.applyMiddleware.apply(void 0, middlewares));
exports.store = store;
sagaMiddleware.run(_rootSaga["default"]);

function initializeStore() {
  return store;
}

var persister = (0, _reduxPersist.persistStore)(store);
exports.persister = persister;
var storePersist = {
  store: store,
  persister: persister
};
var _default = storePersist;
exports["default"] = _default;