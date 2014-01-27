React Router
============

A simple Backbone.Router React mixin.

Sample:
  
    React.createClass({
      mixin: [Router],
      componendDidMount: function() {
        this.respondTo({
          '': this.fetchData,
          'features/:id': this.fetchFeature
        });
      },
      fetchData: function() {
        ...
      },
      fetchFeatures: function(id) {
        ...
      }
    });