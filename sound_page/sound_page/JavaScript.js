var song = document.getElementById("song");
var icon = document.getElementById("icon");
icon.onclick = function () {
    if (song.paused) {
        song.play();
        icon.src = "imgs/pause.png";
    }
    else {
        song.pause();
        icon.src = "imgs/play.png";
    }
}