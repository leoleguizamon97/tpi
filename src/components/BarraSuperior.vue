<template>
	<div class="d-flex align-items-center justify-content-between m-2 w-100" style=" height: 50px;">
		<div style="width: 40px;"></div>
		<div id="tituloGeneral" class="fs-4">Titulo de la vista</div>
		<div class="dropdown">
			<button class="btn rounded-circle p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
				<img class="rounded-circle border border-1 border-dark-subtle" src="@/assets/favicon.png" alt="icon" style="height: 40px; width: 40px;">
			</button>
			<ul class="dropdown-menu dropdown-menu-end">
				<li><a class="dropdown-item disabled" href="#" aria-disabled="true">Ayuda</a></li>
				<li><a class="dropdown-item disabled" href="#" aria-disabled="true">Mas informacion</a></li>
				<li>
					<hr class="dropdown-divider">
				</li>
				<li><router-link to="/login" class="dropdown-item">Cerrar Sesión</router-link></li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>