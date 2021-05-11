'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var slugify = use('slugify');

var Slugify =
/*#__PURE__*/
function () {
  function Slugify() {
    _classCallCheck(this, Slugify);
  }

  _createClass(Slugify, [{
    key: "register",
    value: function register(Model) {
      Model.addHook('afterCreate', function (modeInstance) {
        if (modeInstance.title) {
          var slug = slugify(modeInstance.title, {
            lower: true
          });
          modeInstance.slug = "".concat(slug, "-").concat(modeInstance.id);
          modeInstance.save();
        }
      });
    }
  }]);

  return Slugify;
}();

module.exports = Slugify;