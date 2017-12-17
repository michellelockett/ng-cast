angular.module('video-player')
  .service('youTube', function($http){
    this.search = function(q,cb) {
      console.log("trying!");
      var url = 'https://www.googleapis.com/youtube/v3/search';
      var config = {
          key: window.YOUTUBE_API_KEY,
          q: q,
          maxResults: 5,
          part: 'snippet',
          type: 'video',
          videoEmbeddable:'true'
      }
      return $http.get(url, config)
        .then(
          function(response){
            cb(response);
          }
        )
    }
});
