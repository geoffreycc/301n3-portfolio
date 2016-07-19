var gitControl = {};

gitControl.repos = [];

gitControl.getRepo = function(ctx, next) {
  $.ajax({
    url: 'https://api.github.com/users/geoffreycc/repos', //  Change url to match the one mentioned in class.  user/repos + api key
    type: 'GET',
    // headers: {Authorization: 'token ' + process.env.GITHUBKEY}, // Remove this header? Call on something else here? process.env.GITHUBKEY
    success: function(data) {
      gitControl.repos = data;
      console.log(gitControl.repos);
    }
  });
  next(); //Do something with the array of repo objects that are returned.
};
// gitHubKey <--token name <--
// gitControl.displayRepo = function() {
//   console.log('Start of displayRepo');
//   gitControl.repos.forEach(function(repo) {
//     var repoLink = $('a').text(repo.name).attr('href', repo.html_link);
//     var repoListItem = $('li').append(repoLink);
//     $('#repoLinks').append(repoListItem);
//   });
//   console.log('end of displayRepo');
// };
