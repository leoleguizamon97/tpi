<template>
	<div class="card mb-3" style="max-width: 540px;">
		<div class="row g-0 p-1">
			<div class="col-4">
				<img :src=info.imagen class="img-fluid rounded-start" alt="Imagen">
			</div>
			<div class="col-8">
				<div class="card-body">
					<h5 class="card-title">{{ info.document_id }}</h5>
					<p class="card-text">{{ info.filename }}</p>
					<p class="card-text"><small class="text-body-secondary">Similitud: {{ info.similarity }}</small></p>
				</div>
			</div>
			<button type="button" class="btn btn-primary">Ver manual {{ info.titulo }}</button>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		info: Object
	}

}
</script>
<style></style>