function convert() 
{
      var cTemp = document.getElementById("input1").value;
     var fTemp = document.getElementById("input2").value;
    
    if (fTemp == "" && cTemp !== "" )
{
        var cToFahr = cTemp * 9 / 5 + 32;
        var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
        alert(message);
    
}

       else if (cTemp == ""  && fTemp !== ""  )
{
          var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
  alert(message);
}

    
           else if (cTemp == ""   && fTemp == "" )
{ 
          
  alert("error");
}
    
    
       else if (cTemp !== ""   && fTemp !== "" )
{ 
          
  alert("cannot add 2 values at the same time");
      var cTemp = document.getElementById("input1").value = "";
     var fTemp = document.getElementById("input2").value = ""; 
}
           else if (Number.isInteger(cTemp) == false   || Number.isInteger(fTemp) == false  )
{ 
          
        alert("strings not alloweed");
     
}
    
    
    
    
    




}

