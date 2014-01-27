/** @jsx React.DOM */
define( function( require ) {
  'use strict';
  
  var Backbone = require('backbone');

  var router, routeId = 1;
  var started = false;

  /**
   * Simple backbone router mixin.
   * @type {Object}
   * @implements {respondTo}
   */
  var RouterMixin = {
    respondTo: function(routes, root, pushState) {
      var self = this;

      if (!router) {
        router = new Backbone.Router();
      }

      for (var route in routes) {
        var name = 'route' + routeId++;
        router.route(route, name, routes[route].bind(self));
      }

      if (!started) {
        pushState = !!pushState;
        Backbone.history.start({ root: root, pushState: pushState });
        started = true;
      }
    }
  };

  return RouterMixin;
} );