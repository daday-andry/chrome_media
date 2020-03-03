var play_list;

$(document).ready(function() {
    $("#hyv-watch-content").hide();
    $("#hyv-searchBtn").on("click", function(event) {
        youtubeApiCall();
        return false;
    });
    refreshPlayList();
    $('body, html').animate({ scrollTop: $("tr:last").offset().top }, 1000);
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
            "<tr>"+
              "<td style='width:10%'><i class='fa fa-music' aria-hidden='true'></i></td>"+
              "<td class='selectable'>"+
                "<small  info='"+e.snippet.title+"' videoId='"+e.id.videoId+"'>"+
                    e.snippet.title+
                    "<br><i>&nbsp;by :" +e.snippet.channelTitle+"</i>"+
                "</small>"+
              "</td>"+
            "</tr>";
        });
        $("#hyv-watch-content").show();
        $("#hyv-watch-related").html(videoList);
        //play list controller
        $('.selectable small').on('click', function(){
            $videoId=$(this).attr("videoId");
            $videoInfo=$(this).attr("info");
            chrome.extension.getBackgroundPage().playlist.push($videoId);
            chrome.extension.getBackgroundPage().play_list_string.push($videoInfo);
            refreshPlayList();
        });
    });
}
function refreshPlayList(){
    play_list_string =chrome.extension.getBackgroundPage().play_list_string;
    var video_list_tab="";
    $.each(play_list_string, function(index, e) {
        video_list_tab += "<tr><td style='width:10%'><i class='fa fa-music drawable' aria-hidden='true'></i></td><td class='selectable video_item' video_index='"+index+"'>"+e+"</td><td><a><i class='fa fa-trash selectable'></a></td></tr>";
    });
    //
    $("#play-list-tbl").html(video_list_tab);

    $("#play-list-tbl .video_item").on('click',function(){
        $video_index=$(this).attr("video_index");
        chrome.extension.getBackgroundPage().player.playVideoAt($video_index);
    })  
    $("#play-list-tbl .fa-trash").on('click',function(){
        $video_index=$(this).parents("tr").children(".video_item").attr("video_index");
        chrome.extension.getBackgroundPage().play_list_string.splice($video_index,1)
        chrome.extension.getBackgroundPage().playlist.splice($video_index,1);
        refreshPlayList();
    })
}
