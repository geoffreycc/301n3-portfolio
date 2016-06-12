var articleContent = [];

function ArticleObj(art) {
  this.title = art.title;
  this.imgName = art.imgName;
  this.imgPath = 'images/' + art.imgName + '.jpg';
  this.about = art.about;
  this.link = art.link;
  this.publishedOn = art.publishedOn;
  this.category = art.category;
  this.author = art.author;
  articleContent.push(this);
};

ArticleObj.prototype.contentDisplay = function () {
  var templateIndex = $('#blogArticle').html();
  var template = Handlebars.compile(templateIndex);
  return template(this);
};

$(document).ready(function() {
  articles.forEach(function(ele){
    var art = new ArticleObj(ele);
  });

  articleContent.forEach(function(ar) {
    $('#projects').append(ar.contentDisplay());
  });
});

// fix nav disappear when toggle off and resize

// this is jacobs solution

// $(window).resize(function() {
//  if (window.innerWidth > 640) {
//    $('#navBar').show(); just select nav
//  } else {
//    $('#navBar').hide();
//  };
// });

// check mobile nav display default, should be display none

// new version
$(window).resize(function() {
  if (window.innerWidth > 640) {
    $('nav').show();
  } else {
    $('nav').hide();
  };
});
