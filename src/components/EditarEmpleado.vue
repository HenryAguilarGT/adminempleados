<template>
	<div id="editar-empleado">
		<h3>Editar Empleado</h3>
		<div class="row">
			<form @submit.prevent="actualizarEmpleado" class="col s12">
				<div class="row">
					<div class="input-field col s12">
						<input type="text" v-model="empleado_id" required="" disabled="">
						<!-- <label>Codigo</label> -->
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<input type="text" v-model="nombre" required="">
						<!-- <label>Nombre</label> -->
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<input type="text" v-model="dept" required="">
						<!-- <label>Departamento</label> -->
					</div>
				</div>
				<div class="row">
					<div class="input-field col s12">
						<input type="text" v-model="puesto" required="">
						<!-- <label>Puesto</label> -->
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
		name: 'editar-empleado',
		data() {
			return {
				empleado_id: null,
				nombre: null,
				dept: null,
				puesto: null
			}
		},
		beforeRouteEnter(to, from, next) {
			db.collection('empleados').where('empleado_id',
				'==', to.params.empleado_id).get()
			.then(querySnapshot => {
				querySnapshot.forEach(doc => {
					next(vm => {
						vm.empleado_id = doc.data().empleado_id
						vm.nombre = doc.data().nombre
						vm.dept = doc.data().dept
						vm.puesto = doc.data().puesto
					})
				})
			})
		},
		watch: {
			'$route': 'fetchData'
		},
		methods: {
			fetchData() {
				db.collection('empleados').where('empleado_id', '==', 
				this.$route.params.empleado_id).get().then(querySnapshot => {
					querySnapshot.forEach(doc => {
						this.empleado_id = doc.data().empleado_id
						this.nombre = doc.data().nombre
						this.dept = doc.data().dept
						this.puesto = doc.data().puesto
					})
				})
			},
			actualizarEmpleado () {
				db.collection('empleados').where('empleado_id', '==', this.$route.params.empleado_id).get().then((querySnapshot) => {
          		querySnapshot.forEach((doc) => {
            	doc.ref.update({
              	empleado_id: this.empleado_id,
              	nombre: this.nombre,
              	dept: this.dept,
              	puesto: this.puesto
            })
            .then(() => {
              this.$router.push({ name: 'ver-empleado', params: { empleado_id: this.empleado_id }})
            });
          })
        })
      }
    }
  }
</script>