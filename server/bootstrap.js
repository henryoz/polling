//// run when the meteor app is started
//Meteor.startup(function() {
//
////  if there are no polls available, create the sample data
//  if (Polls.find().count() === 0) {
//    //  create the sample polls
//    var samplePolls = [
//      {
//        question: 'Is Meteor awesome?',
//        choices: [
//          {text: 'Of course!', votes: 0},
//          {text: 'It\'s OK', votes: 0},
//          {text: 'I hate it!', votes: 0}
//        ]
//      },
//      {
//        question: 'Where shall we go for lunch today?',
//        choices: [
//          {text: 'Chomp', votes: 0},
//          {text: 'Spitfire', votes: 0},
//          {text: 'Turtle Bay', votes: 0}
//        ]
//      }
//    ];
//
//  //  loop over each sample poll and persist it in the db
//    _.each(samplePolls, function(poll) {
//      Polls.insert(poll);
//    });
//  }
//});