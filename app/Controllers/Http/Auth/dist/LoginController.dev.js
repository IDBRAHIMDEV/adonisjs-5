'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _use = use('Validator'),
    validateAll = _use.validateAll;

var LoginController =
/*#__PURE__*/
function () {
  function LoginController() {
    _classCallCheck(this, LoginController);
  }

  _createClass(LoginController, [{
    key: "index",
    value: function index(_ref) {
      var view = _ref.view;
      return view.render('auth/login');
    }
  }, {
    key: "login",
    value: function login(_ref2) {
      var request, response, session, auth, rules, validation, _request$all, email, username, password, intended;

      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              request = _ref2.request, response = _ref2.response, session = _ref2.session, auth = _ref2.auth;
              rules = {
                email: 'required|email',
                password: 'required|min:5'
              };
              _context.next = 4;
              return regeneratorRuntime.awrap(validateAll(request.all(), rules));

            case 4:
              validation = _context.sent;

              if (!validation.fails()) {
                _context.next = 8;
                break;
              }

              session.withErrors(validation.messages()).flashAll();
              return _context.abrupt("return", response.redirect('back'));

            case 8:
              _request$all = request.all(), email = _request$all.email, username = _request$all.username, password = _request$all.password;
              _context.next = 11;
              return regeneratorRuntime.awrap(auth.attempt(email, password));

            case 11:
              if (!session.get('_intended', false)) {
                _context.next = 15;
                break;
              }

              intended = session.get('_intended');
              session.forget('_intended');
              return _context.abrupt("return", response.redirect(intended));

            case 15:
              return _context.abrupt("return", response.route('home'));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "logout",
    value: function logout(_ref3) {
      var auth, response;
      return regeneratorRuntime.async(function logout$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              auth = _ref3.auth, response = _ref3.response;
              _context2.next = 3;
              return regeneratorRuntime.awrap(auth.logout());

            case 3:
              return _context2.abrupt("return", response.route('home'));

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }]);

  return LoginController;
}();

module.exports = LoginController;