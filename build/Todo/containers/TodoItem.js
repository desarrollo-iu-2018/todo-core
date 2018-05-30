'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var container = function container(T) {
  var _class, _temp2;

  return _temp2 = _class = function (_Component) {
    _inherits(TodoItem, _Component);

    function TodoItem() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, TodoItem);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        editing: false
      }, _this.handleDoubleClick = function () {
        _this.setState({ editing: true });
      }, _this.handleSave = function (id, text) {
        if (text.length === 0) {
          _this.props.deleteTodo(id);
        } else {
          _this.props.editTodo(id, text);
        }
        _this.setState({ editing: false });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TodoItem, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(T, _extends({}, this.props, this.state, {
          handleDoubleClick: this.handleDoubleClick,
          handleSave: this.handleSave
        }));
      }
    }]);

    return TodoItem;
  }(_react.Component), _class.propTypes = {
    todo: _propTypes2.default.object.isRequired,
    editTodo: _propTypes2.default.func.isRequired,
    deleteTodo: _propTypes2.default.func.isRequired,
    completeTodo: _propTypes2.default.func.isRequired
  }, _temp2;
};

exports.default = container;