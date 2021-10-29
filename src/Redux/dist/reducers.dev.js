"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = counterReducer;

var _redux = require("redux");

function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    value: 0
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'counter/incremented':
      return {
        value: state.value + 1
      };

    case 'counter/decremented':
      return {
        value: state.value - 1
      };

    default:
      return state;
  }
}

var store = (0, _redux.createStore)(counterReducer);
store.subscribe(function () {
  return console.log(store.getState());
});
store.dispatch({
  type: 'counter/incremented'
}); // {value: 1}

store.dispatch({
  type: 'counter/incremented'
}); // {value: 2}

store.dispatch({
  type: 'counter/decremented'
}); // {value: 1}