'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TODO_FILTERS;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TodoFilters = require('../constants/TodoFilters');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TODO_FILTERS = (_TODO_FILTERS = {}, _defineProperty(_TODO_FILTERS, _TodoFilters.SHOW_ALL, function () {
  return true;
}), _defineProperty(_TODO_FILTERS, _TodoFilters.SHOW_ACTIVE, function (todo) {
  return !todo.completed;
}), _defineProperty(_TODO_FILTERS, _TodoFilters.SHOW_COMPLETED, function (todo) {
  return todo.completed;
}), _TODO_FILTERS);

var container = function container(T) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(MainSection, _Component);

    function MainSection() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, MainSection);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MainSection.__proto__ || Object.getPrototypeOf(MainSection)).call.apply(_ref, [this].concat(args))), _this), _this.state = { filter: _TodoFilters.SHOW_ALL }, _this.handleClearCompleted = function () {
        _this.props.actions.clearCompleted();
      }, _this.handleShow = function (filter) {
        _this.setState({ filter: filter });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(MainSection, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            todos = _props.todos,
            actions = _props.actions;
        var filter = this.state.filter;


        var filteredTodos = todos.filter(TODO_FILTERS[filter]);
        var completedCount = todos.reduce(function (count, todo) {
          return todo.completed ? count + 1 : count;
        }, 0);

        return _react2.default.createElement(T, {
          todos: todos,
          actions: actions,
          filteredTodos: filteredTodos,
          completedCount: completedCount,
          filter: filter,
          handleShow: this.handleShow,
          handleClearCompleted: this.handleClearCompleted
        });
      }
    }]);

    return MainSection;
  }(_react.Component), _class.propTypes = {
    todos: _propTypes2.default.array.isRequired,
    actions: _propTypes2.default.object.isRequired
  }, _temp2;
};

exports.default = container;