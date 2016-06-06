var articleContent = [];

function ArticleObj(art) {
  this.title = art.title;
  this.imgName = art.imgName;
  this.imgPath = 'Images/' + art.imgName + '.jpg';
  this.about = art.about;
  this.link = art.link;
  this.publishedOn = art.publishedOn;
  this.category = art.category;
  articleContent.push(this);
};

ArticleObj.prototype.contentDisplay = function () {
  var $section = $('.newArticle').clone();

  $section.find('h2').text(this.title).attr('category', this.category);
  $section.find('img').attr('src', this.imgPath);
  $section.find('p').html(this.about);
  $section.find('a').attr('href', this.link).text(this.title + ' Repository');
  $section.find('nav p').text('Published ' + this.publishedOn);

  $section.removeClass('newArticle');
  $section.addClass('articleContent');

  return $section;
};

articles.forEach(function(ele){
  var art = new ArticleObj(ele);
});

articleContent.forEach(function(ar) {
  $('#projects').append(ar.contentDisplay());
});
