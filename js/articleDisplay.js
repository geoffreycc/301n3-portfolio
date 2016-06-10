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
    $('article').hide();
    if ($authChoice) {
      $('article[data-author="' + $authChoice + '"]').fadeIn(500);
    } else {
      $('.articleContent').fadeIn(500);
    }
    $('#category-sort').val('');
  });
};

articleDisplay.categorySort = function() {
  $('#category-sort').on('change', function() {
    var $catChoice = $(this).val();
    $('article').hide();
    if ($catChoice) {
      $('article[data-category="' + $catChoice + '"]').fadeIn(500);
    } else {
      $('.articleContent').fadeIn(500);
    }
    $('#author-sort').val('');
  });
};

articleDisplay.topNavBar = function() {
//Show only articles or only about section on click
  $('.links').on('click', function(e) {
    e.preventDefault();
    console.log(this);
    // console.log($(this).children().attr('data-link'));
    var $link = $(this).attr('data-link');
    $('article').hide();
    $('.' + $link).fadeIn(500);
    console.log($(this)[0]);
    // console.log($link);
    // console.log($('.' + $link));
    if ($link === 'aboutSite') {
      $('.filterSelect').hide();
    } else {
      $('.filterSelect').fadeIn(500);
    }
  });
  $('header nav .links:first').click();
};

articleDisplay.teaserControl = function() {
//Change from partial to full view of article
};

articleDisplay.hamburgerControl = function() {
  $('.icon-menu').on('click', function() {
    $('nav').toggle();
  });
};

$(document).ready(function() {
  articleDisplay.populateFilters();
  articleDisplay.authorSort();
  articleDisplay.categorySort();
  articleDisplay.topNavBar();
  articleDisplay.teaserControl();
  articleDisplay.hamburgerControl();
});