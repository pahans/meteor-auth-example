var previouslyLoggedIn = null;
// redirecting user to login page after logout
Tracker.autorun(function() {
  if(previouslyLoggedIn && !Meteor.userId()) {
    FlowRouter.go("/login");
  }
  previouslyLoggedIn = !!Meteor.userId();
});

// redirecting user to home page after successfull login
Accounts.onLogin(function() {
  var path = FlowRouter.current().path;
  if(path === "/login"){
    FlowRouter.go("/");
  }
});