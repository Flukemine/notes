var something = document.getElementById("div1");
var something2 = document.getElementById("div2");
var count = 0;

    something.style.cursor = 'pointer';
    something.onclick = function() {
      this.style.backgroundColor = "#FFA07A";
    };

    something2.style.cursor = 'pointer';
    something2.onclick = function() {
       this.style.backgroundColor = 'red';
    };






function myFunction() {
    var x = document.getElementById("lists");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



function myFunction2() {
    var x = document.getElementById("lists2");
    
    var texts = document.getElementById("texts");
    if (x.style.display === "none") {
        x.style.display = "block";
                document.getElementById("shows").value= "hide";
                count = count + 1;
                texts.innerHTML =  "The amount of button clicks is " +  count;
                if(count == 6){
     texts.innerHTM = "That's enough!";
}

    } else {
        x.style.display = "none";
        document.getElementById("shows").value= "show";
        count = count + 1;
        texts.innerHTML = "The amount of button clicks is " + count;
        if(count > 6){
     texts.innerHTML = "That's enough!";
}
    }

    
}

function hello(){
    var x = document.getElementById("lists2");
    x.style.display = "none";
    var person = prompt("Please enter your name", "Joseph Muscat");
    
    if (person.indexOf('1') > -1  )
{
  alert("hello valued customer");
}
      if (person.indexOf('1') > -1  )
{
  alert("hello valued customer");
}
    
    
      if (person.indexOf('2') > -1  )
{
  alert("hello valued customer");
}
    
    
      if (person.indexOf('3') > -1  )
{
  alert("hello valued customer");
}
    
    
      if (person.indexOf('4') > -1  )
{
  alert("hello valued customer");
}
    
    
    
      if (person.indexOf('5') > -1  )
{
  alert("hello valued customer");
}
    
    
      if (person.indexOf('6') > -1  )
{
  alert("hello valued customer");
}
    
    
      if (person.indexOf('7') > -1  )
{
  alert("hello valued customer");
}
    
      if (person.indexOf('8') > -1  )
{
  alert("hello valued customer");
}
    
      if (person.indexOf('9') > -1  )
{
  alert("hello valued customer");
}
    else{
        alert(" hello" + person)
    }
    
}

function function5(){
    
}


