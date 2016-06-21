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

  // ArticleObj.getFromServer = function () {
  // };
  //
  // articleDisplay.checkLatest = function() {
  // };

  ArticleObj.newTest = function() {
    ArticleObj.all.reduce(function(a, b) { //Use returned values to render links to completed projects to page on click
      if (b.completed === 'true') {
        a.push({
          title: b.title,
          link: b.link,
        });
      } console.log(a);
    } , []);
  };

  module.ArticleObj = ArticleObj;

  $(document).ready(function() {
    ArticleObj.checkLocal();
    articleDisplay.populateFilters();//Does not work when there is nothing in localStorage on page load.
    articleDisplay.authorSort();
    articleDisplay.categorySort();
    articleDisplay.topNavBar();
    articleDisplay.teaserControl();
    articleDisplay.hamburgerControl(); //Move into html script tag?
    ArticleObj.newTest();
  });

})(window);
