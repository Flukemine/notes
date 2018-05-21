
function work(){
    var d = new Date("March 13, 2018 01:15:36");
    var n = d.getDate();
    var c = d.getFullYear();
    var f = d.getMonth();
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var ans = document.getElementById("dates");
        var ans = document.getElementById("dates2");
        var ans2 = document.getElementById("dates3");
        var ans3 = document.getElementById("dates4");
        var ans4 = document.getElementById("dates5");
        var ans5 = document.getElementById("dates6");
    ans.innerHTML = "Day " + n + " Month " + f  + " Year " + c;
    ans3.innerHTML = "Date Format 1: " + n + "/" + f + "/" + c + " " + hours + ":" + minutes + ":" + seconds + " AM";
    ans4.innerHTML = "Date Format 2: " + n + "/" + f + "/" + c;
    ans5.innerHTML =  "Date Format 3: " + hours + ":" + minutes + ":" + seconds + " AM";
    var startTime = new Date('01/01/1970');  
    var startMsec = startTime.getMilliseconds();  
    startTime.setTime(5000000);  
    var elapsed = (startTime.getTime() - startMsec) / 1000;   
    alert(elapsed);  

    alert("FAw");
}