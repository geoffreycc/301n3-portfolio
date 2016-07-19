(function(module) {

  var control = {};

  control.viewArticle = function() {
    $('article').hide();
    $('.filterSelect').show();
    $('.articleContent').fadeIn(500);
  };

  control.viewAbout = function(ctx, next) {
    $('article').hide();
    $('.filterSelect').hide();
    $('.aboutSite').fadeIn(500);
    next();
  };

  control.displayRepoData = function() {
    console.log('some handlebars stuff');
    var repoTem = $('#repoDetail').html();
    var Repotemplate = Handlebars.compile(repoTem);
    var repoText = Repotemplate(gitControl.repos);
    $('#repoLinks').append(repoText);
  };

  // control.renderRepos = function() {
  //   gitControl.repos.forEach(function(repo) {
  //     control.displayRepoData(repo);
  //   });
  // };

  module.control = control;
})(window);
