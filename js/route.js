page('/', ArticleObj.checkLocal, control.viewArticle);
page('/about', control.viewAbout, gitControl.getRepo); //add api call and display
page('*', function() {
  console.error('Page Cannot Be Found.');
});
page();
