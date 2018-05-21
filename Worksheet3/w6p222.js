var a = Number(prompt("Enter first number"));
ans1 = document.getElementById("ans1");
ans11 = parseInt(a);
ans1.innerHTML = ans11;
ans2 = document.getElementById("ans2");
ans22 = Math.ceil(a);
ans2.innerHTML = ans22;
ans3 = document.getElementById("ans3");
ans33 = Math.floor(a);
ans3.innerHTML = ans33;
ans4 = document.getElementById("ans4");
ans44 = Math.round(a);
ans4.innerHTML = ans44;

