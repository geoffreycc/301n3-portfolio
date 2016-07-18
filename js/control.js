(function(module) {

  var control = {};

  control.viewArticle = function() {
    $('article').hide();
    $('.filterSelect').show();
    $('.articleContent').fadeIn(500);
  };

  control.viewAbout = function(next) {
    $('article').hide();
    $('.filterSelect').hide();
    $('.aboutSite').fadeIn(500);
    // next();
  };

  control.displayRepoData = function() {
    // some handlebars stuff
    var repoTem = $('#repoDetail').html();
    var Repotemplate = Handlebars.compile(repoTem);
    return template(this);
  };

  module.control = control;
})(window);
