function mouseOver(x){
    x.src = "like.jpg";
}
function mouseOut(){
    document.getElementById("slika1").src = "forest/wood1.jpg";
}



function komentar(){
    var tek;
    var paragraf = document.createElement("p");
    var kom = prompt("Enter your comment:", "Cool!");
    if(kom==null || kom==""){
        alert("You didn't comment anything");
    }
    else{
        tek=kom;
    }
    paragraf.innerHTML = tek;
    document.getElementById("kom2").appendChild(paragraf);
}


