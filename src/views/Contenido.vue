<template>
	<div class="tab-content" id="nav-tabContent">
		<div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"	tabindex="0">.Inicio.</div>
		<div class="tab-pane fade" id="nav-vista" role="tabpanel" aria-labelledby="nav-vista-tab" tabindex="1">.Vista.</div>
		<div class="tab-pane fade" id="nav-buscar" role="tabpanel" aria-labelledby="nav-buscar-tab" tabindex="2">.Buscar.</div>
		<div class="tab-pane fade" id="nav-marcadores" role="tabpanel" aria-labelledby="nav-marcadores-tab" tabindex="3"><NoDisponible/></div>
		<div class="tab-pane fade" id="nav-config" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="4"><NoDisponible/></div>
	</div>
</template>
<script>
import NoDisponible from '@/components/NoDisponible.vue';
export default {
	components: {
		NoDisponible
	}
}
</script>
<style lang="">
	
</style>