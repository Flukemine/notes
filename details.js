
var local = ["malta", "birgu"];
//document.getElementById("firstname").addEventListener("blur", check);
document.getElementById("local").addEventListener("blur", check1);
document.getElementById("tel").addEventListener("blur", check2);
//document.getElementById("local").addEventListener("click", checkEmpty);
document.getElementById("firstname").addEventListener("click", checkEmpty);

function check(){
    var xD = document.getElementById("firstname").value;
if(xD.length == 3){
    alert("d");
}
    
}


function check1(){
    var xD1 = document.getElementById("local").value;
if(xD1 == local[0] || xD1 == local[1]){
    alert("exist");
}
    
    
}



function check(){
    var xD = document.getElementById("firstname").value;
if(xD.length == 3){
    alert("d");
}
    
}



function checkEmpty(){
        var xD = document.getElementById("firstname").value;

    alert(xD);
}