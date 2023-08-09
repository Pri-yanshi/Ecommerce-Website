const bar=document.getElementById('bar');
const close=document.querySelector('#close');
const nav=document.getElementById('navbar');
if(bar){
   bar.addEventListener("click", () => {
      nav.setAttribute("class","act_bar");//Or we can use nav.classList.add("act_bar");//
       });
}
if(close){
   close.addEventListener("click", () => {
      nav.classList.remove("act_bar");
       });
}