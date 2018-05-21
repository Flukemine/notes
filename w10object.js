var car1 = new hotel('nisan', 'A1', 1999);

function hotel(name,model,colour){
    this.name = name;
    this.model = model;
    this.colour = colour;

    this.start = function(){
        alert("s");
    };
    
     this.drive = function(){
        alert("s1");
    };
    
    
     this.break = function(){
        alert("s2");
    };
    
    
    
     this.stop = function(){
        alert("s3");
    };
    
    document.getElementById("demo").onclick = this.stop();

               this.start();

}

                 
function hello(){

}                 
  

