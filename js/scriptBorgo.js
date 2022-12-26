document.getElementById("mainNav").classList.add("bg-dark");
document.getElementById("navbar").classList.add("sposta");
document.getElementById("titoloContainer").className = "riduci";

var altezza = window.innerHeight;
var punti = [document.getElementById("p1").classList, document.getElementById("p2").classList, document.getElementById("p3").classList, document.getElementById("p4").classList, document.getElementById("p5").classList, document.getElementById("p6").classList];
document.getElementById("p1").classList.replace("rimpicciolisci", "ingrandisci");

window.addEventListener("scroll", function(){
	if (scrollY < altezza)
		attiva(1);
	else if ((scrollY >= altezza) && (scrollY < altezza * 2))
		attiva(2);
	else if ((scrollY >= altezza * 2) && (scrollY < altezza * 3))
		attiva(3);
	else if ((scrollY >= altezza * 3) && (scrollY < altezza * 4))
		attiva(4);
	else if ((scrollY >= altezza * 4) && (scrollY < altezza * 5))
		attiva(5);
	else if ((scrollY >= altezza * 5) && (scrollY < altezza * 6))
		attiva(6);
});

function attiva(n) {
	var i;
	for (i = 0; i < 6; i++){
		if (i != n-1) 
			punti[i].replace("ingrandisci", "rimpicciolisci");
		else
			punti[i].replace("rimpicciolisci", "ingrandisci");
	}
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})