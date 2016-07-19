page('/', ArticleObj.checkLocal, control.viewArticle);
page('/about', control.viewAbout, gitControl.getRepo, control.displayRepoData);
page('*', function() {
  console.error('Page Cannot Be Found.');
});
page();
