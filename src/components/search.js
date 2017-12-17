angular.module('video-player')

  .component('search', {
    bindings: {
      result: '<',
      service: '<'
    },
    templateUrl: "src/templates/search.html"
  });
