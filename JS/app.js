
var articleContent = [];

function ArticleObj(art) {
  this.title = art.this;
  this.imgName = art.imgName;
  this.imgPath = '/__/_' + art.imgName + '__.jpg';
  this.about = art.about;
  this.link = art.link;
  articleContent.push(this);
};

ArticleObj.prototype.contentDisplay = function () {
  var $section = $('newArticle').clone();

  $section.find('h2').text(this.title);
  $section.find('img').attr('src', this.imgPath);
  $section.find('p').html(this.about);
  $section.find('a').attr('href', this.link);

  $section.removeClass('newArticle');

  return $section;
};

articles.forEach(function(ele){
  var art = new ArticleObj(ele);
  console.log(art);
});

articleContent.forEach(function(ar) {
  $('projects').append(ar.contentDisplay());
});
// toHtml function -- prototype of ArticleObj
// grab article section and clone it
// find the different parts of the cloned section and plug in content

// .forEach create new ArticleObj objects and run them through toHtml method
