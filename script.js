function FazerAcao(nome) {
	var area = document.getElementById("area");
	var texto = prompt("qual seu nome?");

	area.innerHTML = nome+" "+texto;
}