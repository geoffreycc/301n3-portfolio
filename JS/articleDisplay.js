var articleDisplay = {};

articleDisplay.populateFilters = function() {
  $('#projects > article').each(function() {
    if ($(this).hasClass('articleContent')) {
      // var $newOption = $('#author-sort :first-child').clone();
      // ($newOption).text($(this).find('h2').attr('data-author'));
      var optionContent = ($(this).find('h2').attr('data-author'));
      var newOptionTag = '<option value="' + optionContent + '">' + optionContent + '</option>';
      console.log(newOptionTag);
      if ($('#author-sort option[value="' + optionContent + '"]').length === 0) {
        console.log('Okay');
        $('#author-sort').append(newOptionTag);
      }
      // if (!$('#author-sort option:contains(' + ($newOption).text() + ')')) {
      // // '[value ="' + $newOption + '"]').length < 1) {
      //   $('#author-sort').append($newOption);
      // }
      // '<option>' + $(this).find('h2').attr('data-author') + '</option>'; from above line
      // $('#author-sort option').each(function() {
      //.length === 0
      // });
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
