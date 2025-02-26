<template>
	<BarraSuperior/>
	<mainPage/>
	<BarraInferior/>
</template>
<script>
import BarraSuperior from './components/BarraSuperior.vue';
import BarraInferior from './components/BarraInferior.vue';
import mainPage from './views/mainPage.vue';
export default {
	components: {
		BarraSuperior,
		BarraInferior,
		mainPage
	}
}
</script>
<style></style>