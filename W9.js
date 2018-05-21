
var stuff = ["item1","item2", "item3", "item4", "item5", "item6", "item7"  ];
function disp(){
    var texts2 = document.getElementById("texts");
    texts2.innerHTML = " The length is " + stuff.length;
}
function display(){
    var errors = document.getElementById("error");

    var index = document.getElementById("values").value;
    if (index == 0){
       
         errors.innerHTML = stuff[0];
        document.getElementById("error").style.color = "black";
    }
    else if(index== 1){
        errors.innerHTML = stuff[1];
            document.getElementById("error").style.color = "black";
}
     else if(index== 2){
            errors.innerHTML = stuff[2];
                 document.getElementById("error").style.color = "black";

    }
     else if(index== 3){
         errors.innerHTML = stuff[3];
                 document.getElementById("error").style.color = "black";

    }
     else if(index== 4){
             errors.innerHTML = stuff[4];
                 document.getElementById("error").style.color = "black";

    }
     else if(index== 5){
             errors.innerHTML = stuff[5];
                 document.getElementById("error").style.color = "black";

    }
     else if(index== 6){
            errors.innerHTML = stuff[6];
                 document.getElementById("error").style.color = "black";

    }
    else{
        errors.innerHTML = " The input should be between 0 and 6!";
        document.getElementById("error").style.color = "red";
    }
    
}




function option2(){
    var errors = document.getElementById("error");

    var index = document.getElementById("values").value;
    if (index == 1){
       
         errors.innerHTML = stuff[0];
        document.getElementById("error").style.color = "black";
    }
    else if(index== 2){
        errors.innerHTML = stuff[1];
            document.getElementById("error").style.color = "black";
}
     else if(index== 3){
            errors.innerHTML = stuff[2];
                 document.getElementById("error").style.color = "black";

    }
     else if(index== 4){
         errors.innerHTML = stuff[3];
                 document.getElementById("error").style.color = "black";

    }
     else if(index== 5){
             errors.innerHTML = stuff[4];
                 document.getElementById("error").style.color = "black";

    }
     else if(index== 6){
             errors.innerHTML = stuff[5];
                 document.getElementById("error").style.color = "black";

    }
     else if(index== 7){
            errors.innerHTML = stuff[6];
                 document.getElementById("error").style.color = "black";

    }
    else{
        errors.innerHTML = " The input should be between 0 and 6!";
        document.getElementById("error").style.color = "red";
    }
    
}



function save(){
        var num1 = document.getElementById("val1").value;
        var num2 = document.getElementById("val2").value;
        var num3 = document.getElementById("val3").value;
        var values = [num1,num2,num3];
        var value52 = document.getElementById("music");
        value52.innerHTML = " The stars are " + values[0] + " " + values[1] + " " +  values[2] ;
        values.sort();
         value52.innerHTML = values;
}


