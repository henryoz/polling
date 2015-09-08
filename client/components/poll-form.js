Template.pollForm.events({

//  handle the form submission event
  'submit form': function(e) {

    if (e.target.question.value === '') {
      console.log('Please add a title.');
      //NEED TO ALSO CHECK FOR EMPTY CHOICES
      return;
    }

  //  stop the form from submitting
    event.preventDefault();

  //  get the data from the form
    var newPoll = {
      question: e.target.question.value,
      choices: [
        { text: e.target.choice1.value, votes: 0},
        { text: e.target.choice2.value, votes: 0},
        { text: e.target.choice3.value, votes: 0}
      ]
    };

  //  create the new poll
    Polls.insert(newPoll);
  }
  });