// attach events to the poll template
Template.poll.events({

// event to handle clicking a choice
  'click .vote': function (e) {

    e.preventDefault();

    //  get the parent (poll) id
    var pollID = $(e.currentTarget).parent('.poll').data('id');
    var voteID = $(e.currentTarget).data('id');

    //  create the incrementing object so that we can add to the corresponding vote
    var voteString = 'choices.' + voteID + '.votes';
    var action = {};
    action[voteString] = 1;

    //increment the number of votes for this choice
    Polls.update(
      {_id: pollID},
      {$inc: action}
    );
  }
});