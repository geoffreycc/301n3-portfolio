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
    var repoText = Repotemplate(this);
    $('#repoLinks').append(repoText);
  };

  control.renderRepos = function(ctx) {
    var repoSource = $('#repoDetail').html();
    var repoTemplate = Handlebars.compile(repoSource);
    var repoText = repoTemplate(ctx.repos);
    $('#repoLinks').append(repoText);
  };

  module.control = control;
})(window);
