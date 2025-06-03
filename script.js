let navlinks = document.getElementById("navLink");
let navbar = document.getElementById("nav");

navlinks.style.height = "0px";
function navToggle() {
  if (navlinks.style.height == "0px") {
    navlinks.style.height = "100vh";
    navlinks.style.transition = "all .5s ease-in-out";
  } else {
    navlinks.style.height = "0px";
    navlinks.style.transition = "all .5s ease-in-out";
  }
}

window.addEventListener('scroll', ()=> {
  if (window.scrollY >= 100) {
    navbar.style.background = '#310232;';
  }
  else{
    navbar.style.background = 'transparent';
  }

  if (window.scrollY < 50) {
    navbar.style.background = 'transparent';
  }
  else{
    navbar.style.background = '#310232';
  }
});
