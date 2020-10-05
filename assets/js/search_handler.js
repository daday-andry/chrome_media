var app = chrome.extension.getBackgroundPage()
$(document).ready(function() {
    $("#hyv-watch-content").hide();
    $("#hyv-search").on("keydown", function(event) {
        if($(this).val().length > 2){
            youtubeApiCall();
        }
    });   
});
function youtubeApiCall() {
    $.ajax({
        cache: false,
        data: $.extend({
            key: 'AIzaSyCStgr_nqtltXMrMfsBBLm2MVQpk38O6Vk',
            q: $('#hyv-search').val(),
            part: 'snippet'
        }, {
            maxResults: 20,
            pageToken: $("#pageToken").val()
        }),
        dataType: 'json',
        type: 'GET',
        timeout: 5000,
        url: 'https://www.googleapis.com/youtube/v3/search'
    }).done(function(data) {
        var items = data.items,
        videoList = "";
        $.each(items, function(index, e) {
            videoList +=
            "<li class='list-group-item'>"+
                "<p class='title'>"+e.snippet.title+"</p>"+
                "<p class='author'>" +e.snippet.channelTitle+"</p>"+
                "<span class='fa fa-plus add2play' info='"+e.snippet.title+"' videoId='"+e.id.videoId+"'></span>"
            "</li>";
        });
        $("#hyv-watch-content").show();
        $("#hyv-watch-related").html(videoList);
        //play list controller
        $('.add2play').on('click', function(){
            $videoId=$(this).attr("videoId");
            $videoInfo=$(this).attr("info");
            app.playlist.push($videoId);
            app.play_list_string.push($videoInfo);
            showInfo($videoInfo+" added to play list");
        });
    });
}