function myFunction() {
    var txt;
    var person = prompt("Please enter your username:", "Harry Potter");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
}



function parses1() {
     var a = document.getElementById("str1").value;
     var a = parseInt(a) + "<br>";
    var anss = document.getElementById("ans1");
    anss.innerHTML = "ans is " + a;
    var res = str.substring(1, 2);
}


function parses2() {
       var b = document.getElementById("str2");
     var b = parseInt(b) + "<br>";
        var anss2 = document.getElementById("ans2");
        anss2.innerHTML = "ans is " + b;
                                            }




function parses3() {
   var c = document.getElementById("str3")
     var c = parseInt(c) + "<br>";
        var anss3 = document.getElementById("ans3");
    anss3.innerHTML = "ans is " + c;
}




function parses4() {
   var d = document.getElementById("str4")
     var d = parseFloat(d) + "<br>";
        var anss4 = document.getElementById("ans4");
        anss4.innerHTML = "ans is " + d;
}




function parses5() {
   var e = document.getElementById("str5")
     var e = parseInt(e) + "<br>";
        var anss5 = document.getElementById("ans5");
        anss5.innerHTML = "ans is " + e;
}








function myFunction1() {
    var txt;
    var para = document.getElementById("demo");
    var person = prompt("Please enter your id card number:", "Harry Potter");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
       txt = parseInt(person);
        //para.appendChild(person);
    }
   alert("your user id is " + txt + " and is of type of " + typeof(txt));
}