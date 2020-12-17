$(document).ready(function(){
    $(".sectionDiv").hide();
    

    $("a.link").click(function(){
        $(".sectionDiv").hide();
        var sek = $(this).attr('href');
        $(sek).show();
    });  
    
    
});


function lajkovi(buttonID, divID, brojac){
    var count = localStorage.getItem("result"+brojac) ? parseInt(localStorage.getItem("result"+brojac)) : 0;
    var counter = count + 1;
    localStorage.setItem("result"+brojac, counter);
    $("#"+divID).text(localStorage.getItem("result"+brojac));
}

/*$(document).on('keypress',function(e) {
    if(e.which == 13) {

        //alert('You pressed enter!');
    }
});*/

function komentar(buttonID, inputID, brojac){
    
    var com = localStorage.getItem("koment"+brojac) ? localStorage.getItem("koment"+brojac) : 'no comments yet';
    length = com.length;
    var comments = com;
    
    localStorage.setItem("koment"+brojac, comments);
    

    $("#"+inputID).text(localStorage.getItem("koment"+brojac));
    alert(com);
}
