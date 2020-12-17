$(document).ready(function(){
    $(".sectionDiv").hide();
    

    $("a.link").click(function(){
        $(".sectionDiv").hide();
        var sek = $(this).attr('href');
        $(sek).show();
    });
    
    $("button#submit").click(function(){
        var pom = $("input#email").val();
        if(pom == ""){
            alert("Enter your correct email!");
        }else{
            alert("Thank you");
        }
    })

    //window.localStorage.clear();
       
    
});

function lajkovi(buttonID, divID, brojac){
    var count = localStorage.getItem("result"+brojac) ? parseInt(localStorage.getItem("result"+brojac)) : 0;
    var counter = count + 1;
    localStorage.setItem("result"+brojac, counter);
    $("#"+divID).text(localStorage.getItem("result"+brojac));
}


var niza1 = localStorage.getItem("niza1");
niza1 = (niza1) ? JSON.parse(niza1) : [];
var niza2 = localStorage.getItem("niza2");
niza2 = (niza2) ? JSON.parse(niza2) : [];
var niza3 = localStorage.getItem("niza3");
niza3 = (niza3) ? JSON.parse(niza3) : [];
var niza4 = localStorage.getItem("niza4");
niza4 = (niza4) ? JSON.parse(niza4) : [];
var niza5 = localStorage.getItem("niza5");
niza5 = (niza5) ? JSON.parse(niza5) : [];
var niza6 = localStorage.getItem("niza6");
niza6 = (niza6) ? JSON.parse(niza6) : [];
var niza7 = localStorage.getItem("niza7");
niza7 = (niza7) ? JSON.parse(niza7) : [];
var niza8 = localStorage.getItem("niza8");
niza8 = (niza8) ? JSON.parse(niza8) : [];
var niza9 = localStorage.getItem("niza9");
niza9 = (niza9) ? JSON.parse(niza9) : [];
var niza10 = localStorage.getItem("niza10");
niza10 = (niza10) ? JSON.parse(niza10) : [];
var niza11 = localStorage.getItem("niza11");
niza11 = (niza11) ? JSON.parse(niza11) : [];
var niza12 = localStorage.getItem("niza12");
niza12 = (niza12) ? JSON.parse(niza12) : [];

function brojKomentari(buttonComID, inputID, buttonZbir, brojac){
    var broj = localStorage.getItem("kolku"+brojac) ? parseInt(localStorage.getItem("kolku"+brojac)) : 0;
    var nBroj = broj + 1;
    
    var xBroj = parseInt(brojac);
    
    localStorage.setItem("kolku"+brojac, nBroj);
    $("#"+buttonZbir).text(localStorage.getItem("kolku"+brojac));
    var komentar = $("#"+inputID).val();
    localStorage.setItem("komentar"+broj, komentar);
    if(xBroj == 1){
        niza1[broj]=localStorage.getItem("komentar"+broj);
    }else if(xBroj == 2){
        niza2[broj]=localStorage.getItem("komentar"+broj);
    }else if(xBroj == 3){
        niza3[broj]=localStorage.getItem("komentar"+broj);
    }else if(xBroj == 4){
        niza4[broj]=localStorage.getItem("komentar"+broj);
    }else if(xBroj == 5){
        niza5[broj]=localStorage.getItem("komentar"+broj);
    }else if(xBroj == 6){
        niza6[broj]=localStorage.getItem("komentar"+broj);
    }else if(xBroj == 7){
        niza7[broj]=localStorage.getItem("komentar"+broj);
    }else if(xBroj == 8){
        niza8[broj]=localStorage.getItem("komentar"+broj);
    }else if(xBroj == 9){
        niza9[broj]=localStorage.getItem("komentar"+broj);
    }else if(xBroj == 10){
        niza10[broj]=localStorage.getItem("komentar"+broj);
    }else if(xBroj == 11){
        niza11[broj]=localStorage.getItem("komentar"+broj);
    }else if(xBroj == 12){
        niza12[broj]=localStorage.getItem("komentar"+broj);
    }
    
}

function zaKomentari(buttonKom, brojac){
    var broj = parseInt(brojac);
    if(broj == 1){
        localStorage.setItem("niza1", JSON.stringify(niza1));
        alert("Comments:\n" + niza1.join("\n"));
    }else if(broj == 2){
        localStorage.setItem("niza2", JSON.stringify(niza2));
        alert("Comments:\n" + niza2.join("\n"));
    }else if(broj == 3){
        localStorage.setItem("niza3", JSON.stringify(niza3));
        alert("Comments:\n" + niza3.join("\n"));
    }else if(broj == 4){
        localStorage.setItem("niza4", JSON.stringify(niza4));
        alert("Comments:\n" + niza4.join("\n"));
    }else if(broj == 5){
        localStorage.setItem("niza5", JSON.stringify(niza5));
        alert("Comments:\n" + niza5.join("\n"));
    }else if(broj == 6){
        localStorage.setItem("niza6", JSON.stringify(niza6));
        alert("Comments:\n" + niza6.join("\n"));
    }else if(broj == 7){
        localStorage.setItem("niza7", JSON.stringify(niza7));
        alert("Comments:\n" + niza7.join("\n"));
    }else if(broj == 8){
        localStorage.setItem("niza8", JSON.stringify(niza8));
        alert("Comments:\n" + niza8.join("\n"));
    }else if(broj == 9){
        localStorage.setItem("niza9", JSON.stringify(niza9));
        alert("Comments:\n" + niza9.join("\n"));
    }else if(broj == 10){
        localStorage.setItem("niza10", JSON.stringify(niza10));
        alert("Comments:\n" + niza10.join("\n"));
    }else if(broj == 11){
        localStorage.setItem("niza11", JSON.stringify(niza11));
        alert("Comments:\n" + niza11.join("\n"));
    }else if(broj == 12){
        localStorage.setItem("niza12", JSON.stringify(niza12));
        alert("Comments:\n" + niza12.join("\n"));
    }
}
