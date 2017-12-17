angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      this.onClick = (index) => {
        this.currentVideo = this.videos[index];
        console.log('I was clicked!', index);
      };
      this.videos = window.exampleVideoData;
      this.currentVideo = this.videos[0];
      this.getIframeSrc = function(currentVideo) {
        var base = 'https://www.youtube.com/embed/';
        var id = currentVideo.id.videoId;
        return base + id;
      };
      this.result = function() {
        console.log('we made it!');
      }
      this.search = youTube.search;
    }
  });











