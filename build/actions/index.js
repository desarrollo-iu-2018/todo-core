'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearCompleted = exports.completeAll = exports.completeTodo = exports.editTodo = exports.deleteTodo = exports.addTodo = undefined;

var _ActionTypes = require('../constants/ActionTypes');

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var addTodo = exports.addTodo = function addTodo(text) {
  return { type: types.ADD_TODO, text: text };
};
var deleteTodo = exports.deleteTodo = function deleteTodo(id) {
  return { type: types.DELETE_TODO, id: id };
};
var editTodo = exports.editTodo = function editTodo(id, text) {
  return { type: types.EDIT_TODO, id: id, text: text };
};
var completeTodo = exports.completeTodo = function completeTodo(id) {
  return { type: types.COMPLETE_TODO, id: id };
};
var completeAll = exports.completeAll = function completeAll() {
  return { type: types.COMPLETE_ALL };
};
var clearCompleted = exports.clearCompleted = function clearCompleted() {
  return { type: types.CLEAR_COMPLETED };
};