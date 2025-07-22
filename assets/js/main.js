const manueNav=document.getElementById("manueNav");
const navLinks=document.querySelector(".navLinks");
manueNav.addEventListener("click",()=>{
    console.log(navLinks);
    

    navLinks.classList.toggle("visible");
   

});