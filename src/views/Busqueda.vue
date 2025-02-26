<template>
	<div class="h-100 w-100 d-flex flex-column align-items-center gap-2">
		<form class="d-flex w-75" role="search" v-on:submit.prevent="cargarResultados()">
			<input class="form-control me-2 border border-1 border-secondary" type="search" id="busquedaECBE"
				placeholder="Buscar ECBE o preguntar!" aria-label="Search" required>
			<button class="btn btn-outline-secondary" type="submit"><i class="bi bi-search"></i></button>
		</form>
		<div class="w-100 rounded-top-3 border-bottom border-dark border-1"
			style="background-color: rgb(169, 203, 227);">
			<p v-if="!esRespuesta" class="text-center p-0 m-1 opacity-25">Resultados</p>
			<p v-else class="text-center p-0 m-1">{{ dataRespuesta.content }}</p>
		</div>
		<div v-if="!esRespuesta" class="card mb-3" style="max-width: 540px;">
			<div class="row g-0">
				<div class="col-4">
					<img src="@/assets/grey.png" class="img-thumbnail rounded-start w-100 h-100" alt="Imagen">
				</div>
				<div class="col-8">
					<div class="card-body">
						<p class="card-text placeholder-glow">
							<span class="placeholder col-7"></span>
							<span class="placeholder col-4"></span>
							<span class="placeholder col-4"></span>
							<span class="placeholder col-6"></span>
							<span class="placeholder col-8"></span>
						</p>
					</div>
				</div>
			</div>
		</div>
		<FichaECBE v-else :info="dataRespuesta" />
	</div>
</template>
<script>
import FichaECBE from '@/components/FichaECBE.vue';
import funciones from '@/assets/logica.js'

export default {
	methods: {
		async cargarResultados() {
			try {
				await funciones.buscarECBE().then((res) => {
					this.dataRespuesta = res
					this.esRespuesta = true
				});
			} catch (error) {
				console.log(error)
			}
		}
	},
	data: () => ({
		esRespuesta: false,
		dataRespuesta:
		{
			"id": "uuid_del_fragmento",
			"content": "Texto coincidente",
			"document_id": "uuid_del_documento",
			"filename": "archivo.pdf",
			"similarity": 0.85
		}
	}),
	components: {
		FichaECBE,
	}
}
</script>
<style></style>