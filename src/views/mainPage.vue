<template>
	<div class="h-100 w-100 p-2 d-flex flex-column justify-content-between align-items-center">
		<BarraSuperior></BarraSuperior>
		<Contenido></Contenido>
		<BarraInferior></BarraInferior>
	</div>
</template>
<script>
import BarraSuperior from '@/components/BarraSuperior.vue';
import BarraInferior from '@/components/BarraInferior.vue';
import Contenido from '@/views/Contenido.vue';
export default {
	components: {
		BarraSuperior,
		BarraInferior,
		Contenido
	}
}
</script>
<style>
	
</style>