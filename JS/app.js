// Constructor to Create Articles
// Jquery to Add Articles to the Page
// Separate JS page to hold Article Content

var articleContent = []; //Hold objects made form article.js content

function ArticleObj(art) {
  this.that = art.this;
  articleContent.push(this);
};

// toHtml function -- prototype of ArticleObj
// grab article section and clone it
// find the different parts of the cloned section and plug in content

// .forEach create new ArticleObj objects and run them through toHtml method
