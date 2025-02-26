import router from '@/main'

function cambiarTitulo(titulo){
	document.getElementById("tituloGeneral").innerHTML = titulo
}

function ingreso(){
	let usuario = document.getElementById("InputEmail1").value
	let contraseña = document.getElementById("InputPassword1").value

	console.log("Usuario: " + usuario)
	console.log("Contraseña: " + contraseña)
	//Logica de back

	router.push("/")
}

export default {
		cambiarTitulo,
		ingreso
}