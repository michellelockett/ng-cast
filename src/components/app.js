angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {

      this.$onInit = () => {
        this.videos = window.exampleVideoData;
        this.currentVideo = this.videos[0];
        this.searchResults('Angular');
      };

      this.selectVideo = (index) => {
        this.currentVideo = this.videos[index];
      };

      this.result = data => {
        this.videos = data.data.items;
        this.currentVideo = data.data.items[0];
        this.nextPageToken = data.data.nextPageToken;
        this.query = data.config.params.q;
      };

      this.addVideos = data => {
        this.videos = this.videos.concat(data.items);
        this.nextPageToken = data.nextPageToken;
      }

      this.searchResults = query => {
        youTube.search(query, this.result);
      };

      this.loadMoreResults = () => {
        youTube.getMoreResults(this.nextPageToken, this.addVideos, this.query);
      }

      this.getIframeSrc = currentVideo => {
        var base = 'https://www.youtube.com/embed/';
        var id = currentVideo.id.videoId;
        return base + id;
      };
    }
  });











