

function scrollFunction1() {
const element = document.getElementById("home");
element.scrollIntoView({ behavior: "smooth" });
}
  
function scrollFunction2() {
const element = document.getElementById("overview");
element.scrollIntoView({ behavior: "smooth" });
}
  
function scrollFunction3() {
const element = document.getElementById("portfolio");
element.scrollIntoView({ behavior: "smooth" });
}
  
function scrollFunction4() {
const element = document.getElementById("aboutme");
element.scrollIntoView({ behavior: "smooth" });
}
  
document.getElementById("homem").addEventListener("click", scrollFunction1);
document.getElementById("over").addEventListener("click", scrollFunction2);
document.getElementById("port").addEventListener("click", scrollFunction3);
document.getElementById("about").addEventListener("click", scrollFunction4);