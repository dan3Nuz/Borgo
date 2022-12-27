document.getElementById("mainNav").classList.add("bg-dark");
document.getElementById("navbar").classList.add("sposta");
document.getElementById("titoloContainer").className = "riduci";

setTimeout(function () {
	document.getElementById("fade1").classList.replace("nascosto", "visibile");
}, 500);
setTimeout(function () {
	document.getElementById("fade2").classList.replace("nascosto", "visibile");
}, 500);
setTimeout(function () {
	document.getElementById("fade3").classList.replace("nascosto", "visibile");
}, 1500);
setTimeout(function () {
	document.getElementById("fade4").classList.replace("nascosto", "visibile");
}, 2000);
setTimeout(function () {
	document.getElementById("fade5").classList.replace("nascosto", "visibile");
}, 2500);
setTimeout(function () {
	document.getElementById("fade6").classList.replace("nascosto", "visibile");
}, 3000);

document.getElementById("pacchetto0").classList.replace("d-none","fadeIn");
document.getElementById("pacchetto1").classList.replace("d-none","fadeIn");
window.addEventListener("scroll", function () {
	if (window.scrollY > 200) {
		document.getElementById("pacchetto2").classList.replace("d-none","fadeIn");
	}
	if (window.scrollY > 600) {
		document.getElementById("pacchetto3").classList.replace("d-none","fadeIn");
	}
	if (window.scrollY > 1200) {
		document.getElementById("pacchetto4").classList.replace("d-none","fadeIn");
	}
});

function frecciaOn() {
	document.getElementById("freccia").style.color = "white";
	document.getElementById("freccia").style.transform = "scale(5)";
	document.getElementById("freccia").style.textShadow = "3px 3px 3px rgb(33, 37, 41)";
}

function frecciaOff() {
	document.getElementById("freccia").style.color = "rgb(33, 37, 41)";
	document.getElementById("freccia").style.transform = "scale(-5)";
	document.getElementById("freccia").style.textShadow = "none";
};

function verifica() {
	if (document.forms.form1.nome.value == "") {
		window.alert("Inserire il campo nome");
		return false;
	}
	else if(document.forms.form1.cognome.value == "") {
		window.alert("Inserire il campo cognome");
		return false;
	}
	else if (document.forms.form1.eta.value == "") {
		window.alert("Inserire l'età");
		return false;
	}
	else if (document.forms.form1.eta.value < 18) {
		window.alert("Inserire l'età di un maggiorenne");
		return false;
	}
	else if (document.forms.form1.genere.value == "0") {
		window.alert("Inserire il genere");
		return false;
	}
	else if (document.forms.form1.paese.value == "") {
		window.alert("Inserire il paese");
		return false;
	}
	else if (document.forms.form1.indirizzo.value == "") {
		window.alert("Inserire l'indirizzo");
		return false;
	}
	else if (document.forms.form1.email.value == "") {
		window.alert("Inserire l'email");
		return false;
	}
	else if (document.forms.form1.tel.value == "") {
		window.alert("Inserire il numero di telefono");
		return false;
	}
	else if (document.forms.form1.tel.value < 100000000) {
		window.alert("Inserire un numero di telefono valido");
		return false;
	}
	else if (document.forms.form1.pacchetto.value == "0") {
		window.alert("Scegliere il pacchetto");
		return false;
	}
	else if (!document.forms.form1.dati.checked) {
		window.alert("Acconsentire ai dati personali");
		return false;
	}
	return true;
}