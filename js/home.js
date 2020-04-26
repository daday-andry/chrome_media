var play_list_string
var curent_play
$(document).ready(function(){
    refreshPlayLabel();
})

function refreshPlayLabel(){
    setTimeout(function(){ 
        play_list_string = chrome.extension.getBackgroundPage().play_list_string;
        curent_play = chrome.extension.getBackgroundPage().player.getPlaylistIndex();
        $(".curent_play_label").text(play_list_string[curent_play]);
    }, 2000);
}
