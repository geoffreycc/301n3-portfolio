var gitControl = {};

gitControl.repos = [];

gitControl.getRepo = function(ctx, next) {
  $.ajax({
    url: 'https://api.github.com/users/geoffreycc/repos',
    type: 'GET',
    success: function(data) {
      gitControl.repos = data;
      console.log(gitControl.repos);
      ctx.repos = gitControl.repos;
    }
  }).done(function() {
    next();
  });
};
