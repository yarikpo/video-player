document.addEventListener("DOMContentLoaded", function() { startplayer(); }, false);


const player = document.createElement('div');
player.classList.add('player');

const video = document.createElement('video');
video.setAttribute('id', 'video');
const source = document.createElement('source');
source.setAttribute('src', 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4');
video.appendChild(source);

player.appendChild(video);

const player_controls = document.createElement('div');
player_controls.setAttribute('id', 'player_controls');

const play_btn = document.createElement('button');
play_btn.innerHTML = 'Play';
play_btn.onclick = play_vid();

play_btn.addEventListener("click", handlePlayButton, false);

player_controls.appendChild(play_btn);






// const pause_btn = document.createElement('button');
// pause_btn.innerHTML = 'Pause';
// pause_btn.onclick = pause_vid();
// player_controls.appendChild(pause_btn);

// const stop_btn = document.createElement('button');
// stop_btn.innerHTML = 'Stop';
// stop_btn.onclick = stop_vid();
// player_controls.appendChild(stop_btn);

player.appendChild(player_controls);

function startplayer() {
    video.controls = false;
}

async function play_vid() {
    try {
        await video.play();
        play_btn.classList.add("playing");
    } catch(err) {
        play_btn.classList.remove("playing");
    }
}

function handlePlayButton() {
    if (video.paused) {
      play_vid();
    } else {
      video.pause();
      play_btn.classList.remove("playing");
    }
  }

// function pause_vid() {
//     video.pause();
// }
// function stop_vid() {
//     video.pause();
//     video.currentTime = 0;
// }

export { player };