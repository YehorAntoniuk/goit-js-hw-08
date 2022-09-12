import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTimeUpdate, 1000));

function saveTimeUpdate(data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

let saveTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(saveTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
