<template>
	<div id="empleado-nuevo">
		<h3>Agregar Empleado</h3>
		<div class="row">
			<form @submit.prevent="guardarEmpleado" class="col s12">
				<div class="row">
					<div class="input-field col s12">
						<input type="text" v-model="empleado_id" required="">
						<label>Codigo</label>
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<input type="text" v-model="nombre" required="">
						<label>Nombre</label>
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<input type="text" v-model="dept" required="">
						<label>Departamento</label>
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<input type="text" v-model="puesto" required="">
						<label>Puesto</label>
					</div>
				</div>
			<button type="submit" class="btn">GUARDAR</button>
			<router-link to="/" class="btn grey">CANCELAR</router-link>
			</form>
		</div>
	</div>
</template>

<script>
	import db from './firebaseInit'
	export default {
		name: 'empleado-nuevo',
		data() {
			return {
				empleado_id: null,
				nombre: null,
				dept: null, 
				puesto: null
			}
		},
		methods: {
			guardarEmpleado () {
				db.collection('empleados').add({
					empleado_id: this.empleado_id,
					nombre: this.nombre,
					dept: this.dept,
					puesto: this.puesto
				})
				.then(docRef => this.$router.push('/'))
				.catch(error => console.log(error))
			}
		}
	}
</script>