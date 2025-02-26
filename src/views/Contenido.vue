<template>
	<div class="tab-content h-100 w-100" id="nav-tabContent">
		<div class="h-100 w-100 tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"	tabindex="0">.Inicio.</div>
		<div class="h-100 w-100 tab-pane fade" id="nav-vista" role="tabpanel" aria-labelledby="nav-vista-tab" tabindex="1">.Vista.</div>
		<div class="h-100 w-100 tab-pane fade" id="nav-buscar" role="tabpanel" aria-labelledby="nav-buscar-tab" tabindex="2"><Busqueda/></div>
		<div class="h-100 w-100 tab-pane fade" id="nav-marcadores" role="tabpanel" aria-labelledby="nav-marcadores-tab" tabindex="3"><NoDisponible/></div>
		<div class="h-100 w-100 tab-pane fade" id="nav-config" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="4"><NoDisponible/></div>
	</div>
</template>
<script>
import NoDisponible from '@/components/NoDisponible.vue';
import Busqueda from './Busqueda.vue';
import Inicio from './Inicio.vue';
import Vista from './Vista.vue';

export default {
	components: {
		NoDisponible,
		Busqueda,
		Inicio,
		Vista
	}
}
</script>
<style>
	
</style>