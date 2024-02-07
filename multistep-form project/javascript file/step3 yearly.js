const section=document.querySelectorAll(".section");


section.forEach(function(sec){
sec.addEventListener("click",function(){
       sec.classList.toggle("change-section");
})
 })

