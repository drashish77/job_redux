"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LOADING = exports.AUTH_LOGIN = exports.counterSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  loading: false,
  isLogin: false,
  error: false,
  isLogout: true
};
var counterSlice = (0, _toolkit.createSlice)({
  name: 'counter',
  initialState: initialState,
  reducers: {
    AUTH_LOGIN: function AUTH_LOGIN(state, action) {
      state.isLogin = true;
    },
    LOADING: function LOADING(state) {
      state.loading = true;
    }
  }
}); // Action creators are generated for each case reducer function

exports.counterSlice = counterSlice;
var _counterSlice$actions = counterSlice.actions,
    AUTH_LOGIN = _counterSlice$actions.AUTH_LOGIN,
    LOADING = _counterSlice$actions.LOADING;
exports.LOADING = LOADING;
exports.AUTH_LOGIN = AUTH_LOGIN;
var _default = counterSlice.reducer;
exports["default"] = _default;