
// page('/', control.viewArticle);
page('/', ArticleObj.checkLocal, control.viewArticle); // testing
page('/about', control.viewAbout);
page('*', function() {
  console.error('Page Cannot Be Found.');
});
page();

// ArticleObj.checkLocal();
// articleDisplay.authorSort();
// articleDisplay.categorySort();
// articleDisplay.hamburgerControl();
