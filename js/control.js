(function(module) {

  var control = {};

  control.viewArticle = function() {
    $('article').hide();
    $('.articleContent').fadeIn(500);
  };

  control.viewAbout = function() {
    $('article').hide();
    $('.aboutSite').fadeIn(500);
  };

  module.control = control;
})(window);
