(function(module) {

  var control = {};

  control.viewArticle = function() {
    $('article').hide();
    $('.filterSelect').show();
    $('.articleContent').fadeIn(500);
  };

  control.viewAbout = function() {
    $('article').hide();
    $('.filterSelect').hide();
    $('.aboutSite').fadeIn(500);
  };

  module.control = control;
})(window);
