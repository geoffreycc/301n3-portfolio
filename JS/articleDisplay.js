var articleDisplay = {};

articleDisplay.populateFilters = function() {
  var $newAuthor = $('.autSort').clone();
  $('#projects > article').each(function() {
    if($(this).hasClass('articleContent')) {
      var newOption = '<option>' + $(this).find('h2').attr('data-author') + '</option>';
      $('#author-sort').append(newOption);
      // $('#author-sort').append($('.autSort').clone().text($(this).find($('nav p:first-child')).text())); //This is wonky
      // $newAuthor.text($(this).find)('nav p:first-child').text();
      // $newAuthor.removeClass('autSort');
    };
  });
};

articleDisplay.authorSort = function() {
//Show only selected author's articles.
  $('#author-sort');
};

articleDisplay.categorySort = function() {
//Show only selected category artiles
  $('#category-sort');
};

articleDisplay.topNavBar = function() {
//Show only articles or only about section on click
  $('header nav');
};

articleDisplay.teaserControl = function() {
//Change from partial to full view of article
};

$(document).ready(function() {
//Call methods
});
