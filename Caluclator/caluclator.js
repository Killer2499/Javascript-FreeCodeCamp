var inputvalue=document.getElementById('input');
function keydown(obj){
    var press=obj.innerHTML;
    if (press == '='){
        document.getElementById("input").innerHTML=eval(document.getElementById("input").innerHTML);

    }
    else if (press == 'AC'){
        document.getElementById("input").innerHTML='0';
    }
    else if(press =='DEL'){
        if(document.getElementById('input').innerHTML.length == 1){
            document.getElementById('input').innerHTML='0';
        }
        else{
        var newStr = document.getElementById('input').innerHTML.substring(0, document.getElementById("input").innerHTML.length-1);
        document.getElementById("input").innerHTML=newStr;
        }

    }
    else{
    if (document.getElementById("input").innerHTML == '0'){
        document.getElementById("input").innerHTML=press;
    }
    else if (document.getElementById("input").innerHTML){
        document.getElementById("input").innerHTML+=press;

    }
    }
}