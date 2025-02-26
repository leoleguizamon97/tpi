<template>
	<div id="nav-tab" role="tablist" class="d-flex align-items-center rounded rounded-4 justify-content-between px-3 mb-2" style="background-color: rgb(169, 203, 227); min-width: 300px; width: 100%; height: 55px;">
		<div data-bs-toggle="tab" class="navBarItem active"     data-bs-target="#nav-home"       @click="cambiarTitulo('Inicio')"        aria-selected="true"><i class="bi bi-house p"></i>Inicio</div>
		<div data-bs-toggle="tab" class="navBarItem"     		data-bs-target="#nav-vista"      @click="cambiarTitulo('Vista')"         aria-selected="false"><i class="bi bi-play-circle"></i>Vista</div>
		<div data-bs-toggle="tab" class="navBarItemMain" 		data-bs-target="#nav-buscar"     @click="cambiarTitulo('Buscar')"        aria-selected="false"><i class="bi bi-search"></i></div>
		<div data-bs-toggle="tab" class="navBarItem"     		data-bs-target="#nav-marcadores" @click="cambiarTitulo('Guardado')"      aria-selected="false"><i class="bi bi-bookmark-fill"></i>Guardado</div>
		<div data-bs-toggle="tab" class="navBarItem"     		data-bs-target="#nav-config"     @click="cambiarTitulo('Configuracion')" aria-selected="false"><i class="bi bi-gear"></i>Config.</div>
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
.bi {
	font-size: large;
}
.navBarItem {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgb(169, 203, 227);
	border-radius: 10px;
	border: none;
	text-decoration: none;
	color: rgb(39, 90, 142);
	height: 50px;
	min-width: 50px;
	width: fit-content;
	font-size: medium;
}

@media (max-width: 425px) {
	.navBarItem {
		font-size: x-small;
		/* Tamaño para pantallas pequeñas (móviles) */
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
	border: none;
	text-decoration: none;
	color: rgb(211, 229, 241);
	height: 70px;
	width: 70px;
	font-size: medium;
}

.navBarItemMain:hover {
	background-color: rgb(169, 203, 227);
	color: rgb(39, 90, 142);
}
</style>