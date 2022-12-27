var navbar = document.getElementById("mainNav");
var titolo = document.getElementById("titoloContainer");
var hero = document.getElementById("hero");
var link = document.getElementById("navbar");
var attivaHero = false;

window.addEventListener("scroll", function(){
  if (window.scrollY > 200) {
    if (!attivaHero) {
      attivaHero = true;
      navbar.classList.add("bg-dark");
      if(screen.width >= 1500)
        link.classList.add("sposta");
      if (window.innerWidth < 956)
        return;
      titolo.classList.remove("ingrandisci");
      titolo.classList.add("riduci");
    }
  } else {
    if (attivaHero) {
      attivaHero = false;
      navbar.classList.remove("bg-dark");
      link.classList.remove("sposta");
      if (window.innerWidth < 956)
        return;
      titolo.classList.remove("riduci");
      titolo.classList.add("ingrandisci");
    }
  }
});

function tabOn(id) {
  document.getElementById(id).classList.remove("tabOff");
  document.getElementById(id).classList.add("tabOn");
}

function tabOff(id) {
  document.getElementById(id).classList.remove("tabOn");
  document.getElementById(id).classList.add("tabOff");
}