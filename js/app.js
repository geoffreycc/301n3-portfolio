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

ArticleObj.prototype.setDates = function () {
  //Create method to make new dates
};

//Create a method to sort articles by date so that the most recent is presented first.

$(document).ready(function() {
  articles.forEach(function(ele){
    var art = new ArticleObj(ele);
  });

  articleContent.forEach(function(ar) {
    $('#projects').append(ar.contentDisplay());
  });
});

$(window).resize(function() {
  if (window.innerWidth > 640) {
    $('#topNav').show();
  } else {
    $('#topNav').hide();
  };
});
