const menu =document.querySelector("[data-menu]");
const btn =document.querySelector("[data-menu-button]");

btn.addEventListener("click", e=>{
    e.preventDefault();


const spans = btn.querySelectorAll("span");
  if (menu.classList.contains("active")) {

    menu.classList.remove("active");
    menu.classList.add("closing");
    
    spans[0].classList.add("enabled"); // hide "menu"
    spans[1].classList.remove("enabled");    // show "close"
  } else {

    menu.classList.remove("closing");
    menu.classList.add("active");

    spans[0].classList.remove("enabled");    // show "menu"
    spans[1].classList.add("enabled"); // hide "close"
  }

});