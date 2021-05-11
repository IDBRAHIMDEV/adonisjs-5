'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Post = use('App/Models/Post');

var HomeController =
/*#__PURE__*/
function () {
  function HomeController() {
    _classCallCheck(this, HomeController);
  }

  _createClass(HomeController, [{
    key: "index",
    value: function index(_ref) {
      var view, request, posts;
      return regeneratorRuntime.async(function index$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              view = _ref.view, request = _ref.request;
              _context.next = 3;
              return regeneratorRuntime.awrap(Post.query().forRetreivePosts().paginate(request.input('page'), 2));

            case 3:
              posts = _context.sent;
              return _context.abrupt("return", view.render('posts/index', {
                posts: posts
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "own",
    value: function own(_ref2) {
      var view, request, auth, posts;
      return regeneratorRuntime.async(function own$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              view = _ref2.view, request = _ref2.request, auth = _ref2.auth;
              _context2.next = 3;
              return regeneratorRuntime.awrap(Post.query().forRetreivePosts().where('user_id', '=', auth.user.id).paginate(request.input('page'), 2));

            case 3:
              posts = _context2.sent;
              return _context2.abrupt("return", view.render('posts/index', {
                posts: posts
              }));

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    }
  }, {
    key: "unanswered",
    value: function unanswered(_ref3) {
      var view, request, posts;
      return regeneratorRuntime.async(function unanswered$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              view = _ref3.view, request = _ref3.request;
              _context3.next = 3;
              return regeneratorRuntime.awrap(Post.query().forRetreivePosts().doesntHave('replies').paginate(request.input('page'), 2));

            case 3:
              posts = _context3.sent;
              return _context3.abrupt("return", view.render('posts/index', {
                posts: posts
              }));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      });
    }
  }, {
    key: "show",
    value: function show(_ref4) {
      var view, params, post;
      return regeneratorRuntime.async(function show$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              view = _ref4.view, params = _ref4.params;
              _context4.next = 3;
              return regeneratorRuntime.awrap(Post.query().forRetreivePosts()["with"]('replies.user').where('slug', '=', params.slug).firstOrFail());

            case 3:
              post = _context4.sent;
              return _context4.abrupt("return", view.render('posts/show', {
                post: post.toJSON()
              }));

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      });
    }
  }, {
    key: "postsByTag",
    value: function postsByTag(_ref5) {
      var view, params, posts;
      return regeneratorRuntime.async(function postsByTag$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              view = _ref5.view, params = _ref5.params;
              _context5.next = 3;
              return regeneratorRuntime.awrap(Post.query()["with"]('tag')["with"]('user').whereHas('tag', function (query) {
                query.where('slug', '=', params.slug);
              }).whereNull('parent_id').fetch());

            case 3:
              posts = _context5.sent;
              return _context5.abrupt("return", view.render('posts/index', {
                posts: posts
              }));

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      });
    }
  }]);

  return HomeController;
}();

module.exports = HomeController;