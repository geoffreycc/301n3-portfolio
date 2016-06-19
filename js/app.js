
function ArticleObj(art) {
  this.title = art.title;
  this.imgName = art.imgName;
  this.imgPath = 'images/' + art.imgName + '.jpg';
  this.about = art.about;
  this.link = art.link;
  this.publishedOn = art.publishedOn;
  this.category = art.category;
  this.author = art.author;
  ArticleObj.all.push(this);
};

ArticleObj.all = [];

ArticleObj.prototype.contentDisplay = function() {
  var templateIndex = $('#blogArticle').html();
  var template = Handlebars.compile(templateIndex);
  return template(this);
};

ArticleObj.prototype.setDates = function() {
  //Create method to make new dates
  //Organize articles by most recent dates.
};

ArticleObj.checkLocal = function() {
  if (localStorage.rawData) {
    rawData = JSON.parse(localStorage.rawData);
    console.log('rawData from the localStorage is ' + rawData);
    ArticleObj.loadArticles(rawData);
  } else {
    ArticleObj.getRawData();
    console.log('rawData gotten from .json file');
  }
};

ArticleObj.loadArticles = function(rawData) {
  rawData.map(function(ele) {
    console.log(ele);
    return new ArticleObj(ele);
  });
};

ArticleObj.getRawData = function() {
  $.getJSON('data/article.json', function(rawData) {
    ArticleObj.loadArticles(rawData);
    localStorage.rawData = JSON.stringify(rawData);
  });
};

// ArticleObj.getFromServer = function () {
//   $.ajax({
//     url: 'data/article.json',
//     method: 'HEAD'
//   })
//   .success(function(data, msg, xhr) {
//     console.log('data is ' + data);
//     console.log('msg is ' + msg);
//     var xhr = new XMLHttpRequest();
//     console.log('xhr is ' + xhr);
//     var eTag = xhr.getResponseHeader();
//     console.log(eTag);
//   });
// };
//
//
// articleDisplay.checkLatest = function() {
//   //getAjax head deal?
//   //Check to see if local storage is up to date.
// };

$(document).ready(function() {
  ArticleObj.checkLocal();
  ArticleObj.getFromServer();
  ArticleObj.all.forEach(function(ar) {
    $('#projects').append(ar.contentDisplay());
  });
});
