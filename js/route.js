page('/', control.viewArticle);
page('/aboutSite', control.viewAbout);
page('*', function() {
  console.error('Page Cannot Be Found.');
});
page();
