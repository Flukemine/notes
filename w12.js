var countryList = ["!","?","*"];

var el = document.getElementById("firstname");
var el2 = document.getElementById("lastname");
var el4 = document.getElementById("username");
var el5 = document.getElementById("password");

el.addEventListener("click", message, false);
el.addEventListener("mouseover", message1,false);
el.addEventListener("mouseout", message11,false);  
el2.addEventListener("mouseover", message2,false);  
el2.addEventListener("mouseout", message22,false);  
el4.addEventListener("click", message33, false);
//el4.addEventListener("focusout", message333, false);
el4.addEventListener("focusout", checkUsername, false);
el4.addEventListener("focus", checkUsername1, false);
el5.addEventListener("focusout", checkPassword, false);
el5.addEventListener("focus", checkPassword1, false);

el5.addEventListener("mousedown", message44, false);
el5.addEventListener("mouseup", message444, false);


//onfocusout
function message1(){
   document.getElementsByName('firstname')[0].placeholder='new text for email';
}

function message11(){
   document.getElementsByName('firstname')[0].placeholder='enter name';
}


function message2(){
   document.getElementsByName('lastname')[0].placeholder='this essage is moving';
}
    

function message22(){
   document.getElementsByName('lastname')[0].placeholder='enter surname';
}
   function message33(){
   document.getElementsByName('username')[0].placeholder='Hello';
} 
 function message333(){
   document.getElementsByName('username')[0].placeholder='Hellodddd';
} 


function message44(){
   document.getElementsByName('password')[0].placeholder='yooo';
} 
function message444(){
   document.getElementsByName('password')[0].placeholder='enter password';
} 



    
    function message(){
alert("hi");
    }


   
function checkUsername(){
        
        var element1 = document.getElementById("username").value;
        var errorr = document.getElementById("Error");
        if(element1 == "" || element1 == null){
                document.getElementById("Error").style.color = "red";
            errorr.innerHTML = "please fill it out";
        }
        
        if (element1.length < 5){
                            document.getElementById("Error").style.color = "red";

            errorr.innerHTML = "Username needs to be longer than 5 letters";


        }
}



   
function checkUsername1(){
        
        var element1 = document.getElementById("username").value;

        var errorr = document.getElementById("Error");
                        errorr.innerHTML = "";

        
}


   
function checkPassword(){
        
        var element1 = document.getElementById("password").value;
            var errorr = document.getElementById("Error");
              //  alert(typeof(element1));
     if (document.getElementById('password').value !=
    document.getElementById('confirmpassword').value){
         alert("password needs to match");
     }
    else{
                 alert("password match");

    }
         
         
         
         if(element1 == "" || element1 == null){
                        document.getElementById("Error").style.color = "red";
                        errorr.innerHTML = "please fill the password out";
                }
        var pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); 
        if (pattern.test(element1)) {
            return false;
        }
    else{
        document.getElementById("Error").style.color = "red";
         errorr.innerHTML = "You need a special character";
        return true; //good user input

    }
    
    
    function checkPassword(){
        
    }
   
}


function checkPassword1(){
        
        var element1 = document.getElementById("password").value;
            var errorr = document.getElementById("Error");

         errorr.innerHTML = "";

        
}
//checkUsername();