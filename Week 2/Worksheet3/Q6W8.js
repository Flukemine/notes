function checks(){
    var ans1 = document.getElementById("inputs").value;
    
    if(ans1.indexOf('$') > -1 || ans1.indexOf('#') > -1 || ans1.indexOf('&') > -1  || ans1.indexOf('^') > -1 || ans1.indexOf('*') > -1 ){
        alert("Your string has invalid characters");
    }
    
    else{
        alert("correct");
    }
    
}