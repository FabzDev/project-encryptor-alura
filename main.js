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
		.replaceAll("e", "rm23l")
		.replaceAll("i", "en34k")
		.replaceAll("a", "asdf3")
		.replaceAll("o", "lk23j")
		.replaceAll("u", "s2e1");
	encryptedTextDOM.innerHTML = modifiedText;
});

botonDesencriptar.addEventListener("click", () => {
	originalText = normalTextDOM.value;
	modifiedText = originalText
		.replaceAll("rm23l", "e")
		.replaceAll("en34k", "i")
		.replaceAll("asdf3", "a")
		.replaceAll("lk23j", "o")
		.replaceAll("s2e1", "u");
	encryptedTextDOM.innerHTML = modifiedText;
});
