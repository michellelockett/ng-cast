angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<',
      getSrc: '<'
    },
    templateUrl: "src/templates/videoPlayer.html"
  });


