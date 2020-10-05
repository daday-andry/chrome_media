const scripts = {
    jquery : function(){
        var script = document.createElement("SCRIPT")
        script.type = 'text/javascript'
        script.src = "/lib/jquery/dist/jquery.js"
        script.onload = function(){ var $ = window.jQuery}
        document.getElementsByTagName("head")[0].appendChild(script);
    },
    bootstrap : function(){
        var script = document.createElement("SCRIPT")
        script.type = 'text/javascript'
        script.src = "/lib/bootstrap/dist/js/bootstrap.js"
        document.getElementsByTagName("head")[0].appendChild(script);
    },
    main : function (){
        var script = document.createElement("SCRIPT")
        script.type = 'text/javascript'
        script.src = "/assets/js/main.js"
        document.getElementsByTagName("head")[0].appendChild(script);
    }
}


scripts.bootstrap()
scripts.jquery()
