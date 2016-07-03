(function(module) {

  var control = {};

  contol.viewArticle = function() {
    $('article').hide();
    $('.articleContent').fadeIn(500);
  };

  control.viewAbout = function() {
    $('article').hide();
    $('.aboutSite').fadeIn(500);
  };

  module.control = control;
})(window);
