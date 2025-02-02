const display1 = document.getElementById("display1")
const display11 = document.getElementById("display11")
const display2 = document.getElementById("display2")
const display21 = document.getElementById("display21")
const display3 = document.getElementById("display3")
const display31 = document.getElementById("display31")
const Btradenow1 = document.getElementById("Btradenow1");
const tradenow1 = document.getElementById("tradenow1");
const Btradenow2 = document.getElementById("Btradenow2");
const tradenow2 = document.getElementById("tradenow2");
const Btradenow3 = document.getElementById("Btradenow3");
const tradenow3 = document.getElementById("tradenow3");
const Btradenow4 = document.getElementById("Btradenow4");
const tradenow4 = document.getElementById("tradenow4");


const trads = document.getElementById("trads");

const a = document.getElementById("a")
const b = document.getElementById("b")
const c = document.getElementById("c")
const headernav = document.getElementById("headernav");
const bxmenu = document.getElementById("bxmenu")
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("navbar").style.top = "0";
}else if(document.documentElement.scrollTop > -50){
document.getElementById("navbar").style.top = "80px";
}
else{
document.getElementById("navbar").style.top = "-100px";
}
}
display1.onclick = function(){
a.textContent = "As a brokerage firm or trading platform. We are dedicated to providing innovative and user-friendly trading";

display1.style.display = "none";
display11.style.display = "flex";
a.style.display = "block"


b.style.display = "none";
c.style.display = "none";
}
display11.onclick = function(){
a.style.display = "none";
display11.style.display = "none";
display1.style.display ="flex";

b.style.display = "none";
c.style.display = "none";
}
display2.onclick = function(){
b.textContent = "As a brokerage firm or trading platform. We are dedicated to providing innovative and user-friendly trading";

display2.style.display = "none";
display21.style.display = "flex";
b.style.display = "block"

a.style.display = "none";
c.style.display = "none";
} 
display21.onclick = function(){
    b.style.display = "none";
    display21.style.display = "none";
    display2.style.display ="flex";
    
   a.style.display = "none";
  c.style.display = "none";
}
display3.onclick = function(){
    c.textContent = "As a brokerage firm or trading platform. We are dedicated to providing innovative and user-friendly trading";
    
    display3.style.display = "none";
    display31.style.display = "flex";
    c.style.display = "block"
    
    a.style.display = "none";
    b.style.display = "none";
}
display31.onclick = function(){
c.style.display = "none";
display31.style.display = "none";
display3.style.display ="flex";
a.style.display = "none";
b.style.display = "none";
}
Btradenow1.onmouseover = function(){
tradenow1.style.display = "block"; 
trads1.style.display = "block";
}
Btradenow1.onmouseout = function(){
tradenow1.style.display = "none"; 
trads1.style.display = "none";
}
Btradenow2.onmouseover = function(){
  tradenow2.style.display = "block"; 
  trads2.style.display = "block";
}
Btradenow2.onmouseout = function(){
  tradenow2.style.display = "none"; 
  trads2.style.display = "none";
}  
Btradenow3.onmouseover = function(){
  tradenow3.style.display = "block"; 
  trads3.style.display = "block";
}
Btradenow3.onmouseout = function(){
  tradenow3.style.display = "none"; 
  trads3.style.display = "none";
}
Btradenow4.onmouseover = function(){
  tradenow4.style.display = "block"; 
  trads4.style.display = "block";
}
Btradenow4.onmouseout = function(){
  tradenow4.style.display = "none"; 
  trads4.style.display = "none";
}
  
bxmenu.onclick = function(){
  headernav.style.display = "block";
}