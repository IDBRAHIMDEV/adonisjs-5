"use strict";

var _require = require('@adonisjs/ignitor'),
    hooks = _require.hooks;

var pluralize = require('pluralize');

hooks.after.providersBooted(function () {
  var View = use('View');
  var Tag = use('App/Models/Tag');
  Tag.all().then(function (tags) {
    View.global('tags', tags);
  })["catch"](function () {});
  View.global('paginationArray', function (nbPage) {
    return Array.from(new Array(nbPage), function (value, index) {
      return index + 1;
    });
  });
  View.global('pluralize', function (singular, length) {
    return pluralize(singular, length);
  });
});