var cars = new Array();
cars[0] = "image1.jpg";
cars[1] = "imag2.jpg";
cars[2] = "image3.jpg";
    var i = 0;

//document.write("<li><img src='" + cars[0] + "' width="160" height="120"/><span>" + cars[0] + "</span></li>");

function showImage() 
{ 
var x = document.getElementById("test");
  x.setAttribute("src", cars[0]);
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
}


function hello() 
{ 
     i = i + 1;
    alert(i);
    var x = document.getElementById("test");
     x.setAttribute("src", cars[i]);
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
    if(i > 2){
        i = -1;
    }
}


