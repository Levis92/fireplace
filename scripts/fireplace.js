const VIDEOS = ['HD-Fireplace-video.mp4']
const path = 'resources/';
var videoPlayer;
var video;
var videoIndex = 0;

document.addEventListener('DOMContentLoaded', e => {
  videoPlayer = document.getElementsByClassName('video')[0];
  video = videoPlayer.getElementsByTagName('source')[0];
  if (VIDEOS.length < 2) {
    var button = document.getElementsByClassName('fireplace-button')[0];
    button.parentNode.removeChild(button);
  }
});

function changeFireplace() {
  video.src = path + VIDEOS[++videoIndex%VIDEOS.length];
  videoPlayer.load();
  videoPlayer.play();
}
