// Constructor to Create Articles
// Jquery to Add Articles to the Page
// Separate JS page to hold Article Content

var articleContent = []; //Hold objects made form article.js content

function ArticleObj(art) {
  this.title = art.this;
  this.imgName = art.imgName;
  this.imgPath = '/__/_' + art.imgName + '__.jpg';
  this.about = art.about;
  this.link = art.link;
  articleContent.push(this);
};

// toHtml function -- prototype of ArticleObj
// grab article section and clone it
// find the different parts of the cloned section and plug in content

// .forEach create new ArticleObj objects and run them through toHtml method
