// gitHubKey ---> variable name for api key

var gitControl = {};

gitControl.repos = [];

gitControl.getRepo = function(callback) {
  $.ajax({
    url: 'https://api.github.com/users/geoffreycc/repos', //  Change url to match the one mentioned in class.
    type: 'GET',
    header: {'Authorization': 'token ' + gitHubKey}, // Remove this header? Call on something else here?
    success: function(data) {
      gitControl.repos = data;
      callback(); //Do something with the array of repo objects that are returned.
    }
  });
};
