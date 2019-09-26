var player;
var previousIndex = 0;
var playlist = ['vanQlfZDH24'];
var play_list_string =['Rija rasoloandraibe'];
var curent_play;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange':OnStateChange
    }
  });
}
function onPlayerReady(event) {
  event.target.loadPlaylist(playlist);
}
function OnStateChange(event){
  if(event.data == -1 || event.data == 0) {
    var index = player.getPlaylistIndex();
      if(player.getPlaylist().length != playlist.length) {
          player.loadPlaylist(playlist, previousIndex+1);
      }
      previousIndex = index;
  }
}

//player controller
$('.control_btn').on('click', function(){
  $action=$(this).attr("action");
  switch($action){
    case 'play'  :  chrome.extension.getBackgroundPage().player.playVideo();     break;
    case 'pause' :  chrome.extension.getBackgroundPage().player.pauseVideo();    break;
    case 'stop'  :  chrome.extension.getBackgroundPage().player.stopVideo();     break;
    case 'next'  :  chrome.extension.getBackgroundPage().player.nextVideo();     break;
    case 'prev'  :  chrome.extension.getBackgroundPage().player.previousVideo(); break;
  } 
});



