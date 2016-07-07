// gitHubKey ---> variable name for api key

var gitControl = {};

gitControl.repos = [];

gitControl.getRepo = function(callback) {
  $.ajax({
    url: 'https://api.github.com/users/geoffreycc/repos',
    type: 'GET',
    header: {'Authorization': 'token ' + gitHubKey},
    success: function(data) {
      gitControl.repos = data;
      callback(); //Do something with the array of repo objects that are returned.
    }
  });
};
