var app = chrome.extension.getBackgroundPage() 
var play_list_string
var curent_play
var curent_play_label = document.getElementById("curent_play_label")

document.addEventListener("DOMContentLoaded", () => { refreshPlayLabel() })

function refreshPlayLabel(){
    setTimeout(function(){ 
        play_list_string = app.play_list_string;
        curent_play = app.player.getPlaylistIndex();
        curent_play_label.innerText = play_list_string[curent_play];
    }, 1000);
}