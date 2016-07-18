var gitControl = {};

gitControl.repos = [];

gitControl.getRepo = function() {
  $.ajax({
    url: 'https://api.github.com/user/repos', //  Change url to match the one mentioned in class.  user/repos + api key
    type: 'GET',
    headers: {'Authorization': 'token ' + GITHUBKEY}, // Remove this header? Call on something else here? process.env.GITHUBKEY
    success: function(data) {
      gitControl.repos = data;
      // next(); //Do something with the array of repo objects that are returned.
    }
  });
};
// gitHubKey <--token name <--
