const normalTextDOM = document.querySelector("#text-input");
const encryptedTextDOM = document.querySelector("#text-output");

const botonBack = document.querySelector(".header__back-btn");
const botonEncriptar = document.querySelector("#encrypt");
const botonDesencriptar = document.querySelector("#decrypt");
const botonCopiar = document.querySelector("#copy");

const contenedorInactivo = document.querySelector(".search");
const contenedorActivo = document.querySelector(".result");

let originalText;
let modifiedText;

botonEncriptar.addEventListener("click", () => {
	originalText = normalTextDOM.value.toLowerCase();
	if (originalText) {
		contenedorInactivo.style.display = "none";
		contenedorActivo.style.display = "flex";
		modifiedText = originalText
			.replaceAll("e", "rm23l")
			.replaceAll("i", "en34k")
			.replaceAll("a", "asdf3")
			.replaceAll("o", "lk23j")
			.replaceAll("u", "s2e1");
		encryptedTextDOM.innerHTML = modifiedText;
	} else {
		contenedorInactivo.style.display = "flex";
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
		contenedorInactivo.style.display = "flex";
		contenedorActivo.style.display = "none";
	}
});

botonBack.addEventListener("click", () => {
	contenedorInactivo.style.display = "flex";
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

window.addEventListener("beforeunload", () => {
	normalTextDOM.value = "";
});
