var articleDisplay = {};

articleDisplay.populateFilters = function() {
  $('#projects > article').each(function() {
    if ($(this).hasClass('articleContent')) {
      var optionAuthContent = ($(this).find('h2').attr('data-author'));
      var newAuthOptionTag = '<option value="' + optionAuthContent + '">' + optionAuthContent + '</option>';
      if ($('#author-sort option[value="' + optionAuthContent + '"]').length === 0) {
        $('#author-sort').append(newAuthOptionTag);
      }

      var optionCatContent = ($(this).find('h2').attr('data-category'));
      console.log(optionCatContent);
      var newCatOptionTag = '<option value="' + optionCatContent + '">' + optionCatContent + '</option>';
      console.log(newCatOptionTag);
      if ($('#category-sort option[value="' + optionCatContent + '"]').length === 0) {
        console.log(($('#category-sort option[value="' + optionCatContent + '"]').length === 0));
        console.log('okay');
        $('#category-sort').append(newCatOptionTag);
      }
    }
  });
};
//         }
//
//       // $('#author-sort').append($('.autSort').clone().text($(this).find($('nav p:first-child')).text())); //This is wonky
//       // $newAuthor.text($(this).find)('nav p:first-child').text();
//       // $newAuthor.removeClass('autSort');
//
//   }
// });
// }}

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
