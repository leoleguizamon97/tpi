<template>
	<div class="d-flex align-items-center rounded rounded-4 justify-content-between px-3 mb-2"
		style="background-color: rgb(169, 203, 227); height: 55px; min-width: 300px; width: 100%;">
		<router-link to="/" @click="cambiarTitulo('Inicio')" class="navBarItem"><i
				class="bi bi-house p"></i>Inicio</router-link>
		<router-link to="/" @click="cambiarTitulo('Vista')" class="navBarItem"><i
				class="bi bi-play-circle"></i>Vista</router-link>
		<router-link to="/" @click="cambiarTitulo('Buscar')" class="navBarItemMain"
			style="font-size:x-large; padding: 35px;"><i class="bi bi-search"></i></router-link>
		<router-link to="/" @click="cambiarTitulo('Guardado')" class="navBarItem"><i
				class="bi bi-bookmark-fill"></i>Guardado</router-link>
		<router-link to="/" @click="cambiarTitulo('Configuracion')" class="navBarItem"><i
				class="bi bi-gear"></i>Config.</router-link>
	</div>
</template>
<script>
import funciones from '../assets/logica.js'
export default {
	methods: {
		cambiarTitulo(titulo) {
			funciones.cambiarTitulo(titulo)
		}
	}
}
</script>
<style>
.bi{
	font-size: large;
}
.navBarItem {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgb(169, 203, 227);
	border-radius: 10px;
	text-decoration: none;
	color: rgb(39, 90, 142);
	height: 50px;
	min-width: 50px;
	width: fit-content;
	font-size: medium;
}

@media (max-width: 425px) {
  .navBarItem {
    font-size: x-small; /* Tamaño para pantallas pequeñas (móviles) */
  }
}


.navBarItem:hover {
	background-color: rgb(39, 90, 142);
	color: rgb(211, 229, 241);
}

.navBarItemMain {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgb(39, 90, 142);
	border-radius: 10px;
	text-decoration: none;
	color: rgb(211, 229, 241);
	height: 50px;
	min-width: 50px;
	width: fit-content;
	font-size: medium;
}

.navBarItemMain:hover {
	background-color: rgb(169, 203, 227);
	color: rgb(39, 90, 142);
}
</style>