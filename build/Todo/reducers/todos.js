'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = todos;

var _ActionTypes = require('../constants/ActionTypes');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = [{
  text: 'Use Redux',
  completed: false,
  id: 0
}];

function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _ActionTypes.ADD_TODO:
      return [{
        id: state.reduce(function (maxId, todo) {
          return Math.max(todo.id, maxId);
        }, -1) + 1,
        completed: false,
        text: action.text
      }].concat(_toConsumableArray(state));

    case _ActionTypes.DELETE_TODO:
      return state.filter(function (todo) {
        return todo.id !== action.id;
      });

    case _ActionTypes.EDIT_TODO:
      return state.map(function (todo) {
        return todo.id === action.id ? _extends({}, todo, { text: action.text }) : todo;
      });

    case _ActionTypes.COMPLETE_TODO:
      return state.map(function (todo) {
        return todo.id === action.id ? _extends({}, todo, { completed: !todo.completed }) : todo;
      });

    case _ActionTypes.COMPLETE_ALL:
      var areAllMarked = state.every(function (todo) {
        return todo.completed;
      });
      return state.map(function (todo) {
        return _extends({}, todo, {
          completed: !areAllMarked
        });
      });

    case _ActionTypes.CLEAR_COMPLETED:
      return state.filter(function (todo) {
        return todo.completed === false;
      });

    default:
      return state;
  }
}