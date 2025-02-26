<template>
	<div class="d-flex flex-column align-items-center justify-content-center w-100">
		<img class="img rounded-circle m-4" src="/public/favicon.png" alt=""
			style="height: 100px; width: 100px; border: 5px solid rgb(39, 90, 142);">
		<form class="justify-content-center w-50" style="min-width: 250px;">
			<div class="mb-3">
				<input type="email" class="form-control w-100" id="InputEmail1" aria-describedby="emailHelp"
					placeholder="usuario@correo.com">
				<label for="InputEmail1" class="form-label">Correo o Usuario</label>
			</div>
			<div class="mb-3">
				<input type="password" class="form-control" id="InputPassword1" placeholder="123456">
				<label for="InputPassword1" class="form-label">Contraseña</label>
			</div>
			<button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
		</form>
	</div>
</template>
<script>
export default {

}
</script>
<style></style>