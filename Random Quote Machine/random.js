var randnum;
var newauthor;
var newquote;
var contentColor="";
$(document).ready(function(){
    
function newquote(){
    var quotes=["We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.",
    "What one programmer can do in one month, two programmers can do in two months",
    "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    "Rules of Optimization:Rule 1: Don't do it.Rule 2 (for experts only): Don't do it yet.",
    "A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want",
    "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first."];
    var authors=["Ellen Ullman",
    "Fred Brooks",
    "Patrick McKenzie",
    "Michael A. Jackson",
    "Niklaus Wirth",
    "Andy Hunt"];

    var randnum=Math.floor(Math.random()* quotes.length);
    var newquote=quotes[randnum];
    var newauthor=authors[randnum];
    $("#quote").html("<i class='fas fa-quote-left' id='open'></i>"+newquote+"<i class='fas fa-quote-right' id='close'></i>");
    $("#author").html("<i class='fas fa-pencil-alt'id='open1'></i>"+newauthor);
    
   
}

 $("#button").on("click",function(){
     newquote();
     newColor();
     $("#quote").animate({
        opacity:0,
    });
    $("#quote").animate({
        opacity:1,
    });

 });  
 $("#tweet").on("click",function(){
window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +newquote+"-"+newauthor);
 }); 
 

 function newColor() {
    contentColor = randomColor();
    $("body").css("background-color", contentColor);
    $("#tweet").css("background-color", contentColor);
    $("#fb").css("background-color", contentColor);
    $("#quote").css("color", contentColor);
    $("#author").css("color", contentColor);
    $("#button").css("background", contentColor);
}


function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}


 

});

// var btn=document.getElementById("button");
// var quotes=document.getElementById("quotes");
// var maxquotes=0;
// btn.addEventListener("click", function(){
//     var myRequest = new XMLHttpRequest();
//     myRequest.open('GET','http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',true);
//     myRequest.onload = function(){
        
//         var ourData =JSON.parse(myRequest.responseText);
//      renderHTML(ourData);
     
//     };
//     myRequest.send();
//     maxquotes++;
// });

// function renderHTML(data){
//     var htmlstring ="";
    
//     for(  i= 0;i<data.length;i++){
//         htmlstring="content:"+data[i].content;


//     }
//     quotes.insertAdjacentHTML('beforeend',htmlstring);
   
// }


