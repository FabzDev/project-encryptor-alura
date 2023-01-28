const normalTextDOM = document.querySelector("#normal-text");
const encryptedTextDOM = document.querySelector("#encrypted-text");

const botonBack = document.querySelector(".boton-back");
const botonEncriptar = document.querySelector("#encriptar");
const botonDesencriptar = document.querySelector("#desencriptar");
const botonCopiar = document.querySelector("#copiar");

const contenedorInactivo = document.querySelector(".contenedorpadre-encriptador-inactivo");
const contenedorActivo = document.querySelector(".contenedorpadre-encriptador-activo");

let originalText;
let modifiedText;

botonEncriptar.addEventListener("click", () => {
	originalText = normalTextDOM.value.toLowerCase();
	console.log(originalText);
	if (originalText) {
		contenedorInactivo.style.display = "none";
		contenedorActivo.style.display = "block";
		modifiedText = originalText
			.replaceAll("e", "rm23l")
			.replaceAll("i", "en34k")
			.replaceAll("a", "asdf3")
			.replaceAll("o", "lk23j")
			.replaceAll("u", "s2e1");
		encryptedTextDOM.innerHTML = modifiedText;
	} else {
		contenedorInactivo.style.display = "block";
		contenedorActivo.style.display = "none";
	}
});

botonDesencriptar.addEventListener("click", () => {
	originalText = normalTextDOM.value;
	if (originalText) {
		contenedorInactivo.style.display = "none";
		contenedorActivo.style.display = "block";
		modifiedText = originalText
			.replaceAll("rm23l", "e")
			.replaceAll("en34k", "i")
			.replaceAll("asdf3", "a")
			.replaceAll("lk23j", "o")
			.replaceAll("s2e1", "u");
		encryptedTextDOM.innerHTML = modifiedText;
	} else {
		contenedorInactivo.style.display = "block";
		contenedorActivo.style.display = "none";
	}
});

botonBack.addEventListener("click", () => {
	contenedorInactivo.style.display = "block";
	contenedorActivo.style.display = "none";
	normalTextDOM.value = "";
});

botonCopiar.addEventListener("click", async () => {
	try {
		await navigator.clipboard.writeText(encryptedTextDOM.value);
		alert("Mensaje copiado");
	} catch (err) {
		console.error("Failed to copy text: ", err);
	}
});
