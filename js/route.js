page('/', ArticleObj.checkLocal, control.viewArticle);
page('/about', control.viewAbout);
page('*', function() {
  console.error('Page Cannot Be Found.');
});
page();
