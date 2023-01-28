// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const normalTextDOM = document.querySelector("#normal-text");
const encryptedTextDOM = document.querySelector("#encrypted-text");

const botonEncriptar = document.querySelector("#encriptar");
const botonDesencriptar = document.querySelector("#desencriptar");

let originalText;
let modifiedText;

botonEncriptar.addEventListener("click", () => {
	originalText = normalTextDOM.value;
	modifiedText = originalText
		.replaceAll("e", "enter")
		.replaceAll("i", "imes")
		.replaceAll("a", "ai")
		.replaceAll("o", "ober")
		.replaceAll("u", "ufat");
	encryptedTextDOM.innerHTML = modifiedText;
});

botonDesencriptar.addEventListener("click", () => {
	originalText = normalTextDOM.value;
	modifiedText = originalText
		.replaceAll("enter", "e")
		.replaceAll("imes", "i")
		.replaceAll("ai", "a")
		.replaceAll("ober", "o")
		.replaceAll("ufat", "u");
	encryptedTextDOM.innerHTML = modifiedText;
});
