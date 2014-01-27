React Router
============

A simple Backbone.Router React mixin.

Sample:
  
    React.createClass({
      mixin: [Router],
      componentDidMount: function() {
        this.respondTo({
          '': this.fetchData,
          'features/:id': this.fetchFeature
        });
      },
      fetchData: function() {
        ...
      },
      fetchFeature: function(id) {
        ...
      }
    });