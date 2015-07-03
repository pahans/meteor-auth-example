FlowRouter.route('/', {
  name: "home",
  action: function() {
    FlowLayout.render("layout", {view: "home"});
  }
});

FlowRouter.route('/post/:id', {
  name: "post",
  action: function(params) {
    FlowLayout.render("layout", {view: "post"});
  }
});

FlowRouter.route('/login', {
  action: function() {
    FlowLayout.render("layout", {view: "login"})
  }
});

FlowRouter.route('/logout', {
  action: function() {
    Meteor.logout();
    FlowRouter.redirect("/");
  }
});
