$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

function showInfo(message){
    $('#infos').modal('show');
    $('#infos .message').text(message);
    setTimeout(function(){ 
      $('#infos').modal('hide');
    }, 2000); 
}
