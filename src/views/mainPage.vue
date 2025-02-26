<template>
	<div class="h-100 w-100 p-2 d-flex flex-column justify-content-between align-items-center">
		<BarraSuperior></BarraSuperior>
		<BarraInferior></BarraInferior>
	</div>
</template>
<script>
import BarraSuperior from '@/components/BarraSuperior.vue';
import BarraInferior from '@/components/BarraInferior.vue';
export default {
	components: {
		BarraSuperior,
		BarraInferior,
	}
}
</script>
<style>
	
</style>