(function(module) {
  function ArticleObj(art) {
    this.title = art.title;
    this.imgName = art.imgName;
    this.imgPath = 'images/' + art.imgName + '.jpg';
    this.about = art.about;
    this.link = art.link;
    this.publishedOn = new Date(art.publishedOn);
    this.category = art.category;
    this.author = art.author;
    this.completed = art.completed;
    ArticleObj.all.push(this);
  };

  ArticleObj.all = [];

  ArticleObj.setDates = function(arr) {
    arr.sort(function(a, b) {
      return b.publishedOn - a.publishedOn;
    });
  };

  ArticleObj.prototype.contentDisplay = function() {
    var templateIndex = $('#blogArticle').html();
    var template = Handlebars.compile(templateIndex);
    return template(this);
  };

  ArticleObj.checkLocal = function() {
    if (localStorage.gCoxRawData) {
      gCoxRawData = JSON.parse(localStorage.gCoxRawData);
      ArticleObj.loadArticles(gCoxRawData);
    } else {
      ArticleObj.getRawData();
    }
  };

  ArticleObj.renderProject = function() {
    ArticleObj.setDates(ArticleObj.all);
    ArticleObj.all.forEach(function(ar) {
      $('#projects').append(ar.contentDisplay());
    });
    articleDisplay.populateFilters();
  };

  ArticleObj.loadArticles = function(gCoxRawData) {
    gCoxRawData.map(function(ele) {
      return new ArticleObj(ele);
    });
    ArticleObj.renderProject();
  };

  ArticleObj.getRawData = function() {
    $.getJSON('data/article.json', function(gCoxRawData) {
      localStorage.gCoxRawData = JSON.stringify(gCoxRawData);
      ArticleObj.loadArticles(gCoxRawData);
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
