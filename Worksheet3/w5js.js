//function todegrees(){
//    var element1 = document.getElementById("input2").value;
//    var element3 = (5/9) * (element1 - 32);
//     alert(element3);
//}
//
//function tofahrenheit(){
//    var element2 = document.getElementById("input1").value;
//      var element4 = element2 × 9/5 + 32;
//    alert(element4);
//}


function cToF() 
{
  var cTemp = document.getElementById("input1").value;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    alert(message);
}

function fToC() 
{
  var fTemp = document.getElementById("input2").value;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    alert(message);
} 
//cToF(60);
//fToC(45);