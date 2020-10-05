var app      = chrome.extension.getBackgroundPage()
let playlist = document.getElementById("play_list") 

document.addEventListener("DOMContentLoaded", () => { refreshPlayList() })
playlist.sortable({
    appendTo :'body',
    start : function( event, ui ) {$("#delete_space").addClass("show");},
    stop : function( event, ui ) {$("#delete_space").removeClass("show");},

    over: function () {
        removeIntent = false;
    },
    out: function () {
        removeIntent = true;
    },
    beforeStop: function (event, ui) {
        if(removeIntent == true){
         $vid = ui.item.attr('video_index');
         ui.item.remove();
         remove_video_from_list($vid);
         $("#delete_space").removeClass("show");
         showInfo("element remove from playlist");
        }
    }
});
  
function refreshPlayList(){
    play_list_string = app.play_list_string;
    var video_list ="";
    $.each(play_list_string, function(index, e) {
        video_list +="<li class='list-group-item' video_index='"+index+"'>"+
        "<p class='title'>"+e+"</p>"+
        "<span class='fa fa-bars drag_btn'></span>";
    });
    $("#play_list").html(video_list);

    $("#play-list-tbl .video_item").on('click',function(){
        $video_index=$(this).attr("video_index");
        app.player.playVideoAt($video_index);
    })  
    $("#play-list-tbl .fa-trash").on('click',function(){
        $video_index=$(this).parents("tr").children(".video_item").attr("video_index");
        
    })
}
function remove_video_from_list(video_index){
    app.play_list_string.splice(video_index,1)
    app.playlist.splice(video_index,1);
    refreshPlayList();
}
