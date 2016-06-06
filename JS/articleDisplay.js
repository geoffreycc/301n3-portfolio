var articleDisplay = {};

articleDisplay.populateFilters = function() {
  $('#projects > article').each(function() {
    if ($(this).hasClass('articleContent')) {
      var optionAuthContent = ($(this).attr('data-author'));
      var newAuthOptionTag = '<option value="' + optionAuthContent + '">' + optionAuthContent + '</option>';
      if ($('#author-sort option[value="' + optionAuthContent + '"]').length === 0) {
        $('#author-sort').append(newAuthOptionTag);
      }

      var optionCatContent = ($(this).attr('data-category'));
      var newCatOptionTag = '<option value="' + optionCatContent + '">' + optionCatContent + '</option>';
      if ($('#category-sort option[value="' + optionCatContent + '"]').length === 0) {
        $('#category-sort').append(newCatOptionTag);
      }
    }
  });
};

articleDisplay.authorSort = function() {
  $('#author-sort').on('change', function() {
    var $authChoice = $(this).val();
    console.log($authChoice);
    $('article').hide();
    if ($authChoice) {
      $('article[data-author="' + $authChoice + '"]').fadeIn(500);
    } else {
      $('.articleContent').fadeIn(500);
    }
    $('#category-sort').val('');
  });
//Show only selected author's articles.
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
  articleDisplay.populateFilters();
  articleDisplay.authorSort();
//Call methods
});
