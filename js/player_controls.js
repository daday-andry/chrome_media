function onYouTubeIframeAPIReady(){player=new YT.Player("player",{events:{onReady:onPlayerReady,onStateChange:OnStateChange}})}function onPlayerReady(e){e.target.loadPlaylist(playlist)}function OnStateChange(e){if(-1==e.data||0==e.data){var a=player.getPlaylistIndex();player.getPlaylist().length!=playlist.length&&player.loadPlaylist(playlist,previousIndex+1),previousIndex=a}}var player,curent_play,previousIndex=0,playlist=["vanQlfZDH24"],play_list_string=["Rija rasoloandraibe"];$(".control_btn").on("click",function(){switch($action=$(this).attr("action"),$action){case"play":chrome.extension.getBackgroundPage().player.playVideo(),$(this).attr("action","pause"),$(this).removeClass("play_btn"),$(this).addClass("pause_btn");break;case"pause":chrome.extension.getBackgroundPage().player.pauseVideo(),$(this).attr("action","play"),$(this).removeClass("pause_btn"),$(this).addClass("play_btn");break;case"stop":chrome.extension.getBackgroundPage().player.stopVideo();break;case"next":chrome.extension.getBackgroundPage().player.nextVideo();break;case"prev":chrome.extension.getBackgroundPage().player.previousVideo()}});