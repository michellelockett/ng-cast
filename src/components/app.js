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
        this.videos = data;
        this.currentVideo = data[0];
      };

      this.searchResults = query => {
        youTube.search(query, this.result);
      };

      this.getIframeSrc = currentVideo => {
        var base = 'https://www.youtube.com/embed/';
        var id = currentVideo.id.videoId;
        return base + id;
      };
    }
  });











