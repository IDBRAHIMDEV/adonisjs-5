'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Response = require('@adonisjs/framework/src/Response');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */

/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/** @typedef {import('@adonisjs/framework/src/View')} View */


var Authenticated =
/*#__PURE__*/
function () {
  function Authenticated() {
    _classCallCheck(this, Authenticated);
  }

  _createClass(Authenticated, [{
    key: "handle",

    /**
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Function} next
     */
    value: function handle(_ref, next) {
      var request, response, auth, session;
      return regeneratorRuntime.async(function handle$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              request = _ref.request, response = _ref.response, auth = _ref.auth, session = _ref.session;
              _context.prev = 1;
              _context.next = 4;
              return regeneratorRuntime.awrap(auth.check());

            case 4:
              _context.next = 10;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](1);
              session.put('_intended', request.url());
              return _context.abrupt("return", response.route('auth.login'));

            case 10:
              _context.next = 12;
              return regeneratorRuntime.awrap(next());

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[1, 6]]);
    }
  }]);

  return Authenticated;
}();

module.exports = Authenticated;