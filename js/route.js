page('/', ArticleObj.checkLocal, control.viewArticle);
page('/about', control.viewAbout, gitControl.getRepo, control.renderRepos);
page('*', function() {
  console.error('Page Cannot Be Found.');
});
page();
