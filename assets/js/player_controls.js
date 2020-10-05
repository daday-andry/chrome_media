var player
var playlist         = ['vanQlfZDH24']
var previousIndex    = 0
let controls         = document.querySelectorAll(".control_btn")
var play_list_string = ['Rija rasoloandraibe']

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
controls.forEach(control => control.addEventListener("click",function(){
    let action  = control.getAttribute("action")
    switch(action){
      case 'play'  :  
        app.player.playVideo()     
        control.setAttribute("action","pause")
        control.classList.remove("play_btn")
        control.classList.add("pause_btn")
        break;
      case 'pause' :  
        app.player.pauseVideo();    
        control.setAttribute("action","play")
        control.classList.remove("pause_btn")
        control.classList.add("play_btn")
        break;
      case 'stop'  :  app.player.stopVideo();     break;
      case 'next'  :  refreshPlayLabel(); app.player.nextVideo();     break;
      case 'prev'  :  refreshPlayLabel(); app.player.previousVideo(); break;
    } 
  })
)



