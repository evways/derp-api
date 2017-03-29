'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Customer = function (_CrudApi) {
  (0, _inherits3.default)(Customer, _CrudApi);

  function Customer() {
    var _ret2;

    (0, _classCallCheck3.default)(this, Customer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Customer.__proto__ || (0, _getPrototypeOf2.default)(Customer)).call(this, 'customer'));

    if (Customer.prototype.singleton) {
      var _ret;

      return _ret = Customer.prototype.singleton, (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
    Customer.prototype.singleton = _this;

    return _ret2 = _this, (0, _possibleConstructorReturn3.default)(_this, _ret2);
  }

  return Customer;
}(_base2.default);

exports.default = Customer;