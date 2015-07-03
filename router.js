FlowRouter.route('/', {
  name: "home",
  action: function() {
    FlowLayout.render("layout", {type: "home"});
  }
});

FlowRouter.route('/post/:id', {
  name: "post",
  action: function(params) {
    FlowLayout.render("layout", {type: "post"});
  }
});

FlowRouter.route('/login', {
  action: function() {
    FlowLayout.render("layout", {type: "login"})
  }
});

FlowRouter.route('/logout', {
  action: function() {
    Meteor.logout();
    FlowRouter.redirect("/");
  }
});
