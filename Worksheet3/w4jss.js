function sums(){
    var element = document.getElementById("texts");
    element.innerHTML = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
}


function multiple(){
    var element2 = document.getElementById("texts2");
    element2.innerHTML = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10;
}


function type1(){
    var element3 = document.getElementById("texts3");
     element3.innerHTML = typeof "dog";
    alert(typeof "dog");
}



function type2(){
    var element4 = document.getElementById("texts4");
     element4.innerHTML = typeof "dog";
     alert(typeof "dog");
}


function type3(){
    var element5 = document.getElementById("texts5");
     element5.innerHTML = typeof true;
  
     alert(typeof true);
}



function type4(){
    var element6 = document.getElementById("texts6");
    if("kilt" == "Kilt"){
     element6.innerHTML = "true";
    }
    
    else{
        element6.innerHTML = "false";
    }
    
}