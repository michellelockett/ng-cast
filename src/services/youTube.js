angular.module('video-player')
  .service('youTube', function($http){
    this.search = function(q,cb) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: window.YOUTUBE_API_KEY,
          part: 'snippet',
          q: q,
          maxResults: 5,
          type: 'video',
          videoEmbeddable: 'true'
        },
      })
        .then(
          function(response){
            console.log(response);
            cb(response);

          }
        );
    };

    this.getMoreResults = function(nextPageToken, callback, query) {
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: window.YOUTUBE_API_KEY,
          part: 'snippet',
          q: query,
          maxResults: 5,
          type: 'video',
          videoEmbeddable: 'true',
          pageToken: nextPageToken
        },
      })
        .then(
          function(response){
            console.log(response);
            callback(response.data);

          }
        );
    }
  });


