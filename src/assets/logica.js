import router from '@/main'

function cambiarTitulo(titulo) {
	document.getElementById("tituloGeneral").innerHTML = titulo
}

function ingreso() {
	let usuario = document.getElementById("InputEmail1").value
	let contraseña = document.getElementById("InputPassword1").value

	console.log("Usuario: " + usuario)
	console.log("Contraseña: " + contraseña)
	//Logica de back

	router.push("/")
}

async function buscarECBE() {
	return {
		"id": "uuid_del_fragmento",
		"content": "Texto coincidente",
		"document_id": "uuid_del_documento",
		"filename": "archivo.pdf",
		"similarity": 0.85
	}
}


export default {
	cambiarTitulo,
	ingreso,
	buscarECBE
}