(function(module) {

  var control = {};

  control.viewArticle = function() {
    console.log('viewArticle');
    $('article').hide();
    $('.articleContent').fadeIn(500);
  };

  control.viewAbout = function() {
    console.log('viewAbout');
    $('article').hide();
    $('.aboutSite').fadeIn(500);
  };

  module.control = control;
})(window);
