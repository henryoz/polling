Template.body.helpers({
  polls: function() {
    return Polls.find();
  }
});

// adds an index to each item
// this is a useful snippet for indexing as Meteor can't do it out of the box
UI.registerHelper('indexedArray', function(context, options) {
  if (context) {
    return context.map(function(item, index) {
      item._index = index;
      return item;
    });
  }
});