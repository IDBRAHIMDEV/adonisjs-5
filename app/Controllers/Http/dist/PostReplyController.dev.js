'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _use = use('Validator'),
    validateAll = _use.validateAll;

var Post = use('App/Models/Post');

var PostReplyController =
/*#__PURE__*/
function () {
  function PostReplyController() {
    _classCallCheck(this, PostReplyController);
  }

  _createClass(PostReplyController, [{
    key: "store",
    value: function store(_ref) {
      var request, response, session, auth, params, post, rules, validation, _request$all, content, reply;

      return regeneratorRuntime.async(function store$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              request = _ref.request, response = _ref.response, session = _ref.session, auth = _ref.auth, params = _ref.params;
              _context.next = 3;
              return regeneratorRuntime.awrap(Post.query().where('slug', '=', params.slug).firstOrFail());

            case 3:
              post = _context.sent;
              rules = {
                content: 'required|min:5'
              };
              _context.next = 7;
              return regeneratorRuntime.awrap(validateAll(request.all(), rules));

            case 7:
              validation = _context.sent;

              if (!validation.fails()) {
                _context.next = 11;
                break;
              }

              session.withErrors(validation.messages()).flashAll();
              return _context.abrupt("return", response.redirect('back'));

            case 11:
              _request$all = request.all(), content = _request$all.content;
              reply = new Post();
              reply.fill({
                content: content,
                parent_id: post.id,
                user_id: auth.user.id
              });
              _context.next = 16;
              return regeneratorRuntime.awrap(reply.save());

            case 16:
              return _context.abrupt("return", response.redirect('back'));

            case 17:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }]);

  return PostReplyController;
}();

module.exports = PostReplyController;