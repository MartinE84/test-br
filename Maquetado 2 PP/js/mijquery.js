/*slide down and up boxes*/
function isMobileWidth() {
    return $('#mobile-indicator').is(':visible');
}

function recarga() {
    if (isMobileWidth()) {
        $('.tools').unbind("click").click(function() {
            $('.tools-body').slideToggle('slow');
            $('.tools .glyphicon-menu-up').toggleClass('rotation-r');
        });

        $('.viewed').unbind("click").click(function() {
            $('.viewed-body').slideToggle('slow');
            $('.viewed .glyphicon-menu-up').toggleClass('rotation-r');

        });


        $('.announ').unbind("click").click(function() {

            $('.announ-body').slideToggle('slow');
            $('.announ .glyphicon-menu-up').toggleClass('rotation-r');

        });

        $('.trend-P').unbind("click").click(function() {

            $('.trend-P-body').slideToggle('slow');
            $('.trend-P .glyphicon-menu-up').toggleClass('rotation-r');

        });

        $('.trend-H').unbind("click").click(function() {

            $('.trend-H-body').slideToggle('slow');
            $('.trend-H .glyphicon-menu-up').toggleClass('rotation-r');

        });

        $('.doc').unbind("click").click(function() {
            $('.doc-body').slideToggle('slow');
            $('.doc .glyphicon-menu-up').toggleClass('rotation-r');

        });

    }
    $("sontogles").unbind();
}

$(document).ready(function() {

    var doit;

    function resizedw() {
        //recarga();
        location.reload();
    }
    window.onresize = function() {
        clearTimeout(doit);
        doit = setTimeout(function() {
            resizedw();
        }, 100);
    };
    recarga();



/*slide down and up menu*/

/* time slide/click */

    if (!isMobileWidth()) {
        $('li.time-li').hover(function() {;
            $('.time-li > ul.sub-nav').slideToggle('fast');
        });

    }else{

        $('li.time-li').click(function(){
            $('.time-li > ul.sub-nav').slideToggle('fast');
        }); 
    }

/*megamenu slide/click*/

    if (!isMobileWidth()) {
        $('li.m-1').hover(function(){
            $('.m-1 > ul.sub-nav').slideToggle('fast');
        }); 

    }else{

        $('li.m-1').click(function(){
            $('.m-1 > ul.sub-nav').slideToggle('fast');
        }); 
    }



    if (!isMobileWidth()) {
        $('li.m-2').hover(function(){
            $('.m-2 > ul.sub-nav').slideToggle('fast');
        }); 

    }else{

        $('li.m-2').click(function(){
            $('.m-2 > ul.sub-nav-t').slideToggle('fast');
        }); 
    }


    if (!isMobileWidth()) {
        $('li.m-3').hover(function(){
            $('.m-3 > ul.sub-nav').slideToggle('fast');
        }); 

    }else{

        $('li.m-3').click(function(){
            $('.m-3 > ul.sub-nav-t').slideToggle('fast');
        }); 
    }



    /*Rotador - Megamenu*/

    
     if (!isMobileWidth()) {
        $("li.m-1").hover(function() {
            $('li.m-1 .glyphicon-menu-down').toggleClass('rotation-menu');
        });

    }else{

        $("li.m-1").click(function() {
            $('li.m-1 .glyphicon-menu-down').toggleClass('rotation-menu');
        });
    }


     if (!isMobileWidth()) {
        $("li.m-2").hover(function() {
            $('li.m-2 .glyphicon-menu-down').toggleClass('rotation-menu');
        });

    }else{

        $("li.m-2").click(function() {
            $('li.m-2 .glyphicon-menu-down').toggleClass('rotation-menu');
        });
    }


     if (!isMobileWidth()) {
        $("li.m-3").hover(function() {
            $('li.m-3 .glyphicon-menu-down').toggleClass('rotation-menu');
        });

    }else{

        $("li.m-3").click(function() {
            $('li.m-3 .glyphicon-menu-down').toggleClass('rotation-menu');
        });
    }



});