(function(module) {
  function ArticleObj(art) {
    this.title = art.title;
    this.imgName = art.imgName;
    this.imgPath = 'images/' + art.imgName + '.jpg';
    this.about = art.about;
    this.link = art.link;
    this.publishedOn = art.publishedOn;
    this.category = art.category;
    this.author = art.author;
    this.completed = art.completed;
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
      ArticleObj.loadArticles(rawData);
    } else {
      ArticleObj.getRawData();
    }
  };

  ArticleObj.renderProject = function() {
    ArticleObj.all.forEach(function(ar) {
      $('#projects').append(ar.contentDisplay());
    });
    articleDisplay.populateFilters();
  };

  ArticleObj.loadArticles = function(rawData) {
    rawData.map(function(ele) {
      return new ArticleObj(ele);
    });
    ArticleObj.renderProject();
  };

  ArticleObj.getRawData = function() {
    $.getJSON('data/article.json', function(rawData) {
      localStorage.rawData = JSON.stringify(rawData);
      ArticleObj.loadArticles(rawData);
    });
  };

  ArticleObj.reduceTest = function() {
    ArticleObj.linkArr = ArticleObj.all.reduce(function(a, b){
      if (b.completed === 'true') {
        a.push({
          link: '<li><a href="' + b.link + '" >' + b.title + '</a></li>',
        });
      } return a;
    }, []);
  };

  ArticleObj.newTest = function() {
    ArticleObj.all.map(function(article) {
      return {
        link: '<a href="' + article.link + '" >' + article.title + '</a>',
        complete: article.completed
      };
    }).filter(function(article) {
      if (article.complete === 'true') {
        return article;
      } else {
        console.log(article);
      }
    });
  };

  module.ArticleObj = ArticleObj;

  $(document).ready(function() {
    ArticleObj.checkLocal();
    articleDisplay.authorSort();
    articleDisplay.categorySort();
    // articleDisplay.topNavBar();
    // articleDisplay.teaserControl();
    articleDisplay.hamburgerControl();
  });
})(window);
