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
